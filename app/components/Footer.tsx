"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
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
    <footer className="relative w-full bg-[#121214] text-white pt-28 sm:pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main Footer Content Grid 4 Columns with Viewport Reveal */}
        <Reveal type="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
            
            {/* Col 1: Logo & About & Socials */}
            <div className="flex flex-col items-start">
              {/* Big Prominent Logo Image */}
              <Link href="/" className="block mb-4">
                <Image
                  src="/logo.png"
                  alt="Hotel Silver Star"
                  width={240}
                  height={80}
                  className="h-18 sm:h-22 w-auto object-contain brightness-110 drop-shadow-md"
                />
              </Link>

              <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-xs mb-7">
                Comfortable stays, warm hospitality and unforgettable experiences in the heart of the city.
              </p>

              {/* Official Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#bfa76a] hover:border-[#bfa76a] hover:text-white hover:shadow-[0_8px_20px_rgba(191,167,106,0.4)] min-w-[44px] min-h-[44px]"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#bfa76a] hover:border-[#bfa76a] hover:text-white hover:shadow-[0_8px_20px_rgba(191,167,106,0.4)] min-w-[44px] min-h-[44px]"
                >
                  <FaInstagram className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col items-start sm:pl-4">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase mb-5 block">
                QUICK LINKS
              </span>
              <ul className="flex flex-col gap-3 text-gray-400 text-[14px] sm:text-[15px]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-200 footer-link-hover">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="hover:text-white transition-colors duration-200 footer-link-hover">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors duration-200 footer-link-hover">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200 footer-link-hover">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200 footer-link-hover">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Amenities */}
            <div className="flex flex-col items-start">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase mb-5 block">
                AMENITIES
              </span>
              <ul className="flex flex-col gap-3 text-gray-400 text-[14px] sm:text-[15px]">
                <li>Free High-Speed Wi-Fi</li>
                <li>24/7 Power Backup</li>
                <li>Daily Housekeeping</li>
                <li>24x7 Front Desk & Support</li>
                <li>Attached Modern Bathrooms</li>
              </ul>
            </div>

            {/* Col 4: Contact & Reserve */}
            <div className="flex flex-col items-start">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase mb-5 block">
                CONTACT US
              </span>
              <div className="flex flex-col gap-3.5 text-gray-400 text-[14px] sm:text-[15px] mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-[#bfa76a] shrink-0 mt-1" />
                  <span>Near City Center, Main Road, Rourkela, Odisha</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4.5 h-4.5 text-[#bfa76a] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4.5 h-4.5 text-[#bfa76a] shrink-0" />
                  <a href="mailto:info@hotelsilverstar.com" className="hover:text-white transition-colors">
                    info@hotelsilverstar.com
                  </a>
                </div>
              </div>

              {/* Reserve Button */}
              <a
                href={bookWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#bfa76a] hover:bg-[#a69055] text-white px-8 sm:px-9 py-3.5 rounded-xl font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase transition-all duration-300 shadow-lg shadow-[#bfa76a]/30 hover:shadow-[#bfa76a]/50 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                BOOK NOW
              </a>
            </div>

          </div>
        </Reveal>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Hotel Silver Star. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors">Terms of Service</span>
            {/* Animated Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Back to Top"
            >
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
