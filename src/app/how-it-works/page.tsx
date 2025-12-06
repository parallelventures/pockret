import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Search, FileText, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ppAgrandirHeading } from "@/app/fonts";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="py-20 px-6 text-center max-w-4xl mx-auto space-y-6">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold leading-tight`}>
                        How Pockret finds your money.
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Three simple steps to reclaim what belongs to you. No lawyers, no paperwork, just results.
                    </p>
                </section>

                {/* Steps Grid */}
                <section className="max-w-6xl mx-auto px-6 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-border -z-10" />

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center space-y-6 bg-background p-4">
                            <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center shadow-lg transform rotate-3 transition-transform hover:rotate-6">
                                <Search className="w-10 h-10 text-white" strokeWidth={3} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-bold text-primary uppercase tracking-wider">Step 1</div>
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold`}>Scan your name</h3>
                                <p className="text-text-muted leading-relaxed">
                                    We search 1,000+ public databases, class action settlements, and state treasuries to find eligible refunds linked to you.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center space-y-6 bg-background p-4">
                            <div className="w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center shadow-lg transform -rotate-2 transition-transform hover:-rotate-4">
                                <FileText className="w-10 h-10 text-white" strokeWidth={3} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-bold text-secondary uppercase tracking-wider">Step 2</div>
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold`}>File in one tap</h3>
                                <p className="text-text-muted leading-relaxed">
                                    We auto-fill your claim forms using our smart templates. No need to hire a lawyer or deal with complex paperwork.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center space-y-6 bg-background p-4">
                            <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center shadow-lg transform rotate-1 transition-transform hover:rotate-3">
                                <DollarSign className="w-10 h-10 text-foreground" strokeWidth={3} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-bold text-yellow-600 uppercase tracking-wider">Step 3</div>
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold`}>Get paid</h3>
                                <p className="text-text-muted leading-relaxed">
                                    Funds are sent directly from official administrators to your bank account or via check. We don't touch your money.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-accent/10 py-20 px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold`}>
                            Ready to see what you're owed?
                        </h2>
                        <Link href="/login" className="inline-block w-full max-w-md">
                            <Button className="w-full h-16 text-xl font-bold uppercase tracking-widest rounded-2xl border-b-4 border-primary-dark transition-colors bg-primary hover:bg-primary-dark text-white shadow-xl flex items-center justify-center gap-3">
                                Start My Free Scan <ArrowRight className="w-6 h-6" />
                            </Button>
                        </Link>
                        <p className="text-sm text-text-muted font-medium">
                            Join 1M+ users • No hidden fees • Secure & Private
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
