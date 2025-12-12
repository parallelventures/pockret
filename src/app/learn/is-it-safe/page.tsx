'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Clock } from "lucide-react";

const ArticleCTAGradient = dynamic(() => import("@/components/article-cta-gradient"), { ssr: false });

export default function IsItSafeArticle() {
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
                        <div className="flex items-center gap-2 text-sm text-black/40 font-medium mb-4">
                            <Clock className="w-4 h-4" />
                            <span>4 min read</span>
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-tight mb-6`}>
                            Is It Safe to Let an App Scan My Bank Account? Let’s Be Honest About It.
                        </h1>
                        <p className="text-black/50 text-sm">
                            Real talk about security, privacy, and how we protect your data.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Let’s say it out loud:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                "Why on earth would I let an app look at my bank transactions?"
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If you’ve ever thought that, you’re not paranoid. You’re smart.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            So in this article, we’re going to talk about <strong>exactly</strong> that:
                            what Pockret sees, what it <em>can’t</em> do, and why giving an app read-only access to your transactions can actually help you <strong>protect</strong> your money instead of risking it. No buzzwords. Just reality.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 1 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            1. First, what Pockret actually needs (and why)
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            To find:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>hidden subscriptions</li>
                            <li>overcharges & weird fees</li>
                            <li>unused services you still pay for</li>
                            <li>possible refunds or credits</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            …Pockret needs to see <strong>your transaction history</strong>. Not your selfies, not your emails — just the list of “who charged you how much, and when”.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Think of it like this:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                Your bank statement is the “X-ray”.<br />
                                Pockret is the “specialist” that reads the X-ray and points at the fractures.
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Without the X-ray, there is nothing to analyze. That’s why connection is required.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 2 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            2. Read-only access: Pockret can’t move your money
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            The first key point:
                        </p>

                        <blockquote className="border-l-4 border-slate-400 pl-6 py-2 mb-8 bg-slate-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                <strong>Pockret is built to see, not to touch.</strong>
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            When you connect your accounts, the goal is <strong>read-only</strong> access. That means:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Pockret can <strong>read</strong> transaction data (amounts, dates, merchant names)</li>
                            <li>Pockret <strong>cannot</strong>:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>move money</li>
                                    <li>send payments</li>
                                    <li>withdraw anything</li>
                                    <li>change your banking credentials</li>
                                </ul>
                            </li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Under the hood, Pockret is designed to use the <strong>same kind of secure connectors</strong> that many personal finance apps and neo-banks rely on (providers like Plaid, Teller, etc.). These providers create an encrypted bridge between your bank and the app so:
                        </p>

                        <ul className="list-disc pl-6 mb-12 space-y-2 text-black/70">
                            <li>your banking username/password are <strong>never stored by Pockret</strong></li>
                            <li>Pockret gets a token that only allows <strong>secure read-only access</strong></li>
                            <li>if you revoke access from your bank or your app, the token dies</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            You keep control. You can disconnect. Pockret never gets a “key” that lets it drain your account.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 3 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            3. “But what if Pockret gets hacked?”
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Another fair question. No one can honestly say “nothing bad could <em>ever</em> happen”. That’s not how the internet works.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            What Pockret can do — and is built to do — is minimize the risk and the impact:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li><strong>No direct access to your login credentials</strong><br />
                                Pockret doesn’t keep your banking password. The connection is handled by secure third-party providers whose entire business is this.</li>

                            <li><strong>Read-only by design</strong><br />
                                If someone somehow got access to Pockret, they would still not be able to:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>initiate transfers</li>
                                    <li>approve payments</li>
                                    <li>change account settings at your bank</li>
                                </ul>
                            </li>

                            <li><strong>Limited scope</strong><br />
                                Pockret reads transaction data. It’s not scanning your emails, photos, or personal files.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Is there such a thing as 0% risk online? No. But compare it to what you do already:
                        </p>

                        <ul className="list-disc pl-6 mb-12 space-y-2 text-black/70">
                            <li>You log into banking apps on public Wi-Fi.</li>
                            <li>You store card details inside e-commerce accounts.</li>
                            <li>You’ve probably emailed a screenshot of your card or IBAN at least once.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            In that context, <strong>a read-only connection through a regulated data provider is often <em>less</em> risky</strong> than how most people already use their money online.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 4 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            4. Why letting an app scan your account can make you <em>safer</em>
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Now here’s the twist: once you get past the initial “this feels scary” moment, there’s a very real upside.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Most people are not robbed by some ultra-sophisticated hack. They lose money through:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>subscriptions they forgot</li>
                            <li>fees they don’t notice</li>
                            <li>billing errors they never contest</li>
                            <li>services that keep charging after cancellation</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Your bank doesn’t email you to say:
                        </p>

                        <blockquote className="border-l-4 border-black/20 pl-6 py-2 mb-8 bg-black/5 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                “Hey, looks like you’re paying for stuff you don’t use. Want to stop?”
                            </p>
                        </blockquote>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Pockret’s entire purpose is the opposite. By scanning your transactions, Pockret can:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>flag things that look wrong or useless</li>
                            <li>show you <strong>exactly</strong> where money leaks out</li>
                            <li>give you one-click tools to cancel, dispute, or request refunds</li>
                            <li>keep watching in the background so new leaks don’t appear silently</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            In other words:
                        </p>

                        <blockquote className="border-l-4 border-emerald-400 pl-6 py-2 mb-12 bg-emerald-50 rounded-r-lg">
                            <p className="text-black/80 text-lg font-medium">
                                The same data that can be used to <em>charge</em> you every month can finally be used to <strong>protect</strong> you every month.
                            </p>
                        </blockquote>

                        <hr className="border-black/10 my-12" />

                        {/* Section 5 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            5. You stay in control. Always.
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Here’s what doesn’t change when you use Pockret:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>Your bank remains your bank.</li>
                            <li>Your cards remain your cards.</li>
                            <li>You decide what to cancel, dispute, or ignore.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Here’s what does change:
                        </p>

                        <ul className="list-disc pl-6 mb-8 space-y-2 text-black/70">
                            <li>You stop being blind to quiet leaks.</li>
                            <li>You have a clear view of your subscriptions and fees.</li>
                            <li>You have ready-made messages and flows to fight back when something’s off.</li>
                        </ul>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            Pockret doesn’t replace your bank. It sits <em>between</em> your bank and all the businesses trying to charge you — as your <strong>personal money defense system</strong>.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            If you’re cautious, good. You should be. But don’t let that caution keep you from using tools that are <em>specifically designed</em> to help you keep more of your own money.
                        </p>

                        <hr className="border-black/10 my-12" />

                        {/* Section 6 */}
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-6`}>
                            6. Try it once, with eyes open
                        </h2>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            You don’t have to trust marketing copy. You don’t have to believe anything blindly.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            What you can do is:
                        </p>

                        <ol className="list-decimal pl-6 mb-8 space-y-2 text-black/70">
                            <li>Create a Pockret account</li>
                            <li>Connect one account</li>
                            <li>See what Pockret finds for you</li>
                            <li>Decide, with your own brain, if the results are worth it</li>
                        </ol>

                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            If you don’t like it, disconnect. If you do like it, you just found <strong>a partner that watches your money 24/7</strong> in your favor.
                        </p>

                        <p className="text-black/70 text-lg leading-relaxed mb-12">
                            That’s not scary. That’s smart.
                        </p>

                        {/* CTA with Gradient */}
                        <div className="relative overflow-hidden rounded-2xl p-8 text-center mt-12">
                            <ArticleCTAGradient />
                            <div className="relative z-10">
                                <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                                    Ready to stop the leaks?
                                </h3>
                                <p className="text-black/60 mb-6">
                                    Join Pockret and start protecting your money today.
                                </p>
                                <Link href="/login">
                                    <button className={`${ppAgrandirHeading.className} bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/90 transition-colors cursor-pointer`}>
                                        See What I’m Owed
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
                        Secure Your Money Now <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
