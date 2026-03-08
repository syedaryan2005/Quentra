import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-black text-white w-full mt-10">
      {/* content */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div className="md:pl-12 lg:pl-16 xl:pl-20">
            <h1 className="font-normal leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-md md:max-w-none">
              LET&apos;S CONNECT
            </h1>

            <p className="mt-4 text-sm sm:text-base font-light text-white/80 max-w-md md:max-w-lg">
              Explore Premium Properties, Personalized Service, And
              <br className="hidden sm:block" />
              Unbeatable Deals In Top Neighborhoods Near You.
            </p>

            {/* Email */}
            <div className="mt-6 flex items-center gap-4">
              <FaLongArrowAltRight className="shrink-0 text-2xl sm:text-3xl md:text-4xl" />
              <p className="text-xl sm:text-2xl">Contactus@Quentra.Info</p>
            </div>

            {/* Address */}
            <div className="mt-6 flex items-start gap-4">
              <FaLocationDot className="mt-0.5 shrink-0 text-xl sm:text-2xl" />
              <p className="text-xs sm:text-sm leading-relaxed">
                4129 Westwood Avenue, Suite #305, Bayside, CA
                <br />
                94015, United States
              </p>
            </div>

            {/* Phone */}
            <div className="mt-6 flex items-start gap-4">
              <BsFillTelephoneFill className="mt-0.5 shrink-0 text-lg sm:text-xl" />
              <p className="text-xs sm:text-sm pt-0.5">+1-202-555-0146</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:pr-6">
            <form className="w-full max-w-md md:max-w-[480px] lg:max-w-[540px]">
              {/* First Name */}
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold mb-1.5"
              >
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="John"
                required
                className="w-full h-12 rounded-[10px] px-4
                  border border-white/15 bg-white/5 text-white placeholder-white/50
                  focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              {/* Email */}
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1.5 mt-4"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                className="w-full h-12 rounded-[10px] px-4
                  border border-white/15 bg-white/5 text-white placeholder-white/50
                  focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              {/* Message */}
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1.5 mt-4"
              >
                Drop Us A Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="I Want To Build a"
                className="w-full rounded-[10px] px-4 py-3 resize-none
                  border border-white/15 bg-white/5 text-white placeholder-white/50
                  focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 inline-block rounded-[10px] bg-white text-black
                  px-6 py-2.5 font-medium hover:opacity-95 active:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* bottom bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5 md:pt-6">
          <p className="text-xs sm:text-sm font-extralight order-2 md:order-1">
            © 2024 Quentra Projects LLC. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 md:gap-6 order-1 md:order-2">
            <a
              href="/Privacy"
              className="text-xs sm:text-sm font-extralight underline underline-offset-4 hover:opacity-90"
            >
              Privacy policy
            </a>
            <a
              href="/Terms"
              className="text-xs sm:text-sm font-extralight underline underline-offset-4 hover:opacity-90"
            >
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;