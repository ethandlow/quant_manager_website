import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "open-timeout-settings",
    title: "Open Timeout Settings",
    body: "Navigate to the settings or account configuration where timeout duration is defined.",
  },
  {
    id: "set-timeout",
    title: "Set Timeout Duration",
    body: "Choose how long the timeout lasts before an action is applied or reset. This can be configured per account or globally.",
  },
];

export default function ConfiguringTimeoutDurationPage() {
  return (
    <DocsStepPage
      title="Configuring Timeout Duration"
      description="Set how long timeout periods last for your accounts or rules."
      steps={steps}
    />
  );
}
