import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/hiding-accounts",
  title: "Hiding Accounts",
  description: "Hide accounts from the dashboard and show them again when needed.",
  category: "Guides",
  steps: [
    {
      id: "hide-from-dashboard",
      title: "Hide an Account",
      body: "Right click an account in the dashboard and select 'Hide Account' to hide it from the dashboard.",
      image: "/docs/show-hide.png",
    },
    {
      id: "hidden-account-names",
      title: "Hidden Account Names",
      body: "Hidden account names will be displayed with curly braces surrounding the account name in the dashboard and won't be visible when 'Show Invisible Accounts' is disabled.",
      image: "/docs/hidden-account.png",
    },
    {
      id: "show-hidden-accounts",
      title: "Show Hidden Accounts",
      body: "You can toggle 'Show Invisible Accounts' in the settings panel to show hidden accounts in the dashboard and unhide them.",
      image: "/docs/invisible-setting.png",
    },
  ],
};
