'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ppAgrandirHeading } from '@/app/fonts'
import { BlurFade, SlideUp, FadeScale, RevealList, RevealItem } from '@/components/ui/animations'
import { CheckCircle2, Shield, Eye, Zap } from 'lucide-react'

export interface LandingPageContent {
    variant: string
    hero: {
        headline: string
        subheadline: string
        primaryCTA: string
        secondaryCTA?: string
    }
    benefits: {
        title?: string
        items: string[]
    }
    socialProof?: string[]
    howItWorks?: {
        title?: string
        steps: { title: string; description: string }[]
    }
    trust?: string[]
    objections?: { question: string; answer: string }[]
    closing: {
        headline: string
        cta: string
    }
}

interface VariantLandingPageProps {
    content: LandingPageContent
}

export function VariantLandingPage({ content }: VariantLandingPageProps) {
    const searchParams = useSearchParams()

    // Track attribution on page load
    useEffect(() => {
        // UTM parameters
        const utmSource = searchParams.get('utm_source') || searchParams.get('src') || 'direct'
        const utmMedium = searchParams.get('utm_medium') || ''
        const utmCampaign = searchParams.get('utm_campaign') || content.variant
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
        document.cookie = `pockret_variant=${content.variant}; expires=${expires}; path=/`
        document.cookie = `pockret_landing=${window.location.pathname}; expires=${expires}; path=/`

        // Ad click IDs (if present)
        if (gclid) document.cookie = `gclid=${gclid}; expires=${expires}; path=/`
        if (fbclid) document.cookie = `fbclid=${fbclid}; expires=${expires}; path=/`
        if (ttclid) document.cookie = `ttclid=${ttclid}; expires=${expires}; path=/`
    }, [searchParams, content.variant])

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <BlurFade delay={0.1} duration={0.8}>
                            <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                                {content.hero.headline}
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.3} duration={0.8}>
                            <p className="text-base md:text-lg text-black/60 max-w-xl mx-auto leading-relaxed mb-8">
                                {content.hero.subheadline}
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/signup">
                                    <Button
                                        size="lg"
                                        className={`${ppAgrandirHeading.className} h-12 px-8 rounded-xl bg-[#0F172A] hover:bg-[#020617] hover:scale-[0.98] text-white font-bold text-base transition-all active:scale-95`}
                                    >
                                        {content.hero.primaryCTA}
                                    </Button>
                                </Link>
                                {content.hero.secondaryCTA && (
                                    <Link href="#how-it-works" className="text-black/50 hover:text-black text-sm transition-colors">
                                        {content.hero.secondaryCTA}
                                    </Link>
                                )}
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-black/10">
                    <div className="max-w-3xl mx-auto">
                        {content.benefits.title && (
                            <SlideUp>
                                <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-8 text-center`}>
                                    {content.benefits.title}
                                </h2>
                            </SlideUp>
                        )}

                        <RevealList className="space-y-4" staggerDelay={0.1}>
                            {content.benefits.items.map((item, i) => (
                                <RevealItem key={i}>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.02]">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-black/80">{item}</p>
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealList>
                    </div>
                </section>

                {/* Social Proof */}
                {content.socialProof && content.socialProof.length > 0 && (
                    <section className="py-12 px-4 md:px-6">
                        <div className="max-w-2xl mx-auto">
                            <div className="space-y-4">
                                {content.socialProof.map((quote, i) => (
                                    <FadeScale key={i} delay={i * 0.1}>
                                        <blockquote className="text-center text-black/50 italic text-lg">
                                            "{quote}"
                                        </blockquote>
                                    </FadeScale>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* How It Works */}
                {content.howItWorks && (
                    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-black/10">
                        <div className="max-w-4xl mx-auto">
                            <FadeScale>
                                <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl font-bold text-black mb-12 text-center`}>
                                    {content.howItWorks.title || 'How it works'}
                                </h2>
                            </FadeScale>

                            <div className="grid md:grid-cols-3 gap-8">
                                {content.howItWorks.steps.map((step, i) => (
                                    <SlideUp key={i} delay={i * 0.15}>
                                        <div className="text-center">
                                            <div className={`${ppAgrandirHeading.className} text-5xl font-bold text-black/10 mb-4`}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-black/60 text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </SlideUp>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Trust Section */}
                {content.trust && content.trust.length > 0 && (
                    <section className="py-12 md:py-16 px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                                {content.trust.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-black/50 text-sm">
                                        <Shield className="w-4 h-4" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Objections / FAQ */}
                {content.objections && content.objections.length > 0 && (
                    <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-black/10">
                        <div className="max-w-2xl mx-auto">
                            <FadeScale>
                                <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-8 text-center`}>
                                    Common questions
                                </h2>
                            </FadeScale>

                            <div className="space-y-6">
                                {content.objections.map((obj, i) => (
                                    <SlideUp key={i} delay={i * 0.1}>
                                        <div className="p-6 rounded-2xl bg-black/[0.02]">
                                            <h3 className={`${ppAgrandirHeading.className} font-bold text-black mb-2`}>
                                                {obj.question}
                                            </h3>
                                            <p className="text-black/60 text-sm leading-relaxed">
                                                {obj.answer}
                                            </p>
                                        </div>
                                    </SlideUp>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Closing CTA */}
                <section className="py-20 md:py-32 px-4 md:px-6">
                    <FadeScale>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl font-bold text-black mb-6`}>
                                {content.closing.headline}
                            </h2>
                            <Link href="/signup">
                                <Button
                                    size="lg"
                                    className={`${ppAgrandirHeading.className} h-14 px-10 rounded-xl bg-[#0F172A] hover:bg-[#020617] hover:scale-[0.98] text-white font-bold text-lg transition-all active:scale-95`}
                                >
                                    {content.closing.cta}
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
    )
}
