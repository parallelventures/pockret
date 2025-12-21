'use client';

import { useState, useEffect } from 'react';
import {
    PaymentRequestButtonElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { PaymentRequest } from '@stripe/stripe-js';

interface ApplePayButtonProps {
    planType: 'monthly' | 'lifetime';
    amount: number;
    label: string;
    onSuccess: () => void;
    onFallback: () => void;
    className?: string;
}

export function ApplePayButton({
    planType,
    amount,
    label,
    onSuccess,
    onFallback,
    className = '',
}: ApplePayButtonProps) {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);
    const [canMakePayment, setCanMakePayment] = useState<boolean | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (!stripe) return;

        // Create Payment Request
        const pr = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: label,
                amount: amount, // in cents
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        // Check if Apple Pay / Google Pay is available
        pr.canMakePayment().then((result) => {
            if (result) {
                setPaymentRequest(pr);
                setCanMakePayment(true);
            } else {
                setCanMakePayment(false);
            }
        });

        // Handle payment method
        pr.on('paymentmethod', async (ev) => {
            setIsProcessing(true);

            try {
                // Create PaymentIntent on the server
                const response = await fetch('/api/stripe/create-payment-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ planType }),
                });

                const data = await response.json();

                if (data.useCheckout) {
                    // Subscriptions need checkout
                    ev.complete('fail');
                    onFallback();
                    return;
                }

                if (!data.clientSecret) {
                    ev.complete('fail');
                    console.error('No client secret');
                    return;
                }

                // Confirm the payment
                const { error, paymentIntent } = await stripe.confirmCardPayment(
                    data.clientSecret,
                    { payment_method: ev.paymentMethod.id },
                    { handleActions: false }
                );

                if (error) {
                    ev.complete('fail');
                    console.error('Payment failed:', error);
                } else if (paymentIntent.status === 'requires_action') {
                    ev.complete('success');
                    // Handle 3D Secure if needed
                    const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret);
                    if (confirmError) {
                        console.error('3DS failed:', confirmError);
                    } else {
                        onSuccess();
                    }
                } else {
                    ev.complete('success');
                    onSuccess();
                }
            } catch (error) {
                ev.complete('fail');
                console.error('Payment error:', error);
            } finally {
                setIsProcessing(false);
            }
        });

    }, [stripe, amount, label, planType, onSuccess, onFallback]);

    // Still loading
    if (canMakePayment === null) {
        return null;
    }

    // Apple Pay / Google Pay not available - show nothing (parent will handle fallback)
    if (!canMakePayment || !paymentRequest) {
        return null;
    }

    return (
        <div className={className}>
            {isProcessing ? (
                <div className="w-full h-12 bg-black rounded-xl flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            ) : (
                <PaymentRequestButtonElement
                    options={{
                        paymentRequest,
                        style: {
                            paymentRequestButton: {
                                type: 'buy',
                                theme: 'dark',
                                height: '48px',
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}
