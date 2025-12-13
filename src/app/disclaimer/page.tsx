import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className={`${ppAgrandirHeading.className} text-4xl font-bold mb-2`}>Disclaimer – Pockret</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                <div className="prose prose-gray max-w-none space-y-6 text-text-muted">
                    <p className="text-lg">
                        The information provided by <strong>Pockret</strong> is for informational purposes only.
                    </p>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>What Pockret Is Not</h2>
                        <p>Pockret:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Is <strong>not</strong> a financial advisor</li>
                            <li>Is <strong>not</strong> a law firm</li>
                            <li>Does <strong>not</strong> provide legal, financial, investment, or tax advice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>Results May Vary</h2>
                        <p>
                            All refund results vary depending on individual cases and third-party company policies.
                        </p>
                        <p className="mt-3">
                            While Pockret may highlight potential refunds or subscriptions, the final outcome depends on:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>The company receiving your request</li>
                            <li>Your eligibility</li>
                            <li>The accuracy of third-party data</li>
                            <li>Their internal policies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>Limitation of Responsibility</h2>
                        <p>Virtual World LLC is <strong>not responsible</strong> for:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Denied refund requests</li>
                            <li>Financial losses</li>
                            <li>Incorrect or incomplete data from external providers</li>
                            <li>Decisions made based on Pockret's information</li>
                            <li>Third-party company policies or responses</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>User Acknowledgment</h2>
                        <p className="font-medium">
                            By using Pockret, you acknowledge these limitations and understand that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3">
                            <li>Pockret provides <strong>tools and information</strong>, not guarantees</li>
                            <li>You are responsible for your own financial decisions</li>
                            <li>Results depend on factors outside of Pockret's control</li>
                            <li>You should consult appropriate professionals for legal or financial advice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>Contact</h2>
                        <p>
                            For questions about this disclaimer:<br />
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
