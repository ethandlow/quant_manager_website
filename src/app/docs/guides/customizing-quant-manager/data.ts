import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/customizing-quant-manager",
  title: "Customizing Quant Manager",
  description: "Tailor Quant Manager's settings and appearance to your preferences.",
  category: "Guides",
  steps: [
    {
      id: "open-settings",
      title: "Open Settings",
      body: "Click the three bars in the top left corner of the Quant Manager panel and select 'Settings'.",
      image: "/docs/open-settings.png",
    },
    {
      id: "main-settings",
      title: "Main Settings",
      body: "Configure the general font, line spacing, grid lines, and grid color in the 'View' tab.",
      image: "/docs/main-settings.png",
    },
    {
      id: "column-settings",
      title: "Column Settings",
      body: "Click the dropdown menu to see all of the individual column settings. You can change the header settings, column alignment, and colors. For columns that are numbers, you can also change the coloring mode to reflect the value of the number.",
      image: "/docs/column-settings.png",
    },
    {
      id: "summary-settings",
      title: "Summary Table Settings",
      body: "To edit settings for the summary table, right click the table and select 'Settings'.",
      image: "/docs/summary-settings.png",
    }
  ],
};
