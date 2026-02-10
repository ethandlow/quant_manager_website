import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/lock-durations",
  title: "Customizing Lock Durations",
  navLabel: "Lock Button Durations",
  description: "Configure how long accounts remain locked after a rule triggers.",
  category: "Guides",
  steps: [
    {
      id: "open-settings",
      title: "Open Settings",
      body: "Lock durations can be customized in the Quant Manager settings. Navigate to the settings panel to adjust lock behavior.",
    },
    {
      id: "set-durations",
      title: "Set Individual Durations",
      body: "You can set the lock duration for each lock button individually, giving you fine-grained control over how long accounts stay locked.",
    },
  ],
};
