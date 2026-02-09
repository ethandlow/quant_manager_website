import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "hide-from-dashboard",
    title: "Hide an Account",
    body: "Use the dashboard or account list to hide an account from view. Hidden accounts are not removed; they can be shown again later.",
  },
  {
    id: "show-again",
    title: "Show Hidden Accounts",
    body: "Access the option to show hidden accounts when you want them to appear in the dashboard again.",
  },
];

export default function HidingAccountsPage() {
  return (
    <DocsStepPage
      title="Hiding Accounts"
      description="Hide accounts from the dashboard and show them again when needed."
      steps={steps}
    />
  );
}
