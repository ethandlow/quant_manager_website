import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/navigating-the-toolbar",
  title: "Navigating the Toolbar",
  description:
    "Learn about the toolbar buttons for sorting summaries, flattening positions, and locking accounts.",
  category: "Guides",
  steps: [
    {
      id: "summary-button",
      title: "Summary Button",
      body: "Click the 'Summary' button to reveal options to sort by account type, firm, or both.",
      image: "/docs/summary-button.png",
    },
    {
      id: "flatten-all",
      title: "Flatten All Button",
      body: "Click the 'Flatten All' button to flatten all of your accounts' open positions.",
      image: "/docs/flatten-all-button.png",
    },
    {
      id: "lock-all",
      title: "Lock All Button",
      body: "Click the 'Lock All' button to lock all of your accounts for the rest of the session. You will be prompted to confirm before the action is applied.",
      image: "/docs/lock-all-button.png",
    },
    {
      id: "timeout-button",
      title: "Timeout Button",
      body: "Click the 'Timeout' button to immediately lock all of your accounts for the timeout duration set in the settings.",
      image: "/docs/timeout-button.png",
    },
  ],
};
