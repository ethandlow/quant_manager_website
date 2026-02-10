import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/editing-accounts",
  title: "Editing Accounts",
  navLabel: "Editing Account Details",
  description: "Learn how to modify account settings and risk rules.",
  category: "Guides",
  steps: [
    {
      id: "open-edit",
      title: "Open Edit Account",
      body: "Right-click an account in the dashboard and select 'Edit Account' to open the editing window.",
    },
    {
      id: "change-details",
      title: "Change Account Details",
      body: "In the Edit Account window you can change the firm name, connection type, and all risk rules for the selected account.",
    },
  ],
};
