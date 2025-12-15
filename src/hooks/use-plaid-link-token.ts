'use client';

import { useCallback, useState } from 'react';
import { plaidFunctions } from '@/lib/plaid-edge-functions';

interface UsePlaidLinkTokenOptions {
    onSuccess?: (linkToken: string) => void;
    onError?: (error: Error) => void;
}

export function usePlaidLinkToken(options: UsePlaidLinkTokenOptions = {}) {
    const [linkToken, setLinkToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const generateLinkToken = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Uses Supabase Edge Function via plaidFunctions helper
            const data = await plaidFunctions.createLinkToken();
            setLinkToken(data.link_token);
            options.onSuccess?.(data.link_token);
            return data.link_token;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            options.onError?.(error);
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [options]);

    return {
        linkToken,
        isLoading,
        error,
        generateLinkToken,
    };
}
