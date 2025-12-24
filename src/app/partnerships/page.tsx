'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { sfProDisplay, ppAgrandirHeading } from '@/app/fonts'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const partnerPrograms = [
    {
        title: 'Content Creators & Influencers',
        description: 'You want to create content about Pockret and share it with your audience.',
        cta: "Let's partner on content",
        href: 'mailto:partnerships@pockret.com?subject=Content%20Partnership'
    },
    {
        title: 'Integrations & Partnerships',
        description: 'You want to build an integration with Pockret or discuss a commercial partnership agreement.',
        cta: "Let's partner on integrations",
        href: 'mailto:partnerships@pockret.com?subject=Integration%20Partnership'
    },
    {
        title: 'Events & Hackathons',
        description: 'You want to organize a community-led hackathon, workshop or event using Pockret.',
        cta: "Let's partner on events",
        href: 'mailto:partnerships@pockret.com?subject=Event%20Partnership'
    },
    {
        title: 'Education',
        description: 'You want to use Pockret in your class or at your university.',
        cta: "Let's partner on education",
        href: 'mailto:partnerships@pockret.com?subject=Education%20Partnership'
    },
    {
        title: 'Affiliate Program',
        description: 'Earn commissions by referring users to Pockret through your unique affiliate link.',
        cta: "Join our affiliate program",
        href: 'mailto:partnerships@pockret.com?subject=Affiliate%20Program'
    },
    {
        title: 'Enterprise Solutions',
        description: 'Looking to offer Pockret to your employees or customers at scale.',
        cta: "Let's discuss enterprise",
        href: 'mailto:partnerships@pockret.com?subject=Enterprise%20Partnership'
    }
]

export default function PartnershipsPage() {
    const scrollToPrograms = () => {
        document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Navbar />
            <main className={`${sfProDisplay.className} min-h-screen bg-white`}>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6">
                    {/* Subtle gradient */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center bottom, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
                        }}
                    />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h1 className={`${ppAgrandirHeading.className} text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6`}>
                            Partner with Pockret
                        </h1>
                        <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Want to work together? Discover partnership opportunities that spark growth,
                            drive innovation, and turn our shared ambition into shared success.
                        </p>
                    </div>

                    {/* Explore more button */}
                    <button
                        onClick={scrollToPrograms}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/40 hover:text-black/70 transition-colors cursor-pointer"
                    >
                        <span className="text-sm">Explore more</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </button>
                </section>

                {/* Partner Programs Section */}
                <section id="programs" className="relative py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4`}>
                                Pockret Partner Programs
                            </h2>
                            <p className="text-black/50 text-lg max-w-xl mx-auto">
                                Choose the partnership that fits your goals and let&apos;s build something amazing together
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {partnerPrograms.map((program, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-black/[0.02] border border-black/[0.06] rounded-2xl p-6 flex gap-6 hover:bg-black/[0.04] hover:border-black/[0.1] transition-all duration-300"
                                >
                                    {/* Image placeholder */}
                                    <div className="flex-shrink-0 w-32 h-32 rounded-xl bg-gradient-to-br from-black/5 to-black/[0.02] overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className={`${ppAgrandirHeading.className} text-black text-lg font-semibold mb-2`}>
                                            {program.title}
                                        </h3>
                                        <p className="text-black/50 text-sm leading-relaxed mb-4">
                                            {program.description}
                                        </p>
                                        <Link
                                            href={program.href}
                                            className="inline-flex items-center gap-2 text-black text-sm font-medium group-hover:gap-3 transition-all"
                                        >
                                            {program.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            Have a different idea?
                        </h2>
                        <p className="text-black/50 text-lg mb-8">
                            We&apos;re always open to creative partnership proposals. Reach out and let&apos;s explore the possibilities.
                        </p>
                        <Link
                            href="mailto:partnerships@pockret.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors"
                        >
                            Get in touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
