"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Wifi, Zap, BedDouble, ShieldCheck, Sparkles } from "lucide-react";
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
    description: "Immerse yourself in complete luxury. Features high-performance climate control, plush king-size bedding, attached designer bathroom, high-speed Wi-Fi, and 24/7 dedicated room assistance.",
    amenities: [
      "Individual Climate Control AC",
      "King Size Luxury Mattress",
      "Complimentary High-Speed Wi-Fi",
      "Hot & Cold Water 24/7",
      "24/7 Power Backup",
      "Daily Housekeeping",
      "Direct Dial Room Service",
      "Smart Flat Screen TV",
    ],
  },
  {
    id: 2,
    title: "Premium Comfort AC Room",
    type: "Air Conditioned",
    price: "₹1,299",
    image: "/image copy 3.png",
    description: "A cozy and elegant room designed for corporate travelers and vacationers seeking pure relaxation and modern comfort.",
    amenities: [
      "Modern Split AC",
      "Queen Size Comfort Bed",
      "Free High-Speed Wi-Fi",
      "Attached Western Bathroom",
      "24/7 Power Backup",
      "Clean Linens & Toiletries",
    ],
  },
  {
    id: 3,
    title: "Standard Non-AC Room",
    type: "Non Air Conditioned",
    price: "₹999",
    image: "/image copy 2.png",
    description: "Budget-friendly, ultra-clean, and well-ventilated room providing all essentials for a peaceful night's rest.",
    amenities: [
      "High-Speed Ceiling Fan",
      "Comfortable Double Bed",
      "Attached Bathroom with Shower",
      "Free Wi-Fi Access",
      "24/7 Power Backup",
      "Daily Room Cleaning",
    ],
  },
  {
    id: 4,
    title: "Economy Non-AC Room",
    type: "Non Air Conditioned",
    price: "₹799",
    image: "/image copy 4.png",
    description: "Ideal for solo travelers and short transit stays. Clean, secure, and affordable accommodation.",
    amenities: [
      "Cozy Bedding",
      "Fresh Linens & Towels",
      "Free Wi-Fi",
      "24/7 Water Supply",
      "24-Hour Front Desk Support",
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

      {/* Room Listing Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {allRooms.map((room, idx) => (
            <Reveal key={room.id} type="up" delay={idx * 100}>
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#bfa76a]/15 transition-all duration-500 hover:-translate-y-1 group">
                
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
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

                {/* Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {room.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Amenities Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-gray-100">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                          <Check className="w-4 h-4 text-[#bfa76a] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Button */}
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello Hotel Silver Star, I want to book the ${room.title} (${room.price}/night).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#bfa76a] hover:bg-[#a69055] text-white py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#bfa76a]/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>RESERVE ON WHATSAPP</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policies Bar */}
      <section className="w-full bg-white border-y border-gray-100 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <Sparkles className="w-6 h-6 text-[#bfa76a] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Check-in / Out</h4>
                <p className="text-xs text-gray-600">Check-in: 12:00 PM<br />Check-out: 11:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <ShieldCheck className="w-6 h-6 text-[#bfa76a] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">ID Verification</h4>
                <p className="text-xs text-gray-600">Valid government photo ID required at check-in.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <Zap className="w-6 h-6 text-[#bfa76a] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Power Backup</h4>
                <p className="text-xs text-gray-600">Full 24/7 electricity backup guarantee.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
              <BedDouble className="w-6 h-6 text-[#bfa76a] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Room Service</h4>
                <p className="text-xs text-gray-600">Hot meals and beverages on call.</p>
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
