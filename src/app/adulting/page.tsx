import { Suspense } from 'react'
import { VariantLandingPage, LandingPageContent } from '@/components/variant-landing-page'

const content: LandingPageContent = {
    variant: 'adulting',
    hero: {
        headline: "Nobody teaches you this when you turn 18: autopay will wreck you.",
        subheadline: "Pockret finds recurring charges and money leaks in your bank account and helps you cancel, dispute, and request refunds without getting lost.",
        primaryCTA: "Protect my money"
    },
    benefits: {
        items: [
            "\"I thought I had money… then I opened my bank app.\"",
            "\"It wasn't rent. It wasn't food. It was random subscriptions.\"",
            "A clean list of recurring charges",
            "\"Keep / cancel\" decisions in seconds",
            "Help requesting refunds/disputes when it makes sense"
        ]
    },
    howItWorks: {
        steps: [
            { title: "Connect", description: "Link your bank in 60 seconds via Plaid." },
            { title: "See everything", description: "Every recurring charge, one clean list." },
            { title: "Take control", description: "Cancel what you don't need." }
        ]
    },
    trust: [
        "Read-only via Plaid",
        "Your data stays yours",
        "No bank passwords stored"
    ],
    closing: {
        headline: "Start adulting smarter.",
        cta: "Start my scan"
    }
}

export default function AdultingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <VariantLandingPage content={content} />
        </Suspense>
    )
}
