export const articleContent: Record<string, Record<string, { title: string; content: string; relatedArticles?: string[] }>> = {
    "getting-started": {
        "how-does-pockret-work": {
            title: "How does Pockret work?",
            content: `
## Overview

Pockret helps you recover money that companies owe you. Here's how it works in three simple steps:

### 1. Connect your bank

Securely link your bank accounts through Plaid, the same technology used by Venmo, Chime, and thousands of financial apps. We only get read-only access—we can see your transactions but can never move your money.

### 2. We scan everything

Our AI analyzes your transaction history to find:
- **Forgotten subscriptions** you're still paying for
- **Duplicate charges** from merchants
- **Hidden fees** that shouldn't have been charged
- **Class action settlements** you qualify for
- **Price protection** opportunities

### 3. Recover in one click

For each opportunity we find, you decide what to do. Want to cancel that gym membership you forgot about? Dispute that duplicate charge? Just tap and we handle the rest.

## What makes us different

- **Free to scan**: You only pay when we successfully recover money
- **Bank-level security**: Your data is encrypted and protected
- **No lawyers needed**: We handle all the paperwork and disputes
- **Money goes to you**: Refunds are sent directly to your bank account
            `,
            relatedArticles: ["connecting-your-bank", "first-scan"],
        },
        "connecting-your-bank": {
            title: "Connecting your bank account",
            content: `
## How to connect your bank

Connecting your bank account takes less than a minute:

1. **Tap "Connect Bank"** from your dashboard
2. **Search for your bank** in the Plaid interface
3. **Log in** with your online banking credentials
4. **Select accounts** you want to scan
5. **Confirm** and you're done!

## Why we use Plaid

Plaid is the industry standard for secure bank connections. It's trusted by:
- 12,000+ financial institutions
- Apps like Venmo, Robinhood, and Chime
- Over 100 million users

Your bank credentials are entered directly into Plaid's secure interface—Pockret never sees your password.

## What access do we get?

We only get **read-only access** to your transaction history. This means:

✅ We can see your transactions to find refunds
❌ We cannot move money
❌ We cannot make purchases
❌ We cannot change your settings

## Troubleshooting

If you're having trouble connecting:
- Make sure you're using the correct login credentials
- Try updating your bank's app first
- Some banks require you to approve third-party connections
            `,
            relatedArticles: ["how-does-pockret-work", "first-scan"],
        },
        "first-scan": {
            title: "Your first scan: What to expect",
            content: `
## What happens during a scan

When you connect your bank and run your first scan, here's what happens:

### The scanning process (30 seconds)

1. We securely retrieve your transaction history
2. Our AI analyzes each transaction
3. We identify potential refunds and savings
4. Results are displayed on your dashboard

### What we look for

- Subscriptions you may have forgotten
- Duplicate or unauthorized charges
- Price drops on recent purchases
- Class action settlements you qualify for
- Hidden fees and overcharges

## Understanding your results

After the scan, you'll see a summary showing:

- **Total potential savings**: The estimated amount you could recover
- **Active subscriptions**: Services currently charging your accounts
- **Opportunities**: Individual items you can take action on

## Taking action

For each opportunity, you can:
- **Recover**: We'll handle the dispute or cancellation
- **Dismiss**: If you want to keep the charge
- **Learn more**: Get details about why we flagged it

## How long do scans take?

- Initial scan: ~30 seconds
- Ongoing monitoring: Automatic and daily
            `,
            relatedArticles: ["understanding-results", "how-does-pockret-work"],
        },
        "understanding-results": {
            title: "Understanding your results",
            content: `
## Your dashboard overview

After scanning, your dashboard shows everything we found, organized by type.

### Potential savings

This is the total amount you could recover. It includes:
- Refunds from disputes
- Cancelled subscriptions (annual savings)
- Settlement claims

### Confidence levels

Each opportunity has a confidence level:
- **High**: Very likely to succeed
- **Medium**: Good chance of success
- **Low**: Worth trying but less certain

### Categories of findings

**Subscriptions**
Active recurring charges. We show:
- Monthly/annual cost
- How long you've been subscribed
- Last charge date

**Disputes**
Charges that may be errors or unauthorized:
- Duplicate charges
- Price discrepancies
- Charges after cancellation

**Settlements**
Class action settlements you qualify for:
- Estimated payout
- Claim deadline
- Required documentation

## Taking action

Select any item to see details and your options. Most recoveries can be initiated with a single tap.
            `,
            relatedArticles: ["first-scan", "how-to-recover"],
        },
    },
    "security-privacy": {
        "is-pockret-safe": {
            title: "Is Pockret safe to use?",
            content: `
## Yes, Pockret is safe

We take security seriously. Here's why you can trust us:

### Bank-level encryption

Your data is protected with:
- **AES-256 encryption** at rest (same as banks)
- **TLS 1.3** encryption in transit
- **SOC 2 Type II** certified infrastructure

### Read-only access

We can only **view** your transactions. We cannot:
- Move money from your accounts
- Make purchases
- Change any settings
- Access your login credentials

### Powered by Plaid

We use Plaid for bank connections, trusted by:
- Venmo, Robinhood, Chime
- 12,000+ financial institutions
- Over 100 million users

Your bank password is entered directly into Plaid—we never see it.

### No data selling

We don't sell your data to advertisers, data brokers, or third parties. Our business model is based on helping you recover money, not monetizing your information.

### You're in control

You can disconnect your bank and delete your account at any time. When you do, we permanently remove your data from our servers.
            `,
            relatedArticles: ["how-plaid-works", "read-only-access"],
        },
        "how-plaid-works": {
            title: "How Plaid keeps your data secure",
            content: `
## What is Plaid?

Plaid is the industry standard for secure bank connections. When you connect your bank to Pockret, you're actually connecting through Plaid.

### Why Plaid?

Plaid is trusted by:
- 12,000+ financial institutions
- Major apps like Venmo, Robinhood, Chime, and Acorns
- Over 100 million users

### How the connection works

1. You search for your bank in Plaid's interface
2. You enter your credentials directly into Plaid (not Pockret)
3. Plaid verifies your identity with your bank
4. Plaid sends us only the transaction data we need

### Security measures

Plaid uses:
- End-to-end encryption
- Regular security audits
- Multi-factor authentication support
- Real-time fraud monitoring

### Learn more

Visit [Plaid's security page](https://plaid.com/safety/) for detailed information about their security practices.
            `,
            relatedArticles: ["is-pockret-safe", "read-only-access"],
        },
        "read-only-access": {
            title: "What is read-only access?",
            content: `
## Understanding read-only access

When you connect your bank to Pockret, we receive **read-only access**. This is an important security feature.

### What we CAN do

✅ View your transaction history
✅ See account balances
✅ Identify recurring charges
✅ Find potential refunds

### What we CANNOT do

❌ Move money between accounts
❌ Make purchases or payments
❌ Change your account settings
❌ Access your bank login credentials
❌ See your full account numbers

### Why this matters

Read-only access means that even if our systems were compromised (which we protect against), attackers couldn't steal your money. They would only see transaction data.

### How it works technically

Plaid provides us with a "read" token that only allows viewing data. We don't have the permissions to initiate any transactions.

### Your control

You can revoke our access at any time:
- Through your Pockret settings
- Through your bank's connected apps settings
- By contacting support
            `,
            relatedArticles: ["is-pockret-safe", "data-privacy"],
        },
        "data-privacy": {
            title: "Your data privacy rights",
            content: `
## Your privacy matters

We believe you should control your data. Here's what you need to know.

### What data we collect

- Transaction history from connected accounts
- Account information (name, email)
- App usage data for improvements

### What we DON'T collect

- Your bank login credentials
- Full account numbers
- Social security numbers

### How we use your data

- To find potential refunds and savings
- To process your recovery requests
- To improve our service

### What we NEVER do

- Sell your data to advertisers
- Share data with third parties for marketing
- Use your data for purposes you didn't agree to

### Your rights

You have the right to:
- Access your data
- Request deletion
- Export your data
- Opt out of non-essential data collection

### Deleting your data

When you delete your account:
- All your data is permanently removed
- Connected bank accounts are disconnected
- This cannot be undone
            `,
            relatedArticles: ["delete-account", "is-pockret-safe"],
        },
        "delete-account": {
            title: "Deleting your account and data",
            content: `
## How to delete your account

You can delete your Pockret account at any time. Here's how:

### Steps to delete

1. Go to **Settings** in your app
2. Scroll to **Account**
3. Tap **Delete Account**
4. Confirm your decision

### What happens when you delete

- Your account is immediately deactivated
- Bank connections are removed
- All your data is permanently deleted within 24 hours
- Any pending recoveries are cancelled

### Things to consider

Before deleting, remember:
- This action cannot be undone
- You'll lose any pending refunds
- You'll need to reconnect banks if you return

### For billing questions

If you have billing concerns, contact us first at support@pockret.com. We may be able to resolve your issue without account deletion.

### Data retention

After deletion:
- Transaction data: Deleted immediately
- Account data: Deleted within 24 hours
- Anonymized analytics: May be retained
- Legal records: Retained as required by law
            `,
            relatedArticles: ["data-privacy", "cancel-account"],
        },
    },
    "refunds-recovery": {
        "types-of-refunds": {
            title: "Types of refunds Pockret can find",
            content: `
## What we help you recover

Pockret scans for multiple types of refund opportunities:

### Forgotten subscriptions

Services you signed up for but no longer use:
- Streaming services
- App subscriptions
- Gym memberships
- Software licenses
- Magazine subscriptions

### Duplicate charges

The same charge appearing multiple times:
- Credit card processing errors
- System glitches
- Double-billing by merchants

### Hidden fees

Charges that shouldn't have been applied:
- Unauthorized fees
- Fees you didn't agree to
- Junk fees

### Price protection

When items you bought drop in price:
- Electronics
- Clothing
- Home goods

### Class action settlements

Lawsuits you're eligible for:
- Data breach settlements
- Consumer protection cases
- Product defect claims

### Overcharges

When you were charged more than you should have been:
- Price errors
- Expired promotions applied incorrectly
- Wrong item charged
            `,
            relatedArticles: ["how-to-recover", "recovery-success-rate"],
        },
        "how-to-recover": {
            title: "How to recover your money",
            content: `
## The recovery process

Recovering your money with Pockret is simple:

### Step 1: Review opportunities

After scanning, review the opportunities we found:
- See the charge amount
- Understand why we flagged it
- Check the success likelihood

### Step 2: Select what to recover

Tap "Recover" on any item you want to pursue. You can:
- Recover individual items
- Select multiple items at once
- Dismiss items you want to keep

### Step 3: We handle the rest

Depending on the type:

**For cancellations:**
- We contact the merchant
- Handle any retention offers
- Confirm cancellation

**For disputes:**
- We prepare the dispute
- File with your bank or merchant
- Track the resolution

**For settlements:**
- We complete claim forms
- Submit required documentation
- Monitor for payouts

### Step 4: Get your money

Refunds are sent directly to:
- Your original payment method
- Your bank account
- A check (for some settlements)

### Timeline

Recovery times vary:
- Subscription cancellations: Immediate - 30 days
- Disputes: 30-90 days
- Settlements: Varies by case
            `,
            relatedArticles: ["types-of-refunds", "how-long-recovery"],
        },
        "recovery-success-rate": {
            title: "What affects recovery success?",
            content: `
## Understanding success rates

Not all recovery attempts succeed. Here's what affects your chances:

### High success factors

- Clear duplicate charges
- Well-documented billing errors
- Cancelled services still being billed
- Valid class action eligibility

### Lower success factors

- Charges older than 60-120 days
- Missing documentation
- Legitimate charges you forgot about
- Complex disputes

### By recovery type

**Subscription cancellations: 95%+**
Most cancellations succeed, especially for U.S. companies.

**Duplicate charges: 85%+**
Clear duplicates are usually resolved quickly.

**Disputes: 60-80%**
Depends on documentation and merchant policies.

**Class action settlements: 70%+**
If you're eligible, claims typically succeed.

### Improving your chances

- Respond promptly to any requests for information
- Keep records of relevant communications
- Be patient—some disputes take time

### Our guarantee

You only pay when we successfully recover money. If a recovery fails, you owe nothing.
            `,
            relatedArticles: ["how-to-recover", "failed-recovery"],
        },
        "how-long-recovery": {
            title: "How long does recovery take?",
            content: `
## Recovery timelines

Recovery times depend on the type of refund:

### Subscription cancellations

- Processing: Immediate - 24 hours
- Confirmation: 1-5 business days
- Pro-rated refunds: 5-10 business days

### Dispute refunds

- Initial filing: 1-3 days
- Bank investigation: 30-90 days
- Resolution: Varies

### Class action settlements

These take the longest:
- Claim submission: 1-2 days
- Processing: Weeks to months
- Payout: After settlement closes

### Credit card disputes

Under federal law:
- Banks must acknowledge within 30 days
- Investigation completes within 90 days
- Provisional credit often issued during investigation

### Why some take longer

- Merchant responsiveness
- Documentation requirements
- Bank processing times
- Settlement court schedules

### Tracking your recoveries

Check your dashboard for real-time status updates on all pending recoveries.
            `,
            relatedArticles: ["how-to-recover", "failed-recovery"],
        },
        "failed-recovery": {
            title: "What if my recovery fails?",
            content: `
## When recoveries don't succeed

Sometimes recovery attempts are unsuccessful. Here's what happens:

### Common reasons for failure

- Merchant denies the dispute
- Charge was legitimate (you forgot)
- Outside the dispute window
- Insufficient documentation

### What happens next

1. We notify you of the outcome
2. Explain why it wasn't successful
3. Suggest alternatives if available

### You don't pay

Our fee is only charged on successful recoveries. If we don't recover money, you don't pay anything.

### Alternative options

Depending on the situation:
- Appeal the decision
- File with a different party
- Contact the merchant directly
- Report to consumer protection agencies

### Preventing failed recoveries

- Review charges carefully before disputing
- Provide complete documentation when asked
- Act quickly—older charges are harder to dispute

### Still have questions?

Contact support@pockret.com and we'll help you understand your options.
            `,
            relatedArticles: ["recovery-success-rate", "how-to-recover"],
        },
    },
    "account-billing": {
        "pricing": {
            title: "How much does Pockret cost?",
            content: `
## Our pricing

Pockret uses a success-based pricing model:

### Free to scan

Scanning your accounts and seeing opportunities is completely free. You can:
- Connect unlimited bank accounts
- Run unlimited scans
- See all potential savings
- No credit card required

### Pay only when you recover

We charge 20% of successfully recovered amounts. This means:
- If we recover $100, you keep $80
- If we don't recover anything, you pay $0
- No hidden fees or subscriptions

### Why this model?

We believe in aligning our success with yours. We only make money when we actually help you get money back.

### Examples

| Recovered | Our Fee | You Keep |
|-----------|---------|----------|
| $50 | $10 | $40 |
| $100 | $20 | $80 |
| $500 | $100 | $400 |

### Is there a minimum?

For very small recoveries (under $5), we may waive our fee entirely since processing costs don't make sense for such small amounts.
            `,
            relatedArticles: ["payment-methods", "billing-issues"],
        },
        "payment-methods": {
            title: "Payment methods",
            content: `
## How we collect fees

Our fee is automatically deducted when refunds are processed.

### How it works

1. You initiate a recovery
2. We handle the dispute/cancellation
3. Money is refunded to your account
4. Our fee is collected separately

### Collection methods

Depending on the refund type:
- **Deducted from refund**: For some settlements
- **Charged to payment method on file**: For most recoveries
- **Invoiced**: For large recoveries

### Adding a payment method

Go to Settings → Billing to add:
- Credit or debit card
- Bank account (ACH)

### When are you charged?

Only after a successful recovery is confirmed. We never charge before refunds are deposited.

### Failed payments

If a payment fails:
- We'll notify you via email
- You have 7 days to update payment info
- Service continues during this period
            `,
            relatedArticles: ["pricing", "billing-issues"],
        },
        "update-account": {
            title: "Updating your account information",
            content: `
## Managing your account

You can update your information anytime in Settings.

### Changing your email

1. Go to Settings → Account
2. Tap on your email address
3. Enter your new email
4. Verify via confirmation link

### Changing your password

1. Go to Settings → Security
2. Tap "Change Password"
3. Enter current password
4. Create new password

### Updating payment info

1. Go to Settings → Billing
2. Tap on your payment method
3. Update or add new method

### Managing connected banks

1. Go to Settings → Connected Accounts
2. View all linked accounts
3. Remove or reconnect as needed

### Profile information

Update your name and preferences in Settings → Profile.

### Need help?

Contact support@pockret.com if you're having trouble updating your information.
            `,
            relatedArticles: ["cancel-account", "delete-account"],
        },
        "cancel-account": {
            title: "Canceling your account",
            content: `
## How to cancel

You can cancel your Pockret account at any time.

### Steps to cancel

1. Open the app
2. Go to Settings
3. Tap Account
4. Select "Delete Account"
5. Confirm your decision

### What happens when you cancel

- Immediate: Account deactivated
- Within 24 hours: All data deleted
- Pending: Any active recoveries are cancelled

### Before you cancel

Consider:
- You'll lose any pending refunds
- Reconnecting later requires new setup
- This cannot be undone

### Pause instead?

If you just need a break:
- Disconnect bank accounts (keeps your account)
- Stop monitoring without deleting

### Pending charges

If you have successful recoveries being processed:
- Fees may still be collected
- Refunds will still be deposited

### Questions before canceling?

Email support@pockret.com - we may be able to help resolve any concerns.
            `,
            relatedArticles: ["delete-account", "billing-issues"],
        },
        "billing-issues": {
            title: "Billing issues and disputes",
            content: `
## Resolving billing problems

Having an issue with a charge from Pockret? Here's how to resolve it.

### Common billing questions

**"Why was I charged?"**
Our fee is 20% of successful recoveries. Check your email for recovery confirmations.

**"I was charged but didn't recover anything"**
This shouldn't happen. Contact us immediately with details.

**"The amount seems wrong"**
Review the recovery details in your dashboard. Our fee is exactly 20% of recovered amounts.

### Disputing a charge

1. Email support@pockret.com
2. Include the charge date and amount
3. Describe the issue
4. We respond within 24 hours

### Refund policy

We issue refunds for:
- Incorrect charges
- System errors
- Failed recoveries we charged for

### Timeline

- Response: Within 24 hours
- Resolution: 1-5 business days
- Refund: 5-10 business days

### Still unresolved?

If we can't resolve your issue:
- You can dispute with your credit card company
- File a complaint with consumer protection agencies
- We'll work in good faith to find a solution
            `,
            relatedArticles: ["pricing", "payment-methods"],
        },
    },
    "troubleshooting": {
        "bank-connection-failed": {
            title: "Bank connection failed",
            content: `
## Fixing connection issues

Having trouble connecting your bank? Try these solutions:

### Common causes

1. **Incorrect credentials**: Double-check your online banking login
2. **Bank maintenance**: Some banks have scheduled downtime
3. **Multi-factor authentication**: You may need to approve in your bank app
4. **Outdated bank app**: Update your bank's mobile app first

### Step-by-step troubleshooting

1. **Verify your credentials**
   - Try logging into your bank's website directly
   - Reset your password if needed

2. **Check for MFA prompts**
   - Look for push notifications from your bank
   - Check your email or text messages

3. **Update your bank app**
   - Some banks require their app to be current

4. **Try a different browser**
   - If on web, try Chrome or Safari

5. **Wait and retry**
   - Some issues resolve within a few hours

### Banks with known issues

Some smaller banks or credit unions may have limited Plaid support. Contact us if your bank isn't available.

### Still not working?

Email support@pockret.com with:
- Your bank name
- Error message (if any)
- Screenshot if possible
            `,
            relatedArticles: ["scan-not-working", "login-issues"],
        },
        "scan-not-working": {
            title: "Scan not working",
            content: `
## Troubleshooting scan issues

If your scans aren't completing properly, try these steps:

### Scan taking too long

- Some banks have slow connections
- Wait up to 5 minutes before retrying
- Try during off-peak hours

### Scan shows no results

This could mean:
- Your accounts are in great shape!
- Connection may be incomplete
- Recent accounts may need time to populate

### Error during scan

Common fixes:
1. Refresh the app
2. Check your internet connection
3. Reconnect your bank accounts
4. Update the app to latest version

### Partial results

If only some accounts show results:
- Some account types have limited data
- Business accounts may not be fully supported
- Try reconnecting specific accounts

### Data seems outdated

Plaid updates data regularly, but:
- Very recent transactions may not appear
- Wait 24 hours for the most current data

### Contact support

If problems persist, email support@pockret.com with:
- Description of the issue
- Screenshot of any errors
- Names of connected banks
            `,
            relatedArticles: ["bank-connection-failed", "missing-transactions"],
        },
        "missing-transactions": {
            title: "Missing transactions",
            content: `
## Why some transactions might not appear

If you notice transactions missing from Pockret, here are possible reasons:

### Timing

- **Very recent**: Transactions from today may not appear until tomorrow
- **Pending**: Pending transactions may not sync yet
- **Processing**: Some banks delay reporting

### Account types

Not all account types sync completely:
- ✅ Checking accounts
- ✅ Credit cards
- ⚠️ Business accounts (limited)
- ⚠️ Investment accounts (limited)
- ❌ Some prepaid cards

### Bank limitations

Some banks:
- Only provide 90 days of history
- Limit certain transaction types
- Have delayed reporting

### Reconnecting may help

If transactions are consistently missing:
1. Go to Settings → Connected Accounts
2. Disconnect the account
3. Wait a few minutes
4. Reconnect

### Still missing transactions?

Contact support with:
- Approximate transaction dates
- Transaction amounts (if known)
- Bank/card name

We'll investigate and help resolve the issue.
            `,
            relatedArticles: ["scan-not-working", "bank-connection-failed"],
        },
        "login-issues": {
            title: "Login issues",
            content: `
## Trouble signing in?

Here's how to resolve common login problems:

### Forgot password

1. Tap "Forgot Password" on login screen
2. Enter your email
3. Check for reset link (including spam folder)
4. Create new password

### Email not found

If you get "email not found":
- Double-check spelling
- Try other emails you might have used
- You may need to create a new account

### Password not working

Try these steps:
1. Make sure Caps Lock is off
2. Reset your password
3. Clear your browser cache
4. Try a different browser or device

### Two-factor authentication

If you have 2FA enabled:
- Check your authenticator app
- Ensure your phone's time is correct
- Try backup codes if available

### Account locked

After multiple failed attempts:
- Wait 15 minutes
- Reset your password
- Contact support if still locked

### Verification email not received

- Check spam/junk folder
- Add support@pockret.com to contacts
- Request a new verification email
- Contact support if issues persist
            `,
            relatedArticles: ["update-account", "bank-connection-failed"],
        },
    },
    "legal": {
        "terms-of-service": {
            title: "Terms of Service",
            content: `
## Terms of Service Overview

This is a summary. For the full Terms of Service, visit our [Terms page](/terms).

### Agreement

By using Pockret, you agree to our Terms of Service and Privacy Policy.

### The service

Pockret provides:
- Transaction scanning and analysis
- Refund and savings identification
- Recovery assistance

### Your responsibilities

You agree to:
- Provide accurate information
- Use the service lawfully
- Not attempt to circumvent security measures

### Our responsibilities

We commit to:
- Protecting your data
- Providing accurate analysis
- Handling disputes fairly

### Fees

Our success-based fee is 20% of recovered amounts. You only pay when we recover money.

### Limitations

Pockret is not:
- A financial advisor
- A legal service
- A guaranteed refund service

### Changes

We may update these terms. We'll notify you of significant changes via email.

### Full terms

Read our complete [Terms of Service](/terms) for all details.
            `,
            relatedArticles: ["privacy-policy", "regulatory-info"],
        },
        "privacy-policy": {
            title: "Privacy Policy",
            content: `
## Privacy Policy Summary

This is a summary. For the full Privacy Policy, visit our [Privacy page](/privacy).

### What we collect

- Account information (name, email)
- Transaction data from connected banks
- Usage data for improvements

### What we don't collect

- Bank login credentials
- Social security numbers
- Full account numbers

### How we use data

- To identify refund opportunities
- To process your recoveries
- To improve our service

### Who we share with

- Plaid (for bank connections)
- Service providers (under strict agreements)
- Law enforcement (when legally required)

### We never sell data

We don't sell your personal information to advertisers or data brokers.

### Your rights

You can:
- Access your data
- Request deletion
- Opt out of marketing
- Export your information

### Read more

See our complete [Privacy Policy](/privacy) for full details.
            `,
            relatedArticles: ["terms-of-service", "data-privacy"],
        },
        "consumer-rights": {
            title: "Your consumer rights",
            content: `
## Federal consumer protections

Several laws protect you as a consumer:

### Fair Credit Billing Act (FCBA)

- Dispute billing errors within 60 days
- Provides for unauthorized charge protection
- Requires creditors to investigate

### Electronic Fund Transfer Act (EFTA)

- Limits liability for unauthorized transfers
- Requires error resolution procedures
- Protects debit card transactions

### Truth in Lending Act (TILA)

- Requires clear disclosure of terms
- Provides right to rescind certain loans
- Standardizes interest rate disclosures

### Important deadlines

- Credit card disputes: 60 days from statement
- Debit card errors: 60 days from statement
- Unauthorized transfers: Report as soon as possible

### How Pockret helps

We help you exercise these rights by:
- Identifying potential violations
- Preparing proper dispute documentation
- Filing on your behalf

### Learn more

Visit our [Consumer Rights page](/consumer-rights) for detailed information about these laws.
            `,
            relatedArticles: ["terms-of-service", "privacy-policy"],
        },
        "regulatory-info": {
            title: "Regulatory information",
            content: `
## About Virtual World LLC

Pockret is operated by Virtual World LLC.

### Company information

**Legal name**: Virtual World LLC
**Headquarters**: 1209 Mountain Road Place NE, Suite R, Albuquerque, NM 87110, United States

### What Pockret is

Pockret is a technology platform that helps consumers identify and pursue refund opportunities.

### What Pockret is not

Pockret is:
- Not a bank or financial institution
- Not a licensed debt collector
- Not a law firm or legal service

### Compliance

We comply with:
- Consumer protection regulations
- Data privacy laws
- Financial data security standards

### Reporting issues

Report concerns to:
- support@pockret.com
- Your state attorney general
- Consumer Financial Protection Bureau (CFPB)
- Federal Trade Commission (FTC)

### Questions?

Contact us at support@pockret.com for any regulatory or compliance questions.
            `,
            relatedArticles: ["terms-of-service", "privacy-policy"],
        },
    },
};
