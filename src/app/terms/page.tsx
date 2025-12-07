import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className={`${ppAgrandirHeading.className} text-4xl font-bold mb-2`}>Terms of Service – Pockret</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                <div className="prose prose-gray max-w-none space-y-6 text-text-muted">
                    <p className="text-lg">
                        Welcome to Pockret.<br />
                        By using our website or service, you agree to the following Terms of Service.
                    </p>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>1. Overview</h2>
                        <p>
                            Pockret is operated by <strong>Virtual World LLC</strong> ("we", "us", "our").<br />
                            We provide tools that help users identify refunds, subscriptions, charges, and potential financial opportunities.
                        </p>
                        <p className="font-medium">
                            Pockret does <strong>not</strong> provide legal, financial, or tax advice.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>2. Eligibility</h2>
                        <p>To use Pockret, you must:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Be 18 or older</li>
                            <li>Provide accurate information</li>
                            <li>Use the service legally</li>
                            <li>Agree to these Terms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>3. Accounts</h2>
                        <p>You are responsible for:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Maintaining confidentiality of login credentials</li>
                            <li>All activity under your account</li>
                            <li>Providing accurate data</li>
                        </ul>
                        <p className="mt-2">We may suspend or terminate accounts for misuse.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>4. Payments & Billing</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Payments are processed securely via <strong>Stripe</strong></li>
                            <li>Prices may vary by region</li>
                            <li>Subscriptions auto-renew unless canceled</li>
                            <li>Lifetime purchases are non-transferable</li>
                        </ul>
                        <p className="mt-3">
                            All charges appear as <strong>POCKRET / VIRTUAL WORLD LLC</strong> or similar.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>5. Refunds</h2>
                        <p>Pockret offers a <strong>100% Money-Back Guarantee</strong> within 14 days if:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>You completed at least one scan</li>
                            <li>You received no refunds or settlements</li>
                            <li>You request the refund on time</li>
                        </ul>
                        <p className="mt-3">Outside this window, purchases are non-refundable.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>6. Service Limitations</h2>
                        <p>We do not guarantee:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Specific refund amounts</li>
                            <li>Processing times from third-party companies</li>
                            <li>Correctness of third-party data</li>
                            <li>Approval of refunds by external companies</li>
                        </ul>
                        <p className="mt-3 font-medium">
                            You acknowledge that Pockret provides <strong>tools</strong>, not guaranteed outcomes.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>7. User Conduct</h2>
                        <p>Users may not:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Manipulate the system</li>
                            <li>Attempt to access unauthorized data</li>
                            <li>Abuse refund tools</li>
                            <li>Harm or disrupt the platform</li>
                        </ul>
                        <p className="mt-2">Violations may result in termination.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>8. Third-Party Services</h2>
                        <p>Pockret may integrate with:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Gmail</li>
                            <li>Banking aggregators</li>
                            <li>Email APIs</li>
                            <li>Data providers</li>
                        </ul>
                        <p className="mt-2">Users must comply with third-party terms.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>9. Intellectual Property</h2>
                        <p>
                            All assets, logos, text, animations, UI, and content belong to <strong>Virtual World LLC</strong>.<br />
                            Unauthorized reproduction is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>10. Disclaimer of Warranties</h2>
                        <p>Pockret is provided "as-is" without warranties of any kind.</p>
                        <p className="mt-2">We disclaim responsibility for:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Loss of profits</li>
                            <li>Denied refunds</li>
                            <li>Bank or provider errors</li>
                            <li>Inaccurate data sources</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>11. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Virtual World LLC is <strong>not liable</strong> for indirect, incidental, or consequential damages.
                        </p>
                        <p className="mt-2">Liability is capped at the amount you paid for the service.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>12. Governing Law</h2>
                        <p>These terms are governed by the laws of <strong>New Mexico, USA</strong>.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>13. Contact</h2>
                        <p>
                            📧 <a href="mailto:support@pockret.com" className="text-primary hover:underline">support@pockret.com</a><br />
                            📍 Virtual World LLC, Albuquerque, NM
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
