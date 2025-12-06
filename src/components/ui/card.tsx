import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-xl border border-foreground/5 bg-white p-6 text-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )
)
Card.displayName = "Card"

export { Card }
