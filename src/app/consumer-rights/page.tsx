import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";
import { Scale, FileText, CreditCard, RefreshCw } from "lucide-react";
import { BlurFade } from "@/components/ui/animations";

export default function ConsumerRightsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative py-20 px-6 bg-white border-b border-border">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] font-bold text-sm mb-6 uppercase tracking-wider">
                            Legal Protection
                        </div>
                        <BlurFade delay={0.1}>
                            <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-6`}>
                                Your Rights as a Consumer
                            </h1>
                        </BlurFade>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            Most Americans don’t know they have strong rights allowing them to get refunds for unauthorized transactions, hidden fees, and billing errors.
                        </p>
                    </div>
                </section>

                {/* Key Laws Grid */}
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold mb-12 text-center text-foreground`}>
                            Key Consumer Protection Laws
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <BlurFade delay={0.2}>
                                <div className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center mb-6">
                                        <Scale className="w-6 h-6 text-[#1D4ED8]" /> {/* Darker shade for contrast */}
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-3 text-foreground`}>Fair Credit Billing Act (FCBA)</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Gives you the right to dispute billing errors, unauthorized charges, and charges for goods not delivered within 60 days.
                                    </p>
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.3}>
                                <div className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#0F172A]/10 flex items-center justify-center mb-6">
                                        <CreditCard className="w-6 h-6 text-[#0F172A]" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-3 text-foreground`}>Electronic Fund Transfer Act (EFTA)</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Protects you against unauthorized withdrawals and errors involving electronic fund transfers (ATMs, point-of-sale, direct deposits).
                                    </p>
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.4}>
                                <div className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#334155]/10 flex items-center justify-center mb-6">
                                        <FileText className="w-6 h-6 text-[#334155]" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-3 text-foreground`}>Truth in Lending Act (TILA)</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Designed to promote the informed use of consumer credit by requiring disclosures about its terms and cost to standardize the manner of borrowing.
                                    </p>
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.5}>
                                <div className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                                        <RefreshCw className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-3 text-foreground`}>Automatic Renewal Laws (ARLs)</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Laws that protect consumers against ongoing charges for subscriptions that renew without clear consent or easy cancellation methods.
                                    </p>
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-6 bg-gray-50 border-t border-border">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl font-bold mb-6 text-foreground`}>
                            How Pockret Helps
                        </h2>
                        <p className="text-lg text-text-muted mb-8">
                            Pockret simplifies all of these protections into one simple experience. We automatically detect violations and empower you to use these laws to get your money back.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
