'use client'

import { motion, useInView, HTMLMotionProps } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface BlurFadeProps extends HTMLMotionProps<"div"> {
    delay?: number
    duration?: number
    blur?: string
    yOffset?: number
    className?: string
    children: React.ReactNode
}

export function BlurFade({
    delay = 0,
    duration = 0.8,
    blur = "10px",
    yOffset = 20,
    className,
    children,
    ...props
}: BlurFadeProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: `blur(${blur})`, y: yOffset }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: `blur(${blur})`, y: yOffset }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1], // Cubic bezier for smooth "premium" feel
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({
    children,
    className,
    delay = 0,
    staggerDelay = 0.1
}: {
    children: React.ReactNode,
    className?: string,
    delay?: number,
    staggerDelay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const
        }
    }
}

export function HoverCard({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScaleButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={className}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
}
