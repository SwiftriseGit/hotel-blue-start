"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
          ? "bg-black/95 backdrop-blur-md py-3 sm:py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6"
        }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">

        {/* Prominent Big Logo */}
        <Link
          href="/"
          className={`block transition-all duration-500 origin-left ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
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
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[14px] xl:text-[16px] font-semibold text-white/95 hover:text-[#bfa76a] tracking-wider transition-all duration-300 nav-link-hover ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              style={{
                transitionDelay: `${150 + idx * 80}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
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

      {/* Mobile Drawer Overlay & Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[70px] sm:top-[85px] z-40 lg:hidden bg-black/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-start overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[18px] font-semibold text-white/90 hover:text-[#bfa76a] transition-colors py-4 border-b border-white/5 flex items-center justify-between min-h-[48px]"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
