'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
    delay?: number
}

function FAQItem({ question, answer, isOpen, onToggle, delay = 0 }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.175, 0.885, 0.32, 1.275], // iOS spring bounce
            }}
            className="border-b border-black/10"
        >
            <button
                onClick={onToggle}
                className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
            >
                <span className="font-medium text-black pr-8">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-black/40 group-hover:text-black/60 transition-colors" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.2 }
                        }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-black/60 text-sm leading-relaxed pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

interface FAQProps {
    items: { question: string; answer: string }[]
    className?: string
}

export function FAQ({ items, className }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className={cn("", className)}>
            {items.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    delay={index * 0.08}
                />
            ))}
        </div>
    )
}
