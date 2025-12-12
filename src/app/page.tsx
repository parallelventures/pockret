'use client'

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Clock, DollarSign, Globe, BarChart3, Zap } from "lucide-react";
import { ppAgrandirHeading } from "./fonts";
import { TotalRecoveredCard } from "@/components/total-recovered-card";
import { BlurFade, StaggerContainer, fadeInUpVariant } from "@/components/ui/animations";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

    // Check if video is already ready
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', handleLoadedData);
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

            {/* Left: Visual (Mobile: Order 1, Desktop: Order 1) */}
            <div className="relative z-10 flex justify-center md:justify-end">
              <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden aspect-[1920/1536] bg-gray-100">
                {!isVideoLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full z-20 rounded-3xl" />
                )}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={`w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoadedData={() => setIsVideoLoaded(true)}
                  // @ts-ignore - Safari specific attributes
                  webkit-playsinline="true"
                  x5-playsinline="true"
                >
                  <source src="https://res.cloudinary.com/do3c8fqwu/video/upload/v1765505154/989_1440x60_shots_so_1_o24bgw.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right: Content (Mobile: Order 2, Desktop: Order 2) */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">

              <BlurFade delay={0.1} duration={0.8}>
                <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[0.9] tracking-tight`}>
                  Recover the money companies owe you, instantly.
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} duration={0.8}>
                <p className="text-lg text-text-muted max-w-md leading-relaxed">
                  You connect your accounts, we uncover every dollar companies owe you.
                </p>
              </BlurFade>

              <BlurFade delay={0.5} duration={0.8} className="w-full">
                <div className="flex flex-col w-full max-w-md gap-4 items-center">
                  <Link href="/login" className="w-full">
                    <Button size="lg" className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 border-0`}>
                      Find My Money
                    </Button>
                  </Link>
                  <Link href="/how-it-works" className="text-black/50 hover:text-black transition-colors text-sm">
                    How does it work? →
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* What we find */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto border-t border-black/10 pt-20">
            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
              Money you didn't know you were losing.
            </h2>
            <p className="text-black/60 mb-12 max-w-2xl">
              Most people are owed hundreds of dollars and have no idea. We find it for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Forgotten subscriptions", desc: "Services you signed up for but no longer use." },
                { title: "Duplicate charges", desc: "The same charge appearing twice on your statement." },
                { title: "Class action settlements", desc: "Lawsuits you're eligible for but didn't know about." },
                { title: "Hidden fees", desc: "Charges that were never properly disclosed to you." },
                { title: "Overcharges", desc: "When you paid more than you should have." },
                { title: "Bank errors", desc: "Processing mistakes and unauthorized fees." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-black/5"
                >
                  <h3 className={`${ppAgrandirHeading.className} text-base font-bold text-black mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-black/50 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 bg-white border-y border-black/10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-12`}>
              Three steps. Zero effort.
            </h2>

            <div className="space-y-12">
              {[
                { num: "01", title: "Connect your accounts", desc: "Securely link your bank through Plaid. Read-only access—we can never move your money." },
                { num: "02", title: "We scan everything", desc: "Our AI analyzes your transactions to find refunds, forgotten charges, and settlements." },
                { num: "03", title: "Recover in one click", desc: "For each opportunity, tap to recover. We handle the dispute for you." },
              ].map((step, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <span className={`${ppAgrandirHeading.className} text-5xl md:text-6xl font-bold text-black/10 flex-shrink-0`}>
                    {step.num}
                  </span>
                  <div className="pt-2">
                    <h3 className={`${ppAgrandirHeading.className} text-xl font-bold text-black mb-2`}>
                      {step.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-3xl p-8 md:p-12">
              <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-white mb-8`}>
                Bank-level security. Zero risk.
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-medium mb-2">Read-only access</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We can only see your transactions. We can never move money or make changes.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Powered by Plaid</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Trusted by Venmo, Chime, and 12,000+ banks. We never see your password.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">256-bit encryption</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Your data is encrypted end-to-end with bank-grade security.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">We never sell your data</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Your transaction history is never sold to advertisers or third parties.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/security" className="text-white/60 hover:text-white text-sm transition-colors">
                  Learn more about security →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center border-t border-black/10 pt-20">
            <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
              Ready to find your money?
            </h2>
            <p className="text-black/60 mb-8">
              Free to scan. Takes 30 seconds.
            </p>
            <Link href="/login">
              <Button size="lg" className={`${ppAgrandirHeading.className} h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 border-0`}>
                Find My Money
              </Button>
            </Link>
            <p className="text-black/40 text-sm mt-4">
              No credit card required
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
