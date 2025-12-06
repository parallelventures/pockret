-- Add stripe_customer_id to users table
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS stripe_customer_id text;

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id text PRIMARY KEY,
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  status text CHECK (status IN ('active', 'trialing', 'past_due', 'canceled', 'unpaid', 'incomplete', 'incomplete_expired', 'paused')),
  price_id text,
  quantity integer,
  cancel_at_period_end boolean,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  ended_at timestamp with time zone,
  cancel_at timestamp with time zone,
  canceled_at timestamp with time zone,
  trial_start timestamp with time zone,
  trial_end timestamp with time zone,
  metadata jsonb
);

-- Enable RLS on subscriptions
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for subscriptions
CREATE POLICY "Users can view their own subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Only service role can insert/update/delete subscriptions (via webhooks)
-- No policies needed for insert/update/delete if we only use service role in webhooks, 
-- but explicit deny for anon/authenticated is good practice if not using service role bypass correctly.
-- However, RLS is "deny by default" for operations not covered by a policy. 
-- So by only adding a SELECT policy, we implicitly deny write access to users.
