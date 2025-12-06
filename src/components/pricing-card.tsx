'use client'

import { Check, Star, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ppAgrandirHeading } from "@/app/fonts"

export function PricingCard() {
    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            {/* Left: Value Proposition (Blue) */}
            <div className="bg-[#3B82F6] p-8 md:p-12 text-white relative overflow-hidden md:w-2/5 flex flex-col justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-[#00A97F] text-white text-xs font-bold px-4 py-1 rounded-b-xl shadow-sm uppercase tracking-wider">
                    Limited Time Offer
                </div>
                <div className="space-y-6 mt-8 md:mt-0">
                    <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-extrabold leading-tight text-center md:text-left`}>
                        Recover up to $1,200 per year automatically.
                    </h2>
                    <p className="text-blue-50 text-sm md:text-base font-medium opacity-90 text-center md:text-left leading-relaxed">
                        Join 1M+ people who’ve claimed $300+ on average with Pockret.
                        <br className="hidden md:block" />
                        No hidden fees. No lawyers. Just your money.
                    </p>
                    <div className="flex flex-col gap-3 pt-4">
                        <div className="flex items-center gap-3 text-sm font-medium bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                            <div className="bg-[#00A97F] rounded-full p-1"><Check className="w-3 h-3 text-white" strokeWidth={3} /></div>
                            <span>Instant refund requests in one click — no forms, no calls.</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                            <div className="bg-[#00A97F] rounded-full p-1"><Check className="w-3 h-3 text-white" strokeWidth={3} /></div>
                            <span>Smart refund scanner — finds what banks & apps miss.</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                            <div className="bg-[#00A97F] rounded-full p-1"><Check className="w-3 h-3 text-white" strokeWidth={3} /></div>
                            <span>Lifetime updates included — pay once, save forever.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Pricing & CTA (White) */}
            <div className="p-8 md:p-12 space-y-8 md:w-3/5 flex flex-col justify-center bg-white">

                {/* Price Block */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-400 text-lg line-through font-medium">$199</span>
                        <span className="bg-blue-50 text-[#3B82F6] px-3 py-1 rounded-full text-sm font-bold">Save 80%</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-6xl font-extrabold text-[#111827] tracking-tight">$39.99</span>
                        <span className="text-gray-500 font-medium text-xl">/ lifetime</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">One-time payment. No subscriptions.</p>
                </div>

                {/* CTA Section */}
                <div className="space-y-6 max-w-sm mx-auto w-full">
                    <Link href="/login" className="block w-full">
                        <Button className="w-full h-16 text-lg font-bold uppercase tracking-wide rounded-full bg-[#00A97F] hover:bg-[#009e74] text-white transition-all transform hover:-translate-y-1 active:scale-95 border-0">
                            Start My Refund Scan
                        </Button>
                    </Link>

                    {/* Micro-trust */}
                    <div className="flex flex-col items-center gap-3 text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-1">
                            <div className="flex text-[#F59E0B]">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-gray-700">Rated 4.9/5 by 12,000+ users</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-80 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <Lock className="w-3 h-3" />
                            <span>Secure 256-bit SSL Encrypted Payment</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
