import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";
import { BookOpen, DollarSign, AlertCircle, XCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/animations";

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="py-20 px-6 bg-[#0F172A] text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-md">
                            <BookOpen className="w-4 h-4" /> Education Hub
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold mb-6`}>
                            Settlements & Refunds 101
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Become an expert on the money you didn't know you were owed.
                            Learn how specialized laws and settlements put cash back in your pocket.
                        </p>
                    </div>
                </section>

                {/* Settlements */}
                <section className="py-20 px-6 border-b border-border">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-3 bg-[#2563EB]/20 rounded-xl">
                                <DollarSign className="w-8 h-8 text-[#1D4ED8]" />
                            </div>
                            <div>
                                <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold text-foreground mb-4`}>
                                    What Are Settlements?
                                </h2>
                                <p className="text-lg text-text-muted leading-relaxed space-y-4">
                                    A settlement is a payout from a class action lawsuit. If a company wronged consumers (false advertising, data breach, defective product), they may owe you money — even if you weren’t aware of the lawsuit.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-border ml-0 md:ml-20">
                            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold mb-4 text-foreground`}>How Pockret Helps You Claim</h3>
                            <ul className="space-y-3 text-text-muted">
                                <li className="flex items-center gap-2">✓ We scan for active settlement opportunities.</li>
                                <li className="flex items-center gap-2">✓ We check your transactions to match eligibility.</li>
                                <li className="flex items-center gap-2">✓ We highlight your qualifying purchases.</li>
                                <li className="flex items-center gap-2">✓ We walk you through the claim process (or auto-fill forms).</li>
                            </ul>
                            <div className="mt-6 p-4 bg-[#0F172A]/5 rounded-xl border border-[#0F172A]/10 text-sm md:text-base text-[#0F172A] font-medium">
                                Millions go unclaimed each year because people simply don't know they are eligible.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overcharges */}
                <section className="py-20 px-6 border-b border-border bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-3 bg-red-100 rounded-xl">
                                <AlertCircle className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold text-foreground mb-4`}>
                                    Overcharges & Hidden Fees
                                </h2>
                                <p className="text-lg text-text-muted mb-4">
                                    Companies quietly add service fees, duplicate charges, incorrect amounts, trial conversions, and surprise increases.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-20">
                            <div className="p-6 border border-border rounded-2xl">
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold mb-2`}>The Problem</h3>
                                <p className="text-text-muted text-sm">Most people don't check every line item on their bank statement. Companies rely on this "apathy revenue".</p>
                            </div>
                            <div className="p-6 border border-border rounded-2xl bg-[#0F172A]/5 border-[#0F172A]/20">
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold mb-2 text-[#0F172A]`}>The Solution</h3>
                                <p className="text-text-muted text-sm">Pockret detects these anomalies immediately and provides refund request templates and merchant-specific dispute flows.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscription Waste */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <XCircle className="w-8 h-8 text-orange-600" />
                            </div>
                            <div>
                                <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold text-foreground mb-4`}>
                                    Subscription Waste Explained
                                </h2>
                                <p className="text-xl font-medium text-foreground mb-4">
                                    The Average American Wastes $400–$1,200/year.
                                </p>
                                <p className="text-lg text-text-muted">
                                    Not because they’re irresponsible — but because subscription systems are designed to be confusing, hard to cancel, and easy to forget.
                                </p>
                            </div>
                        </div>

                        <div className="ml-0 md:ml-20">
                            <p className="mb-6 text-text-muted">Pockret identifies:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Unused recurring charges', 'Past subscriptions still billing', 'Fraud-like repeated fees', 'Forgotten trials'].map((item, i) => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-xl text-center text-sm font-medium border border-gray-100">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-lg font-bold text-[#0F172A]">We provide instant cancel + refund options.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
