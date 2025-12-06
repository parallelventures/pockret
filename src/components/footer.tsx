'use client'

import Link from 'next/link'
import GodRaysComponent from './god-rays'

export function Footer() {
    return (
        <footer className="relative w-full bg-background py-20 mt-auto overflow-hidden min-h-[400px] flex items-center">
            {/* God Rays Background Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
                <GodRaysComponent />
            </div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p>© {new Date().getFullYear()} Pockret. All rights reserved.</p>
                    <p className="text-xs opacity-70">Pockret is a product of Virtual World LLC.</p>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                        Disclaimer
                    </Link>
                    <Link href="/preferences" className="hover:text-foreground transition-colors">
                        Cookie Preferences
                    </Link>
                    <Link href="/legal" className="hover:text-foreground transition-colors">
                        Legal Notice
                    </Link>
                    <Link href="/refund" className="hover:text-foreground transition-colors">
                        Refund Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
