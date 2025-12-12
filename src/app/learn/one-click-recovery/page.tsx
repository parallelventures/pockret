'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Clock } from "lucide-react";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function OneClickRecoveryArticle() {
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
                        <div className="flex items-center gap-2 text-black/40 text-sm mb-4">
                            <Clock className="w-4 h-4" />
                            <span>5 min read</span>
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-6`}>
                            One-Click Money Recovery: Settlements, Refunds, and Hidden Cash You Didn't Know You Had
                        </h1>
                        <p className="text-black/50 text-sm">
                            For U.S. consumers – not legal or financial advice, just the playbook nobody ever gave you.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            If you're like most people, you are probably <strong>leaving money on the table every single month</strong>.
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Class action settlements you qualify for but never claim</li>
                            <li>Old subscriptions quietly billing you</li>
                            <li>Overcharges, "adjustments", random small fees</li>
                            <li>Refunds merchants <em>should</em> have given you but never processed</li>
                            <li>Services you paid for and never used</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Individually, these look like "nothing": $4.99 here, $12.99 there, a random $1.32 "fee".
                            Collectively, over a year, this can easily become <strong>hundreds or even thousands of dollars</strong> that simply vanish out of your account.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            <strong>Pockret exists to stop that.</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Instead of you trying to be a full-time investigator of your own bank statements, Pockret turns all of this into a <strong>one-click recovery experience</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. Settlements & Class Actions: Free Money You Never Hear About
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Every year, companies pay out <strong>millions in class action settlements</strong> for things like:
                        </p>

                        <ul className="list-disc pl-6 mb-6 space-y-2 text-black/70">
                            <li>Junk fees</li>
                            <li>Deceptive pricing</li>
                            <li>Privacy violations</li>
                            <li>Hidden terms in subscriptions</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            The problem? Most people:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Never see the email</li>
                            <li>Don't understand if they qualify</li>
                            <li>Don't bother filling out a long claim form for $20–$100</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            So the money just… goes back to the system.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            How Pockret helps with settlements
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret is designed to:
                        </p>

                        <ol className="list-decimal pl-6 mb-6 space-y-3 text-black/70">
                            <li><strong>Scan your transactions</strong> and basic merchant history</li>
                            <li>Match them against relevant <strong>settlements and class actions</strong></li>
                            <li>Tell you, in plain language: "You might qualify for this settlement based on your past payments to X."</li>
                            <li>Pre-fill as much as possible so you can <strong>submit or start a claim in just a few clicks</strong></li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            Is Pockret a law firm? No.<br />
                            But is it your personal radar for "hey, you might be owed money here"?<br />
                            <strong>Yes. Aggressively yes.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Refunds in One Click: Stop Accepting "Oh Well" as an Answer
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Think about how many times you've thought:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium italic">
                                "Ugh, it's just $10, I don't have time to fight this."
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Merchants and platforms quietly rely on that reaction. You might be entitled to refunds when:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>A service didn't work as promised</li>
                            <li>A purchase arrived broken or never arrived</li>
                            <li>You were overcharged compared to the advertised price</li>
                            <li>A free trial turned into a full-priced subscription without clear warning</li>
                            <li>You canceled but were still billed</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            How Pockret turns "I should complain" into "Done."
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret helps by:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Detecting suspicious patterns</strong> (double charges, weird amounts, unknown merchants)</li>
                            <li>Asking you simple questions in plain English</li>
                            <li>Generating <strong>ready-to-send refund requests</strong> that sound like a real human who knows their rights</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            In many cases, you tap a button, review the message, and send. You go from "ugh, I should deal with this at some point" to <strong>"this is already handled"</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. Cancel & Refund Subscriptions in One Click
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Subscriptions are the <strong>silent killer</strong> of your budget:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You try a meditation app "just for a week"… and 8 months later you're still getting charged.</li>
                            <li>You subscribe to a tool for a project, finish the project, and forget it exists.</li>
                            <li>You switch streaming platforms but keep paying for the old ones "just in case".</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            The result? A slow leak that can easily become <strong>another $50–$200 per month</strong> with no added value.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            Pockret as your subscription Terminator
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret doesn't just show you a huge list of subscriptions and say "good luck". It:
                        </p>

                        <ul className="list-disc pl-6 mb-6 space-y-2 text-black/70">
                            <li><strong>Maps your recurring charges</strong>: monthly, yearly, sneaky quarterly charges</li>
                            <li>Tags them as: Active & used, Active but rarely used, Active and <strong>not used at all</strong></li>
                            <li>Highlights "red zone" subscriptions that you should consider canceling</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You still decide what to send. But Pockret turns a headache that normally takes 20+ minutes per subscription into <strong>a 20-second decision.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. Unclaimed Money: "Forgotten" Balances, Credits, and Rewards
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Beyond obvious charges, you also have <strong>positive money</strong> lying around:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Store credits never used</li>
                            <li>Refunds issued as "account credit" instead of back to your card</li>
                            <li>Gift cards with random $7.23 left</li>
                            <li>Reward points that quietly expire</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            You earned that. You paid for that. It's still value.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Pockret aims to surface these so you know they exist, instead of donating them to <strong>corporate breakage</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Overcharges & "Micro-Fees": The Slow Bleed
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            One of the sneakiest ways money leaks out:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>$1–$3 "service fees"</li>
                            <li>Random processing charges</li>
                            <li>Price differences between the advertised price and what you were actually billed</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Most people never zoom in that deep. <strong>But a machine can.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            How Pockret treats your statements like crime scenes
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret runs through your transactions to:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Look for recurring weird small charges</li>
                            <li>Compare typical prices for the same merchant</li>
                            <li>Flag potential overcharges for you to review</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You're still in control, but you're no longer alone in the dark.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. The Vision: One Dashboard to Get All Your Money Back
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The traditional model is simple:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You pay</li>
                            <li>Companies keep as much as they can</li>
                            <li>If something goes wrong, <strong>it's on you</strong> to notice, understand your rights, and fight</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            <strong>Pockret flips that logic.</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Our goal is to become the <strong>central place where you recover everything that's rightfully yours</strong>:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Potential settlement eligibility → surfaced and explained</li>
                            <li>Bad charges → spotted and challenged</li>
                            <li>Subscriptions → mapped, triaged, and canceled when needed</li>
                            <li>Hidden credits → surfaced and redeemed</li>
                            <li>Overcharges → detected and disputed</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            All from one interface. As close to <strong>"one click = I want my money back"</strong> as reality allows.
                        </p>

                        <blockquote className="border-l-4 border-blue-400 pl-6 py-4 mb-12 bg-blue-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                You shouldn't need to be a lawyer, an accountant, and an investigator just to avoid being slowly drained.
                                You just need one place whose entire purpose is simple:<br /><br />
                                <strong>Pockret exists to hunt down your lost money, so you don't have to.</strong>
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
                                    Let Pockret find what you're owed and get it back for you.
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
