# Plaid Integration

This document describes the Plaid integration for bank account linking and transaction syncing.

## Overview

The integration uses Plaid's API to:
1. **Link bank accounts** - Users can connect their bank accounts securely via Plaid Link
2. **Sync transactions** - Fetch and store transaction history from linked accounts
3. **Detect recurring transactions** - Identify subscriptions and recurring payments automatically

## Setup

### 1. Get Plaid API Keys

1. Sign up at [Plaid Dashboard](https://dashboard.plaid.com/signup)
2. Navigate to **Developers > Keys**
3. Copy your **Client ID** and **Sandbox Secret**

### 2. Configure Environment Variables

Add these to your `.env.local` file:

```env
# Plaid Configuration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_sandbox_secret  
PLAID_ENV=sandbox
```

**Environment options:**
- `sandbox` - For development and testing (use test credentials)
- `development` - For testing with real credentials (limited API calls)
- `production` - For live production use (requires Plaid approval)

### 3. Run Database Migration

Execute the migration to create the required tables:

```bash
# Using Supabase CLI
supabase db push

# Or run the migration manually in Supabase SQL editor:
# See: supabase/migrations/20251214_create_plaid_tables.sql
```

## API Endpoints

### Create Link Token
`POST /api/plaid/create_link_token`

Creates a short-lived token to initialize Plaid Link. Requires authentication.

**Response:**
```json
{
  "link_token": "link-sandbox-xxx",
  "expiration": "2024-01-01T00:00:00Z"
}
```

### Exchange Public Token
`POST /api/plaid/exchange_token`

Exchanges a public token (from Plaid Link success) for an access token.

**Request:**
```json
{
  "public_token": "public-sandbox-xxx",
  "metadata": { "institution": { "name": "Chase" } }
}
```

**Response:**
```json
{
  "success": true,
  "item_id": "xxx",
  "institution_name": "Chase",
  "accounts_count": 2
}
```

### Get Accounts
`GET /api/plaid/accounts`

Fetches all linked bank accounts for the authenticated user.

**Response:**
```json
{
  "items": [
    {
      "id": "uuid",
      "institution_name": "Chase",
      "plaid_accounts": [
        {
          "name": "Checking",
          "current_balance": 1500.00,
          "type": "depository"
        }
      ]
    }
  ]
}
```

### Sync Transactions
`POST /api/plaid/transactions/sync`

Syncs transactions from Plaid using incremental sync (only fetches new/modified).

**Request:**
```json
{
  "item_id": "optional_specific_item"
}
```

**Response:**
```json
{
  "success": true,
  "added": 50,
  "modified": 2,
  "removed": 0
}
```

### Get Transactions
`GET /api/plaid/transactions`

Fetches stored transactions with pagination.

**Query Parameters:**
- `limit` - Number of transactions (default: 100)
- `offset` - Pagination offset (default: 0)
- `account_id` - Filter by specific account

### Get Recurring Transactions
`GET /api/plaid/recurring`

Fetches detected recurring transactions (subscriptions).

**Response:**
```json
{
  "recurring": [
    {
      "merchant_name": "Netflix",
      "amount": 15.99,
      "frequency": "MONTHLY"
    }
  ],
  "total_monthly": 89.99,
  "count": 5
}
```

### Sync Recurring Transactions
`POST /api/plaid/recurring`

Syncs recurring transaction detection from Plaid.

### Unlink Account
`POST /api/plaid/unlink`

Removes a linked bank account and all associated data.

**Request:**
```json
{
  "item_id": "plaid_item_id"
}
```

## React Components

### PlaidLinkButton

Primary button component to initiate bank linking:

```tsx
import { PlaidLinkButton } from '@/components/plaid-link-button';

<PlaidLinkButton
  onSuccess={() => console.log('Bank linked!')}
  variant="default" // or "outline" | "minimal"
/>
```

### ConnectBankCard

Dashboard card showing linked bank status or CTA to connect:

```tsx
import { ConnectBankCard } from '@/components/connect-bank-card';

<ConnectBankCard onSuccess={() => refreshData()} />
```

### LinkedAccountsSection

Section showing all linked accounts with management options:

```tsx
import { LinkedAccountsSection } from '@/components/linked-accounts-section';

<LinkedAccountsSection onAccountsChange={() => refresh()} />
```

### RecurringTransactions

Component displaying detected subscriptions:

```tsx
import { RecurringTransactions } from '@/components/recurring-transactions';

<RecurringTransactions />
```

## React Hooks

### usePlaidAccounts

```tsx
const {
  items,           // Linked bank items
  allAccounts,     // Flattened account list
  totalBalance,    // Sum of all balances
  isLoading,
  fetchAccounts,
  unlinkAccount,
} = usePlaidAccounts();
```

### usePlaidRecurring

```tsx
const {
  recurring,       // Recurring transactions
  totalMonthly,    // Monthly subscription cost
  isLoading,
  isSyncing,
  fetchRecurring,
  syncRecurring,
} = usePlaidRecurring();
```

### usePlaidTransactions

```tsx
const {
  transactions,
  isLoading,
  isSyncing,
  fetchTransactions,
  syncTransactions,
} = usePlaidTransactions({ limit: 50 });
```

## Database Schema

The integration creates these tables:

- **plaid_items** - Stores access tokens and linked institutions
- **plaid_accounts** - Individual bank accounts
- **plaid_transactions** - Transaction history
- **plaid_recurring_transactions** - Detected subscriptions

All tables have Row Level Security (RLS) policies to ensure users can only access their own data.

## Testing in Sandbox

When using `PLAID_ENV=sandbox`, use these test credentials in Plaid Link:

- **Username:** `user_good`
- **Password:** `pass_good`
- **2FA Code (if prompted):** `1234`

## Moving to Production

1. Complete Plaid's production access application
2. Update `PLAID_ENV=production`
3. Replace `PLAID_SECRET` with your production secret
4. Add webhook endpoint for real-time transaction updates
5. Implement proper error handling and retry logic
