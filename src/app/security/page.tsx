'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import { ShieldCheck, Lock, WifiOff, FileCheck, Server, Key, EyeOff, Trash2 } from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-background flex flex-col font-sans`}>
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6 bg-[#F9FAFB]">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-2xl mb-6 text-emerald-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight`}>
                            Your Security is Our Priority
                        </h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                            We use bank-grade security and read-only access to ensure your financial data stays safe, private, and yours.
                        </p>
                    </div>
                </section>

                {/* Main Security Features */}
                <section className="py-24 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <EyeOff className="w-6 h-6" />
                            </div>
                            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                Read-Only Access
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                We can only <em>see</em> your transactions to find refunds. We cannot move money, make transfers, or change your settings. Pockret is a viewing window, not a door.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                Powered by Plaid
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                We partner with <a href="https://plaid.com/safety/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Plaid</a>, the industry leader trusted by Venmo, Chime, and 12,000+ banks. We never see or store your bank credentials.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-foreground mb-3`}>
                                Bank-Grade Encryption
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                Your data is encrypted at rest (AES-256) and in transit (TLS 1.2+). This is the same level of encryption used by major banks and government agencies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Additional Details */}
                <section className="py-16 px-6 bg-white border-t border-border">
                    <div className="max-w-4xl mx-auto space-y-16">

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Key className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground mb-3`}>
                                    We never sell your data
                                </h3>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    Our business model is simple: we help you recover money, and (in premium tiers) we take a small fee or subscription. We do not sell your personal transaction history to advertisers, hedge funds, or third parties.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
                                <Trash2 className="w-5 h-5 text-rose-600" />
                            </div>
                            <div>
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground mb-3`}>
                                    You are in control
                                </h3>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    You can disconnect your bank account at any time with one click in your settings. If you delete your Pockret account, we wipe your data from our servers.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Plaid Badge Section */}
                <section className="py-12 px-6 bg-black text-white text-center">
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-4">Trusted Infrastructure</p>
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                        <span className="opacity-60">Secured by</span>
                        <span className="text-white">Plaid</span>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
