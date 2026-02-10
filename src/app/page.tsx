import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), {
  loading: () => <div className="py-24 md:py-32" />,
});

const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
  { loading: () => <div className="py-24 md:py-32" /> }
);

export default function Home() {
  return (
    <>
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6b7bff]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#38e0c4]/[0.03] blur-[120px]" />
      </div>

      {/* ── Hero Section ── */}
      <HeroSection />

      {/* ── Features Section (lazy-loaded) ── */}
      <FeaturesGrid />

      {/* ── Testimonials (lazy-loaded) ── */}
      <TestimonialsCarousel />

      {/* ── CTA Band (static server HTML — zero JS) ── */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#eef2f7] mb-5">
            Start protecting your capital today
          </h2>
          <p className="text-lg text-[#9ba6b3] mb-10 max-w-xl mx-auto">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
          <a
            href="https://ldqtrading.gumroad.com/l/quantmanager?wanted=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#6b7bff] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#6b7bff]/30 hover:bg-[#7d8cff] hover:shadow-[#6b7bff]/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
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
      </section>

      <Footer />
    </>
  );
}
