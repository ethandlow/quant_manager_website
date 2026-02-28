import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#000000]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0f141c] ring-1 ring-white/[0.08]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-blocked.png"
                  alt=""
                  className="h-4 w-4 object-contain opacity-90"
                  width={16}
                  height={16}
                />
              </div>
              <span className="text-sm  text-[#eef2f7] tracking-tight">
                Quant Manager
              </span>
            </div>
            <p className="text-xs text-[#9ba6b3]/60 max-w-xs">
              3rd party plugin for account oversight and automated risk management for Quantower
              traders.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-[#eef2f7]/40 uppercase tracking-wider">
                Product
              </span>
              <Link href="/pricing" className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors">
                Docs
              </Link>
              <Link href="/faqs" className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-[#eef2f7]/40 uppercase tracking-wider">
                Links
              </span>
              <a
                href="https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors"
              >
                Get Access
              </a>
              <a
                href="https://accounts.quantower.com/referral?referral_code=TVs%2bKJljX6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors"
              >
                Quantower
              </a>
              <a
                href="mailto:ldqtrading.nt@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://discord.gg/qjZgYt24yD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ba6b3] hover:text-[#eef2f7] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9ba6b3]/40">
            &copy; {new Date().getFullYear()} Quant Manager. All rights
            reserved.
          </p>
          <p className="text-xs text-[#9ba6b3]/30 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Built for professional traders.</span>
            <span className="text-[#9ba6b3]/25">·</span>
            <a
              href="https://www.flaticon.com/free-icons/blocked"
              title="blocked icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ba6b3]/40 hover:text-[#9ba6b3]/60 transition-colors"
            >
              Blocked icons created by zky.icon — Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
