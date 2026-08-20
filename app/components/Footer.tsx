"use client";

import { Star, Phone, Mail, ArrowUp, MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#141414] text-white pt-24 sm:pt-28 pb-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Main Footer Content Grid with Viewport Reveal */}
        <Reveal type="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12">
            
            {/* Col 1: Logo & About & Socials */}
            <div className="flex flex-col items-start">
              {/* Logo */}
              <a href="#" className="flex items-center gap-3 mb-4 group">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#e60023] text-[#e60023] shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-white">
                    HOTEL
                  </span>
                  <span className="text-[16px] sm:text-[17px] font-bold tracking-[0.15em] text-white">
                    SILVER STAR
                  </span>
                </div>
              </a>

              <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs mb-6">
                Comfortable stays, warm hospitality and unforgettable experiences.
              </p>

              {/* Social Icons with 44px min touch target */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#e60023] hover:text-[#e60023] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#e60023] hover:text-[#e60023] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Location */}
                <a
                  href="#"
                  aria-label="Location"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#e60023] hover:text-[#e60023] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                {/* WhatsApp */}
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#e60023] hover:text-[#e60023] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/20 flex items-center justify-center text-gray-300 transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-[13px] font-bold tracking-[0.14em] text-white uppercase mb-3 sm:mb-4">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-2 text-[13px] text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Home</a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Rooms</a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Amenities</a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Gallery</a>
                </li>
                <li>
                  <a href="#offers" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Offers</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors duration-200 footer-link-hover py-1 inline-block">Contact</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Amenities */}
            <div>
              <h4 className="text-[13px] font-bold tracking-[0.14em] text-white uppercase mb-3 sm:mb-4">
                AMENITIES
              </h4>
              <ul className="flex flex-col gap-2 text-[13px] text-gray-400">
                <li className="py-1">Free Wi-Fi</li>
                <li className="py-1">Power Backup</li>
                <li className="py-1">Room Service</li>
                <li className="py-1">24x7 Reception</li>
                <li className="py-1">Daily Housekeeping</li>
                <li className="py-1">Parking Facility</li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="flex flex-col items-start">
              <h4 className="text-[13px] font-bold tracking-[0.14em] text-white uppercase mb-3 sm:mb-4">
                CONTACT US
              </h4>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-3">
                Near City Center, Main Road,<br />Your City - 123456
              </p>
              <div className="flex items-center gap-2.5 text-[13px] text-gray-300 mb-2.5">
                <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-gray-300 mb-5">
                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>info@hotelsilverstar.com</span>
              </div>
              <a
                href="#rooms"
                data-cursor="Book"
                className="inline-flex items-center justify-center bg-[#e60023] hover:bg-[#c9001f] text-white px-7 py-3 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-md hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                BOOK NOW
              </a>
            </div>

          </div>
        </Reveal>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-[12px]">
            &copy; 2025 Hotel Silver Star. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 bg-white/10 hover:bg-[#e60023] text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
