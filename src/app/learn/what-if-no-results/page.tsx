'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Clock } from "lucide-react";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function WhatIfNoResultsArticle() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 py-16 px-6">
                <article className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link href="/learn" className="text-black/50 hover:text-black transition-colors text-sm">
                            ← Back to Education Hub
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-2 text-sm text-black/40 font-medium mb-4">
                            <Clock className="w-4 h-4" />
                            <span>3 min read</span>
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-6`}>
                            What If Pockret Doesn’t Find Anything For Me? (Why That’s Not a Fail.)
                        </h1>
                        <p className="text-black/50 text-sm">
                            Managing expectations and why "zero leaks" is also a win.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Let’s address one of the most common silent fears:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                "What if I sign up, connect everything… and Pockret finds nothing? I’ll have wasted my time."
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            It’s a fair concern. Nobody wants to feel stupid for trying.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Here’s the truth:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Sometimes Pockret finds <strong>hundreds of dollars</strong> waiting to be recovered.</li>
                            <li>Sometimes Pockret finds <strong>less</strong>.</li>
                            <li>And sometimes, it finds <strong>nothing major right away</strong>.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            That doesn’t mean it was useless. It means you just learned something important about your money. Let’s unpack that.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. Scenario A: Pockret finds a lot → obvious win
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            This is the sexy story:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>it uncovers unused subscriptions</li>
                            <li>catches fees & overcharges</li>
                            <li>spots refunds you never got</li>
                            <li>helps you cancel and claim</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You recover $200, $400, $800+. You’re happy. No one has questions. But there’s another scenario people underestimate…
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Scenario B: Pockret finds “not much” → you just got an audit for free
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If Pockret scans your accounts and says, in essence:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                "We didn’t find much to recover right now."
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            …what you actually got is <strong>a clean bill of health</strong>.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You’ve just:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>double-checked your subscriptions</li>
                            <li>validated that you’re not leaking obvious money</li>
                            <li>confirmed that, at least recently, no major mistakes or unfair charges slipped through</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Most people <strong>never</strong> get that level of reassurance in their life. They just assume everything’s fine… or they assume they’re bleeding money and feel stressed without clarity. You? You now <em>know</em>. Pockret becomes your <strong>ongoing watchdog</strong> instead of a one-shot jackpot machine.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. The “silent” value: what doesn’t happen because Pockret is watching
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Even if Pockret doesn’t find a goldmine on day one, it keeps:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>monitoring new transactions</li>
                            <li>tracking changes in fees</li>
                            <li>watching for new subscriptions</li>
                            <li>checking if something you canceled comes back to life</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The real power is not just in “finding past mistakes”. It’s in <strong>preventing future leaks</strong> before they get big.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Maybe right now your accounts are pretty clean. Great. But:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>what about the next free trial you forget?</li>
                            <li>the next quiet price increase?</li>
                            <li>the next subscription you cancel in-app… that doesn’t cancel in reality?</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Without Pockret: you see it months later. With Pockret: you get flagged early, while it’s still small and fixable.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. You’re not buying a lottery ticket. You’re building a shield.
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If you treat Pockret like a scratch-off ticket — “I’ll try it once, if I don’t win big I throw it away” — you miss the point.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret is closer to:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>an antivirus for your money</li>
                            <li>a watchdog for your subscriptions and fees</li>
                            <li>a permanent audit system that doesn’t get bored</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You don’t uninstall your antivirus because you “didn’t get hacked this week”. You keep it because that’s the whole point.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Same logic here: <strong>No crazy leaks found today? Perfect. But if something appears tomorrow, Pockret will be the first to tell you.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Worst-case vs best-case thinking
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Let’s be rational for a second.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 text-xl">Worst-case scenario</h3>
                                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                                    <li>You spend 2 minutes setup</li>
                                    <li>Pockret finds nothing major right now</li>
                                    <li>You walk away with:
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>clarity</li>
                                            <li>peace of mind</li>
                                            <li>an active guard dog</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="font-bold text-emerald-900 mb-4 text-xl">Best-case scenario</h3>
                                <ul className="list-disc pl-6 space-y-2 text-emerald-800/80">
                                    <li>You do the same 2–3 minutes of setup</li>
                                    <li>Pockret finds leaks, overcharges, refunds waiting</li>
                                    <li>You recover real money and stop future waste</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The time cost is the same. The upside is asymmetric.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. The mindset shift
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret is not just for people who are “in trouble”. It’s for anyone who’s tired of:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>guessing where their money goes</li>
                            <li>trusting that “it’s probably fine”</li>
                            <li>discovering months later that it was not fine at all</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Whether Pockret finds $0 today or $600, you win either way:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>either you <strong>fix</strong> things</li>
                            <li>or you <strong>confirm</strong> that things are in good shape — and keep them that way</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            So if “what if it doesn’t find anything?” was holding you back, reframe it: <strong>“What if it finds something big and I never even checked?”</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            There’s only one way to answer that.
                        </p>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center mt-12">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Check your financial health now.
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Connect, scan, and let Pockret show you the truth — good or bad.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-colors cursor-pointer`}>
                                        Scan My Accounts For Free
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            {/* Sticky CTA (Mobile) */}
            <div className="fixed bottom-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none md:hidden">
                <Link href="/login" className="pointer-events-auto w-full max-w-sm shadow-2xl shadow-black/20 rounded-full">
                    <button className={`${ppAgrandirHeading.className} w-full bg-black text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-all active:scale-95 flex items-center justify-center gap-2 border border-white/20`}>
                        Start Risk-Free Scan <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
