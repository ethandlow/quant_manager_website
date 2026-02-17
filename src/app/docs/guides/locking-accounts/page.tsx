import DocsStepPage from "@/components/DocsStepPage";
import { pageData } from "./data";

export default function LockingAccountsPage() {
  return (
    <DocsStepPage
      title={pageData.title}
      description={pageData.description}
      steps={pageData.steps}
    />
  );
}
