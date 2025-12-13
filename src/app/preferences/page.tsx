import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading } from "../fonts";

export default function PreferencesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className={`${ppAgrandirHeading.className} text-4xl font-bold mb-2`}>Cookie Policy – Pockret</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                <div className="prose prose-gray max-w-none space-y-6 text-text-muted">
                    <p className="text-lg">
                        This Cookie Policy explains how Pockret uses cookies and similar technologies.
                    </p>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>1. What Are Cookies?</h2>
                        <p>
                            Cookies are small files stored on your device to improve functionality, performance, and analytics.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>2. Types of Cookies We Use</h2>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-6 mb-2`}>A. Essential Cookies</h3>
                        <p>
                            Required for basic functionality (login, session, security).<br />
                            <strong>Cannot be disabled.</strong>
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-6 mb-2`}>B. Analytics Cookies</h3>
                        <p>
                            Used to understand usage patterns and improve the experience.<br />
                            Examples: page interactions, conversion events.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-6 mb-2`}>C. Performance Cookies</h3>
                        <p>
                            Help us optimize load speed and reliability.
                        </p>

                        <h3 className={`${ppAgrandirHeading.className} text-xl font-medium text-foreground mt-6 mb-2`}>D. Preference Cookies</h3>
                        <p>
                            Store user settings, such as region or language.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
                            <p className="font-medium text-foreground">We do NOT use cookies for:</p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>Advertising</li>
                                <li>Behavioral tracking</li>
                                <li>Selling data</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>3. Cookie Preferences</h2>
                        <p>You may:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Accept all cookies</li>
                            <li>Disable non-essential cookies</li>
                            <li>Delete cookies through your browser settings</li>
                        </ul>
                        <p className="mt-3 font-medium">
                            Essential cookies are required for Pockret to function.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>4. Third-Party Cookies</h2>
                        <p>
                            Some third-party tools may set cookies (Stripe checkout, analytics providers).<br />
                            These services have their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>5. Managing Your Preferences</h2>
                        <p>
                            You can manage cookie preferences through your browser settings:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                            <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                        </ul>
                        <p className="mt-3 text-sm italic">
                            Note: Disabling essential cookies may affect site functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl font-semibold text-foreground mb-3 mt-8`}>6. Contact</h2>
                        <p>
                            For questions about cookies:<br />
                            📧 <a href="mailto:help@pockret.com" className="text-primary hover:underline">help@pockret.com</a>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
