-- Create tracked_subscriptions table
create table public.tracked_subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  name text not null,
  amount decimal(10,2) not null,
  currency text default 'USD',
  billing_cycle text check (billing_cycle in ('monthly', 'yearly', 'weekly', 'daily')),
  next_renewal_date date,
  source text check (source in ('email', 'manual')) default 'manual',
  status text check (status in ('active', 'cancelled')) default 'active',
  logo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.tracked_subscriptions enable row level security;

-- Create policies
create policy "Users can view their own tracked subscriptions" on public.tracked_subscriptions
  for select using (auth.uid() = user_id);

create policy "Users can insert their own tracked subscriptions" on public.tracked_subscriptions
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own tracked subscriptions" on public.tracked_subscriptions
  for update using (auth.uid() = user_id);

create policy "Users can delete their own tracked subscriptions" on public.tracked_subscriptions
  for delete using (auth.uid() = user_id);
