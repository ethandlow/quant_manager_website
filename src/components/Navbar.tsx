"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
];

const CTA_URL =
  "https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#000000]/98 transition-[border-color] duration-300 ${
          scrolled ? "border-b border-white/[0.06]" : "border-b border-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo — Blocked icon by zky.icon (Flaticon); attribution in footer */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f141c] ring-1 ring-white/[0.08] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-blocked.png"
                  alt=""
                  className="h-5 w-5 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-[15px] tracking-tight text-[#eef2f7] group-hover:text-white transition-colors">
                Quant Manager
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-0 bg-[#27496D] px-4 py-2 text-sm text-white shadow-none hover:bg-[#27496D] transition-all hover:-translate-y-px active:translate-y-0"
              >
                Get Access
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="opacity-70"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button — CSS transitions instead of Framer Motion */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[1.5px] w-5 bg-[#eef2f7] origin-center transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[#eef2f7] transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[#eef2f7] origin-center transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — CSS transition instead of Framer Motion */}
      <div
        className={`fixed inset-x-0 z-40 bg-[#000000]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden transition-all duration-250 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2.5 pointer-events-none"
        }`}
        style={{ top: "calc(4rem + env(safe-area-inset-top, 0px))" }}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-[#9ba6b3] hover:text-[#eef2f7] rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center rounded-2xl bg-[#27496D] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#27496D] transition-colors"
          >
            Get Access
          </a>
        </div>
      </div>
    </>
  );
}
