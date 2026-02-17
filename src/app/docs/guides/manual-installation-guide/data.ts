import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/manual-installation-guide",
  title: "Manual Installation Guide",
  description:
    "Install Quant Manager manually if you are unable to run the installer.",
  category: "Guides",
  steps: [
    {
      id: "download-dll",
      title: "Download the Quant Manager DLL",
      body: "Download the QuantManager.dll file from: https://github.com/ethandlow/QuantManagerBuild-Latest/raw/refs/heads/main/QuantManager.dll",
    },
    {
      id: "locate-folder",
      title: "Locate the plug-ins folder",
      body: "Find your Quantower installation folder and navigate to Quantower\\Settings\\Scripts\\plug-ins. The installation folder is typically in Desktop\\Quantower or C:\\Quantower.",
    },
    {
      id: "install-and-restart",
      title: "Install and restart",
      body: "Create a folder named QuantManager inside the plug-ins directory, put the downloaded QuantManager.dll file inside it, and then restart Quantower.",
    },
  ],
};
