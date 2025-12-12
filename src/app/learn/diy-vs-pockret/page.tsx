'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Clock } from "lucide-react";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function DiyVsPockretArticle() {
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
                            Can’t I Just Do This Myself? (Yes… but Here’s Why You Won’t.)
                        </h1>
                        <p className="text-black/50 text-sm">
                            Why "finding leaks manually" sounds good in theory but fails in practice.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            On paper, the objection is valid:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                "Why would I need Pockret? I can just check my bank statements and cancel things myself."
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            And technically? Yes. You could.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You could open your banking app every week, go line by line, spot every odd fee, list all your subscriptions, negotiate refunds, track renewals… manually.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            This article is about <strong>why almost no one does that</strong> — and why using a tool like Pockret isn’t laziness. It’s leverage.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. The “I’ll do it later” trap
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You’ve seen transactions like these before:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"Wait, what is this $12.99 again?"</li>
                            <li>"Didn’t I cancel that thing?"</li>
                            <li>"Why is this fee higher than last time?"</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You think: <em>"I should look into that."</em>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Then what happens?
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You close the app.</li>
                            <li>You get back to work, life, kids, notifications.</li>
                            <li>The thought disappears…</li>
                            <li>…until the next month. And the next. And the next.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            The problem is not that you <em>can’t</em> manage your own money. The problem is that your attention is being attacked from 1,000 directions all day. <strong>Pockret’s job is to not forget what you will inevitably forget.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Humans vs machines: who wins at boring, repetitive scanning?
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Let’s be honest:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Scanning transactions is boring.</li>
                            <li>Finding patterns in 6–12 months of data is exhausting.</li>
                            <li>Comparing fees month over month? No thanks.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Machines don’t care. They don’t get tired. They are built for this exact kind of pattern recognition.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret can:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>scan hundreds or thousands of transactions in seconds</li>
                            <li>detect recurring charges you stopped noticing</li>
                            <li>flag repeated small fees you’ve accepted as “normal”</li>
                            <li>remember trial start/end behaviors when you do not</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            It’s not about intelligence. It’s about <strong>stamina</strong> and <strong>consistency</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. You still do the “boss” part — Pockret does the grunt work
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Think of the flow like this:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-rose-50/50 p-6 rounded-xl border border-rose-100">
                                <h3 className="font-bold text-rose-950 mb-4 text-xl">Without Pockret</h3>
                                <p className="text-rose-900/80 mb-2">You must:</p>
                                <ul className="list-disc pl-6 space-y-2 text-rose-900/70">
                                    <li>find the problem</li>
                                    <li>understand if it’s really a problem</li>
                                    <li>figure out what to say</li>
                                    <li>actually go say it</li>
                                </ul>
                            </div>
                            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="font-bold text-emerald-950 mb-4 text-xl">With Pockret</h3>
                                <p className="text-emerald-900/80 mb-2">Pockret:</p>
                                <ul className="list-disc pl-6 space-y-2 text-emerald-900/70 mb-4">
                                    <li>finds suspect charges & unused subscriptions</li>
                                    <li>explains why they might be an issue</li>
                                    <li>prepares a message or flow to fix it</li>
                                </ul>
                                <p className="text-emerald-900/80 mb-2">You:</p>
                                <ul className="list-disc pl-6 space-y-2 text-emerald-900/70">
                                    <li>review</li>
                                    <li>decide</li>
                                    <li>click send</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You’re not outsourcing your judgment. You’re outsourcing the <strong>grunt work</strong> needed to even get to the point where you can exercise judgment.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. “But I’m already careful with my money”
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            That’s great. Pockret is not only for people who are “bad” with money.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            In fact, careful people often get <strong>the most</strong> value, because:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>they already care about optimizing</li>
                            <li>they get angry (rightfully) when they see unfair fees</li>
                            <li>they love the feeling of “I squeezed an extra $300 out of my existing life with no extra work”</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Pockret doesn’t replace your discipline. It <strong>amplifies</strong> it by giving you more eyes and more memory than you have alone.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Time is a cost too (even if you don’t see it on a statement)
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Could you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>download CSVs from your bank</li>
                            <li>filter by merchants</li>
                            <li>calculate trends over time</li>
                            <li>make a list of “cancel / renegotiate / claim” items</li>
                            <li>draft 10+ emails to support and your bank</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Sure. But your time <strong>has a value</strong>.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If Pockret helps you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>find a few hundred dollars</li>
                            <li>save a couple of subscriptions worth $20–50/month</li>
                            <li>catch a few fees or overcharges</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            …without you spending hours, the trade is obvious.
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-12 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                You’re not paying Pockret for something you “could” technically do. You’re paying it to make sure it <strong>actually happens</strong> — consistently, quietly, in the background.
                            </p>
                        </blockquote>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. Do this experiment once
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If you’re skeptical, run this test:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-2 text-black/70">
                            <li>Spend 30 minutes on your own:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>open your banking app</li>
                                    <li>check all recent transactions</li>
                                    <li>see how many leaks / weird charges you can find alone</li>
                                </ul>
                            </li>
                            <li>Then, connect the same accounts to Pockret and let it scan.</li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Now compare:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>How many subscriptions did <em>you</em> find vs Pockret?</li>
                            <li>How many fees did you notice vs what Pockret flagged?</li>
                            <li>How long did your process take vs one automated scan?</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            If you win, amazing — you’ve got a system that works.
                            If Pockret wins (and it usually will), you just proved something:
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 font-bold">
                            Doing it yourself isn’t the same as having a tool built specifically to protect you.
                        </p>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center mt-12">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Don't waste another hour scanning statements.
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Let Pockret do the heavy lifting for you.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-colors cursor-pointer`}>
                                        Automate My Savings
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
                        Automate My Savings <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
