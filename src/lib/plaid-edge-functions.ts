// Supabase Edge Functions client helper
// Calls Plaid-related Edge Functions instead of Next.js API routes

import { createClient } from '@/lib/supabase';

// Use the Supabase client's built-in functions.invoke() method
interface EdgeFunctionOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, unknown>;
}

export async function callEdgeFunction<T>(
    functionName: string,
    options: EdgeFunctionOptions = {}
): Promise<T> {
    const { method = 'POST', body } = options;

    const supabase = createClient();

    // Use Supabase's built-in functions.invoke() which handles URL and auth automatically
    const { data, error } = await supabase.functions.invoke(functionName, {
        method,
        body: body || {},
    });

    if (error) {
        throw new Error(error.message || `Edge function error`);
    }

    return data as T;
}

// Typed helpers for each Plaid function
export const plaidFunctions = {
    createLinkToken: () =>
        callEdgeFunction<{ link_token: string; expiration: string }>('plaid-create-link-token'),

    exchangeToken: (publicToken: string, metadata?: unknown) =>
        callEdgeFunction<{ success: boolean; item_id: string; institution_name: string; accounts_count: number }>(
            'plaid-exchange-token',
            { body: { public_token: publicToken, metadata } }
        ),

    syncTransactions: (itemId?: string) =>
        callEdgeFunction<{ success: boolean; added: number; modified: number; removed: number }>(
            'plaid-sync-transactions',
            { body: itemId ? { item_id: itemId } : {} }
        ),

    getRecurring: () =>
        callEdgeFunction<{ recurring: unknown[]; total_monthly: number; count: number }>(
            'plaid-recurring',
            { method: 'GET' }
        ),

    syncRecurring: () =>
        callEdgeFunction<{ success: boolean; synced_count: number }>(
            'plaid-recurring',
            { method: 'POST' }
        ),

    unlinkAccount: (itemId: string) =>
        callEdgeFunction<{ success: boolean; message: string }>(
            'plaid-unlink',
            { body: { item_id: itemId } }
        ),
};
