import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'trap',
    hero: {
        headline: "Subscriptions are designed to be forgotten.",
        subheadline: "Pockret makes them visible again — and gives you the fastest path to cancel, dispute, and request refunds when you shouldn't have been charged.",
        primaryCTA: "Show me what I'm paying for"
    },
    benefits: {
        title: "How the trap works",
        items: [
            "One-click sign up → friction-free to start",
            "Hidden renewal dates → you don't see it coming",
            "Cancellation friction → they make it hard to leave",
            "\"Trial\" conversion → free becomes paid silently",
            "Price increases → you never get notified"
        ]
    },
    howItWorks: {
        title: "What you get",
        steps: [
            { title: "Clean map", description: "See your entire recurring spending." },
            { title: "Usage prompts", description: "\"Are you still using this?\"" },
            { title: "Action flows", description: "Cancel + refund/dispute help." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "No passwords stored",
        "Cancel only what you approve"
    ],
    closing: {
        headline: "Take control back.",
        cta: "Find my subscriptions now"
    }
}

export default function TrapPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
