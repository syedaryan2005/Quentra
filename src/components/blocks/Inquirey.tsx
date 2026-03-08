import Image from "next/image";
import React from "react";

export default function Inquirey() {
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
      <div className="relative w-full overflow-hidden rounded-2xl bg-white
                      aspect-[4/3] sm:aspect-[16/9] lg:min-h-[540px] lg:aspect-auto lg:mt-10">

        {/* Image */}
        <Image
          src="/realsvg.webp"
          alt="Inquiry background"
          fill
          sizes="100vw"
          className="object-cover sm:object-contain lg:object-contain"
          priority
        />

        {/* Subtle overlay: helpful only when text overlays the image */}
        <div className="hidden md:block absolute inset-0 bg-white/10 lg:bg-transparent pointer-events-none" />

       
        <div className="relative z-10 p-4 sm:p-6 md:p-8
                        md:absolute md:inset-0 md:flex md:items-center md:justify-center">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[40px] font-semibold text-black [text-wrap:balance]">
              Any Inquiry? Feel free
              <br className="" />
              <span> To Contact Us.</span>
            </h2>

            <button
              className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center justify-center rounded-lg bg-black text-white
                         px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3
                         text-sm sm:text-base md:text-lg
                         hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 active:scale-[0.99]"
              aria-label="Send message"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
