import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { createClient } from '@/lib/supabase-server';
import { STRIPE_PRICES } from '@/lib/stripe-config';

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { planType } = await req.json();

        if (!planType || !['monthly', 'lifetime'].includes(planType)) {
            return NextResponse.json({ error: 'Invalid plan type' }, { status: 400 });
        }

        const plan = STRIPE_PRICES[planType as keyof typeof STRIPE_PRICES];

        // Get or create Stripe customer
        const { data: userData } = await supabaseAdmin
            .from('users')
            .select('stripe_customer_id, email')
            .eq('id', user.id)
            .single();

        let customerId = userData?.stripe_customer_id;

        if (!customerId) {
            const customer = await stripe.customers.create({
                email: userData?.email || user.email,
                metadata: {
                    supabaseUUID: user.id,
                },
            });
            customerId = customer.id;

            await supabaseAdmin
                .from('users')
                .update({ stripe_customer_id: customerId })
                .eq('id', user.id);
        }

        // For subscriptions, we need to handle differently
        // Payment Request Button works best with one-time payments
        // For subscriptions, we'll use Checkout Sessions as fallback
        if (plan.mode === 'subscription') {
            return NextResponse.json({
                useCheckout: true,
                message: 'Subscriptions require Checkout'
            });
        }

        // Create PaymentIntent for one-time payments
        const paymentIntent = await stripe.paymentIntents.create({
            amount: plan.price * 100, // Convert to cents
            currency: 'usd',
            customer: customerId,
            metadata: {
                userId: user.id,
                planType: planType,
                productId: plan.productId,
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
            amount: plan.price * 100,
            currency: 'usd',
            label: plan.name,
        });

    } catch (error: any) {
        console.error('PaymentIntent creation error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create payment intent' },
            { status: 500 }
        );
    }
}
