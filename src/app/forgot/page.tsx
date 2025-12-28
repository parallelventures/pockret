import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'forgot',
    hero: {
        headline: "You're probably paying for subscriptions you forgot you even started.",
        subheadline: "Pockret finds recurring charges across your bank transactions and turns them into a clean list you can act on — cancel, dispute, and request refunds where appropriate.",
        primaryCTA: "Find my subscriptions"
    },
    benefits: {
        title: "What you'll discover",
        items: [
            "See every recurring charge in one place (no hunting through emails)",
            "Spot duplicates, price hikes, and \"trial that turned paid\"",
            "Cancel the ones you don't want — keep the ones you actually use",
            "\"That app you downloaded once\" → still billing",
            "\"Free trial\" → quietly renewing",
            "\"Annual renewal\" → coming up soon",
            "\"Same subscription twice\" → accidental double-pay"
        ]
    },
    howItWorks: {
        steps: [
            { title: "Connect", description: "Link your bank securely via Plaid." },
            { title: "Scan", description: "We analyze your transactions for recurring patterns." },
            { title: "Review & Act", description: "See the full list and decide what stays or goes." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "No passwords stored",
        "Cancel only what you approve"
    ],
    objections: [
        {
            question: "Do you cancel for me?",
            answer: "You stay in control. Pockret guides you through fast cancellation/refund/dispute steps."
        },
        {
            question: "Do refunds always work?",
            answer: "Not always — but doing nothing is a guaranteed 0%. Pockret helps you request the right way."
        }
    ],
    closing: {
        headline: "Reveal your recurring charges.",
        cta: "Find my subscriptions"
    }
}

export default function ForgotPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
