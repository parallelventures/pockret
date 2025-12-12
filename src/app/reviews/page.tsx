'use client'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ppAgrandirHeading, sfProDisplay } from "@/app/fonts";
import { useState } from "react";
import { Star, Play, Quote, ChevronLeft, ChevronRight, X, Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-black/20'}`}
                />
            ))}
        </div>
    );
}

// Review Card Component
function ReviewCard({ review }: { review: typeof reviews[0] }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-black/5 flex flex-col h-full transition-all hover:border-black/10">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {review.avatar ? (
                        <Image src={review.avatar} alt={review.name} width={48} height={48} className="w-full h-full object-cover" />
                    ) : (
                        <span className={`${ppAgrandirHeading.className} text-lg font-bold text-black/40`}>
                            {review.name.charAt(0)}
                        </span>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className={`${ppAgrandirHeading.className} font-bold text-black truncate`}>
                        {review.name}
                    </h3>
                    <p className="text-sm text-black/50">{review.location}</p>
                </div>
                <StarRating rating={review.rating} />
            </div>
            <p className="text-black/70 leading-relaxed flex-1 mb-4">
                "{review.content}"
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <span className="text-sm text-black/40">{review.date}</span>
                {review.recovered && (
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        Recovered ${review.recovered}
                    </span>
                )}
            </div>
        </div>
    );
}

// Video Testimonial Card
function VideoCard({ video, onClick }: { video: typeof videoTestimonials[0], onClick: () => void }) {
    return (
        <div
            className="group relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden cursor-pointer bg-black"
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-black fill-black ml-1" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <p className={`${ppAgrandirHeading.className} text-white font-bold text-lg mb-1`}>
                    {video.name}
                </p>
                <p className="text-white/70 text-sm">
                    {video.story}
                </p>
            </div>
        </div>
    );
}

// Photo Gallery Item
function PhotoGalleryItem({ photo, onClick }: { photo: typeof userPhotos[0], onClick: () => void }) {
    return (
        <div
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${photo.url})` }}
            />
            <div className="absolute bottom-2 left-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium truncate">{photo.caption}</p>
            </div>
        </div>
    );
}

// Feedback Form Component
function FeedbackForm() {
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    if (submitted) {
        return (
            <div className="bg-white rounded-2xl p-8 border border-black/5 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                    Thank you for your feedback!
                </h3>
                <p className="text-black/60">
                    Your review helps others discover Paylaim.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-8 border border-black/5">
            <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-6`}>
                Share Your Experience
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">Your Rating</label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                onClick={() => setRating(star)}
                                className="p-1 transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 transition-colors ${star <= (hoveredRating || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-black/20'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">Your Name</label>
                    <input
                        type="text"
                        placeholder="John D."
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-transparent focus:outline-none focus:border-black/30 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">Your Review</label>
                    <textarea
                        rows={4}
                        placeholder="Share your experience with Paylaim..."
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-transparent focus:outline-none focus:border-black/30 transition-colors resize-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black/70 mb-2">Amount Recovered (optional)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">$</span>
                        <input
                            type="number"
                            placeholder="0.00"
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-black/10 bg-transparent focus:outline-none focus:border-black/30 transition-colors"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 cursor-pointer`}
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}

// Sample Data
const reviews = [
    {
        name: "Sarah M.",
        location: "Los Angeles, CA",
        rating: 5,
        content: "I was skeptical at first, but Paylaim found over $400 in forgotten subscriptions I had no idea about. The whole process took less than 5 minutes. Absolutely incredible service!",
        date: "Dec 8, 2025",
        recovered: 423,
        avatar: null
    },
    {
        name: "Michael R.",
        location: "Austin, TX",
        rating: 5,
        content: "Found a class action settlement I was eligible for. Got $156 deposited directly to my bank. This app is a game-changer.",
        date: "Dec 5, 2025",
        recovered: 156,
        avatar: null
    },
    {
        name: "Jennifer L.",
        location: "Miami, FL",
        rating: 5,
        content: "The scan was instant and the UI is beautiful. I've already recommended Paylaim to everyone in my family. We've collectively recovered over $1,200!",
        date: "Dec 3, 2025",
        recovered: 287,
        avatar: null
    },
    {
        name: "David K.",
        location: "Seattle, WA",
        rating: 4,
        content: "Great service! Found two duplicate charges from different merchants. The dispute process was handled entirely by Paylaim. Very impressed with the security.",
        date: "Nov 28, 2025",
        recovered: 89,
        avatar: null
    },
    {
        name: "Emily W.",
        location: "Chicago, IL",
        rating: 5,
        content: "I had completely forgotten about an old gym membership charging me $29/month for 8 months. Paylaim caught it and helped me cancel. Money back in my pocket!",
        date: "Nov 25, 2025",
        recovered: 232,
        avatar: null
    },
    {
        name: "James T.",
        location: "New York, NY",
        rating: 5,
        content: "The class action feature alone is worth it. Paylaim found 3 settlements I was eligible for that I never knew about. Easy money.",
        date: "Nov 22, 2025",
        recovered: 512,
        avatar: null
    }
];

