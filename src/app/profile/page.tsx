import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts'
import { SignOutButton } from '@/components/sign-out-button'
import { ProfileForm } from '@/components/profile-form'
import Link from 'next/link'
import { LinkedAccountsSectionWrapper } from '@/components/linked-accounts-section-wrapper'

export default async function ProfilePage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const { data: userDetails } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

    const userName = user.user_metadata?.full_name || 'User'
    const plan = userDetails?.plan || 'Free'

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-black mb-2`}>
                        Settings
                    </h1>
                    <p className="text-black/50">
                        Manage your account and preferences.
                    </p>
                </div>

                {/* Profile Form */}
                <div className="mb-8">
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Profile
                    </h2>
                    <ProfileForm user={user} userDetails={userDetails} />
                </div>

                {/* Linked Banks */}
                <div className="mb-8">
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Linked Banks
                    </h2>
                    <LinkedAccountsSectionWrapper />
                </div>

                {/* Plan */}
                <div className="mb-8">
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Plan
                    </h2>
                    <div className="bg-white rounded-2xl p-6 border border-black/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-black capitalize">{plan} Plan</p>
                                <p className="text-black/50 text-sm mt-1">
                                    {plan === 'Free' ? 'Limited features' : 'Full access to all features'}
                                </p>
                            </div>
                            {plan === 'Free' && (
                                <Link href="/pricing">
                                    <button className={`${ppAgrandirHeading.className} px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-black/90 transition-colors`}>
                                        Upgrade
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="mb-8">
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Security
                    </h2>
                    <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-black">Password</p>
                                <p className="text-black/50 text-sm">Last changed: Never</p>
                            </div>
                            <button className="text-black/60 hover:text-black text-sm transition-colors">
                                Change
                            </button>
                        </div>
                        <div className="border-t border-black/5" />
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-black">Two-factor authentication</p>
                                <p className="text-black/50 text-sm">Not enabled</p>
                            </div>
                            <button className="text-black/60 hover:text-black text-sm transition-colors">
                                Enable
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data */}
                <div className="mb-8">
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Data & Privacy
                    </h2>
                    <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-black">Download your data</p>
                                <p className="text-black/50 text-sm">Get a copy of all your data</p>
                            </div>
                            <button className="text-black/60 hover:text-black text-sm transition-colors">
                                Download
                            </button>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div>
                    <h2 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-4`}>
                        Account
                    </h2>
                    <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-black">Sign out</p>
                                <p className="text-black/50 text-sm">Sign out of your account</p>
                            </div>
                            <SignOutButton />
                        </div>
                        <div className="border-t border-black/5" />
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-red-600">Delete account</p>
                                <p className="text-black/50 text-sm">Permanently delete your account and data</p>
                            </div>
                            <button className="text-red-500 hover:text-red-600 text-sm transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
