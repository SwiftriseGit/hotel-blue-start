"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  type?: "up" | "down" | "left" | "right" | "fade" | "scale" | "mask";
  delay?: number; // in milliseconds
  duration?: number; // in seconds
  className?: string;
  threshold?: number;
}

export default function Reveal({
  children,
  type = "up",
  delay = 0,
  duration = 0.85,
  className = "",
  threshold = 0.05,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is requested, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyle = () => {
    switch (type) {
      case "up":
        return "translate3d(0, 30px, 0)";
      case "down":
        return "translate3d(0, -30px, 0)";
      case "left":
        return "translate3d(-30px, 0, 0)";
      case "right":
        return "translate3d(30px, 0, 0)";
      case "scale":
        return "scale(0.95)";
      case "mask":
      case "fade":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
