'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import Link from "next/link";
import { ArrowRight, ShieldCheck, BookOpen, AlertCircle, MousePointerClick, Banknote, Timer, Search } from "lucide-react";
import { useState, useMemo } from "react";

// Data moved outside component to be static constants
const MAIN_GUIDES = [
    {
        category: "The Essentials",
        title: "The Subscription Trap",
        description: "How recurring payments quietly steal your future — and exactly how to stop them.",
        href: "/learn/subscription-trap",
        icon: AlertCircle,
        color: "text-rose-600",
        bg: "bg-rose-50",
        content: "recurring payments, gym membership, free trial, forgotten subscriptions, dark patterns, cancellation, difficulty, money leaks, streaming services, monthly bills, automated detection, stop paying, unused apps, zombie subscriptions, financial drain."
    },
    {
        category: "Feature Deep Dive",
        title: "One-Click Recovery",
        description: "How we find and reclaim your money without you lifting a finger.",
        href: "/learn/one-click-recovery",
        icon: MousePointerClick,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        content: "class action settlements, unclaimed money, refunds, hidden cash, junk fees, deceptive pricing, privacy violations, scan transactions, claim form, verify, negotiate, cancel subscriptions, overcharges, micro-fees, dashboard, automated refund requests, money left on the table."
    },
    {
        category: "Knowledge Base",
        title: "US Consumer Laws 2025",
        description: "The new regulations that force companies to play fair and pay you back.",
        href: "/learn/us-consumer-laws-2025",
        icon: BookOpen,
        color: "text-blue-600",
        bg: "bg-blue-50",
        content: "FCBA, Fair Credit Billing Act, EFTA, Electronic Fund Transfer Act, Regulation E, TILA, Truth in Lending Act, fraud, unauthorized charges, billing error, liability tiers, dispute letter, CFPB, FTC, consumer rights, federal law, bank charges, credit card disputes."
    }
];

const TRUST_GUIDES = [
    {
        title: "Is It Safe?",
        description: "Real talk about security, read-only access, and data protection.",
        href: "/learn/is-it-safe",
        icon: ShieldCheck,
        content: "security, plaid, encryption, bank connection, read-only access, data protection, privacy, sell data, credentials, safety, 256-bit encryption, never store passwords, bank level security, trust, scam prevention."
    },
    {
        title: "DIY vs Automation",
        description: "Can't you just do this yourself? (Spoiler: You probably won't.)",
        href: "/learn/diy-vs-pockret",
        icon: Timer,
        content: "manual process, spreadsheet, excel, time consuming, hassle, lazy, convenience, robot, ai, negotiation script, hourly rate, opportunity cost, automation, headache, procrastination, do it yourself."
    },
    {
        title: "What If No Results?",
        description: "Why finding 'nothing' is actually a massive win for your financial health.",
        href: "/learn/what-if-no-results",
        icon: Banknote,
        content: "nothing found, clean bill of health, peace of mind, monitoring, active guard, scam, risk-free, no results, empty scan, financial wellness, double check, validation, good news, sleep better."
    }
];

// Combine all guides for search
const ALL_GUIDES = [
    ...MAIN_GUIDES.map(g => ({ ...g, type: 'main' })),
    ...TRUST_GUIDES.map(g => ({ ...g, type: 'trust', category: 'Common Question', color: 'text-slate-600', bg: 'bg-slate-50' }))
];

