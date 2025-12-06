'use client'

import Link from 'next/link'
import { useUser } from '@/hooks/use-user'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

import { ppAgrandirHeading } from "@/app/fonts";

export function Navbar() {
    const { user, loading } = useUser()
    const supabase = createClient()
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className={`${ppAgrandirHeading.className} text-2xl font-extrabold text-primary tracking-tight`}>Pockret</span>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-sm font-bold text-text-muted uppercase tracking-wide cursor-pointer hover:text-foreground transition-colors">
                        <span>US</span>
                        <span className="text-border">/</span>
                        <span>EU</span>
                    </div>

                    {!loading && (
                        <>
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <Link href="/dashboard">
                                        <Button variant="ghost" className="font-bold text-text-muted hover:bg-accent/50 uppercase tracking-wide">Dashboard</Button>
                                    </Link>
                                    <Link href="/profile">
                                        <Button variant="ghost" className="font-bold text-text-muted hover:bg-accent/50 uppercase tracking-wide">
                                            Profile
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Link href="/login">
                                    <Button variant="ghost" className="font-bold text-text-muted hover:bg-accent/50 uppercase tracking-wide">
                                        I ALREADY HAVE AN ACCOUNT
                                    </Button>
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
