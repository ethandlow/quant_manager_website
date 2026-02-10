import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/specifications/variables",
  title: "Variable Reference",
  description: "Built-in variables and platform AdditionalInfo keys you can use in custom formulas.",
  category: "Specifications",
  steps: [
    {
      id: "overview",
      title: "Variable Overview",
      body: "Variables are dynamic values that Quant Manager tracks for each account. You can reference them in custom formulas by wrapping the variable name in square brackets, e.g. [balance]. Variable names are case-insensitive.",
    },
    {
      id: "built-in-stored",
      title: "Built-in Stored Variables",
      body: "[balance] — Current account balance (from the platform).\n\n[peak] — Highest balance reached (tracked by Quant Manager).\n\n[peak open pnl] — Highest unrealized P&L while the account had open positions; resets to 0 when the account is flat.\n\n[day starting balance] — Balance at the start of the trading day; resets at 5PM EST.\n\n[closed balance] — Last balance recorded when the account had no open positions.",
    },
    {
      id: "built-in-formula",
      title: "Built-in Formula Results",
      body: "These are computed from the account's configured formulas. A formula cannot reference its own result (circular reference returns NaN).\n\n[open pnl] — Result of the account's Open P&L formula.\n\n[closed pnl] — Result of the account's Closed P&L formula.\n\n[total pnl] — Result of the account's Total P&L formula.\n\n[trailing balance] — Result of the account's Trailing Balance formula.\n\n[drawdown] — Result of the account's Drawdown formula.",
    },
    {
      id: "platform-additional",
      title: "Platform / AdditionalInfo",
      body: "Any other [key] is resolved from the platform account's AdditionalInfo (connection-dependent). For example, some connections may expose keys such as equity or position count. If the key is not found or the value is not parseable, the formula gets 0.",
    },
    {
      id: "usage-notes",
      title: "Usage Notes",
      body: "Variables update as the plugin evaluates. You can combine them with arithmetic operators and functions (see Formula Syntax). If a formula result is unavailable (e.g. circular reference or missing formula), it evaluates to NaN and comparisons treat it as false.",
    },
  ],
};
