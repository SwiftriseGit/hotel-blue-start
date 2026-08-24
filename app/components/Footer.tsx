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

  return (
    <footer className="relative w-full bg-[#121214] text-white pt-24 sm:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-white/5 mt-4 sm:mt-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main Footer Content Grid with Viewport Reveal */}
        <Reveal type="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-14">
            
            {/* Col 1: Logo & About & Socials (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-start mt-2 sm:mt-0">
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

              <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-sm mb-6">
                Comfortable stays, warm hospitality, and unforgettable experiences tailored for your perfect stay.
              </p>

              {/* Official Social Media Icons - Commented out as requested
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
              */}
            </div>

            {/* Col 2: Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2 flex flex-col items-start sm:pl-2">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase mb-4 sm:mb-5 block">
                QUICK LINKS
              </span>
              <ul className="flex flex-col gap-2.5 sm:gap-3 text-gray-400 text-[14px]">
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

            {/* Col 3: Contact Details & Amenities (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-start">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase mb-4 sm:mb-5 block">
                CONTACT US
              </span>
              <div className="flex flex-col gap-3.5 text-gray-400 text-[14px]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-[#bfa76a] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <span>Plot no A38, Ruchika market, Baramunda, 751003</span>
                    <div className="flex flex-col mt-2 gap-0.5">
                      <span className="text-gray-300 text-[11px] font-bold uppercase tracking-wider">Our Branches:</span>
                      <span className="text-[#bfa76a] text-[13px] font-bold">Jaydev Vihar - Silver Suit</span>
                      <span className="text-[#bfa76a] text-[13px] font-bold">Tamando - Silver Crown</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4.5 h-4.5 text-[#bfa76a] shrink-0" />
                  <a href="tel:+916370157311" className="hover:text-white transition-colors">
                    +91 6370157311
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4.5 h-4.5 text-[#bfa76a] shrink-0" />
                  <a href="mailto:hotelsilverstar86@gmail.com" className="hover:text-white transition-colors">
                    hotelsilverstar86@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Exclusive Website Offer & QR Code (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-start bg-white/[0.04] border border-white/10 p-5 rounded-2xl shadow-xl w-full">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#bfa76a] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase">
                  SPECIAL PROMOTION
                </span>
              </div>
              
              <h4 className="font-serif text-lg font-bold text-white mb-0.5">
                Up to 25% OFF
              </h4>
              <p className="text-xs text-gray-300 mb-4">
                On booking through our website
              </p>

              {/* Flex Container for QR and Conditions on mobile */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 w-full">
                {/* QR Code */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white p-2 rounded-xl shadow-md sm:mb-3.5 border border-amber-200/40">
                  <Image
                    src="/qrv3.png"
                    alt="Scan QR Code to Book"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Conditions Apply Details */}
                <div className="sm:border-t border-white/10 sm:pt-2.5 w-full flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-amber-200/90 uppercase tracking-wider block mb-1">
                    Conditions Apply:
                  </span>
                  <ul className="text-[10px] sm:text-[11px] text-gray-400 space-y-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#bfa76a] font-bold">•</span>
                      <span>Min 7 days advance</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#bfa76a] font-bold">•</span>
                      <span>Long stay (7 nights)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#bfa76a] font-bold">•</span>
                      <span>Monthly stay discount</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 text-xs text-gray-500 text-left">
          <p>© {new Date().getFullYear()} Built by <a href="https://swiftrise.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#bfa76a] transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-[#bfa76a] font-medium">Swiftrise Solution Pvt Ltd</a>.</p>
        </div>

      </div>
    </footer>
  );
}
