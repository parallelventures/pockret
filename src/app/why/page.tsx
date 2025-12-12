'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../fonts";
import Link from "next/link";

export default function WhyPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-8`}>
                        Every year, billions of dollars disappear from your pocket.
                    </h1>
                    <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
                        Hidden fees. Forgotten subscriptions. Overcharges. Unclaimed settlements. Companies count on you being too busy to notice.
                    </p>
                </section>

                {/* Story */}
                <section className="max-w-3xl mx-auto px-6 pb-20">
                    <div className="space-y-12">
                        {/* The Problem */}
                        <div>
                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                The system is designed against you.
                            </h2>
                            <p className="text-black/60 text-lg leading-relaxed">
                                Subscription cancellations are buried in settings. Refund policies are written in legal jargon. Class action settlements send you a postcard you'll throw away. Small charges slip through because fighting for $12 feels like a waste of time.
                            </p>
                        </div>

                        {/* The Realization */}
                        <div>
                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                Small leaks add up to big losses.
                            </h2>
                            <p className="text-black/60 text-lg leading-relaxed">
                                $9.99 here. $14.99 there. A $2 "convenience fee." A subscription you forgot about. Over a year, these "nothing" charges can quietly drain hundreds or thousands of dollars from your account.
                            </p>
                        </div>

                        {/* The Mission */}
                        <div className="bg-black rounded-2xl p-8 md:p-10">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-white mb-4`}>
                                We built Pockret to fight back.
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                One app that scans your accounts, finds every dollar you're owed, and helps you recover it in one click. No lawyers. No paperwork. No hassle.
                            </p>
                            <p className="text-white/50 text-base">
                                If money belongs to you, it should be in your pocket — not sitting in a corporation's account.
                            </p>
                        </div>

                        {/* The Belief */}
                        <div>
                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                We believe in transparency.
                            </h2>
                            <p className="text-black/60 text-lg leading-relaxed">
                                Free to scan. Free to see what you're owed. We only earn when you actually recover money. Our success is directly tied to yours.
                            </p>
                        </div>

                        {/* The Promise */}
                        <div className="border-l-4 border-black pl-6">
                            <p className={`${ppAgrandirHeading.className} text-xl font-bold text-black`}>
                                On your side. Always.
                            </p>
                            <p className="text-black/50 text-base mt-2">
                                — The Pockret Team
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-2xl mx-auto text-center border-t border-black/10 pt-16">
                        <h3 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-6`}>
                            Ready to see what you're owed?
                        </h3>
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
            </main>

            <Footer />
        </div>
    );
}
