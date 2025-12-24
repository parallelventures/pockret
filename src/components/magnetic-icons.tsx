'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface MagneticIconProps {
    src: string
    className?: string
    magnetStrength?: number
    magnetRadius?: number
}

function MagneticIcon({ src, className = '', magnetStrength = 30, magnetRadius = 150 }: MagneticIconProps) {
    const elRef = useRef<HTMLImageElement>(null)
    const [isGone, setIsGone] = useState(false)

    const s = useRef({
        baseX: 0,
        baseY: 0,
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        vx: 0,
        vy: 0,
        rotation: (Math.random() - 0.5) * 8,
        scale: 1,
        opacity: 1,
        blur: 0,
        dragging: false,
        ejecting: false,
        lastPointerX: 0,
        lastPointerY: 0
    }).current

    // Get initial position
    useEffect(() => {
        const el = elRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        s.baseX = rect.left + rect.width / 2
        s.baseY = rect.top + rect.height / 2
    }, [s])

    // Magnetic effect + smooth animation loop
    useEffect(() => {
        if (isGone) return
        let running = true

        const onMouseMove = (e: MouseEvent) => {
            if (s.dragging || s.ejecting) return

            const el = elRef.current
            if (!el) return

            const rect = el.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const dx = e.clientX - centerX
            const dy = e.clientY - centerY
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < magnetRadius) {
                // Pull toward cursor
                const force = (1 - distance / magnetRadius) * magnetStrength
                s.targetX = (dx / distance) * force
                s.targetY = (dy / distance) * force
            } else {
                // Return to origin
                s.targetX = 0
                s.targetY = 0
            }
        }

        const animate = () => {
            if (!running) return

            const el = elRef.current
            if (!el) {
                requestAnimationFrame(animate)
                return
            }

            if (s.ejecting) {
                // Physics for thrown icon
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
                    s.scale = 1
                    s.opacity = 1
                    s.blur = 0
                }
            } else if (!s.dragging) {
                // Smooth lerp to target (magnetic effect)
                s.currentX += (s.targetX - s.currentX) * 0.15
                s.currentY += (s.targetY - s.currentY) * 0.15
            }

            el.style.transform = `translate(${s.currentX}px, ${s.currentY}px) rotate(${s.rotation}deg) scale(${s.scale})`
            el.style.opacity = String(s.opacity)
            el.style.filter = s.blur > 0.1 ? `blur(${s.blur}px)` : 'none'

            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', onMouseMove)
        requestAnimationFrame(animate)

        return () => {
            running = false
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [isGone, magnetRadius, magnetStrength, s])

    // Drag & throw
    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            if (!s.dragging) return
            const dx = e.clientX - s.lastPointerX
            const dy = e.clientY - s.lastPointerY
            s.vx = s.vx * 0.7 + dx * 0.8
            s.vy = s.vy * 0.7 + dy * 0.8
            s.currentX += dx
            s.currentY += dy
            s.rotation += s.vx * 0.03
            s.rotation = Math.max(-20, Math.min(20, s.rotation))
            s.lastPointerX = e.clientX
            s.lastPointerY = e.clientY
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
                s.targetX = 0
                s.targetY = 0
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
        s.ejecting = false
        s.vx = 0
        s.vy = 0
        s.lastPointerX = e.clientX
        s.lastPointerY = e.clientY
    }, [s, isGone])

    if (isGone) return null

    return (
        <img
            ref={elRef}
            src={src}
            alt=""
            className={`${className} touch-none select-none`}
            style={{ cursor: 'grab', willChange: 'transform' }}
            onPointerDown={onDown}
            draggable={false}
        />
    )
}

interface MagneticIconGridProps {
    icons: { src: string; position: string }[]
}

export function MagneticIconGrid({ icons }: MagneticIconGridProps) {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {icons.map((icon, i) => (
                <MagneticIcon
                    key={icon.src + i}
                    src={icon.src}
                    className={`absolute ${icon.position} w-14 h-14 md:w-20 md:h-20 pointer-events-auto`}
                    magnetStrength={25}
                    magnetRadius={120}
                />
            ))}
        </div>
    )
}
