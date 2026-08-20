"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    title: "AC Rooms",
    description: "Stay cool and comfortable in our well-appointed AC rooms.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Non AC Rooms",
    description: "Affordable and comfortable rooms for a relaxing stay.",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="relative w-full bg-[#faf8f5] py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <Reveal type="up" delay={50}>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-5 h-[2px] bg-[#b30018]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-gray-700 uppercase">
                OUR ROOMS
              </span>
            </div>
          </Reveal>
          <Reveal type="up" delay={150}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-normal text-gray-900 leading-tight">
              Choose Your Comfort
            </h2>
          </Reveal>
        </div>

        {/* 2-Column Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {rooms.map((room, idx) => {
            const roomBookingUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
              `Hello Hotel Silver Star, I would like to book the ${room.title} (${room.price}/night).`
            )}`;

            return (
              <Reveal key={room.id} type="up" delay={150 + idx * 100} className="h-full">
                <a
                  href={roomBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100/90 flex flex-col transition-all duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 group cursor-pointer h-full block"
                >
                  {/* Room Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1.5 group-hover:text-[#b30018] transition-colors duration-200">
                        {room.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed mb-3 sm:mb-4">
                        {room.description}
                      </p>
                    </div>

                    {/* Price and CTA Round Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100/80">
                      <div className="text-[13px] sm:text-[14px] text-gray-500 font-normal">
                        From <span className="text-gray-900 font-bold text-base sm:text-lg">{room.price}</span> / night
                      </div>
                      <div className="w-10 h-10 bg-[#b30018] group-hover:bg-[#990012] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-red-800/40 shrink-0">
                        <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* View All Rooms Button */}
        <Reveal type="up" delay={300}>
          <div className="flex justify-center mt-6 sm:mt-8">
            <a
              href="https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20would%20like%20to%20know%20more%20about%20all%20available%20rooms."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#b30018] hover:bg-[#990012] text-white px-7 sm:px-9 py-3 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(179,0,24,0.35)] hover:shadow-red-800/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px] cursor-pointer"
            >
              VIEW ALL ROOMS
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
