"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, BedDouble, Zap, Wifi, MapPin, Check } from "lucide-react";
import Header from "./components/Header";
import BookingBar from "./components/BookingBar";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader";

export default function Home() {
  const [heroMounted, setHeroMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setHeroMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#c5a047] selection:text-white overflow-x-hidden">
      {/* Branded Splash Loader (short ~0.7s) */}
      <PageLoader />

      {/* Top 2.5px Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Sticky Header */}
      <Header />

      {/* Hero Section with Parallax & Masked Text Reveals */}
      <section className="relative w-full min-h-[580px] sm:min-h-[750px] lg:h-[1060px] xl:h-[1050px] flex flex-col justify-between bg-black overflow-hidden">
        {/* Background Image with subtle Parallax */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(${heroMounted ? 1.0 : 1.03})`,
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Dedicated Mobile Portrait Background */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/mobile.png"
              alt="Hotel Silver Star Entrance"
              fill
              className="object-cover object-[center_50%]"
              priority
              sizes="100vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40 pointer-events-none" /> */}
          </div>

          {/* Desktop & Tablet Background (shifts left under 1200px) */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src="/image.png"
              alt="Hotel Silver Star Entrance"
              fill
              className="object-cover object-[center_28%] max-[1200px]:object-[22%_28%] max-[900px]:object-[15%_28%] transition-all duration-300"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-center flex-1 pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-2xl">
            {/* Masked Staggered Headline */}
            <h1 className="font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal text-white leading-[1.05] tracking-tight mb-5 sm:mb-6 drop-shadow-md">
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  Your
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  style={{ transitionDelay: "220ms" }}
                >
                  Comfort,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  style={{ transitionDelay: "340ms" }}
                >
                  Our{" "}
                  <span className="text-[#c5a047] inline-block font-medium">Promise.</span>
                </span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              className={`text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-md transition-all duration-700 ease-out ${heroMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: "500ms" }}
            >
              A cozy stay with warm hospitality at the heart of the city.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-700 ease-out ${heroMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: "650ms" }}
            >
              <a
                href="#rooms"
                className="inline-flex items-center justify-center group bg-[#c5a047] hover:bg-[#b08930] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(197,160,71,0.35)] hover:shadow-[#c5a047]/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                <span>DISCOVER ROOMS</span>
              </a>
              <button
                className="flex items-center gap-3 text-white hover:text-[#c5a047] transition-colors duration-200 uppercase tracking-wider font-semibold text-xs min-h-[44px] group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-white/60 group-hover:border-[#c5a047] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  WATCH VIDEO
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Amenities Section (Light Background) */}
      <section className="relative w-full bg-[#faf8f5] pb-20 sm:pb-24">
        {/* Interactive Booking Form Widget -> WhatsApp */}
        <BookingBar heroMounted={heroMounted} />

        {/* Amenities 4-Column Grid with Staggered Viewport Reveal */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 text-center">
            {/* Comfortable Rooms */}
            <Reveal type="up" delay={50} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <BedDouble className="w-9 h-9 sm:w-10 sm:h-10 text-[#c5a047]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Comfortable Rooms</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  AC / Non AC rooms<br />for a pleasant stay.
                </p>
              </div>
            </Reveal>

            {/* Power Backup */}
            <Reveal type="up" delay={150} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-9 h-9 sm:w-10 sm:h-10 text-[#c5a047]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Power Backup</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  24x7 power backup<br />for uninterrupted comfort.
                </p>
              </div>
            </Reveal>

            {/* Free Wi-Fi */}
            <Reveal type="up" delay={250} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Wifi className="w-9 h-9 sm:w-10 sm:h-10 text-[#c5a047]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Free Wi-Fi</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  High speed internet<br />throughout the property.
                </p>
              </div>
            </Reveal>

            {/* Prime Location */}
            <Reveal type="up" delay={350} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-9 h-9 sm:w-10 sm:h-10 text-[#c5a047]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Prime Location</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  Easy access to the city&apos;s<br />top attractions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section (Pure White Background) */}
      <section id="about" className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Content with Staggered Scroll Reveal */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
              {/* Welcome Badge */}
              <Reveal type="left" delay={50}>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-6 h-[2px] bg-[#c5a047]" />
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-gray-700 uppercase">
                    WELCOME TO
                  </span>
                </div>
              </Reveal>

              {/* Title */}
              <Reveal type="up" delay={120}>
                <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-gray-900 leading-[1.12] mb-5 sm:mb-6">
                  Hotel Silver Star
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal type="up" delay={200}>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  Experience the perfect blend of comfort, convenience and warm hospitality.
                  Whether you&apos;re here for business or leisure, we ensure a stay that feels like home.
                </p>
              </Reveal>

              {/* Key Highlights / Checkmarks */}
              <div className="flex flex-col gap-3.5 sm:gap-4 mb-6 sm:mb-8 w-full">
                <Reveal type="up" delay={280}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#c5a047] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Clean &amp; Comfortable Rooms
                    </span>
                  </div>
                </Reveal>
                <Reveal type="up" delay={340}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#c5a047] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Friendly &amp; Dedicated Staff
                    </span>
                  </div>
                </Reveal>
                <Reveal type="up" delay={400}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#c5a047] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Best Value for Your Stay
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Signature */}
              <Reveal type="up" delay={460}>
                <div className="mb-6 sm:mb-8">
                  <span className="font-signature text-3xl sm:text-5xl text-gray-700 block select-none">
                    Silver Star
                  </span>
                </div>
              </Reveal>

              {/* CTA Button -> WhatsApp */}
              <Reveal type="up" delay={520}>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20would%20like%20to%20know%20more%20about%20your%20hotel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#c5a047] hover:bg-[#b08930] text-white px-8 py-3.5 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(197,160,71,0.35)] hover:shadow-[#c5a047]/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                >
                  ABOUT US
                </a>
              </Reveal>
            </div>

            {/* Right Image with Mask Reveal & Subtle Hover Zoom */}
            <div className="lg:col-span-6 xl:col-span-7 relative w-full">
              {/* Decorative Dot Matrix SVG behind bottom-left of image */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 z-0 pointer-events-none">
                <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
                  {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 22 + 10}
                        cy={row * 22 + 10}
                        r="2.5"
                        className={
                          row >= 4 && col >= 3
                            ? "fill-[#c5a047]/80"
                            : "fill-gray-300/80"
                        }
                      />
                    ))
                  )}
                </svg>
              </div>

              {/* Image Card with Smooth Reveal & Hover Zoom */}
              <Reveal type="up" delay={200} className="relative z-10 w-full">
                <div
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] bg-neutral-100 cursor-pointer"
                >
                  <Image
                    src="/about.png"
                    alt="Hotel Silver Star Reception"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <Rooms />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials / Guest Reviews Section */}
      <Testimonials />

      {/* CTA Questions Banner (overlaps footer) */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
