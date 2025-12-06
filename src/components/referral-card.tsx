'use client'

import { Button } from "@/components/ui/button"
import { Copy, Gift } from "lucide-react"
import { useState } from "react"
import { ppAgrandirHeading } from "@/app/fonts"

export function ReferralCard() {
    const [copied, setCopied] = useState(false)
    const referralLink = "https://pockret.com/invite/user123" // Placeholder

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="bg-[#E6FAF1] rounded-2xl p-8 border border-[#16A34A]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-[#111827]`}>
                        Invite friends, get rewarded.
                    </h3>
                    <p className="text-[#6B7280] max-w-md">
                        Each time a friend finds money, you earn <span className="font-bold text-[#16A34A]">$5</span>.
                        Share your link and start earning.
                    </p>
                </div>

                <div className="w-full md:w-auto bg-white p-1.5 rounded-xl border border-gray-200 flex items-center gap-2 shadow-sm">
                    <div className="flex-1 px-4 text-sm font-mono text-gray-500 truncate max-w-[200px]">
                        {referralLink}
                    </div>
                    <Button
                        onClick={handleCopy}
                        size="sm"
                        variant="ghost"
                        className="bg-transparent hover:bg-gray-50 text-[#16A34A] font-bold rounded-lg transition-all"
                    >
                        {copied ? "Copied!" : <><Copy className="w-4 h-4 mr-2" /> Copy link</>}
                    </Button>
                </div>
            </div>
        </div>
    )
}
