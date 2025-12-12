'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { sfProDisplay, ppAgrandirHeading } from '@/app/fonts'

const FooterGradient = dynamic(() => import('./footer-gradient'), { ssr: false })

export function Footer() {
    return (
        <footer className={`${sfProDisplay.className} relative w-full bg-background py-12 mt-auto overflow-hidden`}>

            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <FooterGradient />
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
                        <p className={`${ppAgrandirHeading.className} text-black text-xl`}>Pockret</p>
                        <p className="text-black/50 text-sm leading-relaxed">
                            Recover the money companies owe you.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="flex flex-col gap-2">
                        <p className={`${ppAgrandirHeading.className} text-black text-sm mb-1`}>Product</p>
                        <Link href="/product" className="text-black/60 hover:text-black transition-colors text-sm">
                            Overview
                        </Link>
                        <Link href="/how-it-works" className="text-black/60 hover:text-black transition-colors text-sm">
                            How It Works
                        </Link>
                        <Link href="/dashboard" className="text-black/60 hover:text-black transition-colors text-sm">
                            Dashboard
                        </Link>
                        <Link href="/earn" className="text-black/60 hover:text-black transition-colors text-sm font-medium">
                            Earn Extra Money
                        </Link>
                        <Link href="/refund" className="text-black/60 hover:text-black transition-colors text-sm">
                            Refund Policy
                        </Link>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-2">
                        <p className={`${ppAgrandirHeading.className} text-black text-sm mb-1`}>Resources</p>
                        <Link href="/learn" className="text-black/60 hover:text-black transition-colors text-sm">
                            Education Hub
                        </Link>
                        <Link href="/learn/us-consumer-laws-2025" className="text-black/60 hover:text-black transition-colors text-sm">
                            U.S. Consumer Laws
                        </Link>
                        <Link href="/learn/one-click-recovery" className="text-black/60 hover:text-black transition-colors text-sm">
                            One-Click Recovery
                        </Link>
                        <Link href="/learn/subscription-trap" className="text-black/60 hover:text-black transition-colors text-sm">
                            Subscription Trap
                        </Link>
                        <Link href="/learn/is-it-safe" className="text-black/60 hover:text-black transition-colors text-sm">
                            Is It Safe?
                        </Link>
                        <Link href="/learn/diy-vs-pockret" className="text-black/60 hover:text-black transition-colors text-sm">
                            DIY vs Automation
                        </Link>
                        <Link href="/learn/what-if-no-results" className="text-black/60 hover:text-black transition-colors text-sm">
                            No Results?
                        </Link>
                        <Link href="/consumer-rights" className="text-black/60 hover:text-black transition-colors text-sm">
                            Consumer Rights
                        </Link>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-2">
                        <p className={`${ppAgrandirHeading.className} text-black text-sm mb-1`}>Legal</p>
                        <Link href="/privacy" className="text-black/60 hover:text-black transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-black/60 hover:text-black transition-colors text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/disclaimer" className="text-black/60 hover:text-black transition-colors text-sm">
                            Disclaimer
                        </Link>
                        <Link href="/legal" className="text-black/60 hover:text-black transition-colors text-sm">
                            Legal Notice
                        </Link>
                        <Link href="/preferences" className="text-black/60 hover:text-black transition-colors text-sm">
                            Cookie Preferences
                        </Link>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                        <p className={`${ppAgrandirHeading.className} text-black text-sm mb-1`}>Company</p>
                        <Link href="/why" className="text-black/60 hover:text-black transition-colors text-sm">
                            Our Mission
                        </Link>
                        <Link href="/careers" className="text-black/60 hover:text-black transition-colors text-sm">
                            Careers
                        </Link>
                        <Link href="/security" className="text-black/60 hover:text-black transition-colors text-sm">
                            Security
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className="text-black/40 text-sm">
                            © {new Date().getFullYear()} Pockret. All rights reserved.
                        </p>
                        <span className="hidden md:inline text-black/10">|</span>
                        <p className="text-black/40 text-sm flex items-center gap-1.5">
                            Bank connections are securely powered by
                            <a href="https://plaid.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center translate-y-[2px] hover:opacity-70 transition-opacity">
                                <Image src="/Plaid.svg" alt="Plaid" width={110} height={48} className="h-12 w-auto" />
                            </a>
                        </p>
                    </div>
                    <p className="text-black/40 text-sm">
                        A product of Virtual World LLC.
                    </p>
                </div>
            </div>
        </footer>
    )
}
