import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function FeesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="fees"
                hero={{
                    headline: "Subscriptions don't just take money — they trigger overdraft fees.",
                    subheadline: "Pockret helps you identify recurring charges that hit at the worst time, so you can stop fees, prevent surprise renewals, and recover money when possible.",
                    cta: "Stop the overdraft cycle",
                    closingHeadline: "Prevent the next overdraft hit.",
                    closingSubheadline: "Free scan. Find what's draining your balance."
                }}
            />
        </Suspense>
    )
}
