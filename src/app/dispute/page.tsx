import { Suspense } from 'react'
import { LandingPage } from '@/components/landing-page'

export default function DisputePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F9FAFB]" />}>
            <LandingPage
                variant="dispute"
                hero={{
                    headline: "\"Just dispute it\" is not a plan.",
                    subheadline: "Pockret helps you find the full leak — then guides you through canceling, disputing, and requesting refunds without spending your night on hold.",
                    cta: "Make it easy",
                    closingHeadline: "Stop fighting for your own money.",
                    closingSubheadline: "Free scan. Find the pattern, fix it for good."
                }}
            />
        </Suspense>
    )
}
