"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import "../app/global.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 top-0 left-0 w-screen bg-white/70 shadow-[0px_10px_12.9px_rgba(0,0,0,0.25)] border-b-[5px] border-white backdrop-blur-md">
      {/* Top bar */}
      <div className="h-20 flex items-center justify-center relative">
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center items-center gap-9">
          <li className="text-stone-700 text-2xl font-orbit">About</li>
          <li className="text-stone-700 text-2xl font-orbit">Gallery</li>
          <li className="text-red-800 text-5xl font-audiowide">Ely Sian</li>
          <li className="text-stone-700 text-2xl font-orbit">Commissions</li>
          <li className="text-stone-700 text-2xl font-orbit">Contact</li>
        </ul>

        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center w-full px-4 absolute inset-0">
          <div className="text-red-800 text-3xl font-audiowide">Ely Sian</div>
          <button
            className="text-stone-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
    <div className="shadow-md">
        <ul className="flex flex-col items-center gap-6 py-6">
        <span className="h-[1px] w-3/4 bg-black/50"></span>
        <li className="text-stone-700 text-xl font-orbit">About</li>
        <li className="text-stone-700 text-xl font-orbit">Gallery</li>
        <li className="text-stone-700 text-xl font-orbit">Commissions</li>
        <li className="text-stone-700 text-xl font-orbit">Contact</li>
        </ul>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;
