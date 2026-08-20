"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section id="gallery" className="relative w-full bg-[#181818] text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Red Bar + Tag */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1 h-3.5 bg-[#e60023] rounded-full inline-block" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                GALLERY
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white leading-tight mb-8">
              A Glimpse of <br />
              Our Hospitality
            </h2>

            {/* Explore Gallery Outline Button */}
            <button className="border border-white/40 hover:border-white text-white px-7 py-3 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-200 hover:bg-white/10">
              EXPLORE GALLERY
            </button>
          </div>

          {/* Right Carousel Slider */}
          <div className="lg:col-span-8 relative">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-xl hover:scale-105 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Images Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
                {galleryItems.slice(startIndex, startIndex + 4).map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-800 shadow-lg border border-white/10"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Subtle hover gradient and title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold tracking-wide">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-xl hover:scale-105 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Controls */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md"
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
