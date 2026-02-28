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
      {/* ── Hero Section ── */}
      <HeroSection />

      {/* ── Features Section (lazy-loaded) ── */}
      <FeaturesGrid />

      {/* ── Testimonials (lazy-loaded) ── */}
      <TestimonialsCarousel />

      {/* ── CTA Band (static server HTML — zero JS) ── */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl  tracking-tight text-[#eef2f7] mb-5">
            Start protecting your capital today
          </h2>
          <p className="text-lg text-[#9ba6b3] mb-10 max-w-xl mx-auto">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
          <a
            href="https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-none bg-[#27496D] px-8 py-4 text-base  text-white hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
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
