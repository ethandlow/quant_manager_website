"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Quant Manager?",
    answer:
      "Quant Manager is a Quantower plugin that provides complete account oversight and automated risk enforcement for traders. It gives you a unified dashboard to monitor all your accounts and enforce risk rules like profit targets, loss limits, trailing balance protection, and timed locks.",
  },
  {
    question: "What platforms does it work with?",
    answer:
      "Quant Manager is built exclusively for Quantower. It works with any broker or data feed that Quantower supports, including Rithmic, CQG, Interactive Brokers, and more.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "No. Quant Manager is a one-time purchase of $500 for a lifetime license. This includes all future updates at no additional cost.",
  },
  {
    question: "How does the risk enforcement work?",
    answer:
      "You configure rules per account or account group — such as daily loss limits, profit targets, max drawdown, trailing balance, and time-based locks. Quant Manager monitors your accounts in real-time and automatically flattens positions and locks accounts when rules are triggered. No manual intervention needed.",
  },
  {
    question: "Can I manage multiple accounts?",
    answer:
      "Yes. Quant Manager is designed for multi-account management. You can view all accounts in a single dashboard, group them, and apply risk rules at the account or group level.",
  },
  {
    question: "What happens when a rule triggers?",
    answer:
      "When a risk rule triggers (e.g., you hit your daily loss limit), Quant Manager will automatically flatten all open positions for that account and lock it to prevent further trading. You can configure which actions happen for each rule.",
  },
  {
    question: "Can I override a lock?",
    answer:
      "Locks can be manually released from the Quant Manager dashboard if needed. However, the system is designed to protect you from emotional or impulsive decisions, so overriding should be deliberate.",
  },
  {
    question: "How do I get support?",
    answer:
      "Support is available via the Gumroad purchase page. After purchasing, you'll receive access to our support channel for setup assistance and any questions.",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="border border-white/[0.06] rounded-xl overflow-hidden bg-[#0f141c]/40 hover:border-white/[0.1] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left"
      >
        <span className="text-[15px] font-medium text-[#eef2f7] pr-4">
          {faq.question}
        </span>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[#6b7bff]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9 3v12M3 9h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <p className="text-sm text-[#9ba6b3] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQsPage() {
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
            className="text-center mb-14"
          >
            <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
              FAQs
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#eef2f7] mb-4">
              Frequently asked questions
            </h1>
            <p className="text-lg text-[#9ba6b3] max-w-md mx-auto">
              Everything you need to know about Quant Manager.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-14"
          >
            <p className="text-[#9ba6b3] mb-5">
              Still have questions? We&apos;re here to help.
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
