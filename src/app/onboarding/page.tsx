'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import {
    CreditCard,
    RotateCcw,
    AlertTriangle,
    Scale,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';

const goals = [
    {
        id: 'cancel',
        icon: CreditCard,
        title: 'Cancel unused subscriptions',
        description: 'Stop paying for services you forgot about',
    },
    {
        id: 'refunds',
        icon: RotateCcw,
        title: 'Get refunds',
        description: 'Claim money back from recent charges',
    },
    {
        id: 'overcharges',
        icon: AlertTriangle,
        title: 'Find overcharges & billing errors',
        description: 'Detect when you\'re charged more than expected',
    },
    {
        id: 'settlements',
        icon: Scale,
        title: 'Claim settlements & class actions',
        description: 'Get your share of legal settlements',
    },
    {
        id: 'all',
        icon: CheckCircle2,
        title: 'All of the above',
        description: 'Maximize your recovery potential',
        highlight: true,
    },
];

export default function OnboardingGoalsPage() {
    const router = useRouter();
    const [selectedGoal, setSelectedGoal] = useState<string>('all');

    const handleContinue = () => {
        // Store goal in localStorage or send to API
        localStorage.setItem('onboarding_goal', selectedGoal);
        router.push('/onboarding/profile');
    };

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA] flex flex-col`}>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-black/5">
                <div className="h-full w-1/4 bg-black transition-all duration-500" />
            </div>

            <main className="flex-1 max-w-lg mx-auto w-full px-6 py-12">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-black/40 text-sm mb-2">Step 1 of 4</p>
                    <h1 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-2`}>
                        What's your goal?
                    </h1>
                    <p className="text-black/50">
                        We'll prioritize your scan results based on what matters most.
                    </p>
                </div>

                {/* Goals List */}
                <div className="space-y-3 mb-8">
                    {goals.map((goal) => {
                        const Icon = goal.icon;
                        const isSelected = selectedGoal === goal.id;

                        return (
                            <button
                                key={goal.id}
                                onClick={() => setSelectedGoal(goal.id)}
                                className={`
                                    w-full p-4 rounded-2xl border-2 text-left transition-all duration-200
                                    ${isSelected
                                        ? 'border-black bg-black/[0.02]'
                                        : 'border-transparent bg-white hover:border-black/10'
                                    }
                                    ${goal.highlight && !isSelected ? 'ring-1 ring-black/10' : ''}
                                `}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`
                                        w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                        ${isSelected ? 'bg-black' : 'bg-black/5'}
                                    `}>
                                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-black/60'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className={`${ppAgrandirHeading.className} font-bold text-black`}>
                                                {goal.title}
                                            </h3>
                                            {goal.highlight && (
                                                <span className="text-[10px] bg-black/10 text-black/60 px-2 py-0.5 rounded-full font-medium">
                                                    RECOMMENDED
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-black/50 text-sm mt-0.5">
                                            {goal.description}
                                        </p>
                                    </div>
                                    <div className={`
                                        w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
                                        ${isSelected ? 'border-black bg-black' : 'border-black/20'}
                                    `}>
                                        {isSelected && (
                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    className={`
                        ${ppAgrandirHeading.className}
                        w-full py-4 rounded-xl bg-black text-white font-bold
                        flex items-center justify-center gap-2
                        hover:bg-black/90 transition-colors cursor-pointer
                    `}
                >
                    <span>Continue</span>
                    <ChevronRight className="w-5 h-5" />
                </button>
            </main>
        </div>
    );
}
