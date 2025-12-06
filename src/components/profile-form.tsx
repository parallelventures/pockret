'use client'

import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ppAgrandirHeading } from '@/app/fonts'
import { User, Mail, Globe, Save, Loader2, Check } from 'lucide-react'

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
            // Update auth metadata
            const { error: authError } = await supabase.auth.updateUser({
                data: { full_name: formData.fullName }
            })
            if (authError) throw authError

            // Update public profile
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
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-gradient-to-br from-[#1EC1F3] to-[#16A34A] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-sm">
                        {formData.fullName.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                        <h2 className={`${ppAgrandirHeading.className} text-lg font-bold text-[#111827]`}>Personal Details</h2>
                        <p className="text-[#6B7280] text-sm">Update your personal information.</p>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider flex items-center gap-2">
                            <User className="w-3 h-3" /> Full Name
                        </label>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#1EC1F3] focus:ring-2 focus:ring-[#1EC1F3]/20 outline-none transition-all text-[#111827] font-medium bg-gray-50/50 focus:bg-white"
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider flex items-center gap-2">
                            <Mail className="w-3 h-3" /> Email Address
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            disabled
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-[#6B7280] font-medium cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider flex items-center gap-2">
                            <Globe className="w-3 h-3" /> Region
                        </label>
                        <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#1EC1F3] focus:ring-2 focus:ring-[#1EC1F3]/20 outline-none transition-all text-[#111827] font-medium bg-gray-50/50 focus:bg-white appearance-none"
                        >
                            <option value="US">United States</option>
                            <option value="EU">European Union</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <Button
                    type="submit"
                    disabled={!hasChanges || loading}
                    className={`
                        font-bold rounded-lg px-6 transition-all active:scale-95
                        ${hasChanges
                            ? 'bg-[#1ECB6F] hover:bg-[#17b05f] text-white'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                    `}
                >
                    {loading ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</>
                    ) : success ? (
                        <><Check className="w-4 h-4 mr-2" /> Saved!</>
                    ) : (
                        <><Save className="w-4 h-4 mr-2" /> Save Changes</>
                    )}
                </Button>
            </div>
        </form>
    )
}
