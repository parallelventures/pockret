'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";
import { BlurFade } from "@/components/ui/animations";
import { MapPin, Globe, Users, Zap, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <BlurFade delay={0.1} duration={0.8}>
                            <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight`}>
                                Join us in building the future of money recovery
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.2} duration={0.8}>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                                At Pockret, we help people reclaim money they didn't even know they were owed. Our mission is to build the most reliable, automation-first refund platform in the world.
                            </p>
                        </BlurFade>
                    </div>
                </section>

                {/* Culture & Values */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <BlurFade delay={0.3} duration={0.8}>
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
                            Why join Pockret?
                        </h2>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <BlurFade delay={0.4} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-[#00A97F]/10 rounded-xl flex items-center justify-center mb-4">
                                    <Globe className="w-6 h-6 text-[#00A97F]" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">100% Remote-First</h3>
                                <p className="text-text-muted">
                                    Work from anywhere in the world. We believe in flexibility and trust.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Modern Tech Stack</h3>
                                <p className="text-text-muted">
                                    Work with cutting-edge AI tooling, Next.js, TypeScript, and modern infrastructure.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Small, Fast-Moving Team</h3>
                                <p className="text-text-muted">
                                    Your work directly impacts millions of users. No bureaucracy, just results.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.7} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Ownership & Autonomy</h3>
                                <p className="text-text-muted">
                                    Take full ownership of your projects. We trust you to make the right decisions.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.8} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Real Impact</h3>
                                <p className="text-text-muted">
                                    Help people recover millions of dollars. Your code changes lives.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.9} duration={0.8}>
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-pink-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Competitive Compensation</h3>
                                <p className="text-text-muted">
                                    Fair equity, competitive salary, and benefits that match your value.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="max-w-4xl mx-auto px-6 py-16">
                    <BlurFade delay={0.3} duration={0.8}>
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-center mb-4`}>
                            Open Positions
                        </h2>
                        <p className="text-center text-text-muted mb-12">
                            We're always looking for exceptional talent to join our team.
                        </p>
                    </BlurFade>

                    <div className="space-y-4">
                        {/* Position 1 */}
                        <BlurFade delay={0.4} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Software Engineer — Backend</h3>
                                    <p className="text-sm text-text-muted">Node.js, TypeScript, PostgreSQL</p>
                                </div>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    Closed
                                </span>
                            </div>
                        </BlurFade>

                        {/* Position 2 */}
                        <BlurFade delay={0.5} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Product Designer — UX/UI</h3>
                                    <p className="text-sm text-text-muted">Figma, Design Systems, User Research</p>
                                </div>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    Closed
                                </span>
                            </div>
                        </BlurFade>

                        {/* Position 3 */}
                        <BlurFade delay={0.6} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Customer Success Specialist</h3>
                                    <p className="text-sm text-text-muted">Support, Onboarding, Customer Experience</p>
                                </div>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    Closed
                                </span>
                            </div>
                        </BlurFade>

                        {/* Position 4 */}
                        <BlurFade delay={0.7} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Data Analyst — Refund Optimization</h3>
                                    <p className="text-sm text-text-muted">SQL, Python, Analytics, ML</p>
                                </div>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    Closed
                                </span>
                            </div>
                        </BlurFade>

                        {/* Position 5 */}
                        <BlurFade delay={0.8} duration={0.8}>
                            <div className="bg-white rounded-2xl p-6 border border-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Fraud & Compliance Specialist</h3>
                                    <p className="text-sm text-text-muted">Risk Management, KYC, AML</p>
                                </div>
                                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    Closed
                                </span>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Open Application CTA */}
                    <BlurFade delay={0.9} duration={0.8}>
                        <div className="mt-12 bg-gradient-to-br from-[#00A97F]/5 to-white border-2 border-[#00A97F]/20 rounded-3xl p-8 md:p-12 text-center">
                            <h3 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-foreground mb-4`}>
                                Don't see the right role?
                            </h3>
                            <p className="text-lg text-text-muted mb-6 max-w-xl mx-auto">
                                We're always looking for talented people who share our mission. Send us your resume and let's talk.
                            </p>
                            <a href="mailto:careers@pockret.com">
                                <Button size="lg" className="h-14 px-8 rounded-full bg-[#00A97F] hover:bg-[#009e74] text-white font-bold text-lg">
                                    Send Open Application
                                </Button>
                            </a>
                        </div>
                    </BlurFade>
                </section>

                {/* Company Info */}
                <section className="max-w-4xl mx-auto px-6 py-16">
                    <BlurFade delay={0.5} duration={0.8}>
                        <div className="bg-white rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-4">About Virtual World LLC</h3>
                            <div className="space-y-3 text-text-muted">
                                <p>
                                    <strong className="text-foreground">Legal Entity:</strong> Virtual World LLC
                                </p>
                                <p>
                                    <strong className="text-foreground">Headquarters:</strong><br />
                                    1209 Mountain Road Place Northeast, Suite R<br />
                                    Albuquerque, NM 87110, United States
                                </p>
                                <p>
                                    <strong className="text-foreground">Contact:</strong> careers@pockret.com
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                </section>
            </main>

            <Footer />
        </div>
    );
}
