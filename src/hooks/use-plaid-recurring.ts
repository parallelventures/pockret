'use client';

import { useCallback, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { plaidFunctions } from '@/lib/plaid-edge-functions';

interface RecurringTransaction {
    id: string;
    stream_id: string;
    account_id: string;
    description: string;
    merchant_name: string | null;
    amount: number;
    iso_currency_code: string;
    frequency: string;
    category: string[];
    first_date: string;
    last_date: string;
    is_active: boolean;
    status: string;
}

export function usePlaidRecurring() {
    const [recurring, setRecurring] = useState<RecurringTransaction[]>([]);
    const [totalMonthly, setTotalMonthly] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchRecurring = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Fetch recurring directly from Supabase (no secrets needed)
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                throw new Error('Unauthorized');
            }

            const { data: fetchedRecurring, error: fetchError } = await supabase
                .from('plaid_recurring_transactions')
                .select('*')
                .eq('user_id', user.id)
                .eq('is_active', true)
                .order('amount', { ascending: false });

            if (fetchError) {
                throw new Error(fetchError.message);
            }

            const recurringData = (fetchedRecurring || []) as RecurringTransaction[];

            // Calculate total monthly subscription cost
            const calculatedTotalMonthly = recurringData.reduce((sum, item) => {
                let monthlyAmount = Math.abs(item.amount);
                if (item.frequency === 'WEEKLY') {
                    monthlyAmount *= 4.33;
                } else if (item.frequency === 'BIWEEKLY') {
                    monthlyAmount *= 2.17;
                } else if (item.frequency === 'SEMI_MONTHLY') {
                    monthlyAmount *= 2;
                } else if (item.frequency === 'ANNUALLY') {
                    monthlyAmount /= 12;
                }
                return sum + monthlyAmount;
            }, 0);

            setRecurring(recurringData);
            setTotalMonthly(Math.round(calculatedTotalMonthly * 100) / 100);
            return { recurring: recurringData, total_monthly: calculatedTotalMonthly };
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return { recurring: [], total_monthly: 0 };
        } finally {
            setIsLoading(false);
        }
    }, []);

    const syncRecurring = useCallback(async () => {
        setIsSyncing(true);
        setError(null);

        try {
            // Uses Supabase Edge Function via plaidFunctions helper
            const data = await plaidFunctions.syncRecurring();

            // Refresh after sync
            await fetchRecurring();

            return data;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            return null;
        } finally {
            setIsSyncing(false);
        }
    }, [fetchRecurring]);

    return {
        recurring,
        totalMonthly,
        isLoading,
        isSyncing,
        error,
        fetchRecurring,
        syncRecurring,
    };
}
