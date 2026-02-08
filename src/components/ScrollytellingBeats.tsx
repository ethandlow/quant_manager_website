"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Beat {
  id: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  rangeStart: number;
  rangeEnd: number;
}

const beats: Beat[] = [
  {
    id: "hero",
    title: "The Most Advanced Account Manager for Quantower",
    subtitle:
      "Complete visibility and control over all your accounts. Protect capital, stay compliant, trade with confidence.",
    rangeStart: 0,
    rangeEnd: 0.2,
  },
  {
    id: "dashboard",
    title: "Unified Account Dashboard",
    subtitle:
      "One dashboard with a high-level summary and detailed table. Monitor equity, P&L, drawdown, lock status, and grouped accounts.",
    rangeStart: 0.25,
    rangeEnd: 0.45,
  },
  {
    id: "rules",
    title: "Define the Rules. We Enforce Them.",
    subtitle:
      "Profit targets, loss limits, trailing balance protection, and timed locks — enforced automatically every session.",
    rangeStart: 0.5,
    rangeEnd: 0.7,
  },
  {
    id: "cta",
    title: "Ready for a deeper look?",
    subtitle: "View pricing and setup, then get access.",
    cta: {
      label: "Get Access",
      href: "https://ldqtrading.gumroad.com/l/quantmanager?wanted=true",
    },
    rangeStart: 0.75,
    rangeEnd: 0.95,
  },
];

interface BeatOverlayProps {
  beat: Beat;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function BeatOverlay({ beat, containerRef }: BeatOverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fadeStart = beat.rangeStart;
  const peakStart = beat.rangeStart + 0.03;
  const peakEnd = beat.rangeEnd - 0.03;
  const fadeEnd = beat.rangeEnd;

  const opacity = useTransform(
    scrollYProgress,
    [fadeStart, peakStart, peakEnd, fadeEnd],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeStart, peakStart, peakEnd, fadeEnd],
    [40, 0, 0, -30]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <div className="max-w-2xl pointer-events-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#eef2f7] mb-4 md:mb-6 leading-[1.1]">
          {beat.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#9ba6b3] max-w-xl mx-auto leading-relaxed">
          {beat.subtitle}
        </p>
        {beat.cta && (
          <a
            href={beat.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-8 md:mt-10 rounded-xl bg-[#6b7bff] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            {beat.cta.label}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1 8h14M9 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface ScrollytellingBeatsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollytellingBeats({
  containerRef,
}: ScrollytellingBeatsProps) {
  return (
    <>
      {beats.map((beat) => (
        <BeatOverlay key={beat.id} beat={beat} containerRef={containerRef} />
      ))}
    </>
  );
}
