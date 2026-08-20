"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const clickable = target?.closest("a, button, [role='button'], input, [data-cursor]");
      
      if (clickable) {
        setHovered(true);
        const customText = clickable.getAttribute("data-cursor");
        setCursorText(customText || "");
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 transition-all duration-200 ease-out flex items-center justify-center ${
          hovered
            ? cursorText
              ? "w-16 h-16 bg-[#e60023] border-transparent text-white shadow-lg scale-100"
              : "w-10 h-10 bg-white/20 border-white/80 scale-100 backdrop-blur-[1px]"
            : "w-7 h-7 bg-transparent border-white/40 scale-75"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-wider uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e60023] transition-opacity duration-150 ${
          cursorText ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
