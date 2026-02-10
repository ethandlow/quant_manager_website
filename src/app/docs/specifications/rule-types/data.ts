import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/specifications/rule-types",
  title: "Rule Types",
  description: "How profit target, loss limit, trailing balance, and scheduled flatten work and when they lock.",
  category: "Specifications",
  steps: [
    {
      id: "overview",
      title: "Overview",
      body: "Quant Manager enforces risk by locking accounts (and optionally flattening them). Rules are evaluated on a timer. Locked accounts can auto-unlock at a set time or at the daily reset (5PM EST).",
    },
    {
      id: "profit-target",
      title: "Profit Target",
      body: "Per-account numeric target. When Total P&L (from the account's Total PnL formula) reaches or exceeds the target, the account is flattened and locked until 5PM EST. A flag prevents repeat triggers until the next daily reset.",
    },
    {
      id: "loss-limit",
      title: "Loss Limit",
      body: "Per-account numeric limit (stored as a positive number; interpreted as a negative threshold). When Total P&L is at or below minus the loss limit, the account is flattened and locked until 5PM EST. A flag resets at 5PM EST.",
    },
    {
      id: "trailing-balance",
      title: "Trailing Balance",
      body: "Per-account formula plus mode. Realized mode: compare balance to the trailing value only when there are no open positions. Unrealized mode: compare regardless of positions. If balance falls below the trailing value, the account is locked for the configured duration (1hr, 2hr, 4hr, All Day, or Custom). The trailing value comes from the account's Trailing Balance formula.",
    },
    {
      id: "scheduled-flatten",
      title: "Scheduled Flatten",
      body: "Optional per-account scheduled time. At that time the account is flattened (and the next run is scheduled one day later). Multiple flattens per day and catch-up for missed days are supported.",
    },
    {
      id: "no-drawdown-rule",
      title: "What Does Not Trigger a Lock",
      body: "Drawdown is a computed value for display and formulas only; there is no drawdown rule that locks the account. Timeout (see Settings Reference) locks all accounts until a set time from the main toolbar or setup flow.",
    },
  ],
};
