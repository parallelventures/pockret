'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import ArticleCTAGradient from "@/components/article-cta-gradient";

export default function ConsumerLawsArticle() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 py-16 px-6">
                <article className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link href="/learn" className="text-black/50 hover:text-black transition-colors text-sm">
                            ← Back to Education Hub
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-6`}>
                            How to Use U.S. Consumer Laws to Get Your Money Back in 2025
                        </h1>
                        <p className="text-black/50 text-sm">
                            For U.S. consumers – information only, not legal advice.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            If you've ever looked at your bank or card statement and thought, "Wait, what is <strong>that</strong> charge?", you're not alone.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            In 2024, people in the U.S. reported losing <strong>over $12.5 billion to fraud</strong>, a 25% jump from the year before. On top of that, banks and card issuers still collect <strong>billions of dollars</strong> every year in overdraft and similar fees, even as regulators try to rein them in.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            The good news: U.S. consumer protection laws are <strong>much stronger</strong> than most people realize. If you know how to use them, you can often:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Get unauthorized charges removed</li>
                            <li>Fix billing errors</li>
                            <li>Get money back when goods never show up</li>
                            <li>Limit your liability if your card or account is compromised</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            This article breaks down the key U.S. laws that protect you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Fair Credit Billing Act (FCBA)</strong> – mainly for credit cards</li>
                            <li><strong>Electronic Fund Transfer Act (EFTA)</strong> – mainly for debit cards & bank transfers</li>
                            <li><strong>Truth in Lending Act (TILA)</strong> – rules about how lenders must disclose costs</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            …and shows how Pockret can turn all this legal complexity into a simple, guided experience.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. Step One: Figure Out What Kind of Transaction It Is
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Different laws apply depending on <strong>how</strong> you paid.
                        </p>

                        <ul className="list-disc pl-6 mb-6 space-y-3 text-black/70">
                            <li>
                                <strong>Credit card / store card / open-end line of credit</strong><br />
                                → Usually covered by <strong>FCBA</strong> and <strong>TILA</strong>.
                            </li>
                            <li>
                                <strong>Debit card, ATM withdrawals, ACH pulls from your bank account, Zelle/Venmo/PayPal linked directly to bank</strong><br />
                                → Usually covered by <strong>EFTA</strong> (via <strong>Regulation E</strong>).
                            </li>
                            <li>
                                <strong>"Buy now, pay later" or other loans</strong><br />
                                → Often covered by <strong>TILA</strong> if it's consumer credit (not business).
                            </li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            If you're not sure, a quick rule of thumb:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-12 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                If it's a credit card bill → think FCBA.<br />
                                If it's money pulled directly from your bank → think EFTA.
                            </p>
                        </blockquote>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Your Rights Under the Fair Credit Billing Act (FCBA)
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The <strong>Fair Credit Billing Act</strong> protects you from unfair billing practices on <strong>credit cards and other open-end credit accounts</strong>.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            What counts as a "billing error"?
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Under FCBA, you can dispute things like:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Unauthorized charges (fraud)</li>
                            <li>Charges with the wrong amount or date</li>
                            <li>Charges for goods/services you never received or that arrived damaged</li>
                            <li>Failure to post a payment or credit properly</li>
                            <li>Math/statement errors</li>
                            <li>Statements sent to the wrong address (if you gave proper notice)</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            Your basic protections
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Key points, in plain English:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-4 text-black/70">
                            <li>
                                <strong>60-day deadline from the statement date</strong><br />
                                You generally have 60 days from when the statement was sent to dispute a billing error in writing.
                            </li>
                            <li>
                                <strong>Disputes must usually be in writing</strong><br />
                                Phone calls often don't trigger FCBA's full legal protections unless the issuer explicitly accepts electronic notices.
                            </li>
                            <li>
                                <strong>$50 maximum liability for unauthorized charges</strong><br />
                                By law, your liability for unauthorized use of your credit card is capped at $50—and most major issuers now offer zero-liability policies if you report fraud promptly.
                            </li>
                            <li>
                                <strong>The issuer has strict timelines</strong><br />
                                Once they receive your written dispute, the issuer must acknowledge your dispute within 30 days, and resolve it within two full billing cycles (max 90 days).
                            </li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            How to actually use FCBA
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            If you see a bad credit card charge:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-3 text-black/70">
                            <li><strong>Check your statement date</strong> – note the 60-day window.</li>
                            <li><strong>Send a written dispute</strong> (letter, secure message, or email if allowed) to the billing inquiries address on your statement.</li>
                            <li>Include: your name and account number, the specific charge(s) you're disputing, why you think it's wrong, and any proof (receipts, screenshots).</li>
                            <li><strong>Pay everything else</strong> you legitimately owe while the investigation happens.</li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <strong>💡 Pockret</strong> can help by automatically detecting suspicious patterns in your card history and drafting dispute letters that hit all the FCBA requirements for you.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. Your Rights Under the Electronic Fund Transfer Act (EFTA)
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The <strong>Electronic Fund Transfer Act</strong>, implemented through <strong>Regulation E</strong>, protects you when money is moved <strong>electronically out of your bank account</strong> – think debit card, ATM, ACH, and many app-based transfers.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            The big difference vs a credit card: with a <strong>debit card</strong>, the money is <em>your actual cash</em>—so reacting fast is crucial.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            The three liability tiers under EFTA
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Regulation E creates three possible outcomes if someone makes unauthorized transfers from your account:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-4 text-black/70">
                            <li>
                                <strong>You report within 2 business days</strong> of learning your card/access device was lost or stolen<br />
                                → You can be liable for <strong>up to $50</strong> of the unauthorized transfers.
                            </li>
                            <li>
                                <strong>You wait more than 2 business days, but less than 60 days</strong> from the statement date<br />
                                → You can be liable for <strong>up to $500</strong> total.
                            </li>
                            <li>
                                <strong>You wait more than 60 days</strong> after the statement showing the unauthorized transfer<br />
                                → You may have <strong>unlimited liability</strong> for transfers that happen after that 60-day mark until you report it.
                            </li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 font-medium">
                            That's why checking your bank statements and app transaction history regularly is <strong>non-negotiable</strong> in 2025.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. Where the Truth in Lending Act (TILA) Fits In
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The <strong>Truth in Lending Act</strong> is the broader law that requires lenders and card issuers to clearly disclose the <strong>true cost of credit</strong>: APR, fees, total cost over time, and so on.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Why this matters to you in 2025:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>It's the reason you see standardized "Schumer boxes" on credit card offers with APR and fee breakdowns.</li>
                            <li>It underpins rules that protect you from certain unfair credit card practices and unexpected rate hikes.</li>
                            <li>It's being used in new regulations on overdraft, where the CFPB is treating some overdrafts more like credit products.</li>
                        </ul>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-12 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                TILA is the backbone of your right to <strong>understand</strong> what you're paying for when you borrow or use credit.
                            </p>
                        </blockquote>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Quick Checklist: What to Do When You Spot a Bad Charge
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Here's a simple flow you can follow:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-4 text-black/70">
                            <li>
                                <strong>Identify the payment type</strong><br />
                                Credit card → FCBA | Bank/debit/ACH → EFTA
                            </li>
                            <li>
                                <strong>Check your deadlines</strong><br />
                                Credit card: within 60 days of the statement date<br />
                                Debit/ACH: ideally within 2 business days, and definitely within 60 days
                            </li>
                            <li>
                                <strong>Contact your bank/card issuer immediately</strong><br />
                                Use the official phone number on the back of your card
                            </li>
                            <li>
                                <strong>Follow up in writing</strong><br />
                                For credit cards, written disputes are essential to trigger FCBA protections
                            </li>
                            <li>
                                <strong>Keep all documentation</strong><br />
                                Screenshots, emails, chat logs, receipts, tracking info, call reference numbers
                            </li>
                            <li>
                                <strong>Monitor the investigation</strong><br />
                                30 days → acknowledgment from issuer | Up to 90 days → final resolution
                            </li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            If something feels off—like a bank refusing to investigate or blaming you despite your quick report—you can also escalate to regulators like the <strong>CFPB</strong> or <strong>FTC</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. How Pockret Turns All This Into One Simple Experience
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The reality: most people will never read legal citations or 90-page regulations. That's why so much money is lost each year.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret's goal is to <strong>bridge the gap</strong> between these strong laws and your actual day-to-day finances by:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-3 text-black/70">
                            <li><strong>Automatically scanning your transactions</strong> for unauthorized or duplicate charges, goods/services billed but not delivered, and suspicious recurring pulls</li>
                            <li><strong>Classifying each issue</strong> under the right framework (FCBA, EFTA, or related protections)</li>
                            <li><strong>Drafting dispute messages and letters</strong> that use the correct legal concepts and are ready to send</li>
                            <li><strong>Tracking timelines</strong> so you don't miss critical 2-day / 60-day / 90-day windows</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You still stay in control—but instead of manually decoding U.S. consumer law, you tap into it with a few clicks.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Final Note */}
                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            Final Note
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            This article is <strong>general information</strong>, focused on U.S. federal law as of late 2025. Laws can change, states add extra protections, and your specific situation may be unique. When in doubt—especially for large amounts—consider talking to a qualified attorney or your state's consumer protection agency.
                        </p>

                        <blockquote className="border-l-4 border-blue-400 pl-6 py-4 mb-12 bg-blue-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                If a charge on your account looks wrong, <strong>you probably have more rights than you think</strong>—and you don't have to fight alone.
                            </p>
                        </blockquote>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Ready to recover your money?
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Let Pockret help you find and dispute charges automatically.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-colors cursor-pointer`}>
                                        Get Started Free
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
