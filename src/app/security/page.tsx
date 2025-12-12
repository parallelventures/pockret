'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

export default function SecurityPage() {
    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero */}
                <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        How we protect your data.
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                        Bank-level security. Read-only access. Your data never leaves your control.
                    </p>
                </section>

                {/* Security Features */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <div className="space-y-0">

                        {/* Feature 1 */}
                        <div className="py-12 border-t border-black/10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                        Read-only access
                                    </h2>
                                    <p className="text-black/60 text-base leading-relaxed">
                                        We can only <em>see</em> your transactions to find refunds. We cannot move money, make transfers, or change any settings. Pockret is a viewing window, not a door.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="py-12 border-t border-black/10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center p-2">
                                    <Image src="/Plaid.svg" alt="Plaid" width={32} height={32} className="w-full h-auto invert" />
                                </div>
                                <div>
                                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                        Powered by Plaid
                                    </h2>
                                    <p className="text-black/60 text-base leading-relaxed">
                                        We partner with <a href="https://plaid.com/safety/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Plaid</a>, the industry leader trusted by Venmo, Chime, and 12,000+ financial institutions. We never see or store your bank credentials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="py-12 border-t border-black/10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 2C11.5523 2 12 2.44772 12 3V4.5C12 5.05228 11.5523 5.5 11 5.5C10.4477 5.5 10 5.05228 10 4.5V3C10 2.44772 10.4477 2 11 2Z" fill="black" />
                                        <path d="M17.3634 4.63582C17.7539 5.02634 17.7539 5.65951 17.3634 6.05003L16.3027 7.11069C15.9122 7.50122 15.279 7.50122 14.8885 7.11069C14.498 6.72017 14.498 6.087 14.8885 5.69648L15.9491 4.63582C16.3397 4.24529 16.9728 4.24529 17.3634 4.63582Z" fill="black" />
                                        <path d="M7.1114 16.303C7.50193 15.9124 7.50193 15.2793 7.1114 14.8887C6.72088 14.4982 6.08771 14.4982 5.69719 14.8887L4.63653 15.9494C4.24601 16.3399 4.24601 16.9731 4.63653 17.3636C5.02705 17.7541 5.66022 17.7541 6.05074 17.3636L7.1114 16.303Z" fill="black" />
                                        <path d="M5.5 11C5.5 11.5523 5.05228 12 4.5 12H3C2.44772 12 2 11.5523 2 11C2 10.4477 2.44772 10 3 10H4.5C5.05228 10 5.5 10.4477 5.5 11Z" fill="black" />
                                        <path d="M5.69704 7.1114C6.08756 7.50193 6.72073 7.50193 7.11125 7.1114C7.50178 6.72088 7.50178 6.08771 7.11125 5.69719L6.05059 4.63653C5.66007 4.24601 5.0269 4.24601 4.63638 4.63653C4.24585 5.02705 4.24585 5.66022 4.63638 6.05074L5.69704 7.1114Z" fill="black" />
                                        <path d="M11.7286 9.45834C10.3036 8.89428 8.8933 10.3046 9.45736 11.7296L13.2007 21.1865C13.6561 22.337 15.2302 22.4724 15.8754 21.4166L17.9768 17.9778L21.4156 15.8763C22.4714 15.2311 22.336 13.6571 21.1855 13.2017L11.7286 9.45834Z" fill="black" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                        256-bit encryption
                                    </h2>
                                    <p className="text-black/60 text-base leading-relaxed">
                                        Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). This is the same level of encryption used by banks and government agencies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="py-12 border-t border-black/10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                        We never sell your data
                                    </h2>
                                    <p className="text-black/60 text-base leading-relaxed">
                                        Our business model is simple: we help you recover money, and we take a small percentage when you do. We do not sell your transaction history to advertisers, data brokers, or third parties. Ever.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="py-12 border-t border-black/10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M10.6056 3.56142C9.36475 2.98888 8.05693 2.86598 6.83124 3.13927C4.90318 3.56917 3.26845 4.96089 2.48959 6.90295C0.885443 10.9029 2.98361 16.5927 11.5115 21.3725C11.8153 21.5428 12.1857 21.5428 12.4894 21.3725C21.0173 16.5927 23.1154 10.9028 21.5112 6.90294C20.7324 4.96087 19.0977 3.56916 17.1696 3.13926C15.8029 2.83454 14.3342 3.02239 12.9699 3.77687C11.8874 4.94224 11.1058 6.64664 11.0099 8.59567L14.1441 11.7299L12.9487 15.3162C12.774 15.8401 12.2077 16.1233 11.6838 15.9486C11.1598 15.774 10.8767 15.2077 11.0513 14.6837L11.8559 12.2701L9 9.41418V8.99996C9 6.98104 9.60494 5.08074 10.6056 3.56142Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                                        Delete anytime
                                    </h2>
                                    <p className="text-black/60 text-base leading-relaxed">
                                        You can disconnect your bank account with one click. If you delete your Pockret account, we permanently wipe your data from our servers. No questions asked.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plaid Badge */}
                <section className="py-16 px-6 border-t border-black/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-black/40 text-sm uppercase tracking-wider mb-2">Trusted Infrastructure</p>
                            <p className="text-black text-xl font-medium">Bank connections secured by Plaid</p>
                        </div>
                        <a href="https://plaid.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image src="/Plaid.svg" alt="Plaid" width={140} height={56} className="h-14 w-auto" />
                        </a>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-6`}>
                            Ready to find your money?
                        </h3>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/login" className="w-full max-w-sm">
                                <button className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 cursor-pointer`}>
                                    Find My Money
                                </button>
                            </Link>
                            <p className="text-sm text-black/40">
                                Free to scan • Bank-level security
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
