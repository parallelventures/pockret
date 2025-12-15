'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ppAgrandirHeading, sfProDisplay } from '@/app/fonts';
import { ChevronRight, ChevronLeft, Zap, Gift, Smartphone, Building2 } from 'lucide-react';

const painPoints = [
    { id: 'renewals', icon: Zap, label: 'Surprise renewals', description: 'Charges you didn\'t expect' },
    { id: 'forgotten', icon: Gift, label: 'Forgotten subscriptions', description: 'Services you stopped using' },
    { id: 'appstore', icon: Smartphone, label: 'App Store charges', description: 'iOS/Android in-app purchases' },
    { id: 'fees', icon: Building2, label: 'Bank fees & overcharges', description: 'Hidden fees and errors' },
];

export default function OnboardingProfilePage() {
    const router = useRouter();
    const [subscriptionCount, setSubscriptionCount] = useState(10);
    const [selectedPain, setSelectedPain] = useState<string>('forgotten');

    const handleContinue = () => {
        // Store profile in localStorage or send to API
        localStorage.setItem('onboarding_profile', JSON.stringify({
            subscriptionCount,
            painPoint: selectedPain,
        }));
        router.push('/onboarding/connect');
    };

    const handleBack = () => {
        router.push('/onboarding');
    };

    const getSliderLabel = (value: number) => {
        if (value === 0) return '0';
        if (value >= 30) return '30+';
        return value.toString();
    };

    return (
        <div className={`${sfProDisplay.className} min-h-screen bg-[#FAFAFA] flex flex-col`}>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-black/5">
                <div className="h-full w-2/4 bg-black transition-all duration-500" />
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
                    <p className="text-black/40 text-sm mb-2">Step 2 of 4</p>
                    <h1 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-2`}>
                        Your money profile
                    </h1>
                    <p className="text-black/50">
                        Help us understand your subscription habits.
                    </p>
                </div>

                {/* Subscription Count Slider */}
                <div className="bg-white rounded-2xl p-6 border border-black/5 mb-6">
                    <label className="block mb-4">
                        <span className={`${ppAgrandirHeading.className} font-bold text-black`}>
                            How many subscriptions do you think you have?
                        </span>
                    </label>

                    <div className="relative mb-4">
                        <input
                            type="range"
                            min="0"
                            max="30"
                            value={subscriptionCount}
                            onChange={(e) => setSubscriptionCount(parseInt(e.target.value))}
                            className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:w-6
                                [&::-webkit-slider-thumb]:h-6
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:bg-black
                                [&::-webkit-slider-thumb]:cursor-pointer
                                [&::-webkit-slider-thumb]:shadow-lg
                            "
                        />
                    </div>

                    <div className="flex justify-between text-sm text-black/40">
                        <span>0</span>
                        <span className={`${ppAgrandirHeading.className} text-2xl font-bold text-black`}>
                            {getSliderLabel(subscriptionCount)}
                        </span>
                        <span>30+</span>
                    </div>

                    {subscriptionCount >= 10 && (
                        <p className="text-black/50 text-sm mt-4 p-3 bg-black/[0.02] rounded-xl">
                            💡 Users with {subscriptionCount}+ subscriptions typically find <strong>$50-200/mo</strong> in savings.
                        </p>
                    )}
                </div>

                {/* Pain Point Selection */}
                <div className="bg-white rounded-2xl p-6 border border-black/5 mb-8">
                    <label className="block mb-4">
                        <span className={`${ppAgrandirHeading.className} font-bold text-black`}>
                            What hurts most?
                        </span>
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        {painPoints.map((pain) => {
                            const Icon = pain.icon;
                            const isSelected = selectedPain === pain.id;

                            return (
                                <button
                                    key={pain.id}
                                    onClick={() => setSelectedPain(pain.id)}
                                    className={`
                                        p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer
                                        ${isSelected
                                            ? 'border-black bg-black/[0.02]'
                                            : 'border-transparent bg-black/[0.02] hover:border-black/10'
                                        }
                                    `}
                                >
                                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-black' : 'text-black/40'}`} />
                                    <p className={`text-sm font-medium ${isSelected ? 'text-black' : 'text-black/70'}`}>
                                        {pain.label}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
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
