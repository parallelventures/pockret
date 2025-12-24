'use client'

import { useState, useEffect } from 'react'

interface SubscriptionStatus {
    hasAccess: boolean
    hasActiveSubscription: boolean
    hasLifetimeAccess: boolean
    plan: 'free' | 'prime' | 'infinite'
    isLoading: boolean
}

/**
 * Client-side hook to check user's subscription status
 * Fetches from API route that queries synced Stripe data
 */
export function useSubscription(): SubscriptionStatus {
    const [status, setStatus] = useState<SubscriptionStatus>({
        hasAccess: false,
        hasActiveSubscription: false,
        hasLifetimeAccess: false,
        plan: 'free',
        isLoading: true,
    })

    useEffect(() => {
        async function checkSubscription() {
            try {
                const response = await fetch('/api/subscription')
                const data = await response.json()

                setStatus({
                    hasAccess: data.hasAccess,
                    hasActiveSubscription: data.hasActiveSubscription,
                    hasLifetimeAccess: data.hasLifetimeAccess,
                    plan: data.plan,
                    isLoading: false,
                })
            } catch (error) {
                console.error('Error checking subscription:', error)
                setStatus(prev => ({ ...prev, isLoading: false }))
            }
        }

        checkSubscription()
    }, [])

    return status
}
