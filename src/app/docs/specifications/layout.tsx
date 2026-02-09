"use client";

import DocsThreeColumnLayout from "@/components/DocsThreeColumnLayout";

const specNavItems = [
  { href: "/docs/specifications/variables", label: "Variable Reference" },
  { href: "/docs/specifications/formula-syntax", label: "Formula Syntax" },
  { href: "/docs/specifications/rule-types", label: "Rule Types" },
  { href: "/docs/specifications/settings-reference", label: "Settings Reference" },
  { href: "/docs/specifications/lock-durations-and-daily-reset", label: "Lock Durations & Daily Reset" },
  { href: "/docs/specifications/event-log", label: "Event Log" },
  { href: "/docs/specifications/template-reference", label: "Template Reference" },
];

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
