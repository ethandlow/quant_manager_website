"use client";

import { useRef, useEffect, useCallback } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const rafId = useRef<number>(0);

  // Compute scroll progress and set CSS custom properties
  const updateScrollVars = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionHeight = rect.height;

    // scrollYProgress equivalent: 0 at top, 1 when section has scrolled fully past
    const progress = Math.min(
      Math.max(-rect.top / (sectionHeight || 1), 0),
      1,
    );

    // heroOpacity: [0, 0.7] → [1, 0]
    const opacity = Math.max(1 - progress / 0.7, 0);
    // heroY: [0, 1] → [0, -80]
    const y = -80 * progress;
    // heroScale: [0, 1] → [1, 0.97]
    const scale = 1 - 0.03 * progress;

    el.style.setProperty("--hero-opacity", String(opacity));
    el.style.setProperty("--hero-y", `${y}px`);
    el.style.setProperty("--hero-scale", String(scale));
  }, []);

  useEffect(() => {
    // Defer video play until after hydration
    const video = heroVideoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
    const onVisibility = () => {
      if (!heroVideoRef.current) return;
      if (document.hidden) heroVideoRef.current.pause();
      else heroVideoRef.current.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);

    updateScrollVars();
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        updateScrollVars();
        rafId.current = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      const v = heroVideoRef.current;
      if (v) {
        v.pause();
        v.removeAttribute("src");
        v.load();
      }
    };
  }, [updateScrollVars]);

  return (
    <section ref={heroRef} className="relative z-10 h-screen overflow-hidden">
      <div
        style={{
          opacity: "var(--hero-opacity, 1)",
          transform:
            "translate3d(0, var(--hero-y, 0px), 0) scale(var(--hero-scale, 1))",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        {/* Hero background video */}
        <div className="absolute inset-0 bg-[#0b0f14]">
          <video
            ref={heroVideoRef}
            src="/qm_hero_video.mp4"
            poster="/qm_hero_background.png"
            preload="metadata"
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden
          />
          {/* Blend edges into site background (#0b0f14) */}
          <div className="absolute inset-0 bg-[#0b0f14]/40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                "linear-gradient(to bottom, #0b0f14 0%, transparent 15%)",
                "linear-gradient(to top, #0b0f14 0%, transparent 35%)",
                "linear-gradient(to right, #0b0f14 0%, transparent 20%)",
                "linear-gradient(to left, #0b0f14 0%, transparent 20%)",
              ].join(", "),
            }}
          />
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
            <a
              href="https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#6b7bff] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
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
        </div>
      </div>

      {/* Scroll hint — CSS animation, no Framer Motion */}
      <div
        style={{ opacity: "var(--hero-opacity, 1)" }}
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
      </div>
    </section>
  );
}
