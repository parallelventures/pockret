'use client'

interface LiquidGlassProps {
    children: React.ReactNode
    className?: string
}

export function LiquidGlass({
    children,
    className = '',
}: LiquidGlassProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Simple glass blur */}
            <div
                className="absolute inset-0"
                style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    background: 'rgba(255, 255, 255, 0.5)',
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
