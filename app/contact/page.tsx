"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Hotel Silver Star,
• Name: ${name}
• Phone: ${phone}
• Query: ${query}`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] selection:bg-[#bfa76a] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Page Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[420px] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/about.png"
          alt="Contact Hotel Silver Star"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-4 pt-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#bfa76a] uppercase">
              GET IN TOUCH
            </span>
            <span className="w-4 h-0.5 bg-[#bfa76a]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Contact &amp; Location
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#bfa76a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#bfa76a]">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-0.5 bg-[#bfa76a]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#bfa76a] uppercase">
                  REACH OUT TO US
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We Are Always Here For You
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Have questions about room availability, banquet arrangements, or special requests? Drop us a message or call our 24/7 front desk.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#bfa76a]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">Hotel Address</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Near City Center, Main Road, Rourkela, Odisha - 769001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#bfa76a]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">Phone &amp; WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-gray-600">+91 98765 43210 / +91 80932 61999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#bfa76a]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">Email Support</h4>
                    <p className="text-xs sm:text-sm text-gray-600">info@hotelsilverstar.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/919876543210?text=Hello%20Hotel%20Silver%20Star%2C%20I%20have%20an%20urgent%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Direct Query Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the form below to connect instantly with our reservation desk.
            </p>

            <form onSubmit={handleSendMessage} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bfa76a] focus:ring-2 focus:ring-[#bfa76a]/20 outline-none text-sm text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bfa76a] focus:ring-2 focus:ring-[#bfa76a]/20 outline-none text-sm text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Your Inquiry / Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Tell us your check-in dates, number of guests, or special requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bfa76a] focus:ring-2 focus:ring-[#bfa76a]/20 outline-none text-sm text-gray-900 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#bfa76a] hover:bg-[#a69055] text-white py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#bfa76a]/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-2"
              >
                <span>SEND DIRECTLY VIA WHATSAPP</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
