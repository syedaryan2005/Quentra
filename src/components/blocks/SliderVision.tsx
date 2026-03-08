"use client";

import { useState, useEffect } from "react";

type Slide = { heading: string; body: string };

const slides: Slide[] = [
  {
    heading: "OUR VISION",
    body: "To redefine urban living by building sustainable, innovative, and future-ready communities that inspire growth, connection, and a better quality of life for generations to come. We envision landmarks that don't just rise from the ground, but elevate the standards of modern development. Through every project, we aim to blend architectural excellence with community well-being.",
  },
  {
    heading: "OUR MISSION",
    body: "To design and develop thoughtfully planned urban spaces that prioritize sustainability, innovation, and human-centered design. We are committed to delivering projects that exceed expectations, foster vibrant communities, and set new benchmarks in quality, functionality, and environmental responsibility. With integrity at our core and collaboration as our strength, we strive to build not just structures, but experiences that enrich lives and stand the test of time.",
  },
];

export default function VisionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxSlide = slides.length - 1;
  const canPrev = currentSlide > 0;
  const canNext = currentSlide < maxSlide;

  const nextSlide = () => {
    if (!canNext || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((n) => Math.min(n + 1, maxSlide));
  };

  const prevSlide = () => {
    if (!canPrev || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((n) => Math.max(n - 1, 0));
  };

  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canPrev, canNext, isAnimating]);

  return (
    <section 
      className="relative bg-black text-white min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-16 overflow-hidden"
      aria-label="Vision and Mission slider"
    >
      
      <div 
        className="absolute left-0 top-0 h-1/3 sm:h-2/5 md:h-1/2 w-4/5 sm:w-3/4 max-w-3xl rounded-br-[3rem] md:rounded-br-[5rem] lg:rounded-br-[7rem] bg-neutral-800 z-0" 
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Heading section */}
          <div className="w-full md:w-2/5">
            <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 -translate-x-6' : 'opacity-100 translate-x-0'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                {slides[currentSlide].heading}
              </h2>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-3/5">
            <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-x-6' : 'opacity-100 translate-x-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 w-full">
                <p className="whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white">
                  {slides[currentSlide].body}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 gap-3 sm:gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            disabled={!canPrev || isAnimating}
            className={`h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center border transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-white/30
              ${!canPrev || isAnimating
                ? "bg-white/30 text-white/70 border-white/20 cursor-not-allowed"
                : "bg-white text-black border-white/80 hover:opacity-90 active:scale-95"
              }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            disabled={!canNext || isAnimating}
            className={`h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center border transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-white/30
              ${!canNext || isAnimating
                ? "bg-white/30 text-white/70 border-white/20 cursor-not-allowed"
                : "bg-white text-black border-white/80 hover:opacity-90 active:scale-95"
              }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}