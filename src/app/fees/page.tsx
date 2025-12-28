import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'fees',
    hero: {
        headline: "Subscriptions don't just take money — they trigger overdraft fees.",
        subheadline: "Pockret helps you identify recurring charges that hit at the worst time, so you can stop fees, prevent surprise renewals, and recover money when possible.",
        primaryCTA: "Stop the overdraft cycle"
    },
    benefits: {
        title: "The overdraft trap",
        items: [
            "One renewal hits → balance drops → overdraft → fees pile up",
            "You dispute once → it comes back next month",
            "You cancel late → you lose another cycle",
            "Detect recurring charges early",
            "Flag \"high-risk\" renewals (timing + amount)",
            "Take action fast: cancel + refund-request guidance + dispute-ready evidence"
        ]
    },
    socialProof: [
        "It's never when you have extra."
    ],
    howItWorks: {
        steps: [
            { title: "Connect", description: "Link your bank securely." },
            { title: "Detect", description: "Find charges hitting at bad timing." },
            { title: "Prevent", description: "Cancel before the next cycle." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "You approve every action"
    ],
    closing: {
        headline: "Prevent the next overdraft hit.",
        cta: "Scan my account"
    }
}

export default function FeesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
