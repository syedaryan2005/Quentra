
import Image from "next/image";
import ReviewsSlider from "./ReviewsSlider";
import ProjectsSlider from "./ProjectSlider";
import VisionSlider from "./SliderVision";
import ChooseSection from "./ChooseSection";
import ClientTestimonials from "./Client";
import Blogs from "./Blogs-Section";
import Inquirey from "./Inquirey";
import Footer from "./Footer";

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
      "Quentra Real Estate made the home-buying process smooth and stress-free. Their team understood exactly what we were looking for and delivered beyond our expectations. We love our new place!",
    author: "— Priya R., Austin, TX",
  },
  {
    image: "/project-5.png",
    quote:
      "Amazing service and great prices! The staff at NKS Parts helped me identify the right alternator for my car, and it&apos;s been running smoothly ever since. Highly recommended!",
    author: "— Mark L., San Diego, CA",
  },
];

export default function Hero() {
  return (
    <section className="w-full">
      {/* HERO */}
      <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] text-white">
        {/* BG image */}
        <Image
          src="/image.png"
          alt="Hero-sec"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
        />

        {/* Overlay (slightly stronger on mobile for readability) */}
        <div className="absolute inset-0 z-10 bg-black/60 xs:bg-black/55 sm:bg-black/50 md:bg-black/45 lg:bg-black/40" />

        {/* Text on top */}
        <div className="relative z-20 mx-auto h-full max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex h-full flex-col items-start justify-center py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              From Concept To Concrete — Trusted{" "}
              <br className="hidden xs:block" />
              Experts In Real Estate &amp; Development
            </h1>

            <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white/95 leading-relaxed">
              Explore Premium Properties, Personalized Service, and Unbeatable Deals{" "}
              <br className="hidden sm:block" />
              In Top Neighborhoods Near You.
            </p>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12">
        <ReviewsSlider />
      </div>

     
      <div className="mx-auto mt-8 mb-10 xs:mt-9 xs:mb-11 sm:mt-10 sm:mb-12 md:mt-12 md:mb-14 lg:mt-14 lg:mb-16 flex max-w-7xl flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="w-full text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl font-medium leading-relaxed">
          <span className="font-semibold">At Quentra Real Estate,</span> we go beyond
          building properties—we build legacies. Our mission is rooted in shaping
          modern lifestyles through smart, sustainable, and visionary developments.
          From residential communities to commercial landmarks, we&apos;re dedicated to
          transforming spaces that elevate everyday living.
        </div>

        
        <div className="relative w-full overflow-hidden rounded-lg aspect-[1100/398]">
          <Image
            src="/image1.png"
            alt="Quentra overview"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1100px"
            priority={false}
          />
        </div>  
      </div>

      {/* PROJECTS */}
      <ProjectsSlider />

      
      <div>
        <VisionSlider />
        <ChooseSection />

        <main className="bg-neutral-900">
          <ClientTestimonials slides={SLIDES} />
        </main>

        <Blogs />
        <Inquirey />
        <Footer />
      </div>
    </section>
  );
}