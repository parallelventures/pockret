'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "@/app/fonts";
import { BlurFade, SlideIn, SlideUp, RevealList, RevealItem, BounceFade } from "@/components/ui/animations";
import { FAQ } from "@/components/faq";
import { HowItWorksCarousel } from "@/components/how-it-works-carousel";
import { AppIconsMarquee } from "@/components/app-icons-marquee";
import { VideoReviewsCarousel } from "@/components/video-reviews-carousel";

export interface HeroCopy {
    headline: string
    subheadline: string
    cta: string
    closingHeadline?: string
    closingSubheadline?: string
}

interface LandingPageProps {
    variant?: string
    hero?: HeroCopy
}

const defaultHero: HeroCopy = {
    headline: "Recover the money companies owe you, instantly.",
    subheadline: "You connect your accounts, we uncover every dollar companies owe you.",
    cta: "Scan My Accounts",
    closingHeadline: "Ready to find your leaks?",
    closingSubheadline: "Free scan. See exactly what you're losing."
}

export function LandingPage({ variant = 'default', hero = defaultHero }: LandingPageProps) {
    const searchParams = useSearchParams()

    // Track attribution on page load
    useEffect(() => {
        // UTM parameters
        const utmSource = searchParams.get('utm_source') || searchParams.get('src') || 'direct'
        const utmMedium = searchParams.get('utm_medium') || ''
        const utmCampaign = searchParams.get('utm_campaign') || variant
        const utmContent = searchParams.get('utm_content') || ''
        const utmTerm = searchParams.get('utm_term') || ''

        // Custom tracking
        const acc = searchParams.get('acc') || '' // TikTok account

        // Ad platform click IDs
        const gclid = searchParams.get('gclid') || '' // Google Ads
        const fbclid = searchParams.get('fbclid') || '' // Facebook/Meta
        const ttclid = searchParams.get('ttclid') || '' // TikTok Ads

        // Store in cookie for 30 days
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()

        // UTM cookies
        document.cookie = `utm_source=${utmSource}; expires=${expires}; path=/`
        document.cookie = `utm_medium=${utmMedium}; expires=${expires}; path=/`
        document.cookie = `utm_campaign=${utmCampaign}; expires=${expires}; path=/`
        document.cookie = `utm_content=${utmContent}; expires=${expires}; path=/`
        document.cookie = `utm_term=${utmTerm}; expires=${expires}; path=/`

        // Custom tracking cookies
        document.cookie = `pockret_acc=${acc}; expires=${expires}; path=/`
        document.cookie = `pockret_variant=${variant}; expires=${expires}; path=/`
        document.cookie = `pockret_landing=${window.location.pathname}; expires=${expires}; path=/`

        // Ad click IDs (if present)
        if (gclid) document.cookie = `gclid=${gclid}; expires=${expires}; path=/`
        if (fbclid) document.cookie = `fbclid=${fbclid}; expires=${expires}; path=/`
        if (ttclid) document.cookie = `ttclid=${ttclid}; expires=${expires}; path=/`
    }, [searchParams, variant])

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB] relative">
            <Navbar />

            <main className="flex-1 flex flex-col relative z-10">
                {/* Hero Section */}
                <section className="relative pt-12 pb-20 md:pt-32 md:pb-48 px-4 md:px-6 overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
                        <BlurFade delay={0.1} duration={0.8}>
                            <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[0.95] tracking-tight`}>
                                {hero.headline}
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.3} duration={0.8}>
                            <p className="text-base md:text-lg text-black/60 max-w-md leading-relaxed">
                                {hero.subheadline}
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="flex flex-col w-full max-w-md gap-4 items-center">
                                <Link href="/signup" className="w-full">
                                    <Button size="lg" className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-xl bg-[#0F172A] hover:bg-[#020617] hover:scale-[0.98] text-white font-bold text-base transition-all active:scale-95 border-0`}>
                                        {hero.cta}
                                    </Button>
                                </Link>
                                <p className="text-black/40 text-sm">
                                    Read-only • No transfers • Takes 60 seconds
                                </p>
                            </div>
                        </BlurFade>
                    </div>

                    {/* App icons marquee */}
                    <BlurFade delay={0.7} duration={0.8} className="w-full mt-20">
                        <AppIconsMarquee
                            icons={[
                                '/icons/netflix.png',
                                '/icons/spotify.png',
                                '/icons/discord.png',
                                '/icons/duolingo.png',
                                '/icons/disneyplus.png',
                                '/icons/chatgpt.png',
                                '/icons/canva.png',
                                '/icons/primevideo.png',
                                '/icons/strava.png',
                                '/icons/revolut.png',
                                '/icons/tinder.png',
                                '/icons/chess.png'
                            ]}
                            speed={50}
                        />
                    </BlurFade>
                </section>

                {/* What we find */}
                <section className="py-16 md:py-24 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <SlideUp duration={0.7}>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
                                <div>
                                    <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-3">
                                        What we find
                                    </p>
                                    <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl font-bold text-black leading-tight`}>
                                        Money you didn't know<br className="hidden md:block" /> you were losing.
                                    </h2>
                                </div>
                                <p className="text-black/50 text-sm md:text-base max-w-sm md:text-right">
                                    Most people are owed hundreds of dollars and have no idea.
                                </p>
                            </div>
                        </SlideUp>

                        <div>
                            {[
                                { title: "Forgotten subscriptions", desc: "Services you signed up for but no longer use" },
                                { title: "Duplicate charges", desc: "The same charge appearing twice on your statement" },
                                { title: "Class action settlements", desc: "Lawsuits you're eligible for but didn't know about" },
                                { title: "Hidden fees", desc: "Charges that were never properly disclosed to you" },
                                { title: "Overcharges", desc: "When you paid more than you should have" },
                                { title: "Bank errors", desc: "Processing mistakes and unauthorized fees" },
                            ].map((item, index) => (
                                <SlideUp key={index} delay={index * 0.05}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between py-5 md:py-6 group">
                                        <h3 className={`${ppAgrandirHeading.className} text-lg md:text-xl font-semibold text-black group-hover:text-black/70 transition-colors`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-black/40 text-sm md:text-base mt-1 md:mt-0 md:text-right max-w-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </SlideUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <BlurFade className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4`}>
                                Three steps. Zero effort.
                            </h2>
                            <p className="text-base md:text-lg text-black/60 max-w-xl mx-auto">
                                Connect your accounts. Sit back. We find the money companies owe you.
                            </p>
                        </BlurFade>

                        <SlideUp delay={0.2}>
                            <HowItWorksCarousel />
                        </SlideUp>
                    </div>
                </section>

                {/* Video Reviews */}
                <VideoReviewsCarousel />

                {/* Security - Ultra Minimal */}
                <section className="py-20 md:py-32 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <BlurFade>
                            <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.05] mb-6`}>
                                We see your transactions.<br />
                                <span className="text-black/25">We can't touch your money.</span>
                            </h2>
                        </BlurFade>

                        <SlideUp delay={0.2}>
                            <p className="text-black/50 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                                Read-only access via Plaid. The same security Venmo, Robinhood, and 8,000+ apps trust.
                            </p>
                        </SlideUp>

                        {/* Trust badges - horizontal */}
                        <SlideUp delay={0.3}>
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
                                <div className="flex items-center gap-2 text-black/40">
                                    <div className="w-2 h-2 rounded-full bg-black" />
                                    <span className="text-sm font-medium">256-bit encryption</span>
                                </div>
                                <div className="flex items-center gap-2 text-black/40">
                                    <div className="w-2 h-2 rounded-full bg-black" />
                                    <span className="text-sm font-medium">Read-only access</span>
                                </div>
                                <div className="flex items-center gap-2 text-black/40">
                                    <div className="w-2 h-2 rounded-full bg-black" />
                                    <span className="text-sm font-medium">Delete anytime</span>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Plaid badge */}
                        <BlurFade delay={0.4}>
                            <a
                                href="https://plaid.com/safety/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-5 py-3 bg-black/[0.03] hover:bg-black/[0.06] rounded-full transition-colors"
                            >
                                <img src="/Plaid.svg" alt="Plaid" className="h-6" />
                                <span className="text-black/50 text-sm">Secured by Plaid</span>
                            </a>
                            <div className="mt-4">
                                <Link href="/security" className="text-black/40 hover:text-black text-sm transition-colors">
                                    How we keep you safe →
                                </Link>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <BlurFade>
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black text-center mb-12`}>
                                Common questions
                            </h2>
                        </BlurFade>

                        <FAQ
                            items={[
                                {
                                    question: "Is it safe to connect my bank?",
                                    answer: "Yes. We use Plaid, trusted by Venmo, Robinhood, and 8,000+ apps. Your credentials never touch our servers."
                                },
                                {
                                    question: "Can you move my money?",
                                    answer: "No. We have read-only access. We can see transactions, but can't move a cent."
                                },
                                {
                                    question: "What happens to my data?",
                                    answer: "Encrypted with 256-bit AES. Never sold. Delete your account anytime with one click."
                                },
                                {
                                    question: "How do you make money?",
                                    answer: "Premium subscription. We don't sell your data. Simple."
                                },
                                {
                                    question: "How long does a scan take?",
                                    answer: "Under 60 seconds. Results appear immediately."
                                }
                            ]}
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-8 md:py-12 px-4 md:px-6">
                    <BlurFade delay={0.1}>
                        <div className="max-w-2xl mx-auto text-center pt-8 md:pt-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                {hero.closingHeadline || defaultHero.closingHeadline}
                            </h2>
                            <p className="text-black/60 mb-8">
                                {hero.closingSubheadline || defaultHero.closingSubheadline}
                            </p>
                            <Link href="/signup">
                                <Button size="lg" className={`${ppAgrandirHeading.className} h-12 px-8 rounded-xl bg-[#0F172A] hover:bg-[#020617] hover:scale-[0.98] text-white font-bold text-base transition-all active:scale-95 border-0`}>
                                    {hero.cta}
                                </Button>
                            </Link>
                            <p className="text-black/40 text-sm mt-4">
                                No credit card required
                            </p>
                        </div>
                    </BlurFade>
                </section>
            </main>

            <Footer />
        </div>
    );
}
