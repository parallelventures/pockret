'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function SubscriptionTrapArticle() {
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
                            The Subscription Trap: How Recurring Payments Quietly Steal Your Future
                        </h1>
                        <p className="text-black/50 text-sm">
                            And how Pockret fights back.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Imagine this:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>$14.99 for streaming</li>
                            <li>$9.99 for a "pro" app</li>
                            <li>$7.99 for extra storage</li>
                            <li>$5.99 for a newsletter you don't read</li>
                            <li>$19.99 for a gym you don't go to</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            No single line-item feels like a big deal. But when you add them all up over 12 months, you might realize:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                "I burned <strong>hundreds or thousands of dollars</strong> on subscriptions I barely remember."
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            That's the subscription trap. It doesn't destroy you in one day. <strong>It slowly eats your future.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. Why Subscriptions Are So Dangerous
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            One-time purchases hurt in the moment. You feel it when you swipe. Subscriptions are different:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>They're <strong>small</strong></li>
                            <li>They're <strong>automatic</strong></li>
                            <li>They're <strong>out of sight</strong></li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You barely remember saying yes. You rarely get a big pop-up saying, "Hey, you're about to lose another $39.99." Over time, this leads to:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Money drift</strong> – your spending slowly creeps up without you noticing</li>
                            <li><strong>Budget blindness</strong> – you feel broke but can't pinpoint why</li>
                            <li><strong>Future theft</strong> – money that could be invested, saved, or used for something meaningful is silently converted into forgotten services</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            Most people aren't bad with money. <strong>They're just outnumbered and out-automated.</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Psychological Tricks Companies Use to Keep You Subscribed
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Subscription businesses are masters of human psychology. Some of the common tactics:
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.1. Free trials that rely on you forgetting
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            "Try free for 7 days" sounds harmless. The business model often relies on:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You forgetting to cancel</li>
                            <li>You telling yourself, "I'll use it more next month"</li>
                            <li>You assuming "It's only $10"</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.2. One-click sign-up, obstacle-course cancellation
                        </h3>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>Sign-up:</strong> one button, Apple Pay, done.</li>
                            <li><strong>Cancellation:</strong> Log in on desktop, navigate 4 menus, click a tiny "manage plan" link, answer "are you sure?" 3 times</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            You're busy. You're tired. <strong>The friction works.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            2.3. Guilt and FOMO
                        </h3>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"You'll lose your history if you cancel."</li>
                            <li>"You're about to miss out on premium features."</li>
                            <li>"Your plan will never be this price again."</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            So you stay "just one more month." Again. And again.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. The Real Cost: It's Not Just the Money
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Yes, subscriptions cost money. But the damage isn't only financial.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.1. Mental clutter
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Every recurring payment is another open loop in your mind:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"I should cancel that."</li>
                            <li>"I need to check if I still use it."</li>
                            <li>"I'll do it later."</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Multiply this by 10–20 services, and you get <strong>constant low-level stress</strong>.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.2. Decision fatigue
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Every time renewal hits, you should ask: "Do I still need this?" But because it's automatic, you don't. You just pay. <strong>Your money is making decisions for you</strong>, instead of the other way around.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            3.3. Lost opportunities
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            That subscription money could be:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Paying off debt</li>
                            <li>Funding travel</li>
                            <li>Going into savings or investments</li>
                            <li>Paying for things you actually <em>use</em></li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Instead, it's paying for apps you "might come back to someday".
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. How Pockret Exposes the Subscription Trap in Plain English
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Most banking apps show you a giant list of transactions and say: "Good luck figuring it out."
                            <strong> Pockret is intentionally different.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            4.1. A clear map of your subscriptions
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Pockret scans your transactions, detects recurring patterns, and groups them into a <strong>clean, human-readable list</strong>:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"Netflix – $15.49 – monthly – last used: often"</li>
                            <li>"Random Design Tool – $29 – monthly – no usage detected since sign-up"</li>
                            <li>"Cloud Storage X – $9.99 – yearly – up for renewal in 2 weeks"</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            4.2. Brutally honest insights
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Instead of bland charts, Pockret tells you things like:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>"You've paid $348 this year for subscriptions tagged as <strong>rarely used</strong>."</li>
                            <li>"You have 5 subscriptions with <strong>no detected usage</strong> in the last 90 days."</li>
                            <li>"Three renewals are coming up this month for things you barely touch."</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            It's the financial equivalent of stepping on a scale after six months of ignoring your diet.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. Cancel & Ask for Refunds Without the Drama
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            Awareness is step one. Action is step two. This is where most people get stuck: You know you should cancel. You just don't want to spend your evening wrestling with support portals.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            5.1. Cancellation in a couple of clicks
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            Inside Pockret, you can:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-2 text-black/70">
                            <li>Pick a subscription that looks useless</li>
                            <li>Tap <strong>"Cancel this"</strong></li>
                            <li>Get a ready-to-send cancellation message tailored to that merchant</li>
                        </ol>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            5.2. Ask for refunds where it makes sense
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            For subscriptions you didn't use or that renewed without you noticing, Pockret can also:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Help you <strong>politely but firmly</strong> ask for a refund</li>
                            <li>Reference that you didn't use the service / weren't clearly reminded</li>
                            <li>Turn your vague frustration into a <strong>clean, assertive request</strong></li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Do you always get the refund? No. But you go from "0% chance because I didn't try" to <strong>"real chance with a professional message."</strong>
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. Turning Subscriptions from a Leak into a Weapon
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Subscriptions are not evil by default. When used intentionally, they can be powerful:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>One gym membership you actually use → great</li>
                            <li>One cloud tool that runs your business → fantastic</li>
                            <li>One education platform you study on weekly → priceless</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-8">
                            The problem is <em>unconscious</em> subscriptions. Pockret's mission is not to make you live with zero services. It's to make sure that <strong>every recurring dollar in your life is a conscious choice.</strong>
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-4">
                            With Pockret, you:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>See every subscription clearly</li>
                            <li>Know where your money is flowing</li>
                            <li>Cancel what doesn't serve you</li>
                            <li>Try to get back what was wasted</li>
                            <li>Keep only what genuinely moves your life forward</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Over a year, that can mean: less anxiety, a simpler financial life, hundreds or thousands of dollars recovered or redirected, and the feeling that <strong>you're the one running your money, not the other way around</strong>.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Final Thought */}
                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                            Final Thought
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If you feel like your money disappears without you understanding where it goes, it's not a personal failure. <strong>It's a design.</strong>
                        </p>

                        <blockquote className="border-l-4 border-blue-400 pl-6 py-4 mb-12 bg-blue-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                Pockret is built to be the <strong>counter-design</strong>: A simple, almost brutally honest tool whose only goal is to find leaks, kill useless subscriptions, and help you claw back as much money as possible, as easily as possible.<br /><br />
                                One dashboard. One click. And suddenly, your financial life starts to feel like <em>yours</em> again.
                            </p>
                        </blockquote>

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

            <Footer />
        </div>
    );
}
