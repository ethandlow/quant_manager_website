"use client";

import DocsThreeColumnLayout from "@/components/DocsThreeColumnLayout";
import { guidePages } from "./_pages";

const guideNavItems = guidePages.map((p) => ({
  href: p.href,
  label: p.navLabel ?? p.title,
}));

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsThreeColumnLayout navItems={guideNavItems}>
      {children}
    </DocsThreeColumnLayout>
  );
}
