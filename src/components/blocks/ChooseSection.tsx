import Image from "next/image";
import Link from "next/link";
import React from "react";

type Feature = {
  icon: string;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/Frame1.png",
    title: "Proven\nExpertise",
    body:
      "Years of experience delivering residential, commercial, and mixed-use projects with a strong reputation for quality and timely completion.",
  },
  {
    icon: "/Frame2.png",
    title: "Cutting-Edge\nTechnology",
    body:
      "We use cutting-edge architectural tools and smart building technologies to create modern, efficient, and future-ready spaces.",
  },
  {
    icon: "/Frame3.png",
    title: "Global Standards\nCompliance",
    body:
      "Our developments meet RERA, LEED, and international construction codes—ensuring safety, sustainability, and legal integrity at every step.",
  },
  {
    icon: "/Frame4.png",
    title: "Client-Centric\nApproach",
    body:
      "From concept to keys-in-hand, we listen, adapt, and build around your needs—guaranteeing satisfaction and long-term value.",
  },
];

export default function ChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 lg:block hidden">
        {/* Heading */}
        <h1 className="font-normal leading-none text-[48px] md:text-[72px] lg:text-[92px] tracking-wide mb-12">
          WHY CHOOSE US ?
        </h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
              {FEATURES.map((f, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={f.icon}
                      alt={f.title.replace("\n", " ")}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  {/* Title + underline */}
                  <h3 className="whitespace-pre-line text-[26px] font-medium leading-tight">
                    {f.title}
                  </h3>
                  <span className="mt-3 h-[2px] w-16 bg-black inline-block" />

                  {/* Body */}
                  <p className="mt-4 text-[16px] font-normal leading-7 text-black/80">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA panel */}
          <div className="lg:col-span-5">
           <div className="relative overflow-hidden rounded-xl bg-neutral-900 min-h-[360px] lg:min-h-[480px]">
  {/* Inline SVG as background */}
<Image 
src='/svg1.jpg'
alt="background-svg"
fill
className="object-cover opacity-40"
/>
<Image 
src='/svg1.jpg'
alt="background-svg"
fill
className="object-cover opacity-40"
/>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

  {/* Content */}
  <div className="relative z-10 p-6 md:p-8 lg:p-10 h-full flex flex-col">
    <h1 className="text-white font-normal text-2xl">Ready To Build Your Next Big <br /> Project?</h1>
    <div className="mt-auto">
      <Link href='/contact' >
      <button className=" rounded-full bg-white text-black px-5 py-3 text-base font-semibold shadow-md hover:shadow-lg transition mt-68 cursor-pointer">
        Reach Out To Us
      </button>
      </Link>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
        <div className="container mx-auto px-6 lg:hidden sm:block">
        {/* Heading */}
        <h1 className="font-normal leading-none text-[39px] tracking-wide mb-12">
          WHY CHOOSE US ?
        </h1>

        
        <div className="grid grid-cols-1 gap-10  items-start">
         
          <div className="">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {FEATURES.map((f, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={f.icon}
                      alt={f.title.replace("\n", " ")}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  {/* Title + underline */}
                  <h3 className="whitespace-pre-line text-[18px] font-medium leading-7">
                    {f.title}
                  </h3>
                  <span className="mt-3 h-[3px] w-16 bg-black inline-block" />

                  {/* Body */}
                  <p className="mt-4 text-[16px] font-normal leading-5 text-black/80">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA panel */}
          <div className="">
           <div className="relative overflow-hidden rounded-xl bg-neutral-900 min-h-[360px]">
  {/* Inline SVG as background */}
<Image 
src='/svg1.jpg'
alt="background-svg"
fill
className="object-cover opacity-40"
/>
<Image 
src='/svg1.jpg'
alt="background-svg"
fill
className="object-cover opacity-40"
/>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

  {/* Content */}
  <div className="relative z-10 p-6 h-full flex flex-col w-[550px]">
    <h1 className="text-white font-normal text-xl">Ready To Build Your Next Big <br /> Project?</h1>
    <div className="mt-auto">
      <Link href='/contact' >
      <button className=" rounded-full bg-white text-black px-5 py-3 text-base font-semibold shadow-md hover:shadow-lg transition mt-68 cursor-pointer">
        Reach Out To Us
      </button>
      </Link>
    </div>
  </div>
</div>
          </div>
        </div>
      </div> 
    </section>
  );
}
