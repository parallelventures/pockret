import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function Last20Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="last20"
                hero={{
                    headline: "They took my last $20. I'm done letting subscriptions drain me.",
                    subheadline: "Pockret scans your connected account for recurring charges, billing issues, and money leaks — then helps you cancel, dispute, and request refunds where it makes sense.",
                    cta: "Start my scan",
                    closingHeadline: "Stop losing money on autopilot.",
                    closingSubheadline: "Free scan. See exactly what's draining your account."
                }}
            />
        </Suspense>
    )
}
