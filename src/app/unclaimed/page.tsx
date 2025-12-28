import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'unclaimed',
    hero: {
        headline: "You might have money waiting for you — and not know it.",
        subheadline: "Pockret helps you spot opportunities to recover money: billing mistakes, charge issues, and missed claims — and guides you through the next steps.",
        primaryCTA: "Check if money is waiting"
    },
    benefits: {
        items: [
            "Missed claims happen because people never check",
            "Most money stays unclaimed because the process is confusing",
            "Pockret turns \"confusing\" into \"do this next\""
        ]
    },
    howItWorks: {
        steps: [
            { title: "Scan", description: "Analyze your transactions for recovery opportunities." },
            { title: "Identify", description: "Find billing issues, overcharges, and potential claims." },
            { title: "Guide", description: "Step-by-step help to pursue what's yours." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "Claims and eligibility vary by case",
        "Pockret organizes — outcomes depend on each situation"
    ],
    closing: {
        headline: "Don't leave money on the table.",
        cta: "Check my recovery opportunities"
    }
}

export default function UnclaimedPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
