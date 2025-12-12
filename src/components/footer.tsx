'use client'

import Link from 'next/link'
import { sfProDisplay, ppAgrandirHeading } from '@/app/fonts'
import FooterGradient from './footer-gradient'

export function Footer() {
    return (
        <footer className={`${sfProDisplay.className} relative w-full bg-background py-20 mt-auto overflow-hidden min-h-[400px] flex items-center`}>

            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <FooterGradient />
            </div>
            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-base">
                    {/* Company Info */}
                    <div className="flex flex-col gap-4">
                        <p className={`${ppAgrandirHeading.className} text-black text-2xl`}>Pockret</p>
                        <p className="text-black/70 text-base">© {new Date().getFullYear()} All rights reserved.</p>
                        <p className="text-black/60 text-base">A product of Virtual World LLC.</p>
                        <Link href="/careers" className="text-black/70 hover:text-black transition-colors text-base">
                            Careers
                        </Link>
                        <Link href="/why" className="text-black/70 hover:text-black transition-colors text-base">
                            Our Mission
                        </Link>
                    </div>

                    {/* Product Links */}
                    <div className="flex flex-col gap-4">
                        <p className={`${ppAgrandirHeading.className} text-black text-lg mb-2`}>Product</p>
                        <Link href="/product" className="text-black/70 hover:text-black transition-colors text-base">
                            Overview
                        </Link>
                        <Link href="/how-it-works" className="text-black/70 hover:text-black transition-colors text-base">
                            How It Works
                        </Link>
                        <Link href="/learn" className="text-black/70 hover:text-black transition-colors text-base">
                            Education Hub
                        </Link>
                        <Link href="/dashboard" className="text-black/70 hover:text-black transition-colors text-base">
                            Dashboard
                        </Link>
                        {/* HIDDEN: Part of strategy to make users believe it's free
                        <Link href="/pricing" className="text-black/70 hover:text-black transition-colors text-base">
                            Pricing
                        </Link>
                        */}
                        <Link href="/refund" className="text-black/70 hover:text-black transition-colors text-base">
                            Refund Policy
                        </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col gap-4">
                        <p className={`${ppAgrandirHeading.className} text-black text-lg mb-2`}>Legal</p>
                        <Link href="/consumer-rights" className="text-black/70 hover:text-black transition-colors text-base">
                            Consumer Rights
                        </Link>
                        <Link href="/privacy" className="text-black/70 hover:text-black transition-colors text-base">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-black/70 hover:text-black transition-colors text-base">
                            Terms of Service
                        </Link>
                        <Link href="/disclaimer" className="text-black/70 hover:text-black transition-colors text-base">
                            Disclaimer
                        </Link>
                        <Link href="/legal" className="text-black/70 hover:text-black transition-colors text-base">
                            Legal Notice
                        </Link>
                    </div>

                    {/* Privacy & Preferences */}
                    <div className="flex flex-col gap-4">
                        <p className={`${ppAgrandirHeading.className} text-black text-lg mb-2`}>Privacy</p>
                        <Link href="/preferences" className="text-black/70 hover:text-black transition-colors text-base">
                            Cookie Preferences
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
