'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import { Shield, Mail, ExternalLink } from "lucide-react";

export default function DisclaimerTransparencyPage() {
    const lastUpdated = "December 13, 2025";

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/5 mb-6">
                        <Shield className="w-8 h-8 text-black/60" />
                    </div>
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Disclaimer & Transparency
                    </h1>
                    <p className="text-black/50 text-sm">
                        Last updated: <span className="text-black/70">{lastUpdated}</span>
                    </p>
                </section>

                {/* Intro */}
                <section className="px-6 pb-12">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-black/70 text-lg leading-relaxed">
                            Pockret is built to help consumers understand recurring charges, identify potential billing issues, and take action to reduce waste and recover money where appropriate. We take transparency seriously. This page explains what Pockret is (and isn't), how we use third-party names/logos, and the limits of the information we provide.
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="px-6 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                1) Educational information — not legal, financial, or tax advice
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Pockret provides <strong className="text-black">educational content and general tools</strong> related to subscriptions, billing, and consumer protections. The content on our website, help center, and brand guides is <strong className="text-black">not</strong> legal advice, financial advice, tax advice, or a substitute for advice from a qualified professional.
                                </p>
                                <p>
                                    Nothing on Pockret creates an attorney-client relationship, fiduciary relationship, or any professional advisory relationship. If you need advice for your specific situation, consult a qualified professional.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                2) No affiliation with the brands mentioned
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Pockret is an <strong className="text-black">independent</strong> service. Unless explicitly stated, we are <strong className="text-black">not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected</strong> with any third-party company, brand, merchant, or service mentioned on this website.
                                </p>
                                <p>
                                    All product and company names belong to their respective owners.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                3) Use of trademarks, logos, and brand names
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    We may display third-party trademarks, logos, and brand names <strong className="text-black">for identification and reference purposes only</strong>—for example, to help users recognize merchants or find official cancellation and support resources.
                                </p>
                                <p>
                                    When we use third-party logos or brand assets, we aim to follow <strong className="text-black">publicly available brand guidelines</strong> (where applicable) and do not alter logos in a way that misrepresents the brand.
                                </p>
                                <p>
                                    If you believe any brand asset is displayed incorrectly or should be removed, please contact us at <a href="mailto:legal@pockret.com" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">legal@pockret.com</a> with:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>the page URL(s),</li>
                                    <li>the specific asset in question, and</li>
                                    <li>the reason for the request.</li>
                                </ul>
                                <p>
                                    We review requests promptly and will make corrections or removals when appropriate.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                4) Accuracy of information and links
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    We work hard to keep our content accurate, current, and helpful. However:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>merchants may change their cancellation flows, refund policies, customer support routes, pricing, or URLs at any time,</li>
                                    <li>pages may move, and</li>
                                    <li>outcomes may vary depending on the user's account status and merchant policy.</li>
                                </ul>
                                <p>
                                    Therefore, Pockret cannot guarantee that any guide, link, or description is complete, current, or error-free at all times.
                                </p>
                                <p>
                                    If you spot outdated information, please report it at <a href="mailto:support@pockret.com" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">support@pockret.com</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                5) Results are not guaranteed
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Pockret may help you:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>discover recurring charges,</li>
                                    <li>prepare cancellation steps,</li>
                                    <li>prepare refund requests,</li>
                                    <li>draft dispute or support messages, or</li>
                                    <li>highlight potential billing issues.</li>
                                </ul>
                                <p>
                                    But we <strong className="text-black">do not guarantee</strong> that:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>a merchant will cancel a subscription,</li>
                                    <li>a merchant will approve a refund,</li>
                                    <li>a charge will be reversed,</li>
                                    <li>a dispute will be successful,</li>
                                    <li>or any amount of money will be recovered.</li>
                                </ul>
                                <p>
                                    Refunds, credits, and dispute outcomes depend on merchant policies, payment method rules, timelines, and the facts of your specific case.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                6) User choice and responsibility
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    You remain fully responsible for your decisions and actions, including:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>subscribing or unsubscribing from services,</li>
                                    <li>initiating refunds or disputes,</li>
                                    <li>communicating with merchants,</li>
                                    <li>providing accurate information and documentation,</li>
                                    <li>and complying with applicable laws and merchant terms.</li>
                                </ul>
                                <p>
                                    Pockret is designed to support informed decisions—not to replace them.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                7) Acting "on your behalf" (when enabled) and consent
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Some features may allow you to authorize Pockret to <strong className="text-black">prepare and submit</strong> certain requests "on your behalf" (for example, generating messages or submitting information through official merchant support channels).
                                </p>
                                <p>
                                    When we provide such features:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>we require clear user authorization,</li>
                                    <li>we may request supporting evidence you provide,</li>
                                    <li>and we act only within the scope you approve.</li>
                                </ul>
                                <p>
                                    You can revoke access or stop a process as described in the relevant flow.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                8) Third-party services and "read-only" bank connections
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    Pockret may use third-party providers to help users connect financial accounts or analyze transactions. Where applicable, we aim to use providers that support <strong className="text-black">read-only</strong> access and modern security practices.
                                </p>
                                <p>
                                    Your bank connection experience and data availability may depend on third-party providers, your financial institution, and your consent.
                                </p>
                                <p>
                                    For details, please review:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>our <Link href="/privacy" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">Privacy Policy</Link></li>
                                    <li>our <Link href="/security" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">Security page</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                9) Privacy and data handling (high level)
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    We aim to collect and process only what we need to provide the service. Our privacy practices are explained in our <Link href="/privacy" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">Privacy Policy</Link>.
                                </p>
                                <p>
                                    If you have questions about your data, contact <a href="mailto:privacy@pockret.com" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">privacy@pockret.com</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                10) Limitation of liability
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <p>
                                    To the maximum extent permitted by law, Pockret and its affiliates, officers, employees, contractors, and partners will not be liable for any indirect, incidental, consequential, special, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising from or related to your use of the service or reliance on content, links, or templates provided.
                                </p>
                                <p>
                                    Your exclusive remedy for dissatisfaction with the service is to stop using it.
                                </p>
                                <p>
                                    (Full legal terms may also appear in our <Link href="/terms" className="text-black underline underline-offset-4 hover:text-black/70 transition-colors">Terms of Service</Link>.)
                                </p>
                            </div>
                        </div>

                        {/* Section 11 - Contact */}
                        <div className="border-t border-black/10 pt-8">
                            <h2 className={`${ppAgrandirHeading.className} text-xl md:text-2xl font-bold text-black mb-4`}>
                                11) Contact
                            </h2>
                            <div className="space-y-4 text-black/70 leading-relaxed">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-xl p-5 border border-black/5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Mail className="w-5 h-5 text-black/40" />
                                            <span className="font-medium text-black">Support</span>
                                        </div>
                                        <a href="mailto:support@pockret.com" className="text-black/60 hover:text-black transition-colors text-sm">
                                            support@pockret.com
                                        </a>
                                    </div>
                                    <div className="bg-white rounded-xl p-5 border border-black/5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Shield className="w-5 h-5 text-black/40" />
                                            <span className="font-medium text-black">Legal</span>
                                        </div>
                                        <a href="mailto:legal@pockret.com" className="text-black/60 hover:text-black transition-colors text-sm">
                                            legal@pockret.com
                                        </a>
                                    </div>
                                    <div className="bg-white rounded-xl p-5 border border-black/5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <ExternalLink className="w-5 h-5 text-black/40" />
                                            <span className="font-medium text-black">Privacy</span>
                                        </div>
                                        <a href="mailto:privacy@pockret.com" className="text-black/60 hover:text-black transition-colors text-sm">
                                            privacy@pockret.com
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-black/50 mt-4">
                                    If you are a brand owner or authorized representative and believe content should be corrected or removed, please include proof of authorization in your request.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Related Links */}
                <section className="py-12 px-6 bg-white border-t border-black/5">
                    <div className="max-w-3xl mx-auto">
                        <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-6`}>
                            Related Pages
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/terms" className="px-4 py-2 rounded-full bg-black/5 text-sm text-black/70 hover:bg-black/10 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="px-4 py-2 rounded-full bg-black/5 text-sm text-black/70 hover:bg-black/10 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/security" className="px-4 py-2 rounded-full bg-black/5 text-sm text-black/70 hover:bg-black/10 transition-colors">
                                Security
                            </Link>
                            <Link href="/when-not-to-cancel" className="px-4 py-2 rounded-full bg-black/5 text-sm text-black/70 hover:bg-black/10 transition-colors">
                                When Not to Cancel
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
