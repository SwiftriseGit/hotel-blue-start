"use client";

import { useState, useEffect, useCallback } from "react";
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
  {
    id: 7,
    title: "Deluxe Suite",
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Modern Bathroom",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, galleryItems.length - visibleCount);

  // Clamp index on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Smooth auto-slide every 5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <section id="gallery" className="relative w-full bg-[#181818] text-white py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Reveal type="left" delay={50}>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-1 h-3.5 bg-[#bfa76a] rounded-full inline-block" />
                <span className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                  GALLERY
                </span>
              </div>
            </Reveal>

            <Reveal type="left" delay={150}>
              <h2 className="font-serif text-[clamp(1.9rem,4vw,2.5rem)] font-normal text-white leading-tight mb-4 sm:mb-5">
                A Glimpse of <br />
                Our Hospitality
              </h2>
            </Reveal>

            <Reveal type="left" delay={250}>
              <button
                className="border border-white/40 hover:border-white text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 min-h-[40px] cursor-pointer"
              >
                EXPLORE GALLERY
              </button>
            </Reveal>
          </div>

          {/* Right Sliding Carousel Track */}
          <div
            className="lg:col-span-8 relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev Button for Desktop / Tablet */}
            <button
              onClick={handlePrev}
              aria-label="Previous gallery image"
              className="hidden sm:flex absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Overflow Viewport */}
            <div className="w-full overflow-hidden py-1.5">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-1/2 sm:w-1/3 lg:w-1/4 shrink-0 px-2 sm:px-2.5"
                  >
                    <div
                      className="group/card relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-800 shadow-lg border border-white/10 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button for Desktop / Tablet */}
            <button
              onClick={handleNext}
              aria-label="Next gallery image"
              className="hidden sm:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white hover:bg-gray-100 text-gray-900 rounded-full items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile Touch Controls & Indicator */}
            <div className="flex sm:hidden items-center justify-center gap-5 mt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform min-w-[40px] min-h-[40px]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next gallery image"
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform min-w-[40px] min-h-[40px]"
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
