"use client";

import { motion } from "framer-motion";
import { changelog, formatChangelogDate } from "@/data/changelog";

export default function ChangelogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-[1440px] px-4 lg:px-8 py-8 lg:py-12"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl  text-[#eef2f7] tracking-tight mb-3">
            Changelog
          </h1>
          <p className="text-sm text-[#9ba6b3] mb-10">
            A history of updates, improvements, and fixes to Quant Manager.
          </p>
        </motion.div>

        {changelog.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 p-8 text-center"
          >
            <div className="text-[#9ba6b3]/60 text-sm">
              No entries yet. Check back after the next release.
            </div>
          </motion.div>
        ) : (
          <ul className="space-y-6 text-left">
            {changelog.map((entry, i) => (
              <motion.li
                key={`${entry.version}-${entry.date}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + 0.06 * i }}
                className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <span className="text-lg  text-[#eef2f7]">
                    v{entry.version}
                  </span>
                  <span className="text-sm text-[#9ba6b3]">
                    {formatChangelogDate(entry.date)}
                  </span>
                </div>
                <ul className="space-y-2 list-disc list-inside text-sm text-[#9ba6b3] leading-relaxed">
                  {entry.changes.map((change, ci) => (
                    <li key={ci}>{change}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
