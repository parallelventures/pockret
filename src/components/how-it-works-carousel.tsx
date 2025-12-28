'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { ppAgrandirHeading } from '@/app/fonts'

interface Step {
    title: string
    description: string
    badge?: React.ReactNode
    media: {
        type: 'video' | 'image' | 'placeholder'
        src?: string
        alt?: string
    }
}

const steps: Step[] = [
    {
        title: 'Connect your bank',
        description: 'Securely link your accounts through Plaid. We use the same bank-level encryption that Venmo, Chime, and 12,000+ financial institutions trust.',
        badge: (
            <Link
                href="https://plaid.com"
                target="_blank"
                className="inline-flex items-center gap-3 pl-3 pr-5 py-2 bg-black/[0.03] rounded-full hover:bg-black/[0.06] transition-colors"
            >
                <img src="/Plaid.svg" alt="Plaid" className="h-8 md:h-10" />
                <span className="text-xs md:text-sm text-black/50">Secured by Plaid</span>
            </Link>
        ),
        media: {
            type: 'video',
            src: 'https://res.cloudinary.com/do3c8fqwu/video/upload/v1765758895/Area_epsuug.mp4'
        }
    },
    {
        title: 'We scan everything',
        description: 'Our AI analyzes your transaction history to find hidden refunds, forgotten subscriptions, and class action settlements.',
        badge: (
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-black/5 rounded-full text-xs md:text-sm text-black/60">Refunds</span>
                <span className="px-3 py-1.5 bg-black/5 rounded-full text-xs md:text-sm text-black/60">Subscriptions</span>
                <span className="px-3 py-1.5 bg-black/5 rounded-full text-xs md:text-sm text-black/60">Settlements</span>
            </div>
        ),
        media: {
            type: 'image',
            src: 'https://res.cloudinary.com/do3c8fqwu/image/upload/v1765815389/Video2_rqupsi.png',
            alt: 'Scan visualization'
        }
    },
    {
        title: 'Recover in one click',
        description: 'Cancel subscriptions, request refunds, file claims. Just tap and we handle the rest. Money goes directly to your bank.',
        badge: (
            <div className="flex items-center gap-2 text-xs md:text-sm text-black/40">
                <CheckCircle2 className="w-4 h-4" />
                <span>No paperwork • No hassle</span>
            </div>
        ),
        media: {
            type: 'placeholder'
        }
    }
]

