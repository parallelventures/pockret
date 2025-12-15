// Edge Function: Create Plaid Link Token
// Deploy: supabase functions deploy plaid-create-link-token
// Secrets: supabase secrets set PLAID_CLIENT_ID=xxx PLAID_SECRET=xxx PLAID_ENV=sandbox

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import {
    plaidRequest,
    LinkTokenResponse,
    PLAID_PRODUCTS,
    PLAID_COUNTRY_CODES,
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

        // Create link token via Plaid API
        const response = await plaidRequest<LinkTokenResponse>('/link/token/create', {
            user: {
                client_user_id: user.id,
            },
            client_name: 'Pockret',
            products: PLAID_PRODUCTS,
            country_codes: PLAID_COUNTRY_CODES,
            language: 'en',
        });

        return new Response(
            JSON.stringify({
                link_token: response.link_token,
                expiration: response.expiration,
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error creating link token:', error);
        return new Response(
            JSON.stringify({ error: error.message || 'Failed to create link token' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
