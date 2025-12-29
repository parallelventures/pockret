-- Add onboarding tracking columns to users table
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS onboarding_completed boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS has_connected_bank boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS onboarding_goal text;

-- Comment for clarity
COMMENT ON COLUMN public.users.onboarding_completed IS 'Whether the user has completed the onboarding flow';
COMMENT ON COLUMN public.users.has_connected_bank IS 'Whether the user has connected a bank account via Plaid';
COMMENT ON COLUMN public.users.onboarding_goal IS 'The goal selected during onboarding (cancel, refunds, overcharges, settlements, all)';
