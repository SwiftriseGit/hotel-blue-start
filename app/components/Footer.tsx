"use client";

import { Star, Phone, Mail, ArrowUp, MapPin, MessageCircle } from "lucide-react";
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

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#d6001c] hover:text-[#d6001c] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#d6001c] hover:text-[#d6001c] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Location */}
                <a
                  href="#"
                  aria-label="Location"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#d6001c] hover:text-[#d6001c] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <MapPin className="w-4.5 h-4.5" />
                </a>
                {/* WhatsApp */}
                <a
                  href={contactWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#d6001c] hover:text-[#d6001c] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
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

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-[13px] sm:text-[14px]">
            &copy; 2025 Hotel Silver Star. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 bg-white/10 hover:bg-[#d6001c] text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer min-w-[40px] min-h-[40px]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
