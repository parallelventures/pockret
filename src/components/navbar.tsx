'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useUser } from '@/hooks/use-user'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";

export function Navbar() {
    const { user, loading } = useUser()
    const supabase = createClient()
    const router = useRouter()

    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <header className={`sticky top-0 z-50 w-full bg-white/40 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className={`${ppAgrandirHeading.className} text-2xl font-extrabold text-black tracking-tight`}>Pockret</span>
                </Link>

                <div className="flex items-center gap-6 ml-auto">
                    <div className={`${sfProDisplay.className} hidden md:flex items-center gap-1.5 text-sm font-medium text-black/50 cursor-pointer hover:text-black/80 transition-opacity duration-200`}>
                        <span>US</span>
                        <span className="text-black/20">/</span>
                        <span>EU</span>
                    </div>

                    {!loading && (
                        <>
                            {user ? (
                                <div className="flex items-center gap-1">
                                    <Link href="/dashboard">
                                        <button className={`${sfProDisplay.className} px-4 py-2 text-sm font-medium text-black/60 hover:text-black transition-colors duration-200`}>
                                            Dashboard
                                        </button>
                                    </Link>
                                    <Link href="/profile">
                                        <button className={`${sfProDisplay.className} px-4 py-2 text-sm font-medium text-black/60 hover:text-black transition-colors duration-200`}>
                                            Profile
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <Link href="/login">
                                    <button className={`${sfProDisplay.className} px-4 py-2 text-sm font-medium text-black/60 hover:text-black transition-colors duration-200`}>
                                        Sign In
                                    </button>
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
