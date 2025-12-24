/**
 * One-time script to run Stripe Sync Engine migrations
 * This creates the 'stripe' schema with all necessary tables
 * 
 * Usage:
 *   npx tsx supabase/run-stripe-migrations.ts
 * 
 * Required environment variable:
 *   DATABASE_URL - Your Supabase direct database connection string
 */

import { runMigrations } from '@supabase/stripe-sync-engine'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
    console.error('❌ DATABASE_URL environment variable is required')
    console.error('   Format: postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres')
    process.exit(1)
}

; (async () => {
    console.log('🚀 Running Stripe Sync Engine migrations...')
    console.log('   This will create the "stripe" schema with all necessary tables.')

    try {
        await runMigrations({
            databaseUrl,
            schema: 'stripe',
            logger: console,
        })

        console.log('')
        console.log('✅ Stripe schema migrations completed successfully!')
        console.log('')
        console.log('Next steps:')
        console.log('  1. Deploy the Edge Function: supabase functions deploy stripe-sync')
        console.log('  2. Set secrets: supabase secrets set --env-file ./supabase/.env')
        console.log('  3. Update webhook endpoint in Stripe Dashboard')
    } catch (error) {
        console.error('❌ Migration failed:', error)
        process.exit(1)
    }
})()
