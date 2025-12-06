'use client'

import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function TotalRecoveredCard() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const value = useSpring(0, { duration: 2000 })
    const displayValue = useTransform(value, (latest) =>
        `$${latest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    )

    useEffect(() => {
        if (isInView) {
            value.set(1240)
        }
    }, [isInView, value])

    return (
        <div ref={ref} className="bg-white border-2 border-border rounded-3xl p-8 shadow-lg transform -rotate-2">
            <div className="space-y-4">
                <div className="flex justify-between font-bold text-text-muted uppercase text-sm">
                    <span>Total Recovered</span>
                    <motion.span>{displayValue}</motion.span>
                </div>
                <div className="h-6 bg-border rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "75%" } : { width: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-success rounded-full"
                    />
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center overflow-hidden relative p-2">
                        <Image src="/apple.jpg" alt="Apple" fill className="object-contain" sizes="48px" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center overflow-hidden relative p-2">
                        <Image src="/amazon.png" alt="Amazon" fill className="object-contain" sizes="48px" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center overflow-hidden relative p-2">
                        <Image src="/Meta.svg.png" alt="Meta" fill className="object-contain" sizes="48px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
