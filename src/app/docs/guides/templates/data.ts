import type { PageData } from "@/types/docs";

export const pageData: PageData = {
  href: "/docs/guides/templates",
  title: "Using Templates",
  navLabel: "Account Templates",
  description: "Save, apply, and manage reusable account configuration templates.",
  category: "Guides",
  steps: [
    {
      id: "create-template",
      title: "Create a Template",
      body: "In the Edit Account window, enter a name for the template in the 'Template Name' field, click the save icon in the top-right corner, and select 'Save Template' to create a new template.",
      image: "/docs/save-template.png",
    },
    {
      id: "load-template",
      title: "Load a Template from Edit Account",
      body: "Click the save icon in the top-right corner of the Edit Account window and hover over 'Load Template' to reveal the saved templates and select the template you want to load.",
      image: "/docs/load-template.png",
    },
    {
      id: "load-template-from-dashboard",
      title: "Apply a Template from the Dashboard",
      body: "You can also load templates from the dashboard by right-clicking and selecting 'Apply Template'. Hold Shift to bulk-select or Ctrl to single-select accounts.",
      image: "/docs/apply-template.png",
    },
    {
      id: "delete-template",
      title: "Delete a Template",
      body: "In the Edit Account window, click the save icon in the top-right corner and select 'Delete Template' to remove the currently loaded template.",
      image: "/docs/delete-template.png",
    },
    {
      id: "open-template-folder",
      title: "Open the Template Folder",
      body: "Click the ssave icon in the top-right corner and select 'Open Templates Folder' to open the template folder.",
      image: "/docs/open-template-folder.png",
    },
    {
      id: "import-export-templates",
      title: "Import and Export Templates",
      body: "You can import and export templates to and from the template folder. Templates are saved as JSON files and can be imported by dragging and dropping the file into the template folder.",
      image: "/docs/template-folder.png",
    }
  ],
};
