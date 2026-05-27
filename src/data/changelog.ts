export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "1.0.1",
    date: "2026-05-27",
    changes: [
      "Fixed a bug where users could manually lock an account while in an emergency unlock to circumvent a lock duration.",
    ],
  },
  {
    version: "1.0.1",
    date: "2026-04-01",
    changes: [
      'Added "Peak Realized Balance" custom variable that resets daily.',
      'Added "Peak Unrealized Balance" custom variable that resets daily.',
    ],
  },
  {
    version: "1.0.0",
    date: "2026-03-24",
    changes: [
      "Updated to work with Quantower version 1.146.2. May not work with previous versions.",
    ],
  },
  {
    version: "0.0.9",
    date: "2026-03-03",
    changes: [
      "Added 'Lock/Unlock' option to quickly unlock/lock accounts from right-click menu.",
      "Added 'Emergency Unlock' option with number of emergency unlocks changeable in settings.",
    ],
  },
  {
    version: "0.0.8",
    date: "2026-02-28",
    changes: [
      "Added Statistics section in Edit Account with Starting Balance, Target Balance, Biggest Day, Minimum Daily Profit, Minimum Profit Days, Minimum Consistency, and Payout Eligibility.",
      "Added PAYOUT button to reset starting balance and profit day counter when payout conditions are met.",
      "Added Target Balance, Biggest Day, Consistency, Profit Days, and Payout Eligibility columns to the Quant Manager accounts table.",
    ],
  },
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
    date: "2026-02-07",
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
    changes: ["Initial beta release"],
  },
];

export function formatChangelogDate(iso: string): string {
  const [y, m, d] = iso.trim().split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

