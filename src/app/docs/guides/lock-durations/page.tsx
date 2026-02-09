import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "open-settings",
    title: "Open Settings",
    body: "Lock durations can be customized in the Quant Manager settings. Navigate to the settings panel to adjust lock behavior.",
  },
  {
    id: "set-durations",
    title: "Set Individual Durations",
    body: "You can set the lock duration for each lock button individually, giving you fine-grained control over how long accounts stay locked.",
  },
];

export default function LockDurationsPage() {
  return (
    <DocsStepPage
      title="Customizing Lock Durations"
      description="Configure how long accounts remain locked after a rule triggers."
      steps={steps}
    />
  );
}
