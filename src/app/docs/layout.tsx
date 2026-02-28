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
      <div className="relative z-10 min-h-screen pt-16">
        {/* Tab bar — pinned below main navbar */}
        <div className="sticky top-16 z-30 border-b border-white/[0.06] bg-[#000000]/98">
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
                        ? "text-[#38e0c4] border-[#38e0c4]"
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
