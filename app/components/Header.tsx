"use client";

import { useState, useEffect } from "react";
import { Star, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ROOMS", href: "#rooms" },
  { label: "AMENITIES", href: "#amenities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "OFFERS", href: "#offers" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <Star className="w-10 h-10 fill-[#e60023] text-[#e60023] shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-bold text-white tracking-wider">
              HOTEL
            </span>
            <span className="text-[19px] font-bold text-white tracking-wide">
              SILVER STAR
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Bigger fonts and clear visibility) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] xl:text-[16px] font-semibold text-white/95 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden lg:block">
          <button className="bg-[#e60023] hover:bg-[#c9001f] text-white px-8 py-3.5 rounded-lg font-bold text-[14px] uppercase flex items-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-red-600/30">
            BOOK NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md px-8 py-6 border-t border-white/10 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-semibold text-white/90 hover:text-[#e60023] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="mt-5 w-full flex items-center justify-center gap-2 bg-[#e60023] text-white px-6 py-3.5 rounded-lg font-bold text-[14px] uppercase">
            BOOK NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
