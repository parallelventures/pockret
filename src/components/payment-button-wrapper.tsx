'use client';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe-client';
import { ApplePayButton } from './apple-pay-button';

interface PaymentButtonWrapperProps {
    planType: 'monthly' | 'lifetime';
    amount: number;
    label: string;
    onSuccess: () => void;
    onFallback: () => void;
    showApplePay: boolean;
}

export function PaymentButtonWrapper({
    planType,
    amount,
    label,
    onSuccess,
    onFallback,
    showApplePay,
}: PaymentButtonWrapperProps) {
    if (!showApplePay) {
        return null;
    }

    return (
        <Elements stripe={stripePromise}>
            <ApplePayButton
                planType={planType}
                amount={amount}
                label={label}
                onSuccess={onSuccess}
                onFallback={onFallback}
                className="w-full"
            />
        </Elements>
    );
}
