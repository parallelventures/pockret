// Shared Plaid configuration for Edge Functions
// Secrets are accessed via Deno.env.get() - configure with: supabase secrets set PLAID_CLIENT_ID=xxx PLAID_SECRET=xxx PLAID_ENV=sandbox

// Plaid API base URLs
const PLAID_BASE_URLS: Record<string, string> = {
    sandbox: 'https://sandbox.plaid.com',
    development: 'https://development.plaid.com',
    production: 'https://production.plaid.com',
};

// Products and country codes
export const PLAID_PRODUCTS = ['transactions'];
export const PLAID_COUNTRY_CODES = ['US'];

// Get config at runtime (not at import time)
function getPlaidConfig() {
    const clientId = Deno.env.get('PLAID_CLIENT_ID') || '';
    const secret = Deno.env.get('PLAID_SECRET') || '';
    const env = (Deno.env.get('PLAID_ENV') || 'sandbox').toLowerCase();
    const baseUrl = PLAID_BASE_URLS[env] || PLAID_BASE_URLS.sandbox;

    return { clientId, secret, env, baseUrl };
}

// Helper to make Plaid API requests
export async function plaidRequest<T>(
    endpoint: string,
    body: Record<string, unknown>
): Promise<T> {
    const config = getPlaidConfig();

    // Debug logging - shows masked values
    console.log('Plaid Config Debug:', {
        clientIdLength: config.clientId?.length || 0,
        clientIdPrefix: config.clientId?.substring(0, 4) || 'empty',
        secretLength: config.secret?.length || 0,
        secretPrefix: config.secret?.substring(0, 4) || 'empty',
        env: config.env,
        baseUrl: config.baseUrl,
    });

    if (!config.clientId || !config.secret) {
        throw new Error('Plaid credentials not configured. Use: supabase secrets set PLAID_CLIENT_ID=xxx PLAID_SECRET=xxx');
    }

    console.log(`Making Plaid request to: ${config.baseUrl}${endpoint}`);

    const response = await fetch(`${config.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: config.clientId,
            secret: config.secret,
            ...body,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Plaid API error:', data);
        throw new Error(data.error_message || `Plaid API error: ${response.status}`);
    }

    return data as T;
}

// Plaid API response types
export interface LinkTokenResponse {
    link_token: string;
    expiration: string;
    request_id: string;
}

export interface TokenExchangeResponse {
    access_token: string;
    item_id: string;
    request_id: string;
}

export interface AccountsResponse {
    accounts: PlaidAccount[];
    item: { item_id: string };
    request_id: string;
}

export interface PlaidAccount {
    account_id: string;
    name: string;
    official_name: string | null;
    type: string;
    subtype: string | null;
    mask: string | null;
    balances: {
        current: number | null;
        available: number | null;
        iso_currency_code: string | null;
    };
}

export interface TransactionsSyncResponse {
    added: PlaidTransaction[];
    modified: PlaidTransaction[];
    removed: { transaction_id: string }[];
    next_cursor: string;
    has_more: boolean;
    request_id: string;
}

export interface PlaidTransaction {
    transaction_id: string;
    account_id: string;
    amount: number;
    iso_currency_code: string | null;
    date: string;
    name: string;
    merchant_name: string | null;
    category: string[] | null;
    pending: boolean;
    payment_channel: string;
    logo_url: string | null;
}

export interface RecurringTransactionsResponse {
    inflow_streams: RecurringStream[];
    outflow_streams: RecurringStream[];
    request_id: string;
}

export interface RecurringStream {
    stream_id: string;
    account_id: string;
    description: string;
    merchant_name: string | null;
    average_amount: { amount: number; iso_currency_code: string } | null;
    last_amount: { amount: number; iso_currency_code: string } | null;
    frequency: string;
    category: string[] | null;
    first_date: string;
    last_date: string;
    is_active: boolean;
    status: string;
}

export interface ItemRemoveResponse {
    request_id: string;
}
