import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/timeout",
  title: "Configuring Timeout Duration",
  navLabel: "Timeout Button Duration",
  description: "Set how long timeout periods last for your accounts or rules.",
  category: "Guides",
  steps: [
    {
      id: "open-timeout-settings",
      title: "Open Timeout Settings",
      body: "Navigate to the settings or account configuration where timeout duration is defined.",
    },
    {
      id: "set-timeout",
      title: "Set Timeout Duration",
      body: "Choose how long the timeout lasts before an action is applied or reset. This can be configured per account or globally.",
    },
  ],
};
