"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ROOMS", href: "/rooms" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-black/95 backdrop-blur-md py-3 sm:py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-6"
        }`}
      >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative flex items-center justify-between">
        
        {/* Left: Prominent Big Logo */}
        <Link
          href="/"
          className={`block shrink-0 z-10 transition-transform duration-300 origin-left ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Hotel Silver Star"
            width={260}
            height={85}
            className="h-14 sm:h-16 md:h-18 w-auto object-contain drop-shadow-xl"
            priority
          />
        </Link>

        {/* Center: Absolute Middle Navigation Links with Active Underline Indicator */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-11 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-[14px] xl:text-[15px] font-semibold tracking-wider py-1.5 transition-colors duration-200 ${
                  isActive ? "text-[#bfa76a]" : "text-white/90 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {/* Active & Hover Gold Underline */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#bfa76a] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop Book / WhatsApp CTA & Mobile Controls */}
        <div className="flex items-center gap-3 sm:gap-4 z-10">
          {/* Desktop WhatsApp Book Now Button */}
          <a
            href="https://wa.me/916370157311?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Silver%20Star."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#bfa76a] hover:bg-[#a69055] text-white px-4.5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(191,167,106,0.35)] hover:shadow-[#bfa76a]/50 hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="w-4.5 h-4.5 text-white" />
            <span>BOOK NOW</span>
          </a>

          {/* Mobile WhatsApp Quick Action Button */}
          <a
            href="https://wa.me/916370157311?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Silver%20Star."
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 active:scale-95 transition-all"
            aria-label="Book on WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-7 h-7 text-[#bfa76a]" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

      </div>

      </header>

      {/* Mobile Drawer Overlay & Menu (Outside header to prevent containing block issues) */}
      <div 
        className={`fixed inset-0 top-[70px] sm:top-[85px] z-[100] lg:hidden bg-black/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-start overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[18px] font-semibold py-4 border-b border-white/5 flex items-center justify-between min-h-[48px] transition-all duration-300 ${
                  isActive ? "text-[#bfa76a]" : "text-white/90 hover:text-[#bfa76a]"
                } ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${idx * 40 + 100}ms` : "0ms" }}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#bfa76a]" />}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Drawer WhatsApp CTA Button */}
        <div className="pt-6 mt-4 border-t border-white/10">
          <a
            href="https://wa.me/916370157311?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Silver%20Star."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2.5 bg-[#bfa76a] hover:bg-[#a69055] text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#bfa76a]/30 active:scale-95"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
