'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
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

interface ArcIconProps {
    src: string
    index: number
    total: number
    radius: number
    centerX: number
    centerY: number
    startAngle?: number
    endAngle?: number
    parallaxSpeed: number
}

function ArcIcon({ src, index, total, radius, centerX, centerY, startAngle = 200, endAngle = 340, parallaxSpeed }: ArcIconProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [showTooltip, setShowTooltip] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const appName = getAppName(src)

    // Determine tooltip side based on position in arc
    const tooltipSide = index < total / 2 ? 'right' : 'left'

    const s = useRef({
        baseX: 0,
        baseY: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        rotation: (Math.random() - 0.5) * 15,
        scale: 0,
        opacity: 0,
        blur: 0,
        dragging: false,
        ejecting: false,
        visible: false,
        gone: false,
        lastX: 0,
        lastY: 0
    }).current

    // Calculate position on arc
    useEffect(() => {
        const angleRange = endAngle - startAngle
        const angleStep = angleRange / (total - 1)
        const angle = (startAngle + angleStep * index) * (Math.PI / 180)

        s.baseX = centerX + Math.cos(angle) * radius
        s.baseY = centerY + Math.sin(angle) * radius
    }, [index, total, radius, centerX, centerY, startAngle, endAngle, s])

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (s.dragging || s.ejecting) return
            s.scrollY = window.scrollY * (parallaxSpeed - 1) * 0.5
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [parallaxSpeed, s])

    const apply = useCallback(() => {
        const el = containerRef.current
        if (!el) return
        const x = s.baseX + s.x
        const y = s.baseY + s.y + s.scrollY
        el.style.transform = `translate(${x}px, ${y}px) rotate(${s.rotation}deg) scale(${s.scale})`
        el.style.opacity = String(s.opacity)
        el.style.filter = s.blur > 0.1 ? `blur(${s.blur}px)` : 'none'
    }, [s])

    // Animation loop
    useEffect(() => {
        let running = true
        const delay = index * 50
        const popStart = performance.now() + delay
        const spring = { value: 0, velocity: 0 }

        const frame = (now: number) => {
            if (!running || s.gone) return

            // Pop-in
            if (!s.visible && now >= popStart) {
                const force = (1 - spring.value) * 150
                const dampingForce = -spring.velocity * 12
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

            // Ejection
            if (s.ejecting) {
                s.vx *= 0.96
                s.vy *= 0.96
                s.x += s.vx
                s.y += s.vy
                s.rotation += s.vx * 0.1

                const el = containerRef.current
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

                    if (rect.right < -30 || rect.left > window.innerWidth + 30 ||
                        rect.bottom < -30 || rect.top > window.innerHeight + 30) {
                        s.gone = true
                        el.style.display = 'none'
                        return
                    }
                }

                if (Math.abs(s.vx) < 0.2 && Math.abs(s.vy) < 0.2) {
                    s.ejecting = false
                    s.scale = 1
                    s.opacity = 1
                    s.blur = 0
                }
            }

            apply()
            requestAnimationFrame(frame)
        }

        requestAnimationFrame(frame)
        return () => { running = false }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Pointer events
    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            if (!s.dragging) return
            setShowTooltip(false)
            const dx = e.clientX - s.lastX
            const dy = e.clientY - s.lastY
            s.vx = s.vx * 0.7 + dx * 0.8
            s.vy = s.vy * 0.7 + dy * 0.8
            s.x += dx
            s.y += dy
            s.rotation += s.vx * 0.03
            s.rotation = Math.max(-20, Math.min(20, s.rotation))
            s.lastX = e.clientX
            s.lastY = e.clientY
            apply()
        }

        const onUp = () => {
            if (!s.dragging) return
            s.dragging = false
            setIsDragging(false)
            const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
            if (speed > 4) {
                s.vx *= 2.5
                s.vy *= 2.5
                s.ejecting = true
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
    }, [s, apply])

    const onDown = useCallback((e: React.PointerEvent) => {
        if (s.gone || !s.visible) return
        e.preventDefault()
        s.dragging = true
        setIsDragging(true)
        s.ejecting = false
        s.vx = 0
        s.vy = 0
        s.lastX = e.clientX
        s.lastY = e.clientY
    }, [s])

    if (s.gone) return null

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2"
            style={{
                transform: 'scale(0)',
                opacity: 0,
                willChange: 'transform, opacity, filter'
            }}
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

interface IconArcProps {
    icons: string[]
}

export function IconArc({ icons }: IconArcProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                })
            }
        }
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const centerX = dimensions.width / 2
    const centerY = 650 // Lower position
    const radius = Math.min(dimensions.width * 0.55, 600) // Large radius for flat curve

    // Generate parallax speeds for depth effect (alternating near/far)
    const parallaxSpeeds = icons.map((_, i) => 0.4 + (i % 3) * 0.4)

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-visible pointer-events-none">
            <div className="pointer-events-auto">
                {dimensions.width > 0 && icons.map((icon, i) => (
                    <ArcIcon
                        key={icon}
                        src={icon}
                        index={i}
                        total={icons.length}
                        radius={radius}
                        centerX={centerX}
                        centerY={centerY}
                        startAngle={220}
                        endAngle={320}
                        parallaxSpeed={parallaxSpeeds[i]}
                    />
                ))}
            </div>
        </div>
    )
}
