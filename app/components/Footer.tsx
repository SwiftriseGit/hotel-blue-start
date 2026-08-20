"use client";

import { Star, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Reveal from "./Reveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookWhatsAppUrl =
    "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20would%20like%20to%20book%20a%20room.";
  const contactWhatsAppUrl =
    "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20have%20a%20query%20regarding%20my%20stay.";

  return (
    <footer className="relative w-full bg-[#141414] text-white pt-28 sm:pt-32 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main Footer Content Grid 4 Columns with Viewport Reveal */}
        <Reveal type="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
            
            {/* Col 1: Logo & About & Socials */}
            <div className="flex flex-col items-start">
              {/* Logo */}
              <a href="#" className="flex items-center gap-3.5 mb-4 group">
                <Star className="w-8 h-8 sm:w-9 sm:h-9 fill-[#d6001c] text-[#d6001c] shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[13px] font-bold tracking-[0.2em] text-white">
                    HOTEL
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] text-white">
                    SILVER STAR
                  </span>
                </div>
              </a>

              <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-xs mb-7">
                Comfortable stays, warm hospitality and unforgettable experiences.
              </p>

              {/* Official Social Media Icons: Facebook & Instagram only */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_8px_20px_rgba(24,119,242,0.4)] min-w-[44px] min-h-[44px]"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white hover:shadow-[0_8px_20px_rgba(228,64,95,0.4)] min-w-[44px] min-h-[44px]"
                >
                  <FaInstagram className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-[14px] sm:text-[15px] font-bold tracking-[0.14em] text-white uppercase mb-5">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Home</a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Rooms</a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Amenities</a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Gallery</a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Offers</a>
                </li>
                <li>
                  <a href={contactWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 footer-link-hover py-0.5 inline-block">Contact</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Amenities */}
            <div>
              <h4 className="text-[14px] sm:text-[15px] font-bold tracking-[0.14em] text-white uppercase mb-5">
                AMENITIES
              </h4>
              <ul className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-gray-300">
                <li className="py-0.5">Free Wi-Fi</li>
                <li className="py-0.5">Power Backup</li>
                <li className="py-0.5">Room Service</li>
                <li className="py-0.5">24x7 Reception</li>
                <li className="py-0.5">Daily Housekeeping</li>
                <li className="py-0.5">Parking Facility</li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="flex flex-col items-start">
              <h4 className="text-[14px] sm:text-[15px] font-bold tracking-[0.14em] text-white uppercase mb-5">
                CONTACT US
              </h4>
              <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-4">
                Near City Center, Main Road,<br />Your City - 123456
              </p>
              <div className="flex items-center gap-3 text-[14px] sm:text-[15px] text-gray-200 mb-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] sm:text-[15px] text-gray-200 mb-6">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <span>info@hotelsilverstar.com</span>
              </div>
              <a
                href={bookWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#d6001c] hover:bg-[#b30018] text-white px-8 sm:px-9 py-3.5 rounded-xl font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase transition-all duration-300 shadow-md hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                BOOK NOW
              </a>
            </div>

          </div>
        </Reveal>

        {/* Bottom Copyright Bar with Animated Expanding Back to Top Button */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-[13px] sm:text-[14px]">
            &copy; 2025 Hotel Silver Star. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="back-to-top-btn"
          >
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
