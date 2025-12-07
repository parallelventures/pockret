'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingCard } from "@/components/pricing-card";
import { ppAgrandirHeading } from "../fonts";
import { BlurFade } from "@/components/ui/animations";
import { CheckCircle2, Shield, Zap, RefreshCw } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <BlurFade delay={0.1} duration={0.8}>
                            <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight`}>
                                Simple, transparent pricing
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.2} duration={0.8}>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto">
                                One-time payment. Lifetime access. No subscriptions, no hidden fees.
                            </p>
                        </BlurFade>
                    </div>
                </section>

                {/* Pricing Card Section */}
                <section className="w-full py-12 px-6">
                    <PricingCard />
                </section>

                {/* Value Propositions */}
                <section className="max-w-5xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BlurFade delay={0.3} duration={0.8}>
                            <div className="bg-white rounded-3xl p-8 border-2 border-border shadow-sm">
                                <div className="w-16 h-16 bg-[#00A97F]/10 rounded-2xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-[#00A97F]" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">100% Money-Back Guarantee</h3>
                                <p className="text-text-muted leading-relaxed">
                                    If we don't find you any refunds or savings within 14 days, we'll refund you in full. No questions asked.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.4} duration={0.8}>
                            <div className="bg-white rounded-3xl p-8 border-2 border-border shadow-sm">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Secure & Private</h3>
                                <p className="text-text-muted leading-relaxed">
                                    Bank-level encryption. We never store your credentials. Your data is protected and never sold.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="bg-white rounded-3xl p-8 border-2 border-border shadow-sm">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Instant Access</h3>
                                <p className="text-text-muted leading-relaxed">
                                    Start finding money immediately after purchase. No waiting, no setup required.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6} duration={0.8}>
                            <div className="bg-white rounded-3xl p-8 border-2 border-border shadow-sm">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                    <RefreshCw className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Lifetime Updates</h3>
                                <p className="text-text-muted leading-relaxed">
                                    Get access to all future features and improvements. Pay once, benefit forever.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto px-6 py-20">
                    <BlurFade delay={0.2} duration={0.8}>
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
                            Frequently Asked Questions
                        </h2>
                    </BlurFade>

                    <div className="space-y-6">
                        <BlurFade delay={0.3} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3">Is this really a one-time payment?</h3>
                                <p className="text-text-muted">
                                    Yes! Pay once and get lifetime access. No recurring charges, no subscriptions, no hidden fees.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.4} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3">What if I don't find any refunds?</h3>
                                <p className="text-text-muted">
                                    We offer a 100% money-back guarantee within 14 days if you complete at least one scan and receive no refunds or settlements.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3">How much can I expect to recover?</h3>
                                <p className="text-text-muted">
                                    On average, users recover $300-$1,200 per year from forgotten subscriptions, class action settlements, and refund opportunities. Results vary by individual.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3">Is my data secure?</h3>
                                <p className="text-text-muted">
                                    Absolutely. We use bank-level encryption and never store your banking credentials. Your data is protected and never sold to third parties.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.7} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border">
                                <h3 className="text-xl font-bold text-foreground mb-3">Can I use this in my country?</h3>
                                <p className="text-text-muted">
                                    Pockret works best in the US for class action settlements and in the EU for consumer rights protection. We're expanding to more regions soon.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
