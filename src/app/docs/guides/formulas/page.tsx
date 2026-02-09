import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "using-variables",
    title: "Using Variables in Formulas",
    body: "Reference any variable from the 'Variables' section of the Edit Account window by wrapping the variable name in brackets, e.g. [balance]. The formula system supports basic arithmetic (+, -, *, /), comparison operators (>, <, >=, <=, ==, !=), and functions like IF(), MAX(), and MIN().",
  },
  {
    id: "trailing-balance-example",
    title: "Example: Trailing Balance Protection",
    body: "IF([peak open pnl] >= 1000, [balance] + [peak open pnl] * 0.5, [balance] - 1000)\n\nThis rule starts with a static $1,000 loss limit relative to the open position. Once the peak open profit exceeds $1,000, the trailing balance automatically adjusts so you never give back more than 50% of peak open profit.",
  },
];

export default function FormulasPage() {
  return (
    <DocsStepPage
      title="Custom Formulas"
      description="Create powerful custom rules using the formula system."
      steps={steps}
    />
  );
}
