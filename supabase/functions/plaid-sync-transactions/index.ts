// Edge Function: Sync Plaid Transactions
// Deploy: supabase functions deploy plaid-sync-transactions

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import { plaidRequest, TransactionsSyncResponse } from '../_shared/plaid.ts';

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        // Create Supabase client with user's auth
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            {
                global: {
                    headers: { Authorization: req.headers.get('Authorization')! },
                },
            }
        );

        // Get the authenticated user
        const {
            data: { user },
            error: authError,
        } = await supabaseClient.auth.getUser();

        if (authError || !user) {
            return new Response(
                JSON.stringify({ error: 'Unauthorized' }),
                { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Parse optional item_id from body
        let itemId: string | undefined;
        try {
            const body = await req.json();
            itemId = body?.item_id;
        } catch {
            // No body provided, sync all items
        }

        // Create admin client for database operations
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        // Fetch the Plaid item(s)
        let query = supabaseAdmin.from('plaid_items').select('*');
        if (itemId) {
            query = query.eq('item_id', itemId);
        } else {
            query = query.eq('user_id', user.id);
        }

        const { data: plaidItems, error: itemError } = await query;

        if (itemError || !plaidItems?.length) {
            return new Response(
                JSON.stringify({ error: 'No linked bank account found' }),
                { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        let totalAdded = 0;
        let totalModified = 0;
        let totalRemoved = 0;

        for (const plaidItem of plaidItems) {
            // Fetch accounts for this item to map account_id to internal id
            const { data: accounts } = await supabaseAdmin
                .from('plaid_accounts')
                .select('id, account_id')
                .eq('plaid_item_id', plaidItem.id);

            const accountMap = new Map(accounts?.map((acc) => [acc.account_id, acc.id]) || []);

            // Use transactions sync API
            let cursor = plaidItem.cursor || undefined;
            let hasMore = true;

            while (hasMore) {
                const syncResponse = await plaidRequest<TransactionsSyncResponse>('/transactions/sync', {
                    access_token: plaidItem.access_token,
                    cursor,
                    count: 500,
                });

                const { added, modified, removed, next_cursor, has_more } = syncResponse;

                // Process added transactions
                if (added.length > 0) {
                    const newTransactions = added
                        .filter((tx) => accountMap.has(tx.account_id))
                        .map((tx) => ({
                            plaid_account_id: accountMap.get(tx.account_id),
                            transaction_id: tx.transaction_id,
                            amount: tx.amount,
                            iso_currency_code: tx.iso_currency_code || 'USD',
                            date: tx.date,
                            name: tx.name,
                            merchant_name: tx.merchant_name || null,
                            category: tx.category || [],
                            pending: tx.pending,
                            payment_channel: tx.payment_channel,
                            logo_url: tx.logo_url || null,
                        }));

                    if (newTransactions.length > 0) {
                        const { error: insertError } = await supabaseAdmin
                            .from('plaid_transactions')
                            .upsert(newTransactions, { onConflict: 'transaction_id' });

                        if (!insertError) {
                            totalAdded += newTransactions.length;
                        }
                    }
                }

                // Process modified transactions
                for (const tx of modified) {
                    const accountDbId = accountMap.get(tx.account_id);
                    if (!accountDbId) continue;

                    await supabaseAdmin
                        .from('plaid_transactions')
                        .update({
                            amount: tx.amount,
                            name: tx.name,
                            merchant_name: tx.merchant_name || null,
                            category: tx.category || [],
                            pending: tx.pending,
                        })
                        .eq('transaction_id', tx.transaction_id);

                    totalModified++;
                }

                // Process removed transactions
                if (removed.length > 0) {
                    const removedIds = removed.map((tx) => tx.transaction_id);
                    await supabaseAdmin
                        .from('plaid_transactions')
                        .delete()
                        .in('transaction_id', removedIds);

                    totalRemoved += removed.length;
                }

                cursor = next_cursor;
                hasMore = has_more;
            }

            // Update the cursor in the database
            await supabaseAdmin
                .from('plaid_items')
                .update({ cursor, updated_at: new Date().toISOString() })
                .eq('id', plaidItem.id);
        }

        return new Response(
            JSON.stringify({
                success: true,
                added: totalAdded,
                modified: totalModified,
                removed: totalRemoved,
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error syncing transactions:', error);
        return new Response(
            JSON.stringify({ error: error.message || 'Failed to sync transactions' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
