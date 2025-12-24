'use server'

import { getUserAccessStatus } from '@/lib/stripe-queries'
import { createClient } from '@/lib/supabase-server'

export interface SubscriptionInfo {
    hasAccess: boolean
    hasActiveSubscription: boolean
    hasLifetimeAccess: boolean
    plan: 'Free' | 'Prime' | 'Infinite'
}

/**
 * Server action to get user's subscription status
 * Uses the synced Stripe data from PostgreSQL
 */
export async function getSubscriptionInfo(): Promise<SubscriptionInfo> {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return {
            hasAccess: false,
            hasActiveSubscription: false,
            hasLifetimeAccess: false,
            plan: 'Free',
        }
    }

    const accessStatus = await getUserAccessStatus(user.id)

    // Determine plan name
    let plan: 'Free' | 'Prime' | 'Infinite' = 'Free'
    if (accessStatus.hasLifetimeAccess) {
        plan = 'Infinite'
    } else if (accessStatus.hasActiveSubscription) {
        plan = 'Prime'
    }

    return {
        hasAccess: accessStatus.hasAccess,
        hasActiveSubscription: accessStatus.hasActiveSubscription,
        hasLifetimeAccess: accessStatus.hasLifetimeAccess,
        plan,
    }
}
