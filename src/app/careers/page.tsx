'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../fonts";
import Link from "next/link";

const openPositions = [
    {
        title: "Senior Full-Stack Engineer",
        team: "Engineering",
        location: "Remote (US)",
        type: "Full-time",
        compensation: "$150K–$200K + Equity",
        description: "Build and scale our core platform. Work with Next.js, TypeScript, and AI/ML systems.",
        open: true,
    },
    {
        title: "ML Engineer — Dispute Automation",
        team: "AI",
        location: "Remote (US/EU)",
        type: "Full-time",
        compensation: "$160K–$220K + Equity",
        description: "Train models to predict dispute success rates and optimize recovery strategies.",
        open: true,
    },
    {
        title: "Product Designer",
        team: "Design",
        location: "Remote",
        type: "Full-time",
        compensation: "$120K–$160K + Equity",
        description: "Design intuitive experiences that help users recover their money effortlessly.",
        open: true,
    },
    {
        title: "Growth Marketing Lead",
        team: "Marketing",
        location: "Remote (US)",
        type: "Full-time",
        compensation: "$130K–$170K + Equity",
        description: "Lead acquisition and growth initiatives across paid, organic, and viral channels.",
        open: false,
    },
    {
        title: "Customer Success Manager",
        team: "Operations",
        location: "Remote",
        type: "Full-time",
        compensation: "$70K–$90K + Equity",
        description: "Help users navigate the platform and maximize their money recovery.",
        open: false,
    },
];

export default function CareersPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Help people get their money back.
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                        Join a small, remote team building the future of consumer financial protection.
                    </p>
                </section>

                {/* Stats */}
                <section className="max-w-4xl mx-auto px-6 pb-16">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="p-6">
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>$2M+</p>
                            <p className="text-black/50 text-sm mt-1">Recovered for users</p>
                        </div>
                        <div className="p-6">
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>100%</p>
                            <p className="text-black/50 text-sm mt-1">Remote team</p>
                        </div>
                        <div className="p-6">
                            <p className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black`}>2024</p>
                            <p className="text-black/50 text-sm mt-1">Founded</p>
                        </div>
                    </div>
                </section>

                {/* Why Join */}
                <section className="max-w-5xl mx-auto px-6 pb-20">
                    <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-8 text-center`}>
                        Why Pockret?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Real Impact</h3>
                            <p className="text-black/60 text-sm">Your work helps real people recover real money. Every feature you ship matters.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Modern Stack</h3>
                            <p className="text-black/60 text-sm">Next.js, TypeScript, Supabase, AI/ML. We use the best tools to move fast.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Full Ownership</h3>
                            <p className="text-black/60 text-sm">Small team, zero bureaucracy. You own your projects from idea to shipping.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Remote-First</h3>
                            <p className="text-black/60 text-sm">Work from anywhere. Async by default. We care about results, not hours.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Competitive Pay</h3>
                            <p className="text-black/60 text-sm">Salary + equity. We pay fairly and share upside with the team.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-black/5">
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>Growing Fast</h3>
                            <p className="text-black/60 text-sm">Early stage, big opportunity. Join now and grow with us.</p>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-2 text-center`}>
                        Open Positions
                    </h2>
                    <p className="text-black/50 text-center mb-10">
                        {openPositions.filter(p => p.open).length} open roles
                    </p>

                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-6 border border-black/5 ${!position.open ? 'opacity-50' : ''}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black`}>
                                                {position.title}
                                            </h3>
                                            {position.open ? (
                                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                                    Open
                                                </span>
                                            ) : (
                                                <span className="px-2 py-0.5 bg-black/5 text-black/40 rounded-full text-xs font-medium">
                                                    Closed
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-black/60 text-sm mb-3">{position.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">{position.compensation}</span>
                                            <span className="px-2 py-1 bg-black/5 rounded-full text-xs text-black/60">{position.team}</span>
                                            <span className="px-2 py-1 bg-black/5 rounded-full text-xs text-black/60">{position.location}</span>
                                            <span className="px-2 py-1 bg-black/5 rounded-full text-xs text-black/60">{position.type}</span>
                                        </div>
                                    </div>
                                    {position.open && (
                                        <a href={`mailto:careers@pockret.com?subject=Application: ${position.title}`}>
                                            <button className={`${ppAgrandirHeading.className} px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                                Apply
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Open Application */}
                <section className="max-w-3xl mx-auto px-6 pb-20">
                    <div className="bg-black/5 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                            Don't see the right role?
                        </h3>
                        <p className="text-black/60 mb-6 max-w-md mx-auto">
                            We're always looking for exceptional people. Send us your resume and tell us what you'd bring to Pockret.
                        </p>
                        <a href="mailto:careers@pockret.com?subject=Open Application">
                            <button className={`${ppAgrandirHeading.className} px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors cursor-pointer`}>
                                Send Open Application
                            </button>
                        </a>
                    </div>
                </section>

                {/* Company Info */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <div className="border-t border-black/10 pt-10">
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-black/50">
                            <div>
                                <p className="font-medium text-black mb-2">Virtual World LLC</p>
                                <p>1209 Mountain Road Place NE, Suite R<br />Albuquerque, NM 87110, United States</p>
                            </div>
                            <div className="md:text-right">
                                <p className="font-medium text-black mb-2">Contact</p>
                                <p>careers@pockret.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
