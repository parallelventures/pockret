import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function AdultingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="adulting"
                hero={{
                    headline: "Nobody teaches you this when you turn 18: autopay will wreck you.",
                    subheadline: "Pockret finds recurring charges and money leaks in your bank account and helps you cancel, dispute, and request refunds without getting lost.",
                    cta: "Protect my money",
                    closingHeadline: "Start adulting smarter.",
                    closingSubheadline: "Free scan. Take control of your money."
                }}
            />
        </Suspense>
    )
}
