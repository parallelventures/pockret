import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Database } from '@/types'
import { ppAgrandirHeading } from '@/app/fonts'
import { ReferralCard } from '@/components/referral-card'
import { Search, Clock, ShieldCheck, Lock, RefreshCw, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Claim = Database['public']['Tables']['claims']['Row']

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    // Fetch user claims
    const { data: claims } = await supabase
        .from('claims')
        .select('*')
        .eq('user_id', user.id)
        .returns<Claim[]>()

    const totalPotential = claims?.reduce((acc, claim) => acc + (claim.amount || 0), 0) || 0
    const hasClaims = claims && claims.length > 0
    const userName = user.user_metadata?.full_name?.split(' ')[0] || 'Imran'

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans">
            <Navbar />

            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-[#E6FAF1] rounded-full flex items-center justify-center text-[#16A34A]">
                            <span className={`${ppAgrandirHeading.className} font-bold text-xl`}>P</span>
                        </div>
                        <h1 className={`${ppAgrandirHeading.className} text-2xl font-bold`}>
                            Hi {userName} 👋
                        </h1>
                    </div>
                </div>

                {/* Section 1: Summary Hero */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-12">
                            <p className="text-[#6B7280] font-medium uppercase tracking-wider text-sm">Potential Found</p>
                            <div className={`${ppAgrandirHeading.className} text-6xl font-bold text-[#111827] tracking-tight`}>
                                ${totalPotential.toLocaleString()}
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left md:pl-4">
                            <div>
                                <p className="text-[#6B7280] font-medium uppercase tracking-wider text-sm mb-1">Databases Scanned</p>
                                <div className={`${ppAgrandirHeading.className} text-4xl font-bold text-[#111827]`}>
                                    1,240
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[#6B7280] bg-gray-50 w-fit mx-auto md:mx-0 px-3 py-1.5 rounded-lg">
                                <RefreshCw className="w-3 h-3" />
                                <span>Last updated: Just now</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-50 text-center text-sm text-[#6B7280]">
                        Scanned 1,240 verified databases. <span className="text-[#16A34A] font-bold">3 new matches detected.</span>
                    </div>
                </div>

                {/* Section 2: Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 bg-[#E6FAF1] rounded-xl flex items-center justify-center text-[#16A34A] group-hover:scale-110 transition-transform">
                                <Search className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#16A34A] transition-colors" />
                        </div>
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-[#111827]`}>Run New Scan</h3>
                            <p className="text-sm text-[#6B7280] flex items-center gap-1 mt-1">
                                <Lock className="w-3 h-3" /> Secure & encrypted in &lt;30s
                            </p>
                        </div>
                    </button>

                    <button className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center text-[#111827] group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#111827] transition-colors" />
                        </div>
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-[#111827]`}>View History</h3>
                            <p className="text-sm text-[#6B7280] mt-1">
                                Track your previous refunds
                            </p>
                        </div>
                    </button>
                </div>

                {/* Section 3: Trust */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-3 text-sm text-[#6B7280] shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#1EC1F3]" />
                    <span>All scans verified by official refund databases.</span>
                </div>

                {/* Section 4: Referral */}
                <ReferralCard />

                {/* Section 5: Empty State (Conditional) */}
                {!hasClaims && (
                    <div className="text-center py-8">
                        <p className="text-[#6B7280] mb-4">
                            💸 No refunds found yet. But don’t stop here — <span className="text-[#111827] font-medium">1 in 3 users</span> finds money on their next scan.
                        </p>
                        <Button className="bg-[#16A34A] hover:bg-[#15803d] text-white font-bold rounded-full px-8 py-6 shadow-lg shadow-green-500/20">
                            Try Again
                        </Button>
                    </div>
                )}

                {/* Claims List (if exists) */}
                {hasClaims && (
                    <div className="space-y-4">
                        <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-[#111827]`}>Recent Findings</h3>
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            {claims.map((claim) => (
                                <div key={claim.id} className="p-6 border-b border-gray-100 last:border-0 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">📄</div>
                                        <div>
                                            <p className="font-bold text-[#111827]">{claim.country} Claim</p>
                                            <p className="text-sm text-[#6B7280]">{new Date(claim.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[#111827]">${claim.amount.toLocaleString()}</p>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${claim.status === 'approved' ? 'bg-[#E6FAF1] text-[#16A34A]' :
                                            claim.status === 'rejected' ? 'bg-red-50 text-red-600' :
                                                'bg-yellow-50 text-yellow-600'
                                            }`}>{claim.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
