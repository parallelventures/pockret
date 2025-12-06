---
description: Implementation plan for Stripe integration with Next.js App Router and Supabase
---

# Stripe Integration Plan (November 2025 Standards)

This workflow outlines the steps to integrate Stripe into the Paylaim application, ensuring synchronization with Supabase and using modern Next.js App Router patterns.

## 1. Prerequisites & Environment Setup

We need to install the necessary dependencies and configure environment variables.

### Dependencies
- `stripe`: Server-side Stripe SDK
- `@stripe/stripe-js`: Client-side Stripe loader

### Environment Variables (.env.local)
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # or your production URL
```

## 2. Database Schema (Supabase)

We need to store Stripe customer IDs and subscription status to sync with Supabase Auth.

### Proposed Tables
1.  **`subscriptions`**: Stores subscription status, price ID, and periods.
    -   `id` (text, primary key - matches Stripe subscription ID)
    -   `user_id` (uuid, references auth.users)
    -   `status` (text: active, trialing, past_due, etc.)
    -   `price_id` (text)
    -   `current_period_end` (timestamptz)
    -   `created_at` (timestamptz)

2.  **`profiles` (Update)**: Add `stripe_customer_id` column.
    -   `stripe_customer_id` (text)

## 3. Implementation Steps

### Step 1: Stripe Initialization
Create `src/lib/stripe.ts` to initialize the Stripe server-side client.

### Step 2: Database Migration
Run SQL to create the `subscriptions` table and update `profiles`.

### Step 3: Webhook Handler
Create `/app/api/webhooks/stripe/route.ts`.
-   **Purpose**: Listen for Stripe events (`checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`).
-   **Security**: Verify signature using `STRIPE_WEBHOOK_SECRET`.
-   **Action**: Update Supabase database using `supabase-admin` (Service Role) to bypass RLS.

### Step 4: Server Actions for Checkout
Create `src/app/actions/stripe.ts`.
-   `createCheckoutSession(priceId)`: Authenticated server action.
    -   Gets current user.
    -   Gets or creates Stripe Customer ID (and saves to Supabase if missing).
    -   Creates a Stripe Checkout Session.
    -   Returns the URL for redirection.

### Step 5: Customer Portal
Create `createCustomerPortalSession()` action to allow users to manage their subscription (cancel, upgrade).

### Step 6: Frontend Integration
-   Create a `PricingTable` component.
-   Use the server actions to trigger checkout.
-   Update `Dashboard` to show subscription status.

## 4. Security & Best Practices
-   **RLS**: Ensure `subscriptions` table is readable by the owner but only writable by the Service Role (Webhooks).
-   **Idempotency**: Webhooks should handle duplicate events gracefully.
-   **Portal**: Use Stripe Customer Portal for self-serve management.

---
**Status**: Ready to implement.
