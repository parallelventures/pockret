'use client'

import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export function SignOutButton() {
    const supabase = createClient()
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
        router.push('/')
    }

    return (
        <button
            onClick={handleSignOut}
            className="text-black/60 hover:text-black text-sm transition-colors"
        >
            Sign out
        </button>
    )
}
