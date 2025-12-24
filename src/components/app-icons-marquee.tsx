'use client'

interface AppIconsMarqueeProps {
    icons: string[]
    speed?: number // seconds for one complete cycle
}

export function AppIconsMarquee({ icons, speed = 40 }: AppIconsMarqueeProps) {
    // Triple the icons for seamless infinite loop
    const allIcons = [...icons, ...icons, ...icons]

    return (
        <div className="relative w-full overflow-hidden py-6">
            {/* Gradient fade edges with blur */}
            <div
                className="absolute left-0 top-0 bottom-0 w-32 md:w-40 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to right, #F9FAFB 0%, #F9FAFB 30%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-32 md:w-40 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to left, #F9FAFB 0%, #F9FAFB 30%, transparent 100%)',
                    maskImage: 'linear-gradient(to left, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                }}
            />

            {/* Marquee track */}
            <div
                className="flex items-center gap-4 md:gap-5 w-max"
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                }}
            >
                {allIcons.map((icon, i) => (
                    <img
                        key={`${icon}-${i}`}
                        src={icon}
                        alt=""
                        className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0"
                        draggable={false}
                    />
                ))}
            </div>
        </div>
    )
}
