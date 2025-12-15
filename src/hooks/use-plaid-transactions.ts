'use client';

import { useCallback, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { plaidFunctions } from '@/lib/plaid-edge-functions';

interface Transaction {
    id: string;
    transaction_id: string;
    amount: number;
    iso_currency_code: string;
    date: string;
    name: string;
    merchant_name: string | null;
    category: string[];
    pending: boolean;
    payment_channel: string;
    logo_url: string | null;
    account_name: string;
    account_mask: string | null;
}

interface UseTransactionsOptions {
    limit?: number;
    accountId?: string;
}

export function usePlaidTransactions(options: UseTransactionsOptions = {}) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchTransactions = useCallback(async (offset = 0) => {
        setIsLoading(true);
        setError(null);

        try {
            // Fetch transactions directly from Supabase (no secrets needed)
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                throw new Error('Unauthorized');
            }

            const limit = options.limit || 100;

            let query = supabase
                .from('plaid_transactions')
                .select(`
                    id,
                    transaction_id,
                    amount,
                    iso_currency_code,
                    date,
                    name,
                    merchant_name,
                    category,
                    pending,
                    payment_channel,
                    logo_url,
                    plaid_accounts!inner (
                        id,
                        name,
                        mask,
                        plaid_items!inner (
                            user_id
                        )
                    )
                `)
                .eq('plaid_accounts.plaid_items.user_id', user.id)
                .order('date', { ascending: false })
                .range(offset, offset + limit - 1);

            if (options.accountId) {
                query = query.eq('plaid_accounts.account_id', options.accountId);
            }

            const { data: rawTransactions, error: fetchError } = await query;

            if (fetchError) {
                throw new Error(fetchError.message);
            }

            // Transform the response to remove nested structure
            const formattedTransactions = rawTransactions?.map((tx: any) => ({
                id: tx.id,
                transaction_id: tx.transaction_id,
                amount: tx.amount,
                iso_currency_code: tx.iso_currency_code,
                date: tx.date,
                name: tx.name,
                merchant_name: tx.merchant_name,
                category: tx.category,
                pending: tx.pending,
                payment_channel: tx.payment_channel,
                logo_url: tx.logo_url,
                account_name: tx.plaid_accounts?.name,
                account_mask: tx.plaid_accounts?.mask,
            })) || [];

            setTransactions(formattedTransactions);
            return formattedTransactions;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return [];
        } finally {
            setIsLoading(false);
        }
    }, [options.limit, options.accountId]);

    const syncTransactions = useCallback(async (itemId?: string) => {
        setIsSyncing(true);
        setError(null);

        try {
            // Uses Supabase Edge Function via plaidFunctions helper
            const data = await plaidFunctions.syncTransactions(itemId);

            // Refresh transactions after sync
            await fetchTransactions();

            return data;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return null;
        } finally {
            setIsSyncing(false);
        }
    }, [fetchTransactions]);

    return {
        transactions,
        isLoading,
        isSyncing,
        error,
        fetchTransactions,
        syncTransactions,
    };
}
