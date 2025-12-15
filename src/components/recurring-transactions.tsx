'use client';

import React, { useEffect } from 'react';
import { RefreshCw, Loader2, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { usePlaidRecurring } from '@/hooks/use-plaid-recurring';

interface RecurringTransactionsProps {
    onSync?: () => void;
}

// Map frequency to human-readable text
const frequencyLabels: Record<string, string> = {
    WEEKLY: 'Weekly',
    BIWEEKLY: 'Every 2 weeks',
    SEMI_MONTHLY: 'Twice a month',
    MONTHLY: 'Monthly',
    ANNUALLY: 'Yearly',
    UNKNOWN: 'Unknown',
};

// Get a color based on category
function getCategoryColor(category: string[]): string {
    const mainCategory = category[0]?.toLowerCase() || '';

    if (mainCategory.includes('entertainment') || mainCategory.includes('recreation')) {
        return 'bg-purple-500/20 text-purple-400';
    }
    if (mainCategory.includes('food') || mainCategory.includes('restaurant')) {
        return 'bg-orange-500/20 text-orange-400';
    }
    if (mainCategory.includes('transportation') || mainCategory.includes('travel')) {
        return 'bg-blue-500/20 text-blue-400';
    }
    if (mainCategory.includes('service') || mainCategory.includes('subscription')) {
        return 'bg-emerald-500/20 text-emerald-400';
    }
    if (mainCategory.includes('shop') || mainCategory.includes('retail')) {
        return 'bg-pink-500/20 text-pink-400';
    }
    return 'bg-neutral-500/20 text-neutral-400';
}

export function RecurringTransactions({ onSync }: RecurringTransactionsProps) {
    const {
        recurring,
        totalMonthly,
        isLoading,
        isSyncing,
        error,
        fetchRecurring,
        syncRecurring,
    } = usePlaidRecurring();

    useEffect(() => {
        fetchRecurring();
    }, [fetchRecurring]);

    const handleSync = async () => {
        await syncRecurring();
        onSync?.();
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
                <div className="flex items-center gap-2 text-red-400 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-medium">Error loading subscriptions</span>
                </div>
                <p className="text-red-400/80 text-sm">{error.message}</p>
                <button
                    onClick={() => fetchRecurring()}
                    className="mt-3 text-sm text-red-400 hover:text-red-300 underline"
                >
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/30">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-neutral-300">Monthly Subscriptions</span>
                    </div>
                    <button
                        onClick={handleSync}
                        disabled={isSyncing}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                        {isSyncing ? 'Syncing...' : 'Sync'}
                    </button>
                </div>

                <p className="text-4xl font-bold text-white mb-1">
                    ${totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <span className="text-lg font-normal text-neutral-400">/mo</span>
                </p>
                <p className="text-neutral-500 text-sm">
                    {recurring.length} active subscription{recurring.length !== 1 ? 's' : ''} detected
                </p>
            </div>

            {/* Subscriptions List */}
            {recurring.length === 0 ? (
                <div className="text-center py-8">
                    <Calendar className="w-10 h-10 mx-auto text-neutral-600 mb-3" />
                    <p className="text-neutral-400 mb-2">No recurring transactions found</p>
                    <p className="text-neutral-500 text-sm">
                        Sync your transactions to detect subscriptions
                    </p>
                    <button
                        onClick={handleSync}
                        disabled={isSyncing}
                        className="mt-4 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors disabled:opacity-50"
                    >
                        {isSyncing ? 'Syncing...' : 'Sync Now'}
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    {recurring.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                {/* Category Badge */}
                                <div className={`p-2.5 rounded-xl ${getCategoryColor(item.category)}`}>
                                    <Calendar className="w-4 h-4" />
                                </div>

                                <div>
                                    <p className="font-medium text-white">
                                        {item.merchant_name || item.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-xs text-neutral-500">
                                            {frequencyLabels[item.frequency] || item.frequency}
                                        </span>
                                        {item.category[0] && (
                                            <>
                                                <span className="text-neutral-600">•</span>
                                                <span className="text-xs text-neutral-500 capitalize">
                                                    {item.category[0].replace(/_/g, ' ').toLowerCase()}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold text-white">
                                    ${Math.abs(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                                <p className="text-xs text-neutral-500">
                                    {frequencyLabels[item.frequency]?.toLowerCase() || 'recurring'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
