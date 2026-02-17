import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/locking-accounts",
  title: "Locking Accounts",
  description:
    "Select one or more accounts and lock them for a specified duration to prevent unwanted changes.",
  category: "Guides",
  steps: [
    {
      id: "select-accounts",
      title: "Select accounts",
      body: "Click the row of the account you want to lock from the account table.",
    },
    {
      id: "ctrl-click",
      title: "Select multiple accounts (Ctrl + Click)",
      body: "Hold Ctrl and click on individual accounts to select multiple accounts. Selected accounts will be highlighted.",
      image: "/docs/ctrl-select.png",
    },
    {
      id: "shift-click",
      title: "Select a range (Shift + Click)",
      body: "Hold Shift and click to select a batch of consecutive accounts between your last selection and the account you click.",
      image: "/docs/shift-select.png",
    },
    {
      id: "click-lock-confirm",
      title: "Click the lock button and confirm",
      body: "Click one of the lock duration buttons (e.g. Lock 10m, Lock 1h) and confirm in the dialog to lock your selected accounts.",
      image: "/docs/click-lock.png",
    },
  ],
};
