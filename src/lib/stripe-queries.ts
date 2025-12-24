/**
 * Helper functions to query Stripe data from the synced PostgreSQL tables
 * These functions query the 'stripe' schema created by the Stripe Sync Engine
 */

import { supabaseAdmin } from './supabase-admin'

/**
 * Get a Stripe customer by their Supabase user ID
 */
export async function getCustomerByUserId(userId: string) {
    // First get the stripe_customer_id from our users table
    const { data: userData } = await supabaseAdmin
        .from('users')
        .select('stripe_customer_id')
        .eq('id', userId)
        .single()

    if (!userData?.stripe_customer_id) return null

    // Then query the synced stripe.customers table
    const { data: customer, error } = await supabaseAdmin
        .schema('stripe')
        .from('customers')
        .select('*')
        .eq('id', userData.stripe_customer_id)
        .single()

    if (error) {
        console.error('Error fetching Stripe customer:', error)
        return null
    }

    return customer
}

/**
 * Get an active subscription for a Stripe customer
 */
export async function getActiveSubscription(customerId: string) {
    const { data, error } = await supabaseAdmin
        .schema('stripe')
        .from('subscriptions')
        .select('*')
        .eq('customer', customerId)
        .in('status', ['active', 'trialing'])
        .order('created', { ascending: false })
        .limit(1)
        .single()

    if (error && error.code !== 'PGRST116') {
        // PGRST116 = no rows returned, which is fine
        console.error('Error fetching subscription:', error)
    }

    return data
}

/**
 * Get all subscriptions for a Stripe customer
 */
export async function getSubscriptions(customerId: string) {
    const { data, error } = await supabaseAdmin
        .schema('stripe')
        .from('subscriptions')
        .select('*')
        .eq('customer', customerId)
        .order('created', { ascending: false })

    if (error) {
        console.error('Error fetching subscriptions:', error)
        return []
    }

    return data || []
}

/**
 * Get the subscription status for a user
 * Returns whether they have an active subscription and the subscription details
 */
export async function getUserSubscriptionStatus(userId: string) {
    const { data: user } = await supabaseAdmin
        .from('users')
        .select('stripe_customer_id')
        .eq('id', userId)
        .single()

    if (!user?.stripe_customer_id) {
        return {
            hasActiveSubscription: false,
            subscription: null,
            customerId: null,
        }
    }

    const subscription = await getActiveSubscription(user.stripe_customer_id)

    return {
        hasActiveSubscription: !!subscription,
        subscription,
        customerId: user.stripe_customer_id,
    }
}

/**
 * Get invoices for a Stripe customer
 */
export async function getInvoices(customerId: string, limit = 10) {
    const { data, error } = await supabaseAdmin
        .schema('stripe')
        .from('invoices')
        .select('*')
        .eq('customer', customerId)
        .order('created', { ascending: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching invoices:', error)
        return []
    }

    return data || []
}

/**
 * Get payment intents for a Stripe customer
 */
export async function getPaymentIntents(customerId: string, limit = 10) {
    const { data, error } = await supabaseAdmin
        .schema('stripe')
        .from('payment_intents')
        .select('*')
        .eq('customer', customerId)
        .order('created', { ascending: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching payment intents:', error)
        return []
    }

    return data || []
}

/**
 * Check if a user has lifetime access (one-time payment)
 * This checks for successful payment intents with lifetime metadata
 */
export async function hasLifetimeAccess(userId: string) {
    const { data: user } = await supabaseAdmin
        .from('users')
        .select('stripe_customer_id')
        .eq('id', userId)
        .single()

    if (!user?.stripe_customer_id) return false

    // Check for successful payment intent with lifetime plan
    const { data } = await supabaseAdmin
        .schema('stripe')
        .from('payment_intents')
        .select('id, metadata')
        .eq('customer', user.stripe_customer_id)
        .eq('status', 'succeeded')
        .limit(100)

    if (!data) return false

    // Check if any payment has lifetime metadata
    return data.some((pi: any) =>
        pi.metadata?.planType === 'lifetime' ||
        pi.metadata?.plan_type === 'lifetime'
    )
}

/**
 * Get complete access status for a user (subscription OR lifetime)
 */
export async function getUserAccessStatus(userId: string) {
    const subscriptionStatus = await getUserSubscriptionStatus(userId)
    const lifetime = await hasLifetimeAccess(userId)

    return {
        hasAccess: subscriptionStatus.hasActiveSubscription || lifetime,
        hasActiveSubscription: subscriptionStatus.hasActiveSubscription,
        hasLifetimeAccess: lifetime,
        subscription: subscriptionStatus.subscription,
        customerId: subscriptionStatus.customerId,
    }
}
