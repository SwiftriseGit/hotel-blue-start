"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import ScrollProgress from "../components/ScrollProgress";
import Reveal from "../components/Reveal";

const galleryPhotos = [
  { id: 1, title: "Deluxe Bedroom", category: "Rooms", src: "/image copy.png" },
  { id: 2, title: "Reception & Lounge", category: "Lobby", src: "/about.png" },
  { id: 3, title: "Luxury Suite", category: "Rooms", src: "/image copy 2.png" },
  { id: 4, title: "Grand Entrance", category: "Lobby", src: "/image.png" },
  { id: 5, title: "Executive Room", category: "Rooms", src: "/image copy 3.png" },
  { id: 6, title: "Comfort Bedding", category: "Rooms", src: "/image copy 4.png" },
  { id: 7, title: "Premium Interior", category: "Living", src: "/image copy 5.png" },
  { id: 8, title: "Ambient Living", category: "Living", src: "/image copy 6.png" },
  { id: 9, title: "Lobby Ambience", category: "Lobby", src: "/image copy 7.png" },
  { id: 10, title: "Cozy Corner", category: "Living", src: "/image copy 8.png" },
  { id: 11, title: "Deluxe Comfort", category: "Rooms", src: "/image copy 9.png" },
  { id: 12, title: "Hotel Architecture", category: "Lobby", src: "/image copy 10.png" },
];

const categories = ["All", "Rooms", "Lobby", "Living"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#bfa76a] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Page Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[420px] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/image.png"
          alt="Hotel Silver Star Gallery"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#bfa76a] uppercase">
              VISUAL EXPERIENCE
            </span>
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#bfa76a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#bfa76a]">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid with Category Filters */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20">
        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#bfa76a] text-white shadow-lg shadow-[#bfa76a]/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <Reveal key={photo.id} type="up" delay={idx * 60}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 shadow-md hover:shadow-2xl border border-gray-200/80 transition-all duration-500 hover:-translate-y-1">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[#bfa76a] text-xs font-bold uppercase tracking-widest mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-serif text-lg font-bold">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
