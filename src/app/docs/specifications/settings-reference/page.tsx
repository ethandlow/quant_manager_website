import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "overview",
    title: "Overview",
    body: "Global plugin settings are configured in the Quant Manager settings panel. Changes apply across the dashboard.",
  },
  {
    id: "timeout-minutes",
    title: "Timeout Minutes",
    body: "If greater than 0, a Timeout (or similar) action is available; when run, all accounts are locked until current time plus Timeout Minutes. When 0, the timeout control is typically hidden.",
  },
  {
    id: "lock-buttons",
    title: "Lock Button 1–4 Minutes",
    body: "Each lock button's duration in minutes. Buttons can be hidden by setting the value to 0. Label text is derived from the minutes (e.g. \"Lock 1h\", \"Lock 2h 30m\").",
  },
  {
    id: "privacy-mode",
    title: "Privacy Mode",
    body: "When enabled, account names are masked in the UI (e.g. first 5 characters plus asterisks).",
  },
  {
    id: "custom-names",
    title: "Use Custom Names",
    body: "When enabled, custom names (e.g. Firm and Type from Edit Account or from a template) are used for display instead of the raw account identifier.",
  },
  {
    id: "show-invisible",
    title: "Show Invisible Accounts",
    body: "When enabled, accounts marked hidden (invisible) still appear in the table. When disabled, they are filtered out.",
  },
];

export default function SettingsReferencePage() {
  return (
    <DocsStepPage
      title="Settings Reference"
      description="Timeout, lock buttons, Privacy Mode, Custom Names, and Show Invisible Accounts."
      steps={steps}
    />
  );
}
