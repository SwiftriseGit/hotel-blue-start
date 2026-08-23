"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
        {/* Logo Image */}
        <div className="w-44 h-auto flex items-center justify-center mb-5 animate-pulse">
          <Image
            src="/logo.png"
            alt="Hotel Silver Star"
            width={180}
            height={60}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Expanding Gold Line */}
        <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-[#bfa76a] transition-all duration-700 ease-out ${
              loaded ? "w-full" : "w-1/3"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
