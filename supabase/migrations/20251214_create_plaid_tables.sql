-- Create plaid_items table to store linked bank accounts
create table if not exists public.plaid_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  access_token text not null,
  item_id text not null unique,
  institution_id text,
  institution_name text,
  cursor text, -- For transaction sync
  consent_expiration_time timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create plaid_accounts table to store individual accounts
create table if not exists public.plaid_accounts (
  id uuid default gen_random_uuid() primary key,
  plaid_item_id uuid references public.plaid_items(id) on delete cascade not null,
  account_id text not null unique,
  name text not null,
  official_name text,
  type text not null,
  subtype text,
  mask text,
  current_balance decimal(12,2),
  available_balance decimal(12,2),
  iso_currency_code text default 'USD',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create plaid_transactions table to store transactions
create table if not exists public.plaid_transactions (
  id uuid default gen_random_uuid() primary key,
  plaid_account_id uuid references public.plaid_accounts(id) on delete cascade not null,
  transaction_id text not null unique,
  amount decimal(12,2) not null,
  iso_currency_code text default 'USD',
  date date not null,
  name text not null,
  merchant_name text,
  category text[],
  pending boolean default false,
  payment_channel text,
  logo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create plaid_recurring_transactions table
create table if not exists public.plaid_recurring_transactions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  stream_id text not null unique,
  account_id text not null,
  description text not null,
  merchant_name text,
  amount decimal(12,2) not null,
  iso_currency_code text default 'USD',
  frequency text, -- WEEKLY, BIWEEKLY, MONTHLY, etc.
  category text[],
  first_date date,
  last_date date,
  is_active boolean default true,
  status text, -- MATURE, EARLY_DETECTION, etc.
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on all tables
alter table public.plaid_items enable row level security;
alter table public.plaid_accounts enable row level security;
alter table public.plaid_transactions enable row level security;
alter table public.plaid_recurring_transactions enable row level security;

-- RLS Policies for plaid_items
create policy "Users can view their own plaid items" on public.plaid_items
  for select using (auth.uid() = user_id);

create policy "Users can insert their own plaid items" on public.plaid_items
  for insert with check (auth.uid() = user_id);

create policy "Users can delete their own plaid items" on public.plaid_items
  for delete using (auth.uid() = user_id);

-- RLS Policies for plaid_accounts (through plaid_items)
create policy "Users can view their own plaid accounts" on public.plaid_accounts
  for select using (
    exists (
      select 1 from public.plaid_items
      where plaid_items.id = plaid_accounts.plaid_item_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- RLS Policies for plaid_transactions (through plaid_accounts and plaid_items)
create policy "Users can view their own transactions" on public.plaid_transactions
  for select using (
    exists (
      select 1 from public.plaid_accounts
      join public.plaid_items on plaid_items.id = plaid_accounts.plaid_item_id
      where plaid_accounts.id = plaid_transactions.plaid_account_id
      and plaid_items.user_id = auth.uid()
    )
  );

-- RLS Policies for plaid_recurring_transactions
create policy "Users can view their own recurring transactions" on public.plaid_recurring_transactions
  for select using (auth.uid() = user_id);

-- Create indexes for better query performance
create index if not exists idx_plaid_items_user_id on public.plaid_items(user_id);
create index if not exists idx_plaid_accounts_plaid_item_id on public.plaid_accounts(plaid_item_id);
create index if not exists idx_plaid_transactions_account_id on public.plaid_transactions(plaid_account_id);
create index if not exists idx_plaid_transactions_date on public.plaid_transactions(date);
create index if not exists idx_plaid_recurring_user_id on public.plaid_recurring_transactions(user_id);
