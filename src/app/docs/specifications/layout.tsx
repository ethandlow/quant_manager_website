"use client";

import DocsThreeColumnLayout from "@/components/DocsThreeColumnLayout";
import { specPages } from "./_pages";

const specNavItems = specPages.map((p) => ({
  href: p.href,
  label: p.navLabel ?? p.title,
}));

export default function SpecificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsThreeColumnLayout navItems={specNavItems}>
      {children}
    </DocsThreeColumnLayout>
  );
}
