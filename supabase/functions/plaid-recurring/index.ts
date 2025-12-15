// Edge Function: Get/Sync Recurring Transactions
// Deploy: supabase functions deploy plaid-recurring

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import {
    plaidRequest,
    AccountsResponse,
    RecurringTransactionsResponse,
} from '../_shared/plaid.ts';

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

        // Create admin client for database operations
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        // GET: Fetch stored recurring transactions
        if (req.method === 'GET') {
            const { data: recurring, error } = await supabaseAdmin
                .from('plaid_recurring_transactions')
                .select('*')
                .eq('user_id', user.id)
                .eq('is_active', true)
                .order('amount', { ascending: false });

            if (error) {
                console.error('Error fetching recurring transactions:', error);
                return new Response(
                    JSON.stringify({ error: 'Failed to fetch recurring transactions' }),
                    { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }

            // Calculate total monthly subscription cost
            const totalMonthly = recurring?.reduce((sum, item) => {
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
            }, 0) || 0;

            return new Response(
                JSON.stringify({
                    recurring: recurring || [],
                    total_monthly: Math.round(totalMonthly * 100) / 100,
                    count: recurring?.length || 0,
                }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // POST: Sync recurring transactions from Plaid
        if (req.method === 'POST') {
            // Get all Plaid items for this user
            const { data: items, error: itemsError } = await supabaseAdmin
                .from('plaid_items')
                .select('access_token, item_id')
                .eq('user_id', user.id);

            if (itemsError || !items?.length) {
                return new Response(
                    JSON.stringify({ error: 'No linked bank accounts found' }),
                    { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }

            let totalRecurring = 0;

            for (const item of items) {
                try {
                    // Get account IDs for this item
                    const accountsResponse = await plaidRequest<AccountsResponse>('/accounts/get', {
                        access_token: item.access_token,
                    });
                    const accountIds = accountsResponse.accounts.map((a) => a.account_id);

                    // Fetch recurring transactions
                    const recurringResponse = await plaidRequest<RecurringTransactionsResponse>(
                        '/transactions/recurring/get',
                        {
                            access_token: item.access_token,
                            account_ids: accountIds,
                        }
                    );

                    // Process outflow streams (subscriptions we pay)
                    const outflowStreams = recurringResponse.outflow_streams || [];

                    for (const stream of outflowStreams) {
                        const recurringData = {
                            user_id: user.id,
                            stream_id: stream.stream_id,
                            account_id: stream.account_id,
                            description: stream.description,
                            merchant_name: stream.merchant_name || null,
                            amount: stream.average_amount?.amount || stream.last_amount?.amount || 0,
                            iso_currency_code: stream.average_amount?.iso_currency_code || 'USD',
                            frequency: stream.frequency,
                            category: stream.category || [],
                            first_date: stream.first_date,
                            last_date: stream.last_date,
                            is_active: stream.is_active,
                            status: stream.status,
                            updated_at: new Date().toISOString(),
                        };

                        await supabaseAdmin
                            .from('plaid_recurring_transactions')
                            .upsert(recurringData, { onConflict: 'stream_id' });

                        totalRecurring++;
                    }
                } catch (itemError) {
                    console.error(`Error processing item ${item.item_id}:`, itemError);
                    // Continue with other items
                }
            }

            return new Response(
                JSON.stringify({ success: true, synced_count: totalRecurring }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error in recurring endpoint:', error);
        return new Response(
            JSON.stringify({ error: error.message || 'Failed to process recurring transactions' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
