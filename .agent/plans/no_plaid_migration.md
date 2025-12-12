# No-Plaid Migration Plan

## Objective
Pivot Paylaim to a "No-Plaid" architecture.
**Core Value**: Detect subscriptions via **Email Parsing** (Gmail, Outlook) and **Manual Input**, using AI for reasoning and extracted data normalization.

## 1. Architecture Changes
- **Remove**: Plaid integration (if any planning existed).
- **Add**: 
    - Google/Microsoft Auth scopes for Email reading (Gmail API, MS Graph).
    - AI-based parsing pipeline (OpenAI/Vercel AI SDK).
    - Manual Subscription Form.

## 2. Data Sources
### A. Email Reader
- Connect via OAuth.
- Scan for keywords: "invoice", "receipt", "subscription", "renewal".
- Extract: Merchant, Amount, Date, Currency, Renewal Date.

### B. Manual Input
- Fallback for cash/local/privacy-focused users.
- Fields: Merchant Name, Amount, Renewal Date, Screenshot (optional).

## 3. Implementation Steps (Draft)

### Phase 1: Foundation & Database
- [ ] Define Supabase Schema for `subscriptions`, `email_accounts`, `parsed_emails`.
- [ ] Update `src/lib/supabase` clients if needed.

### Phase 2: Manual Input Feature
- [ ] Create `/dashboard/add-subscription` page.
- [ ] Build `ManualSubscriptionForm` component.
- [ ] Server Action to save to DB.

### Phase 3: Email Integration
- [ ] Set up Google OAuth with read-only email scopes.
- [ ] Build Email Fetching service (server-side).
- [ ] Build AI Parsing Service (using GPT model).

### Phase 4: Dashboard & Actions
- [ ] Update Dashboard to list subscriptions from DB.
- [ ] Add "Cancel / Refund" action buttons.

## 4. DB Schema
**Table: `tracked_subscriptions`**
- `id`: uuid (PK)
- `user_id`: uuid (FK -> users)
- `name`: text (e.g. "Netflix")
- `amount`: decimal
- `currency`: text
- `billing_cycle`: text ('monthly', 'yearly')
- `next_renewal_date`: date
- `source`: text ('email', 'manual')
- `status`: text ('active', 'cancelled')
- `logo_url`: text

## 5. Development Roadmap (2 Weeks)

### Sprint 1: Core & Manual Entry (Days 1-3)
- [x] Create `tracked_subscriptions` table.
- [ ] Build **Dashboard Subscription List** (UI).
- [ ] Build **Manual Add Form** (Type, Amount, Date).
- [ ] Implement Server Actions for CRUD.

### Sprint 2: Email Intelligence (Days 4-9)
- [ ] **Days 4-5**: Google OAuth Integration.
    - "Connect Gmail" Button.
    - Token management.
- [ ] **Days 6-7**: Email Fetching Logic.
    - Fetch last 30 days of emails using Gmail API.
    - Filtering for "Invoice", "Receipt" keywords.
- [ ] **Days 8-9**: AI Parser Pipeline.
    - Prompt Engineering for GPT-4o-mini.
    - Extract: Merchant, Amount, Date.
    - Deduplication Logic.

### Sprint 3: Actions & Value (Days 10-14)
- [ ] **Days 10-11**: Smart Actions.
    - "Cancel" email generator.
    - "Refund" claim template.
- [ ] **Days 12-13**: Dashboard Polish.
    - Total Spend Stats.
    - Premium UI Animations (Glassmorphism).
- [ ] **Day 14**: Launch & Deploy.

