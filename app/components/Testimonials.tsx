"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Business Traveler",
    quote: "Clean rooms, friendly staff and great location. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Family Traveler",
    quote: "Great experience! The room was spacious and comfortable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Solo Traveler",
    quote: "Value for money and excellent hospitality. Will visit again!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Couple Traveler",
    quote: "The ambiance was wonderful and staff went above and beyond for our stay.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Business Traveler",
    quote: "High speed Wi-Fi, super quiet rooms, and central location made my work trip effortless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    id: 6,
    name: "Ananya Roy",
    role: "Vacation Traveler",
    quote: "Exceptional service! The reception and housekeeping were always polite and attentive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Clamp index if resized
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

  // Auto-Slide every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <section id="reviews" className="relative w-full bg-[#faf8f5] pt-10 sm:pt-12 pb-14 sm:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <Reveal type="up" delay={50}>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-5 h-[2px] bg-[#bfa76a]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-gray-700 uppercase">
                GUESTS LOVE US
              </span>
            </div>
          </Reveal>
          <Reveal type="up" delay={150}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-normal text-gray-900 leading-tight">
              What Our Guests Say
            </h2>
          </Reveal>
        </div>

        {/* Carousel Outer Container with Left/Right Arrow Navigation */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white hover:bg-neutral-50 text-gray-800 rounded-full items-center justify-center shadow-lg border border-gray-100 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Sliding Track Viewport */}
          <div className="w-full overflow-hidden py-1.5">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2.5 sm:px-3"
                >
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_25px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-between h-full group hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
                    <div>
                      {/* 5 Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#bfa76a] text-[#bfa76a] transition-transform duration-300 group-hover:scale-110"
                            style={{ transitionDelay: `${i * 40}ms` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 text-[13px] sm:text-[14px] leading-relaxed mb-4 font-normal">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* User Avatar & Info */}
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-100 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-gray-900 leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white hover:bg-neutral-50 text-gray-800 rounded-full items-center justify-center shadow-lg border border-gray-100 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex flex-col items-center gap-3 mt-5 sm:mt-6">
          {/* Mobile Arrows */}
          <div className="flex sm:hidden items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200 active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200 active:scale-95 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="h-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer p-0.5 flex items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === index
                      ? "w-6 bg-[#bfa76a] shadow-sm shadow-[#bfa76a]/30"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
