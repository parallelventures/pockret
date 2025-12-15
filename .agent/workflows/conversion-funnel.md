# Pockret Conversion Funnel - Implementation Plan

## Overview
Ultra-conversion funnel for fintech web app. Aggressive but clean (not deceptive).

**Formula:** `Conversion = Trust × (Value preview) ÷ Friction`
**Flow:** mini engagement → bank link → "money found" → paywall → actions

---

## Screens to Implement

### 0. Landing Page (`/`)
- [ ] CTA unique: "Scan my accounts" / "Find my leaks"
- [ ] Sub-text: "Read-only. No transfers. Takes 60 seconds."
- [ ] Social proof: "$X recovered this month"
- [ ] Logos: Plaid + "Bank-level encryption"

### 1. Create Account (`/signup`)
- [ ] Google/Apple OAuth + Email magic link
- [ ] NO password
- [ ] Copy: "Create your account to save your scan & recovery plan."
- [ ] Progress bar: Step 1/4

### 2. Onboarding (`/onboarding`)
**Screen 1: Choose your goal**
- [ ] Single tap selection
- [ ] Options: Cancel unused, Get refunds, Find overcharges, Claim settlements, All of the above (pre-selected)

**Screen 2: Money Profile**
- [ ] Slider: "How many subscriptions?" (0-30+)
- [ ] Question: "What hurts most?" (Surprise renewals, Forgotten subs, App Store, Bank fees)

### 3. Trust Gate (`/onboarding/connect`)
- [ ] ✅ Read-only access
- [ ] ✅ Encrypted in transit
- [ ] ✅ Disconnect anytime
- [ ] ✅ Powered by Plaid
- [ ] CTA: "Connect your bank to start the scan"
- [ ] "Takes ~60 seconds" + "Most users find leaks instantly"

### 4. Bank Link (Plaid Modal)
- [ ] Side panel during Plaid:
  - What we'll detect: subscriptions, renewals, overcharges
  - What we won't do: transfers, payments

### 5. Scan Animation (`/scanning`)
- [ ] Progress steps with suspense:
  - "Detecting recurring payments..."
  - "Identifying unused subscriptions..."
  - "Checking refund eligibility..."
  - "Matching open settlements..."
- [ ] Mid-scan teaser: "Found 3 recurring charges already"

### 6. Results Preview (`/results`)
- [ ] Top module: Potential money back
  - Monthly savings: $XX/mo
  - Refunds to request: $XX
  - Settlement matches: X
- [ ] "Estimates, not guaranteed" disclaimer
- [ ] Recovery Queue (3-7 items, some blurred)
- [ ] CTA: "Unlock one-click recovery"

### 7. Paywall (`/upgrade`)
- [ ] Header: "Unlock your Recovery Engine" + "$X found"
- [ ] 3 bullets: One-click cancel, Refund generator, Settlements matching
- [ ] Pricing: $39/mo + $249 lifetime (default)
- [ ] Urgency: "Scan expires in 24h" (if real)
- [ ] Guarantee: "If no $39/year insights, 30 days free"

### 8. Post-Pay Activation (`/dashboard`)
- [ ] Immediate dopamine: Action #1, #2, #3 ready
- [ ] Then: notifications, email digest

---

## Technical Components Needed

### New Routes
- `/onboarding` - Goals screen
- `/onboarding/profile` - Money profile screen
- `/onboarding/connect` - Trust gate
- `/scanning` - Scan animation
- `/results` - Results preview (gated)
- `/upgrade` - Paywall

### New Components
- `OnboardingGoals.tsx`
- `OnboardingProfile.tsx`
- `TrustGate.tsx`
- `PlaidLinkWithSidebar.tsx`
- `ScanAnimation.tsx`
- `ResultsPreview.tsx`
- `RecoveryQueue.tsx`
- `Paywall.tsx`
- `ActivationDashboard.tsx`

### Database
- User goals/preferences table
- Scan results storage
- Payment status

---

## Implementation Order

1. **Phase 1: Onboarding Flow**
   - [ ] Onboarding goals screen
   - [ ] Money profile screen
   - [ ] Trust gate
   - [ ] Connect flow

2. **Phase 2: Scan & Results**
   - [ ] Scan animation
   - [ ] Results preview (mocked data first)
   - [ ] Recovery queue component

3. **Phase 3: Paywall**
   - [ ] Pricing component
   - [ ] Stripe integration
   - [ ] Access gating

4. **Phase 4: Activation**
   - [ ] Post-pay dashboard
   - [ ] Action cards
   - [ ] Email/notification prompts

---

## Copy Bank

### CTAs
- "Scan my accounts"
- "Find my leaks"
- "Connect your bank to start the scan"
- "Unlock one-click recovery"
- "Unlock your Recovery Engine"

### Trust Builders
- "Read-only. No transfers. Takes 60 seconds."
- "Bank-level encryption"
- "Powered by Plaid"
- "You can disconnect anytime"

### Urgency (clean)
- "Your scan expires in 24h"
- "Lock in lifetime pricing today"
- "Most users find leaks instantly"
