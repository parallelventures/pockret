'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../fonts";
import Link from "next/link";

const recoveryTypes = [
    {
        title: "Forgotten subscriptions",
        description: "Services you signed up for but no longer use. Streaming, apps, gym memberships, software.",
    },
    {
        title: "Duplicate charges",
        description: "The same charge appearing twice on your statement. Processing errors, system glitches.",
    },
    {
        title: "Hidden fees",
        description: "Charges that shouldn't be there. Junk fees, undisclosed costs, unauthorized charges.",
    },
    {
        title: "Class action settlements",
        description: "Lawsuits you're eligible for. Data breaches, consumer fraud, product defects.",
    },
    {
        title: "Overcharges",
        description: "When you paid more than you should. Price errors, wrong amounts, expired promotions.",
    },
    {
        title: "Bank fees",
        description: "Overdraft fees, maintenance fees, and other charges you can dispute.",
    },
];

const steps = [
    {
        number: "01",
        title: "Connect securely",
        description: "Link your bank through Plaid. Read-only access—we can see transactions but never move money.",
    },
    {
        number: "02",
        title: "We scan everything",
        description: "Our AI analyzes your transaction history to find refunds, forgotten charges, and settlement eligibility.",
    },
    {
        number: "03",
        title: "Recover in one click",
        description: "For each opportunity, tap to recover. We handle the dispute, cancellation, or claim for you.",
    },
];

export default function ProductPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Stop losing money you don't know you're losing.
                    </h1>
                    <p className="text-xl text-black/60 max-w-2xl leading-relaxed mb-8">
                        Pockret scans your accounts to find refunds, forgotten subscriptions, and money companies owe you. Then helps you recover it in one click.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/login">
                            <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                Find My Money
                            </button>
                        </Link>
                        <Link href="/how-it-works">
                            <button className="px-8 py-3 rounded-full border border-black/20 text-black hover:border-black/40 transition-colors cursor-pointer">
                                See How It Works
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 px-6 border-y border-black/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
                        <div>
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>$2M+</p>
                            <p className="text-black/50 text-sm mt-1">Recovered</p>
                        </div>
                        <div>
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>30s</p>
                            <p className="text-black/50 text-sm mt-1">To scan</p>
                        </div>
                        <div>
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>Free</p>
                            <p className="text-black/50 text-sm mt-1">To start</p>
                        </div>
                    </div>
                </section>

                {/* What you can recover */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            What you can recover.
                        </h2>
                        <p className="text-black/60 mb-12 max-w-2xl">
                            Most people don't realize how much money leaks out of their accounts every month.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {recoveryTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 border border-black/5"
                                >
                                    <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>
                                        {type.title}
                                    </h3>
                                    <p className="text-black/50 text-sm leading-relaxed">
                                        {type.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-20 px-6 bg-white border-y border-black/10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-12`}>
                            How it works.
                        </h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-8 items-start">
                                    <span className={`${ppAgrandirHeading.className} text-5xl md:text-6xl font-bold text-black/10 flex-shrink-0`}>
                                        {step.number}
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

                {/* Security */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-black rounded-3xl p-8 md:p-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
                                Bank-level security. Zero risk.
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-white font-medium mb-2">Read-only access</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        We can only see your transactions. We can never move money, make purchases, or change settings.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-2">Powered by Plaid</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Trusted by Venmo, Chime, and 12,000+ banks. We never see your bank password.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-2">256-bit encryption</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Your data is encrypted end-to-end. The same security used by major banks.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-2">We never sell your data</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Your transaction history is never sold to advertisers or third parties.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link href="/security" className="text-white/60 hover:text-white text-sm transition-colors">
                                    Learn more about security →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center border-t border-black/10 pt-20">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            Free to scan. Pay only when you recover.
                        </h2>
                        <p className="text-black/60 mb-8 max-w-xl mx-auto">
                            See what you're owed for free. We take 20% only when we successfully recover money for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/login">
                                <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                    Start Free Scan
                                </button>
                            </Link>
                        </div>
                        <p className="text-black/40 text-sm mt-4">
                            No credit card required
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
