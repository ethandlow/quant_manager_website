import DocsStepPage from "@/components/DocsStepPage";
import { pageData } from "./data";

export default function ManualInstallationGuidePage() {
  return (
    <DocsStepPage
      title={pageData.title}
      description={pageData.description}
      steps={pageData.steps}
    />
  );
}
