import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "@/app/fonts";
import Link from "next/link";

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 md:py-20">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4 text-center md:text-left">
                        <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-extrabold leading-tight`}>
                            Money-Back Guarantee
                        </h1>
                        <p className="text-text-muted font-medium">
                            Last updated: December 6, 2025
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-foreground">
                        <p>
                            At <strong>Pockret</strong>, our mission is to help you recover the money that’s already yours.
                            We’re confident in what we built — so confident that we back it with a <strong>100% Money-Back Guarantee</strong>.
                        </p>

                        <hr className="my-8 border-border" />

                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold mt-8 mb-4`}>Our Promise</h2>
                        <p>
                            If Pockret doesn’t help you recover money, a refund, or a settlement within <strong>14 days</strong> of purchase, we’ll give you your money back — no questions asked.
                            It’s that simple.
                        </p>
                        <p>
                            We call it our <strong>“Gain or Refund” Guarantee</strong>:
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic my-6 bg-accent/10 p-4 rounded-r-lg">
                            If you don’t see real results, you don’t pay.
                        </blockquote>

                        <hr className="my-8 border-border" />

                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold mt-8 mb-4`}>Eligibility</h2>
                        <p>You’re eligible for a full refund if:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>You’ve completed at least one scan or refund check in the app.</li>
                            <li>You haven’t received, or aren’t waiting for, a refund or settlement identified by Pockret.</li>
                            <li>Your request is made within <strong>14 days</strong> of purchase.</li>
                        </ol>
                        <p className="mt-4">
                            Just email us at <a href="mailto:support@pockret.com" className="text-primary hover:underline font-bold">support@pockret.com</a> with your receipt and the email you used for purchase.
                            Our team will review and respond within <strong>5 business days</strong>.
                        </p>

                        <hr className="my-8 border-border" />

                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold mt-8 mb-4`}>How Refunds Work</h2>
                        <p>
                            Approved refunds are sent automatically to your original payment method within <strong>7–10 business days</strong>.
                            Because Pockret is a digital product with instant access to our databases and tools, we can’t issue refunds outside of the guarantee window.
                        </p>

                        <hr className="my-8 border-border" />

                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-bold mt-8 mb-4`}>Transparency & Fairness</h2>
                        <p>
                            Pockret never charges commissions, and we never touch your money.
                            We simply give you the tools to find what’s rightfully yours.
                        </p>
                        <p>
                            Our goal is simple — if you don’t recover anything, <strong>you don’t lose anything</strong>.
                        </p>

                        <hr className="my-8 border-border" />

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold mt-8 mb-4`}>Contact</h3>
                        <p>
                            <a href="mailto:support@pockret.com" className="text-primary hover:underline font-bold">support@pockret.com</a>
                            <br />
                            <Link href="/" className="text-primary hover:underline">https://pockret.com</Link>
                        </p>
                        <p className="mt-6 font-medium">
                            Thank you for trusting Pockret to help you recover what’s yours.
                            <br />
                            We guarantee you’ll see value — or you’ll see your money back.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
