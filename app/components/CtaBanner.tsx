"use client";

import { PhoneCall } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  const contactWhatsAppUrl =
    "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20have%20a%20question%20regarding%20my%20stay.";

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20 -mb-10 sm:-mb-11">
      <Reveal type="up" delay={50}>
        <div className="group bg-gradient-to-r from-[#b30018] via-[#c9001f] to-[#990012] rounded-2xl sm:rounded-3xl py-5 sm:py-6 px-6 sm:px-8 md:px-10 shadow-[0_15px_40px_rgba(180,0,25,0.3)] flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 text-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(180,0,25,0.4)]">
          
          {/* Left Content (Phone Icon + Text) */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 text-center sm:text-left">
            {/* White Circular Phone Icon */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <PhoneCall className="w-5 h-5 text-[#b30018]" />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-tight mb-0.5 drop-shadow-sm">
                Have Questions?
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-light">
                We&apos;re here to help you!
              </p>
            </div>
          </div>

          {/* Right CTA Button -> WhatsApp */}
          <div className="w-full sm:w-auto">
            <a
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-7 sm:px-8 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap w-full sm:w-auto min-h-[44px]"
            >
              CONTACT US
            </a>
          </div>

        </div>
      </Reveal>
    </div>
  );
}
