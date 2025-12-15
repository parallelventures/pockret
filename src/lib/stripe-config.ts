// Stripe Price Configuration
// These are the Stripe Price IDs for Pockret plans (LIVE MODE)

export const STRIPE_PRICES = {
    // POCKRET PRIME - $39/month subscription
    monthly: {
        priceId: 'price_1SegYnRrOEYBTmnjhcFwzbPn',
        productId: 'prod_TbuNPbAjkTklqU',
        name: 'Pockret Prime',
        price: 39,
        period: '/mo',
        mode: 'subscription' as const,
    },
    // POCKRET INFINITE - $249 one-time lifetime
    lifetime: {
        priceId: 'price_1SbmafRrOEYBTmnjrAJBvB2e',
        productId: 'prod_TYuPHHgJIHnJCP',
        name: 'Pockret Infinite',
        price: 249,
        period: 'one-time',
        mode: 'payment' as const, // one-time payment
    },
} as const;

export type PlanType = keyof typeof STRIPE_PRICES;
