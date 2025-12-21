'use client'

import { useRef, useEffect, useCallback } from 'react'

interface DraggableIconProps {
    src: string
    className?: string
    style?: React.CSSProperties
    appearDelay?: number
}

export function DraggableIcon({ src, className = '', style = {}, appearDelay = 0 }: DraggableIconProps) {
    const elRef = useRef<HTMLImageElement>(null)

    const s = useRef({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        rotation: (Math.random() - 0.5) * 10, // Fixed rotation, never changes in idle
        scale: 0,
        opacity: 0,
        blur: 0,
        dragging: false,
        ejecting: false,
        visible: false,
        gone: false,
        lastX: 0,
        lastY: 0,
        lastTime: 0
    }).current

    const apply = useCallback(() => {
        const el = elRef.current
        if (!el) return
        el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rotation}deg) scale(${s.scale})`
        el.style.opacity = String(s.opacity)
        el.style.filter = s.blur > 0.1 ? `blur(${s.blur}px)` : 'none'
    }, [s])

    useEffect(() => {
        let running = true
        const popStart = performance.now() + appearDelay * 1000

        // Spring physics for pop-in
        const spring = { value: 0, velocity: 0 }
        const stiffness = 100
        const damping = 10
        const mass = 1

        const frame = (now: number) => {
            if (!running || s.gone) return

            // Pop-in with spring physics
            if (!s.visible && now >= popStart) {
                const target = 1
                const force = (target - spring.value) * stiffness
                const dampingForce = -spring.velocity * damping
                const acceleration = (force + dampingForce) / mass

                spring.velocity += acceleration * 0.016
                spring.value += spring.velocity * 0.016

                s.scale = Math.max(0, spring.value)
                s.opacity = Math.min(spring.value * 1.5, 1)

                // Check if settled
                if (Math.abs(spring.value - 1) < 0.01 && Math.abs(spring.velocity) < 0.01) {
                    s.visible = true
                    s.scale = 1
                    s.opacity = 1
                }
                apply()
            }

            // NO rotation animation in idle - rotation stays fixed

            // Ejection
            if (s.ejecting) {
                s.vx *= 0.96
                s.vy *= 0.96
                s.x += s.vx
                s.y += s.vy
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
                apply()
            }

            requestAnimationFrame(frame)
        }

        requestAnimationFrame(frame)
        return () => { running = false }
    }, [appearDelay, apply, s])

    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            if (!s.dragging) return
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

            const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
            const el = elRef.current
            let nearEdge = false

            if (el) {
                const rect = el.getBoundingClientRect()
                nearEdge = rect.left < 120 || rect.right > window.innerWidth - 120 ||
                    rect.top < 120 || rect.bottom > window.innerHeight - 120

                if (nearEdge) {
                    const cx = rect.left + rect.width / 2
                    const cy = rect.top + rect.height / 2
                    if (cx < 120) s.vx = Math.min(s.vx, -35)
                    else if (cx > window.innerWidth - 120) s.vx = Math.max(s.vx, 35)
                    if (cy < 120) s.vy = Math.min(s.vy, -35)
                    else if (cy > window.innerHeight - 120) s.vy = Math.max(s.vy, 35)
                }
            }

            if (nearEdge || speed > 4) {
                if (!nearEdge) {
                    s.vx *= 2.5
                    s.vy *= 2.5
                }
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

        const el = elRef.current
        if (el) {
            const rect = el.getBoundingClientRect()
            s.x += e.clientX - rect.left - rect.width / 2
            s.y += e.clientY - rect.top - rect.height / 2
            apply()
        }

        s.dragging = true
        s.ejecting = false
        s.vx = 0
        s.vy = 0
        s.lastX = e.clientX
        s.lastY = e.clientY
    }, [s, apply])

    return (
        <img
            ref={elRef}
            src={src}
            alt=""
            className={`${className.replace(/animate-float/g, '')} touch-none select-none`}
            style={{
                ...style,
                transform: 'scale(0)',
                opacity: 0,
                transformOrigin: 'center',
                cursor: 'grab',
                willChange: 'transform, opacity, filter'
            }}
            onPointerDown={onDown}
            draggable={false}
        />
    )
}
