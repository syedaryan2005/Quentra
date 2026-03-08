import Footer from '@/components/blocks/Footer'
import Inquirey from '@/components/blocks/Inquirey'
import Image from 'next/image'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";

function page() {
  return (
      <section className='w-full'>
            <div className='flex items-start px-4 sm:px-6 md:px-8 lg:px-10 gap-2 py-2'>
                <span className='font-normal text-xs'>Home</span>
                <FaArrowAltCircleRight className='flex-shrink-0' />
                <span className='font-normal text-xs'>Blogs</span>
                <FaArrowAltCircleRight className='flex-shrink-0' />
                <span className='font-normal text-xs truncate sm:whitespace-normal'>The USA's Visionary Rise in Real Estate Development</span>
            </div>
            <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col items-start gap-3'>
            <h1 className='font-medium text-xl md:text-3xl lg:text-4xl leading-tight'>The USA's Visionary Rise in Real Estate Development</h1>
            <p className='flex flex-nowrap items-center gap-1'><SlCalender className='pt-1 flex-shrink-0'/> <span className='text-sm'>18th September 2023</span></p>
            <div className='w-full max-w-full overflow-hidden'>
                <Image 
                    src='/Union1.png' 
                    alt='Union' 
                    height={450} 
                    width={1190}
                    className='w-full h-auto object-cover'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </div>
            <div className='flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14'>
            <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed'>After the first wave of modern real estate projects broke ground under Quentr's leadership in the United States, and after passing rigorous planning and compliance procedures, domestic developments including Zlatna Heights, Puder Residences, Oaza Living, Love Kent Villas, Jaro Square, Tajna Towers, and Wiwia Estates have already made their mark across one of the most innovative and concept-driven commercial real estate zones in the country.</p>
             <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed'>In addition to Quentra, among the key developers are Oaza Springs - Tešanjski Build Co., Klas Urban Developments - Sarajevo, Akova Construction Group, Voćar Properties - Brčko, Hepok Landmarks - Mostar, Sava Construction - Bijeljina, Spektar Infrastructure, Semberija Urban Co. - Bijeljina, and Kondisa Projects - Sarajevo.</p>
              <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed'>"This isn't the first time we've developed in high-demand zones. I'd like to remind you that a little over a year and a half ago, we completed key developments in Saudi Arabia. We're proud that this time, we're not entering the U.S. market alone, but alongside a group of Bosnian-rooted companies whose commitment to quality is without question. I believe this is one of the key strategies for leveraging the strength of unified domestic expertise," said Quentra's International Project Manager, Muhamed Muzaferija.</p>
             <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed pt-6'>These projects are being coordinated in collaboration with Balkan Development Corporation USA, which is committed to continuously expanding infrastructure networks and creating dynamic living and commercial spaces throughout North America.</p>
             <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed'>"I'm proud that it's now crystal clear — we've entered a groundbreaking market together, and through the front door. We're now part of the largest experiential real estate model in the U.S., including Thematic Urban Living Zones and major spaces such as Geant Commercial District, one of the leading hyper-commercial developments in the region. Very soon, as part of the second phase of this expansion, we will roll out our projects across other strategic cities including Los Angeles, Houston, and Miami," said Zlatko Kartal, representative of Balkan Development Corporation.</p>
              <p className='font-normal text-[#6B7280] text-base sm:text-lg leading-relaxed'>Themed commercial districts across the USA are reshaping the real estate landscape. These developments proudly combine residential excellence, commercial vibrancy, lifestyle integration, and educational environments into one. Originally designed around bold, visionary urban concepts, these modern real estate hubs boast a vibrant mix of retail spaces, culinary experiences, entertainment centers, and community-driven living environments — reshaping how people live, work, and grow.</p>
             </div>
           
            </div>
            <Inquirey />
            <Footer />
        </section>
  )
}

export default page