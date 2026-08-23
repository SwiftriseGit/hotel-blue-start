"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
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

  const bookUrl =
    "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20would%20like%20to%20book%20a%20room.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-2.5 sm:py-3 shadow-2xl border-b border-white/10"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Prominent Big Logo */}
        <Link
          href="/"
          className={`block transition-all duration-500 origin-left ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } ${scrolled ? "scale-95" : "scale-100"}`}
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

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[14px] xl:text-[15px] font-semibold text-white/95 hover:text-[#bfa76a] tracking-wider transition-all duration-300 nav-link-hover ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{
                transitionDelay: `${150 + idx * 80}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Book Now Button -> WhatsApp */}
        <div
          className={`hidden lg:block transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#bfa76a] hover:bg-[#a69055] text-white px-7 xl:px-8 py-3 xl:py-3.5 rounded-xl font-bold text-xs xl:text-[13px] uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(191,167,106,0.4)] hover:shadow-[0_6px_25px_rgba(191,167,106,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Mobile Actions: Compact CTA + Hamburger */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#bfa76a] text-white px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-transform shadow-md shadow-[#bfa76a]/30"
          >
            <span>BOOK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[70px] sm:top-[85px] z-40 lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[18px] font-semibold text-white/90 hover:text-[#bfa76a] transition-colors py-3.5 border-b border-white/5 flex items-center justify-between min-h-[44px]"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </Link>
            ))}
          </nav>

          <div className="pt-8 pb-6">
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 bg-[#bfa76a] active:bg-[#a69055] text-white px-6 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider shadow-lg shadow-[#bfa76a]/30 min-h-[48px]"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
