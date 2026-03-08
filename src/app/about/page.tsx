import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import SliderVision from "@/components/blocks/SliderVision";
import ChooseSection from "@/components/blocks/ChooseSection";
import Client from "@/components/blocks/Client";
import ClientTestimonials from "@/components/blocks/Client";
import Inquirey from "@/components/blocks/Inquirey";
import Footer from "@/components/blocks/Footer";
import ProjectsSlider from "@/components/blocks/ProjectSlider";
import Blogs from "@/components/blocks/Blogs-Section";

const SLIDES = [
  {
    image: "/project-5.png",
    quote:
      "Working with Quentra Real Estate was a game-changer. Their attention to detail, transparency, and dedication stood out throughout the construction of our custom home.",
    author: "— Tanya B., Miami, FL",
  },
  {
    image: "/project-5.png",
    quote:
      "From planning to final handover, everything felt seamless. The team communicated clearly and delivered exactly what they promised.",
    author: "— David R., Austin, TX",
  },
  {
    image: "/project-5.png",
    quote:
      "Professional, responsive, and trustworthy. We always knew where the project stood and what would happen next.",
    author: "— Nabila S., San Jose, CA",
  },
];

function About() {
  return (
    <section className="w-full">
      <div className="relative">
        {/* BG image */}
        <Image
          src="/Blog.png"
          alt="About Image"
          width={1400}
          height={400}
          className="w-full h-[200px] xs:h-[240px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Centered hero text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">ABOUT US</h1>
            <div className="mt-2 sm:mt-4 flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base">
              <Link href="/" className="font-extralight">
                Home
              </Link>
              <FaArrowAltCircleRight className="translate-y-[1px]" />
              <p className="font-extralight">About Us</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Mission column */}
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="font-medium text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Our Mission; Creating
              <br className="hidden sm:block" />
              Sustainable Spaces for
              <br className="hidden sm:block" />
              Tomorrow
            </div>
            <p className="font-medium text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333]">
              At{" "}
              <span className="font-semibold ml-1">Quentra Real Estate,</span> we
              go beyond building properties—we build legacies. Our mission is
              rooted in shaping modern lifestyles through smart, sustainable,
              and visionary developments. From residential communities to
              commercial landmarks, we're dedicated to transforming spaces that
              elevate everyday living.
            </p>
            <div className="flex items-center gap-4 sm:gap-8 pt-2">
              <Image
                src="/flag.png"
                alt="flag Image 1"
                width={150}
                height={150}
                className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-lg"
              />
              <p className="font-medium text-xs xs:text-sm sm:text-base md:text-lg text-[#5F6368] leading-none">
                PROFESSIONALLY <br />
                CERTIFIED CONTRACTORS <br />
                IN THE USA
              </p>
            </div>
          </div>

          {/* Map / Arrow column */}
          <div className="relative flex flex-col justify-center items-start gap-4">
            <Image
              src="/uae_map.png"
              alt="About Image 2"
              width={500}
              height={300}
              className="relative w-full h-auto object-cover rounded-lg"
            />
           
            <Image
              src="/arrow.png"
              alt="arrow image"
              width={80}
              height={80}
              className="hidden sm:block absolute right-4 sm:right-8 md:right-12 lg:right-[76px] w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -mt-4 object-cover"
            />
          </div>
        </div>
      </div>

      <section className="w-full">
        <div className="lg:hidden block mt-10">
          <ProjectsSlider />
        </div>
        
        <div className="hidden lg:landscape:block lg:portrait:hidden">
          <h1 className="flex items-center justify-center font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            OUR CORE VALUES
          </h1>

          <div className="px-4 sm:px-8 md:px-16 lg:px-32 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-12 gap-5">
            {/* Card 1 */}
            <div className="flex flex-col justify-center items-start sm:items-center gap-3">
              <Image
                src="/firstcore.png"
                alt="Our-Core first"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full sm:w-[210px] text-center font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
                Innovative Design & Planning
              </h1>
              <p className="mx-auto max-w-[30ch] text-center text-xs sm:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                Our team blends creative architecture with strategic planning,
                ensuring each project is not only functional and efficient but
                also visually compelling and future-ready.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-center items-start sm:items-center gap-3">
              <Image
                src="/secondcore.png"
                alt="Our-Core second"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full sm:w-[210px] text-center font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
                Sustainable Development
              </h1>
              <p className="mx-auto max-w-[28ch] text-center text-xs sm:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                We integrate eco-friendly building practices and sustainable
                materials to reduce environmental impact while promoting energy
                efficiency and long-term value for our clients.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-center items-start sm:items-center gap-3">
              <Image
                src="/thirdcore.png"
                alt="Our-Core third"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full sm:w-[210px] text-center font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
                Client-Centric Approach
              </h1>
              <p className="mx-auto max-w-[29ch] text-center text-xs sm:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                Every project begins and ends with the client in mind. We tailor
                our solutions to meet specific goals, ensuring clear
                communication, transparency, and satisfaction at every stage.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-center items-start sm:items-center gap-3">
              <Image
                src="/forthcore.png"
                alt="Our-Core fourth"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full sm:w-[210px] text-center font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
                Quality-Driven Construction
              </h1>
              <p className="mx-auto max-w-[28ch] text-center text-xs sm:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                We are committed to delivering projects that stand the test of
                time. From materials to workmanship, every element is selected and
                executed with the highest quality standards in mind.
              </p>
            </div>
          </div>
        </div>

        {/* for small screens our core section */}
        <div className="hidden lg:portrait:block lg:landscape:hidden">
          <h1 className="flex items-center justify-center font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            OUR CORE VALUES
          </h1>

          <div className="px-4 xs:px-6 sm:px-8 grid grid-cols-1 xs:grid-cols-2 py-12 gap-3">
            {/* Card 1 */}
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/sm1.jpg"
                alt="Our-Core first"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full xs:w-[210px] text-center font-semibold text-lg xs:text-xl">
                Innovative Design & Planning
              </h1>
              <p className="mx-auto max-w-[30ch] text-center text-xs xs:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                Our team blends creative architecture with strategic planning,
                ensuring each project is not only functional and efficient but
                also visually compelling and future-ready.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/sm2.jpg"
                alt="Our-Core second"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full xs:w-[210px] text-center font-semibold text-lg xs:text-xl">
                Sustainable Development
              </h1>
              <p className="mx-auto max-w-[28ch] text-center text-xs xs:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                We integrate eco-friendly building practices and sustainable
                materials to reduce environmental impact while promoting energy
                efficiency and long-term value for our clients.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/sm3.jpg"
                alt="Our-Core third"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full xs:w-[210px] text-center font-semibold text-lg xs:text-xl">
                Client-Centric Approach
              </h1>
              <p className="mx-auto max-w-[29ch] text-center text-xs xs:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                Every project begins and ends with the client in mind. We tailor
                our solutions to meet specific goals, ensuring clear
                communication, transparency, and satisfaction at every stage.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/sm4.jpg"
                alt="Our-Core fourth"
                height={60}
                width={60}
                className="mb-1"
              />
              <h1 className="w-full xs:w-[210px] text-center font-semibold text-lg xs:text-xl">
                Quality-Driven Construction
              </h1>
              <p className="mx-auto max-w-[29ch] text-center text-xs xs:text-sm leading-snug text-[#5F6368] [text-wrap:balance]">
                We are committed to delivering projects that stand the test of
                time. From materials to workmanship, every element is selected and
                executed with the highest quality standards in mind.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <SliderVision />
          <ChooseSection />
          <ClientTestimonials slides={SLIDES} />
        </div>
        
        <div className="hidden lg:block">
          <div className="flex justify-center items-center mt-14 flex-col gap-4 mb-10">
            <h1 className="font-medium text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-normal text-center px-4">
              OUR EXPERTIZE: DELIVERING QUALITY
              <br className="hidden sm:block" />
              WITH INNOVATION
            </h1>
            <div className="grid grid-cols-2 gap-4 px-4 sm:px-8 md:px-12 lg:px-22 py-2 w-full max-w-6xl">
              <Image
                src="/S1.png"
                alt="expertize image 1"
                width={650}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src="/S2.png"
                alt="expertize image 2"
                width={650}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:hidden">
          <div className="flex justify-center items-center mt-14 flex-col gap-4 mb-10">
            <h1 className="font-normal text-2xl xs:text-3xl sm:text-4xl leading-snug px-1.5 text-center">
              OUR EXPERTIZE: <br /> DELIVERING QUALITY
              WITH INNOVATION
            </h1>
            <div className="grid grid-cols-2 gap-2 py-2 px-3 w-full">
              <Image
                src="/S1.png"
                alt="expertize image 1"
                width={250}
                height={200}
                className="w-full h-auto max-w-[250px] max-h-[180px] object-cover rounded-lg mx-auto"
              />
              <Image
                src="/S2.png"
                alt="expertize image 2"
                width={250}
                height={200}
                className="w-full h-auto max-w-[250px] max-h-[180px] object-cover rounded-lg mx-auto"
              />
            </div>
          </div>
          <Blogs />
        </div>
        
        <Inquirey />
        <Footer />
      </section>
    </section>
  );
}

export default About;