"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Star, Shield, Heart, Award, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import ScrollProgress from "../components/ScrollProgress";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#bfa76a] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Page Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[420px] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/about.png"
          alt="About Hotel Silver Star"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#bfa76a] uppercase">
              ABOUT OUR HOTEL
            </span>
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Story &amp; Hospitality
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#bfa76a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#bfa76a]">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Collages */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
              <Image
                src="/about.png"
                alt="Reception & Lounge"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg mt-8">
              <Image
                src="/hotel.png"
                alt="Hotel Entrance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-0.5 bg-[#bfa76a]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#bfa76a] uppercase">
                EXPERIENCE THE DIFFERENCE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              A Warm Welcome to <br />
              <span className="text-[#bfa76a]">Hotel Silver Star</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Hotel Silver Star was established with a singular mission: to provide comfortable, spotless, and budget-friendly accommodations for every traveler stepping into our city.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Whether you are here for an important business conference, a family wedding, or a serene weekend getaway, our hospitable staff is dedicated to ensuring you feel right at home with 24/7 service, modern climate control, and unmatched cleanliness.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#bfa76a] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">100% Safe &amp; Secure</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#bfa76a] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Heartfelt Hospitality</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#bfa76a] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Best Rated Value</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#bfa76a] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">24/7 Reception &amp; Help</span>
              </div>
            </div>

            <Link
              href="/rooms"
              className="inline-flex items-center justify-center bg-[#bfa76a] hover:bg-[#a69055] text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#bfa76a]/30"
            >
              EXPLORE OUR ROOMS
            </Link>
          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
