import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "open-settings",
    title: "Open Quant Manager Settings",
    body: "Access the Quant Manager settings panel to customize how the plugin behaves across your dashboard and accounts.",
  },
  {
    id: "adjust-options",
    title: "Adjust Options",
    body: "Configure display preferences, default values, and other behavior to match your workflow.",
  },
];

export default function CustomizingQuantManagerPage() {
  return (
    <DocsStepPage
      title="Customizing Quant Manager"
      description="Tailor Quant Manager settings and behavior to your preferences."
      steps={steps}
    />
  );
}
