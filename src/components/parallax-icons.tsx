'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Extract app name from icon path
function getAppName(src: string): string {
    const filename = src.split('/').pop()?.replace('.png', '') || ''
    const names: Record<string, string> = {
        'netflix': 'Netflix',
        'spotify': 'Spotify',
        'discord': 'Discord',
        'duolingo': 'Duolingo',
        'disneyplus': 'Disney+',
        'chatgpt': 'ChatGPT',
        'canva': 'Canva',
        'primevideo': 'Prime Video',
        'strava': 'Strava',
        'revolut': 'Revolut',
        'tinder': 'Tinder',
        'chess': 'Chess.com'
    }
    return names[filename] || filename
}

interface ParallaxIconProps {
    src: string
    position: string
    speed: number
    tooltipSide: 'left' | 'right'
    index: number
}

function ParallaxIcon({ src, position, speed, tooltipSide, index }: ParallaxIconProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isGone, setIsGone] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const appName = getAppName(src)

    const s = useRef({
        scrollOffset: 0,
        currentX: 0,
        currentY: 0,
        vx: 0,
        vy: 0,
        rotation: (Math.random() - 0.5) * 12,
        scale: 0, // Start at 0 for pop-in
        opacity: 0, // Start invisible
        blur: 0,
        dragging: false,
        ejecting: false,
        visible: false, // Track if pop-in is complete
        lastPointerX: 0,
        lastPointerY: 0
    }).current

    // Parallax scroll effect
    useEffect(() => {
        if (isGone) return

        const handleScroll = () => {
            if (s.dragging || s.ejecting) return
            s.scrollOffset = window.scrollY * (speed - 1) * 0.3
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isGone, speed, s])

    // Animation loop with pop-in
    useEffect(() => {
        if (isGone) return
        let running = true

        // Spring physics for pop-in
        const spring = { value: 0, velocity: 0 }
        const stiffness = 180
        const damping = 12
        const popStart = performance.now() + index * 40 // Stagger by 40ms per icon

        const animate = (now: number) => {
            if (!running) return

            const el = containerRef.current
            if (!el) {
                requestAnimationFrame(animate)
                return
            }

            // Pop-in animation
            if (!s.visible && now >= popStart) {
                const force = (1 - spring.value) * stiffness
                const dampingForce = -spring.velocity * damping
                spring.velocity += (force + dampingForce) * 0.016
                spring.value += spring.velocity * 0.016
                s.scale = Math.max(0, spring.value)
                s.opacity = Math.min(spring.value * 1.5, 1)

                if (Math.abs(spring.value - 1) < 0.01 && Math.abs(spring.velocity) < 0.01) {
                    s.visible = true
                    s.scale = 1
                    s.opacity = 1
                }
            }

            if (s.ejecting) {
                s.vx *= 0.96
                s.vy *= 0.96
                s.currentX += s.vx
                s.currentY += s.vy
                s.rotation += s.vx * 0.1

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

                if (rect.right < -30 || rect.left > window.innerWidth + 30 ||
                    rect.bottom < -30 || rect.top > window.innerHeight + 30) {
                    setIsGone(true)
                    return
                }

                if (Math.abs(s.vx) < 0.2 && Math.abs(s.vy) < 0.2) {
                    s.ejecting = false
                    s.currentX = 0
                    s.currentY = 0
                    s.scale = 1
                    s.opacity = 1
                    s.blur = 0
                }
            }

            const y = s.dragging || s.ejecting ? s.currentY : s.scrollOffset
            const x = s.dragging || s.ejecting ? s.currentX : 0

            el.style.transform = `translate(${x}px, ${y}px) rotate(${s.rotation}deg) scale(${s.scale})`
            el.style.opacity = String(s.opacity)
            el.style.filter = s.blur > 0.1 ? `blur(${s.blur}px)` : 'none'

            requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
        return () => { running = false }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGone])

    // Drag & throw
    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            if (!s.dragging) return
            setShowTooltip(false)
            const dx = e.clientX - s.lastPointerX
            const dy = e.clientY - s.lastPointerY
            s.vx = s.vx * 0.7 + dx * 0.8
            s.vy = s.vy * 0.7 + dy * 0.8
            s.currentX += dx
            s.currentY += dy
            s.rotation += s.vx * 0.03
            s.rotation = Math.max(-25, Math.min(25, s.rotation))
            s.lastPointerX = e.clientX
            s.lastPointerY = e.clientY
        }

        const onUp = () => {
            if (!s.dragging) return
            s.dragging = false
            setIsDragging(false)
            const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
            if (spd > 4) {
                s.vx *= 2.5
                s.vy *= 2.5
                s.ejecting = true
            } else {
                s.currentX = 0
                s.currentY = 0
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
        s.dragging = true
        setIsDragging(true)
        s.ejecting = false
        s.vx = 0
        s.vy = 0
        s.currentX = 0
        s.currentY = s.scrollOffset
        s.lastPointerX = e.clientX
        s.lastPointerY = e.clientY
    }, [s, isGone])

    if (isGone) return null

    return (
        <div
            ref={containerRef}
            className={`absolute ${position} w-14 h-14 md:w-20 md:h-20 pointer-events-auto`}
            style={{ willChange: 'transform' }}
            onMouseEnter={() => !isDragging && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img
                src={src}
                alt={appName}
                className="w-full h-full touch-none select-none"
                style={{ cursor: 'grab' }}
                onPointerDown={onDown}
                onClick={() => !isDragging && setShowTooltip(prev => !prev)}
                draggable={false}
            />

            {/* iOS-style Tooltip with bounce */}
            <Link
                href="/login"
                className={`
                    absolute top-1/2 z-50
                    ${tooltipSide === 'right' ? 'left-full ml-3' : 'right-full mr-3'}
                    bg-black text-white text-xs md:text-sm font-medium
                    px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl whitespace-nowrap
                    flex items-center gap-2
                    shadow-xl
                    ${showTooltip
                        ? 'opacity-100 -translate-y-1/2'
                        : 'opacity-0 -translate-y-1/2 pointer-events-none'
                    }
                `}
                style={{
                    transformOrigin: tooltipSide === 'right' ? 'left center' : 'right center',
                    transform: showTooltip
                        ? 'translateY(-50%) scale(1)'
                        : 'translateY(-50%) scale(0.7)',
                    transition: showTooltip
                        ? 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        : 'all 0.2s ease-out',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <span>Cancel & refund <strong>{appName}</strong></span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />

                {/* Tooltip arrow */}
                <div
                    className={`
                        absolute top-1/2 -translate-y-1/2 
                        w-0 h-0 border-[6px] border-transparent
                        ${tooltipSide === 'right'
                            ? '-left-3 border-r-black'
                            : '-right-3 border-l-black'}
                    `}
                />
            </Link>
        </div>
    )
}

interface ParallaxIconGridProps {
    icons: { src: string; position: string; speed: number }[]
}

export function ParallaxIconGrid({ icons }: ParallaxIconGridProps) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
            {icons.map((icon, i) => {
                const isLeft = icon.position.includes('left-')
                return (
                    <ParallaxIcon
                        key={icon.src + i}
                        src={icon.src}
                        position={icon.position}
                        speed={icon.speed}
                        tooltipSide={isLeft ? 'right' : 'left'}
                        index={i}
                    />
                )
            })}
        </div>
    )
}
