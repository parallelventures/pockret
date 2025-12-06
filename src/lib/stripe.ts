import { STRIPE_SECRET_KEY } from '@/lib/env.server';
import Stripe from 'stripe';

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    typescript: true,
});
