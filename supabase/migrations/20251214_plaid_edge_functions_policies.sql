-- ============================================
-- Migration: Add policies for Edge Functions
-- ============================================
-- Edge Functions use the service_role key which bypasses RLS
-- But we also need insert/update/delete policies for the anon key in case of fallback
-- This migration adds the missing write policies

-- ============================================
-- PLAID_ITEMS - Additional policies
-- ============================================

-- Update policy for plaid_items (needed for cursor sync)
create policy "Users can update their own plaid items" on public.plaid_items
  for update using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================
-- PLAID_ACCOUNTS - Additional policies  
-- ============================================

-- Insert policy for plaid_accounts (through plaid_items)
create policy "Users can insert accounts for their own items" on public.plaid_accounts
  for insert with check (
    exists (
      select 1 from public.plaid_items
      where plaid_items.id = plaid_accounts.plaid_item_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- Update policy for plaid_accounts
create policy "Users can update their own plaid accounts" on public.plaid_accounts
  for update using (
    exists (
      select 1 from public.plaid_items
      where plaid_items.id = plaid_accounts.plaid_item_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- Delete policy for plaid_accounts
create policy "Users can delete their own plaid accounts" on public.plaid_accounts
  for delete using (
    exists (
      select 1 from public.plaid_items
      where plaid_items.id = plaid_accounts.plaid_item_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- ============================================
-- PLAID_TRANSACTIONS - Additional policies
-- ============================================

-- Insert policy for plaid_transactions
create policy "Users can insert transactions for their own accounts" on public.plaid_transactions
  for insert with check (
    exists (
      select 1 from public.plaid_accounts
      join public.plaid_items on plaid_items.id = plaid_accounts.plaid_item_id
      where plaid_accounts.id = plaid_transactions.plaid_account_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- Update policy for plaid_transactions
create policy "Users can update their own transactions" on public.plaid_transactions
  for update using (
    exists (
      select 1 from public.plaid_accounts
      join public.plaid_items on plaid_items.id = plaid_accounts.plaid_item_id
      where plaid_accounts.id = plaid_transactions.plaid_account_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- Delete policy for plaid_transactions
create policy "Users can delete their own transactions" on public.plaid_transactions
  for delete using (
    exists (
      select 1 from public.plaid_accounts
      join public.plaid_items on plaid_items.id = plaid_accounts.plaid_item_id
      where plaid_accounts.id = plaid_transactions.plaid_account_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- ============================================
-- PLAID_RECURRING_TRANSACTIONS - Additional policies
-- ============================================

-- Insert policy
create policy "Users can insert their own recurring transactions" on public.plaid_recurring_transactions
  for insert with check (auth.uid() = user_id);

-- Update policy
create policy "Users can update their own recurring transactions" on public.plaid_recurring_transactions
  for update using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Delete policy
create policy "Users can delete their own recurring transactions" on public.plaid_recurring_transactions
  for delete using (auth.uid() = user_id);

-- ============================================
-- GRANT permissions for service role
-- ============================================
-- The service_role has full access by default, but we explicitly grant
-- to ensure Edge Functions work correctly

grant all on public.plaid_items to service_role;
grant all on public.plaid_accounts to service_role;
grant all on public.plaid_transactions to service_role;
grant all on public.plaid_recurring_transactions to service_role;

-- Grant sequence permissions for UUID generation
grant usage on all sequences in schema public to service_role;

-- ============================================
-- Create function to get user_id from plaid_item
-- ============================================
-- This helper function can be used in Edge Functions to verify ownership

create or replace function public.get_plaid_item_user_id(item_id_param text)
returns uuid
language sql
security definer
as $$
  select user_id from public.plaid_items where item_id = item_id_param limit 1;
$$;

-- Grant execute to authenticated users
grant execute on function public.get_plaid_item_user_id(text) to authenticated;
grant execute on function public.get_plaid_item_user_id(text) to service_role;
