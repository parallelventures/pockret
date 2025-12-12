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
                        <Link href="/when-not-to-cancel" className="text-black/60 hover:text-black transition-colors text-sm">
                            When Not to Cancel
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
                        <Link href="/disclaimer-transparency" className="text-black/60 hover:text-black transition-colors text-sm">
                            Transparency
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
                        <Link href="/reviews" className="text-black/60 hover:text-black transition-colors text-sm">
                            Reviews
                        </Link>
                        <Link href="/careers" className="text-black/60 hover:text-black transition-colors text-sm">
                            Careers
                        </Link>
                        <Link href="/security" className="text-black/60 hover:text-black transition-colors text-sm">
                            Security
                        </Link>
                        <Link href="/help" className="text-black/60 hover:text-black transition-colors text-sm">
                            Help Center
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
                    <div className="flex items-center gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com/pockret" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com/@pockret" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                                </svg>
                            </a>
                            <a href="https://x.com/pockret" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-black/40 text-sm">
                            A product of Virtual World LLC.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
