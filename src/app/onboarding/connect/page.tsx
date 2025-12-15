'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import {
    ChevronLeft,
    Shield,
    Lock,
    Unplug,
    CheckCircle2,
    Clock,
    Users,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { PlaidLinkButton } from '@/components/plaid-link-button';

const trustPoints = [
    { icon: Shield, text: 'Read-only access — we can\'t move money' },
    { icon: Lock, text: 'Bank-level encryption (256-bit TLS)' },
    { icon: Unplug, text: 'Disconnect anytime in settings' },
];

export default function TrustGatePage() {
    const router = useRouter();
    const [isConnecting, setIsConnecting] = useState(false);

    const handleSuccess = () => {
        setIsConnecting(false);
        router.push('/scanning');
    };

    const handleBack = () => {
        router.push('/onboarding/profile');
    };

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA] flex flex-col`}>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-black/5">
                <div className="h-full w-3/4 bg-black transition-all duration-500" />
            </div>

            <main className="flex-1 max-w-lg mx-auto w-full px-6 py-12">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center gap-1 text-black/40 hover:text-black/60 transition-colors mb-6 cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-sm">Back</span>
                </button>

                {/* Header */}
                <div className="mb-8">
                    <p className="text-black/40 text-sm mb-2">Step 3 of 4</p>
                    <h1 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-2`}>
                        Connect your bank
                    </h1>
                    <p className="text-black/50">
                        We'll scan for subscriptions, hidden renewals, and refund opportunities.
                    </p>
                </div>

                {/* Plaid Trust Card */}
                <div className="bg-white rounded-2xl p-6 border border-black/5 mb-6">
                    {/* Plaid Logo */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                            <Image
                                src="/Plaid.svg"
                                alt="Plaid"
                                width={24}
                                height={24}
                                className="invert"
                            />
                        </div>
                        <div>
                            <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                Powered by Plaid
                            </p>
                            <p className="text-black/40 text-sm">
                                Trusted by 12,000+ financial apps
                            </p>
                        </div>
                    </div>

                    {/* Trust Points */}
                    <div className="space-y-4 mb-6">
                        {trustPoints.map((point, index) => {
                            const Icon = point.icon;
                            return (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-black/[0.03] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-black/60" />
                                    </div>
                                    <p className="text-black/70 text-sm">
                                        {point.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-black/5 my-6" />

                    {/* Stats */}
                    <div className="flex items-center justify-between text-center">
                        <div>
                            <div className="flex items-center justify-center gap-1 text-black/40 mb-1">
                                <Clock className="w-3 h-3" />
                                <span className="text-xs">Takes</span>
                            </div>
                            <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                ~60 sec
                            </p>
                        </div>
                        <div className="w-px h-8 bg-black/10" />
                        <div>
                            <div className="flex items-center justify-center gap-1 text-black/40 mb-1">
                                <Users className="w-3 h-3" />
                                <span className="text-xs">Users</span>
                            </div>
                            <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                Find leaks instantly
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Detect */}
                <div className="bg-black/[0.02] rounded-2xl p-4 mb-6">
                    <p className="text-black/50 text-xs mb-2 font-medium">WHAT WE'LL DETECT:</p>
                    <p className="text-black/70 text-sm">
                        Subscriptions • Hidden renewals • Overcharges • App Store charges • Billing errors
                    </p>
                </div>

                {/* Connect Button */}
                <PlaidLinkButton
                    onSuccess={handleSuccess}
                    variant="minimal"
                    className="w-full bg-black hover:bg-black/90 text-white border-0 py-4"
                >
                    <span>Connect your bank to start scan</span>
                    <ArrowRight className="w-5 h-5" />
                </PlaidLinkButton>

                {/* Security Note */}
                <p className="text-black/30 text-[11px] text-center mt-4">
                    Your credentials are encrypted and never stored by Pockret.
                </p>
            </main>
        </div>
    );
}
