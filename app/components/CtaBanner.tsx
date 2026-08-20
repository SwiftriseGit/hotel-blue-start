"use client";

import { PhoneCall } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-20 -mb-12 sm:-mb-14 md:-mb-16">
      <Reveal type="up" delay={50}>
        <div className="group bg-gradient-to-r from-[#ff0033] via-[#e60023] to-[#c9001f] rounded-2xl sm:rounded-3xl py-6 sm:py-7 md:py-8 px-6 sm:px-10 md:px-14 shadow-[0_20px_50px_rgba(230,0,35,0.3)] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-white transition-all duration-500 hover:shadow-[0_25px_60px_rgba(230,0,35,0.4)]">
          
          {/* Left Content (Phone Icon + Text) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* White Circular Phone Icon */}
            <div className="w-13 h-13 sm:w-15 sm:h-15 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60023]" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-white leading-tight mb-1 drop-shadow-sm">
                Have Questions?
              </h3>
              <p className="text-white/95 text-xs sm:text-sm md:text-base font-light">
                We&apos;re here to help you!
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="w-full sm:w-auto">
            <a
              href="#contact"
              data-cursor="Contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap w-full sm:w-auto min-h-[48px]"
            >
              CONTACT US
            </a>
          </div>

        </div>
      </Reveal>
    </div>
  );
}
