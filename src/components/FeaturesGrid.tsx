"use client";

import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3v14M3 10h14"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
          rx="2"
          stroke="#38e0c4"
          strokeWidth="1.5"
        />
        <path
          d="M3 7h14M7 3v14"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Daily Loss Limit",
    description: "Set your max daily loss. We do the rest.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 16V4M6 8l4-4 4 4"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16h12"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "Daily Profit Target",
    description: "Hit your number. Walk away. Automatically.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="7" height="5" rx="1" stroke="#38e0c4" strokeWidth="1.5" />
        <rect x="11" y="5" width="7" height="5" rx="1" stroke="#38e0c4" strokeWidth="1.5" />
        <rect x="2" y="12" width="7" height="3" rx="1" stroke="#38e0c4" strokeWidth="1.5" opacity="0.5" />
        <rect x="11" y="12" width="7" height="3" rx="1" stroke="#38e0c4" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    title: "Multi-Account Dashboard",
    description: "Every account. Every number. One panel.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#38e0c4" strokeWidth="1.5" />
        <path
          d="M10 6v4l3 2"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17.5C5 16.5 3.5 15 3.5 13"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Max Position Size",
    description: "Hard size caps, enforced on every order.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#38e0c4" strokeWidth="1.5" />
        <path
          d="M7 4V3M13 4V3"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 8h14"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M7 12h2M11 12h2"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Trading Window + Scheduled Flatten",
    description: "No trades outside your hours. Period.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 6h12M4 10h8M4 14h5"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="15" cy="14" r="3" stroke="#38e0c4" strokeWidth="1.5" />
        <path
          d="M15 13v1.5l1 1"
          stroke="#38e0c4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    ),
    title: "Risk Templates",
    description: "One risk profile. Twenty accounts. One click.",
  },
];

export default function FeaturesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-[#38e0c4] tracking-wider uppercase mb-3">
            Key Features
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-[#eef2f7]">
            Everything you need to trade protected
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-white/[0.06] bg-[#0f141c]/80 md:bg-[#0f141c]/60 md:backdrop-blur-sm p-7 hover:border-white/[0.12] transition-all duration-300 hover:bg-[#0f141c]/80 feature-card ${
                visible ? "feature-card-visible" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f141c] mb-5 ring-1 ring-white/[0.06]">
                {feat.icon}
              </div>
              <h3 className="text-base text-[#eef2f7] mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-[#9ba6b3] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
