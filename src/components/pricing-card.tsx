'use client'

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts"

export function PricingCard() {
    return (
        <div className={`${sfProDisplay.className} w-full max-w-xl mx-auto`}>
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="px-8 py-8 text-center border-b border-gray-100">
                    <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide">
                        LIMITED TIME — 80% OFF
                    </div>
                    <div className="flex items-baseline justify-center gap-3 mb-2">
                        <span className="text-2xl text-gray-400 line-through font-medium">$199</span>
                        <span className={`${ppAgrandirHeading.className} text-6xl font-bold text-gray-900`}>$39</span>
                        <span className="text-2xl text-gray-500 font-medium">.99</span>
                    </div>
                    <p className="text-gray-600">One-time payment • Lifetime access</p>
                </div>

                {/* Features - Compact */}
                <div className="px-8 py-6 space-y-3">
                    <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={3} />
                        <span className="text-gray-900">Unlimited refund scans & claims</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={3} />
                        <span className="text-gray-900">Auto-generated templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={3} />
                        <span className="text-gray-900">Smart AI detection</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={3} />
                        <span className="text-gray-900">14-day money-back guarantee</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-8 py-8 bg-gray-50 space-y-4">
                    {/* Social Proof - Compact */}
                    <div className="flex items-center justify-center gap-3 text-sm">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-600">
                            <strong className="text-gray-900">4.8/5</strong> • 10k+ users
                        </span>
                    </div>

                    {/* CTA Button */}
                    <Link href="/login" className="block w-full">
                        <Button className="w-full h-14 text-lg font-bold rounded-full bg-black hover:bg-gray-800 text-white transition-all">
                            Start My Scan Now
                        </Button>
                    </Link>

                    <p className="text-xs text-center text-gray-500">
                        Avg. user recovers <strong className="text-gray-900">$300-$1,200/year</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
