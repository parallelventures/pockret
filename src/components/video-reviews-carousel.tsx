'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { ppAgrandirHeading } from '@/app/fonts'

const videoReviews = [
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940881/snaptik_7577575094407400718_v2_cigv9j.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940881/snaptik_7533978488773135638_hd_trgbbk.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940881/snaptik_7586036091686358327_v2_trcccx.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940882/snaptik_7543006406815927583_v2_iagmp9.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940882/snaptik_7526927188541705503_v2_pme8ie.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940883/snaptik_7451416778464382239_v2_dxqmpk.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940885/snaptik_7499520815751335190_v2_g8de1y.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940885/snaptik_7556307180878564622_hd_k18xjw.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940885/snaptik_7545558403612019998_v2_kdkd8p.mp4',
    'https://res.cloudinary.com/do3c8fqwu/video/upload/v1766940890/snaptik_7545592172720983327_v2_npumny.mp4',
]

export function VideoReviewsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    // Autoplay all videos on mount
    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.play().catch(() => { })
            }
        })
    }, [])

    // Auto-advance every 4 seconds (pause if user is listening)
    useEffect(() => {
        if (unmutedIndex !== null) return

        const interval = setInterval(() => {
            setActiveIndex(prev => {
                const newIndex = (prev + 1) % videoReviews.length
                scrollToIndex(newIndex)
                return newIndex
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [unmutedIndex])

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const card = scrollRef.current.children[index] as HTMLElement
            if (card) {
                const scrollLeft = card.offsetLeft - (scrollRef.current.offsetWidth - card.offsetWidth) / 2
                scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
            }
        }
    }

    const handlePrev = () => {
        const newIndex = activeIndex === 0 ? videoReviews.length - 1 : activeIndex - 1
        setActiveIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % videoReviews.length
        setActiveIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const handleVideoClick = (index: number) => {
        const video = videoRefs.current[index]
        if (!video) return

        if (unmutedIndex === index) {
            video.muted = true
            setUnmutedIndex(null)
        } else {
            videoRefs.current.forEach((v, i) => {
                if (v) v.muted = i !== index
            })
            setUnmutedIndex(index)
        }
        setActiveIndex(index)
        scrollToIndex(index)
    }

    // Mute when switching away
    useEffect(() => {
        if (unmutedIndex !== null && unmutedIndex !== activeIndex) {
            const video = videoRefs.current[unmutedIndex]
            if (video) video.muted = true
            setUnmutedIndex(null)
        }
    }, [activeIndex, unmutedIndex])

    return (
        <section className="py-16 md:py-24">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-3">
                            Real stories
                        </p>
                        <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-4xl font-bold text-black leading-tight`}>
                            People are recovering<br className="hidden md:block" /> their money.
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                            aria-label="Previous video"
                        >
                            <ChevronLeft className="w-5 h-5 text-black/70" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                            aria-label="Next video"
                        >
                            <ChevronRight className="w-5 h-5 text-black/70" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1.5rem))]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {videoReviews.map((src, index) => (
                    <div
                        key={index}
                        className={`relative flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${activeIndex === index
                                ? 'ring-2 ring-black/20 scale-[1.02]'
                                : 'opacity-60 hover:opacity-100'
                            }`}
                        onClick={() => handleVideoClick(index)}
                    >
                        <video
                            ref={el => { videoRefs.current[index] = el }}
                            src={src}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            autoPlay
                        />

                        {/* Sound indicator */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                            {unmutedIndex === index ? (
                                <Volume2 className="w-4 h-4 text-white" />
                            ) : (
                                <VolumeX className="w-4 h-4 text-white" />
                            )}
                        </div>

                        {/* Tap hint on hover */}
                        {unmutedIndex !== index && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                                    <span className="text-white text-xs font-medium">Tap for sound</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-6 px-4">
                <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                    aria-label="Previous video"
                >
                    <ChevronLeft className="w-4 h-4 text-black/70" />
                </button>

                <div className="flex items-center gap-1.5 mx-4">
                    {videoReviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveIndex(index)
                                scrollToIndex(index)
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? 'bg-black w-4' : 'bg-black/20'
                                }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-all active:scale-95 cursor-pointer"
                    aria-label="Next video"
                >
                    <ChevronRight className="w-4 h-4 text-black/70" />
                </button>
            </div>
        </section>
    )
}
