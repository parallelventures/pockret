'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import { usePlaidRecurring } from '@/hooks/use-plaid-recurring';
import { useSubscription } from '@/hooks/use-subscription';
import {
    DollarSign,
    RotateCcw,
    Scale,
    Lock,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Eye,
    Loader2
} from 'lucide-react';

const statusIcons = {
    active: CheckCircle2,
    low_usage: AlertCircle,
    renewal: AlertCircle,
    overcharge: XCircle,
    inactive: XCircle,
};

const statusColors = {
    active: 'text-black/40',
    low_usage: 'text-amber-500',
    renewal: 'text-amber-500',
    overcharge: 'text-red-500',
    inactive: 'text-red-500',
};

export default function ResultsPage() {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);
    const { recurring, totalMonthly, isLoading } = usePlaidRecurring();
    const { hasAccess, isLoading: isSubscriptionLoading } = useSubscription();

    useEffect(() => {
        // Animate in
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    // Process recurring transactions to display format
    const subscriptions = useMemo(() => {
        if (!recurring || recurring.length === 0) return [];

        return recurring.map((item, index) => {
            // Premium users can view all, free users only first 4
            const canView = hasAccess || index < 4;

            // Determine status based on amount and type
            let status = 'active';
            let signal = 'Recurring payment detected';

            if (item.amount > 50) {
                status = 'renewal';
                signal = 'High-value subscription';
            } else if (item.amount > 20) {
                status = 'low_usage';
                signal = 'Review recommended';
            }

            return {
                id: item.id || index,
                name: item.merchant_name || item.description || 'Unknown',
                amount: Math.abs(item.amount),
                status,
                signal,
                frequency: item.frequency || 'MONTHLY',
                canView,
            };
        });
    }, [recurring, hasAccess]);

    // Calculate totals
    const monthlySavings = useMemo(() => {
        return subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
    }, [subscriptions]);

    const potentialRefunds = useMemo(() => {
        // Estimate: 30% of subscriptions might have refund potential
        return Math.round(monthlySavings * 0.3);
    }, [monthlySavings]);

    const totalPotential = monthlySavings + potentialRefunds;

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA]`}>
            {/* Progress Bar - Complete */}
            <div className="w-full h-1 bg-black" />

            <main className="max-w-lg mx-auto w-full px-6 py-8">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 text-black/40 animate-spin mb-4" />
                        <p className="text-black/50">Loading your subscriptions...</p>
                    </div>
                ) : (
                    <>
                        {/* Success Header */}
                        <div className={`text-center mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h1 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-2`}>
                                Scan complete
                            </h1>
                            <p className="text-black/50">
                                We found potential money you can recover.
                            </p>
                        </div>

                        {/* Potential Money Back Module */}
                        <div className={`bg-black text-white rounded-2xl p-6 mb-6 transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <p className="text-white/50 text-xs font-medium mb-4">POTENTIAL MONEY BACK</p>

                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className={`${ppAgrandirHeading.className} text-2xl font-bold`}>
                                        ${monthlySavings.toFixed(0)}
                                    </p>
                                    <p className="text-white/50 text-xs mt-1">Monthly savings</p>
                                </div>
                                <div className="border-x border-white/10">
                                    <p className={`${ppAgrandirHeading.className} text-2xl font-bold`}>
                                        ${potentialRefunds}
                                    </p>
                                    <p className="text-white/50 text-xs mt-1">Potential refunds</p>
                                </div>
                                <div>
                                    <p className={`${ppAgrandirHeading.className} text-2xl font-bold`}>
                                        {subscriptions.filter(s => !s.canView).length}
                                    </p>
                                    <p className="text-white/50 text-xs mt-1">Hidden items</p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-4 pt-4">
                                <p className="text-white/40 text-[10px] text-center">
                                    ⚠️ Estimates based on detected patterns. Not guaranteed.
                                </p>
                            </div>
                        </div>

                        {/* Recovery Queue */}
                        <div className={`bg-white rounded-2xl border border-black/5 overflow-hidden mb-6 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="p-4 border-b border-black/5">
                                <h2 className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                    Recovery Queue
                                </h2>
                                <p className="text-black/40 text-sm">
                                    {subscriptions.length} items detected
                                </p>
                            </div>

                            <div className="divide-y divide-black/5">
                                {subscriptions.map((sub: typeof subscriptions[number], index: number) => {
                                    const StatusIcon = statusIcons[sub.status as keyof typeof statusIcons] || AlertCircle;
                                    const statusColor = statusColors[sub.status as keyof typeof statusColors] || 'text-black/40';

                                    return (
                                        <div
                                            key={sub.id}
                                            className={`p-4 flex items-center gap-4 ${!sub.canView ? 'relative' : ''}`}
                                        >
                                            {/* Blur overlay for locked items */}
                                            {!sub.canView && (
                                                <div className="absolute inset-0 backdrop-blur-sm bg-white/50 flex items-center justify-center z-10">
                                                    <div className="flex items-center gap-2 text-black/60">
                                                        <Lock className="w-4 h-4" />
                                                        <span className="text-sm font-medium">Unlock to view</span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${sub.canView ? 'bg-black/[0.03]' : 'bg-black/10'}`}>
                                                <StatusIcon className={`w-5 h-5 ${statusColor}`} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-black truncate">
                                                    {sub.canView ? sub.name : '••••••••'}
                                                </p>
                                                <p className="text-black/40 text-sm">
                                                    {sub.signal}
                                                </p>
                                            </div>

                                            <div className="text-right">
                                                <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                                    ${sub.amount}
                                                </p>
                                                <p className="text-black/40 text-xs">
                                                    /{sub.frequency || 'mo'}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <button
                                onClick={() => router.push('/upgrade')}
                                className={`
                            ${ppAgrandirHeading.className}
                            w-full py-4 rounded-xl bg-black text-white font-bold
                            flex items-center justify-center gap-2
                            hover:bg-black/90 transition-colors cursor-pointer
                        `}
                            >
                                <span>Unlock one-click recovery</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            <p className="text-black/30 text-[11px] text-center mt-3">
                                Cancel anytime • Read-only access
                            </p>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
