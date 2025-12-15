'use client';

import React, { useEffect, useState } from 'react';
import { Building2, ChevronRight, Loader2, CheckCircle2, Plus } from 'lucide-react';
import { usePlaidAccounts } from '@/hooks/use-plaid-accounts';
import { PlaidLinkButton } from './plaid-link-button';
import { ppAgrandirHeading } from '@/app/fonts';
import Image from 'next/image';

interface ConnectBankCardProps {
    onSuccess?: () => void;
}

export function ConnectBankCard({ onSuccess }: ConnectBankCardProps) {
    const [hasChecked, setHasChecked] = useState(false);
    const { items, isLoading, fetchAccounts } = usePlaidAccounts();

    useEffect(() => {
        fetchAccounts().then(() => setHasChecked(true));
    }, [fetchAccounts]);

    const handleSuccess = () => {
        fetchAccounts();
        onSuccess?.();
    };

    if (isLoading || !hasChecked) {
        return (
            <div className="bg-white rounded-2xl p-6 border border-black/5">
                <div className="flex items-center justify-center py-4">
                    <Loader2 className="w-5 h-5 animate-spin text-black/30" />
                </div>
            </div>
        );
    }

    // Already has connected banks
    if (items.length > 0) {
        return (
            <div className="bg-white rounded-2xl p-6 border border-black/5">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black/[0.03] rounded-xl flex items-center justify-center">
                            <Image
                                src="/Plaid.svg"
                                alt="Plaid"
                                width={20}
                                height={20}
                                className="opacity-80"
                            />
                        </div>
                        <div>
                            <h3 className={`${ppAgrandirHeading.className} text-base font-bold text-black`}>
                                Bank Connected
                            </h3>
                            <p className="text-black/40 text-xs">
                                via Plaid
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03]">
                        <CheckCircle2 className="w-3 h-3 text-black/60" />
                        <span className="text-xs text-black/60 font-medium">Active</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-black/[0.02] rounded-xl mb-4">
                    <Building2 className="w-4 h-4 text-black/40" />
                    <span className="text-sm text-black/60">
                        {items.length} institution{items.length !== 1 ? 's' : ''} linked
                    </span>
                </div>

                <PlaidLinkButton
                    onSuccess={handleSuccess}
                    variant="minimal"
                    className="w-full bg-black/[0.03] hover:bg-black/[0.06] border-0 text-black/70 hover:text-black"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Another Bank</span>
                </PlaidLinkButton>
            </div>
        );
    }

    // No banks connected - show CTA
    return (
        <div className="bg-white rounded-2xl p-6 border border-black/5 group hover:border-black/10 transition-colors">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                        <Image
                            src="/Plaid.svg"
                            alt="Plaid"
                            width={20}
                            height={20}
                            className="invert"
                        />
                    </div>
                    <div>
                        <h3 className={`${ppAgrandirHeading.className} text-base font-bold text-black`}>
                            Connect Your Bank
                        </h3>
                        <p className="text-black/40 text-xs">
                            Secured by Plaid
                        </p>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-black/40 transition-colors" />
            </div>

            <p className="text-black/50 text-sm mb-5 leading-relaxed">
                Auto-detect your subscriptions and recurring charges. Find hidden fees instantly.
            </p>

            <PlaidLinkButton
                onSuccess={handleSuccess}
                variant="minimal"
                className="w-full bg-black hover:bg-black/90 text-white border-0"
            >
                <Building2 className="w-4 h-4" />
                <span>Connect Bank</span>
            </PlaidLinkButton>

            <p className="text-black/30 text-[10px] text-center mt-3">
                Bank-level encryption • Read-only access
            </p>
        </div>
    );
}
