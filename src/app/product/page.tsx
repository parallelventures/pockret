import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";
import { CheckCircle2, Shield, Search, Zap, Lock } from "lucide-react";
import { BlurFade } from "@/components/ui/animations";

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 px-6 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <BlurFade delay={0.1}>
                            <h1 className={`${ppAgrandirHeading.className} text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-6`}>
                                Smart Financial Recovery.
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.2}>
                            <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl mx-auto">
                                Pockret is a smart financial recovery app that helps you reclaim money you’re losing without realizing it.
                                Millions of Americans miss out on refunds, settlements, and hidden overcharges every year.
                            </p>
                        </BlurFade>
                    </div>
                </section>

                {/* What You Can Recover */}
                <section className="py-16 px-6 bg-white border-y border-border">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-foreground mb-4`}>
                                What You Can Recover
                            </h2>
                            <p className="text-lg text-text-muted">Pockret works quietly in the background to surface all the money you’re leaving behind.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Unclaimed Settlements", desc: "Class action payouts you qualify for but didn't know about.", icon: Search },
                                { title: "Hidden Fee Refunds", desc: "Bank fees, overdrafts, and accidental charges.", icon: Zap },
                                { title: "Subscription Stoppage", desc: "Unused subscriptions draining your account monthly.", icon: CheckCircle2 },
                                { title: "Overpayments", desc: "Money owed back to you from merchants or service providers.", icon: CheckCircle2 },
                                { title: "Billing Errors", desc: "Bank or card errors that you’re entitled to dispute.", icon: Shield },
                            ].map((item, i) => (
                                <BlurFade key={i} delay={0.1 * i}>
                                    <div className="p-8 rounded-3xl bg-gray-50 border border-border hover:border-[#0F172A]/30 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-[#0F172A]/10 flex items-center justify-center mb-4">
                                            <item.icon className="w-6 h-6 text-[#0F172A]" />
                                        </div>
                                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold mb-3 text-foreground`}>{item.title}</h3>
                                        <p className="text-text-muted">{item.desc}</p>
                                    </div>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-center mb-12 text-foreground`}>
                            How It Works
                        </h2>

                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Connect securely", desc: "Link your financial accounts using bank-level encryption." },
                                { step: "02", title: "We scan your transactions", desc: "Our system identifies refund opportunities, overcharges, and eligible settlements." },
                                { step: "03", title: "We detect & claim", desc: "We generate ready-to-send templates, dispute letters, and refund flows." },
                                { step: "04", title: "You recover funds", desc: "Get your money back fast. No complex paperwork." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start md:items-center">
                                    <div className="text-5xl font-extrabold text-gray-200">{item.step}</div>
                                    <div>
                                        <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-[#0F172A] mb-2`}>{item.title}</h3>
                                        <p className="text-lg text-text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why It Works / Trust */}
                <section className="py-20 px-6 bg-[#0F172A] text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold mb-8`}>
                            Why Pockret Works
                        </h2>
                        <p className="text-xl leading-relaxed mb-12 text-white/90">
                            Consumer laws in the US strongly favor the customer. But the average user doesn’t know what they’re entitled to, how to file claims, or where to find settlement opportunities.
                            <br /><br />
                            <strong>Pockret automates all of that for you.</strong>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                                <Shield className="w-10 h-10 mb-4 text-[#2563EB]" />
                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold mb-2`}>Security & Compliance First</h3>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Bank-level encryption</li>
                                    <li>• Read-only access</li>
                                    <li>• No ability to move funds</li>
                                    <li>• Fully Stripe-compliant</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                                <Lock className="w-10 h-10 mb-4 text-[#2563EB]" />
                                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold mb-2`}>Privacy First</h3>
                                <p className="text-white/80">
                                    We never sell or share your personal data. Your financial information stays yours — always.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
