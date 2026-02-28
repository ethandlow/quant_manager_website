"use client";

import { useRef, useEffect, useCallback } from "react";
import QuantManagerReplica from "./QuantManagerReplica";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  const updateScrollVars = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionHeight = rect.height;
    const progress = Math.min(
      Math.max(-rect.top / (sectionHeight || 1), 0),
      1,
    );

    const opacity = Math.max(1 - progress / 0.7, 0);
    const y = -80 * progress;
    const scale = 1 - 0.03 * progress;

    el.style.setProperty("--hero-opacity", String(opacity));
    el.style.setProperty("--hero-y", `${y}px`);
    el.style.setProperty("--hero-scale", String(scale));
  }, []);

  useEffect(() => {
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
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateScrollVars]);

  return (
    <section ref={heroRef} className="relative z-10 overflow-hidden">
      {/* Solid black background — stretches to content height */}
      <div className="absolute inset-0 bg-[#000000]" />

      <div
        style={{
          opacity: "var(--hero-opacity, 1)",
          transform:
            "translate3d(0, var(--hero-y, 0px), 0) scale(var(--hero-scale, 1))",
        }}
        className="relative flex flex-col items-center w-full overflow-x-hidden py-0"
      >
        {/* Hero block: one-line title, tagline, CTA — centered near top; shrink-0 keeps it above replica */}
        <div className="shrink-0 w-full max-w-6xl mx-auto px-6 pt-40 pb-8 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-[#eef2f7] leading-tight">
            Risk Management for Quantower
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#9ba6b3]">
            Trade with confidence. Stop blowing up.
          </p>
          <a
            href="https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-none bg-[#27496D] px-6 py-3 text-base  text-white shadow-none hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

        {/* Quant Manager Replica — capped height so features follow soon after */}
        <div className="w-full max-w-6xl mx-auto px-6 pb-12 flex items-start justify-center">
          <div
            className="relative w-full rounded-md overflow-hidden border border-[#1e2a38] bg-[#0b1016]"
            style={{
              boxShadow: "0 30px 70px -20px rgba(0,0,0,0.5)",
              aspectRatio: "1140/633",
              maxHeight: "min(55vh, 520px)",
            }}
          >
            <QuantManagerReplica />
          </div>
        </div>
      </div>
    </section>
  );
}