export default function LearnPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredGuides = useMemo(() => {
        if (!searchQuery.trim()) return [];

        const query = searchQuery.toLowerCase();
        return ALL_GUIDES.filter(guide =>
            guide.title.toLowerCase().includes(query) ||
            guide.description.toLowerCase().includes(query) ||
            (guide.content && guide.content.toLowerCase().includes(query))
        );
    }, [searchQuery]);

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-background flex flex-col font-sans`}>
            <Navbar />

            <main className="flex-1 pb-24">
                {/* Minimalist Hero */}
                <section className="pt-24 pb-12 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div>

                            {/* Search Bar */}
                            <div className="max-w-3xl mx-auto relative group mb-12">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Search className="w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    className="w-full bg-white border border-gray-200 text-black rounded-full py-3 pl-12 pr-6 shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none focus:border-black/20 transition-all text-base"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <h1 className={`${ppAgrandirHeading.className} text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight`}>
                                Education Hub
                            </h1>
                            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                                Master your money rights. No jargon, just clear guides on how to stop leaks and get paid.
                            </p>

                        </div>
                    </div>
                </section>

                {searchQuery.trim() ? (
                    /* Search Results View */
                    <section className="px-6 mb-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-8 flex items-center gap-2">
                                <p className="text-lg font-medium text-text-muted">
                                    Found {filteredGuides.length} result{filteredGuides.length !== 1 ? 's' : ''} for "{searchQuery}"
                                </p>
                            </div>

                            {filteredGuides.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredGuides.map((guide, i) => (
                                        <Link href={guide.href} key={i} className="group">
                                            <article
                                                className="h-full bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col"
                                            >
                                                <div className={`w-12 h-12 ${guide.bg || 'bg-slate-50'} ${guide.color || 'text-slate-600'} rounded-2xl flex items-center justify-center mb-6`}>
                                                    <guide.icon className="w-6 h-6" />
                                                </div>
                                                <div className="mb-4">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted opacity-60">
                                                        {guide.category || 'Guide'}
                                                    </span>
                                                </div>
                                                <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                                    {guide.title}
                                                </h2>
                                                <p className="text-text-muted mb-6 leading-relaxed flex-grow text-sm">
                                                    {guide.description}
                                                </p>
                                                <div className="flex items-center text-foreground font-semibold group-hover:text-black transition-colors text-sm">
                                                    Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 bg-slate-100 rounded-full">
                                            <Search className="w-8 h-8 text-slate-400" />
                                        </div>
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-slate-900 mb-2`}>No matches found</h3>
                                    <p className="text-slate-500">Try searching for keywords like "safe", "scam", or "money".</p>
                                </div>
                            )}
                        </div>
                    </section>
                ) : (
                    /* Default View */
                    <>
                        {/* Main Guides Grid */}
                        <section className="px-6 mb-24">
                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                                {MAIN_GUIDES.map((guide, i) => (
                                    <Link href={guide.href} key={i} className="group">
                                        <article
                                            className="h-full bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col"
                                        >
                                            <div className={`w-12 h-12 ${guide.bg} ${guide.color} rounded-2xl flex items-center justify-center mb-6`}>
                                                <guide.icon className="w-6 h-6" />
                                            </div>
                                            <div className="mb-4">
                                                <span className="text-xs font-bold uppercase tracking-wider text-text-muted opacity-60">
                                                    {guide.category}
                                                </span>
                                            </div>
                                            <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground mb-3`}>
                                                {guide.title}
                                            </h2>
                                            <p className="text-text-muted mb-8 leading-relaxed flex-grow">
                                                {guide.description}
                                            </p>
                                            <div className="flex items-center text-foreground font-semibold group-hover:text-black transition-colors">
                                                Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Trust & FAQ Section */}
                        <section className="px-6">
                            <div className="max-w-6xl mx-auto">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="h-px bg-border flex-1"></div>
                                    <span className={`${ppAgrandirHeading.className} text-foreground text-xl font-bold`}>Common Questions</span>
                                    <div className="h-px bg-border flex-1"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {TRUST_GUIDES.map((guide, i) => (
                                        <Link href={guide.href} key={i}>
                                            <div
                                                className="h-full bg-slate-50 border border-slate-100/50 hover:border-slate-200 rounded-2xl p-6 hover:bg-slate-100 transition-all cursor-pointer flex flex-col items-start"
                                            >
                                                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 mb-4 text-slate-700">
                                                    <guide.icon className="w-5 h-5" />
                                                </div>
                                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-2`}>
                                                    {guide.title}
                                                </h3>
                                                <p className="text-sm text-text-muted leading-relaxed">
                                                    {guide.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}
