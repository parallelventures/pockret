// Edge Function: Unlink Plaid Account
// Deploy: supabase functions deploy plaid-unlink

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import { plaidRequest, ItemRemoveResponse } from '../_shared/plaid.ts';

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
        const { item_id } = await req.json();

        if (!item_id) {
            return new Response(
                JSON.stringify({ error: 'Missing item_id' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Create admin client for database operations
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        // Fetch the Plaid item
        const { data: plaidItem, error: itemError } = await supabaseAdmin
            .from('plaid_items')
            .select('*')
            .eq('item_id', item_id)
            .eq('user_id', user.id)
            .single();

        if (itemError || !plaidItem) {
            return new Response(
                JSON.stringify({ error: 'Item not found' }),
                { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Remove the item from Plaid
        try {
            await plaidRequest<ItemRemoveResponse>('/item/remove', {
                access_token: plaidItem.access_token,
            });
        } catch (plaidError) {
            console.warn('Error removing item from Plaid (may already be removed):', plaidError);
            // Continue to delete from our database even if Plaid removal fails
        }

        // Delete from our database (cascades to accounts, transactions, etc.)
        const { error: deleteError } = await supabaseAdmin
            .from('plaid_items')
            .delete()
            .eq('id', plaidItem.id);

        if (deleteError) {
            console.error('Error deleting Plaid item:', deleteError);
            return new Response(
                JSON.stringify({ error: 'Failed to unlink account' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, message: 'Bank account unlinked successfully' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error unlinking account:', error);
        return new Response(
            JSON.stringify({ error: error.message || 'Failed to unlink account' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
