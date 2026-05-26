import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import LatestVersionCard from "@/components/LatestVersionCard";
import PricingSection from "@/components/PricingSection";
import InstallSection from "@/components/InstallSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <FeaturesGrid />

      {/* Latest Release */}
      <section className="relative z-10 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-[#38e0c4] tracking-wider uppercase mb-3">
              Latest Release
            </p>
            <h2 className="text-2xl md:text-3xl tracking-tight text-[#eef2f7]">
              What&apos;s new
            </h2>
          </div>
          <LatestVersionCard />
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Install */}
      <InstallSection />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Final CTA Band */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight text-[#eef2f7] mb-5">
            Start protecting your capital today
          </h2>
          <p className="text-lg text-[#9ba6b3] mb-10 max-w-xl mx-auto">
            One-time purchase. Lifetime access. No subscriptions.
          </p>
          <a
            href="https://buy.stripe.com/7sY5kE1nW84Ib0S5vH9ws00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-[#27496D] px-8 py-4 text-base text-white hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
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
