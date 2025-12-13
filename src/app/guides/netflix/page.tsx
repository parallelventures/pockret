'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import { ExternalLink, Phone, MessageCircle, AlertTriangle, CheckCircle2, Clock, CreditCard, Shield } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function NetflixCancelGuidePage() {
    const lastUpdated = "December 2025";

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <Image src="/Netflix.png" alt="Netflix" width={120} height={40} className="h-10 w-auto object-contain" />
                    </div>
                    <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-extrabold text-black leading-[0.95] tracking-tight mb-4`}>
                        How to Cancel Your Subscription & Request a Refund
                    </h1>
                    <p className="text-black/60 text-lg">
                        US Guide — Last updated: <span className="text-black/80">{lastUpdated}</span>
                    </p>
                </section>

                {/* Intro */}
                <section className="px-6 pb-8">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-black/70 text-lg leading-relaxed">
                            If you were charged by <strong className="text-black">Netflix</strong> and want to <strong className="text-black">cancel</strong> your membership (or <strong className="text-black">fix an unexpected charge</strong>), this page shows the official paths, what to do if you're billed through Apple/another partner, and how to contact Netflix safely.
                        </p>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="px-6 pb-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-black rounded-2xl p-6 md:p-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-white mb-6`}>
                                Quick links (official)
                            </h2>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    { label: "Cancel Netflix", url: "https://www.netflix.com/cancelplan" },
                                    { label: "How to cancel (Help Center)", url: "https://help.netflix.com/en/node/407" },
                                    { label: "Unrecognized / unauthorized charges", url: "https://help.netflix.com/en/node/1019" },
                                    { label: "Charged after canceling", url: "https://help.netflix.com/en/node/124418" },
                                    { label: "Netflix billed through Apple", url: "https://help.netflix.com/en/node/25097" },
                                    { label: "Contact Netflix (Call/Chat)", url: "https://help.netflix.com/en/node/33335" },
                                    { label: "Phishing / fake Netflix messages", url: "https://help.netflix.com/en/node/65674" },
                                ].map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                                    >
                                        <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-50 group-hover:opacity-100" />
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="px-6 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                1) Cancel Netflix (the fastest method)
                            </h2>

                            <div className="bg-white rounded-2xl p-6 border border-black/5 mb-4">
                                <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-4`}>
                                    If you pay Netflix directly (card / PayPal / etc.)
                                </h3>
                                <ol className="space-y-3 text-black/70 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                                        <span>Go to <strong className="text-black">Cancel Plan</strong>: <a href="https://www.netflix.com/cancelplan" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-2 hover:text-red-700">netflix.com/cancelplan</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                                        <span>Select <strong className="text-black">Finish Cancellation</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                                        <span>Your account stays active until the end of the billing period, and you won't be charged again after that.</span>
                                    </li>
                                </ol>
                                <div className="rounded-xl overflow-hidden border border-black/10">
                                    <Image
                                        src="/cancel_netflix.png"
                                        alt="Netflix cancellation screen"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium text-black mb-1">If you don't see a "Cancel" option in your Netflix account</h4>
                                        <p className="text-black/70 text-sm">
                                            Netflix says that means you likely subscribed through a <strong className="text-black">payment partner</strong>, so you must cancel with that partner (Apple, Google Play, a cable bundle, etc.).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                2) If you're billed through Apple (very common)
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    If Netflix is billed via Apple and you don't see cancellation inside Netflix, Netflix instructs you to <strong className="text-black">cancel through Apple</strong>.
                                </p>
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <h4 className="font-medium text-black mb-3">Important notes Netflix highlights:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-black/40 flex-shrink-0 mt-0.5" />
                                            <span>If you cancel via Apple, your Netflix account may be <strong className="text-black">put on hold for 30 days</strong> and then fully cancelled.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span>Apple's rules may require canceling <strong className="text-black">more than 24 hours before renewal</strong> to prevent the next renewal from going through.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                3) "I canceled but Netflix still charged me"
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Netflix's official explanation: sometimes the account was <strong className="text-black">restarted accidentally</strong> (by you or someone with access). Their fix is:
                                </p>
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <ol className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                                            <span>Cancel again at <a href="https://www.netflix.com/cancelplan" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-2">netflix.com/cancelplan</a> and <strong className="text-black">Finish Cancellation</strong>.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                                            <span>Change your password at <a href="https://www.netflix.com/password" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-2">netflix.com/password</a> and check <strong className="text-black">"Sign out of all devices"</strong> (to prevent someone else reactivating).</span>
                                        </li>
                                    </ol>
                                </div>
                                <p className="text-sm text-black/50">
                                    If you can't complete those steps, Netflix says to contact them.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                4) Unrecognized / unauthorized Netflix charge
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>If you see a Netflix charge you weren't expecting:</p>
                                <div className="space-y-3">
                                    <div className="bg-white rounded-xl p-4 border border-black/5 flex items-start gap-3">
                                        <CreditCard className="w-5 h-5 text-black/40 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-black mb-1">If you don't have a Netflix account</p>
                                            <p className="text-sm">Netflix says someone may have started one using your payment method and you should <strong className="text-black">contact Netflix immediately</strong>.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-black/5 flex items-start gap-3">
                                        <CreditCard className="w-5 h-5 text-black/40 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-black mb-1">If you're being charged on an expired card</p>
                                            <p className="text-sm">Netflix notes some banks automatically update card details so charges can continue unless you remove/update payment info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                                    <p className="text-sm text-emerald-800">
                                        <strong>Best practice:</strong> take a screenshot of the charge (amount/date), then contact Netflix via in-app support (next section).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                5) How to contact Netflix safely (avoid scams)
                            </h2>
                            <div className="bg-white rounded-2xl p-6 border border-black/5 mb-4">
                                <h4 className="font-medium text-black mb-4">Netflix's official method (recommended):</h4>
                                <ol className="space-y-3 text-black/70">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                                        <span>Open the Netflix app</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                                        <span>Tap <strong className="text-black">My Netflix</strong> → <strong className="text-black">Menu</strong> → <strong className="text-black">Help</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                                        <div className="flex items-center gap-4">
                                            <span>Tap</span>
                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full text-sm">
                                                <Phone className="w-4 h-4" /> Call
                                            </span>
                                            <span>or</span>
                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full text-sm">
                                                <MessageCircle className="w-4 h-4" /> Chat
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div className="bg-red-50 rounded-xl p-4 border border-red-100 flex items-start gap-3">
                                <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-red-900">
                                        <strong>Phishing warning:</strong> Netflix says they'll <strong>never</strong> ask for sensitive info by text/email. Suspicious emails can be forwarded to <a href="mailto:phishing@netflix.com" className="underline">phishing@netflix.com</a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                6) "Do I get a refund?"
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Netflix doesn't publish a single universal "instant refund" button for subscriptions in the Help Center. What they <em>do</em> say is:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-black/40">•</span>
                                        <span>cancellation stops future billing and access continues until the end of the billing cycle,</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black/40">•</span>
                                        <span>and if you have unexpected/unauthorized charges, contact support for review.</span>
                                    </li>
                                </ul>
                                <div className="bg-white rounded-2xl p-6 border border-black/5">
                                    <h4 className="font-medium text-black mb-3">The clean, high-success approach:</h4>
                                    <ol className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-black">Cancel</strong> (to stop future charges)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-black">Contact Netflix support</strong> (Call/Chat) with your evidence and ask for a billing review/refund for the specific charge.</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-6`}>
                                7) What to prepare (makes support say "yes" faster)
                            </h2>
                            <div className="bg-white rounded-2xl p-6 border border-black/5">
                                <p className="text-black/70 mb-4">Have these ready:</p>
                                <ul className="space-y-2 text-black/70">
                                    {[
                                        "charge date + amount",
                                        "last 4 digits of the payment method (if available)",
                                        "screenshot of your bank statement line item",
                                        "screenshot of cancellation confirmation (if \"charged after cancel\")",
                                        "a short explanation: \"charged after cancellation\" / \"unauthorized\" / \"double billed\""
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-black/30 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-black/50 mt-4">
                                Netflix also explains "double charges" can sometimes be an <strong className="text-black/70">authorization hold</strong> that should drop off automatically (often within ~8 days) — so it's worth checking that scenario too.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Pockret CTA */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    How Pockret helps (without the headache)
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Detect recurring charges, flag suspicious patterns, and generate ready-to-send support requests.
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
                            Pockret is not affiliated with Netflix. Netflix name and trademarks belong to Netflix. This guide is for educational purposes and Netflix flows can change over time.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
