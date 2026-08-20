"use client";

import { useState, useRef } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";

// Format YYYY-MM-DD to "24 May 2025"
function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingBar({ heroMounted }: { heroMounted: boolean }) {
  // Default check-in: today, check-out: tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDateValue = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateValue(today));
  const [checkOut, setCheckOut] = useState<string>(formatDateValue(tomorrow));
  const [guests, setGuests] = useState<string>("2 Guests");
  const [roomType, setRoomType] = useState<string>("Any");

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLSelectElement>(null);
  const roomTypeRef = useRef<HTMLSelectElement>(null);

  const handleCheckAvailability = () => {
    const formattedIn = formatDateDisplay(checkIn);
    const formattedOut = formatDateDisplay(checkOut);
    const text = `Hello Hotel Silver Star, I would like to check room availability:
• Check-In: ${formattedIn}
• Check-Out: ${formattedOut}
• Guests: ${guests}
• Room Type: ${roomType}`;

    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative -mt-10 sm:-mt-12 z-20 transition-all duration-800 ease-out ${
        heroMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: "700ms" }}
    >
      <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/80 p-5 sm:p-7 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-0 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        
        {/* Grid for Inputs on Mobile / Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-1 lg:items-center gap-4 lg:gap-0">
          
          {/* Check In Field */}
          <div
            onClick={() => {
              if (checkInRef.current) {
                if (typeof checkInRef.current.showPicker === "function") {
                  checkInRef.current.showPicker();
                } else {
                  checkInRef.current.focus();
                }
              }
            }}
            className="relative lg:flex-1 lg:pr-6 xl:pr-8 lg:border-r border-gray-200/70 flex flex-col justify-center group hover:bg-neutral-50/80 p-3 sm:p-2.5 rounded-xl transition-colors duration-200 cursor-pointer min-h-[44px]"
          >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1 group-hover:text-[#b30018] transition-colors">
              CHECK IN
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                {formatDateDisplay(checkIn)}
              </span>
              <Calendar className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#b30018] transition-colors shrink-0" />
            </div>
            {/* Native Date Input overlaid seamlessly */}
            <input
              ref={checkInRef}
              type="date"
              value={checkIn}
              min={formatDateValue(today)}
              style={{ colorScheme: "light" }}
              onChange={(e) => {
                const newCheckIn = e.target.value;
                setCheckIn(newCheckIn);
                // If checkOut is before or same as newCheckIn, adjust checkOut to day after
                if (checkOut <= newCheckIn) {
                  const [y, m, d] = newCheckIn.split("-").map(Number);
                  const nextDay = new Date(y, m - 1, d + 1);
                  setCheckOut(formatDateValue(nextDay));
                }
              }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full bg-white text-gray-900"
            />
          </div>

          {/* Check Out Field */}
          <div
            onClick={() => {
              if (checkOutRef.current) {
                if (typeof checkOutRef.current.showPicker === "function") {
                  checkOutRef.current.showPicker();
                } else {
                  checkOutRef.current.focus();
                }
              }
            }}
            className="relative lg:flex-1 lg:px-6 xl:px-8 lg:border-r border-gray-200/70 flex flex-col justify-center group hover:bg-neutral-50/80 p-3 sm:p-2.5 rounded-xl transition-colors duration-200 cursor-pointer min-h-[44px]"
          >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1 group-hover:text-[#b30018] transition-colors">
              CHECK OUT
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                {formatDateDisplay(checkOut)}
              </span>
              <Calendar className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#b30018] transition-colors shrink-0" />
            </div>
            {/* Native Date Input overlaid */}
            <input
              ref={checkOutRef}
              type="date"
              value={checkOut}
              min={checkIn || formatDateValue(tomorrow)}
              style={{ colorScheme: "light" }}
              onChange={(e) => setCheckOut(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full bg-white text-gray-900"
            />
          </div>

          {/* Guests Selector */}
          <div
            onClick={() => guestsRef.current?.focus()}
            className="relative lg:flex-1 lg:px-6 xl:px-8 lg:border-r border-gray-200/70 flex flex-col justify-center group hover:bg-neutral-50/80 p-3 sm:p-2.5 rounded-xl transition-colors duration-200 cursor-pointer min-h-[44px]"
          >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1 group-hover:text-[#b30018] transition-colors">
              GUESTS
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                {guests}
              </span>
              <Users className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#b30018] transition-colors shrink-0" />
            </div>
            {/* Native Select Overlay */}
            <select
              ref={guestsRef}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{ colorScheme: "light" }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-base bg-white text-gray-900"
            >
              <option value="1 Guest" className="bg-white text-gray-900">1 Guest</option>
              <option value="2 Guests" className="bg-white text-gray-900">2 Guests</option>
              <option value="3 Guests" className="bg-white text-gray-900">3 Guests</option>
              <option value="4 Guests" className="bg-white text-gray-900">4 Guests</option>
              <option value="5+ Guests" className="bg-white text-gray-900">5+ Guests</option>
            </select>
          </div>

          {/* Room Type Selector */}
          <div
            onClick={() => roomTypeRef.current?.focus()}
            className="relative lg:flex-1 lg:px-6 xl:px-8 flex flex-col justify-center group hover:bg-neutral-50/80 p-3 sm:p-2.5 rounded-xl transition-colors duration-200 cursor-pointer min-h-[44px]"
          >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1 group-hover:text-[#b30018] transition-colors">
              ROOM TYPE
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                {roomType}
              </span>
              <ChevronDown className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#b30018] transition-colors shrink-0" />
            </div>
            {/* Native Select Overlay */}
            <select
              ref={roomTypeRef}
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              style={{ colorScheme: "light" }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-base bg-white text-gray-900"
            >
              <option value="Any" className="bg-white text-gray-900">Any</option>
              <option value="AC Rooms" className="bg-white text-gray-900">AC Rooms</option>
              <option value="Non AC Rooms" className="bg-white text-gray-900">Non AC Rooms</option>
            </select>
          </div>

        </div>

        {/* Submit Button with WhatsApp Redirect */}
        <div className="lg:pl-6 xl:pl-8 flex items-center pt-2 lg:pt-0">
          <button
            onClick={handleCheckAvailability}
            className="bg-[#b30018] hover:bg-[#990012] text-white px-8 xl:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(179,0,24,0.35)] hover:shadow-red-800/50 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap w-full lg:w-auto min-h-[48px] cursor-pointer"
          >
            CHECK AVAILABILITY
          </button>
        </div>

      </div>
    </div>
  );
}
