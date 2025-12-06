import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { STRIPE_WEBHOOK_SECRET } from '@/lib/env.server';
import Stripe from 'stripe';

const relevantEvents = new Set([
    'checkout.session.completed',
    'customer.subscription.updated',
    'customer.subscription.deleted',
]);

export async function POST(req: Request) {
    const body = await req.text();
    const sig = (await headers()).get('Stripe-Signature') as string;
    const webhookSecret = STRIPE_WEBHOOK_SECRET;
    let event: Stripe.Event;

    try {
        if (!sig || !webhookSecret) return new Response('Webhook secret or signature missing', { status: 400 });
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err: any) {
        console.error(`❌ Error message: ${err.message}`);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (relevantEvents.has(event.type)) {
        try {
            switch (event.type) {
                case 'checkout.session.completed':
                    const checkoutSession = event.data.object as Stripe.Checkout.Session;
                    if (checkoutSession.mode === 'subscription') {
                        const subscriptionId = checkoutSession.subscription as string;
                        const customerId = checkoutSession.customer as string;
                        const userId = checkoutSession.client_reference_id;

                        if (userId) {
                            // 1. Link customer to user
                            await supabaseAdmin
                                .from('users')
                                .update({ stripe_customer_id: customerId } as any)
                                .eq('id', userId);

                            // 2. Retrieve subscription details
                            const subscription = await stripe.subscriptions.retrieve(subscriptionId) as Stripe.Subscription;

                            // 3. Insert/Update subscription in Supabase
                            await supabaseAdmin.from('subscriptions').upsert({
                                id: subscription.id,
                                user_id: userId,
                                status: subscription.status,
                                price_id: subscription.items.data[0].price.id,
                                quantity: subscription.items.data[0].quantity,
                                cancel_at_period_end: subscription.cancel_at_period_end,
                                cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000).toISOString() : null,
                                canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
                                current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
                                current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
                                created_at: new Date(subscription.created * 1000).toISOString(),
                                ended_at: subscription.ended_at ? new Date(subscription.ended_at * 1000).toISOString() : null,
                                trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
                                trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
                            } as any);
                        }
                    }
                    break;

                case 'customer.subscription.updated':
                case 'customer.subscription.deleted':
                    const subscription = event.data.object as Stripe.Subscription;

                    // We need to find the user_id associated with this customer
                    const { data: userData } = await supabaseAdmin
                        .from('users')
                        .select('id')
                        .eq('stripe_customer_id', subscription.customer as string)
                        .single();

                    if (userData?.id) {
                        await supabaseAdmin.from('subscriptions').upsert({
                            id: subscription.id,
                            user_id: userData.id,
                            status: subscription.status,
                            price_id: subscription.items.data[0].price.id,
                            quantity: subscription.items.data[0].quantity,
                            cancel_at_period_end: subscription.cancel_at_period_end,
                            cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000).toISOString() : null,
                            canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
                            current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
                            current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
                            created_at: new Date(subscription.created * 1000).toISOString(),
                            ended_at: subscription.ended_at ? new Date(subscription.ended_at * 1000).toISOString() : null,
                            trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
                            trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
                        } as any);
                    }
                    break;
            }
        } catch (error) {
            console.error(error);
            return new Response('Webhook handler failed. View logs.', { status: 400 });
        }
    }

    return NextResponse.json({ received: true });
}
