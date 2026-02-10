import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/templates",
  title: "Using Templates",
  navLabel: "Account Templates",
  description: "Save, apply, and manage reusable account configuration templates.",
  category: "Guides",
  steps: [
    {
      id: "create-template",
      title: "Create a Template",
      body: "In the Edit Account window, enter a name for the template in the text field and click the save icon in the top-right corner to open the template options.",
    },
    {
      id: "apply-template",
      title: "Apply a Template",
      body: "Click the save icon in the top-right corner of the Edit Account window and select 'Load Template'. You can also apply templates from the dashboard by right-clicking and selecting 'Apply Template'. Hold Shift to bulk-select or Ctrl to single-select accounts.",
    },
    {
      id: "delete-template",
      title: "Delete a Template",
      body: "In the Edit Account window, click the save icon in the top-right corner and select 'Delete Template' to remove the currently loaded template.",
    },
  ],
};
