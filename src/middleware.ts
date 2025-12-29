import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/lib/env'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    const pathname = request.nextUrl.pathname

    // Protected routes that require authentication
    const protectedRoutes = ['/dashboard', '/results', '/upgrade', '/profile', '/settings']
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    // Routes that are part of onboarding flow
    const onboardingRoutes = ['/onboarding', '/connect']
    const isOnboardingRoute = onboardingRoutes.some(route => pathname.startsWith(route))

    // Auth routes
    const authRoutes = ['/login', '/signup', '/forgot', '/auth']
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

    // If user is not authenticated and trying to access protected routes
    if (!user && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // If user is authenticated
    if (user) {
        // Check if user has completed onboarding
        const { data: userProfile } = await supabase
            .from('users')
            .select('onboarding_completed, has_connected_bank')
            .eq('id', user.id)
            .single()

        const hasCompletedOnboarding = userProfile?.onboarding_completed === true
        const hasConnectedBank = userProfile?.has_connected_bank === true

        // If user hasn't completed onboarding and trying to access protected routes
        if (!hasCompletedOnboarding && isProtectedRoute) {
            return NextResponse.redirect(new URL('/onboarding', request.url))
        }

        // If user completed onboarding but hasn't connected bank, redirect to connect
        if (hasCompletedOnboarding && !hasConnectedBank && isProtectedRoute) {
            return NextResponse.redirect(new URL('/connect', request.url))
        }

        // If user is on login/signup but already authenticated and onboarded
        if (isAuthRoute && hasCompletedOnboarding && hasConnectedBank) {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         * - api routes
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api).*)',
    ],
}
