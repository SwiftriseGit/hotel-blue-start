"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Deluxe AC Rooms",
    description: "Stay cool and comfortable in our well-appointed, air-conditioned luxury rooms with premium bedding.",
    price: "₹1,499",
    image: "/image copy.png",
    features: ["Air Conditioning", "King Size Bed", "High-speed Wi-Fi", "Attached Bathroom"],
  },
  {
    id: 2,
    title: "Standard Non-AC Rooms",
    description: "Affordable, clean, and comfortable rooms for a peaceful and relaxing stay.",
    price: "₹999",
    image: "/image copy 2.png",
    features: ["Ceiling Fan & Ventilation", "Cozy Double Bed", "Free Wi-Fi", "24/7 Room Service"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="relative w-full bg-[#faf8f5] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <Reveal type="up" delay={50}>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-5 h-[2px] bg-[#bfa76a]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#bfa76a] uppercase">
                OUR ROOMS
              </span>
              <span className="w-5 h-[2px] bg-[#bfa76a]" />
            </div>
          </Reveal>
          <Reveal type="up" delay={150}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-bold text-gray-900 leading-tight mb-3">
              Choose Your Comfort
            </h2>
          </Reveal>
          <Reveal type="up" delay={200}>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              Experience warmth and tranquility in our thoughtfully crafted accommodations.
            </p>
          </Reveal>
        </div>

        {/* Rooms Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room, idx) => (
            <Reveal
              key={room.id}
              type="up"
              delay={150 + idx * 150}
              className="h-full flex"
            >
              <div className="w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(191,167,106,0.15)] border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 group">
                
                {/* Image Container with Zoom */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Removed absolute Price Tag Badge from image */}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[1.75rem] font-bold text-[#800020] mb-1">
                      {room.title}
                    </h3>

                    {/* Price in Bold */}
                    <div className="mb-4">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#800020]">{room.price}</span>
                      <span className="text-sm font-medium text-gray-500"> / night</span>
                    </div>

                    <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                      {room.description}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-2 gap-2.5 mb-2 pt-4 border-t border-gray-100">
                      {room.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-gray-900 font-bold">
                          <Check className="w-4 h-4 text-[#bfa76a] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
