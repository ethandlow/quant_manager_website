import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/lock-durations",
  title: "Changing Lock Durations",
  navLabel: "Changing Lock Durations",
  description: "Configure how long accounts remain locked after a rule triggers.",
  category: "Guides",
  steps: [
    {
      id: "open-settings",
      title: "Open Settings",
      body: "Click the three bars in the top left corner of the Quant Manager panel and select 'Settings'.",
      image: "/docs/open-settings.png",
    },
    {
      id: "set-durations",
      title: "Set Individual Durations",
      body: "You can set the lock duration for each lock button individually, giving you fine-grained control over how long accounts stay locked.",
      image: "/docs/lock-settings.png"
    },
    {
      id: "use-lock-buttons",
      title: "Use Lock Buttons",
      body: "The lock buttons will appear in the Quant Manager panel when you have set the durations for the lock buttons. You can use them to lock accounts for a specific duration.",
      image: "/docs/lock-buttons.png"
    }
  ],
};
