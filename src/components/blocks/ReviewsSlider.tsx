"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Review = {
  quote: string;
  name: string;
  location: string;
  avatar: string;
};

const REVIEWS: Review[] = [
  {
    quote: "Efficient, skilled, and made our home construction hassle-free. Highly recommended!",
    name: "Jonathan Harry",
    location: "Miami, USA",
    avatar: "/person.jpg",
  },
  {
    quote: "Transparent process and great follow-through. The team made everything easy for us.",
    name: "Ayesha Khan",
    location: "Karachi, PK",
    avatar: "/review2.jpeg",
  },
  {
    quote: "From the first call to closing, they were professional and responsive at every step.",
    name: "Omar Siddiqui",
    location: "Dubai, UAE",
    avatar: "/person.jpg",
  },
];

export default function ReviewsSlider() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;
    
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, isMounted]);

  if (!isMounted) {
    return <div className="w-full py-12 bg-white" />;
  }

  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Slider container */}
        <div className="relative overflow-hidden">
          {/* Slides rail */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${active * (100 / REVIEWS.length)}%)`,
              width: `${REVIEWS.length * 100}%`
            }}
          >
            {REVIEWS.map((review, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: `${100 / REVIEWS.length}%` }}
                aria-hidden={active !== index}
              >
                {/* Review card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-4">
                  {/* Left column - Name and location */}
                  <div className="text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300 mb-3">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.location}</p>
                    </div>
                  </div>

                  {/* Middle column - Quote */}
                  <div className="text-center px-4">
                    <blockquote className="relative text-xl italic text-gray-800 leading-relaxed font-medium">
                      <span className="absolute -left-4 -top-3 text-5xl text-gray-300 leading-none">“</span>
                      {review.quote}
                      <span className="absolute -right-4 -bottom-6 text-5xl text-gray-300 leading-none">”</span>
                    </blockquote>
                  </div>

                  {/* Right column - Rating */}
                  <div className="text-center md:text-right">
                    <div className="inline-flex flex-col items-center md:items-end">
                      <div className="flex items-center">
                        <span className="text-yellow-500 font-bold text-sm mr-1">Trustpilot</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-4 h-4 text-yellow-400 fill-current" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium">13k rating</span> 
                        <span className="text-gray-400"> (4.7 Rating)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with centered dots */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, index) => {
              const isActive = active === index;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${isActive ? 'bg-gray-800 scale-125' : 'bg-gray-300 hover:bg-gray-400'}
                  `}
                />
              );
            })}
          </div>
          <div className="h-px flex-1 bg-gray-300" />
        </div>
      </div>
    </section>
  );
}