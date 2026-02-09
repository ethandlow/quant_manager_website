import DocsStepPage, { Step } from "@/components/DocsStepPage";

const steps: Step[] = [
  {
    id: "arithmetic",
    title: "Arithmetic Operators",
    body: "+  Addition\n-  Subtraction\n*  Multiplication\n/  Division\n%  Modulo (remainder)\n\nExample: [balance] + [open pnl] * 0.5\n\nDivision by zero returns 0.",
  },
  {
    id: "comparison",
    title: "Comparison Operators",
    body: ">   Greater than\n<   Less than\n>=  Greater than or equal to\n<=  Less than or equal to\n==  Equal to\n!=  Not equal to\n\nComparison expressions evaluate to 1 (true) or 0 (false).",
  },
  {
    id: "functions",
    title: "Built-in Functions",
    body: "IF(condition, value_if_true, value_if_false)\nReturns one of two values based on a condition. Condition is true if non-zero; zero and NaN are false.\n\nMAX(a, b, ...)\nReturns the larger of two or more values. Requires at least 2 arguments.\n\nMIN(a, b, ...)\nReturns the smaller of two or more values. Requires at least 2 arguments.\n\nCircular reference: a formula cannot reference its own result (e.g. the Open P&L formula cannot use [open pnl]). Doing so returns NaN.",
  },
  {
    id: "examples",
    title: "Example Formulas",
    body: "Trailing Balance Protection:\nIF([peak open pnl] >= 1000, [balance] + [peak open pnl] * 0.5, [balance] - 1000)\n\nThis rule starts with a static $1,000 loss limit. Once the peak open profit exceeds $1,000, the trailing balance automatically adjusts so you never give back more than 50% of peak open profit.\n\nDynamic Profit Target:\nMAX([balance] * 0.02, 500)\n\nSets the profit target to 2% of balance or $500, whichever is greater.",
  },
];

export default function FormulaSyntaxPage() {
  return (
    <DocsStepPage
      title="Formula Syntax"
      description="Operators, functions, and example formulas for the custom rule engine."
      steps={steps}
    />
  );
}
