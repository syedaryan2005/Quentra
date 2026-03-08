"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";


export default function PhoneField() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="phone" className="text-sm font-medium text-[#111827]">
        Phone
      </label>

      <PhoneInput
        defaultCountry="us"              
        value={phone}
        onChange={setPhone}
        inputProps={{ id: "phone", name: "phone", autoComplete: "tel" }}

        
        className="w-[230px]"

        
        inputClassName="!w-full !h-[44px] !rounded-2xl !border !border-[#1211131A] !bg-[#fafafa] !px-5 !text-[#5B5B5B] !text-sm !placeholder-[#5B5B5B]"

        
        countrySelectorStyleProps={{
          buttonClassName:
            "!h-[44px] !rounded-l-2xl !border !border-[#1211131A] !bg-[#fafafa] !px-3 !text-[#5B5B5B]",
         dropdownArrowClassName: "!rounded-xl !shadow-lg",
        }}
        placeholder="Enter phone number"
      />
    </div>
  );
}
