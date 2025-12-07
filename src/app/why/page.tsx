import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";
import { Heart } from "lucide-react";
import { BlurFade } from "@/components/ui/animations";

export default function WhyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative py-24 px-6 overflow-hidden">
                    <div className="max-w-3xl mx-auto text-center">
                        <BlurFade delay={0.1}>
                            <h1 className={`${ppAgrandirHeading.className} text-5xl md:text-7xl font-extrabold text-foreground mb-8`}>
                                Why Pockret Exists
                            </h1>
                        </BlurFade>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
                            We built Pockret for one simple reason:
                            <span className="text-[#0F172A] font-bold block mt-2">To help people stop losing money they shouldn’t be losing.</span>
                        </p>
                    </div>
                </section>

                {/* Narrative */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
                        <BlurFade delay={0.2}>
                            <p className="text-xl text-text-muted leading-relaxed mb-8">
                                Every year, billions of dollars are lost by consumers to hidden fees, forgotten subscriptions, and unclaimed class action settlements.
                                Companies profit from this confusion. They count on you being too busy to check every line item, or too overwhelmed to file a complex claim form.
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-border my-12">
                                <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-4 text-[#0F172A]`}>The Mission</h2>
                                <p className="text-lg m-0">
                                    Financial recovery shouldn’t be complex, overwhelming, or hidden behind legal jargon.
                                    We believe that if money is yours, it should be in your pocket. Not in the bank account of a corporation that overcharged you.
                                </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold mb-4 text-foreground`}>Taking Control Back</h3>
                            <p className="text-text-muted mb-8">
                                With Pockret, you finally take control. We use technology to level the playing field, giving you the same power as the big guys.
                                We find the money. We handle the complexity. You get the results.
                            </p>
                            <p className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Heart className="w-6 h-6 text-[#0F172A] fill-current" />
                                On your side, always.
                            </p>
                        </BlurFade>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
