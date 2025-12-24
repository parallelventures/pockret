'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2 } from "lucide-react";
import { ppAgrandirHeading } from "./fonts";
import { BlurFade, SlideIn, FadeScale, SlideUp, RevealList, RevealItem, BounceFade } from "@/components/ui/animations";
import { FAQ } from "@/components/faq";
import { StaticRadialGradient } from '@paper-design/shaders-react';
import { IconArc } from "@/components/icon-arc";
import { HowItWorksCarousel } from "@/components/how-it-works-carousel";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] relative">
      {/* Background Gradient - covers navbar and hero */}
      <div className="absolute top-0 left-0 right-0 h-[800px] md:h-[900px] z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(66.29% 80.51% at 50% 100%, #7B61FF 0%, #4F7CFF 10.08%, #12BFFF 22.84%, #00E0C6 36.69%, #A6FF4D 50.73%, #FBC54A 71.44%, #FF4FD8 93.29%)',
            opacity: 0.4
          }}
        />
        {/* Fade overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #F9FAFB)' }}
        />
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col relative z-10">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-6 overflow-hidden">

          {/* Icon Arc - temporarily disabled
          <IconArc
            icons={[
              '/icons/netflix.png',
              '/icons/spotify.png',
              '/icons/discord.png',
              '/icons/duolingo.png',
              '/icons/disneyplus.png',
              '/icons/chatgpt.png',
              '/icons/canva.png',
              '/icons/primevideo.png',
              '/icons/strava.png',
              '/icons/revolut.png',
              '/icons/tinder.png',
              '/icons/chess.png'
            ]}
          />
          */}

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">

            <BlurFade delay={0.1} duration={0.8}>
              <h1 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[0.9] tracking-tight`}>
                Recover the money companies owe you, instantly.
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.8}>
              <p className="text-lg text-black/60 max-w-md leading-relaxed">
                You connect your accounts, we uncover every dollar companies owe you.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} duration={0.8}>
              <div className="flex flex-col w-full max-w-md gap-4 items-center">
                <Link href="/signup" className="w-full">
                  <Button size="lg" className={`${ppAgrandirHeading.className} w-full h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] hover:scale-95 text-white font-bold text-base transition-all active:scale-90 border-0`}>
                    Scan My Accounts
                  </Button>
                </Link>
                <p className="text-black/40 text-sm">
                  Read-only • No transfers • Takes 60 seconds
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* What we find */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto border-t border-black/10 pt-20">
            <SlideUp duration={0.7}>
              <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                Money you didn't know you were losing.
              </h2>
              <p className="text-black/60 mb-12 max-w-2xl">
                Most people are owed hundreds of dollars and have no idea. We find it for you.
              </p>
            </SlideUp>

            <RevealList className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
              {[
                { title: "Forgotten subscriptions", desc: "Services you signed up for but no longer use." },
                { title: "Duplicate charges", desc: "The same charge appearing twice on your statement." },
                { title: "Class action settlements", desc: "Lawsuits you're eligible for but didn't know about." },
                { title: "Hidden fees", desc: "Charges that were never properly disclosed to you." },
                { title: "Overcharges", desc: "When you paid more than you should have." },
                { title: "Bank errors", desc: "Processing mistakes and unauthorized fees." },
              ].map((item, index) => (
                <RevealItem
                  key={index}
                >
                  <div className="bg-white rounded-2xl p-6 border border-black/5 h-full">
                    <h3 className={`${ppAgrandirHeading.className} text-base font-bold text-black mb-2`}>
                      {item.title}
                    </h3>
                    <p className="text-black/50 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealList>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 bg-white border-y border-black/10">
          <div className="max-w-6xl mx-auto">
            <FadeScale className="text-center mb-12">
              <h2 className={`${ppAgrandirHeading.className} text-3xl md:text-5xl font-bold text-black mb-4`}>
                Three steps. Zero effort.
              </h2>
              <p className="text-lg text-black/60 max-w-xl mx-auto">
                Connect your accounts. Sit back. We find the money companies owe you.
              </p>
            </FadeScale>

            <SlideUp delay={0.2}>
              <HowItWorksCarousel />
            </SlideUp>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <SlideIn direction="left" duration={0.8}>
              <div className="max-w-2xl mb-20">
                <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-4">
                  Security
                </p>
                <h2 className={`${ppAgrandirHeading.className} text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-6`}>
                  We can see your transactions.<br />
                  <span className="text-black/30">We can never touch your money.</span>
                </h2>
              </div>
            </SlideIn>

            {/* Plaid Section */}
            <div className="border-t border-black/10 py-16">
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Left - Content */}
                <SlideUp delay={0.1} className="flex-1">
                  <a
                    href="https://plaid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-8 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <img src="/Plaid.svg" alt="Plaid" className="h-14" />
                  </a>

                  <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black mb-4`}>
                    Powered by Plaid
                  </h3>

                  <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-lg">
                    Plaid is the secure bridge between your bank and apps like Venmo, Robinhood, and Coinbase. Over 8,000 companies trust it. Now we do too.
                  </p>

                  <div className="space-y-4">
                    {[
                      "We never see or store your bank password",
                      "Read-only access — we can't move money",
                      "Disconnect anytime with one click"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="text-black/70">{text}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://plaid.com/safety/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-black/50 hover:text-black text-sm transition-colors"
                  >
                    Learn more about Plaid →
                  </a>
                </SlideUp>

                {/* Right - Stats */}
                <SlideIn direction="right" delay={0.2} className="lg:w-72 flex-shrink-0">
                  <div className="space-y-8">
                    <div>
                      <p className={`${ppAgrandirHeading.className} text-5xl font-bold text-black mb-1`}>12K+</p>
                      <p className="text-black/40 text-sm">Banks connected</p>
                    </div>
                    <div>
                      <p className={`${ppAgrandirHeading.className} text-5xl font-bold text-black mb-1`}>8K+</p>
                      <p className="text-black/40 text-sm">Apps using Plaid</p>
                    </div>
                    <div>
                      <p className={`${ppAgrandirHeading.className} text-5xl font-bold text-black mb-1`}>0</p>
                      <p className="text-black/40 text-sm">Security breaches</p>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-black/10 py-16">
              <div className="flex flex-col lg:flex-row gap-12">
                <BounceFade className="lg:w-72 flex-shrink-0">
                  <p className="text-black/40 text-sm font-medium uppercase tracking-widest mb-2">
                    Q&A
                  </p>
                  <h3 className={`${ppAgrandirHeading.className} text-2xl font-bold text-black`}>
                    Common questions
                  </h3>
                </BounceFade>

                <div className="flex-1">
                  <FAQ
                    items={[
                      {
                        question: "Is it really safe to connect my bank?",
                        answer: "Absolutely. We use Plaid, the same technology trusted by Venmo, Robinhood, and over 8,000 financial apps. Your bank credentials are never shared with us — you log in directly through your bank's secure portal. We only get read-only access to your transactions."
                      },
                      {
                        question: "Can you move money from my account?",
                        answer: "No, never. We have read-only access, which means we can only view your transactions. We cannot initiate transfers, make payments, or move any money. It's like giving someone a window to look through — they can see, but they can't touch."
                      },
                      {
                        question: "What happens to my data?",
                        answer: "Your data is encrypted with 256-bit AES encryption (the same standard used by banks) and stored securely. We never sell your data to third parties. You can delete your account and all associated data at any time with one click."
                      },
                      {
                        question: "How do you make money?",
                        answer: "We offer a premium subscription that unlocks more features. Free users can scan and see what they're owed; premium users get full access to recovery tools and automated claims. We don't sell your data — our business model is simple and transparent."
                      },
                      {
                        question: "What if I want to disconnect my bank?",
                        answer: "You can disconnect any linked account at any time from your profile settings. Once disconnected, we immediately stop accessing your data. You can also delete your entire account, which permanently removes all your data from our servers."
                      },
                      {
                        question: "How long does a scan take?",
                        answer: "Most scans complete in under 60 seconds. We analyze your recent transaction history to find forgotten subscriptions, duplicate charges, and potential refunds. You'll see your results immediately after the scan completes."
                      }
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Trust Points */}
            <RevealList className="border-t border-black/10 pt-16 grid md:grid-cols-3 gap-12" staggerDelay={0.12}>
              <RevealItem>
                <h4 className="font-semibold text-black mb-2">256-bit encryption</h4>
                <p className="text-black/50 text-sm leading-relaxed">
                  Same encryption used by banks. Your data is unreadable without the key.
                </p>
              </RevealItem>
              <RevealItem>
                <h4 className="font-semibold text-black mb-2">No data selling</h4>
                <p className="text-black/50 text-sm leading-relaxed">
                  Your transactions are never sold to advertisers or third parties.
                </p>
              </RevealItem>
              <RevealItem>
                <h4 className="font-semibold text-black mb-2">SOC 2 certified</h4>
                <p className="text-black/50 text-sm leading-relaxed">
                  Independently audited security. The gold standard for data protection.
                </p>
              </RevealItem>
            </RevealList>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <FadeScale delay={0.1}>
            <div className="max-w-2xl mx-auto text-center border-t border-black/10 pt-20">
              <h2 className={`${ppAgrandirHeading.className} text-2xl md:text-3xl font-bold text-black mb-4`}>
                Ready to find your leaks?
              </h2>
              <p className="text-black/60 mb-8">
                Free scan. See exactly what you're losing.
              </p>
              <Link href="/signup">
                <Button size="lg" className={`${ppAgrandirHeading.className} h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#020617] text-white font-bold text-base transition-all active:scale-95 border-0`}>
                  Scan My Accounts
                </Button>
              </Link>
              <p className="text-black/40 text-sm mt-4">
                No credit card required
              </p>
            </div>
          </FadeScale>
        </section>
      </main>

      <Footer />
    </div >
  );
}
