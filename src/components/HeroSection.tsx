"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // Defer video play until after hydration so it doesn't compete with JS parsing
  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.playbackRate = 0.7;
      video.play().catch(() => {
        // Autoplay may be blocked on some browsers; ignore silently
      });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <section ref={heroRef} className="relative z-10 h-screen overflow-hidden">
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        {/* Hero background video — deferred play, poster for fast LCP */}
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            src="/candlestick-loop.mp4"
            preload="none"
            poster="/candlestick-poster.jpg"
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
          <div className="max-w-4xl mx-auto hero-text-enter">
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
          </div>
        </div>
      </motion.div>

      {/* Scroll hint — CSS animation instead of Framer Motion */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 scroll-hint-bounce">
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
            <circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              className="scroll-hint-dot"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
