'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import Link from "next/link";
import { ArrowRight, Share2, Search, DollarSign, ShieldCheck, CheckCircle2, LayoutDashboard, HelpCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function EarnExtraMoneyPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-background flex flex-col font-sans`}>
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-white -z-10" />

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-8">
                            Referral Program
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[0.9]`}>
                            Earn extra money<br />the easy way
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                            Invite your friends to Pockret. They recover <em>their</em> money — you earn a share for helping.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                            <Link href="/login" className="w-full">
                                <button className={`${ppAgrandirHeading.className} w-full bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-all active:scale-95 shadow-xl shadow-black/10`}>
                                    Get my invite link
                                </button>
                            </Link>
                            <a href="#how-it-works" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-4 rounded-full font-medium text-text-muted hover:text-foreground hover:bg-black/5 transition-colors">
                                    See how it works
                                </button>
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-text-muted/80">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No weird tasks
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real rewards
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automatic
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works (3 Steps) */}
                <section id="how-it-works" className="py-24 px-6 bg-white border-y border-border">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-foreground mb-4`}>
                                How it works
                            </h2>
                            <p className="text-lg text-text-muted">Simple, transparent, and fair.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Share2 className="w-8 h-8" />
                                </div>
                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                    1. Share your link
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    Get your personal invite link and share it anywhere: text, group chats, social media, email – whatever feels natural.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                    2. They recover money
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    When someone signs up and connects their accounts, Pockret scans for hidden leaks, unused subscriptions, and refunds.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                    <DollarSign className="w-8 h-8" />
                                </div>
                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                    3. You earn a share
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    Every time we help them recover money, you earn a percentage as a thank-you. They keep their money. You earn extra.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center max-w-2xl mx-auto">
                            <p className="text-indigo-900 font-medium">
                                💡 For the first 3 months, you earn <strong>10% of everything Pockret helps them recover</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What You Can Earn */}
                <section className="py-24 px-6 bg-[#F9FAFB]">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-foreground mb-6`}>
                                    What you can earn
                                </h2>
                                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                                    You’re not going to get rich overnight. But you <em>can</em> turn Pockret into a simple, passive extra income stream.
                                </p>

                                <blockquote className="border-l-4 border-black/10 pl-6 py-2 mb-8 italic text-text-muted/80">
                                    You’re simply getting rewarded for something you would probably do anyway: telling people about an app that helped you get money back.
                                </blockquote>

                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} text-black font-bold flex items-center hover:translate-x-1 transition-transform`}>
                                        Start earning now <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {/* Example 1 */}
                                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-foreground">Friend 1 (Sarah)</h4>
                                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">+ $28.00</span>
                                    </div>
                                    <div className="text-sm text-text-muted mb-1">
                                        Sarah recovers $280 in refunds.
                                    </div>
                                    <div className="text-xs text-text-muted/60">
                                        She keeps $280 · You get $28
                                    </div>
                                </div>

                                {/* Example 2 */}
                                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm opacity-90">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-foreground">Friend 2 (Mike)</h4>
                                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">+ $14.50</span>
                                    </div>
                                    <div className="text-sm text-text-muted mb-1">
                                        Mike cancels $145 of unused subs.
                                    </div>
                                    <div className="text-xs text-text-muted/60">
                                        He keeps $145 · You get $14.50
                                    </div>
                                </div>

                                {/* Example 3 */}
                                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm opacity-80">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-foreground">Friend 3 (Alex)</h4>
                                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">+ $52.00</span>
                                    </div>
                                    <div className="text-sm text-text-muted mb-1">
                                        Alex finds $520 in owed settlements.
                                    </div>
                                    <div className="text-xs text-text-muted/60">
                                        He keeps $520 · You get $52
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why It's Fair */}
                <section className="py-24 px-6 bg-white border-y border-border">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-rose-50 rounded-2xl mb-6 text-rose-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-foreground mb-6`}>
                            Why this isn’t another sketchy referral scheme
                        </h2>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
                            Pockret’s referral program is built on one simple rule: You only earn when <strong>real money</strong> is recovered for <strong>real people</strong>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-red-900/80">
                                        <span className="text-red-500 font-bold">✕</span> No pay-to-join
                                    </li>
                                    <li className="flex items-center gap-3 text-red-900/80">
                                        <span className="text-red-500 font-bold">✕</span> No "teams" or levels
                                    </li>
                                    <li className="flex items-center gap-3 text-red-900/80">
                                        <span className="text-red-500 font-bold">✕</span> No spamming strangers
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-emerald-900/80">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Friends keep 100%
                                    </li>
                                    <li className="flex items-center gap-3 text-emerald-900/80">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> You earn from Pockret
                                    </li>
                                    <li className="flex items-center gap-3 text-emerald-900/80">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 0% risk for everyone
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard Preview */}
                <section className="py-24 px-6 bg-[#0F172A] text-white overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 relative">
                                {/* Mockup */}
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-indigo-500/20">
                                                <LayoutDashboard className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <span className="font-bold">Referral Dashboard</span>
                                        </div>
                                        <div className="text-xs text-white/40 font-mono">LIVE</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="text-sm text-white/60 mb-1">Total Earned</div>
                                            <div className="text-2xl font-bold text-emerald-400">$342.10</div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="text-sm text-white/60 mb-1">Friends Helped</div>
                                            <div className="text-2xl font-bold">14</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">JD</div>
                                                <div className="text-sm font-medium">John Doe</div>
                                            </div>
                                            <div className="text-emerald-400 font-bold text-sm">+$12.50</div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">AS</div>
                                                <div className="text-sm font-medium">Alice Smith</div>
                                            </div>
                                            <div className="text-emerald-400 font-bold text-sm">+$45.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold mb-6`}>
                                    Your referral dashboard
                                </h2>
                                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                                    No spreadsheets. No guessing. You open your dashboard and instantly see how much you've earned and how many friends you've helped.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Track signups in real-time
                                    </li>
                                    <li className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400" /> See pending rewards
                                    </li>
                                    <li className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Cash out with one click
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold text-foreground mb-4`}>
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 mt-1 text-black/40 flex-shrink-0" />
                                    Do my friends lose any money?
                                </h3>
                                <p className="text-text-muted pl-8">
                                    No. Your friends keep 100% of what Pockret recovers for them. Your reward comes from Pockret’s side as a marketing cost.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 mt-1 text-black/40 flex-shrink-0" />
                                    Is there a limit to earning?
                                </h3>
                                <p className="text-text-muted pl-8">
                                    We don’t cap your total earnings. As long as people join with your link and recover money, you keep earning.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 mt-1 text-black/40 flex-shrink-0" />
                                    What if they don't find any money?
                                </h3>
                                <p className="text-text-muted pl-8">
                                    Then nobody gets paid — and that’s okay. We only reward real recovered money, not just empty signups.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 mt-1 text-black/40 flex-shrink-0" />
                                    How do I get paid?
                                </h3>
                                <p className="text-text-muted pl-8">
                                    You can set up your payout method in your dashboard (Bank Transfer, PayPal, etc.). Cash out once you reach the minimum threshold.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center bg-black text-white">
                            <div className="relative z-10">
                                <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-bold mb-6`}>
                                    Start with the easiest person: You.
                                </h2>
                                <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                    Step 1: Use Pockret yourself.<br />
                                    Step 2: Share your story and your link.<br />
                                    Step 3: Watch your earnigns grow.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors cursor-pointer`}>
                                        Get my invite link
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
