'use client';

import React, { useEffect } from 'react';
import { Building2, CreditCard, RefreshCw, Trash2, Loader2, DollarSign } from 'lucide-react';
import { usePlaidAccounts } from '@/hooks/use-plaid-accounts';
import { AddAccountButton } from './plaid-link-button';

interface LinkedAccountsProps {
    onAccountsChange?: () => void;
}

export function LinkedAccounts({ onAccountsChange }: LinkedAccountsProps) {
    const {
        items,
        allAccounts,
        totalBalance,
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
            const success = await unlinkAccount(itemId);
            if (success) {
                onAccountsChange?.();
            }
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-red-400 text-sm">{error.message}</p>
                <button
                    onClick={() => fetchAccounts()}
                    className="mt-2 text-sm text-red-400 hover:text-red-300 underline"
                >
                    Try again
                </button>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <Building2 className="w-12 h-12 mx-auto text-neutral-600 mb-4" />
                <h3 className="text-lg font-medium text-neutral-300 mb-2">
                    No linked accounts
                </h3>
                <p className="text-neutral-500 text-sm mb-6">
                    Connect your bank account to start tracking subscriptions
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Total Balance Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-neutral-400 text-sm">Total Balance</span>
                </div>
                <p className="text-3xl font-semibold text-white">
                    ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                    Across {allAccounts.length} account{allAccounts.length !== 1 ? 's' : ''}
                </p>
            </div>

            {/* Linked Banks */}
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50"
                    >
                        {/* Bank Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-neutral-700/50">
                                    <Building2 className="w-5 h-5 text-neutral-300" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">
                                        {item.institution_name || 'Unknown Bank'}
                                    </h4>
                                    <p className="text-xs text-neutral-500">
                                        Connected {new Date(item.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUnlink(item.id, item.institution_name)}
                                className="p-2 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                title="Unlink bank"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Accounts List */}
                        <div className="space-y-2">
                            {item.plaid_accounts?.map((account) => (
                                <div
                                    key={account.id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/50"
                                >
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-4 h-4 text-neutral-500" />
                                        <div>
                                            <p className="text-sm font-medium text-neutral-200">
                                                {account.name}
                                            </p>
                                            <p className="text-xs text-neutral-500">
                                                {account.subtype || account.type} •••• {account.mask}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-white">
                                            ${(account.available_balance || account.current_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className="text-xs text-neutral-500">
                                            {account.available_balance !== null ? 'Available' : 'Current'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Another Account */}
            <div className="flex justify-center pt-4">
                <AddAccountButton onSuccess={() => {
                    fetchAccounts();
                    onAccountsChange?.();
                }} />
            </div>

            {/* Refresh Button */}
            <div className="flex justify-center">
                <button
                    onClick={() => fetchAccounts()}
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh accounts
                </button>
            </div>
        </div>
    );
}
