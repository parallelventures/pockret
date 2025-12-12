'use client'

import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ppAgrandirHeading } from '@/app/fonts'
import { Loader2 } from 'lucide-react'

interface ProfileFormProps {
    user: any
    userDetails: any
}

export function ProfileForm({ user, userDetails }: ProfileFormProps) {
    const supabase = createClient()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        fullName: user.user_metadata?.full_name || '',
        email: user.email || '',
        country: userDetails?.country || 'US'
    })

    const hasChanges =
        formData.fullName !== (user.user_metadata?.full_name || '') ||
        formData.country !== (userDetails?.country || 'US')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)

        try {
            const { error: authError } = await supabase.auth.updateUser({
                data: { full_name: formData.fullName }
            })
            if (authError) throw authError

            const { error: profileError } = await (supabase
                .from('users') as any)
                .update({ country: formData.country })
                .eq('id', user.id)

            if (profileError) throw profileError

            setSuccess(true)
            router.refresh()
            setTimeout(() => setSuccess(false), 3000)
        } catch (error) {
            console.error('Error updating profile:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
            <div className="p-6 space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                            {formData.fullName.charAt(0).toUpperCase() || 'U'}
                        </span>
                    </div>
                    <div>
                        <p className="font-medium text-black">{formData.fullName || 'User'}</p>
                        <p className="text-black/50 text-sm">{formData.email}</p>
                    </div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-black/60 mb-2">Full name</label>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-black/60 mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            disabled
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black/40 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-black/60 mb-2">Region</label>
                        <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-3 bg-black/[0.02] border border-black/10 rounded-xl text-black focus:outline-none focus:border-black/30 transition-colors appearance-none"
                        >
                            <option value="US">United States</option>
                            <option value="EU">European Union</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Save */}
            {hasChanges && (
                <div className="p-6 pt-0">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`${ppAgrandirHeading.className} w-full px-6 py-3 rounded-xl bg-black text-white font-bold hover:bg-black/90 transition-colors flex items-center justify-center`}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Saving...
                            </>
                        ) : success ? (
                            'Saved!'
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            )}
        </form>
    )
}
