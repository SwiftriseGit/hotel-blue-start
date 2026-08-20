"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

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
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-rotate reviews smoothly every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const totalDots = testimonials.length - 2;

  return (
    <section id="reviews" className="relative w-full bg-[#faf8f5] pt-24 pb-28 sm:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[2px] bg-[#e60023]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-gray-700 uppercase">
              GUESTS LOVE US
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-gray-900 leading-tight">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(startIndex, startIndex + 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#e60023] text-[#e60023]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed mb-8 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-100"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-gray-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[12px] text-gray-500 font-normal mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === index
                  ? "w-7 bg-[#e60023]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
