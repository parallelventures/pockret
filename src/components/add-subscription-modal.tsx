'use client'

import { useState, useTransition } from 'react'
import { Modal } from '@/components/ui/modal'
import { addSubscription } from '@/app/actions/subscriptions'
import { Loader2 } from 'lucide-react'
import { ppAgrandirHeading } from '@/app/fonts'

interface AddSubscriptionModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AddSubscriptionModal({ isOpen, onClose }: AddSubscriptionModalProps) {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState('')

    async function handleSubmit(formData: FormData) {
        setError('')
        const name = formData.get('name') as string
        const amount = parseFloat(formData.get('amount') as string)
        const currency = formData.get('currency') as string
        const billingCycle = formData.get('billing_cycle') as 'monthly' | 'yearly'
        const nextRenewalDate = formData.get('next_renewal_date') as string

        if (!name || !amount || !nextRenewalDate) {
            setError('Please fill in all fields.')
            return
        }

        startTransition(async () => {
            try {
                await addSubscription({
                    name,
                    amount,
                    currency,
                    billing_cycle: billingCycle,
                    next_renewal_date: nextRenewalDate || null,
                    source: 'manual',
                    status: 'active'
                })
                onClose()
            } catch (e) {
                setError('Failed to add. Please try again.')
            }
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add subscription">
            <form action={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm text-black/60 mb-2">Name</label>
                    <input
                        name="name"
                        placeholder="Netflix, Spotify, etc."
                        required
                        className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 transition-colors"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-black/60 mb-2">Amount</label>
                        <input
                            name="amount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            required
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-black/60 mb-2">Currency</label>
                        <select
                            name="currency"
                            defaultValue="USD"
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black focus:outline-none focus:border-black/30 transition-colors appearance-none"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-black/60 mb-2">Billing cycle</label>
                        <select
                            name="billing_cycle"
                            defaultValue="monthly"
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black focus:outline-none focus:border-black/30 transition-colors appearance-none"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-black/60 mb-2">Next renewal</label>
                        <input
                            name="next_renewal_date"
                            type="date"
                            required
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black focus:outline-none focus:border-black/30 transition-colors"
                        />
                    </div>
                </div>

                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}

                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isPending}
                        className="flex-1 px-6 py-3 rounded-xl border border-black/10 text-black/60 hover:border-black/20 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className={`${ppAgrandirHeading.className} flex-1 px-6 py-3 rounded-xl bg-black text-white font-bold hover:bg-black/90 transition-colors flex items-center justify-center`}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Adding...
                            </>
                        ) : (
                            'Add'
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    )
}
