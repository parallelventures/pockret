import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function ForgotPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="forgot"
                hero={{
                    headline: "You're probably paying for subscriptions you forgot you even started.",
                    subheadline: "Pockret finds recurring charges across your bank transactions and turns them into a clean list you can act on — cancel, dispute, and request refunds where appropriate.",
                    cta: "Find my subscriptions",
                    closingHeadline: "Reveal your recurring charges.",
                    closingSubheadline: "Free scan. See every subscription in one place."
                }}
            />
        </Suspense>
    )
}
