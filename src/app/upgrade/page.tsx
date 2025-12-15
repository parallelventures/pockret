'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import {
    Zap,
    FileText,
    Scale,
    Check,
    Shield,
    Clock,
    ChevronLeft,
    ChevronDown,
    Sparkles
} from 'lucide-react';

const features = [
    { icon: Zap, title: 'One-click cancellation', description: 'Guided + pre-filled forms' },
    { icon: FileText, title: 'Refund request generator', description: 'Policy-aware templates' },
    { icon: Scale, title: 'Settlements & class actions', description: 'Matching + claim checklist' },
];

const plans = [
    {
        id: 'monthly',
        name: 'Monthly',
        price: 39,
        period: '/mo',
        description: 'Cancel anytime',
        popular: false,
    },
    {
        id: 'lifetime',
        name: 'Lifetime',
        price: 249,
        period: 'one-time',
        description: 'Best value • Pay once',
        popular: true,
        savings: 'Save $219/year',
    },
];

const faqItems = [
    {
        question: "What exactly does Pockret do?",
        answer: "Pockret scans your bank transactions (read-only via Plaid) to detect recurring payments, overcharges, and refund opportunities. It helps you cancel what you don't use, recover what was wrongly billed, and claim what's legally yours — all in one click. No budgeting. Just money back."
    },
    {
        question: "Is it safe to connect my bank account?",
        answer: "Yes — Pockret uses Plaid, the same API used by apps like Robinhood, Coinbase, and Venmo. Your access is read-only: Pockret can't move, charge, or touch your money. We never store your credentials, and you can disconnect anytime in one click. Bank-level encryption. User-level control."
    },
    {
        question: "How much can I actually recover?",
        answer: "It depends on your situation — but on average, users identify $200–$600 per year in forgotten subscriptions, overcharges, and refundable items. Some find $30, others find over $1,000. The first scan is free — you'll know your potential recovery before paying anything."
    },
    {
        question: "Why would I pay to find refunds?",
        answer: "Because it literally pays for itself. One subscription canceled or refund claimed usually covers the cost — sometimes 5× over. You're not paying for another tool. You're paying to stop losing money. Spend $39, recover $200+. Guaranteed insights."
    },
    {
        question: "What if I don't want to cancel all my subscriptions?",
        answer: "Perfect — Pockret isn't anti-subscription. It's anti-waste. We highlight what's unused or overpriced — you choose what to keep. The goal is control, not austerity."
    },
    {
        question: "How is Pockret different from a budgeting app?",
        answer: "Budgeting apps track what you spend. Pockret finds what's leaking. You don't need another dashboard — you need results. We're a Recovery Engine, not a tracker."
    },
    {
        question: "Do I get actual refunds, or just info?",
        answer: "Both. Pockret generates ready-to-send refund requests, connects you to merchants or banking portals, and in some cases pre-fills forms automatically (depending on the provider). The hard part is done for you — you just approve the action."
    },
    {
        question: "Can I get refunds for my subscriptions?",
        answer: "Yes — and Pockret helps you do it faster and smarter. For App Store purchases, we link you directly to Apple's refund page. For web subscriptions, we generate professional refund request templates. For bank charges, we prepare chargeback details under Fair Credit Billing Act protection."
    },
    {
        question: "What's the catch?",
        answer: "None. We don't sell data. We don't do ads. Our only incentive is to make you recover as much money as possible — that's how we keep you subscribed. Aligned incentives = trust that scales."
    },
    {
        question: "How long does the scan take?",
        answer: "About 60 seconds. You connect your account → we analyze → results appear instantly. No setup, no learning curve. If you scan today, you'll still catch this month's renewals before they charge again."
    },
    {
        question: "Is there a refund guarantee?",
        answer: "If Pockret doesn't find at least $39/year in potential recoveries, we'll extend your access free for 30 days. We can't promise every refund will succeed — but we guarantee insight and clarity. Either you win cash, or you gain awareness. Both are wins."
    },
    {
        question: "Can I get a refund for my Pockret subscription?",
        answer: "Yes. If you believe Pockret didn't deliver measurable value — no hidden conditions. Email support@pockret.com within 14 days of purchase, and we'll issue a 100% refund, no questions asked. If you don't win, we don't want to keep your money."
    },
    {
        question: "What about privacy and data sharing?",
        answer: "Your data stays encrypted and isolated per user. We use no trackers, no third-party analytics on sensitive data. We can't sell or share anything — it's locked behind Plaid's security layer. Privacy is part of the product, not an afterthought."
    },
];

