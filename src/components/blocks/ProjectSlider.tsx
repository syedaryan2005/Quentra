"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  location: string;
  image: string; 
};

const projects: Project[] = [
  { title: "Core Towers",      location: "San Francisco, USA", image: "/project-1.png" },
  { title: "Blueberry Villa",  location: "California, USA",     image: "/project-2.png" },
  { title: "Mayor House",      location: "New York, USA",       image: "/project-3.png" },
  { title: "Pride Bungalow",   location: "Miami, USA",          image: "/project-4.png" },
  { title: "Sheraton House",   location: "Texas, USA",          image: "/project-5.png" },
];

export default function ProjectsSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);          
  const [index, setIndex] = useState(0);        
  const [maxIndex, setMaxIndex] = useState(0);  

  
  const measure = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const children = scroller.querySelectorAll<HTMLElement>("[data-card]");
    if (children.length < 2) {
      
      const first = children[0];
      if (first) setStep(first.offsetWidth + 24);
      setMaxIndex(Math.max(0, projects.length - 1));
      return;
    }

    
    const cardStep = children[1].offsetLeft - children[0].offsetLeft;
    setStep(cardStep);

    
    const visible = Math.max(1, Math.floor(scroller.clientWidth / cardStep));
    setMaxIndex(Math.max(0, projects.length - visible));
    
    setIndex((idx) => Math.min(idx, Math.max(0, projects.length - visible)));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
   
  }, []);

  
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || step === 0) return;

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

  const goNext = () => {
    if (!scrollerRef.current || step === 0) return;
    const next = Math.min(index + 1, maxIndex);
    scrollerRef.current.scrollTo({ left: next * step, behavior: "smooth" });
    setIndex(next);
  };

  const goPrev = () => {
    if (!scrollerRef.current || step === 0) return;
    const prev = Math.max(index - 1, 0);
    scrollerRef.current.scrollTo({ left: prev * step, behavior: "smooth" });
    setIndex(prev);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading + Arrows */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-5xl md:text-6xl font-medium tracking-wide font-sans">
            OUR PROJECTS
          </h2>

          <div className="flex items-center gap-2 text-center">
            <button
              onClick={goPrev}
              aria-label="Previous"
                 className={`h-12 w-12 rounded-full grid place-items-center border transition
                          focus:outline-none focus:ring-2 focus:ring-black/20
                           ${index === 0
                       ? "bg-white text-black border-black/30 cursor-not-allowed"
                       : "bg-black text-white border-black hover:scale-105 active:opacity-80"}
      `}
        
            >
              {/* Left Arrow */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={goNext}
              aria-label="Next"
              className={`h-12 w-12 rounded-full grid place-items-center border transition
                ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "bg-black text-white hover:scale-105"}
              `}
              disabled={index === maxIndex}
            >
              {/* Right Arrow */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollerRef}
          className="overflow-x-hidden"
        >
          <div
            className="flex gap-6 snap-x snap-mandatory"
            
          >
            {projects.map((p, i) => (
              <article
                key={p.title + i}
                data-card
                className="snap-start shrink-0 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[380px]
                           bg-white rounded-2xl shadow-xl border border-black/5 p-4"
              >
                <div className="relative h-44 md:h-52 w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>

                <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
