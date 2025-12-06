import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/lib/env'

export const createClient = () =>
    createBrowserClient<Database>(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    )
