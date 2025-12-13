'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import dynamic from "next/dynamic";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function AppleRefundGuidePage() {
    const lastUpdated = "December 2025";

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-extrabold text-black leading-tight tracking-tight mb-4`}>
                        Can You Really Get Refunded for App Store In-App Purchases?
                    </h1>
                    <p className="text-black/50 text-sm">
                        The Real 2025 Guide (US) — Last updated: <span className="text-black/70">{lastUpdated}</span>
                    </p>
                </section>

                {/* Content */}
                <section className="px-6 pb-20">
                    <div className="max-w-3xl mx-auto">

                        {/* Intro */}
                        <div className="mb-12">
                            <p className="text-black/70 text-lg leading-relaxed mb-4">
                                You might've heard the claim: <strong className="text-black">"Apple refunds 80% of in-app purchases."</strong>
                            </p>
                            <p className="text-black/70 leading-relaxed mb-6">
                                Reality check: <strong className="text-black">Apple doesn't publish an official approval rate.</strong> Refunds are possible, but they're case-by-case, and not guaranteed.
                            </p>
                            <p className="text-black/70 leading-relaxed mb-8">
                                Still, if you've ever started a free trial and forgot to cancel, got charged for a subscription you don't want, had a purchase that didn't work as expected, or saw a charge you didn't recognize — you should know the official Apple refund flow.
                            </p>

                            {/* Official Portal Card */}
                            <a
                                href="https://reportaproblem.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-black rounded-2xl p-6 hover:bg-black/90 transition-colors group"
                            >
                                <div>
                                    <p className={`${ppAgrandirHeading.className} text-white font-bold text-lg mb-1`}>
                                        Official Refund Portal
                                    </p>
                                    <p className="text-white/60 text-sm">
                                        reportaproblem.apple.com
                                    </p>
                                </div>
                                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Section 1 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                1. What Apple officially says
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <p>Apple's support page is clear on the process:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>You request refunds through <strong className="text-black">reportaproblem.apple.com</strong></li>
                                    <li>You choose a reason and submit the item (app, subscription, in-app purchase)</li>
                                    <li>You typically get an update in <strong className="text-black">24–48 hours</strong></li>
                                </ul>
                                <p className="mt-4">
                                    Apple also states that refund eligibility varies by country/region, all transactions are final, and they may refuse refunds if they detect fraud or abuse.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                2. Why people think refunds "work often"
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <p>
                                    Because many refund requests are made for legitimate, common situations: accidental purchase (especially with kids), subscription renewal surprise, app didn't work or didn't deliver, unauthorized transaction.
                                </p>
                                <p>
                                    But again: <strong className="text-black">no official "80%."</strong> If someone claims a guaranteed success rate, treat it as marketing, not policy.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                3. Not all in-app purchases are the same
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <p>Apple defines multiple IAP types:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li><strong className="text-black">Consumable</strong> — used once, depletes (e.g., coins)</li>
                                    <li><strong className="text-black">Non-consumable</strong> — buy once, permanent (e.g., "Pro unlock")</li>
                                    <li><strong className="text-black">Auto-renewable subscription</strong> — renews until canceled</li>
                                    <li><strong className="text-black">Non-renewing subscription</strong> — time-limited, doesn't auto-renew</li>
                                </ul>
                                <p className="mt-4">
                                    In practice, refunds tend to be easier to justify when a subscription renewed unexpectedly, or you have a clear delivery/technical issue, than when a consumable was already used.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                4. How to request a refund
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <ol className="list-decimal list-inside space-y-2 ml-2">
                                    <li>Go to <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-2">reportaproblem.apple.com</a> and sign in</li>
                                    <li>Click/tap <strong className="text-black">"I'd like to" → "Request a refund"</strong></li>
                                    <li>Choose a reason (be truthful)</li>
                                    <li>Select the app/subscription/in-app purchase and submit</li>
                                </ol>
                                <p className="mt-4 text-black/50 text-sm">
                                    Apple says you'll typically see an update within 24–48 hours.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                5. Reasons that work vs. reasons that don't
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <div>
                                    <p className="font-medium text-black mb-2">Strong, legitimate reasons:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Item didn't work / didn't deliver (technical problems)</li>
                                        <li>Charged by mistake (true accidental purchase)</li>
                                        <li>Unauthorized charge (you didn't make it)</li>
                                        <li>Subscription renewal you didn't intend</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-black mb-2">Weak reasons (often denied):</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>"I changed my mind" after heavy use</li>
                                        <li>Repeated refund requests back-to-back (looks like abuse)</li>
                                        <li>Making a false claim</li>
                                    </ul>
                                </div>
                                <p className="text-sm text-black/50">
                                    Apple explicitly reserves the right to refuse refunds if it sees patterns of abuse.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                6. Increase your odds (without lying)
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <ul className="list-disc list-inside space-y-2 ml-2">
                                    <li><strong className="text-black">Request fast</strong> — same day or within a few days is better than weeks later</li>
                                    <li><strong className="text-black">Cancel the subscription immediately</strong> — stops future renewals; separate action from refund</li>
                                    <li>Provide <strong className="text-black">one clean sentence</strong> explaining the issue</li>
                                    <li>Screenshot anything relevant (error screens, access issues)</li>
                                    <li>Don't spam multiple refund requests repeatedly</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                7. Stop this from happening again
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <p>
                                    Most people don't have a refund problem — they have an <strong className="text-black">awareness problem</strong>.
                                </p>
                                <p>Fix it with:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>Monthly "subscription audit"</li>
                                    <li>Purchase authentication (Face ID / password for every transaction)</li>
                                    <li>Reminders before trial ends</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pockret section */}
                        <div className="border-t border-black/10 pt-8 mb-10">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                                How Pockret helps
                            </h2>
                            <div className="space-y-3 text-black/70 leading-relaxed">
                                <p>Pockret is built to make this painless:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>detect App Store subscription patterns early</li>
                                    <li>show you your real yearly cost (no denial, just numbers)</li>
                                    <li>remind you before renewals</li>
                                    <li>send you straight into the official refund path with the right context organized</li>
                                </ul>
                                <p className="mt-4 font-medium text-black">
                                    Not magic. Not scams. Just control + speed.
                                </p>
                            </div>
                        </div>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center mt-12">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Ready to take control of your subscriptions?
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Let Pockret find your hidden charges and help you get refunds.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-colors cursor-pointer`}>
                                        Get Started Free
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-8 px-6 border-t border-black/5">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-black/40 text-sm text-center">
                            This article is for educational purposes and is not legal advice. Refund outcomes vary and are determined by Apple on a case-by-case basis. Apple trademarks belong to Apple Inc.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
