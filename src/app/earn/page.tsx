'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import Link from "next/link";

const steps = [
    {
        num: "01",
        title: "Share your link",
        description: "Get your personal invite link and share it with friends, family, or anyone who could benefit.",
    },
    {
        num: "02",
        title: "They recover money",
        description: "When someone signs up, Pockret scans their accounts for refunds, forgotten subscriptions, and settlements.",
    },
    {
        num: "03",
        title: "You earn a share",
        description: "Every time we help them recover money, you earn 10% as a thank-you. They keep everything.",
    },
];

const faqs = [
    {
        q: "Do my friends lose any money?",
        a: "No. Your friends keep 100% of what Pockret recovers for them. Your reward comes from Pockret's side as a marketing cost.",
    },
    {
        q: "Is there a limit to earning?",
        a: "No cap. As long as people join with your link and recover money, you keep earning.",
    },
    {
        q: "What if they don't find any money?",
        a: "Then nobody gets paid. We only reward real recovered money, not empty signups.",
    },
    {
        q: "How do I get paid?",
        a: "Set up your payout method in your dashboard. Cash out once you reach the minimum threshold.",
    },
];

export default function EarnExtraMoneyPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Invite friends.<br />Earn money.
                    </h1>
                    <p className="text-xl text-black/60 max-w-2xl leading-relaxed mb-8">
                        Share Pockret with people you know. When they recover money, you earn 10% for the first 3 months.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/login">
                            <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                Get My Invite Link
                            </button>
                        </Link>
                        <a href="#how-it-works">
                            <button className="px-8 py-3 rounded-full border border-black/20 text-black hover:border-black/40 transition-colors cursor-pointer">
                                How It Works
                            </button>
                        </a>
                    </div>
                </section>

                {/* How it works */}
                <section id="how-it-works" className="py-20 px-6 bg-white border-y border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-12`}>
                            How it works.
                        </h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-8 items-start">
                                    <span className={`${ppAgrandirHeading.className} text-5xl md:text-6xl font-bold text-black/10 flex-shrink-0`}>
                                        {step.num}
                                    </span>
                                    <div className="pt-2">
                                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-black/60 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Example earnings */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            What you can earn.
                        </h2>
                        <p className="text-black/60 mb-12 max-w-2xl">
                            You earn 10% of what Pockret recovers for each friend you refer, for their first 3 months.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { name: "Sarah", recovered: 280, earned: 28 },
                                { name: "Mike", recovered: 145, earned: 14.50 },
                                { name: "Alex", recovered: 520, earned: 52 },
                            ].map((friend, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-black/5"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-black">{friend.name[0]}</span>
                                        </div>
                                        <span className="text-sm font-bold text-green-600">+${friend.earned.toFixed(2)}</span>
                                    </div>
                                    <p className="text-black/50 text-sm mb-1">
                                        {friend.name} recovers ${friend.recovered}
                                    </p>
                                    <p className="text-black/30 text-xs">
                                        They keep ${friend.recovered} · You get ${friend.earned.toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why it's fair */}
                <section className="py-20 px-6 bg-white border-y border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            Why this isn't a pyramid scheme.
                        </h2>
                        <p className="text-black/60 mb-12 max-w-2xl">
                            You only earn when real money is recovered for real people.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/[0.02] rounded-2xl p-6">
                                <h3 className="font-bold text-black mb-4">What we don't do</h3>
                                <ul className="space-y-3 text-black/60">
                                    <li className="flex items-center gap-3">
                                        <span className="text-red-500">✗</span> No pay-to-join
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-red-500">✗</span> No teams or levels
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-red-500">✗</span> No spamming required
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-black/[0.02] rounded-2xl p-6">
                                <h3 className="font-bold text-black mb-4">How it actually works</h3>
                                <ul className="space-y-3 text-black/60">
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600">✓</span> Friends keep 100%
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600">✓</span> You earn from Pockret
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600">✓</span> Zero risk for everyone
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-12`}>
                            Questions.
                        </h2>

                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-black/10 pb-8 last:border-0">
                                    <h3 className="font-bold text-black mb-2">{faq.q}</h3>
                                    <p className="text-black/60">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-black rounded-3xl p-8 md:p-12 text-center">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-white mb-4`}>
                                Ready to start earning?
                            </h2>
                            <p className="text-white/60 mb-8 max-w-md mx-auto">
                                Get your invite link and share it with anyone who could benefit from Pockret.
                            </p>
                            <Link href="/login">
                                <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors cursor-pointer`}>
                                    Get My Invite Link
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
