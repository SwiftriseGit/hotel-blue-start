"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Deluxe Bedroom",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Reception & Lounge",
    src: "/about.png",
  },
  {
    id: 3,
    title: "Luxury Interior",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Hotel Entrance",
    src: "/image.png",
  },
  {
    id: 5,
    title: "Executive Suite",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Cozy Room",
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = galleryItems.length - 4 >= 0 ? galleryItems.length - 4 : 0;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative w-full bg-[#181818] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Reveal type="left" delay={50}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1 h-3.5 bg-[#e60023] rounded-full inline-block" />
                <span className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                  GALLERY
                </span>
              </div>
            </Reveal>

            <Reveal type="left" delay={150}>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,2.75rem)] font-normal text-white leading-tight mb-6 sm:mb-8">
                A Glimpse of <br />
                Our Hospitality
              </h2>
            </Reveal>

            <Reveal type="left" delay={250}>
              <button
                data-cursor="View"
                className="border border-white/40 hover:border-white text-white px-7 py-3 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                EXPLORE GALLERY
              </button>
            </Reveal>
          </div>

          {/* Right Carousel Slider */}
          <div className="lg:col-span-8 relative w-full">
            <div className="flex items-center gap-4">
              {/* Prev Button for Desktop / Tablet */}
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 min-w-[44px] min-h-[44px]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Images Row */}
              <div
                data-cursor="Drag"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full group/gallery"
              >
                {galleryItems.slice(startIndex, startIndex + 4).map((item, idx) => (
                  <Reveal key={item.id} type="up" delay={150 + idx * 80} className="w-full">
                    <div
                      className="group/card relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-800 shadow-lg border border-white/10 transition-all duration-500 hover:scale-105 group-hover/gallery:opacity-60 hover:!opacity-100 cursor-pointer"
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Subtle hover gradient and title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                        <span className="text-white text-[11px] sm:text-xs font-semibold tracking-wide">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Next Button for Desktop / Tablet */}
              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 min-w-[44px] min-h-[44px]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Touch Controls */}
            <div className="flex sm:hidden items-center justify-center gap-5 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="w-11 h-11 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform min-w-[44px] min-h-[44px]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="w-11 h-11 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform min-w-[44px] min-h-[44px]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
