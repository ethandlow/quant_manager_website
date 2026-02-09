import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "check-reasons",
    title: "Check Lock Reasons",
    body: "Quant Manager logs all events to the Quantower Event Log. Open the Event Log plugin and filter for events with the [Quant Manager] tag to see why an account was locked.",
  },
];

export default function EventLogPage() {
  return (
    <DocsStepPage
      title="Using the Event Log"
      description="Learn how to use the event log to understand why an account was locked."
      steps={steps}
    />
  );
}
