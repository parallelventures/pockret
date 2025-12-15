'use client';

import React, { useEffect, useState } from 'react';
import { Building2, CreditCard, RefreshCw, Trash2, Loader2, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { usePlaidAccounts } from '@/hooks/use-plaid-accounts';
import { PlaidLinkButton, AddAccountButton } from './plaid-link-button';
import { ppAgrandirHeading } from '@/app/fonts';

interface LinkedAccountsSectionProps {
    onAccountsChange?: () => void;
}

export function LinkedAccountsSection({ onAccountsChange }: LinkedAccountsSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isUnlinking, setIsUnlinking] = useState<string | null>(null);
    const {
        items,
        allAccounts,
        isLoading,
        error,
        fetchAccounts,
        unlinkAccount,
    } = usePlaidAccounts();

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);

    const handleUnlink = async (itemId: string, institutionName: string | null) => {
        const confirmed = window.confirm(
            `Are you sure you want to unlink ${institutionName || 'this bank'}? This will remove all associated accounts and transaction history.`
        );
        if (confirmed) {
            setIsUnlinking(itemId);
            const success = await unlinkAccount(itemId);
            setIsUnlinking(null);
            if (success) {
                onAccountsChange?.();
            }
        }
    };

    const handleSuccess = () => {
        fetchAccounts();
        onAccountsChange?.();
    };

    return (
        <div className="bg-white rounded-2xl p-6 border border-black/5">
            {isLoading ? (
                <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-black/30" />
                </div>
            ) : error ? (
                <div className="text-center py-4">
                    <p className="text-red-500 text-sm mb-2">{error.message}</p>
                    <button
                        onClick={() => fetchAccounts()}
                        className="text-sm text-black/60 hover:text-black underline"
                    >
                        Try again
                    </button>
                </div>
            ) : items.length === 0 ? (
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-black/40" />
                        </div>
                        <div>
                            <p className="font-medium text-black">No banks connected</p>
                            <p className="text-black/50 text-sm">Connect your bank to auto-detect subscriptions</p>
                        </div>
                    </div>
                    <PlaidLinkButton
                        onSuccess={handleSuccess}
                        variant="default"
                        className="w-full bg-black hover:bg-black/90 text-white shadow-none"
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Summary Row */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-black">
                                    {items.length} bank{items.length !== 1 ? 's' : ''} connected
                                </p>
                                <p className="text-black/50 text-sm">
                                    {allAccounts.length} account{allAccounts.length !== 1 ? 's' : ''} linked
                                </p>
                            </div>
                        </div>
                        {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-black/40" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-black/40" />
                        )}
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                        <div className="pt-4 border-t border-black/5 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium text-black text-sm">
                                            {item.institution_name || 'Unknown Bank'}
                                        </p>
                                        <button
                                            onClick={() => handleUnlink(item.id, item.institution_name)}
                                            disabled={isUnlinking === item.id}
                                            className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 disabled:opacity-50"
                                        >
                                            {isUnlinking === item.id ? (
                                                <Loader2 className="w-3 h-3 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-3 h-3" />
                                            )}
                                            Unlink
                                        </button>
                                    </div>
                                    {item.plaid_accounts?.map((account) => (
                                        <div
                                            key={account.id}
                                            className="flex items-center gap-3 pl-4 py-2 bg-black/[0.02] rounded-lg"
                                        >
                                            <CreditCard className="w-4 h-4 text-black/40" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-black truncate">{account.name}</p>
                                                <p className="text-xs text-black/40">•••• {account.mask}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <AddAccountButton onSuccess={handleSuccess} className="w-full justify-center" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
