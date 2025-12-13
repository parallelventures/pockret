import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className={`${ppAgrandirHeading.className} text-4xl font-bold mb-2`}>Privacy Policy – Pockret</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                <div className="prose prose-gray max-w-none space-y-6 text-text-muted">
                    <p className="text-lg">
                        This Privacy Policy explains how <strong>Pockret</strong> ("we", "us", "our") — operated by <strong>Virtual World LLC</strong> — collects, uses, and protects your personal information.
                    </p>
                    <p>
                        Your privacy and data security matter to us.<br />
                        We only collect data necessary to operate the service and never sell your information.
                    </p>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>1. Who We Are</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <p><strong>Virtual World LLC</strong></p>
                            <p>1209 Mountain Road Place Northeast, Suite R<br />
                                Albuquerque, NM 87110, United States</p>
                            <p className="mt-3">
                                Email: <a href="mailto:help@pockret.com" className="text-primary hover:underline">help@pockret.com</a><br />
                                Website: <a href="https://pockret.com" className="text-primary hover:underline">https://pockret.com</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>2. Information We Collect</h2>
                        <p>We may collect the following categories of personal information:</p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-4 mb-2`}>A. Information You Provide</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Payment information (processed securely by Stripe — we never store card numbers)</li>
                            <li>Account preferences</li>
                            <li>Support requests</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-4 mb-2`}>B. Automatically Collected Data</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Log data</li>
                            <li>Usage analytics (pages visited, actions performed)</li>
                        </ul>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-4 mb-2`}>C. Optional Connected Data (Only With Explicit Consent)</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Email-based subscription data (e.g., Gmail parsing)</li>
                            <li>Transaction metadata via third-party banking APIs</li>
                            <li>Refund opportunities or subscription status</li>
                        </ul>
                        <p className="mt-3 font-medium">
                            We <strong>never access</strong>, read, or store full bank account credentials.<br />
                            We only retrieve read-only metadata through secure aggregators.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>3. How We Use Your Information</h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Operate and improve Pockret</li>
                            <li>Detect refund opportunities and subscription charges</li>
                            <li>Generate refund templates</li>
                            <li>Process payments and manage subscriptions</li>
                            <li>Provide customer support</li>
                            <li>Ensure compliance and security</li>
                            <li>Prevent fraud</li>
                            <li>Personalize user recommendations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>4. Legal Basis (if Applicable)</h2>
                        <p>For users in the EU/EEA, we process personal data under:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Contract fulfillment</li>
                            <li>Legitimate interest</li>
                            <li>Explicit consent</li>
                            <li>Legal obligation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>5. Sharing Your Information</h2>
                        <p>We may share data with trusted processors:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Stripe</strong> (payments)</li>
                            <li><strong>Email providers</strong></li>
                            <li><strong>Cloud hosting providers</strong></li>
                            <li><strong>Plaid</strong> (banking data aggregation – if you choose to connect your accounts)</li>
                            <li><strong>Analytics services</strong></li>
                        </ul>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4">
                            <p className="text-sm">
                                <strong>About Plaid:</strong> When users choose to link their financial accounts, Pockret accesses read-only data via Plaid, which securely transmits information from the user's financial institution. Pockret does not store or have access to users' banking credentials.
                            </p>
                        </div>
                        <p className="mt-3 font-medium">
                            We do <strong>NOT</strong> sell personal data.<br />
                            We do <strong>NOT</strong> share data with advertisers or brokers.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>6. Data Retention</h2>
                        <p>We retain your information only as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Provide the service</li>
                            <li>Comply with legal requirements</li>
                            <li>Resolve disputes</li>
                            <li>Maintain accurate financial records</li>
                        </ul>
                        <p className="mt-2">You may request deletion at any time.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>7. Your Rights</h2>
                        <p>You may:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access your data</li>
                            <li>Correct your data</li>
                            <li>Request deletion</li>
                            <li>Withdraw consent</li>
                            <li>Export your data</li>
                            <li>Object to processing (where applicable)</li>
                        </ul>
                        <p className="mt-2">
                            Contact: <a href="mailto:help@pockret.com" className="text-primary hover:underline">help@pockret.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>8. Data Security</h2>
                        <p>We apply strict technical and organizational measures:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Industry-standard encryption</li>
                            <li>Secure access controls</li>
                            <li>No storage of banking credentials</li>
                            <li>Stripe PCI-DSS compliant payment processing</li>
                            <li>Regular audits and monitoring</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>9. International Transfers</h2>
                        <p>
                            Your data may be processed in the United States.<br />
                            We ensure appropriate protection for all transfers.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>10. Children's Privacy</h2>
                        <p>
                            Pockret is not intended for individuals under 18.<br />
                            We do not knowingly collect data from minors.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>11. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy and will notify users where required.</p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>12. Contact</h2>
                        <p>
                            For questions or privacy requests:<br />
                            📧 <a href="mailto:help@pockret.com" className="text-primary hover:underline">help@pockret.com</a><br />
                            📍 Virtual World LLC, Albuquerque, NM
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
