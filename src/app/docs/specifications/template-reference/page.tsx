import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "overview",
    title: "Overview",
    body: "Templates save and apply a set of account settings (classification, limits, formulas, trailing settings) so multiple accounts can be configured consistently. Create and save templates from the Edit Account window; load or delete them from the same place or from the dashboard.",
  },
  {
    id: "fields",
    title: "Fields Stored in a Template",
    body: "Name — Unique identifier for the template.\n\nClassification: Firm, Type (e.g. broker or account category).\n\nLimits: ProfitTarget, LossLimit (stored as strings; can be numeric or formula expressions).\n\nFormulas: OpenPnlFormula, ClosedPnlFormula, TotalPnlFormula, DrawdownFormula, TrailingBalanceFormula (stored as expression strings).\n\nTrail settings: TrailingMode (Disabled, Realized, Unrealized), TrailingLockDuration (1hr, 2hr, 4hr, All Day, Custom), TrailingCustomMinutes (used when duration is Custom).",
  },
  {
    id: "applying",
    title: "Applying a Template",
    body: "Applying a template overwrites the corresponding fields on the selected account(s). You can apply from the Edit Account window (Load Template) or from the dashboard by selecting accounts and choosing Apply Template. Only non-empty template fields overwrite the account; blank fields in the template leave the account value unchanged.",
  },
];

export default function TemplateReferencePage() {
  return (
    <DocsStepPage
      title="Template Reference"
      description="What a template stores and how it applies to accounts."
      steps={steps}
    />
  );
}
