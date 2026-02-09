"use client";

import DocsThreeColumnLayout from "@/components/DocsThreeColumnLayout";

const guideNavItems = [
  { href: "/docs/guides/quickstart", label: "Quick Start Guide" },
  { href: "/docs/guides/customizing-quant-manager", label: "Customizing Quant Manager" },
  { href: "/docs/guides/lock-durations", label: "Lock Button Durations" },
  { href: "/docs/guides/timeout", label: "Timeout Button Duration" },
  { href: "/docs/guides/hiding-accounts", label: "Hiding Accounts" },
  { href: "/docs/guides/editing-accounts", label: "Editing Account Details" },
  { href: "/docs/guides/templates", label: "Account Templates" },
  { href: "/docs/guides/formulas", label: "Custom Formulas" },
  { href: "/docs/guides/event-log", label: "Quantower Event Log" },
];

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
