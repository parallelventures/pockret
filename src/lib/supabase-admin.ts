import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types';
import { SUPABASE_URL } from '@/lib/env';
import { SUPABASE_SERVICE_ROLE_KEY } from '@/lib/env.server';

// Note: This client should ONLY be used in server-side contexts (API routes, Server Actions)
// where the Service Role Key is safe. NEVER expose this key to the client.

export const supabaseAdmin = createClient<any>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Function to create admin client (for consistency with server client pattern)
export function createAdminClient() {
    return supabaseAdmin;
}
