import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/quickstart",
  title: "Quick Start Guide",
  description: "Get up and running with Quant Manager in just a few minutes.",
  category: "Guides",
  steps: [
    {
      id: "purchase",
      title: "Purchase Quant Manager",
      body: 'Click "Get Access" to purchase the lifetime license from our Gumroad store. You\'ll receive a download link immediately after payment.',
    },
    {
      id: "download-install",
      title: "Download & Install",
      body: "Download the Quant Manager installer from your Gumroad library. Run the installer and follow the on-screen instructions.",
    },
    {
      id: "activate-license",
      title: "Activate Your License",
      body: "Open Quant Manager from the Quantower panels menu. Enter your license key (included in your purchase receipt) to activate.",
    },
    {
      id: "connect-accounts",
      title: "Connect Your Accounts",
      body: "Link your trading accounts through Quantower's connection manager. Quant Manager will automatically detect and display all connected accounts in the dashboard.",
    },
    {
      id: "configure-rules",
      title: "Configure Risk Rules",
      body: "Set profit targets, loss limits, trailing balance protection, and timed locks for each account or group. Rules activate immediately.",
    },
  ],
};
