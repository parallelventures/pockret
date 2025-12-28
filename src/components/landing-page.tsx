'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "@/app/fonts";
import { BlurFade, SlideIn, FadeScale, SlideUp, RevealList, RevealItem, BounceFade } from "@/components/ui/animations";
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
                        <FadeScale className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4`}>
                                Three steps. Zero effort.
                            </h2>
                            <p className="text-base md:text-lg text-black/60 max-w-xl mx-auto">
                                Connect your accounts. Sit back. We find the money companies owe you.
                            </p>
                        </FadeScale>

                        <SlideUp delay={0.2}>
                            <HowItWorksCarousel />
                        </SlideUp>
                    </div>
                </section>

                {/* Video Reviews */}
                <VideoReviewsCarousel />

                {/* Security & Trust Section */}
                <section className="py-16 md:py-32 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <SlideIn direction="left" duration={0.8}>
                            <div className="max-w-2xl mb-12 md:mb-20">
                                <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-4">
                                    Security
                                </p>
                                <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] mb-6`}>
                                    We can see your transactions.<br />
                                    <span className="text-black/30">We can never touch your money.</span>
                                </h2>
                            </div>
                        </SlideIn>

                        {/* Plaid Section */}
                        <div className="py-10 md:py-16">
                            <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
                                {/* Left - Content */}
                                <SlideUp delay={0.1} className="flex-1">
                                    <a
                                        href="https://plaid.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mb-8 opacity-80 hover:opacity-100 transition-opacity"
                                    >
                                        <img src="/Plaid.svg" alt="Plaid" className="h-14" />
                                    </a>

                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                        Powered by Plaid
                                    </h3>

                                    <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-lg">
                                        Plaid is the secure bridge between your bank and apps like Venmo, Robinhood, and Coinbase. Over 8,000 companies trust it. Now we do too.
                                    </p>

                                    <div className="space-y-4">
                                        {[
                                            "We never see or store your bank password",
                                            "Read-only access — we can't move money",
                                            "Disconnect anytime with one click"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                                <span className="text-black/70">{text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="https://plaid.com/safety/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-8 text-black/50 hover:text-black text-sm transition-colors"
                                    >
                                        Learn more about Plaid →
                                    </a>
                                </SlideUp>

                                {/* Right - Stats */}
                                <SlideIn direction="right" delay={0.2} className="lg:w-72 flex-shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0">
                                    <div className="lg:space-y-8">
                                        <div>
                                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-bold text-black mb-1`}>12K+</p>
                                            <p className="text-black/40 text-xs md:text-sm">Banks connected</p>
                                        </div>
                                    </div>
                                    <div className="lg:space-y-8">
                                        <div>
                                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-bold text-black mb-1`}>8K+</p>
                                            <p className="text-black/40 text-xs md:text-sm">Apps using Plaid</p>
                                        </div>
                                    </div>
                                    <div className="lg:space-y-8">
                                        <div>
                                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-bold text-black mb-1`}>0</p>
                                            <p className="text-black/40 text-xs md:text-sm">Security breaches</p>
                                        </div>
                                    </div>
                                </SlideIn>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="py-10 md:py-16">
                            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                                <BounceFade className="lg:w-72 flex-shrink-0">
                                    <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-2">
                                        Q&A
                                    </p>
                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black`}>
                                        Common questions
                                    </h3>
                                </BounceFade>

                                <div className="flex-1">
                                    <FAQ
                                        items={[
                                            {
                                                question: "Is it really safe to connect my bank?",
                                                answer: "Absolutely. We use Plaid, the same technology trusted by Venmo, Robinhood, and over 8,000 financial apps. Your bank credentials are never shared with us — you log in directly through your bank's secure portal. We only get read-only access to your transactions."
                                            },
                                            {
                                                question: "Can you move money from my account?",
                                                answer: "No, never. We have read-only access, which means we can only view your transactions. We cannot initiate transfers, make payments, or move any money. It's like giving someone a window to look through — they can see, but they can't touch."
                                            },
                                            {
                                                question: "What happens to my data?",
                                                answer: "Your data is encrypted with 256-bit AES encryption (the same standard used by banks) and stored securely. We never sell your data to third parties. You can delete your account and all associated data at any time with one click."
                                            },
                                            {
                                                question: "How do you make money?",
                                                answer: "We offer a premium subscription that unlocks more features. Free users can scan and see what they're owed; premium users get full access to recovery tools and automated claims. We don't sell your data — our business model is simple and transparent."
                                            },
                                            {
                                                question: "What if I want to disconnect my bank?",
                                                answer: "You can disconnect any linked account at any time from your profile settings. Once disconnected, we immediately stop accessing your data. You can also delete your entire account, which permanently removes all your data from our servers."
                                            },
                                            {
                                                question: "How long does a scan take?",
                                                answer: "Most scans complete in under 60 seconds. We analyze your recent transaction history to find forgotten subscriptions, duplicate charges, and potential refunds. You'll see your results immediately after the scan completes."
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Trust Points */}
                        <RevealList className="pt-10 md:pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.12}>
                            <RevealItem>
                                <h4 className="font-semibold text-black mb-2">256-bit encryption</h4>
                                <p className="text-black/50 text-sm leading-relaxed">
                                    Same encryption used by banks. Your data is unreadable without the key.
                                </p>
                            </RevealItem>
                            <RevealItem>
                                <h4 className="font-semibold text-black mb-2">No data selling</h4>
                                <p className="text-black/50 text-sm leading-relaxed">
                                    Your transactions are never sold to advertisers or third parties.
                                </p>
                            </RevealItem>
                            <RevealItem>
                                <h4 className="font-semibold text-black mb-2">SOC 2 certified</h4>
                                <p className="text-black/50 text-sm leading-relaxed">
                                    Independently audited security. The gold standard for data protection.
                                </p>
                            </RevealItem>
                        </RevealList>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <FadeScale delay={0.1}>
                        <div className="max-w-2xl mx-auto text-center pt-12 md:pt-20">
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
                    </FadeScale>
                </section>
            </main>

            <Footer />
        </div>
    );
}
