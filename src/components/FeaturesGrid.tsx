"use client";

import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: "\u{1F4CA}",
    title: "Unified Dashboard",
    description:
      "Easily monitor equity, P&L, drawdown, lock status across all accounts.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Daily Profit Target",
    description:
      "Set a daily profit target. Auto-flatten and lock your account when hit.",
  },
  {
    icon: "\u{1F6E1}\uFE0F",
    title: "Daily Loss Limit",
    description:
      "Set a daily loss limit. Auto-flatten and lock your account when hit.",
  },
  {
    icon: "\u{23F1}\uFE0F",
    title: "Timed Locks",
    description:
      "Schedule lock windows to prevent trading during high-risk periods or after-hours.",
  },
  {
    icon: "\u{1F4D0}",
    title: "Trailing Balance Protection",
    description:
      "Automatically trail and lock when drawdown exceeds your threshold.",
  },
  {
    icon: "\u{1F512}",
    title: "Account Flatten & Lock",
    description:
      "Instantly flatten all positions and lock an account with a single click when rules trigger.",
  },
  {
    icon: "\u{1F3A8}",
    title: "Templates",
    description:
      "Create and manage templates to quickly apply risk rules to multiple accounts.",
  },
  {
    icon: "\u{1F527}",
    title: "Custom Rules",
    description:
      "Customize your risk rules to fit your trading style using our custom formula builder.",
  },
  {
    icon: "\u{1F514}",
    title: "Real-time Monitoring",
    description:
      "Monitor your accounts in real-time. Get alerts when rules are triggered.",
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
          <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
            Key Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#eef2f7]">
            Take your trading to the next level
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 backdrop-blur-sm p-7 hover:border-white/[0.12] transition-all duration-300 hover:bg-[#0f141c]/80 feature-card ${
                visible ? "feature-card-visible" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
