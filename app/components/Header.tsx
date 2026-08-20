"use client";

import { useState, useEffect } from "react";
import { Star, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ROOMS", href: "#rooms" },
  { label: "AMENITIES", href: "#amenities" },
  { label: "GALLERY", href: "#gallery" },
  { label: "OFFERS", href: "#rooms" },
  {
    label: "CONTACT",
    href: "https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20have%20a%20query%20regarding%20my%20stay.",
    external: true,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
          ? "bg-black/80 backdrop-blur-md py-3 sm:py-3.5 shadow-lg"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Logo with responsive fluid sizing */}
        <a
          href="#"
          className={`flex items-center gap-2.5 sm:gap-3.5 group transition-all duration-500 origin-left ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } ${scrolled ? "scale-[0.92]" : "scale-100"}`}
        >
          <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#b30018] text-[#b30018] shrink-0 transition-transform duration-300 group-hover:rotate-12" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-[13px] font-bold text-white tracking-wider">
              HOTEL
            </span>
            <span className="text-[15px] sm:text-[18px] font-bold text-white tracking-wide">
              SILVER STAR
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-[14px] xl:text-[16px] font-semibold text-white/95 hover:text-white transition-all duration-300 nav-link-hover ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{
                transitionDelay: `${150 + idx * 80}ms`,
              }}
            >
              {link.label}
            </a>
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
            className="group bg-[#b30018] hover:bg-[#990012] text-white px-6 xl:px-8 py-3 xl:py-3.5 rounded-lg font-bold text-xs xl:text-[13px] uppercase flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_14px_rgba(179,0,24,0.35)] hover:shadow-red-800/40 hover:-translate-y-0.5 active:translate-y-0"
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
            className="bg-[#b30018] text-white px-3.5 py-2 rounded-md font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-transform shadow-md"
          >
            <span>BOOK</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[70px] z-40 lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="text-[17px] font-semibold text-white/90 hover:text-[#b30018] transition-colors py-3 border-b border-white/5 flex items-center justify-between min-h-[44px]"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-6">
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 bg-[#b30018] active:bg-[#990012] text-white px-6 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider shadow-lg shadow-red-900/40 min-h-[48px]"
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
