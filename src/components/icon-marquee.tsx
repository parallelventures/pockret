'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface MarqueeIconProps {
    src: string
    onThrow?: () => void
}

function MarqueeIcon({ src, onThrow }: MarqueeIconProps) {
    const elRef = useRef<HTMLImageElement>(null)
    const [isGone, setIsGone] = useState(false)

    const s = useRef({
        offsetX: 0,
        offsetY: 0,
        vx: 0,
        vy: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        dragging: false,
        ejecting: false,
        lastX: 0,
        lastY: 0
    }).current

    // Ejection animation
    useEffect(() => {
        if (!s.ejecting) return

        const animate = () => {
            if (!s.ejecting) return

            s.vx *= 0.96
            s.vy *= 0.96
            s.offsetX += s.vx
            s.offsetY += s.vy
            s.rotation += s.vx * 0.1

            const el = elRef.current
            if (el) {
                const rect = el.getBoundingClientRect()
                let exit = 0
                const z = 180
                if (rect.right < z) exit = 1 - rect.right / z
                if (rect.left > window.innerWidth - z) exit = Math.max(exit, 1 - (window.innerWidth - rect.left) / z)
                if (rect.bottom < z) exit = Math.max(exit, 1 - rect.bottom / z)
                if (rect.top > window.innerHeight - z) exit = Math.max(exit, 1 - (window.innerHeight - rect.top) / z)

                s.scale = 1 - exit * 0.4
                s.opacity = 1 - exit * 0.7
                s.blur = exit * 8

                el.style.transform = `translate(${s.offsetX}px, ${s.offsetY}px) rotate(${s.rotation}deg) scale(${s.scale})`
                el.style.opacity = String(s.opacity)
                el.style.filter = s.blur > 0.1 ? `blur(${s.blur}px)` : 'none'

                if (rect.right < -30 || rect.left > window.innerWidth + 30 ||
                    rect.bottom < -30 || rect.top > window.innerHeight + 30) {
                    setIsGone(true)
                    onThrow?.()
                    return
                }
            }

            if (Math.abs(s.vx) < 0.2 && Math.abs(s.vy) < 0.2) {
                s.ejecting = false
                s.offsetX = 0
                s.offsetY = 0
                s.rotation = 0
                s.scale = 1
                s.opacity = 1
                s.blur = 0
                if (elRef.current) {
                    elRef.current.style.transform = ''
                    elRef.current.style.opacity = ''
                    elRef.current.style.filter = ''
                }
            } else {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [s, onThrow])

    // Pointer events
    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            if (!s.dragging) return
            const dx = e.clientX - s.lastX
            const dy = e.clientY - s.lastY
            s.vx = s.vx * 0.7 + dx * 0.8
            s.vy = s.vy * 0.7 + dy * 0.8
            s.offsetX += dx
            s.offsetY += dy
            s.rotation += s.vx * 0.03
            s.rotation = Math.max(-20, Math.min(20, s.rotation))
            s.lastX = e.clientX
            s.lastY = e.clientY

            if (elRef.current) {
                elRef.current.style.transform = `translate(${s.offsetX}px, ${s.offsetY}px) rotate(${s.rotation}deg)`
            }
        }

        const onUp = () => {
            if (!s.dragging) return
            s.dragging = false
            const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
            if (speed > 4) {
                s.vx *= 2.5
                s.vy *= 2.5
                s.ejecting = true
            } else {
                // Return to original position
                s.offsetX = 0
                s.offsetY = 0
                s.rotation = 0
                if (elRef.current) {
                    elRef.current.style.transform = ''
                }
            }
        }

        window.addEventListener('pointermove', onMove)
        window.addEventListener('pointerup', onUp)
        window.addEventListener('pointercancel', onUp)
        return () => {
            window.removeEventListener('pointermove', onMove)
            window.removeEventListener('pointerup', onUp)
            window.removeEventListener('pointercancel', onUp)
        }
    }, [s])

    const onDown = useCallback((e: React.PointerEvent) => {
        if (isGone) return
        e.preventDefault()
        e.stopPropagation()
        s.dragging = true
        s.ejecting = false
        s.vx = 0
        s.vy = 0
        s.lastX = e.clientX
        s.lastY = e.clientY
    }, [s, isGone])

    if (isGone) return null

    return (
        <img
            ref={elRef}
            src={src}
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 touch-none select-none transition-transform duration-300 hover:scale-110"
            style={{ cursor: 'grab' }}
            onPointerDown={onDown}
            draggable={false}
        />
    )
}

interface IconMarqueeProps {
    icons: string[]
    speed?: number
    direction?: 'left' | 'right'
}

export function IconMarquee({ icons, speed = 30, direction = 'left' }: IconMarqueeProps) {
    const [removedIcons, setRemovedIcons] = useState<Set<number>>(new Set())

    // Duplicate icons for seamless loop
    const allIcons = [...icons, ...icons, ...icons]

    const handleThrow = (index: number) => {
        setRemovedIcons(prev => new Set([...prev, index]))
    }

    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

            <div
                className="flex gap-8 md:gap-12"
                style={{
                    animation: `marquee ${allIcons.length * (60 / speed)}s linear infinite`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal'
                }}
            >
                {allIcons.map((icon, i) => (
                    <MarqueeIcon
                        key={`${icon}-${i}`}
                        src={icon}
                        onThrow={() => handleThrow(i)}
                    />
                ))}
            </div>
        </div>
    )
}
