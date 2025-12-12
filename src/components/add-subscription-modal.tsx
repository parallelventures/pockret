'use client'

import { useState, useTransition } from 'react'
import { Modal } from '@/components/ui/modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { addSubscription } from '@/app/actions/subscriptions'
import { Loader2 } from 'lucide-react'

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
            setError('Please fill in all required fields.')
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
                setError('Failed to add subscription. Please try again.')
            }
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Subscription">
            <form action={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Name</label>
                    <Input
                        name="name"
                        placeholder="Netflix, Spotify, etc."
                        required
                        className="bg-gray-50 border-gray-200"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Amount</label>
                        <Input
                            name="amount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            required
                            className="bg-gray-50 border-gray-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Currency</label>
                        <select
                            name="currency"
                            className="flex h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            defaultValue="USD"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Billing Cycle</label>
                        <select
                            name="billing_cycle"
                            className="flex h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            defaultValue="monthly"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Next Renewal</label>
                        <Input
                            name="next_renewal_date"
                            type="date"
                            required
                            className="bg-gray-50 border-gray-200"
                        />
                    </div>
                </div>

                {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                <div className="pt-4 flex justify-end gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        disabled={isPending}
                        className="border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="bg-[#16A34A] hover:bg-[#15803d] text-white"
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Adding...
                            </>
                        ) : (
                            'Add Subscription'
                        )}
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
