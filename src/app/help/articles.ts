export const helpArticles = {
    "getting-started": {
        title: "Getting Started",
        description: "Learn how Pockret works and get set up in minutes",
        articles: [
            {
                slug: "how-does-pockret-work",
                title: "How does Pockret work?",
                summary: "An overview of how Pockret scans your accounts and helps you recover money",
            },
            {
                slug: "connecting-your-bank",
                title: "Connecting your bank account",
                summary: "Step-by-step guide to securely linking your accounts through Plaid",
            },
            {
                slug: "first-scan",
                title: "Your first scan: What to expect",
                summary: "What happens when you scan your accounts for the first time",
            },
            {
                slug: "understanding-results",
                title: "Understanding your results",
                summary: "How to read and interpret the refunds and savings we find",
            },
        ],
    },
    "security-privacy": {
        title: "Security & Privacy",
        description: "How we protect your data and keep your information safe",
        articles: [
            {
                slug: "is-pockret-safe",
                title: "Is Pockret safe to use?",
                summary: "Understanding our security measures and why you can trust us",
            },
            {
                slug: "how-plaid-works",
                title: "How Plaid keeps your data secure",
                summary: "Learn about our banking partner trusted by 12,000+ institutions",
            },
            {
                slug: "read-only-access",
                title: "What is read-only access?",
                summary: "Why we can see your transactions but never move your money",
            },
            {
                slug: "data-privacy",
                title: "Your data privacy rights",
                summary: "How we handle your data and your rights under privacy laws",
            },
            {
                slug: "delete-account",
                title: "Deleting your account and data",
                summary: "How to remove your data and close your Pockret account",
            },
        ],
    },
    "refunds-recovery": {
        title: "Refunds & Recovery",
        description: "Everything about finding and recovering your money",
        articles: [
            {
                slug: "types-of-refunds",
                title: "Types of refunds Pockret can find",
                summary: "Subscriptions, overcharges, settlements, and more",
            },
            {
                slug: "how-to-recover",
                title: "How to recover your money",
                summary: "Step-by-step guide to claiming your refunds",
            },
            {
                slug: "recovery-success-rate",
                title: "What affects recovery success?",
                summary: "Factors that influence whether a refund claim succeeds",
            },
            {
                slug: "how-long-recovery",
                title: "How long does recovery take?",
                summary: "Timeline expectations for different types of refunds",
            },
            {
                slug: "failed-recovery",
                title: "What if my recovery fails?",
                summary: "Understanding why some claims don't succeed and next steps",
            },
        ],
    },
    "account-billing": {
        title: "Account & Billing",
        description: "Manage your account, subscription, and payments",
        articles: [
            {
                slug: "pricing",
                title: "How much does Pockret cost?",
                summary: "Understanding our pricing model and fees",
            },
            {
                slug: "payment-methods",
                title: "Payment methods",
                summary: "How we charge for successful recoveries",
            },
            {
                slug: "update-account",
                title: "Updating your account information",
                summary: "How to change your email, password, and profile",
            },
            {
                slug: "cancel-account",
                title: "Canceling your account",
                summary: "How to close your Pockret account",
            },
            {
                slug: "billing-issues",
                title: "Billing issues and disputes",
                summary: "How to resolve billing problems",
            },
        ],
    },
    "troubleshooting": {
        title: "Troubleshooting",
        description: "Solutions to common issues and error messages",
        articles: [
            {
                slug: "bank-connection-failed",
                title: "Bank connection failed",
                summary: "What to do when you can't connect your bank",
            },
            {
                slug: "scan-not-working",
                title: "Scan not working",
                summary: "Troubleshooting when scans fail or show no results",
            },
            {
                slug: "missing-transactions",
                title: "Missing transactions",
                summary: "Why some transactions might not appear",
            },
            {
                slug: "login-issues",
                title: "Login issues",
                summary: "Problems signing in to your account",
            },
        ],
    },
    "legal": {
        title: "Legal & Compliance",
        description: "Terms, privacy policy, and regulatory information",
        articles: [
            {
                slug: "terms-of-service",
                title: "Terms of Service",
                summary: "Our terms and conditions for using Pockret",
            },
            {
                slug: "privacy-policy",
                title: "Privacy Policy",
                summary: "How we collect, use, and protect your information",
            },
            {
                slug: "consumer-rights",
                title: "Your consumer rights",
                summary: "Federal laws that protect you as a consumer",
            },
            {
                slug: "regulatory-info",
                title: "Regulatory information",
                summary: "Our compliance with financial regulations",
            },
        ],
    },
};

export type HelpCategory = keyof typeof helpArticles;
