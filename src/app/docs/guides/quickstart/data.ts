import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/quickstart",
  title: "Quick Start Guide",
  description: "Get up and running with Quant Manager in just a few minutes using the Quant Manager installer.",
  category: "Guides",
  steps: [
    {
      id: "purchase",
      title: "Purchase Quant Manager",
      body: 'Click "Get Access" to purchase the lifetime license. You\'ll receive a download link with your license key in your email receipt immediately after payment. Email us if you do not receive your license key.',
    },
    {
      id: "download",
      title: "Download Installer",
      body: "Download the Quant Manager installer from your email receipt or from https://github.com/ethandlow/QuantManagerBuild-Latest/raw/refs/heads/main/QuantManagerInstaller.exe",
    },
    {
      id: "install",
      title: "Install Quant Manager",
      body: "Run the installer and follow the on-screen instructions.\n\nNote: The installer is not officially signed, so you may need to bypass security warnings in your antivirus software. If you are not able to run the installer, please follow the Manual Installation Guide.",
      image: "/docs/installer.png",
    },
    {
      id: "open-quant-manager",
      title: "Open Quant Manager",
      body: "Click the Quantower logo in the top left corner of the Quantower window, and search for 'Quant Manager'. Click the star icon to pin Quant Manager to the toolbar, and click the icon to open Quant Manager.",
      image: "/docs/open-quant-manager.png",
    },
    {
      id: "open-settings",
      title: "Open Settings",
      body: "Click the three bars in the top left corner of the Quant Manager panel and select 'Settings'.",
      image: "/docs/open-settings.png",
    },
    {
      id: "activate-license",
      title: "Activate Your License",
      body: "Enter your license key in the settings panel to activate. You can find your license key in your Gumroad library or your purchase receipt.",
      image: "/docs/license.png",
    },
    {
      id: "set-as-default",
      title: "Set as Default",
      body: "Click the three bars in the top left again, and click 'Set as default' to avoid entering your key each time you open Quant Manager.",
      image: "/docs/set-as-default.png",
    },
    {
      id: "verify-activation",
      title: "Verify Activation",
      body: "You can verify that your license is active if you are able to see the 'Total' row in the summary table. Once you connect to your connections, Quant Manager will automatically populate the accounts and summary tables. You're all set!",
      image: "/docs/verify-activation.png",
    }
  ],
};
