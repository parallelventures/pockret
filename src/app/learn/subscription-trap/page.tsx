'use client'

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Clock } from "lucide-react";
import { MeshGradient } from '@paper-design/shaders-react';

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function SubscriptionTrapArticle() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
                        <div className="mb-12 relative rounded-2xl overflow-hidden">
                            <MeshGradient
                                speed={0}
                                distortion={0}
                                swirl={0.3}
                                frame={42534.33200006084}
                                scale={1.39}
                                grainMixer={0.55}
                                grainOverlay={0.11}
                                colors={['#FFFFFF', '#78E9FF', '#00BBFF']}
                                style={{ height: '320px', width: '100%' }}
                            />
                            {/* App Icons Grid */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-6 gap-2 md:gap-3">
                                    <img src="/icons/netflix.png" alt="Netflix" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/spotify.png" alt="Spotify" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/discord.png" alt="Discord" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/chatgpt.png" alt="ChatGPT" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/primevideo.png" alt="Prime Video" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/duolingo.png" alt="Duolingo" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/canva.png" alt="Canva" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/strava.png" alt="Strava" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/revolut.png" alt="Revolut" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/tinder.png" alt="Tinder" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/chess.png" alt="Chess" className="w-14 h-14 md:w-20 md:h-20" />
                                    <img src="/icons/disneyplus.png" alt="Disney+" className="w-14 h-14 md:w-20 md:h-20" />
                                </div>
                            </div>
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-none mb-3`}>
                            The Subscription Trap: How Recurring Payments Quietly Steal Your Future?
                        </h1>
                        <p className="text-black/50 text-sm mb-4">
                            And how Pockret fights back.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-black/40 font-medium">
                            <Clock className="w-4 h-4" />
                            <span>6 min read</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Imagine this (real-world U.S. pricing, Dec 2025):
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Netflix Premium (4K + HDR) — <strong>$24.99/month</strong></li>
                            <li>Disney+ Premium (No Ads) — <strong>$18.99/month</strong></li>
                            <li>Spotify Premium Individual — <strong>$11.99/month</strong></li>
                            <li>Apple TV+ — <strong>$12.99/month</strong></li>
                            <li>Amazon Prime (includes Prime Video) — <strong>$14.99/month</strong></li>
                            <li>Super Duolingo — <strong>$83.99/year</strong> (~$6.99/month)</li>
                            <li>Apple Music Individual — <strong>$10.99/month</strong></li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Nothing here looks "life-changing." But stack a few of these and you're casually burning <strong>$70–$100/month</strong> without even noticing — <strong>$840–$1,200/year</strong>, and that's before all the "small" stuff.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            That's the subscription trap: it doesn't ruin you in one day. <strong>It quietly eats your future.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. Why subscriptions are so dangerous
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            One-time purchases hurt once. Subscriptions hurt forever — because they're:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Small</strong> (so your brain ignores them)</li>
                            <li><strong>Automatic</strong> (so you don't re-decide)</li>
                            <li><strong>Out of sight</strong> (so you don't feel the pain)</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Over time you get:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Money drift</strong> — spending creeps up invisibly</li>
                            <li><strong>Budget blindness</strong> — you feel broke but can't pinpoint why</li>
                            <li><strong>Future theft</strong> — money that could build your life gets converted into "meh"</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            Most people aren't bad with money. <strong>They're just out-automated.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. The tricks companies use to keep you subscribed
                        </h2>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.1 Free trials built on forgetting
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            "Try free for 7 days" sounds harmless. The business model often relies on:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You forgetting</li>
                            <li>You procrastinating</li>
                            <li>You thinking "it's only $10"</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.2 One-click signup, obstacle-course cancellation
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            <strong>Signup:</strong> tap + Face ID + done.<br />
                            <strong>Cancel:</strong> "log in on desktop, click 4 menus, confirm 3 times, find the hidden link."
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            <strong>Friction wins. You lose.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.3 Guilt + FOMO
                        </h3>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"You'll lose your history."</li>
                            <li>"This price won't come back."</li>
                            <li>"You're about to miss premium features."</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            So you stay "one more month." Again. And again.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. The real cost isn't just money
                        </h2>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.1 Mental clutter
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Every recurring payment becomes an open loop: "I should cancel that… later."
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Ten open loops = <strong>constant low-level stress</strong>.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.2 Decision fatigue
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Renewals should trigger: "Do I still want this?" But autopay turns your life into: <strong>"I guess I'm paying."</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.3 Lost opportunities
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            That money could be:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Travel</li>
                            <li>Savings / investing</li>
                            <li>Debt payoff</li>
                            <li>Stuff you actually use weekly</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Instead, it's paying for subscriptions you "might use someday."
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. How Pockret exposes the subscription trap (in plain English)
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Most banks dump transactions on you and say: "Good luck." <strong>Pockret does the opposite: it makes the invisible obvious.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            4.1 A clean map of your subscriptions
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret scans your linked account, detects recurring payments, and groups them into a human list like:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Netflix Premium — $24.99 — monthly — <strong>active</strong></li>
                            <li>Disney+ Premium — $18.99 — monthly — <strong>active</strong></li>
                            <li>Spotify Premium — $11.99 — monthly — <strong>active</strong></li>
                            <li>Apple TV+ — $12.99 — monthly — <em>forgot you had it</em></li>
                            <li>Prime — $14.99 — monthly — <em>"I only wanted shipping once…"</em></li>
                            <li>Super Duolingo — $83.99/year — annual — <em>renews silently</em></li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            4.2 Brutally honest insights (the "wake-up" layer)
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Instead of bland pie charts, Pockret tells you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"You're spending <strong>$___/month</strong> on recurring payments."</li>
                            <li>"These 3 subscriptions haven't been used in a while (likely waste)."</li>
                            <li>"You have renewals coming in the next 7 days."</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            It's like stepping on a scale after months of denial — uncomfortable, but insanely useful.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Cancel & request refunds without the drama
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Awareness is step one. Action is step two. This is where people freeze: They <em>want</em> to cancel — they just don't want to spend their evening fighting portals.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            5.1 Cancel in a couple of clicks (semi-automated)
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Inside Pockret you can:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Pick the subscription</li>
                            <li>Tap <strong>"Cancel"</strong></li>
                            <li>Get the exact cancel path + a ready-to-send message (email/chat form/script)</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            No guessing. No digging.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            5.2 Ask for refunds when it makes sense
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            If something renewed unexpectedly, or you barely used it, Pockret helps you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Generate a clean refund request</li>
                            <li>Use the right tone + the right reasoning</li>
                            <li>Reference consumer protections when relevant (without sounding like a robot)</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Do you always get refunded? Not always. But you go from <strong>"0% chance because I didn't try"</strong> to <strong>"a real chance because I asked correctly."</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. Turn subscriptions from a leak into a weapon
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Subscriptions aren't evil. <strong>Unconscious subscriptions are.</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret's mission isn't "cancel everything." It's: <strong>keep only what genuinely serves you — and recover what never should've left your account.</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            With Pockret, you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>See every subscription clearly</li>
                            <li>Kill the useless ones fast</li>
                            <li>Try to recover wasted spend</li>
                            <li>Keep only what you actually use</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Over a year, that can mean: <strong>less anxiety, cleaner finances, and hundreds (sometimes thousands) redirected back to your life.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Final Thought */}
                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            Final thought
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If your money disappears and you don't understand why, it's not a personal failure. <strong>It's a design.</strong>
                        </p>

                        <blockquote className="border-l-4 border-slate-400 pl-6 py-4 mb-12 bg-slate-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                Pockret is the <strong>counter-design</strong>: one dashboard that finds the leaks, helps you cancel the dead weight, and makes it stupidly easy to fight back.
                            </p>
                        </blockquote>

                        {/* Article Actions */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="relative group">
                                <button
                                    onClick={handleCopy}
                                    className="text-black/30 hover:text-black transition-colors cursor-pointer"
                                >
                                    <div className="relative w-5 h-5">
                                        {/* Copy icon */}
                                        <svg
                                            className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${copied ? 'opacity-0 scale-50 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8625 3.00005C11.0671 2.99962 10.4765 2.9993 9.96482 3.13639C8.58445 3.50626 7.50626 4.58445 7.13639 5.96482C7.05215 6.27923 7.01979 6.62348 7.00746 7.02673C6.91806 7.03161 6.83165 7.03737 6.74818 7.04419C6.18608 7.09012 5.66938 7.18868 5.18404 7.43598C4.43139 7.81947 3.81947 8.43139 3.43598 9.18404C3.18868 9.66937 3.09012 10.1861 3.0442 10.7482C2.99998 11.2894 2.99999 11.9537 3 12.7587V15.2413C2.99999 16.0463 2.99998 16.7106 3.0442 17.2518C3.09012 17.8139 3.18868 18.3306 3.43598 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.66938 20.8113 6.18608 20.9099 6.74818 20.9558C7.28937 21 7.95373 21 8.7587 21H11.2413C12.0462 21 12.7106 21 13.2518 20.9558C13.8139 20.9099 14.3306 20.8113 14.816 20.564C15.5686 20.1805 16.1805 19.5686 16.564 18.816C16.8113 18.3306 16.9099 17.8139 16.9558 17.2518C16.9626 17.1684 16.9684 17.0821 16.9733 16.9927C17.3766 16.9804 17.7209 16.9481 18.0354 16.8638C19.4157 16.4939 20.4939 15.4157 20.8638 14.0354C21.0009 13.5237 21.0006 12.9331 21.0001 12.1377L21.0001 8.75882C21.0001 7.95384 21.0001 7.28947 20.9559 6.74827C20.91 6.18617 20.8114 5.66947 20.5641 5.18413C20.1806 4.43149 19.5687 3.81956 18.8161 3.43607C18.3307 3.18878 17.814 3.09022 17.2519 3.04429C16.7107 3.00007 16.0464 3.00008 15.2414 3.0001L11.8625 3.00005ZM17 14.9902C17.2576 14.9811 17.3989 14.9638 17.5177 14.9319C18.2079 14.747 18.747 14.2079 18.9319 13.5177C18.9915 13.2955 19.0001 12.9944 19.0001 12.0001V8.8001C19.0001 7.94352 18.9993 7.36122 18.9625 6.91113C18.9267 6.47272 18.8618 6.24852 18.7821 6.09212C18.5904 5.71579 18.2844 5.40983 17.9081 5.21808C17.7517 5.13839 17.5275 5.07347 17.0891 5.03765C16.639 5.00087 16.0567 5.0001 15.2001 5.0001H12.0001C11.0057 5.0001 10.7047 5.00869 10.4825 5.06824C9.79227 5.25318 9.25318 5.79227 9.06825 6.48246C9.03642 6.60123 9.01915 6.74249 9.00996 7H11.2413C12.0463 6.99999 12.7106 6.99998 13.2518 7.04419C13.8139 7.09012 14.3306 7.18868 14.816 7.43598C15.5686 7.81947 16.1805 8.43139 16.564 9.18404C16.8113 9.66937 16.9099 10.1861 16.9558 10.7482C17 11.2894 17 11.9537 17 12.7587V14.9902Z" />
                                        </svg>
                                        {/* Checkmark icon */}
                                        <svg
                                            className={`w-5 h-5 absolute inset-0 text-emerald-500 ${copied ? 'opacity-100' : 'opacity-0'}`}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            style={{ animation: copied ? 'pop-in 0.3s ease-out forwards' : 'none' }}
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.3209 4.24472C20.0143 4.69807 20.2088 5.62768 19.7555 6.32105L11.2555 19.321C10.9972 19.7161 10.5681 19.9665 10.0971 19.997C9.62616 20.0276 9.16828 19.8347 8.86114 19.4764L4.36114 14.2264C3.82201 13.5974 3.89485 12.6504 4.52384 12.1113C5.15283 11.5722 6.09978 11.645 6.63891 12.274L9.83828 16.0066L17.2446 4.6793C17.6979 3.98593 18.6275 3.79136 19.3209 4.24472Z" />
                                        </svg>
                                    </div>
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {copied ? 'Copied!' : 'Copy link'}
                                </span>
                            </div>
                            <div className="relative group">
                                <button className="text-black/30 hover:text-black transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.1181 2.04792C12.6817 1.94211 12.2504 2.20028 12.0773 2.61462C11 6.50002 8 8.55501 8 11.2699V17.7252C8 18.8717 8.66361 20.0005 9.83559 20.4273C12.4864 21.3926 14.2335 21.589 16.9595 21.3527C19.0504 21.1715 20.6221 19.5685 21.0577 17.6326L21.9024 13.8781C22.4651 11.3773 20.5633 9.00007 18 9.00007L15 9.00002C15.4693 6.18434 16.615 2.89587 13.1181 2.04792Z" /><path d="M2 11.5C2 10.3954 2.89543 9.5 4 9.5H4.5C5.88071 9.5 7 10.6193 7 12V18C7 19.3807 5.88071 20.5 4.5 20.5H4C2.89543 20.5 2 19.6046 2 18.5V11.5Z" />
                                    </svg>
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Like
                                </span>
                            </div>
                            <div className="relative group">
                                <button className="text-black/30 hover:text-black transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M10.8836 21.9521C11.32 22.0579 11.7513 21.7997 11.9244 21.3854C13.0017 17.5 16.0017 15.445 16.0017 12.7301V6.27476C16.0017 5.12833 15.3381 3.9995 14.1661 3.57273C11.5152 2.60744 9.76815 2.41102 7.04211 2.64726C4.95127 2.82846 3.37955 4.43151 2.94397 6.36742L2.09922 10.1219C1.53654 12.6227 3.43833 14.9999 6.00166 14.9999L9.00166 15C8.53238 17.8157 7.38664 21.1041 10.8836 21.9521Z" /><path d="M22.0017 12.5C22.0017 13.6046 21.1062 14.5 20.0017 14.5H19.5017C18.1209 14.5 17.0017 13.3807 17.0017 12V5.99999C17.0017 4.61928 18.1209 3.49999 19.5017 3.49999H20.0017C21.1062 3.49999 22.0017 4.39542 22.0017 5.49999V12.5Z" />
                                    </svg>
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Dislike
                                </span>
                            </div>
                            <div className="relative group">
                                <button
                                    onClick={() => navigator.share?.({ title: document.title, url: window.location.href })}
                                    className="text-black/30 hover:text-black transition-colors cursor-pointer"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.9314 5.36923C11.9314 3.60025 14.0592 2.70222 15.3267 3.93629L22.3932 10.8169C23.1996 11.602 23.1996 12.8976 22.3932 13.6828L15.3267 20.5633C14.0592 21.7974 11.9314 20.8994 11.9314 19.1304V16.7574C8.51347 16.8115 6.60594 17.1502 5.41921 17.6903C4.22271 18.2348 3.6857 19.0145 3.0128 20.3271C2.45482 21.4155 0.922319 20.9104 0.933656 19.8119C0.976272 15.6808 1.63311 12.5653 3.61296 10.5247C5.44311 8.63838 8.20161 7.8747 11.9314 7.76415V5.36923Z" />
                                    </svg>
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Share
                                </span>
                            </div>
                            <div className="relative group">
                                <button className="text-black/30 hover:text-black transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4334 11.4178C10.0693 11.6606 10 11.8861 10 12C10 12.1139 10.0693 12.3394 10.4334 12.5822C10.7905 12.8202 11.3415 13 12 13C12.6585 13 13.2095 12.8202 13.5666 12.5822C13.9307 12.3394 14 12.1139 14 12C14 11.8861 13.9307 11.6606 13.5666 11.4178C13.2095 11.1798 12.6585 11 12 11C11.3415 11 10.7905 11.1798 10.4334 11.4178ZM14 14.6088C13.3999 14.8635 12.7125 15 12 15C11.2875 15 10.6001 14.8635 10 14.6088V18C10 18.1139 10.0693 18.3394 10.4334 18.5822C10.7905 18.8202 11.3415 19 12 19C12.6585 19 13.2095 18.8202 13.5666 18.5822C13.9307 18.3394 14 18.1139 14 18V14.6088ZM16 12C16 11.0093 15.3977 10.2349 14.676 9.75374C13.9474 9.26796 12.9983 9 12 9C11.0017 9 10.0526 9.26796 9.32398 9.75374C8.6023 10.2349 8 11.0093 8 12V22C8 22.5523 8.44772 23 9 23C9.97506 23 14.0249 23 15 23C15.5523 23 16 22.5523 16 22V12Z" /><path d="M4.64242 5.21641C4.78975 4.92192 5.21024 4.92192 5.35756 5.21642C6.11192 6.72429 6.27462 6.88668 7.7829 7.6404C8.07756 7.78765 8.07756 8.2079 7.7829 8.35514C6.27462 9.10886 6.11192 9.27126 5.35756 10.7791C5.21024 11.0736 4.78975 11.0736 4.64242 10.7791C3.88806 9.27126 3.72536 9.10886 2.21708 8.35514C1.92243 8.2079 1.92243 7.78765 2.21709 7.6404C3.72536 6.88668 3.88806 6.72429 4.64242 5.21641Z" /><path d="M11.6385 1.22087C11.7858 0.926377 12.2063 0.926378 12.3537 1.22087C13.108 2.72874 13.2707 2.89114 14.779 3.64485C15.0737 3.7921 15.0737 4.21235 14.779 4.3596C13.2707 5.11332 13.108 5.27571 12.3537 6.78359C12.2063 7.07808 11.7858 7.07808 11.6385 6.78358C10.8842 5.27571 10.7215 5.11332 9.21319 4.3596C8.91853 4.21235 8.91853 3.7921 9.21319 3.64485C10.7215 2.89114 10.8842 2.72874 11.6385 1.22087Z" /><path d="M18.6346 5.21641C18.7819 4.92192 19.2024 4.92192 19.3498 5.21642C20.1041 6.72429 20.2668 6.88668 21.7751 7.6404C22.0698 7.78765 22.0698 8.2079 21.7751 8.35514C20.2668 9.10886 20.1041 9.27126 19.3498 10.7791C19.2024 11.0736 18.7819 11.0736 18.6346 10.7791C17.8803 9.27126 17.7176 9.10886 16.2093 8.35514C15.9146 8.2079 15.9146 7.78765 16.2093 7.6404C17.7176 6.88668 17.8803 6.72429 18.6346 5.21641Z" />
                                    </svg>
                                </button>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Summarize with AI
                                </span>
                            </div>
                        </div>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Ready to escape the subscription trap?
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Let Pockret find your hidden subscriptions and help you cancel them.
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

            {/* Sticky CTA (Mobile) */}
            <div className="fixed bottom-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none md:hidden">
                <Link href="/login" className="pointer-events-auto w-full max-w-sm shadow-2xl shadow-black/20 rounded-full">
                    <button className={`${ppAgrandirHeading.className} w-full bg-black text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-all active:scale-95 flex items-center justify-center gap-2 border border-white/20`}>
                        Find Hidden Subscriptions <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
