'use client';

import { useCallback, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { plaidFunctions } from '@/lib/plaid-edge-functions';

interface PlaidItem {
    id: string;
    institution_id: string | null;
    institution_name: string | null;
    created_at: string;
    plaid_accounts: PlaidAccount[];
}

interface PlaidAccount {
    id: string;
    account_id: string;
    name: string;
    official_name: string | null;
    type: string;
    subtype: string | null;
    mask: string | null;
    current_balance: number | null;
    available_balance: number | null;
    iso_currency_code: string;
}

export function usePlaidAccounts() {
    const [items, setItems] = useState<PlaidItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchAccounts = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Fetch accounts directly from Supabase (no secrets needed)
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                throw new Error('Unauthorized');
            }

            const { data: fetchedItems, error: fetchError } = await supabase
                .from('plaid_items')
                .select(`
                    id,
                    institution_id,
                    institution_name,
                    created_at,
                    plaid_accounts (
                        id,
                        account_id,
                        name,
                        official_name,
                        type,
                        subtype,
                        mask,
                        current_balance,
                        available_balance,
                        iso_currency_code
                    )
                `)
                .eq('user_id', user.id);

            if (fetchError) {
                throw new Error(fetchError.message);
            }

            setItems(fetchedItems || []);
            return fetchedItems;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return [];
        } finally {
            setIsLoading(false);
        }
    }, []);

    const unlinkAccount = useCallback(async (itemId: string) => {
        try {
            // Uses Supabase Edge Function via plaidFunctions helper
            await plaidFunctions.unlinkAccount(itemId);

            // Refresh accounts after unlinking
            await fetchAccounts();
            return true;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return false;
        }
    }, [fetchAccounts]);

    // Calculate total balance across all accounts
    const totalBalance = items.reduce((total, item) => {
        const itemTotal = item.plaid_accounts?.reduce((acc, account) => {
            return acc + (account.available_balance || account.current_balance || 0);
        }, 0) || 0;
        return total + itemTotal;
    }, 0);

    // Flatten all accounts
    const allAccounts = items.flatMap((item) =>
        (item.plaid_accounts || []).map((account) => ({
            ...account,
            institution_name: item.institution_name,
        }))
    );

    return {
        items,
        allAccounts,
        totalBalance,
        isLoading,
        error,
        fetchAccounts,
        unlinkAccount,
    };
}