const videoTestimonials = [
    {
        id: 1,
        name: "Alex Chen",
        story: "Recovered $847 from forgotten subscriptions",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
        videoUrl: "#"
    },
    {
        id: 2,
        name: "Maria Santos",
        story: "Found 5 class action settlements I didn't know about",
        thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
        videoUrl: "#"
    },
    {
        id: 3,
        name: "Jordan Blake",
        story: "Paylaim saved me over $1,200 in one year",
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
        videoUrl: "#"
    }
];

const userPhotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop", caption: "First refund notification!" },
    { id: 2, url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop", caption: "My dashboard after 1 week" },
    { id: 3, url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop", caption: "Celebrating my recovered funds" },
    { id: 4, url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=400&fit=crop", caption: "Money back in my account" },
    { id: 5, url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop", caption: "Subscription cancelled!" },
    { id: 6, url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=400&fit=crop", caption: "Settlement notification" },
    { id: 7, url: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=400&fit=crop", caption: "My savings journey" },
    { id: 8, url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop", caption: "Paylaim success story" },
];

const feedbackHighlights = [
    { icon: "💰", text: "Average recovery of $347 per user" },
    { icon: "⭐", text: "4.9 out of 5 stars from 12,000+ reviews" },
    { icon: "🎯", text: "97% success rate on disputes" },
    { icon: "⚡", text: "Under 30 seconds to complete a scan" },
];

export default function ReviewsPage() {
    const [selectedVideo, setSelectedVideo] = useState<typeof videoTestimonials[0] | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<typeof userPhotos[0] | null>(null);

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-lg font-medium text-black/70">4.9</span>
                    </div>
                    <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-6xl font-extrabold text-black leading-[0.95] tracking-tight mb-6`}>
                        Real people.<br />Real recoveries.
                    </h1>
                    <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                        Join thousands who've discovered money they didn't know they were owed.
                    </p>
                </section>

                {/* Stats Bar */}
                <section className="py-8 px-6 bg-white border-y border-black/5">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {feedbackHighlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-sm text-black/70">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Testimonials */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                Video Stories
                            </h2>
                            <p className="text-black/60 max-w-xl mx-auto">
                                Hear directly from our users about their recovery experiences.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {videoTestimonials.map((video) => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                    onClick={() => setSelectedVideo(video)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Written Reviews */}
                <section className="py-20 px-6 bg-white border-y border-black/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                What Our Users Say
                            </h2>
                            <p className="text-black/60 max-w-xl mx-auto">
                                Verified reviews from real Paylaim users.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <button className="text-black/50 hover:text-black transition-colors text-sm">
                                Load more reviews →
                            </button>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                User Gallery
                            </h2>
                            <p className="text-black/60 max-w-xl mx-auto">
                                Screenshots and moments from our community.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {userPhotos.map((photo) => (
                                <PhotoGalleryItem
                                    key={photo.id}
                                    photo={photo}
                                    onClick={() => setSelectedPhoto(photo)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feedback Form Section */}
                <section className="py-20 px-6 bg-white border-t border-black/5">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                                Share Your Story
                            </h2>
                            <p className="text-black/60">
                                Had a great experience? We'd love to hear about it.
                            </p>
                        </div>
                        <FeedbackForm />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-black rounded-3xl p-8 md:p-12">
                            <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
                                Ready to find your money?
                            </h2>
                            <p className="text-white/60 mb-8 text-lg">
                                Join 50,000+ users who've already recovered over $17M.
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <Link href="/login" className="w-full max-w-sm">
                                    <button className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-white hover:bg-white/90 text-black font-bold text-base transition-all active:scale-95 cursor-pointer`}>
                                        Find My Money
                                    </button>
                                </Link>
                                <p className="text-sm text-white/40">
                                    Free to scan • Takes 30 seconds
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black">
                        <button
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                                <p className="text-white/60 text-sm">Video player would load here</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Photo Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative max-w-2xl w-full">
                        <button
                            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <div
                            className="aspect-square rounded-2xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${selectedPhoto.url})` }}
                        />
                        <p className="text-white text-center mt-4 text-lg">{selectedPhoto.caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
