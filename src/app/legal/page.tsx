import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LegalPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl font-bold mb-2">Legal Notice & Company Information</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                <div className="prose prose-gray max-w-none space-y-8 text-text-muted">
                    <p>
                        This page provides legally required information about Pockret, its operator, and the terms under which the service is offered.
                        <br />
                        Pockret is operated by <strong>Virtual World LLC</strong>, a United States limited liability company.
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">1. Company Information</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-2">
                            <p><strong>Legal Entity:</strong> Virtual World LLC</p>
                            <p>
                                <strong>Registered Address:</strong><br />
                                1209 Mountain Road Place Northeast, Suite R<br />
                                Albuquerque, NM 87110<br />
                                United States
                            </p>
                            <p><strong>Registration:</strong> Limited Liability Company (LLC)</p>
                            <p><strong>State of Incorporation:</strong> New Mexico, USA</p>
                            <p><strong>EIN:</strong> Provided upon request</p>
                            <p><strong>Email:</strong> <a href="mailto:support@pockret.com" className="text-primary hover:underline">support@pockret.com</a></p>
                            <p><strong>Website:</strong> <a href="https://pockret.com" className="text-primary hover:underline">https://pockret.com</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">2. Service Description</h2>
                        <p>
                            Pockret is a digital platform that helps users identify potential refunds, hidden charges, unused subscriptions, settlements, benefits, and financial opportunities.
                            The service may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Refund opportunity detection</li>
                            <li>Subscription audits</li>
                            <li>Settlement discovery</li>
                            <li>Automated refund templates</li>
                            <li>Financial insights and analytics</li>
                        </ul>
                        <p className="mt-4 font-medium">
                            Pockret does <strong>not</strong> provide legal, financial, or tax advice.
                            <br />
                            Pockret does <strong>not</strong> act as a bank, financial institution, or payment processor.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">3. Use of the Service</h2>
                        <p>By accessing Pockret, you confirm that you:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Are at least 18 years old</li>
                            <li>Have the legal right to use the payment method provided</li>
                            <li>Provide accurate and lawful information</li>
                            <li>Will not misuse or manipulate the service</li>
                        </ul>
                        <p className="mt-2">
                            Pockret reserves the right to suspend or terminate accounts in case of misuse, fraud, or violation of these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">4. Payments & Subscriptions</h2>
                        <p>
                            Payments for Pockret are processed by <strong>Stripe</strong>, a PCI-compliant payment processor.
                            Accepted payment methods include credit cards, debit cards, and other Stripe-supported options.
                        </p>
                        <p>Available plans may include:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Monthly subscription</li>
                            <li>Annual subscription</li>
                            <li>Lifetime access</li>
                            <li>One-time purchases</li>
                        </ul>
                        <p className="mt-2">
                            Prices are displayed before checkout and may vary by region.
                            All charges will appear on your bank statement as <strong>“POCKRET / VIRTUAL WORLD LLC”</strong> or similar Stripe descriptor.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">5. Refund Policy (“Gain or Refund” Guarantee)</h2>
                        <p>Pockret offers a 100% Money-Back Guarantee under the following conditions:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>You must request a refund within <strong>14 days</strong> of purchase.</li>
                            <li>You must have completed at least one scan or refund check.</li>
                            <li>No refund, reimbursement, or settlement may have been received or be pending as a result of Pockret’s tools.</li>
                        </ul>
                        <p className="mt-2">
                            To request a refund, email <strong><a href="mailto:support@pockret.com" className="text-primary hover:underline">support@pockret.com</a></strong> with your receipt and purchase email.
                            Refunds are processed within <strong>7–10 business days</strong> via the original payment method.
                        </p>
                        <p className="text-sm italic mt-2">This policy complies with Stripe guidelines for digital services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">6. No Financial Responsibility</h2>
                        <p>
                            Pockret does not guarantee any specific financial outcome.
                            All decisions taken by the user based on Pockret’s information are their own responsibility.
                        </p>
                        <p>Pockret is not liable for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Decisions made based on information provided</li>
                            <li>Losses resulting from incomplete or incorrect data</li>
                            <li>Refunds denied by third-party companies</li>
                            <li>Account access issues with banks, providers, or email services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">7. Third-Party Services</h2>
                        <p>
                            Pockret may use third-party APIs or providers (e.g., email providers, banking aggregators) to deliver some features.
                            By using these services, you agree to comply with their respective terms.
                        </p>
                        <p>
                            Pockret does not store bank credentials and never accesses bank accounts without explicit user consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">8. Data Protection & Privacy</h2>
                        <p>
                            Pockret collects and processes data in accordance with its Privacy Policy.
                            Data may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Account information</li>
                            <li>Transaction metadata (when authorized)</li>
                            <li>Email-based subscription data (when authorized)</li>
                            <li>Usage analytics</li>
                        </ul>
                        <p className="mt-2">
                            Personal data is never sold or transferred to third parties without consent.
                            Users may request deletion of their account or data by contacting support.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">9. Intellectual Property</h2>
                        <p>
                            All content, trademarks, logos, UI designs, and text on Pockret are the exclusive property of <strong>Virtual World LLC</strong>.
                            Unauthorized reproduction or distribution is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">10. Contact Information</h2>
                        <p>For support, legal inquiries, or refund requests:</p>
                        <p>
                            📧 <a href="mailto:support@pockret.com" className="text-primary hover:underline">support@pockret.com</a><br />
                            📍 Virtual World LLC, 1209 Mountain Road Place Northeast STE R, Albuquerque, NM 87110, USA
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">11. Governing Law</h2>
                        <p>
                            These legal notices and all interactions with Pockret are governed by the laws of the State of New Mexico, United States.
                            Any dispute shall be resolved in the competent courts of New Mexico.
                        </p>
                    </section>

                    <p className="pt-8 text-center font-medium">Thank you for using Pockret.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