export function HowItWorksCarousel() {
    const [currentStep, setCurrentStep] = useState(0)
    const [prevStep, setPrevStep] = useState(0)
    const [direction, setDirection] = useState(1)
    const [isAnimating, setIsAnimating] = useState(false)

    const goToStep = useCallback((index: number, dir?: number) => {
        if (isAnimating || index === currentStep) return
        setIsAnimating(true)
        const newDirection = dir ?? (index > currentStep ? 1 : -1)
        setDirection(newDirection)
        setPrevStep(currentStep)
        setCurrentStep(index)
        setTimeout(() => setIsAnimating(false), 600)
    }, [currentStep, isAnimating])

    const goToPrevious = useCallback(() => {
        const newIndex = currentStep === 0 ? steps.length - 1 : currentStep - 1
        goToStep(newIndex, -1)
    }, [currentStep, goToStep])

    const goToNext = useCallback(() => {
        const newIndex = currentStep === steps.length - 1 ? 0 : currentStep + 1
        goToStep(newIndex, 1)
    }, [currentStep, goToStep])

    const currentStepData = steps[currentStep]

    return (
        <div className="relative w-full">
            {/* Main content area */}
            <div className="relative bg-white rounded-2xl lg:rounded-[32px] overflow-hidden">

                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:flex-row min-h-[520px]">
                    {/* Left side - Text content */}
                    <div className="flex-1 flex flex-col justify-center relative p-12">
                        {steps.map((step, index) => {
                            const isActive = index === currentStep
                            const wasActive = index === prevStep

                            const getTransform = () => {
                                if (isActive) return 'translateX(0)'
                                if (wasActive) {
                                    return direction === 1 ? 'translateX(-40px)' : 'translateX(40px)'
                                }
                                return direction === 1 ? 'translateX(40px)' : 'translateX(-40px)'
                            }

                            return (
                                <div
                                    key={index}
                                    className="absolute inset-0 p-12 flex flex-col justify-center"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: getTransform(),
                                        filter: isActive ? 'blur(0px)' : 'blur(6px)',
                                        transition: 'opacity 500ms ease-out, transform 500ms ease-out, filter 500ms ease-out',
                                        pointerEvents: isActive ? 'auto' : 'none'
                                    }}
                                >
                                    <span className={`${ppAgrandirHeading.className} text-5xl font-bold text-black/10 mb-4`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className={`${ppAgrandirHeading.className} text-4xl font-bold text-black mb-4 leading-tight`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-black/60 text-lg leading-relaxed mb-6 max-w-md">
                                        {step.description}
                                    </p>
                                    {step.badge && (
                                        <div className="mt-4">
                                            {step.badge}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Right side - Media */}
                    <div className="flex-[1.2] relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 m-6 flex items-center justify-center transition-all ${index === currentStep
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-[0.98]'
                                    }`}
                                style={{
                                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                    transitionDuration: '600ms'
                                }}
                            >
                                {step.media.type === 'video' && step.media.src && (
                                    <div className="w-full h-full rounded-2xl overflow-hidden">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src={step.media.src} type="video/mp4" />
                                        </video>
                                    </div>
                                )}
                                {step.media.type === 'image' && step.media.src && (
                                    <div className="w-full h-full rounded-2xl overflow-hidden">
                                        <img src={step.media.src} alt={step.media.alt || ''} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                {step.media.type === 'placeholder' && (
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                                            </div>
                                            <p className="text-black/40 text-sm font-medium">One-click recovery</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Navigation arrows */}
                    <div className="absolute bottom-10 left-12 flex items-center gap-2 z-20">
                        <button
                            onClick={goToPrevious}
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center hover:bg-white hover:scale-105 transition-all active:scale-95 cursor-pointer"
                            aria-label="Previous step"
                        >
                            <ChevronLeft className="w-5 h-5 text-black/70" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-black/5 flex items-center justify-center hover:bg-white hover:scale-105 transition-all active:scale-95 cursor-pointer"
                            aria-label="Next step"
                        >
                            <ChevronRight className="w-5 h-5 text-black/70" />
                        </button>
                    </div>
                </div>

                {/* Mobile Layout - Stacked */}
                <div className="lg:hidden">
                    {/* Media Section - Fixed aspect ratio */}
                    <div className="relative aspect-[4/3] w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 p-4 transition-all ${index === currentStep
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-[0.98]'
                                    }`}
                                style={{
                                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                    transitionDuration: '600ms'
                                }}
                            >
                                {step.media.type === 'video' && step.media.src && (
                                    <div className="w-full h-full rounded-xl overflow-hidden">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src={step.media.src} type="video/mp4" />
                                        </video>
                                    </div>
                                )}
                                {step.media.type === 'image' && step.media.src && (
                                    <div className="w-full h-full rounded-xl overflow-hidden">
                                        <img src={step.media.src} alt={step.media.alt || ''} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                {step.media.type === 'placeholder' && (
                                    <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                                            </div>
                                            <p className="text-black/40 text-sm font-medium">One-click recovery</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Text Content Section */}
                    <div className="p-6 pb-20">
                        <span className={`${ppAgrandirHeading.className} text-3xl font-bold text-black/10 mb-2 block`}>
                            {String(currentStep + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-3 leading-tight`}>
                            {currentStepData.title}
                        </h3>
                        <p className="text-black/60 text-sm leading-relaxed mb-4">
                            {currentStepData.description}
                        </p>
                        {currentStepData.badge && (
                            <div className="mt-2">
                                {currentStepData.badge}
                            </div>
                        )}
                    </div>

                    {/* Mobile Navigation - Bottom of card */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
                        <button
                            onClick={goToPrevious}
                            className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                            aria-label="Previous step"
                        >
                            <ChevronLeft className="w-4 h-4 text-black/70" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                            aria-label="Next step"
                        >
                            <ChevronRight className="w-4 h-4 text-black/70" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Pagination dots - centered below */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {steps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToStep(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${index === currentStep
                            ? 'bg-black'
                            : 'bg-black/20 hover:bg-black/40'
                            }`}
                        aria-label={`Go to step ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
