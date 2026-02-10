import DocsStepPage from "@/components/DocsStepPage";
import { pageData } from "./data";

export default function ConfiguringTimeoutDurationPage() {
  return (
    <DocsStepPage
      title={pageData.title}
      description={pageData.description}
      steps={pageData.steps}
    />
  );
}
