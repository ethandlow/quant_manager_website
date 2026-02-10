"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Bought the account summary and risk manager app... I'm very happy with it; it works perfectly... Easiest 5 stars I've given anyone.",
    author: "Anonymous",
  },
  {
    quote:
      "I have nothing but great things to say... He added the lockout option, which is amazing\u2014it prevents me from overtrading. This product is worth every dollar. Excellent work!",
    author: "P. Vega",
  },
  {
    quote:
      "A much-needed addition to Quantower for prop trading. Well executed. Definitely worth it!",
    author: "Matthew C.",
  },
  {
    quote:
      "Awesome plug-in for Quantower! Works perfectly with any account type... Extremely useful if you have multiple accounts. Definitely a must-have!",
    author: "Gloria G.",
  },
  {
    quote:
      "This is a killer plugin! I'd been looking for a global PnL tracker for Quantower that could track PnL from all props in a single window. Ethan nailed it!",
    author: "Anonymous",
  },
];

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#f6c94c] shrink-0"
      aria-hidden
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const changeTo = useCallback(
    (newIndex: number, dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      // Brief exit transition (opacity out)
      setTimeout(() => {
        setIndex(newIndex);
        // Brief enter transition (opacity in)
        setTimeout(() => setAnimating(false), 300);
      }, 150);
    },
    [animating]
  );

  const goNext = useCallback(() => {
    changeTo((index + 1) % testimonials.length, "next");
  }, [index, changeTo]);

  const goPrev = useCallback(() => {
    changeTo(
      (index - 1 + testimonials.length) % testimonials.length,
      "prev"
    );
  }, [index, changeTo]);

  const goTo = useCallback(
    (i: number) => {
      changeTo(i, i > index ? "next" : "prev");
    },
    [index, changeTo]
  );

  useEffect(() => {
    const id = setInterval(goNext, 6000);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#6b7bff] tracking-wider uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#eef2f7]">
            50+ traders, 100% satisfaction rate
          </h2>
        </div>

        <div className="relative">
          {/* Card — fixed height prevents layout shift */}
          <div className="h-[320px] sm:h-[300px] md:h-[280px] flex flex-col">
            <div
              className={`rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 backdrop-blur-sm p-8 md:p-10 text-center h-full flex flex-col items-center justify-center transition-all duration-300 ${
                animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-[#eef2f7] leading-relaxed max-w-2xl mx-auto flex-1 min-h-0 flex items-center justify-center">
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>
              <footer className="mt-4 text-sm text-[#9ba6b3] font-medium shrink-0">
                &mdash; {testimonials[index].author}
              </footer>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#9ba6b3] hover:text-[#eef2f7] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-[#6b7bff]"
                      : "w-2 bg-white/[0.2] hover:bg-white/[0.3]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#9ba6b3] hover:text-[#eef2f7] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
