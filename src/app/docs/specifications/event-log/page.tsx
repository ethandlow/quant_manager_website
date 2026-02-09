import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "overview",
    title: "Overview",
    body: "Quant Manager logs to the Quantower event log with a consistent prefix (e.g. [Quant Manager]). Filter by this tag in the Event Log plugin to see why an account was locked or flattened.",
  },
  {
    id: "lock-flatten-messages",
    title: "Lock and Flatten Messages",
    body: "Account X flattened and locked - Profit target reached.\n\nAccount X flattened and locked - Loss limit reached.\n\nAccount X locked - Trailing balance violated (Realized mode). Balance: ..., Trailing: ...\n\nAccount X locked - Trailing balance violated (Unrealized mode). Balance: ..., Trailing: ...\n\nAccount X locked until HH:mm:ss (duration).\n\nAccount X flattened at scheduled time .... Next flatten scheduled for ....\n\nAccount X auto-unlocked (5PM EST daily reset).\n\nAccount X daily enforcement flags reset (5PM EST reset).\n\nAccount X timed lock expired (...) - auto-unlocking.\n\nAccount X flattened - [reason] (e.g. Flattened by user, Locked for 1 hour).",
  },
  {
    id: "other-messages",
    title: "Other Messages",
    body: "All accounts timed out until HH:mm:ss.\n\nLicense validation messages (e.g. License approved, Invalid license).\n\nErrors (e.g. Error locking account, Error flattening account) are logged at error level.",
  },
];

export default function EventLogPage() {
  return (
    <DocsStepPage
      title="Event Log"
      description="What appears in the log and how to filter it."
      steps={steps}
    />
  );
}
