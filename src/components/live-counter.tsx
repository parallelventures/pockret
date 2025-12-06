'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function AnimatedDigit({ digit }: { digit: string }) {
    return (
        <div className="relative inline-flex flex-col overflow-hidden h-[1.1em] align-top">
            <span className="invisible">{digit}</span>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={digit}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {digit}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}

export function LiveCounter() {
    const [amount, setAmount] = useState(2871313)

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly increase amount by $20-$80 every 15-30 seconds
            setAmount(prev => prev + Math.floor(Math.random() * 60) + 20)
        }, Math.random() * 15000 + 15000)

        return () => clearInterval(interval)
    }, [])

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount)

    const characters = formattedAmount.split('')

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="px-4 py-2 rounded-full bg-foreground/3 backdrop-blur-xl text-sm font-medium text-foreground/80 whitespace-nowrap font-sans flex items-center gap-1.5">
                <span className="font-bold text-foreground flex items-center">
                    {characters.map((char, index) => (
                        /\d/.test(char) ? (
                            <AnimatedDigit key={`digit-${index}`} digit={char} />
                        ) : (
                            <span key={`char-${index}`}>{char}</span>
                        )
                    ))}
                </span>
                <span>refunded to our users so far</span>
            </div>
        </div>
    )
}
