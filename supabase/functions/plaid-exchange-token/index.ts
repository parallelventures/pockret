// Edge Function: Exchange Plaid Public Token for Access Token
// Deploy: supabase functions deploy plaid-exchange-token

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import {
    plaidRequest,
    TokenExchangeResponse,
    AccountsResponse,
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

        // Parse request body
        const { public_token, metadata } = await req.json();

        if (!public_token) {
            return new Response(
                JSON.stringify({ error: 'Missing public_token' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Exchange public token for access token
        const exchangeResponse = await plaidRequest<TokenExchangeResponse>('/item/public_token/exchange', {
            public_token,
        });

        const accessToken = exchangeResponse.access_token;
        const itemId = exchangeResponse.item_id;

        // Get institution details if available
        const institutionId = metadata?.institution?.institution_id || null;
        const institutionName = metadata?.institution?.name || null;

        // Create admin client for database operations
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        // Store the access token in the database
        const { data: plaidItem, error: insertError } = await supabaseAdmin
            .from('plaid_items')
            .insert({
                user_id: user.id,
                access_token: accessToken,
                item_id: itemId,
                institution_id: institutionId,
                institution_name: institutionName,
            })
            .select()
            .single();

        if (insertError) {
            console.error('Error storing Plaid item:', insertError);
            return new Response(
                JSON.stringify({ error: 'Failed to store bank connection' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Fetch and store accounts
        const accountsResponse = await plaidRequest<AccountsResponse>('/accounts/get', {
            access_token: accessToken,
        });

        const accounts = accountsResponse.accounts.map((account) => ({
            plaid_item_id: plaidItem.id,
            account_id: account.account_id,
            name: account.name,
            official_name: account.official_name || null,
            type: account.type,
            subtype: account.subtype || null,
            mask: account.mask || null,
            current_balance: account.balances.current,
            available_balance: account.balances.available,
            iso_currency_code: account.balances.iso_currency_code || 'USD',
        }));

        const { error: accountsError } = await supabaseAdmin
            .from('plaid_accounts')
            .insert(accounts);

        if (accountsError) {
            console.error('Error storing accounts:', accountsError);
        }

        return new Response(
            JSON.stringify({
                success: true,
                item_id: itemId,
                institution_name: institutionName,
                accounts_count: accounts.length,
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error exchanging token:', error);
        return new Response(
            JSON.stringify({ error: error.message || 'Failed to exchange token' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
