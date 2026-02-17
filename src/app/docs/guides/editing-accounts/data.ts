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
      body: "Right-click an account in the dashboard and select 'Edit Account' to open the Edit Account window.",
      image: "/docs/edit-account-button.png",
    },
    {
      id: "template-name",
      title: "Template Name",
      body: "The first section shows the template name assigned to the account.",
      image: "/docs/template-name.png",
    },
    {
      id: "account-information",
      title: "Account Information",
      body: "The second section displays the account information including Account ID, Equity, Firm, Type, Visible, Lock Status, Unlock Time, and Flatten at Time.",
      image: "/docs/account-info.png",
    },
    {
      id: "limits",
      title: "Limits",
      body: "The third section contains the Limits with Daily Profit Target and Daily Stop Loss. Set these to define your risk boundaries for the account.",
      image: "/docs/limits.png",
    },
    {
      id: "formulas",
      title: "Formulas",
      body: "The fourth section defines the formulas for Open P&L, Closed P&L, Total P&L, and Drawdown. These determine how each metric is calculated from the connection data.",
      image: "/docs/formulas.png",
    },
    {
      id: "trail-settings",
      title: "Trail Settings",
      body: "The fifth section configures the Trail Formula and Trail Lock settings, including Trailing Balance Formula, Trailing Mode, Lock Duration, and Custom Minutes.",
      image: "/docs/trail-settings.png",
    },
    {
      id: "account-values",
      title: "Account Values",
      body: "The sixth section displays the important account numbers such as Balance, Peak, Day starting balance, Open P&L, Closed P&L, Total P&L, and Drawdown.",
      image: "/docs/account-values.png",
    },
    {
      id: "variables",
      title: "Variables",
      body: "The seventh section lists all of the variables from the connection provider for the account. These can be used in formulas to reference account-specific data.",
      image: "/docs/variables.png",
    },
    {
      id: "editing-fields",
      title: "Editing Fields",
      body: "All fields that are underlined can be edited. Click the field to open the input field and type the new value.",
      image: "/docs/editing-fields.png",
    }
  ],
};
