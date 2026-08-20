import Image from "next/image";
import { Play, Calendar, Users, ChevronDown, BedDouble, Zap, Wifi, MapPin, Check } from "lucide-react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5]">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[980px] lg:h-[1060px] xl:h-[1050px] flex flex-col justify-between bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Hotel Silver Star Entrance"
            fill
            className="object-cover object-[center_28%]"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 flex flex-col justify-center flex-1 pt-28 pb-24 lg:pb-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[5.8rem] xl:text-[6.5rem] font-normal text-white leading-[1.04] tracking-tight mb-6 drop-shadow-md">
              Your <br />
              Comfort, <br />
              Our <span className="text-[#e60023]">Promise.</span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-md">
              A cozy stay with warm hospitality at the heart of the city.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <button className="bg-[#e60023] hover:bg-[#c9001f] text-white px-7 py-3.5 rounded-md font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-red-600/30">
                DISCOVER ROOMS
              </button>
              <button className="flex items-center gap-3 text-white hover:text-[#e60023] transition-colors duration-200 uppercase tracking-wider font-semibold text-xs group">
                <div className="w-10 h-10 rounded-full border border-white/60 group-hover:border-[#e60023] flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Amenities Section (Light Background) */}
      <section className="relative w-full bg-[#faf8f5] pb-24">
        {/* Booking Form Widget (Overlapping hero) */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 relative -mt-12 z-20">
          <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/80 p-6 sm:p-7 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0">
            {/* Check In */}
            <div className="flex-1 lg:pr-8 lg:border-r border-gray-200/70 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                CHECK IN
              </span>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[15px] font-bold text-gray-900">24 May 2025</span>
                <Calendar className="w-4.5 h-4.5 text-gray-400" />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex-1 lg:px-8 lg:border-r border-gray-200/70 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                CHECK OUT
              </span>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[15px] font-bold text-gray-900">25 May 2025</span>
                <Calendar className="w-4.5 h-4.5 text-gray-400" />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 lg:px-8 lg:border-r border-gray-200/70 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                GUESTS
              </span>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[15px] font-bold text-gray-900">2 Guests</span>
                <Users className="w-4.5 h-4.5 text-gray-400" />
              </div>
            </div>

            {/* Room Type */}
            <div className="flex-1 lg:px-8 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                ROOM TYPE
              </span>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[15px] font-bold text-gray-900">Any</span>
                <ChevronDown className="w-4.5 h-4.5 text-gray-400" />
              </div>
            </div>

            {/* Submit */}
            <div className="lg:pl-8 flex items-center">
              <button className="bg-[#e60023] hover:bg-[#c9001f] text-white px-10 py-4 rounded-xl font-bold text-[13px] tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-red-600/30 whitespace-nowrap w-full lg:w-auto">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </div>

        {/* Amenities 4-Column Grid with Vertical Dividers */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {/* Comfortable Rooms */}
            <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80">
              <div className="mb-4">
                <BedDouble className="w-10 h-10 text-[#e60023]" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-[17px] sm:text-[18px] text-gray-900 mb-1.5">Comfortable Rooms</h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                AC / Non AC rooms<br />for a pleasant stay.
              </p>
            </div>

            {/* Power Backup */}
            <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80">
              <div className="mb-4">
                <Zap className="w-10 h-10 text-[#e60023]" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-[17px] sm:text-[18px] text-gray-900 mb-1.5">Power Backup</h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                24x7 power backup<br />for uninterrupted comfort.
              </p>
            </div>

            {/* Free Wi-Fi */}
            <div className="flex flex-col items-center px-4 py-3 lg:border-r border-gray-200/80">
              <div className="mb-4">
                <Wifi className="w-10 h-10 text-[#e60023]" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-[17px] sm:text-[18px] text-gray-900 mb-1.5">Free Wi-Fi</h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                High speed internet<br />throughout the property.
              </p>
            </div>

            {/* Prime Location */}
            <div className="flex flex-col items-center px-4 py-3">
              <div className="mb-4">
                <MapPin className="w-10 h-10 text-[#e60023]" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-[17px] sm:text-[18px] text-gray-900 mb-1.5">Prime Location</h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[240px]">
                Easy access to the city&apos;s<br />top attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Pure White Background) */}
      <section id="about" className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
              {/* Welcome Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#e60023]" />
                <span className="text-[13px] font-bold tracking-[0.2em] text-gray-700 uppercase">
                  WELCOME TO
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-gray-900 leading-[1.12] mb-6">
                Hotel Silver Star
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-lg">
                Experience the perfect blend of comfort, convenience and warm hospitality.
                Whether you&apos;re here for business or leisure, we ensure a stay that feels like home.
              </p>

              {/* Key Highlights / Checkmarks */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3.5">
                  <Check className="w-5 h-5 text-[#e60023] shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] sm:text-[16px] font-semibold text-gray-800">
                    Clean &amp; Comfortable Rooms
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Check className="w-5 h-5 text-[#e60023] shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] sm:text-[16px] font-semibold text-gray-800">
                    Friendly &amp; Dedicated Staff
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Check className="w-5 h-5 text-[#e60023] shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] sm:text-[16px] font-semibold text-gray-800">
                    Best Value for Your Stay
                  </span>
                </div>
              </div>

              {/* Signature */}
              <div className="mb-8">
                <span className="font-signature text-4xl sm:text-5xl text-gray-700 block select-none">
                  Silver Star
                </span>
              </div>

              {/* CTA Button */}
              <button className="bg-[#e60023] hover:bg-[#c9001f] text-white px-8 py-3.5 rounded-md font-bold text-xs tracking-[0.14em] uppercase transition-all duration-200 shadow-md hover:shadow-red-600/30">
                ABOUT US
              </button>
            </div>

            {/* Right Image with Decorative Dot Matrix */}
            <div className="lg:col-span-6 xl:col-span-7 relative">
              {/* Decorative Dot Matrix SVG behind bottom-left of image */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 z-0 pointer-events-none">
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
                            ? "fill-[#e60023]/80"
                            : "fill-gray-300/80"
                        }
                      />
                    ))
                  )}
                </svg>
              </div>

              {/* Image Card */}
              <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                <Image
                  src="/about.png"
                  alt="Hotel Silver Star Reception"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

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
