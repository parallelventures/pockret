import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function UnclaimedPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="unclaimed"
                hero={{
                    headline: "You might have money waiting for you — and not know it.",
                    subheadline: "Pockret helps you spot opportunities to recover money: billing mistakes, charge issues, and missed claims — and guides you through the next steps.",
                    cta: "Check if money is waiting",
                    closingHeadline: "Don't leave money on the table.",
                    closingSubheadline: "Free scan. Find what's yours."
                }}
            />
        </Suspense>
    )
}
