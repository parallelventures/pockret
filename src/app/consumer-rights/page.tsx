'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../fonts";
import Link from "next/link";

const laws = [
    {
        acronym: "FCBA",
        name: "Fair Credit Billing Act",
        description: "Dispute billing errors, unauthorized charges, and charges for goods not delivered within 60 days.",
        keyRight: "60 days to dispute any billing error",
        link: "https://www.ftc.gov/legal-library/browse/statutes/fair-credit-billing-act",
        source: "FTC.gov",
    },
    {
        acronym: "EFTA",
        name: "Electronic Fund Transfer Act",
        description: "Protection against unauthorized withdrawals and errors involving electronic transfers (ATMs, debit cards, direct deposits).",
        keyRight: "Limited liability for unauthorized transfers",
        link: "https://www.consumerfinance.gov/rules-policy/regulations/1005/",
        source: "CFPB.gov",
    },
    {
        acronym: "TILA",
        name: "Truth in Lending Act",
        description: "Lenders must disclose terms and costs clearly before you sign. You have the right to accurate information.",
        keyRight: "Right to rescind certain loans within 3 days",
        link: "https://www.consumerfinance.gov/rules-policy/regulations/1026/",
        source: "CFPB.gov",
    },
    {
        acronym: "ARLs",
        name: "Automatic Renewal Laws",
        description: "Companies must get clear consent before auto-renewing subscriptions and make cancellation easy.",
        keyRight: "Right to cancel with one click",
        link: "https://www.ftc.gov/business-guidance/resources/negative-options",
        source: "FTC.gov",
    },
];

export default function ConsumerRightsPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Know your rights.
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                        U.S. law gives you powerful protections against unauthorized charges, hidden fees, and unfair billing. Most people don't know they exist.
                    </p>
                </section>

                {/* Laws Grid */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <div className="space-y-6">
                        {laws.map((law, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-black/5"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <span className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black/10`}>
                                            {law.acronym}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                            {law.name}
                                        </h2>
                                        <p className="text-black/60 text-base leading-relaxed mb-4">
                                            {law.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full">
                                                <svg className="w-4 h-4 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm text-black/60">{law.keyRight}</span>
                                            </div>
                                            <a
                                                href={law.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-black/40 hover:text-black transition-colors underline"
                                            >
                                                Read on {law.source} →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How Pockret Helps */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto text-center border-t border-black/10 pt-16">
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                            Pockret turns these rights into action.
                        </h2>
                        <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
                            We detect violations automatically and help you file disputes in one click. No legal knowledge required.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/login" className="w-full max-w-sm">
                                <button className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 cursor-pointer`}>
                                    Find My Money
                                </button>
                            </Link>
                            <Link href="/learn" className="text-black/50 hover:text-black transition-colors text-sm">
                                Learn more about your rights →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-10 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-black/30 text-xs">
                            This page is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for specific legal questions.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
