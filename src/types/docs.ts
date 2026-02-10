export interface PageStep {
  id: string;
  title: string;
  body: string;
  image?: string;
}

export interface PageData {
  href: string;
  title: string;
  /** Label shown in the sidebar nav (defaults to title if omitted) */
  navLabel?: string;
  description: string;
  category: "Guides" | "Specifications";
  steps: PageStep[];
}
