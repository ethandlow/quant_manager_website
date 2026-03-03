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
      "Quant Manager is a 3rd party plugin for Quantower that provides complete account oversight and automated risk enforcement for traders. It gives you a unified dashboard to monitor all your accounts and enforce risk rules like profit targets, loss limits, trailing balance protection, and timed locks.",
  },
  {
    question: "What platforms does it work with?",
    answer:
      "Quant Manager is built exclusively for Quantower. It is targeted towards prop traders trading with Rithmic connections, but works with any Quantower connection.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "No. Quant Manager is a one-time purchase for a lifetime license. This includes all future updates at no additional cost.",
  },
  {
    question: "How does the risk enforcement work?",
    answer:
      "Quantower has a built in account locking feature that Quant Manager leverages to enforce risk rules. No manual intervention needed.",
  },
  {
    question: "How do I use Quant Manager?",
    answer:
      "Visit our Docs page for detailed guides on installation, account editing, templates, custom formulas, and more.",
  },
  {
    question: "How do I get support?",
    answer:
      "If your question is not answered here, support is available via email or through our Discord server.",
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
          className="shrink-0 text-[#27496D]"
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
      <main className="relative z-10 pt-24 pb-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-medium text-[#38e0c4] tracking-wider uppercase mb-3">
              FAQs
            </p>
            <h1 className="text-4xl md:text-5xl  tracking-tight text-[#eef2f7] mb-4">
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
              href="mailto:ldqtrading.nt@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-none bg-[#27496D] px-7 py-3.5 text-base text-white shadow-none hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 4l6 4 6-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
