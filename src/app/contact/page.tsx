"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import Image from 'next/image';
import { FaRightLong } from "react-icons/fa6";
import Inquirey from "@/components/blocks/Inquirey";
import Footer from "@/components/blocks/Footer";

function PhoneField() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-700">Phone</label>
      <div className="flex h-11">
        <PhoneInput
          defaultCountry="us"
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: "100%",
            height: "100%",
            border: "none",
            backgroundColor: "#fafafa",
            padding: "0 16px",
            borderRadius: "0 16px 16px 0",
            outline: "none"
          }}
          countrySelectorStyleProps={{
            buttonStyle: {
              height: "100%",
              padding: "0 12px",
              backgroundColor: "white",
              border: "1px solid #1211131A",
              borderRadius: "16px 0 0 16px",
              borderRight: "none"
            },
            dropdownStyleProps: {
              style: {
                width: "300px",
                left: "0",
                top: "45px"
              }
            }
          }}
          placeholder="Enter phone number"
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid #1211131A",
            borderRadius: "16px",
            backgroundColor: "#fafafa"
          }}
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
    <section className='grid grid-cols-1 lg:grid-cols-2 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 gap-6 xs:gap-7 sm:gap-8'>
      <div className='flex flex-col gap-4 xs:gap-5 sm:gap-6'>
        <h1 className='capitalize font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight'>Get in Touch with Our Real Estate Experts in the USA</h1>
        <p className='font-normal text-sm xs:text-base sm:text-base text-[#5B5B5BB2] leading-relaxed'>
          Based in one of the world's most dynamic property markets, we bring years of industry experience and insight to every project. Whether you're planning to build, invest, or renovate, our team is here to guide you. We deliver trusted construction solutions that ensure quality, value, and long-term success.
        </p>
        <div className='inline-flex items-start justify-start gap-2'>
          <LuFacebook className='w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 border rounded-full border-[#22223C33] p-1.5 xs:p-2 hover:bg-gray-50 transition-colors cursor-pointer'/>
          <FaInstagram className='w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 border rounded-full border-[#22223C33] p-1.5 xs:p-2 hover:bg-gray-50 transition-colors cursor-pointer'/>
          <RiLinkedinFill className='w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 border rounded-full border-[#22223C33] p-1.5 xs:p-2 hover:bg-gray-50 transition-colors cursor-pointer'/>
          <RiTwitterXFill className='w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 border rounded-full border-[#22223C33] p-1.5 xs:p-2 hover:bg-gray-50 transition-colors cursor-pointer'/>
        </div>
        <div className='relative w-full mt-2 xs:mt-3 sm:mt-4 overflow-hidden rounded-lg'>
          <Image 
            src='/Group 1.jpg'
            alt='Group'
            width={460}
            height={445}
            className='w-full h-auto object-cover'
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 460px"
            priority={false}
          />
        </div>
      </div>
      
      <div className='flex flex-col gap-4 xs:gap-5 sm:gap-6 border p-4 xs:p-5 sm:p-6 md:p-8 lg:p-6 xl:p-10 rounded-xl min-h-[480px] xs:min-h-[520px] sm:h-auto lg:h-[540px] border-[#E0E0E0] bg-white'>
        <div className='flex flex-col sm:flex-row gap-4 xs:gap-5 sm:gap-6'>
          <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor="firstName" className="text-sm text-gray-700">Your Name</label>
            <input 
              type="text" 
              placeholder='Enter your name' 
              className='border border-[#1211131A] px-3 xs:px-4 py-2 w-full bg-[#fafafa] rounded-2xl text-[#5B5B5B] focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 xs:h-11 text-sm xs:text-base'
            />
          </div>
          <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor="lastName" className="text-sm text-gray-700">Last Name</label>
            <input 
              type="text" 
              placeholder='Enter your last name' 
              className='border border-[#1211131A] px-3 xs:px-4 py-2 w-full bg-[#fafafa] rounded-2xl text-[#5B5B5B] focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 xs:h-11 text-sm xs:text-base'
            />
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 xs:gap-5 sm:gap-6'>
          <div className='flex flex-col gap-3 flex-1'>
            <PhoneField />
          </div>
          <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='border border-[#1211131A] px-3 xs:px-4 py-2 w-full bg-[#fafafa] rounded-2xl text-[#5B5B5B] focus:outline-none focus:ring-1 focus:ring-blue-500 h-10 xs:h-11 text-sm xs:text-base'
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-3 mt-1 xs:mt-2">
          <label htmlFor="message" className="text-sm text-gray-700">Message</label>
          <textarea 
            placeholder='Enter your message' 
            rows={3}
            className='border border-[#1211131A] px-3 xs:px-4 py-2 w-full bg-[#fafafa] rounded-2xl text-[#5B5B5B] focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm xs:text-base min-h-[80px] xs:min-h-[96px] resize-none'
          ></textarea>
        </div>
        
        <button className='inline-flex items-center justify-center px-6 xs:px-8 gap-3 xs:gap-4 bg-black text-base xs:text-lg text-white py-2.5 xs:py-3 w-full xs:w-auto rounded-3xl mt-2 xs:mt-4 font-medium transition-all hover:bg-gray-800 active:scale-95 cursor-pointer'>
          Request Call Back <span className="pt-0.5 xs:pt-1.5"><FaRightLong className="w-4 h-4 xs:w-5 xs:h-5" /></span>
        </button>
      </div>
       
    </section>
    <Inquirey />
    <Footer />
    </>
  );
}