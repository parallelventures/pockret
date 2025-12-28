import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'last20',
    hero: {
        headline: "They took my last $20. I'm done letting subscriptions drain me.",
        subheadline: "Pockret scans your connected account for recurring charges, billing issues, and money leaks — then helps you cancel, dispute, and request refunds where it makes sense.",
        primaryCTA: "Start my scan",
        secondaryCTA: "See what Pockret finds"
    },
    benefits: {
        items: [
            "Find \"forgotten\" subscriptions and recurring charges you don't recognize",
            "Stop the bleeding: cancel in minutes, not hours",
            "Get guided refund/dispute requests (so you don't write essays to support)"
        ]
    },
    socialProof: [
        "People in the comments made me realize this happens to everyone.",
        "I thought it was just one charge. It wasn't."
    ],
    howItWorks: {
        steps: [
            { title: "Connect", description: "Your bank via Plaid (read-only)." },
            { title: "Scan", description: "Transactions for recurring patterns + anomalies." },
            { title: "Take action", description: "Cancel, dispute, refund-request flows + templates." }
        ]
    },
    trust: [
        "Read-only connection via Plaid",
        "No bank passwords stored by Pockret",
        "You choose what you cancel and what you keep"
    ],
    objections: [
        {
            question: "Can't I just dispute it?",
            answer: "You can — but it's inconsistent and time-consuming. Pockret helps you spot the full pattern and act with less friction."
        },
        {
            question: "What if I actually use some subscriptions?",
            answer: "Then keep them. Pockret is about control, not \"cancel everything.\""
        }
    ],
    closing: {
        headline: "Stop losing money on autopilot.",
        cta: "Start my scan"
    }
}

export default function Last20Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
