'use client'

import { useState, useTransition } from 'react'
import { ppAgrandirHeading } from '@/app/fonts'
import { Plus, RefreshCw, Trash2, Calendar, CreditCard, Search, Mail } from 'lucide-react'
import { AddSubscriptionModal } from './add-subscription-modal'
import { ReferralCard } from './referral-card'
import { Button } from './ui/button'
import { Database } from '@/types'
import { deleteSubscription } from '@/app/actions/subscriptions'

type TrackedSubscription = Database['public']['Tables']['tracked_subscriptions']['Row']

interface DashboardViewProps {
    userName: string
    subscriptions: TrackedSubscription[]
}

export function DashboardView({ userName, subscriptions }: DashboardViewProps) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isDeleting, startTransition] = useTransition()

    const totalMonthly = subscriptions.reduce((acc, sub) => {
        if (sub.status !== 'active') return acc
        let amount = sub.amount
        if (sub.billing_cycle === 'yearly') amount = amount / 12
        if (sub.billing_cycle === 'weekly') amount = amount * 4
        if (sub.billing_cycle === 'daily') amount = amount * 30
        return acc + amount
    }, 0)

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to remove this subscription?')) {
            startTransition(async () => {
                await deleteSubscription(id)
            })
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans">
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
                    <Button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-[#16A34A] hover:bg-[#15803d] text-white rounded-xl"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Manually
                    </Button>
                </div>

                {/* Section 1: Monthly Spend Hero */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-12">
                            <p className="text-[#6B7280] font-medium uppercase tracking-wider text-sm">Monthly Spend</p>
                            <div className={`${ppAgrandirHeading.className} text-6xl font-bold text-[#111827] tracking-tight`}>
                                ${totalMonthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left md:pl-4">
                            <div>
                                <p className="text-[#6B7280] font-medium uppercase tracking-wider text-sm mb-1">Active Subscriptions</p>
                                <div className={`${ppAgrandirHeading.className} text-4xl font-bold text-[#111827]`}>
                                    {subscriptions.length}
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[#6B7280] bg-gray-50 w-fit mx-auto md:mx-0 px-3 py-1.5 rounded-lg">
                                <RefreshCw className="w-3 h-3" />
                                <span>Updated just now</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Quick Actions (Connect Email) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-blue-100 text-blue-700 text-xs font-bold rounded-bl-xl">
                            COMING SOON
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-[#111827]`}>Connect Gmail</h3>
                            <p className="text-sm text-[#6B7280] mt-1">
                                Auto-detect subscriptions from receipts
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-40"
                    >
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 bg-[#E6FAF1] rounded-xl flex items-center justify-center text-[#16A34A] group-hover:scale-110 transition-transform">
                                <Plus className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-[#111827]`}>Add Manually</h3>
                            <p className="text-sm text-[#6B7280] mt-1">
                                Track cash or hidden recurring payments
                            </p>
                        </div>
                    </button>
                </div>

                {/* Subscription List */}
                <div className="space-y-4">
                    <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-[#111827]`}>Your Subscriptions</h3>

                    {subscriptions.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 border-dashed">
                            <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">No subscriptions found</h3>
                            <p className="text-gray-500 mb-6">Add one manually or connect your email to start tracking.</p>
                            <Button onClick={() => setIsAddModalOpen(true)}>Add First Subscription</Button>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            {subscriptions.map((sub) => (
                                <div key={sub.id} className="p-6 border-b border-gray-100 last:border-0 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-lg uppercase">
                                            {sub.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#111827] text-lg">{sub.name}</p>
                                            <div className="flex items-center gap-3 text-xs text-[#6B7280] mt-1">
                                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-md">
                                                    <Calendar className="w-3 h-3" />
                                                    {sub.billing_cycle}
                                                </span>
                                                {sub.next_renewal_date && (
                                                    <span>Renews {new Date(sub.next_renewal_date).toLocaleDateString()}</span>
                                                )}
                                                <span className="capitalize">{sub.source}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="font-bold text-[#111827] text-lg">
                                                {sub.currency === 'EUR' ? '€' : sub.currency === 'GBP' ? '£' : '$'}
                                                {sub.amount.toFixed(2)}
                                            </p>
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize inline-block mt-1 ${sub.status === 'active' ? 'bg-[#E6FAF1] text-[#16A34A]' : 'bg-red-50 text-red-600'
                                                }`}>
                                                {sub.status}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(sub.id)}
                                            disabled={isDeleting}
                                            className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all text-gray-300"
                                            title="Delete subscription"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <ReferralCard />
            </main>

            <AddSubscriptionModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />
        </div>
    )
}
