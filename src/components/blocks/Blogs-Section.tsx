"use client";

import React, { useRef, useEffect, useState } from "react";

type Blog = {
  title: string;
  excerpt: string;
  date: string; 
};

const blogs: Blog[] = [
  {
    title: "The USA’s Visionary Rise in Real Estate Development",
    excerpt:
      "Explore how the USA is redefining skylines through innovative architecture, sustainable planning, and our firm’s role in shaping iconic living and commercial spaces.",
    date: "27 Jun, 2025",
  },
  {
    title: "The Future of Smart Homes in American Suburbs",
    excerpt:
      "Discover how smart home technology is transforming suburban living across the U.S., blending convenience, security, and energy efficiency in ways never seen before.",
    date: "08 Jul, 2025",
  },
  {
    title: "Sustainable Certifications That Are Shaping Cities",
    excerpt:
      "A look at the standards and certifications that are pushing developers toward greener, future-proof buildings across America.",
    date: "18 Jul, 2025",
  },
  {
    title: "Adaptive Reuse: Breathing New Life Into Old Spaces",
    excerpt:
      "From warehouses to vibrant mixed-use hubs — why adaptive reuse is the smartest play for urban growth and heritage retention.",
    date: "28 Jul, 2025",
  },
];

export default function Blogs() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const measure = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const kids = scroller.querySelectorAll<HTMLElement>("[data-card]");
    if (!kids.length) return;

    
    const s = kids.length > 1 ? kids[1].offsetLeft - kids[0].offsetLeft : kids[0].offsetWidth + 24;
    setStep(s);

    
    const visible = Math.max(1, Math.floor(scroller.clientWidth / s));
    const max = Math.max(0, blogs.length - visible);
    setMaxIndex(max);
    setIndex((i) => Math.min(i, max));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !step) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const approx = Math.round(scroller.scrollLeft / step);
        setIndex(Math.max(0, Math.min(approx, maxIndex)));
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [step, maxIndex]);

  const go = (dir: -1 | 1) => {
    if (!scrollerRef.current || !step) return;
    const next = Math.min(Math.max(index + dir, 0), maxIndex);
    scrollerRef.current.scrollTo({ left: next * step, behavior: "smooth" });
    setIndex(next);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[54px] leading-none md:text-[70px] font-normal tracking-[0.02em]">
            OUR BLOGS
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              disabled={index === 0}
              className={`h-12 w-12 rounded-full grid place-items-center border transition focus:outline-none focus:ring-2 focus:ring-black/20
                ${index === 0 
                ? "bg-white text-black border-black/30 cursor-not-allowed" 
                : "bg-black text-white border-black hover:scale-105 active:opacity-80"
                }
              `}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              disabled={index === maxIndex}
              className={`h-12 w-12 rounded-full grid place-items-center border border-black/20 transition
                ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "bg-black text-white hover:scale-105"}
              `}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* thin divider under heading */}
        <div className="h-px w-full bg-neutral-200 mb-10" />

        {/* Slider */}
        <div ref={scrollerRef} className="overflow-x-hidden">
          <div className="flex gap-6 snap-x snap-mandatory">
            {blogs.map((b, i) => (
              <article
                key={b.title + i}
                data-card
                className="   
                  snap-start shrink-0
                  min-w-0 basis-full sm:basis-[calc(50%-12px)]
                  bg-white rounded-2xl
                  border border-black/10 shadow-lg
                  p-4 md:p-10"
              >
                {/* Title */}
                <h3 className="text-[26px] md:text-[28px] leading-[1.2] font-medium text-[#5B5B5B]">
                  {b.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-[15px] leading-tight text-[#5B5B5BB2]">
                  {b.excerpt}
                </p>

                {/* Divider */}
                <div className="mt-22 h-px bg-neutral-200" />

                {/* Footer row */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-neutral-500 text-lg">{b.date}</span>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-[15px] font-medium"
                  >
                    Read More
                    <span className="h-6 w-6 grid place-items-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
