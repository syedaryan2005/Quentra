import Footer from '@/components/blocks/Footer'
import Inquirey from '@/components/blocks/Inquirey'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

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
          className="w-full h-[180px] xs:h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-cover"
          priority
          sizes="100vw"
        />

        
        <div className="absolute inset-0 bg-black/20 z-10" />

        
        <div className="absolute inset-0 z-20 flex items-center justify-center px-3 xs:px-4 sm:px-6">
          <div className="text-center text-white">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              TERMS & CONDITIONS
            </h1>
            <div className="mt-2 xs:mt-3 sm:mt-4 flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base">
              <Link href="/" className="font-extralight hover:underline">Home</Link>
              <FaArrowAltCircleRight className="translate-y-[1px] flex-shrink-0" />
              <p className="font-extralight">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-30 mt-0'>
        <div className='w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
        <h1 className='uppercase mt-6 xs:mt-8 sm:mt-10 font-normal text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-center sm:text-left'>Terms & Conditions – Quentra Real Estate & Construction Group</h1>
        <p className='capitalize font-medium text-sm xs:text-base sm:text-base text-[#00000099] pt-6 xs:pt-8 sm:pt-10 leading-relaxed'>Welcome to the official website of Quentra Real Estate & Construction Group. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our site or services.</p>
        </div>
        <div className='flex flex-col gap-2 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30 mt-6 xs:mt-8 sm:mt-10 text-[#00000099] max-w-7xl mx-auto'>
        <h1 className='font-bold text-base xs:text-lg sm:text-xl pt-4 xs:pt-6'>Use Of Website</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>This website is designed to provide general information about our real estate and construction services. All content is for informational purposes only and does not constitute legal, financial, or investment advice. Use of any information from this site is at your own risk.</p>
        
        <h1 className='font-bold text-base xs:text-lg sm:text-xl pt-4 xs:pt-6'>Intellectual Property</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>All content on this site—including text, images, graphics, logos, and design—is the intellectual property of Quentra Real Estate unless otherwise stated. You may not reproduce, distribute, or use any materials without prior written permission from us.</p>
        
        <h1 className='font-bold text-base xs:text-lg sm:text-xl pt-4 xs:pt-6'>User Conduct:</h1>
        <span className='font-medium text-sm xs:text-base'>You Agree Not To:</span>          
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>
        • Use the website for unlawful or harmful purposes.<br />
        • Attempt unauthorized access to the website or our systems.<br />
        • Upload or transmit any viruses, malware, or harmful code.<br />
        • Misuse or falsify information related to any property listings or services.
        </p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Property Listings & Availability</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>While we strive to ensure accurate and up-to-date information, availability, pricing, and specifications of properties are subject to change without notice. Quentra Real Estate does not guarantee that listed properties will be available at the time of inquiry.</p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Third-Party Links</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>Our website may contain links to third-party websites for your convenience. These sites are not under our control, and we are not responsible for their content, accuracy, or privacy policies. You access such third-party websites at your own risk.</p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Limitation of Liability</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>Quentra Real Estate is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website, services, or information provided on this platform.</p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Modifications to Terms</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>We reserve the right to update or modify these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting. Continued use of the site constitutes your acceptance of the revised terms.</p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Governing Law</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed'>These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from the use of this site shall be resolved in the jurisdiction of our registered business location.</p>
        
        <h1 className='pt-4 xs:pt-6 font-bold text-base xs:text-lg sm:text-xl'>Contact Us</h1>
        <p className='font-medium text-sm xs:text-base capitalize leading-relaxed pb-6 xs:pb-8 sm:pb-10'>For questions regarding these terms, please visit our Contact Us page to reach our support team.</p>
        </div>
        <Inquirey />
        <Footer />
      </div>
    </section>
  )
}

export default page