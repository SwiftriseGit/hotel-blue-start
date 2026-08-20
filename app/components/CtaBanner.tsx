"use client";

import { PhoneCall } from "lucide-react";

export default function CtaBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-20 -mb-14 sm:-mb-16">
      <div className="bg-gradient-to-r from-[#ff0033] via-[#e60023] to-[#c9001f] rounded-2xl sm:rounded-3xl py-6 sm:py-7 px-8 sm:px-12 md:px-14 shadow-[0_20px_50px_rgba(230,0,35,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        
        {/* Left Content (Phone Icon + Text) */}
        <div className="flex items-center gap-5 sm:gap-6 text-center md:text-left">
          {/* White Circular Phone Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-md">
            <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60023]" />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-white leading-tight mb-1 drop-shadow-sm">
              Have Questions?
            </h3>
            <p className="text-white/95 text-sm sm:text-base font-light">
              We&apos;re here to help you!
            </p>
          </div>
        </div>

        {/* Right CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            CONTACT US
          </a>
        </div>

      </div>
    </div>
  );
}
