import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "duration-options",
    title: "Lock Duration Options",
    body: "Durations used for manual lock buttons and for trailing-balance locks: 1hr, 2hr, 4hr, All Day, and Custom. Custom uses a per-account or per-setting minute value.",
  },
  {
    id: "all-day",
    title: "All Day",
    body: "Unlock time is 5PM EST (today or the next day if it is already past 5PM EST). The time is stored in local time.",
  },
  {
    id: "timed-lock",
    title: "Timed Lock Behavior",
    body: "Each account can have an unlock time. When the current time reaches it, the plugin auto-unlocks the account. Locking can optionally flatten the account (close positions and cancel orders) at the time of lock.",
  },
  {
    id: "daily-reset",
    title: "Daily Reset (5PM EST)",
    body: "At 5PM EST the plugin resets profit-target and loss-limit enforcement flags, sets day-starting balance to current balance, and unlocks any account that is still locked (so \"lock for the rest of the day\" ends here). The next reset time is stored so the reset survives plugin restarts.",
  },
];

export default function LockDurationsAndDailyResetPage() {
  return (
    <DocsStepPage
      title="Lock Durations & Daily Reset"
      description="1hr, 2hr, 4hr, All Day, Custom, 5PM EST reset, and auto-unlock behavior."
      steps={steps}
    />
  );
}
