const CTA_URL = "https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00";

const included = [
  "Unified account dashboard",
  "Real-time equity & P&L monitoring",
  "Profit targets & loss limits",
  "Trailing balance protection",
  "Timed trading locks",
  "One-click flatten & lock",
  "Grouped account management",
  "Lifetime updates",
  "Priority support",
];

export default function PricingSection() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#38e0c4] tracking-wider uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-[#eef2f7] mb-4">
            One price. Lifetime access.
          </h2>
          <p className="text-lg text-[#9ba6b3] max-w-md mx-auto">
            No subscriptions. No recurring fees.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-[#0f141c]/80 backdrop-blur-sm overflow-hidden">
          {/* Accent top line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#27496D] to-transparent" />

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm text-[#9ba6b3] mb-1">Quant Manager</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl text-[#eef2f7] tracking-tight">
                    $250
                  </span>
                  <span className="text-base text-[#9ba6b3]">one-time</span>
                </div>
                <p className="text-sm text-[#38e0c4] mt-2 font-medium">
                  Lifetime license — includes all future updates
                </p>
              </div>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#27496D] px-8 py-3.5 text-base text-white shadow-none hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                Get Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8h14M9 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* What's included */}
            <div>
              <p className="text-sm font-medium text-[#eef2f7]/50 uppercase tracking-wider mb-4">
                What&apos;s included
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 shrink-0 text-[#38e0c4]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-[#9ba6b3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
