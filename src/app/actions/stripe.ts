'use server';

import { createClient } from '@/lib/supabase-server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createCheckoutSession(priceId: string) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    // 1. Get or create Stripe Customer
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

    // 2. Create Checkout Session
    const origin = (await headers()).get('origin') || 'http://localhost:3000'; // Fallback for local dev

    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${origin}/dashboard?success=true`,
        cancel_url: `${origin}/dashboard?canceled=true`,
        client_reference_id: user.id,
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
    });

    if (!session.url) {
        throw new Error('Failed to create checkout session');
    }

    redirect(session.url);
}

export async function createCustomerPortalSession() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    const { data: userData } = await supabaseAdmin
        .from('users')
        .select('stripe_customer_id')
        .eq('id', user.id)
        .single();

    if (!userData?.stripe_customer_id) {
        throw new Error('No Stripe customer found');
    }

    const origin = (await headers()).get('origin') || 'http://localhost:3000';

    const session = await stripe.billingPortal.sessions.create({
        customer: userData.stripe_customer_id,
        return_url: `${origin}/dashboard`,
    });

    redirect(session.url);
}
