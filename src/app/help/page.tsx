'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../fonts";
import Link from "next/link";

const categories = [
    {
        slug: "getting-started",
        title: "Getting Started",
        description: "Learn how Pockret works and get set up in minutes",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        slug: "security-privacy",
        title: "Security & Privacy",
        description: "How we protect your data and keep your information safe",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
    {
        slug: "refunds-recovery",
        title: "Refunds & Recovery",
        description: "Everything about finding and recovering your money",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        slug: "account-billing",
        title: "Account & Billing",
        description: "Manage your account, subscription, and payments",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
    },
    {
        slug: "troubleshooting",
        title: "Troubleshooting",
        description: "Solutions to common issues and error messages",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        slug: "legal",
        title: "Legal & Compliance",
        description: "Terms, privacy policy, and regulatory information",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

export default function HelpCenterPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Help Center
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed mb-10">
                        Find answers, guides, and everything you need to know about Pockret.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full bg-white border border-gray-200 text-black rounded-full py-3 pl-12 pr-6 shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none focus:border-black/20 transition-all text-base"
                        />
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="max-w-5xl mx-auto px-6 pb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/help/${category.slug}`}
                                className="bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all group"
                            >
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                                    {category.icon}
                                </div>
                                <h2 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>
                                    {category.title}
                                </h2>
                                <p className="text-black/50 text-sm leading-relaxed">
                                    {category.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-2xl mx-auto border-t border-black/10 pt-16">
                        <div className="text-center">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                Can't find what you're looking for?
                            </h2>
                            <p className="text-black/60 mb-6">
                                Our team is here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="mailto:support@pockret.com">
                                    <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                        Contact Support
                                    </button>
                                </a>
                                <span className="text-black/40">or</span>
                                <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full border border-black/20 text-black font-bold hover:border-black/40 transition-colors cursor-pointer`}>
                                    Chat with us
                                </button>
                            </div>
                            <p className="text-black/40 text-sm mt-4">
                                We respond in ~2 minutes
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