export default function UpgradePage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState('lifetime');
    const [isLoaded, setIsLoaded] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);

        // Countdown timer (for urgency)
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Dynamic potential based on selected plan
    // Lifetime shows full potential (all recovery methods)
    // Monthly shows basic potential (just cancellations + refunds)
    const recoveryBreakdown = {
        monthly: {
            subscriptions: 89,
            refunds: 47,
            total: 136,
            label: 'Basic Recovery'
        },
        lifetime: {
            subscriptions: 187,
            refunds: 149,
            chargebacks: 89,
            settlements: 127,
            classActions: 75,
            total: 627,
            label: 'Full Recovery Engine'
        }
    };

    const currentRecovery = recoveryBreakdown[selectedPlan as keyof typeof recoveryBreakdown];

    const handlePurchase = () => {
        // Navigate to Stripe checkout or handle payment
        // For now, redirect to dashboard
        router.push('/dashboard');
    };

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA]`}>
            <main className="max-w-lg mx-auto w-full px-6 py-8">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/results')}
                    className="flex items-center gap-1 text-black/40 hover:text-black/60 transition-colors mb-6 cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-sm">Back to results</span>
                </button>

                {/* Header */}
                <div className={`text-center mb-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-2`}>
                        Unlock your Recovery Engine
                    </h1>
                    <p className="text-black/50">
                        {currentRecovery.label}
                    </p>
                </div>

                {/* Dynamic Potential Amount */}
                <div className={`bg-black text-white rounded-2xl p-5 mb-6 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="text-center mb-4">
                        <p className="text-white/50 text-xs mb-1">POTENTIAL RECOVERIES</p>
                        <p className={`${ppAgrandirHeading.className} text-4xl font-bold`}>
                            ${currentRecovery.total}
                        </p>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-white/60">Subscriptions to cancel</span>
                            <span className="font-medium">${currentRecovery.subscriptions}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/60">Refund requests</span>
                            <span className="font-medium">${currentRecovery.refunds}</span>
                        </div>
                        {selectedPlan === 'lifetime' && (
                            <>
                                <div className="border-t border-white/10 my-2" />
                                <div className="flex justify-between">
                                    <span className="text-white/60">Chargebacks eligible</span>
                                    <span className="font-medium">${(currentRecovery as typeof recoveryBreakdown.lifetime).chargebacks}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/60">Open settlements</span>
                                    <span className="font-medium">${(currentRecovery as typeof recoveryBreakdown.lifetime).settlements}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/60">Class actions</span>
                                    <span className="font-medium">${(currentRecovery as typeof recoveryBreakdown.lifetime).classActions}</span>
                                </div>
                            </>
                        )}
                    </div>

                    {selectedPlan === 'monthly' && (
                        <p className="text-white/40 text-[10px] text-center mt-3 border-t border-white/10 pt-3">
                            💡 Switch to Lifetime for chargebacks, settlements & class actions (+$491)
                        </p>
                    )}
                </div>

                {/* Urgency Timer */}
                <div className={`bg-black/[0.02] rounded-xl p-3 mb-6 flex items-center justify-center gap-2 transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Clock className="w-4 h-4 text-black/40" />
                    <p className="text-black/60 text-sm">
                        Your scan expires in{' '}
                        <span className="font-mono font-semibold text-black">
                            {String(timeLeft.minutes).padStart(2, '0')}:
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                    </p>
                </div>

                {/* Features */}
                <div className={`bg-white rounded-2xl border border-black/5 p-6 mb-6 transition-all duration-500 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-black/40 text-xs font-medium mb-4">WHAT YOU UNLOCK</p>

                    <div className="space-y-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                            {feature.title}
                                        </p>
                                        <p className="text-black/50 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className={`space-y-3 mb-6 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {plans.map((plan) => (
                        <button
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`
                                w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer
                                ${selectedPlan === plan.id
                                    ? 'border-black bg-black/[0.02]'
                                    : 'border-transparent bg-white hover:border-black/10'
                                }
                                ${plan.popular ? 'ring-2 ring-black' : ''}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                            {plan.name}
                                        </p>
                                        {plan.popular && (
                                            <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-medium">
                                                BEST VALUE
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-black/50 text-sm mt-0.5">
                                        {plan.description}
                                    </p>
                                    {plan.savings && (
                                        <p className="text-black/70 text-xs mt-1 font-medium">
                                            {plan.savings}
                                        </p>
                                    )}
                                </div>
                                <div className="text-right">
                                    <p className={`${ppAgrandirHeading.className} text-2xl font-bold text-black`}>
                                        ${plan.price}
                                    </p>
                                    <p className="text-black/40 text-xs">
                                        {plan.period}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Purchase Button */}
                <div className={`transition-all duration-500 delay-250 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button
                        onClick={handlePurchase}
                        className={`
                            ${ppAgrandirHeading.className}
                            w-full py-4 rounded-xl bg-black text-white font-bold
                            flex items-center justify-center gap-2
                            hover:bg-black/90 transition-colors cursor-pointer
                        `}
                    >
                        <span>
                            Get {selectedPlan === 'lifetime' ? 'Lifetime Access' : 'Monthly Access'} — ${plans.find(p => p.id === selectedPlan)?.price}
                        </span>
                    </button>
                </div>

                {/* Guarantee */}
                <div className={`mt-6 p-4 bg-black/[0.02] rounded-xl transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-black/60 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className={`${ppAgrandirHeading.className} font-bold text-black text-sm`}>
                                Our guarantee
                            </p>
                            <p className="text-black/50 text-sm mt-1">
                                If we don't identify at least <strong>$39/year</strong> in potential savings signals, we'll extend your access by 30 days — free.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 text-black/30 text-[11px]">
                    <div className="flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Read-only access</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Secure payment</span>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={`mt-12 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-6 text-center`}>
                        Questions? Answered.
                    </h3>

                    <div className="space-y-2">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`border border-black/5 rounded-xl overflow-hidden bg-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${expandedFaq === index ? 'scale-[1.02] shadow-sm' : 'scale-100'
                                    }`}
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors cursor-pointer"
                                >
                                    <span className="text-sm font-medium text-black pr-4">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-black/40 flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${expandedFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${expandedFaq === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                    style={{
                                        transform: expandedFaq === index ? 'translateY(0)' : 'translateY(-4px)',
                                        opacity: expandedFaq === index ? 1 : 0,
                                    }}
                                >
                                    <div className="px-4 pb-4 text-sm text-black/60 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-black/40 mb-4">
                            Don't just budget. <strong className="text-black/60">Recover.</strong>
                        </p>
                        <button
                            onClick={() => {
                                // TODO: Integrate payment flow
                                console.log('Selected plan:', selectedPlan);
                            }}
                            className={`
                                ${ppAgrandirHeading.className}
                                w-full h-14 rounded-xl
                                bg-black text-white font-bold text-base
                                hover:bg-black/90 transition-colors cursor-pointer
                            `}
                        >
                            Start Your Scan Now →
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-6 text-center text-[11px] text-black/40">
                        <p>💬 1,000+ users already scanned their accounts</p>
                        <p className="mt-1">💸 $47,200+ detected in potential recoveries this week</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
