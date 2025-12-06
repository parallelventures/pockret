import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { ppAgrandirHeading } from '@/app/fonts'
import { SignOutButton } from '@/components/sign-out-button'
import { ProfileForm } from '@/components/profile-form'
import { Shield, Lock, CreditCard, Sparkles, Trash2, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function ProfilePage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    // Fetch user details from public.users table if it exists
    const { data: userDetails } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

    const userName = user.user_metadata?.full_name || 'User'
    const plan = userDetails?.plan || 'Free'

    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans">
            <Navbar />

            <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 space-y-8">

                {/* Header */}
                <div className="space-y-1">
                    <h1 className={`${ppAgrandirHeading.className} text - 3xl font - bold`}>Hi {userName.split(' ')[0]} 👋</h1>
                    <p className="text-[#6B7280] font-medium">Manage your account, plan and preferences.</p>
                </div>

                {/* Profile Form (Editable) */}
                <ProfileForm user={user} userDetails={userDetails} />

                {/* Plan Card */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-[#111827]">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className={`${ppAgrandirHeading.className} text - lg font - bold text - [#111827]`}>Your Plan</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#6B7280] font-medium capitalize">{plan} Plan</span>
                                    {plan === 'Free' && (
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">Basic</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {plan === 'Free' && (
                            <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                                <Button className="w-full md:w-auto bg-[#111827] hover:bg-black text-white font-bold rounded-lg transition-all active:scale-95">
                                    <Sparkles className="w-4 h-4 mr-2 text-[#FFD700]" />
                                    Upgrade to Lifetime ($39.99)
                                </Button>
                                <p className="text-xs text-[#6B7280] font-medium text-center md:text-right">
                                    Unlock unlimited scans & auto-refunds.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Security Card */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-5 h-5 text-[#1EC1F3]" />
                        <h3 className={`${ppAgrandirHeading.className} text - lg font - bold text - [#111827]`}>Security & Privacy</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-[#F9FAFB] border border-gray-100 flex items-start gap-3">
                            <Lock className="w-5 h-5 text-[#16A34A] mt-0.5" />
                            <div>
                                <p className="font-bold text-sm text-[#111827]">AES-256 Encryption</p>
                                <p className="text-xs text-[#6B7280] mt-1">Your data is encrypted at rest and in transit.</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F9FAFB] border border-gray-100 flex items-start gap-3">
                            <Shield className="w-5 h-5 text-[#1EC1F3] mt-0.5" />
                            <div>
                                <p className="font-bold text-sm text-[#111827]">Private & Confidential</p>
                                <p className="text-xs text-[#6B7280] mt-1">We never share data with third parties.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                        <Button variant="outline" className="font-bold text-[#374151] border-gray-200 hover:bg-gray-50">
                            Change Password
                        </Button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="border border-red-100 bg-red-50/30 rounded-xl p-6 space-y-4">
                    <h3 className="text-sm font-bold text-red-900 uppercase tracking-wider">Danger Zone</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <SignOutButton />
                        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 font-medium">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Account
                        </Button>
                    </div>
                </div>

            </main>
        </div>
    )
}
