"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-20 -mb-14 sm:-mb-16">
      <Reveal type="up" delay={50}>
        <div className="group bg-gradient-to-r from-[#bfa76a] via-[#d4af37] to-[#a88d48] rounded-2xl sm:rounded-3xl py-4 sm:py-7 md:py-8 px-4 sm:px-10 md:px-14 shadow-[0_20px_50px_rgba(191,167,106,0.35)] border border-amber-200/30 flex flex-row items-center justify-between gap-2 sm:gap-6 text-white transition-all duration-500 hover:shadow-[0_25px_60px_rgba(191,167,106,0.45)]">
          
          {/* Left Content (Phone Icon + Text) */}
          <div className="flex flex-row items-center gap-3 sm:gap-6 text-left overflow-hidden">
            {/* White Circular Phone Icon */}
            <div className="hidden sm:flex w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full items-center justify-center shrink-0 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-[#bfa76a]" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="font-serif text-[17px] sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-tight mb-0.5 sm:mb-1 drop-shadow-sm whitespace-nowrap">
                Have Questions?
              </h3>
              <p className="text-white/95 text-[11px] sm:text-base font-medium leading-tight truncate">
                We&apos;re here to help you 24/7!
              </p>
            </div>
          </div>

          {/* Right CTA Button -> Link to /contact */}
          <div className="w-auto shrink-0 pl-2 sm:pl-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 px-4 sm:px-11 py-2 sm:py-4 rounded-xl font-bold text-[10px] sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-h-[36px] sm:min-h-[48px]"
            >
              CONTACT US
            </Link>
          </div>

        </div>
      </Reveal>
    </div>
  );
}
