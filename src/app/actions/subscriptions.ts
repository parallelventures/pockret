'use server'

import { createClient } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'
import { Database } from '@/types'

type TrackedSubscription = Database['public']['Tables']['tracked_subscriptions']['Row']
type TrackedSubscriptionInsert = Database['public']['Tables']['tracked_subscriptions']['Insert']

export async function getSubscriptions() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return []
    }

    const { data, error } = await supabase
        .from('tracked_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .order('amount', { ascending: false })

    if (error) {
        console.error('Error fetching subscriptions:', error)
        return []
    }

    return data as TrackedSubscription[]
}

export async function addSubscription(data: Omit<TrackedSubscriptionInsert, 'user_id'>) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    const { error } = await supabase
        .from('tracked_subscriptions')
        .insert({
            ...data,
            user_id: user.id
        })

    if (error) {
        console.error('Error adding subscription:', error)
        throw new Error('Failed to add subscription')
    }

    revalidatePath('/dashboard')
    return { success: true }
}

export async function deleteSubscription(id: string) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    const { error } = await supabase
        .from('tracked_subscriptions')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)

    if (error) {
        throw new Error('Failed to delete subscription')
    }

    revalidatePath('/dashboard')
    return { success: true }
}
