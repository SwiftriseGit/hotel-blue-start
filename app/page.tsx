"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, BedDouble, Zap, Wifi, MapPin, Check } from "lucide-react";
import Header from "./components/Header";
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
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#bfa76a] selection:text-white overflow-x-hidden">
      {/* Branded Splash Loader */}
      <PageLoader />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Fixed Sticky Header */}
      <Header />

      {/* Hero Section with Parallax & Masked Text Reveals */}
      <section className="relative w-full min-h-[580px] sm:min-h-[700px] lg:h-[900px] xl:h-[920px] flex flex-col justify-center bg-black overflow-hidden">
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
              src="/about.png"
              alt="Hotel Silver Star Reception & Lounge"
              fill
              className="object-cover object-[center_35%]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60 pointer-events-none" />
          </div>

          {/* Desktop & Tablet Background */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src="/about.png"
              alt="Hotel Silver Star Reception & Lounge"
              fill
              className="object-cover object-[center_35%] transition-all duration-300"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 pointer-events-none" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-center pt-28 sm:pt-36 pb-20 sm:pb-24">
          <div className="max-w-2xl">
            {/* Masked Staggered Headline */}
            <h1 className="font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-5 sm:mb-6 drop-shadow-lg">
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  Your
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "220ms" }}
                >
                  Comfort,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    heroMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: "340ms" }}
                >
                  Our{" "}
                  <span className="text-[#bfa76a] inline-block font-semibold">Promise.</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-gray-200 text-sm sm:text-base md:text-lg max-w-lg mb-8 sm:mb-10 font-normal leading-relaxed transition-all duration-800 ease-out ${
                heroMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "480ms" }}
            >
              Experience unmatched hospitality, serene rooms, and delightful stays in the heart of Rourkela.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-row items-center gap-4 sm:gap-6 transition-all duration-800 ease-out ${
                heroMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "580ms" }}
            >
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center group bg-[#bfa76a] hover:bg-[#a69055] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(191,167,106,0.4)] hover:shadow-[#bfa76a]/60 hover:-translate-y-0.5 active:translate-y-0 min-h-[46px]"
              >
                <span>DISCOVER ROOMS</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-3 text-white hover:text-[#bfa76a] transition-colors duration-200 uppercase tracking-wider font-semibold text-xs min-h-[44px] group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-white/60 group-hover:border-[#bfa76a] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ABOUT HOTEL
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights / Features Bar */}
      <section className="w-full bg-white border-b border-gray-100 py-8 sm:py-10 relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            {/* Feature 1 */}
            <Reveal type="up" delay={50} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <BedDouble className="w-9 h-9 sm:w-10 sm:h-10 text-[#bfa76a]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Comfortable Rooms</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  AC and Non-AC luxury rooms designed for pure rest and relaxation.
                </p>
              </div>
            </Reveal>

            {/* Feature 2 */}
            <Reveal type="up" delay={150} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Zap className="w-9 h-9 sm:w-10 sm:h-10 text-[#bfa76a]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Power Backup</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  24/7 continuous electricity to keep your stay uninterrupted.
                </p>
              </div>
            </Reveal>

            {/* Feature 3 */}
            <Reveal type="up" delay={250} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Wifi className="w-9 h-9 sm:w-10 sm:h-10 text-[#bfa76a]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Free High-Speed Wi-Fi</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  High-speed internet access throughout the entire property.
                </p>
              </div>
            </Reveal>

            {/* Feature 4 */}
            <Reveal type="up" delay={350} className="h-full">
              <div className="flex flex-col items-center px-4 py-3 group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-9 h-9 sm:w-10 sm:h-10 text-[#bfa76a]" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-900 mb-1.5">Prime Location</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                  Near key transport hubs, markets, and city attractions.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full bg-[#faf8f5] py-14 sm:py-18 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Welcome Badge */}
              <Reveal type="left" delay={50}>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-6 h-[2px] bg-[#bfa76a]" />
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase">
                    WELCOME TO
                  </span>
                </div>
              </Reveal>

              {/* Heading */}
              <Reveal type="left" delay={120}>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-gray-900 leading-[1.12] mb-4 sm:mb-6">
                  Hotel Silver Star
                </h2>
              </Reveal>

              {/* Description Paragraph */}
              <Reveal type="left" delay={200}>
                <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-6 sm:mb-8 font-normal">
                  Located in the vibrant center of the city, Hotel Silver Star offers a blend of modern amenities, cozy rooms, and heartfelt hospitality. Whether you are traveling for business, family vacations, or solo exploration, our dedicated team ensures your stay is seamless, relaxing, and memorable.
                </p>
              </Reveal>

              {/* 3 Checkmark Bullet Points */}
              <div className="flex flex-col gap-3.5 sm:gap-4 mb-6 sm:mb-8 w-full">
                <Reveal type="up" delay={280}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#bfa76a] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Clean, Sanitized &amp; Comfortable Rooms
                    </span>
                  </div>
                </Reveal>
                <Reveal type="up" delay={340}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#bfa76a] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Friendly, Courteous &amp; 24/7 Dedicated Staff
                    </span>
                  </div>
                </Reveal>
                <Reveal type="up" delay={400}>
                  <div className="flex items-center gap-3.5 group">
                    <Check className="w-5 h-5 text-[#bfa76a] shrink-0 transition-transform duration-200 group-hover:scale-125" strokeWidth={2.5} />
                    <span className="text-[14px] sm:text-[16px] font-semibold text-gray-800">
                      Best Value &amp; Pocket-Friendly Rates in the City
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Read More Link / Button */}
              <Reveal type="up" delay={480}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#bfa76a] hover:bg-[#a69055] text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(191,167,106,0.35)] hover:shadow-[#bfa76a]/50 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                >
                  LEARN MORE ABOUT US
                </Link>
              </Reveal>

            </div>

            {/* Right Image Column with Decorative Gold Elements */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center pt-6 lg:pt-0">
              
              {/* Decorative Dot Matrix Background */}
              <div className="absolute -top-6 -left-6 z-0 pointer-events-none opacity-50">
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 22 + 10}
                        cy={row * 22 + 10}
                        r="2.5"
                        className={
                          row >= 4 && col >= 3
                            ? "fill-[#bfa76a]/80"
                            : "fill-gray-300/80"
                        }
                      />
                    ))
                  )}
                </svg>
              </div>

              {/* Image Card: Hotel Entrance Facade */}
              <Reveal type="up" delay={200} className="relative z-10 w-full">
                <div
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] bg-neutral-900 cursor-pointer"
                >
                  <Image
                    src="/hotel.png"
                    alt="Hotel Silver Star Grand Entrance"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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

      {/* Floating CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
