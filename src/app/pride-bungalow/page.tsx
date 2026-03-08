import Footer from '@/components/blocks/Footer';
import Inquirey from '@/components/blocks/Inquirey';
import Image from 'next/image';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Bungalow() {
  return (
    <>
      {/* Desktop Version */}
      <section className='w-full hidden xl:block'>
        <div className='flex items-start px-6 lg:px-10 gap-2 py-2'>
          <span className='font-normal text-xs'>Home</span>
          <FaArrowAltCircleRight />
          <span className='font-normal text-xs'>Blogs</span>
          <FaArrowAltCircleRight />
          <span className='font-normal text-xs'>The USA&apos;s Visionary Rise in Real Estate Development</span>
        </div>
        <div className='px-8 lg:px-20 py-8 lg:py-14 flex flex-col items-start gap-3'>
          <h1 className='font-normal text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'>Mayor House</h1>
          <Image 
            src='/Union.png' 
            alt='Union' 
            height={450} 
            width={1190}
            className='w-full h-auto max-w-[1190px]'
          />
          <div className='flex flex-col gap-8 lg:gap-14'>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed'>
              After the first wave of modern real estate projects broke ground under Quentr&apos;s leadership in the United States, and after passing rigorous planning and compliance procedures, domestic developments including Zlatna Heights, Puder Residences, Oaza Living, Love Kent Villas, Jaro Square, Tajna Towers, and Wiwia Estates have already made their mark across one of the most innovative and concept-driven commercial real estate zones in the country.
            </p>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed'>
              In addition to Quentra, among the key developers are Oaza Springs - Tešanjski Build Co., Klas Urban Developments - Sarajevo, Akova Construction Group, Voćar Properties - Brčko, Hepok Landmarks - Mostar, Sava Construction - Bijeljina, Spektar Infrastructure, Semberija Urban Co. - Bijeljina, and Kondisa Projects - Sarajevo.
            </p>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed'>
              "This isn&apos;t the first time we&apos;ve developed in high-demand zones. I&apos;d like to remind you that a little over a year and a half ago, we completed key developments in Saudi Arabia. We&apos;re proud that this time, we&apos;re not entering the U.S. market alone, but alongside a group of Bosnian-rooted companies whose commitment to quality is without question. I believe this is one of the key strategies for leveraging the strength of unified domestic expertise," said Quentra&apos;s International Project Manager, Muhamed Muzaferija.
            </p>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed pt-6'>
              These projects are being coordinated in collaboration with Balkan Development Corporation USA, which is committed to continuously expanding infrastructure networks and creating dynamic living and commercial spaces throughout North America.
            </p>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed'>
              "I&apos;m proud that it&apos;s now crystal clear — we&apos;ve entered a groundbreaking market together, and through the front door. We&apos;re now part of the largest experiential real estate model in the U.S., including Thematic Urban Living Zones and major spaces such as Geant Commercial District, one of the leading hyper-commercial developments in the region. Very soon, as part of the second phase of this expansion, we will roll out our projects across other strategic cities including Los Angeles, Houston, and Miami," said Zlatko Kartal, representative of Balkan Development Corporation.
            </p>
            <p className='font-normal text-[#6B7280] text-base lg:text-lg leading-relaxed'>
              Themed commercial districts across the USA are reshaping the real estate landscape. These developments proudly combine residential excellence, commercial vibrancy, lifestyle integration, and educational environments into one. Originally designed around bold, visionary urban concepts, these modern real estate hubs boast a vibrant mix of retail spaces, culinary experiences, entertainment centers, and community-driven living environments — reshaping how people live, work, and grow.
            </p>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 px-4 lg:px-10 w-full'>
            <div className='flex flex-col gap-3 items-start shadow-lg p-4 mt-8 xl:mt-16 w-full xl:w-[560px] h-auto xl:h-52 rounded-xl px-6'>
              <Image src='/Black.jpg' alt='pride1' height={50} width={50} className='pt-2'/>
              <p className='font-medium text-lg xl:text-xl pt-3'>Project Duration</p>
              <p className='font-normal text-sm xl:text-base text-[#22223CCC] leading-relaxed'>
                The project spans 12 months, from August 2025 to July 2026, covering all key phases from groundwork to final delivery.
              </p>
            </div>
            <div className='flex flex-col gap-3 items-start shadow-lg p-4 mt-8 xl:mt-16 w-full xl:w-[560px] h-auto xl:h-52 rounded-xl px-6'>
              <Image src='/Black1.jpg' alt='pride1' height={50} width={50} className='pt-2'/>
              <p className='font-medium text-lg xl:text-xl pt-3'>Workers On Project</p>
              <p className='font-normal text-sm xl:text-base text-[#22223CCC] leading-relaxed'>
                A team of 120+ skilled workers including engineers, architects, and laborers are involved to ensure smooth and timely execution.
              </p>
            </div>
            <div className='flex flex-col items-start shadow-lg p-4 mt-6 xl:mt-10 w-full xl:w-[1130px] h-auto xl:h-64 rounded-xl xl:col-span-2 px-6 xl:px-10'>
              <Image src='/Black2.jpg' alt='pride1' height={50} width={50} className='pt-2'/>
              <p className='font-medium text-lg xl:text-xl pt-6'>Estimated Budget</p>
              <p className='font-normal text-sm xl:text-base pt-2 text-[#22223CCC] leading-relaxed'>
                The projected budget stands at USD 950 million, covering construction, labor, materials, and contingencies.
              </p>
            </div>
          </div>
        </div>
        <Inquirey />
        <Footer />
      </section>

      {/* Mobile + Tablet Version */}
      <section className="w-full block xl:hidden">
        {/* Breadcrumbs */}
        <nav className="px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-700">
            <li>Home</li>
            <li className="px-1 text-gray-500">
              <FaArrowAltCircleRight className="inline-block align-middle h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </li>
            <li>Blogs</li>
            <li className="px-1 text-gray-500">
              <FaArrowAltCircleRight className="inline-block align-middle h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </li>
            <li className="font-medium text-xs sm:text-sm">The USA&apos;s Visionary Rise in Real Estate Development</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <h1 className="font-normal text-xl xs:text-2xl sm:text-3xl lg:text-4xl">Mayor House</h1>

          {/* Main image */}
          <div className="mt-4 sm:mt-6">
            <Image
              src="/Union.png"
              alt="Union"
              width={1190}
              height={450}
              className="w-full h-auto rounded-xl"
              sizes="100vw"
            />
          </div>

          
          <div className="mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-6">
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              After the first wave of modern real estate projects broke ground under Quentr&apos;s leadership
              in the United States, and after passing rigorous planning and compliance procedures, domestic
              developments including Zlatna Heights, Puder Residences, Oaza Living, Love Kent Villas, Jaro
              Square, Tajna Towers, and Wiwia Estates have already made their mark across one of the most
              innovative and concept-driven commercial real estate zones in the country.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              In addition to Quentra, among the key developers are Oaza Springs - Tešanjski Build Co., Klas
              Urban Developments - Sarajevo, Akova Construction Group, Voćar Properties - Brčko, Hepok
              Landmarks - Mostar, Sava Construction - Bijeljina, Spektar Infrastructure, Semberija Urban Co.
              - Bijeljina, and Kondisa Projects - Sarajevo.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              "This isn&apos;t the first time we&apos;ve developed in high-demand zones. I&apos;d like to remind you that a little over a year and a half ago, we completed key developments in Saudi Arabia. We&apos;re proud that this time, we&apos;re not entering the U.S. market alone, but alongside a group of Bosnian-rooted companies whose commitment to quality is without question. I believe this is one of the key strategies for leveraging the strength of unified domestic expertise," said Quentra&apos;s International Project Manager, Muhamed Muzaferija.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              These projects are being coordinated in collaboration with Balkan Development Corporation USA,
              which is committed to continuously expanding infrastructure networks and creating dynamic living
              and commercial spaces throughout North America.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              "I&apos;m proud that it&apos;s now crystal clear — we&apos;ve entered a groundbreaking market together, and through the front door. We&apos;re now part of the largest experiential real estate model in the U.S., including Thematic Urban Living Zones and major spaces such as Geant Commercial District, one of the leading hyper-commercial developments in the region. Very soon, as part of the second phase of this expansion, we will roll out our projects across other strategic cities including Los Angeles, Houston, and Miami," said Zlatko Kartal, representative of Balkan Development Corporation.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Themed commercial districts across the USA are reshaping the real estate landscape. These
              developments proudly combine residential excellence, commercial vibrancy, lifestyle integration,
              and educational environments into one. Originally designed around bold, visionary urban concepts,
              these modern real estate hubs boast a vibrant mix of retail spaces, culinary experiences,
              entertainment centers, and community-driven living environments — reshaping how people live,
              work, and grow.
            </p>
          </div>

          {/* Stats / Cards */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-3 items-start shadow-lg rounded-xl p-4 sm:p-5 lg:p-6 w-full sm:col-span-1">
              <Image src="/Black.jpg" alt="Project duration" width={50} height={50} className="pt-1" />
              <p className="font-medium text-base sm:text-lg lg:text-xl pt-1">Project Duration</p>
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                The project spans 12 months, from August 2025 to July 2026, covering all key phases from
                groundwork to final delivery.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-3 items-start shadow-lg rounded-xl p-4 sm:p-5 lg:p-6 w-full sm:col-span-1">
              <Image src="/Black1.jpg" alt="Workers on project" width={50} height={50} className="pt-1" />
              <p className="font-medium text-base sm:text-lg lg:text-xl pt-1">Workers On Project</p>
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                A team of 120+ skilled workers including engineers, architects, and laborers are involved to
                ensure smooth and timely execution.
              </p>
            </div>

            {/* Big Card */}
            <div className="flex flex-col gap-3 items-start shadow-lg rounded-xl p-4 sm:p-5 lg:p-6 w-full sm:col-span-2">
              <Image src="/Black2.jpg" alt="Estimated budget" width={50} height={50} className="pt-1" />
              <p className="font-medium text-base sm:text-lg lg:text-xl pt-1">Estimated Budget</p>
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                The projected budget stands at USD 950 million, covering construction, labor, materials, and
                contingencies.
              </p>
            </div>
          </div>
        </div>

        <Inquirey />
        <Footer />
      </section>
    </>
  )
}

export default Bungalow