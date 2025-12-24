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
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Slide in from left or right
interface SlideInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    direction?: 'left' | 'right'
}

export function SlideIn({
    children,
    className,
    delay = 0,
    duration = 0.7,
    direction = 'left'
}: SlideInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const xOffset = direction === 'left' ? -60 : 60

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: xOffset }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1], // Smooth ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Fade with subtle scale
interface FadeScaleProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function FadeScale({
    children,
    className,
    delay = 0,
    duration = 0.6
}: FadeScaleProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.34, 1.56, 0.64, 1], // Bouncy
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Simple slide up with clean easing
interface SlideUpProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    yOffset?: number
}

export function SlideUp({
    children,
    className,
    delay = 0,
    duration = 0.6,
    yOffset = 40
}: SlideUpProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94], // Ease out quad
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// iOS-like bounce fade animation
interface BounceFadeProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function BounceFade({
    children,
    className,
    delay = 0,
    duration = 0.6
}: BounceFadeProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.175, 0.885, 0.32, 1.275], // iOS spring bounce
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Stagger children with reveal animation
interface RevealListProps {
    children: React.ReactNode
    className?: string
    delay?: number
    staggerDelay?: number
}

export function RevealList({
    children,
    className,
    delay = 0,
    staggerDelay = 0.1
}: RevealListProps) {
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

export const revealItemVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

// Motion div for use with RevealList
export function RevealItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div variants={revealItemVariant} className={className}>
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

