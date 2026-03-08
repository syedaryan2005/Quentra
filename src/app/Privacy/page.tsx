import Footer from '@/components/blocks/Footer'
import Inquirey from '@/components/blocks/Inquirey'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

function page() {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="relative">
        {/* BG image */}
        <Image
          src="/Privacy.png"
          alt="About Image"
          width={1400}
          height={400}
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
          priority
        />

        
        <div className="absolute inset-0 bg-black/20 z-10" />

        
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              PRIVACY POLICY
            </h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link href="/" className="font-extralight">Home</Link>
              <FaArrowAltCircleRight className="translate-y-[1px]" />
              <p className="font-extralight">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        <h1 className="uppercase px-4 sm:px-8 lg:px-16 xl:px-24 text-3xl sm:text-4xl md:text-5xl py-8 sm:py-12 md:py-16 font-medium">
          Privacy Policy – Quentra Real Estate & Construction Group
        </h1>

        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-10 sm:pb-14 md:pb-16">
          <p className="uppercase font-bold text-[#00000099] text-base sm:text-lg">
            Protect your Privacy:
          </p>

          
          <p className="font-medium text-[#00000099] text-sm sm:text-base mt-3">
            In order to help you protect your personal information, we recommend the following:
          </p>

          <ol className="list-decimal pl-5 mt-4 sm:mt-6 text-[#00000099] text-sm sm:text-base marker:font-semibold marker:text-[#00000099] space-y-2 font-medium">
            <li>
              <span className="font-medium">Report Immediately:</span> Contact us right away if you suspect someone has gained access to your password, user credentials, or any confidential details linked to your Quentra account.
            </li>
            <li>
              <span className="font-medium">Be Cautious Online:</span> Never share personal or confidential information over the phone or the internet unless you are sure of the recipient&apos;s identity.
            </li>
            <li>
              <span className="font-medium">Use Secure Connections:</span> When making online transactions, always use a secure browser. Ensure antivirus software is active and that unused applications on the network are closed.
            </li>
            <li>
              <span className="font-medium">Privacy Inquiries:</span> If you have any questions or concerns regarding our privacy practices, reach out via the contact form on our Contact Us page.
            </li>
            <li>
              <span className="font-medium">Data Security:</span> All electronic storage and transmission of personal data are protected using industry-standard security technologies to ensure confidentiality and safety.
            </li>
            <li>
              <span className="font-medium">Third-Party Sites Disclaimer:</span> Our website may contain links to external sites with different privacy policies. Quentra Real Estate isn&apos;t responsible for their content or data practices. Review their policies before sharing personal information.
            </li>
          </ol>

          <p className="font-bold text-[#00000099] text-base sm:text-lg mt-8 sm:mt-10">
            Use Of Email Communication:
          </p>
          <p className="capitalize pt-3 sm:pt-4 text-[#00000099] font-medium text-sm sm:text-base">
            When you reach out to us with inquiries, service requests, or feedback—whether electronically or otherwise—Quentra Real Estate may use your provided email address to respond appropriately.
          </p>

          <p className="pt-4 sm:pt-5 text-[#00000099] font-medium text-sm sm:text-base">
            • Your email address, message, and our response may be stored for quality assurance, customer service follow-up, and regulatory compliance. <br />
            • We do not share your information with third parties without your consent, unless required by law or for internal service optimization.
          </p>

          <p className="capitalize pt-8 sm:pt-10 text-[#00000099] font-bold text-sm sm:text-base">
            This policy is intended to maintain transparency and build trust with all clients, investors, and visitors of Quentra Real Estate. If you have any further questions, please do not hesitate to contact our support team.
          </p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <Inquirey />
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default page
