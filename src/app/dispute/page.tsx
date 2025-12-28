import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'dispute',
    hero: {
        headline: "\"Just dispute it\" is not a plan.",
        subheadline: "Pockret helps you find the full leak — then guides you through canceling, disputing, and requesting refunds without spending your night on hold.",
        primaryCTA: "Make it easy"
    },
    benefits: {
        title: "Why \"just dispute\" fails",
        items: [
            "It's inconsistent — results vary wildly",
            "It's slow — hours on hold, email chains, waiting",
            "It's stressful — you're fighting for your own money",
            "It doesn't fix the root cause (recurring billing keeps coming back)"
        ]
    },
    howItWorks: {
        title: "What Pockret does instead",
        steps: [
            { title: "Find the pattern", description: "Not just one charge — the full picture." },
            { title: "Organize evidence", description: "Dates, amounts, recurrence — ready to go." },
            { title: "Clear action path", description: "Cancel / dispute / refund request flows." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "You control every action"
    ],
    objections: [
        {
            question: "Will I get my money back?",
            answer: "Not always — but if you never try, you never recover. Pockret increases your chances and reduces the friction."
        },
        {
            question: "Will cancelling remove access I still need?",
            answer: "You choose what to keep. Pockret is about control, not chaos."
        }
    ],
    closing: {
        headline: "Stop fighting for your own money.",
        cta: "Start scan"
    }
}

export default function DisputePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
