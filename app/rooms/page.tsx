"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Clock, Zap, BedDouble } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import ScrollProgress from "../components/ScrollProgress";
import Reveal from "../components/Reveal";


const allRooms = [
  {
    id: 1,
    title: "Executive Deluxe AC Room",
    type: "Air Conditioned",
    price: "₹1,499",
    image: "/image copy.png",
    description: "Immerse yourself in complete luxury. Features high-performance climate control, plush king-size bedding, attached bathroom, and 24/7 dedicated room assistance.",
    amenities: [
      "Climate Control Split AC",
      "King Size Luxury Mattress",
      "Complimentary Fast Wi-Fi",
      "24/7 Hot & Cold Water",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "Direct Dial Room Service",
      "Attached Western Bathroom",
    ],
  },
  {
    id: 2,
    title: "Premium Comfort AC Room",
    type: "Air Conditioned",
    price: "₹1,299",
    image: "/image copy 3.png",
    description: "A cozy and elegant room designed for corporate travelers and vacationers seeking pure relaxation, spotless cleanliness, and modern comfort.",
    amenities: [
      "Modern Split AC",
      "Queen Size Comfort Bed",
      "Complimentary Fast Wi-Fi",
      "24/7 Hot & Cold Water",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "Clean Fresh Linens & Towels",
      "Attached Western Bathroom",
    ],
  },
  {
    id: 3,
    title: "Standard Non-AC Room",
    type: "Non Air Conditioned",
    price: "₹999",
    image: "/image copy 2.png",
    description: "Budget-friendly, ultra-clean, and well-ventilated room providing all essential amenities for a peaceful and recharging night's rest.",
    amenities: [
      "High-Speed Ceiling Fan",
      "Comfortable Double Bed",
      "Complimentary Fast Wi-Fi",
      "24/7 Running Water",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "Clean Fresh Linens & Towels",
      "Attached Bathroom with Shower",
    ],
  },
  {
    id: 4,
    title: "Economy Non-AC Room",
    type: "Non Air Conditioned",
    price: "₹799",
    image: "/image copy 4.png",
    description: "Ideal for solo travelers and short transit stays. Clean, secure, and pocket-friendly accommodation with hospitable service.",
    amenities: [
      "High-Speed Ceiling Fan",
      "Cozy Single / Double Bed",
      "Complimentary Fast Wi-Fi",
      "24/7 Running Water",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "24-Hour Front Desk Support",
      "Attached Private Bathroom",
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#bfa76a] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Page Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[420px] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/image copy.png"
          alt="Hotel Silver Star Rooms"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#bfa76a] uppercase">
              LUXURY ACCOMMODATIONS
            </span>
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Rooms &amp; Suites
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#bfa76a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#bfa76a]">Rooms</span>
          </div>
        </div>
      </section>

      {/* Room Listing Grid with Perfect Equal Heights */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {allRooms.map((room, idx) => (
            <Reveal key={room.id} type="up" delay={idx * 100} className="h-full flex">
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#bfa76a]/15 transition-all duration-500 hover:-translate-y-1 group">
                
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden shrink-0">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#bfa76a] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    {room.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-white px-4 py-1.5 rounded-full border border-white/20 text-sm font-extrabold shadow-lg">
                    <span className="text-[#bfa76a]">{room.price}</span>
                    <span className="text-xs font-normal text-gray-300"> / night</span>
                  </div>
                </div>

                {/* Details Body (Stretches equally and aligns bottom button) */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-2xl sm:text-[1.75rem] font-bold text-[#800020] mb-1">
                      {room.title}
                    </h2>
                    
                    {/* Price in Bold */}
                    <div className="mb-4">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#800020]">{room.price}</span>
                      <span className="text-sm font-medium text-gray-500"> / night</span>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Standardized 8-Item Amenities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 pt-4 border-t border-gray-100 flex-1">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-900 font-bold">
                          <Check className="w-4 h-4 text-[#bfa76a] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policies Bar */}
      <section className="w-full bg-white border-y border-gray-100 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <Clock className="w-6 h-6 text-[#bfa76a] shrink-0 sm:mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] sm:text-sm mb-0.5 sm:mb-1">Check-in / Out</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">Check-in: 12:00 PM<br className="hidden sm:block"/>Check-out: 11:00 AM</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <ShieldCheck className="w-6 h-6 text-[#bfa76a] shrink-0 sm:mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">ID Verification</h4>
                <p className="text-xs text-gray-600">Valid government photo ID required at check-in.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <Zap className="w-6 h-6 text-[#bfa76a] shrink-0 sm:mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] sm:text-sm mb-0.5 sm:mb-1">Power Backup</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">Full 24/7 electricity backup guarantee.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <BedDouble className="w-6 h-6 text-[#bfa76a] shrink-0 sm:mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-[11px] sm:text-sm mb-0.5 sm:mb-1">Room Service</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">Hot meals and beverages on call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
