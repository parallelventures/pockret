'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import { CheckCircle2, XCircle, ArrowRight, Pause, TrendingDown, Heart, Brain, Dumbbell, Music, Film, Cloud, Wrench } from "lucide-react";
import Image from "next/image";

export default function WhenNotToCancelPage() {
    const lastUpdated = "December 13, 2025";

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        When Not to Cancel a Subscription
                    </h1>
                    <p className="text-black/50 text-sm">
                        Last updated: <span className="text-black/70">{lastUpdated}</span>
                    </p>
                </section>

                {/* Intro */}
                <section className="px-6 pb-12">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret helps you spot wasted spending—forgotten subscriptions, unfair fees, hidden overcharges, and billing errors. But here's something we believe strongly:
                        </p>
                        <div className="bg-black rounded-2xl p-6 md:p-8">
                            <p className={`${ppAgrandirHeading.className} text-white text-xl md:text-2xl font-bold mb-2`}>
                                Not every subscription is "bad."
                            </p>
                            <p className="text-white/70">
                                Some subscriptions genuinely improve your life. Canceling them can cost you more than you save.
                            </p>
                        </div>
                        <p className="text-black/70 text-lg leading-relaxed mt-6">
                            This guide helps you make smarter decisions—not just "cancel everything."
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="px-6 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                1) The goal isn't to spend less. It's to waste less.
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Spending money on something you use and value is normal. The real problem is:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "paying for services you don't use",
                                        "paying more than you agreed to",
                                        "being billed after cancellation",
                                        "\"trial → paid\" conversions you didn't notice",
                                        "duplicate charges, surprise fees, and billing errors"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-medium text-black">
                                    Pockret exists to fight waste and unfairness, not to shame spending.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                2) Subscriptions you probably shouldn't cancel (if you truly use them)
                            </h2>

                            {/* Entertainment */}
                            <div className="bg-white rounded-2xl p-6 border border-black/5 mb-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                        <Film className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black`}>
                                        Entertainment you use weekly
                                    </h3>
                                </div>
                                <p className="text-black/70 mb-4">
                                    If you watch or listen regularly, the value can be real:
                                </p>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="h-8 flex items-center">
                                        <Image src="/Netflix.png" alt="Netflix" width={80} height={24} className="h-6 w-auto object-contain" />
                                    </div>
                                    <div className="h-8 flex items-center">
                                        <Image src="/spotify.svg" alt="Spotify" width={80} height={24} className="h-6 w-auto object-contain" />
                                    </div>
                                    <div className="h-8 flex items-center">
                                        <Image src="/amazon.png" alt="Amazon Prime" width={80} height={24} className="h-6 w-auto object-contain" />
                                    </div>
                                    <div className="h-8 flex items-center">
                                        <Image src="/apple.jpg" alt="Apple" width={24} height={24} className="h-6 w-auto object-contain rounded" />
                                    </div>
                                    <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/70">Disney+</span>
                                    <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/70">Hulu</span>
                                    <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/70">Max</span>
                                    <span className="px-3 py-1.5 bg-black/5 rounded-full text-sm text-black/70">YouTube Premium</span>
                                </div>
                                <p className="text-sm text-black/50 italic">
                                    Rule of thumb: if you use it weekly, it's often worth it.
                                </p>
                            </div>

                            {/* Tools */}
                            <div className="bg-white rounded-2xl p-6 border border-black/5 mb-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Wrench className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black`}>
                                        Tools that save time or make money
                                    </h3>
                                </div>
                                <p className="text-black/70 mb-4">
                                    Subscriptions can be an investment:
                                </p>
                                <ul className="space-y-2 text-black/70 mb-4">
                                    <li className="flex items-start gap-2">
                                        <Cloud className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Cloud storage (iCloud, Google One, Dropbox) if you rely on backups</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Brain className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Productivity tools (Notion, Microsoft 365) if you use them for work/school</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Wrench className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Design tools (Adobe) if you actually create with them</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-black/50 italic">
                                    Rule of thumb: if it saves you time every week or helps you earn, be careful before cutting it.
                                </p>
                            </div>

                            {/* Health */}
                            <div className="bg-white rounded-2xl p-6 border border-black/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black`}>
                                        Health & well-being subscriptions you actively use
                                    </h3>
                                </div>
                                <p className="text-black/70 mb-4">
                                    If it supports your body or mind, the payoff can be huge:
                                </p>
                                <ul className="space-y-2 text-black/70 mb-4">
                                    <li className="flex items-start gap-2">
                                        <Dumbbell className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Gym membership you attend</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Brain className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Meditation/sleep apps you actually open</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Heart className="w-4 h-4 text-black/40 flex-shrink-0 mt-1" />
                                        <span>Therapy subscriptions you're using consistently</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-black/50 italic">
                                    Rule of thumb: if it improves your health and you stick with it, the ROI is often higher than the cost.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 - Checklist */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                3) A simple checklist: should you keep or cancel?
                            </h2>
                            <p className="text-black/70 mb-6">
                                Before canceling, ask:
                            </p>
                            <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-4">
                                {[
                                    "Do I use this at least once per week?",
                                    "Would I notice if it disappeared tomorrow?",
                                    "Does it reduce stress, save time, or improve my life in a measurable way?",
                                    "Is there a cheaper plan that still gives me what I need?",
                                    "Is this service still delivering what it promised?",
                                    "Am I canceling because I truly don't need it—or because I'm reacting emotionally?"
                                ].map((question, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-black/[0.02] transition-colors">
                                        <span className={`${ppAgrandirHeading.className} text-sm font-bold text-black/30 w-6`}>{i + 1}.</span>
                                        <span className="text-black/70">{question}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-black/60 mt-4 text-sm">
                                If you answered "yes" to 2–3 of these, consider keeping it (or downgrading instead of canceling).
                            </p>
                        </div>

                        {/* Section 4 - Alternatives */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                4) Smarter alternatives to canceling
                            </h2>
                            <p className="text-black/70 mb-6">
                                Sometimes the best move isn't cancel—it's optimize:
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                        <TrendingDown className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} font-bold text-black mb-2`}>
                                        Downgrade the plan
                                    </h3>
                                    <p className="text-black/60 text-sm">
                                        Many services offer cheaper tiers, annual discounts, student pricing, or family plans.
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                                        <Pause className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} font-bold text-black mb-2`}>
                                        Pause instead of cancel
                                    </h3>
                                    <p className="text-black/60 text-sm">
                                        If you only use something seasonally, pausing can be better than canceling and forgetting later.
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} font-bold text-black mb-2`}>
                                        Keep it, set a reminder
                                    </h3>
                                    <p className="text-black/60 text-sm">
                                        If it's valuable but you want control, set a recurring reminder to re-evaluate monthly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 - When to Cancel */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                5) When canceling is the right move
                            </h2>
                            <p className="text-black/70 mb-6">
                                Cancel if:
                            </p>
                            <div className="bg-red-50 rounded-2xl p-6 space-y-3">
                                {[
                                    "you haven't used it in 30+ days and don't miss it",
                                    "it renewed without clear consent",
                                    "you canceled but still got charged",
                                    "the price increased unexpectedly",
                                    "you see multiple charges from the same merchant",
                                    "you don't recognize the merchant or the charge"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-black/70">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-black font-medium mt-4">
                                That's not "saving money." That's fixing a leak.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                6) How Pockret helps you decide (not just cancel)
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Pockret is designed to help you make informed, fair decisions by:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "detecting recurring charges and patterns",
                                        "highlighting what looks unused or suspicious",
                                        "showing what you've spent over time (so you can judge value)",
                                        "making it easy to take action only when you choose"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-medium text-black">
                                    The goal: keep what gives you value, remove what doesn't, and fight unfair billing.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                7) A quick note about refunds
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Wanting to cancel and wanting a refund are different things.
                                </p>
                                <p>
                                    Refunds depend on:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>the merchant's policy,</li>
                                    <li>the payment method rules,</li>
                                    <li>timing (how long ago the charge happened),</li>
                                    <li>and whether the charge was authorized.</li>
                                </ul>
                                <p>
                                    Pockret can help you prepare and submit requests, but <strong className="text-black">refunds are never guaranteed</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 - Bottom Line */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                8) Bottom line
                            </h2>
                            <div className="bg-black rounded-2xl p-6 md:p-8 mb-6">
                                <p className={`${ppAgrandirHeading.className} text-white text-2xl md:text-3xl font-bold`}>
                                    Cancel waste. Keep value.
                                </p>
                                <p className="text-white/60 mt-2">
                                    That's the whole philosophy.
                                </p>
                            </div>
                            <p className="text-black/70 leading-relaxed">
                                If you're unsure, start with awareness: review your recurring charges, identify the obvious "I forgot this existed" items, then decide subscription-by-subscription.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 bg-white border-t border-black/5">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-6`}>
                            Ready to find your money?
                        </h2>
                        <p className="text-black/60 mb-8">
                            Scan your accounts. See what you're really paying for.
                        </p>
                        <Link href="/login" className="w-full max-w-sm inline-block">
                            <button className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2`}>
                                Start Your Pockret Scan
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-8 px-6 border-t border-black/5">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-black/40 text-sm text-center">
                            This page is for educational purposes and is not legal, financial, or medical advice. You are responsible for your decisions and outcomes.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
