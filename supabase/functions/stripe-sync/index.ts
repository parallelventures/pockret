// Stripe Sync Engine Edge Function
// This function receives Stripe webhooks and syncs them to PostgreSQL
import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { StripeSync } from 'npm:@supabase/stripe-sync-engine@0.48.0'

// Initialize StripeSync with database connection and Stripe credentials
const stripeSync = new StripeSync({
    poolConfig: {
        connectionString: Deno.env.get('DATABASE_URL')!,
        max: 20,
        keepAlive: true,
    },
    stripeWebhookSecret: Deno.env.get('STRIPE_WEBHOOK_SECRET')!,
    stripeSecretKey: Deno.env.get('STRIPE_SECRET_KEY')!,
    // Automatically fetch related entities (e.g., customer for subscription)
    backfillRelatedEntities: true,
    // Expand lists like subscription items
    autoExpandLists: true,
    maxPostgresConnections: 5,
})

Deno.serve(async (req) => {
    try {
        // Extract raw body as Uint8Array (required for signature verification)
        const rawBody = new Uint8Array(await req.arrayBuffer())
        const stripeSignature = req.headers.get('stripe-signature')

        if (!stripeSignature) {
            return new Response(
                JSON.stringify({ error: 'Missing stripe-signature header' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            )
        }

        // Process the webhook - this handles verification and database sync
        await stripeSync.processWebhook(rawBody, stripeSignature)

        return new Response(
            JSON.stringify({ received: true }),
            { status: 202, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        console.error('Stripe webhook error:', error)
        return new Response(
            JSON.stringify({ error: 'Webhook processing failed' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        )
    }
})
