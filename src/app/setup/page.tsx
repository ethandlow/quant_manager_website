"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "1",
    title: "Purchase Quant Manager",
    description:
      'Click "Get Access" to purchase the lifetime license from our Gumroad store. You\'ll receive a download link immediately after payment.',
  },
  {
    number: "2",
    title: "Download & Extract",
    description:
      "Download the Quant Manager installer from your Gumroad library. Run the installer and follow the instructions to install Quant Manager.",
  },
  {
    number: "3",
    title: "Activate Your License",
    description:
      "Open Quant Manager from the Quantower panels menu. Enter your license key (included in your purchase receipt) to activate.",
  },
  {
    number: "4",
    title: "Connect Your Accounts",
    description:
      "Link your trading accounts through Quantower's connection manager. Quant Manager will automatically detect and display all connected accounts.",
  },
  {
    number: "5",
    title: "Configure Risk Rules",
    description:
      "Set profit targets, loss limits, trailing balance protection, and timed locks for each account or group. Rules activate immediately.",
  },
];

export default function SetupPage() {
  return (
    <>
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6b7bff]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#38e0c4]/[0.03] blur-[120px]" />
      </div>

      <main className="relative z-10 pt-28 pb-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
              Setup Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#eef2f7] mb-4">
              Up and running in minutes
            </h1>
            <p className="text-lg text-[#9ba6b3] max-w-md mx-auto">
              Follow these steps to install, activate, and configure Quant
              Manager in Quantower.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group relative rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 backdrop-blur-sm p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-[#6b7bff]/10 ring-1 ring-[#6b7bff]/20">
                    <span className="text-sm font-bold text-[#6b7bff]">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#eef2f7] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#9ba6b3] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-14"
          >
            <p className="text-[#9ba6b3] mb-5">
              Need help? Reach out to our support team.
            </p>
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
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
