import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/timeout",
  title: "Changing Timeout Duration",
  navLabel: "Changing Timeout Duration",
  description: "Set how long timeout periods last for your accounts or rules.",
  category: "Guides",
  steps: [
    {
      id: "open-settings",
      title: "Open Settings",
      body: "Click the three bars in the top left corner of the Quant Manager panel and select 'Settings'.",
      image: "/docs/open-settings.png",
    },
    {
      id: "set-timeout",
      title: "Set Timeout Duration",
      body: "Set the number of minutes the timeout lasts.",
      image: "/docs/timeout-settings.png",
    },
  ],
};
