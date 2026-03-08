"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  image: string; 
  quote: string;
  author: string; 
};

type Props = {
  slides: Slide[];
  className?: string;
  fadeMs?: number;
  kenBurns?: boolean; 
};

export default function ClientTestimonials({
  slides,
  className,
  fadeMs = 700,
  kenBurns = true,
}: Props) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); 
  const canNav = slides.length > 1;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextIndex = (i + 1) % slides.length;
  useEffect(() => {
    if (!slides[nextIndex]) return;
    const img = new window.Image();
    img.src = slides[nextIndex].image;
  }, [i, slides, nextIndex]);

  const go = useCallback(
    (delta: 1 | -1) => {
      if (!canNav) return;
      setDir(delta);
      setI((v) => {
        const n = v + delta;
        if (n < 0) return slides.length - 1;
        if (n >= slides.length) return 0;
        return n;
      });
    },
    [slides.length, canNav]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const active = slides[i];
  const headingLines = useMemo(() => ["CLIENT", "TESTIMONIALS"], []);

  return (
    <section
      ref={containerRef}
      aria-label="Client testimonials"
      className={`relative isolate overflow-hidden bg-neutral-950 text-white ${className ?? ""}`}
    >
      <div className="relative h-[500px] sm:h-[640px] lg:h-[720px]">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: fadeMs / 1000, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className={kenBurns ? "kb-zoom" : ""}>
                <Image
                  src={active.image}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>

         
          <div className="hidden md:block absolute inset-y-0 left-0 w-[48%] bg-black/70" />

          
          <div
            aria-hidden
            className="hidden md:block absolute inset-y-0 left-[55%] w-[10%] bg-black/20"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)",
            }}
          />

          {/* Mobile overlay gradient for better text visibility */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        
        <div className="relative z-10 h-full">
          <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-full flex-col md:flex-row">
              
              <div className="relative w-full md:w-[45%] flex flex-col justify-end md:justify-start pb-8 md:pb-0">
                
                <h2 className="pt-8 md:pt-16 sm:pt-20 leading-tight tracking-[0.08em]">
                  <span className="block text-3xl sm:text-[40px] md:text-[52px] lg:text-[66px] font-normal">
                    {headingLines[0]}
                  </span>
                  <span className="block text-2xl sm:text-[32px] md:text-[52px] lg:text-[80px] font-normal">
                    {headingLines[1]}
                  </span>
                </h2>

               
                <div className="mt-4 sm:mt-6 md:mt-8 max-w-full md:max-w-[540px] pr-0 md:pr-6">
                  <AnimatePresence mode="wait" initial={false} custom={dir}>
                    <motion.blockquote
                      key={i}
                      custom={dir}
                      initial={{ x: dir * -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: dir * 20, opacity: 0 }}
                      transition={{ duration: fadeMs / 1000, ease: "easeOut" }}
                      className="text-base sm:text-[17px] md:text-[18px] text-white/85"
                    >
                      <p className="leading-relaxed">
                        {active.quote}
                      </p>
                      <footer className="mt-4 sm:mt-5 md:mt-6 text-white/90 font-medium">
                        {active.author}
                      </footer>
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

               
                <div className="mt-6 md:mt-auto md:pb-8 sm:pb-10">
                  <div className="flex items-center gap-4">
                    <IconButton
                      label="Previous"
                      onClick={() => go(-1)}
                      variant={i === 0 ? "disabled" : "active"}
                    >
                      <ArrowLeft />
                    </IconButton>

                    <IconButton
                      label="Next"
                      onClick={() => go(1)}
                      variant={i === slides.length - 1 ? "disabled" : "active"}
                    >
                      <ArrowRight />
                    </IconButton>
                  </div>
                </div>
              </div>

              
              <div className="hidden md:block w-[40%]" />
            </div>
          </div>
        </div>
      </div>

      
      <style jsx global>{`
        @keyframes kbz {
          0% { transform: scale(1.03) translate3d(0, 0, 0); }
          100% { transform: scale(1.08) translate3d(6px, -6px, 0); }
        }
        .kb-zoom {
          position: absolute;
          inset: 0;
          animation: kbz 7s ease-in-out forwards;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .kb-zoom { animation: none !important; }
        }
      `}</style>
    </section>
  );
}


function IconButton({
  children,
  onClick,
  label,
  variant = "active",
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  variant?: "active" | "disabled";
}) {
  const base =
    "group inline-flex items-center justify-center rounded-full h-12 w-12 transition focus:outline-none";
  const active =
    "bg-white text-black  hover:opacity-80 active:scale-[0.97] cursor-pointer";
  const disabled =
    " text-white/40 bg-white/20 cursor-not-allowed";
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={variant === "disabled"}
      className={`${base} ${variant === "disabled" ? disabled : active}`}
    >
      {children}
    </button>
  );
}

function ArrowLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}