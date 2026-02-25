"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const CTA_URL =
  "https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00";

const included = [
  "Unified account dashboard",
  "Real-time equity & P&L monitoring",
  "Profit targets & loss limits",
  "Trailing balance protection",
  "Timed trading locks",
  "One-click flatten & lock",
  "Grouped account management",
  "Lifetime updates",
  "Priority support",
];

export default function PricingPage() {
  return (
    <>
      {/* Background glow — radial gradient on mobile, blur on desktop */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(107,123,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(56,224,196,0.03) 0%, transparent 70%)",
          }}
        />
        <div className="hidden md:block absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6b7bff]/[0.04] blur-[120px]" />
        <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#38e0c4]/[0.03] blur-[120px]" />
      </div>

      <main className="relative z-10 pt-28 pb-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#eef2f7] mb-4">
              One price. Lifetime access.
            </h1>
            <p className="text-lg text-[#9ba6b3] max-w-md mx-auto">
              No subscriptions. No recurring fees.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl border border-white/[0.08] bg-[#0f141c]/70 backdrop-blur-sm overflow-hidden"
          >
            {/* Accent top line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#6b7bff] to-transparent" />

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm text-[#9ba6b3] mb-1">Quant Manager</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-[#eef2f7] tracking-tight">
                      $500
                    </span>
                    <span className="text-base text-[#9ba6b3]">one-time</span>
                  </div>
                  <p className="text-sm text-[#38e0c4] mt-2 font-medium">
                    Lifetime license — includes all future updates
                  </p>
                </div>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#6b7bff] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
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

              {/* What's included */}
              <div>
                <p className="text-sm font-medium text-[#eef2f7]/50 uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 shrink-0 text-[#38e0c4]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-[#9ba6b3]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
