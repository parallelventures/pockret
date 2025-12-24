import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { getUserAccessStatus } from '@/lib/stripe-queries'

export async function GET() {
    try {
        const supabase = await createClient()

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({
                hasAccess: false,
                hasActiveSubscription: false,
                hasLifetimeAccess: false,
                plan: 'free',
            })
        }

        const accessStatus = await getUserAccessStatus(user.id)

        // Determine plan name
        let plan: 'free' | 'prime' | 'infinite' = 'free'
        if (accessStatus.hasLifetimeAccess) {
            plan = 'infinite'
        } else if (accessStatus.hasActiveSubscription) {
            plan = 'prime'
        }

        return NextResponse.json({
            hasAccess: accessStatus.hasAccess,
            hasActiveSubscription: accessStatus.hasActiveSubscription,
            hasLifetimeAccess: accessStatus.hasLifetimeAccess,
            plan,
        })
    } catch (error) {
        console.error('Error fetching subscription:', error)
        return NextResponse.json({
            hasAccess: false,
            hasActiveSubscription: false,
            hasLifetimeAccess: false,
            plan: 'free',
        })
    }
}
