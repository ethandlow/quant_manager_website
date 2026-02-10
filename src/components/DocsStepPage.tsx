"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { PageStep } from "@/types/docs";

export type Step = PageStep;

interface DocsStepPageProps {
  title: string;
  description?: string;
  steps: Step[];
}

export default function DocsStepPage({
  title,
  description,
  steps,
}: DocsStepPageProps) {
  const [activeStepId, setActiveStepId] = useState(steps[0]?.id ?? "");
  const stepRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveStepId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const step of steps) {
      const el = stepRefs.current[step.id];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-[#eef2f7] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-[#9ba6b3] text-sm md:text-base leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.section
              key={step.id}
              id={step.id}
              ref={(el) => {
                stepRefs.current[step.id] = el;
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + 0.06 * i }}
              className="scroll-mt-36 rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-[#6b7bff]/10 ring-1 ring-[#6b7bff]/20">
                  <span className="text-xs font-bold text-[#6b7bff]">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[#eef2f7] mb-2">
                    {step.title}
                  </h3>
                  <div className="text-sm text-[#9ba6b3] leading-relaxed whitespace-pre-line">
                    {step.body}
                  </div>
                  {step.image && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-white/[0.06]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Right sidebar — step tracker (desktop only) */}
      <aside className="hidden xl:block w-44 shrink-0">
        <nav className="sticky top-36 space-y-0.5">
          <p className="text-[10px] font-semibold text-[#9ba6b3]/60 uppercase tracking-widest mb-3 px-3">
            On this page
          </p>
          {steps.map((step) => {
            const isActive = activeStepId === step.id;
            return (
              <a
                key={step.id}
                href={`#${step.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = stepRefs.current[step.id];
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`block text-xs py-1.5 px-3 transition-all border-l-2 ${
                  isActive
                    ? "border-[#6b7bff] text-[#eef2f7] font-medium"
                    : "border-transparent text-[#9ba6b3]/70 hover:text-[#eef2f7] hover:border-white/20"
                }`}
              >
                {step.title}
              </a>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
