import Footer from '@/components/blocks/Footer';
import Inquirey from '@/components/blocks/Inquirey';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";

function page() {
  return (
    <section className="w-full">
      <div className="relative">
        {/* BG image */}
        <Image
          src="/Blog.png"
          alt="About Image"
          width={1400}
          height={400}
          className="w-full h-[240px] sm:h-[320px] md:h-[400px]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Centered hero text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold">BLOGS</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link href="/" className="font-extralight">Home</Link>
              <FaArrowAltCircleRight className="translate-y-[1px]" />
              <p className="font-extralight">Our Blogs</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="relative z-30 mt-0">
        {/* Category pills */}
      <ul className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 
                       flex items-center justify-start sm:justify-center 
                       gap-2 sm:gap-3 md:gap-4 
                       py-6 sm:py-8 md:py-12 lg:py-16 
                       overflow-x-auto scrollbar-hide 
                       snap-x snap-mandatory">
  <li className="flex-shrink-0 snap-start border border-gray-300 px-3 py-1.5 rounded-lg text-white bg-black text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
    All
  </li>
  <li className="flex-shrink-0 snap-start border border-gray-300 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    Home
  </li>
  <li className="flex-shrink-0 snap-start border border-gray-300 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    Apartments
  </li>
  <li className="flex-shrink-0 snap-start border border-gray-300 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    Villa
  </li>
  <li className="flex-shrink-0 snap-start border border-gray-300 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    Mortgage
  </li>
  <li className="flex-shrink-0 snap-start border border-gray-300 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
    For Sale
  </li>
</ul>

        <h1 className="font-normal text-center text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10">
          <span className='hidden lg:block'>LATEST BLOGS</span>
          <span className='lg:hidden sm:block '> OUR PROJECTS</span>
        </h1>

        {/* Cards grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="w-full max-w-[553px] mx-auto
                          flex flex-col px-6 sm:px-8 py-5 shadow-xl rounded-2xl m-4 sm:m-6 md:m-8
                          min-h-[360px] md:min-h-[400px]">
            <h1 className="py-4 sm:py-6 w-full max-w-[470px] font-normal leading-none text-xl sm:text-2xl text-[#5B5B5B]">
              The USA&apos;s Visionary Rise in Real <br /> Estate Development
            </h1>
            <p className="w-full max-w-[473px] leading-snug text-[#5B5B5BB2] text-sm sm:text-base">
              Explore how the USA is redefining skylines through innovative architecture, sustainable planning, and our firm&apos;s role in shaping iconic living and commercial spaces.
            </p>
            <h1 className="border border-[#bdb9b9] mt-6 lg:mt-28" />
            <div className="flex items-center justify-between pt-3">
              <p className="text-[#5B5B5B] font-normal text-base sm:text-lg">27 Jun, 2025</p>
              <Link href="/Development" className="flex items-center text-black">
                Read More
                <span className="ml-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-black text-white leading-none">
                  <GoArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[553px] mx-auto
                          flex flex-col px-6 sm:px-8 py-5 shadow-xl rounded-2xl m-4 sm:m-6 md:m-8
                          min-h-[360px] md:min-h-[400px]">
            <h1 className="py-4 sm:py-6 w-full max-w-[470px] font-normal leading-none text-xl sm:text-2xl text-[#5B5B5B]">
              The Future of Smart Homes in <br /> American Suburbs
            </h1>
            <p className="w-full max-w-[473px] leading-snug text-[#5B5B5BB2] text-sm sm:text-base">
              Discover how smart home technology is transforming suburban living across the U.S., blending convenience, security, and energy efficiency in ways never seen before.
            </p>
            <h1 className="border border-[#bdb9b9] mt-6 lg:mt-28" />
            <div className="flex items-center justify-between pt-3">
              <p className="text-[#5B5B5B] font-normal text-base sm:text-lg">08 Jul, 2025</p>
              <Link href="/Development" className="flex items-center text-black">
                Read More
                <span className="ml-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-black text-white leading-none">
                  <GoArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[553px] mx-auto
                          flex flex-col px-6 sm:px-8 py-5 shadow-xl rounded-2xl m-4 sm:m-6 md:m-8
                          min-h-[360px] md:min-h-[400px]">
            <h1 className="py-4 sm:py-6 w-full max-w-[470px] font-normal leading-none text-xl sm:text-2xl text-[#5B5B5B]">
              Sustainable Construction Trends <br /> Shaping U.S Cities
            </h1>
            <p className="w-full max-w-[473px] leading-snug text-[#5B5B5BB2] text-sm sm:text-base">
              Learn how eco-conscious building practices, green certifications, and innovative materials are driving the next wave of sustainable real estate in urban America.
            </p>
            <h1 className="border border-[#bdb9b9] mt-6 lg:mt-28" />
            <div className="flex items-center justify-between pt-3">
              <p className="text-[#5B5B5B] font-normal text-base sm:text-lg">18 Jul, 2025</p>
              <Link href="/Development" className="flex items-center text-black">
                Read More
                <span className="ml-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-black text-white leading-none">
                  <GoArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[553px] mx-auto
                          flex flex-col px-6 sm:px-8 py-5 shadow-xl rounded-2xl m-4 sm:m-6 md:m-8
                          min-h-[360px] md:min-h-[400px]">
            <h1 className="py-4 sm:py-6 w-full max-w-[470px] font-normal leading-none text-xl sm:text-2xl text-[#5B5B5B]">
              How Mixed-Use Developments Are <br /> Reshaping American Neighborhoods
            </h1>
            <p className="w-full max-w-[473px] leading-snug text-[#5B5B5BB2] text-sm sm:text-base">
              Dive into the rise of walkable, integrated communities combining residential, retail, and office spaces — and how Quentra Real Estate is contributing to this urban evolution.
            </p>
            <h1 className="border border-[#bdb9b9] mt-6 lg:mt-28" />
            <div className="flex items-center justify-between pt-3">
              <p className="text-[#5B5B5B] font-normal text-base sm:text-lg">18 Jul, 2025</p>
              <Link href="/Development" className="flex items-center text-black">
                Read More
                <span className="ml-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-black text-white leading-none">
                  <GoArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          <Inquirey />
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default page;
