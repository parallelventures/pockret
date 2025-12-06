import 'server-only';

export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'service_role_placeholder';
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder';

// Optional: Add validation logic here if strict runtime checks are desired
// if (process.env.NODE_ENV === 'production' && (!SUPABASE_SERVICE_ROLE_KEY || ...)) { ... }
