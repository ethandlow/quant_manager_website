"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

interface DocsThreeColumnLayoutProps {
  navItems: NavItem[];
  children: React.ReactNode;
}

export default function DocsThreeColumnLayout({
  navItems,
  children,
}: DocsThreeColumnLayoutProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeLabel =
    navItems.find((item) => pathname === item.href)?.label ??
    navItems[0]?.label;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-[1440px] px-4 lg:px-8 py-8 lg:py-12"
    >
      {/* Mobile nav toggle */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="w-full flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#0f141c]/60 px-4 py-3 text-sm text-[#eef2f7]"
        >
          <span>{activeLabel}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`text-[#9ba6b3] transition-transform ${mobileNavOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {mobileNavOpen && (
          <nav className="mt-2 rounded-xl border border-white/[0.08] bg-[#0f141c]/80 backdrop-blur-sm overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                  pathname === item.href
                    ? "text-[#6b7bff] bg-[#6b7bff]/[0.06]"
                    : "text-[#9ba6b3] hover:text-[#eef2f7] hover:bg-white/[0.03]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Three-column layout */}
      <div className="flex gap-8">
        {/* Left sidebar — page nav */}
        <aside className="hidden lg:block w-52 shrink-0">
          <nav className="sticky top-36 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  pathname === item.href
                    ? "text-[#6b7bff] bg-[#6b7bff]/[0.08] font-medium"
                    : "text-[#9ba6b3] hover:text-[#eef2f7] hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Center content — full width */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </motion.div>
  );
}
