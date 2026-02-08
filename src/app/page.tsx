"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero fades and drifts up as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <>
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6b7bff]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#38e0c4]/[0.03] blur-[120px]" />
      </div>

      {/* ── Hero Section ── */}
      <section ref={heroRef} className="relative z-10 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          {/* Hero background video — fades with section on scroll */}
          <div className="absolute inset-0">
            <video
              ref={heroVideoRef}
              src="/candlestick-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
              aria-hidden
            />
            {/* Blend into site background */}
            <div className="absolute inset-0 bg-[#0b0f14]/60" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0f14] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0f14] to-transparent" />
          </div>

          {/* Hero text — centered */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#eef2f7] leading-[1.08]">
                Risk Management for
                <br />
                <span className="bg-gradient-to-r from-[#6b7bff] to-[#38e0c4] bg-clip-text text-transparent">
                  Quantower
                </span>
              </h1>
              <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-[#9ba6b3] max-w-xl mx-auto leading-relaxed">
                Trade with confidence. Stop blowing up.
              </p>
              {/* <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://ldqtrading.gumroad.com/l/quantmanager?wanted=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#6b7bff] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Access
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8h14M9 2l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#9ba6b3]/50 font-medium">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-[#9ba6b3]/30"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Features Section ── */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
              Key Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#eef2f7]">
              Take your trading to the next level
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 backdrop-blur-sm p-7 hover:border-white/[0.12] transition-all duration-300 hover:bg-[#0f141c]/80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6b7bff]/20 to-[#38e0c4]/10 mb-5 ring-1 ring-white/[0.06]">
                  <span className="text-lg">{feat.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-[#eef2f7] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#9ba6b3] leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsCarousel />

      {/* ── CTA Band ── */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#eef2f7] mb-5">
            Start protecting your capital today
          </h2>
          <p className="text-lg text-[#9ba6b3] mb-10 max-w-xl mx-auto">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
          <a
            href="https://ldqtrading.gumroad.com/l/quantmanager?wanted=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#6b7bff] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 8h14M9 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

const features = [
  {
    icon: "📊",
    title: "Unified Dashboard",
    description:
      "Easily monitor equity, P&L, drawdown, lock status across all accounts.",
  },
  {
    icon: "🎯",
    title: "Daily Profit Target",
    description:
      "Set a daily profit target. Auto-flatten and lock your account when hit.",
  },
  {
    icon: "🛡️",
    title: "Daily Loss Limit",
    description:
      "Set a daily loss limit. Auto-flatten and lock your account when hit.",
  },
  {
    icon: "⏱️",
    title: "Timed Locks",
    description:
      "Schedule lock windows to prevent trading during high-risk periods or after-hours.",
  },
  {
    icon: "📐",
    title: "Trailing Balance Protection",
    description:
      "Automatically trail and lock when drawdown exceeds your threshold.",
  },
  {
    icon: "🔒",
    title: "Account Flatten & Lock",
    description:
      "Instantly flatten all positions and lock an account with a single click when rules trigger.",
  },
  {
    icon: "🎨",
    title: "Templates",
    description:
      "Create and manage templates to quickly apply risk rules to multiple accounts.",
  },
  {
    icon: "🔧",
    title: "Custom Rules",
    description:
      "Customize your risk rules to fit your trading style using our custom formula builder.",
  },
  {
    icon: "🔔",
    title: "Real-time Monitoring",
    description:
    "Monitor your accounts in real-time. Get alerts when rules are triggered.",
  }
];
