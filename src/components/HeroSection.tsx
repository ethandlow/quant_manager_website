import Link from "next/link";

const CTA_URL = "https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00";

export default function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden">
      {/* Ambient background: radial gradient + faint dot grid — pure CSS, no JS */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #27496D22 0%, transparent 70%), #000000",
        }}
        aria-hidden="true"
      />
      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #38e0c4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Subtle teal glow at center-top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #38e0c4, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-28 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0f141c]/70 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#38e0c4]" />
          <span className="text-xs text-[#9ba6b3] tracking-wide">
            Risk Management for Quantower
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] tracking-tight text-[#eef2f7] leading-[1.1] max-w-3xl">
          Quantower, with a built-in risk officer.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#9ba6b3] max-w-xl leading-relaxed">
          Auto-flatten, auto-lock, and protect every account the moment a daily
          loss, position target, or trailing-balance rule is hit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#27496D] px-7 py-3.5 text-base text-white shadow-none hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Access
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 8h14M9 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link
            href="/docs/guides/quickstart"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.1] bg-transparent px-7 py-3.5 text-base text-[#9ba6b3] hover:text-[#eef2f7] hover:border-white/[0.2] transition-all"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </section>
  );
}
