"use client";

const entries = [
  {
    version: "0.0.7",
    date: "2026-02-27",
    changes: [
      "Added max position size limit (NOTE: ORDERS ARE STILL SENT TO THE EXCHANGE, THEY ARE ONLY CLOSED AFTER FILLED/CONFIRMED).",
      "Added enforcement mode for size limits: flatten, reduce, and warn.",
      "Templates now save and apply size limit settings with other risk settings.",
      "Updated flattening logic for more efficient flattening.",
      "Added licensing notifications.",
      "Added 'Show in Notification Center' to settings to get notified on accounts being locked.",
    ],
  },
  {
    version: "0.0.6",
    date: "2026-02-26",
    changes: [
      "Added 'Show Confirmations' in setting to toggle confirmation windows.",
      "Added 'Show Summary Table' in setting to give users the option to remove the summary table.",
      "Added 'Show toolbar' right-click menu to give users the option to remove the toolbar.",
      "Added 'Copy' to right-click menu in Edit Account to easily copy variables.",
      "Updated Trading Window UI text for clarification.",
    ],
  },
  {
    version: "0.0.5",
    date: "2026-02-26",
    changes: [
      "Fixed a bug where profit targets appeared negative.",
      "Added DEMO mode: when there is no license key, the plugin will show only one account.",
    ],
  },
  {
    version: "0.0.4",
    date: "2026-02-25",
    changes: [
      "Added position limits and enforcement modes: Win, Loss, Both, None.",
      "Position limits mode: per position or aggregate.",
      "Added trading window.",
      "UI updates: lock fields in Account Information; Flatten Time reordered.",
      "Added Lock Risk Settings button to lock risk fields until 6 PM EST.",
    ],
  },
  {
    version: "0.0.3",
    date: "2026-02-07 ",
    changes: [
      "Changed daily reset time to 6:00 PM EST to fix a bug where accounts were locked from a previous day's risk rules.",
    ],
  },
  {
    version: "0.0.2",
    date: "2026-02-03",
    changes: [
      "Released Quant Manager installer for easy installation and updates.",
      "Updated licensing system to use a new device footprint generation method.",
    ],
  },
  {
    version: "0.0.1",
    date: "2026-02-01",
    changes: [
      "Initial beta release",
    ],
  },
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

import { motion } from "framer-motion";
import { version } from "os";

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
          <h1 className="text-2xl md:text-3xl font-bold text-[#eef2f7] tracking-tight mb-3">
            Changelog
          </h1>
          <p className="text-sm text-[#9ba6b3] mb-10">
            A history of updates, improvements, and fixes to Quant Manager.
          </p>
        </motion.div>

        {entries.length === 0 ? (
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
            {entries.map((entry, i) => (
              <motion.li
                key={`${entry.version}-${entry.date}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + 0.06 * i }}
                className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <span className="text-lg font-semibold text-[#eef2f7]">
                    v{entry.version}
                  </span>
                  <span className="text-sm text-[#9ba6b3]">
                    {formatDate(entry.date)}
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






