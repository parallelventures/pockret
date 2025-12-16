'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { SITE_URL } from '@/lib/env'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { ppAgrandirHeading, sfProDisplay } from '../fonts'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage(null)

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${SITE_URL}/auth/callback`,
            },
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage('Check your email for the login link!')
        }
        setLoading(false)
    }

    const handleOAuthLogin = async (provider: 'google' | 'apple') => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${SITE_URL}/auth/callback`,
            },
        })
        if (error) setMessage(error.message)
    }

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black mb-3`}>
                            Welcome back
                        </h1>
                        <p className="text-black/50 text-sm">
                            Sign in to manage your subscriptions
                        </p>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="space-y-3 mb-8">
                        <button
                            onClick={() => handleOAuthLogin('google')}
                            className="w-full h-12 bg-white border border-black/10 rounded-full flex items-center justify-center gap-3 text-sm font-medium text-black hover:bg-black/[0.02] hover:border-black/20 transition-all cursor-pointer"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>
                        <button
                            onClick={() => handleOAuthLogin('apple')}
                            className="w-full h-12 bg-black rounded-full flex items-center justify-center gap-3 text-sm font-medium text-white hover:bg-black/90 transition-all cursor-pointer"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-black/10" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-[#F9FAFB] px-4 text-xs text-black/30 uppercase tracking-wide">or</span>
                        </div>
                    </div>

                    {/* Email Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full h-12 px-4 bg-white border border-black/10 rounded-full text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-0 transition-all"
                            />
                        </div>

                        {message && (
                            <div className={`p-4 rounded-2xl text-sm ${message.includes('Check') ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`${ppAgrandirHeading.className} w-full h-12 bg-black text-white rounded-full font-bold text-sm hover:bg-black/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {loading ? 'Sending...' : 'Send Magic Link'}
                        </button>
                    </form>

                    {/* Don't have account */}
                    <p className="text-center text-sm text-black/40 mt-8">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-black font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>

                    {/* Footer */}
                    <p className="text-center text-xs text-black/30 mt-6 leading-relaxed">
                        By continuing, you agree to our{' '}
                        <Link href="/terms" className="text-black/50 hover:text-black transition-colors">
                            Terms
                        </Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="text-black/50 hover:text-black transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
