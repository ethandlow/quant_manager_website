import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/event-log",
  title: "Using the Event Log",
  navLabel: "Quantower Event Log",
  description: "Learn how to use the event log to understand why an account was locked.",
  category: "Guides",
  steps: [
    {
      id: "check-reasons",
      title: "Check Lock Reasons",
      body: "Quant Manager logs all events to the Quantower Event Log. Open the Event Log plugin and filter for events with the [Quant Manager] tag to see why an account was locked.",
    },
  ],
};
