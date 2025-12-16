export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Use production URL in production, localhost in development
export const SITE_URL = process.env.NODE_ENV === 'production'
    ? 'https://pockret.com'
    : 'http://localhost:3000';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables");
}

