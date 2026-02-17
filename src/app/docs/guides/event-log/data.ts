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
      body: "Quant Manager logs all events to the Quantower Event Log. Click the Quantower logo in the top left corner of Quantower, and open the Event Log plugin. ",
      image: "/docs/open-event-log.png",
    },
    {
      id: "check-logs",
      title: "Check Logs",
      body: "Look for events with the [Quant Manager] tag to see why an account was locked.",
      image: "/docs/event-log.png",
    }
  ],
};
