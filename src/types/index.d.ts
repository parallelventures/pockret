export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            users: {
                Row: {
                    id: string
                    email: string
                    country: string | null
                    plan: string
                    stripe_customer_id: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    email: string
                    country?: string | null
                    plan?: string
                    stripe_customer_id?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    country?: string | null
                    plan?: string
                    stripe_customer_id?: string | null
                    created_at?: string
                }
            }
            claims: {
                Row: {
                    id: string
                    user_id: string
                    country: string
                    amount: number
                    status: 'pending' | 'approved' | 'rejected'
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    country: string
                    amount: number
                    status?: 'pending' | 'approved' | 'rejected'
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    country?: string
                    amount?: number
                    status?: 'pending' | 'approved' | 'rejected'
                    created_at?: string
                }
            }
            subscriptions: {
                Row: {
                    id: string
                    user_id: string
                    status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete' | 'incomplete_expired' | 'paused'
                    price_id: string | null
                    quantity: number | null
                    cancel_at_period_end: boolean | null
                    created_at: string
                    current_period_start: string | null
                    current_period_end: string | null
                    ended_at: string | null
                    cancel_at: string | null
                    canceled_at: string | null
                    trial_start: string | null
                    trial_end: string | null
                    metadata: Json | null
                }
                Insert: {
                    id: string
                    user_id: string
                    status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete' | 'incomplete_expired' | 'paused'
                    price_id?: string | null
                    quantity?: number | null
                    cancel_at_period_end?: boolean | null
                    created_at?: string
                    current_period_start?: string | null
                    current_period_end?: string | null
                    ended_at?: string | null
                    cancel_at?: string | null
                    canceled_at?: string | null
                    trial_start?: string | null
                    trial_end?: string | null
                    metadata?: Json | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    status?: 'active' | 'trialing' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete' | 'incomplete_expired' | 'paused'
                    price_id?: string | null
                    quantity?: number | null
                    cancel_at_period_end?: boolean | null
                    created_at?: string
                    current_period_start?: string | null
                    current_period_end?: string | null
                    ended_at?: string | null
                    cancel_at?: string | null
                    canceled_at?: string | null
                    trial_start?: string | null
                    trial_end?: string | null
                    metadata?: Json | null
                }
            }
        }
    }
}
