import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'recover',
    hero: {
        headline: "Find every place you're losing money — and take it back.",
        subheadline: "Subscriptions, overcharges, billing errors, duplicate charges, \"forgotten\" renewals. Pockret scans and helps you act.",
        primaryCTA: "Run full recovery scan"
    },
    benefits: {
        title: "What Pockret looks for",
        items: [
            "Recurring subscriptions you don't use",
            "Duplicate billing",
            "Price hikes & plan changes",
            "Billing errors / suspicious charges",
            "\"Renewed without noticing\" moments"
        ]
    },
    howItWorks: {
        title: "How Pockret helps",
        steps: [
            { title: "Detect", description: "Issues automatically found in your transactions." },
            { title: "Generate", description: "Action steps + ready-to-send messages." },
            { title: "Recover", description: "Cancel and pursue refunds/disputes when valid." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "You control what happens next"
    ],
    objections: [
        {
            question: "Is this legal?",
            answer: "You're using your consumer rights and merchant policies. Pockret helps you navigate them."
        },
        {
            question: "Is it safe?",
            answer: "Read-only via Plaid; you control what happens next."
        }
    ],
    closing: {
        headline: "Stop donating money to autopay.",
        cta: "Start recovery scan"
    }
}

export default function RecoverPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
