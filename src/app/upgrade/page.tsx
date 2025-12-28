'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import { createCheckoutSession } from '@/app/actions/stripe';
import { STRIPE_PRICES } from '@/lib/stripe-config';
import { PaymentButtonWrapper } from '@/components/payment-button-wrapper';
import { AppIconsMarquee } from '@/components/app-icons-marquee';
import { VideoReviewsCarousel } from '@/components/video-reviews-carousel';
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

const monthlyFeatures = [
    { icon: Zap, title: 'Cancel subscriptions', description: 'Pre-filled forms to stop recurring charges.' },
    { icon: FileText, title: 'Basic refund requests', description: 'Templates for common refund situations.' },
];

const lifetimeFeatures = [
    { icon: Zap, title: 'Cancel in one tap', description: 'We write the message. You just hit send.' },
    { icon: FileText, title: 'Get your money back', description: 'Auto-generated refund requests that actually work.' },
    { icon: Scale, title: 'Free money waiting', description: 'Class actions & settlements you qualify for.' },
    { icon: Sparkles, title: 'Forever access', description: 'All future features included. No recurring fees.' },
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
        question: "What if I don't want to cancel all my subscriptions?",
        answer: "Perfect — Pockret isn't anti-subscription. It's anti-waste. We highlight what's unused or overpriced — you choose what to keep. The goal is control, not austerity."
    },
    {
        question: "Do I get actual refunds, or just information?",
        answer: "Both. Pockret generates ready-to-send refund requests, connects you to merchants or banking portals, and in some cases pre-fills forms automatically. For App Store purchases, we link directly to Apple's refund page. The hard part is done for you — you just approve the action."
    },
    {
        question: "Is there a refund guarantee?",
        answer: "If Pockret doesn't find at least $39/year in potential recoveries, we'll extend your access free for 30 days. We can't promise every refund will succeed — but we guarantee insight and clarity. Either you win cash, or you gain awareness. Both are wins."
    },
    {
        question: "Can I get a refund for my Pockret subscription?",
        answer: "Yes. If you believe Pockret didn't deliver measurable value — no hidden conditions. Email support@pockret.com within 14 days of purchase, and we'll issue a 100% refund, no questions asked. If you don't win, we don't want to keep your money."
    },
];

export default function UpgradePage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState('lifetime');
    const [isLoaded, setIsLoaded] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isPending, startTransition] = useTransition();
    const [showApplePay, setShowApplePay] = useState(true);
    const [applePayChecked, setApplePayChecked] = useState(false);

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
        const plan = STRIPE_PRICES[selectedPlan as keyof typeof STRIPE_PRICES];

        startTransition(async () => {
            try {
                await createCheckoutSession(plan.priceId, plan.mode);
            } catch (error) {
                console.error('Checkout error:', error);
            }
        });
    };

    const handlePaymentSuccess = () => {
        router.push('/dashboard?success=true&plan=' + selectedPlan);
    };

    const handleApplePayNotAvailable = () => {
        // Apple Pay not available, use checkout fallback
        setShowApplePay(false);
        setApplePayChecked(true);
    };

    // Get current plan details
    const currentPlan = plans.find(p => p.id === selectedPlan);
    const currentPlanAmount = (currentPlan?.price || 0) * 100; // Convert to cents

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

                {/* Header with App Icons Marquee */}
                <div className={`text-center mb-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="mb-4 -mx-6 overflow-hidden">
                        <AppIconsMarquee
                            icons={[
                                '/icons/netflix.png',
                                '/icons/spotify.png',
                                '/icons/discord.png',
                                '/icons/duolingo.png',
                                '/icons/disneyplus.png',
                                '/icons/chatgpt.png',
                                '/icons/canva.png',
                                '/icons/primevideo.png',
                                '/icons/strava.png',
                                '/icons/revolut.png',
                                '/icons/tinder.png',
                                '/icons/chess.png'
                            ]}
                            speed={40}
                        />
                    </div>
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
                        {(selectedPlan === 'lifetime' ? lifetimeFeatures : monthlyFeatures).map((feature, index) => {
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
                                    ? 'border-black bg-black/[0.02] ring-2 ring-black'
                                    : 'border-transparent bg-white hover:border-black/10'
                                }
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
                    {/* Apple Pay / Google Pay - Priority */}
                    {selectedPlan === 'lifetime' && showApplePay && (
                        <div className="mb-3">
                            <PaymentButtonWrapper
                                planType={selectedPlan as 'monthly' | 'lifetime'}
                                amount={currentPlanAmount}
                                label={`Pockret ${currentPlan?.name || 'Lifetime'}`}
                                onSuccess={handlePaymentSuccess}
                                onFallback={handleApplePayNotAvailable}
                                showApplePay={showApplePay}
                            />
                        </div>
                    )}

                    {/* Fallback / Regular checkout button */}
                    <button
                        onClick={handlePurchase}
                        disabled={isPending}
                        className={`
                            ${ppAgrandirHeading.className}
                            w-full py-4 rounded-xl bg-black text-white font-bold
                            flex items-center justify-center gap-2
                            hover:bg-black/90 transition-colors cursor-pointer
                            disabled:opacity-70 disabled:cursor-not-allowed
                        `}
                    >
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Redirecting to checkout...
                            </span>
                        ) : (
                            <span>
                                {selectedPlan === 'lifetime'
                                    ? 'Start recovering — $249'
                                    : 'Start recovering — $39/mo'
                                }
                            </span>
                        )}
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

                {/* Video Reviews */}
                <div className="-mx-6 mt-8">
                    <VideoReviewsCarousel compact />
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
