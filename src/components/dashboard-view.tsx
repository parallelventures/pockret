'use client'

import { useState, useTransition } from 'react'
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts'
import { Plus, Trash2, Calendar, Mail, ChevronRight } from 'lucide-react'
import { AddSubscriptionModal } from './add-subscription-modal'
import { Database } from '@/types'
import { deleteSubscription } from '@/app/actions/subscriptions'
import Link from 'next/link'

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

    const activeCount = subscriptions.filter(s => s.status === 'active').length

    const handleDelete = (id: string) => {
        if (confirm('Remove this subscription?')) {
            startTransition(async () => {
                await deleteSubscription(id)
            })
        }
    }

    return (
        <div className={`${sfProDisplay.className} flex-1 bg-[#F9FAFB]`}>
            <main className="max-w-5xl mx-auto w-full px-6 py-12">
                {/* Welcome */}
                <div className="mb-12">
                    <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black mb-2`}>
                        Hi, {userName}
                    </h1>
                    <p className="text-black/50">
                        Here's what you're spending on subscriptions.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                    <div className="bg-white rounded-2xl p-6 border border-black/5">
                        <p className="text-black/40 text-sm mb-1">Monthly spend</p>
                        <p className={`${ppAgrandirHeading.className} text-3xl font-bold text-black`}>
                            ${totalMonthly.toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-black/5">
                        <p className="text-black/40 text-sm mb-1">Active</p>
                        <p className={`${ppAgrandirHeading.className} text-3xl font-bold text-black`}>
                            {activeCount}
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                    <button
                        disabled
                        className="bg-white rounded-2xl p-6 border border-black/5 text-left opacity-60 cursor-not-allowed"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                                <Mail className="w-5 h-5 text-black/40" />
                            </div>
                            <span className="text-xs text-black/30 font-medium">Coming soon</span>
                        </div>
                        <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-1`}>
                            Connect Gmail
                        </h3>
                        <p className="text-black/50 text-sm">
                            Auto-detect subscriptions from receipts
                        </p>
                    </button>

                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-white rounded-2xl p-6 border border-black/5 text-left hover:border-black/20 transition-colors group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                <Plus className="w-5 h-5 text-white" />
                            </div>
                            <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-black/40 transition-colors" />
                        </div>
                        <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-1`}>
                            Add subscription
                        </h3>
                        <p className="text-black/50 text-sm">
                            Track a subscription manually
                        </p>
                    </button>
                </div>

                {/* Subscriptions */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black`}>
                            Subscriptions
                        </h2>
                    </div>

                    {subscriptions.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-dashed border-black/10 p-12 text-center">
                            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Plus className="w-6 h-6 text-black/30" />
                            </div>
                            <h3 className={`${ppAgrandirHeading.className} text-lg font-bold text-black mb-2`}>
                                No subscriptions yet
                            </h3>
                            <p className="text-black/50 mb-6">
                                Add your first subscription to start tracking.
                            </p>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className={`${ppAgrandirHeading.className} px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-black/90 transition-colors`}
                            >
                                Add Subscription
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {subscriptions.map((sub) => (
                                <div
                                    key={sub.id}
                                    className="bg-white rounded-2xl p-4 border border-black/5 flex items-center justify-between group hover:border-black/10 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                                            <span className="text-sm font-bold text-black/60 uppercase">
                                                {sub.name.substring(0, 2)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-black">{sub.name}</p>
                                            <div className="flex items-center gap-2 text-xs text-black/40">
                                                <Calendar className="w-3 h-3" />
                                                <span className="capitalize">{sub.billing_cycle}</span>
                                                {sub.next_renewal_date && (
                                                    <>
                                                        <span>·</span>
                                                        <span>Renews {new Date(sub.next_renewal_date).toLocaleDateString()}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <p className="font-bold text-black">
                                                {sub.currency === 'EUR' ? '€' : sub.currency === 'GBP' ? '£' : '$'}
                                                {sub.amount.toFixed(2)}
                                            </p>
                                            <span className={`text-xs ${sub.status === 'active' ? 'text-green-600' : 'text-red-500'}`}>
                                                {sub.status}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(sub.id)}
                                            disabled={isDeleting}
                                            className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all text-black/20"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Referral */}
                <div className="mt-12 bg-black rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-white mb-1`}>
                                Invite friends, earn money
                            </h3>
                            <p className="text-white/60 text-sm">
                                Earn 10% of what they recover for 3 months.
                            </p>
                        </div>
                        <Link href="/earn">
                            <button className={`${ppAgrandirHeading.className} px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-colors`}>
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <AddSubscriptionModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />
        </div>
    )
}
