"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Quick branded reveal sequence (0.7s)
    const timer1 = setTimeout(() => {
      setLoaded(true);
    }, 700);

    const timer2 = setTimeout(() => {
      setRemoved(true);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#111111] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Star Icon */}
        <div className="w-12 h-12 flex items-center justify-center animate-pulse mb-3">
          <Star className="w-10 h-10 fill-[#e60023] text-[#e60023]" />
        </div>

        {/* Title */}
        <div className="text-center leading-tight mb-4">
          <span className="text-[11px] font-bold tracking-[0.24em] text-white/80 block">
            HOTEL
          </span>
          <span className="text-[16px] font-bold tracking-[0.18em] text-white block">
            SILVER STAR
          </span>
        </div>

        {/* Expanding Red Line */}
        <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-[#e60023] transition-all duration-700 ease-out ${
              loaded ? "w-full" : "w-1/3"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
