import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function TrapPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="trap"
                hero={{
                    headline: "Subscriptions are designed to be forgotten.",
                    subheadline: "Pockret makes them visible again — and gives you the fastest path to cancel, dispute, and request refunds when you shouldn't have been charged.",
                    cta: "Show me what I'm paying for",
                    closingHeadline: "Take control back.",
                    closingSubheadline: "Free scan. See the full picture."
                }}
            />
        </Suspense>
    )
}
