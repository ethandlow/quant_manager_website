"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { href: "/docs/guides", label: "Guides" },
  { href: "/docs/specifications", label: "Specifications" },
  { href: "/docs/changelog", label: "Changelog" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Background glow — radial gradient on mobile, blur on desktop */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(107,123,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(56,224,196,0.03) 0%, transparent 70%)",
          }}
        />
        <div className="hidden md:block absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6b7bff]/[0.04] blur-[120px]" />
        <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#38e0c4]/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 min-h-screen pt-16">
        {/* Tab bar — pinned below main navbar */}
        <div className="sticky top-16 z-30 border-b border-white/[0.06] bg-[#0b0f14]/98">
          <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
            <nav className="flex gap-1 overflow-x-auto scrollbar-none -mb-px">
              {tabs.map((tab) => {
                const isActive = pathname.startsWith(tab.href);
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`shrink-0 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                      isActive
                        ? "text-[#6b7bff] border-[#6b7bff]"
                        : "text-[#9ba6b3] border-transparent hover:text-[#eef2f7]"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Page content */}
        {children}
      </div>
    </>
  );
}
