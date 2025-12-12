'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";

export default function HowItWorksPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Three steps.<br />Zero effort.
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                        Connect your accounts. Sit back. We find the money companies owe you.
                    </p>
                </section>

                {/* Steps Section */}
                <section className="max-w-6xl mx-auto px-6 pb-24">
                    <div className="space-y-0">

                        {/* Step 1 */}
                        <div className="relative">
                            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-16 border-t border-black/10">
                                <div className="flex flex-col md:flex-row items-start gap-6 flex-1">
                                    <div className="flex-shrink-0">
                                        <span className={`${ppAgrandirHeading.className} text-7xl md:text-8xl font-bold text-black/5`}>
                                            01
                                        </span>
                                    </div>
                                    <div className="flex-1 md:pt-2">
                                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                            Connect your bank
                                        </h2>
                                        <p className="text-black/60 text-lg leading-relaxed mb-6">
                                            Securely link your accounts through Plaid. We use the same bank-level encryption that Venmo, Chime, and 12,000+ financial institutions trust.
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-black/40">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <span>256-bit encryption • Read-only access</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-64 flex-shrink-0">
                                    <div className="aspect-square bg-black/5 rounded-2xl flex items-center justify-center">
                                        <span className="text-black/20 text-sm">Video 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-16 border-t border-black/10">
                                <div className="flex flex-col md:flex-row items-start gap-6 flex-1">
                                    <div className="flex-shrink-0">
                                        <span className={`${ppAgrandirHeading.className} text-7xl md:text-8xl font-bold text-black/5`}>
                                            02
                                        </span>
                                    </div>
                                    <div className="flex-1 md:pt-2">
                                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                            We scan everything
                                        </h2>
                                        <p className="text-black/60 text-lg leading-relaxed mb-6">
                                            Our AI analyzes your transaction history to find hidden refunds, forgotten subscriptions, and class action settlements.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/60">Refunds</span>
                                            <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/60">Subscriptions</span>
                                            <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/60">Settlements</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-64 flex-shrink-0">
                                    <div className="aspect-square bg-black/5 rounded-2xl flex items-center justify-center">
                                        <span className="text-black/20 text-sm">Video 2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-16 border-t border-black/10">
                                <div className="flex flex-col md:flex-row items-start gap-6 flex-1">
                                    <div className="flex-shrink-0">
                                        <span className={`${ppAgrandirHeading.className} text-7xl md:text-8xl font-bold text-black/5`}>
                                            03
                                        </span>
                                    </div>
                                    <div className="flex-1 md:pt-2">
                                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                            Recover in one click
                                        </h2>
                                        <p className="text-black/60 text-lg leading-relaxed mb-6">
                                            Cancel subscriptions, request refunds, file claims. Just tap and we handle the rest. Money goes directly to your bank.
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-black/40">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>No paperwork • No hassle</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-64 flex-shrink-0">
                                    <div className="aspect-square bg-black/5 rounded-2xl flex items-center justify-center">
                                        <span className="text-black/20 text-sm">Video 3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black mb-6`}>
                            Ready to find your money?
                        </h2>
                        <p className="text-black/60 mb-8 text-lg">
                            Most users discover $50–$500+ in their first scan.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/login" className="w-full max-w-sm">
                                <button className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 cursor-pointer`}>
                                    Find My Money
                                </button>
                            </Link>
                            <p className="text-sm text-black/40">
                                Free to scan • Takes 30 seconds
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Teaser */}
                <section className="py-16 px-6 border-t border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Is it really free?</h3>
                                <p className="text-black/50 text-sm">Free to scan. We only earn when you recover money.</p>
                            </div>
                            <div>
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Is my data safe?</h3>
                                <p className="text-black/50 text-sm">Bank-level security. We never store your credentials.</p>
                            </div>
                            <div>
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>How long does it take?</h3>
                                <p className="text-black/50 text-sm">30 seconds to scan. Refunds depend on the merchant.</p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/learn" className="text-black/50 hover:text-black transition-colors text-sm">
                                More questions? Visit our Education Hub →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
