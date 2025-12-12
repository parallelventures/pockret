'use client'

import Link from "next/link";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Clock, DollarSign, Globe, BarChart3, Zap } from "lucide-react";
import { ppAgrandirHeading } from "./fonts";
import { TotalRecoveredCard } from "@/components/total-recovered-card";
import { BlurFade, StaggerContainer, fadeInUpVariant } from "@/components/ui/animations";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted for Safari autoplay
    video.muted = true;
    video.defaultMuted = true;

    // Try to play immediately and on canplay
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry after a short delay (Safari sometimes needs this)
          setTimeout(() => {
            video.play().catch(() => { });
          }, 100);
        });
      }
    };

    // Play on mount
    playVideo();

    // Also play when video is ready
    video.addEventListener('canplay', playVideo);

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        video.play();
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* Left: Visual (Mobile: Order 2, Desktop: Order 1) */}
            <div className="order-2 md:order-1 relative z-10 flex justify-center md:justify-end">
              <div className="relative w-full max-w-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto rounded-3xl"
                  // @ts-ignore - Safari specific attributes
                  webkit-playsinline="true"
                  x5-playsinline="true"
                >
                  <source src="https://res.cloudinary.com/do3c8fqwu/video/upload/v1765497722/360_1440x60_shots_so_r1uajc.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right: Content (Mobile: Order 1, Desktop: Order 2) */}
            <div className="order-1 md:order-2 flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">

              <BlurFade delay={0.1} duration={0.8}>
                <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[0.9] tracking-tight`}>
                  Recover the money companies owe you, instantly
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} duration={0.8}>
                <p className="text-lg text-text-muted max-w-md leading-relaxed">
                  You connect your accounts, we uncover every dollar companies owe you.
                </p>
              </BlurFade>

              <BlurFade delay={0.5} duration={0.8} className="w-full">
                <div className="flex flex-col w-full max-w-md gap-4">
                  <Link href="/login" className="w-full">
                    <Button size="lg" className={`${ppAgrandirHeading.className} w-full h-14 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-lg transition-all active:scale-95 border-0`}>
                      Find My Money
                    </Button>
                  </Link>
                  <Link href="/how-it-works" className="w-full">
                    <Button variant="outline" size="lg" className={`${ppAgrandirHeading.className} w-full h-14 px-8 rounded-full border-2 border-gray-200 bg-white text-foreground font-bold text-lg hover:bg-gray-50 transition-all`}>
                      How It Works
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-2">
                🔍
              </div>
              <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground`}>Smart Money Finder</h3>
              <p className="text-text-muted leading-relaxed">
                Search public databases and class action settlements in seconds. We find the checks you forgot to cash.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-2">
                📊
              </div>
              <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground`}>Subscription Analyzer</h3>
              <p className="text-text-muted leading-relaxed">
                For EU users, we detect unfair recurring charges and help you cancel them with one click.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-2">
                ⚡
              </div>
              <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-foreground`}>Auto-Claim Generator</h3>
              <p className="text-text-muted leading-relaxed">
                No lawyers needed. Generate professional refund emails and claim forms instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Gamified Progress Section */}
        <section className="w-full py-20 space-y-24">
          {/* Block 1 */}
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <TotalRecoveredCard />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className={`${ppAgrandirHeading.className} text-4xl font-bold text-foreground`}>Watch your balance grow.</h2>
              <p className="text-lg text-text-muted">
                Track every dollar found. Earn badges for reclaiming settlements and canceling zombie subscriptions.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`${ppAgrandirHeading.className} text-4xl font-bold text-foreground`}>Country-based experience.</h2>
              <p className="text-lg text-text-muted">
                Pockret adapts to your laws. Finding class actions in the US? We got it. Fighting unfair fees in the EU? Done.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white border-2 border-border rounded-3xl p-8 shadow-lg transform rotate-2">
                <div className="flex gap-4">
                  <div className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
                    <div className="text-4xl mb-2">🇺🇸</div>
                    <div className="font-bold text-secondary">Settlements</div>
                  </div>
                  <div className="flex-1 bg-yellow-50 rounded-xl p-4 border border-yellow-100 text-center">
                    <div className="text-4xl mb-2">🇪🇺</div>
                    <div className="font-bold text-yellow-600">Consumer Rights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser Section - Conversion Optimized */}
        {/* HIDDEN: Part of strategy to make users believe it's free without explicitly stating it
        <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <BlurFade delay={0.1} duration={0.8}>
              <h2 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-extrabold text-foreground leading-tight`}>
                Stop Overpaying.<br />Start Recovering.
              </h2>
            </BlurFade>

            <BlurFade delay={0.2} duration={0.8}>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto">
                Unlock up to <strong className="text-[#00A97F]">$1,200/year</strong> you didn't know you were owed — automatically.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.8}>
              <div className="bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#00A97F]/20 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block bg-[#00A97F] text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                      🔥 80% OFF — Limited Time
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-3xl md:text-4xl text-text-muted line-through">$199.99</span>
                      <span className={`${ppAgrandirHeading.className} text-5xl md:text-6xl font-bold text-[#00A97F]`}>$39.99</span>
                    </div>
                    <p className="text-lg text-foreground font-semibold">
                      One-time purchase. No subscriptions. Ever.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 text-left max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00A97F] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">
                        <strong>Find hidden fees & forgotten subscriptions</strong> your bank won't show you
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00A97F] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">
                        <strong>Auto-fill refund requests</strong> in one click — no forms, no calls
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00A97F] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">
                        <strong>Instant scan</strong> — start recovering money in 60 seconds
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00A97F] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">
                        <strong>14-day money-back guarantee</strong> — Zero risk
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00A97F] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">
                        <strong>Lifetime access</strong> — Unlock money forever
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-foreground">4.8/5</span>
                    </div>
                    <p className="text-sm text-text-muted">
                      <strong className="text-foreground">10,000+ users</strong> recovered over <strong className="text-[#00A97F]">$3M</strong> with Pockret
                    </p>
                  </div>

                  <Link href="/pricing" className="block w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Button size="lg" className="w-full h-16 px-8 rounded-full bg-[#00A97F] hover:bg-[#009e74] text-white font-bold text-xl transition-all shadow-lg">
                        Start My Scan Now
                        <ArrowRight className="ml-2 w-6 h-6" />
                      </Button>
                    </motion.div>
                  </Link>

                  <div className="flex items-center justify-center gap-6 text-xs text-text-muted pt-2">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Money-Back</span>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
        */}
      </main>

      <Footer />
    </div>
  );
}
