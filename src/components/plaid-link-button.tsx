'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLinkOnExit } from 'react-plaid-link';
import { Building2, Link2, Loader2, Plus, CheckCircle2 } from 'lucide-react';
import { plaidFunctions } from '@/lib/plaid-edge-functions';

interface PlaidLinkButtonProps {
    onSuccess?: () => void;
    onExit?: () => void;
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'outline' | 'minimal';
}

export function PlaidLinkButton({
    onSuccess,
    onExit,
    className = '',
    children,
    variant = 'default',
}: PlaidLinkButtonProps) {
    const [linkToken, setLinkToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isExchanging, setIsExchanging] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Generate link token on mount
    useEffect(() => {
        const generateToken = async () => {
            setIsLoading(true);
            try {
                // Uses Supabase Edge Function via plaidFunctions helper
                const data = await plaidFunctions.createLinkToken();
                setLinkToken(data.link_token);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to initialize');
            } finally {
                setIsLoading(false);
            }
        };

        generateToken();
    }, []);

    const handleSuccess: PlaidLinkOnSuccess = useCallback(
        async (publicToken, metadata) => {
            setIsExchanging(true);
            setError(null);

            try {
                // Uses Supabase Edge Function via plaidFunctions helper
                const result = await plaidFunctions.exchangeToken(publicToken, metadata);

                // Automatically sync transactions after successful connection
                console.log('Bank connected, syncing transactions...');
                try {
                    const syncResult = await plaidFunctions.syncTransactions(result.item_id);
                    console.log('Transactions synced:', syncResult);
                } catch (syncError) {
                    // Don't fail the whole flow if sync fails - it can be retried
                    console.error('Initial transaction sync failed:', syncError);
                }

                setIsSuccess(true);
                onSuccess?.();

                // Reset success state after animation
                setTimeout(() => setIsSuccess(false), 2000);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to link account');
            } finally {
                setIsExchanging(false);
            }
        },
        [onSuccess]
    );

    const handleExit: PlaidLinkOnExit = useCallback(
        (err) => {
            if (err) {
                console.error('Plaid Link exit with error:', err);
            }
            onExit?.();
        },
        [onExit]
    );

    const config: PlaidLinkOptions = {
        token: linkToken,
        onSuccess: handleSuccess,
        onExit: handleExit,
    };

    const { open, ready } = usePlaidLink(config);

    const isDisabled = !ready || isLoading || isExchanging || !linkToken;

    const variantStyles = {
        default: `
      bg-gradient-to-r from-emerald-500 to-teal-500 
      hover:from-emerald-600 hover:to-teal-600 
      text-white shadow-lg shadow-emerald-500/25
      hover:shadow-emerald-500/40
    `,
        outline: `
      border-2 border-neutral-700 
      hover:border-emerald-500 hover:bg-emerald-500/10
      text-neutral-200
    `,
        minimal: `
      bg-neutral-800/50 hover:bg-neutral-700/50
      text-neutral-300
    `,
    };

    return (
        <div className="flex flex-col gap-2">
            <button
                onClick={() => open()}
                disabled={isDisabled}
                className={`
          relative flex items-center justify-center gap-2 
          px-6 py-3 rounded-xl font-medium cursor-pointer
          transition-all duration-300 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${className}
        `}
            >
                {isLoading || isExchanging ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{isExchanging ? 'Linking...' : 'Loading...'}</span>
                    </>
                ) : isSuccess ? (
                    <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Account Linked!</span>
                    </>
                ) : (
                    <>
                        {children || (
                            <>
                                <Building2 className="w-5 h-5" />
                                <span>Link Bank Account</span>
                            </>
                        )}
                    </>
                )}
            </button>

            {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
            )}
        </div>
    );
}

// Compact version for adding additional accounts
export function AddAccountButton({
    onSuccess,
    className = '',
}: {
    onSuccess?: () => void;
    className?: string;
}) {
    return (
        <PlaidLinkButton
            onSuccess={onSuccess}
            variant="outline"
            className={`px-4 py-2 text-sm ${className}`}
        >
            <Plus className="w-4 h-4" />
            <span>Add Account</span>
        </PlaidLinkButton>
    );
}
