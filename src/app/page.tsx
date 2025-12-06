'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Clock, DollarSign, Globe, BarChart3, Zap } from "lucide-react";
import { ppAgrandirHeading } from "./fonts";
import { TotalRecoveredCard } from "@/components/total-recovered-card";
import { PricingCard } from "@/components/pricing-card";
import { BlurFade, StaggerContainer, fadeInUpVariant } from "@/components/ui/animations";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* Left: Visual (Mobile: Order 2, Desktop: Order 1) */}
            <div className="order-2 md:order-1 relative z-10 flex justify-center md:justify-end">
              <BlurFade delay={0.2} duration={0.8} yOffset={30}>
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                  {/* Abstract representation of the Wallet Character */}
                  <div className="absolute inset-0 bg-[#00A97F]/10 rounded-[3rem] rotate-3 blur-3xl"></div>
                  <div className="absolute inset-4 bg-white border border-gray-100 rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-9xl filter drop-shadow-sm">👛</div>
                    <div className="absolute -top-4 -right-4 bg-white text-[#00A97F] font-bold px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rotate-12 border border-gray-100">
                      Found it!
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Right: Content (Mobile: Order 1, Desktop: Order 2) */}
            <div className="order-1 md:order-2 flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">

              <BlurFade delay={0.1} duration={0.8}>
                <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[0.9] tracking-tight`}>
                  The simple, transparent way to find your money.
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} duration={0.8}>
                <p className="text-lg text-text-muted max-w-md leading-relaxed">
                  Pockret helps you discover and reclaim money from unclaimed settlements, refunds, and forgotten subscriptions.
                </p>
              </BlurFade>

              <BlurFade delay={0.5} duration={0.8} className="w-full">
                <div className="flex flex-col w-full max-w-md gap-4">
                  <Link href="/login" className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Button size="lg" className="w-full h-14 px-8 rounded-full bg-[#00A97F] hover:bg-[#009e74] text-white font-bold text-lg transition-all active:scale-95 border-0">
                        Find My Money
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/how-it-works" className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Button variant="outline" size="lg" className="w-full h-14 px-8 rounded-full border-2 border-gray-200 bg-white text-foreground font-bold text-lg hover:bg-gray-50 transition-all">
                        How It Works
                      </Button>
                    </motion.div>
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
              <h3 className="text-2xl font-bold text-foreground">Smart Money Finder</h3>
              <p className="text-text-muted leading-relaxed">
                Search public databases and class action settlements in seconds. We find the checks you forgot to cash.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-2">
                📊
              </div>
              <h3 className="text-2xl font-bold text-foreground">Subscription Analyzer</h3>
              <p className="text-text-muted leading-relaxed">
                For EU users, we detect unfair recurring charges and help you cancel them with one click.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-2">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-foreground">Auto-Claim Generator</h3>
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
              <h2 className="text-4xl font-bold text-foreground">Watch your balance grow.</h2>
              <p className="text-lg text-text-muted">
                Track every dollar found. Earn badges for reclaiming settlements and canceling zombie subscriptions.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Country-based experience.</h2>
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

        {/* Pricing Section */}
        <section className="w-full py-20 px-6 bg-[#F9FAFB]">
          <PricingCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
