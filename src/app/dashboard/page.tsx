import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { DashboardView } from '@/components/dashboard-view'
import { getSubscriptions } from '@/app/actions/subscriptions'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const subscriptions = await getSubscriptions()
    const userName = user.user_metadata?.full_name?.split(' ')[0] || 'User'

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Navbar />
            <DashboardView userName={userName} subscriptions={subscriptions} />
        </div>
    )
}

