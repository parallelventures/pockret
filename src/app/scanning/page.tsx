'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import {
    Search,
    CreditCard,
    AlertTriangle,
    Scale,
    CheckCircle2,
    Loader2
} from 'lucide-react';

const scanSteps = [
    { icon: Search, text: 'Detecting recurring payments...', duration: 2000 },
    { icon: CreditCard, text: 'Identifying unused subscriptions...', duration: 2500 },
    { icon: AlertTriangle, text: 'Checking refund eligibility signals...', duration: 2000 },
    { icon: Scale, text: 'Matching open settlements you may qualify for...', duration: 2500 },
];

export default function ScanningPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [showTeaser, setShowTeaser] = useState(false);
    const [teaserData, setTeaserData] = useState({ count: 0, hasInactive: false });

    useEffect(() => {
        // Progress through steps
        const progressScan = async () => {
            for (let i = 0; i < scanSteps.length; i++) {
                setCurrentStep(i);

                // Show teaser at step 2
                if (i === 1) {
                    setTimeout(() => {
                        setTeaserData({ count: 3 + Math.floor(Math.random() * 5), hasInactive: true });
                        setShowTeaser(true);
                    }, 1500);
                }

                await new Promise(resolve => setTimeout(resolve, scanSteps[i].duration));
                setCompletedSteps(prev => [...prev, i]);
            }

            // Navigate to results after completion
            setTimeout(() => {
                router.push('/results');
            }, 1000);
        };

        progressScan();
    }, [router]);

    const progress = ((completedSteps.length) / scanSteps.length) * 100;

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA] flex flex-col`}>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-black/5">
                <div
                    className="h-full bg-black transition-all duration-500"
                    style={{ width: `${75 + (progress * 0.25)}%` }}
                />
            </div>

            <main className="flex-1 max-w-lg mx-auto w-full px-6 py-12 flex flex-col items-center justify-center">
                {/* Animated Scanner */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-black/10 rounded-full" />

                    {/* Progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="60"
                            fill="none"
                            stroke="black"
                            strokeWidth="4"
                            strokeDasharray={`${progress * 3.77} 377`}
                            className="transition-all duration-500"
                        />
                    </svg>

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-12 h-12 text-black animate-spin" />
                    </div>
                </div>

                {/* Header */}
                <h1 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-2 text-center`}>
                    Scanning your accounts
                </h1>
                <p className="text-black/50 mb-8 text-center">
                    This usually takes about a minute...
                </p>

                {/* Steps List */}
                <div className="w-full space-y-3 mb-8">
                    {scanSteps.map((step, index) => {
                        const Icon = step.icon;
                        const isCompleted = completedSteps.includes(index);
                        const isCurrent = currentStep === index && !isCompleted;

                        return (
                            <div
                                key={index}
                                className={`
                                    flex items-center gap-3 p-4 rounded-xl transition-all duration-300
                                    ${isCompleted ? 'bg-black/[0.02]' : isCurrent ? 'bg-white border border-black/10' : 'opacity-40'}
                                `}
                            >
                                <div className={`
                                    w-8 h-8 rounded-lg flex items-center justify-center
                                    ${isCompleted ? 'bg-black' : 'bg-black/10'}
                                `}>
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    ) : isCurrent ? (
                                        <Loader2 className="w-4 h-4 text-black animate-spin" />
                                    ) : (
                                        <Icon className="w-4 h-4 text-black/40" />
                                    )}
                                </div>
                                <p className={`text-sm ${isCompleted || isCurrent ? 'text-black' : 'text-black/40'}`}>
                                    {step.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Mid-scan Teaser */}
                {showTeaser && (
                    <div className="w-full bg-black text-white rounded-2xl p-4 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <p className={`${ppAgrandirHeading.className} font-bold`}>
                                    Found {teaserData.count} recurring charges already
                                </p>
                                {teaserData.hasInactive && (
                                    <p className="text-white/60 text-sm">
                                        One looks inactive...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
