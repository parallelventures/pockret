import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function RecoverPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="recover"
                hero={{
                    headline: "Find every place you're losing money — and take it back.",
                    subheadline: "Subscriptions, overcharges, billing errors, duplicate charges, \"forgotten\" renewals. Pockret scans and helps you act.",
                    cta: "Run full recovery scan",
                    closingHeadline: "Stop donating money to autopay.",
                    closingSubheadline: "Free scan. See everything you're losing."
                }}
            />
        </Suspense>
    )
}
