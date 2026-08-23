"use client";

import { PhoneCall } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  const contactWhatsAppUrl =
    "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20have%20a%20question%20regarding%20my%20stay.";

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-20 -mb-14 sm:-mb-16">
      <Reveal type="up" delay={50}>
        <div className="group bg-gradient-to-r from-[#bfa76a] via-[#d4af37] to-[#a88d48] rounded-2xl sm:rounded-3xl py-6 sm:py-7 md:py-8 px-6 sm:px-10 md:px-14 shadow-[0_20px_50px_rgba(191,167,106,0.35)] border border-amber-200/30 flex flex-col md:flex-row items-center justify-between gap-6 text-white transition-all duration-500 hover:shadow-[0_25px_60px_rgba(191,167,106,0.45)]">
          
          {/* Left Content (Phone Icon + Text) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* White Circular Phone Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-[#bfa76a]" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-tight mb-1 drop-shadow-sm">
                Have Questions?
              </h3>
              <p className="text-white/95 text-sm sm:text-base font-medium">
                We&apos;re here to help you 24/7!
              </p>
            </div>
          </div>

          {/* Right CTA Button -> WhatsApp */}
          <div className="w-full sm:w-auto">
            <a
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 px-9 sm:px-11 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap w-full sm:w-auto min-h-[48px]"
            >
              CONTACT US
            </a>
          </div>

        </div>
      </Reveal>
    </div>
  );
}
