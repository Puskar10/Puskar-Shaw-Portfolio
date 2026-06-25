"use client";

import React, { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useThemeMode } from "./ThemeWrapper";
import Image from "next/image";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const { isLight, toggleTheme } = useThemeMode();

  const handleNavClick = (id: string) => {
    setExpanded(false);

    const section = document.querySelector(`#${id.toLowerCase()}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-1/2 top-5 z-50 w-full max-w-7xl -translate-x-1/2 px-4">
      <div
        className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${isLight
            ? "border-black/10 bg-white/45 shadow-black/5"
            : "border-white/10 bg-white/[0.06] shadow-black/30"
          }`}
      >
       {/* Logo */}
<button
  type="button"
  onClick={() => handleNavClick("home")}
  className="group flex items-center gap-3"
>
  {/* Profile Image Logo */}
  <div
    className={`relative h-11 w-11 overflow-hidden rounded-full border p-[2px] shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-105 ${
      isLight
        ? "border-black/10 bg-white/60 shadow-black/5"
        : "border-white/10 bg-white/10 shadow-black/30"
    }`}
  >
    <Image
      src="/images/profile.png"
      alt="Puskar Shaw"
      width={44}
      height={44}
      className="h-full w-full rounded-full object-cover"
      priority
    />
  </div>

  {/* Logo Text */}
  <div className="hidden text-left sm:block">
    <h1
      className={`text-sm font-bold leading-none ${
        isLight ? "text-slate-950" : "text-white"
      }`}
    >
      Puskar Shaw
    </h1>

    <p
      className={`mt-1 text-xs leading-none ${
        isLight ? "text-slate-600" : "text-white/60"
      }`}
    >
      Full Stack Developer
    </p>
  </div>
</button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full p-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${isLight
                  ? "text-slate-700 hover:bg-black/10 hover:text-slate-950"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Desktop Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition duration-300 ${isLight
                ? "border-black/10 bg-white/45 text-slate-950 hover:bg-white/70"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
              }`}
            aria-label="Toggle theme"
          >
            {isLight ? (
              <FaMoon className="h-4 w-4" />
            ) : (
              <FaSun className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-xl transition duration-300 ${isLight
                ? "border-black/10 bg-white/45 text-slate-950 hover:bg-white/70"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
              }`}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-xl transition duration-300 ${isLight
                ? "border-black/10 bg-white/45 text-slate-950 hover:bg-white/70"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
              }`}
            aria-label="Toggle theme"
          >
            {isLight ? (
              <FaMoon className="h-4 w-4" />
            ) : (
              <FaSun className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-xl transition duration-300 ${isLight
                ? "border-black/10 bg-white/45 text-slate-950 hover:bg-white/70"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
              }`}
            aria-label="Toggle menu"
          >
            {expanded ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {expanded && (
        <div
          className={`mt-3 rounded-2xl border p-2 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${isLight
              ? "border-black/10 bg-white/55 shadow-black/5"
              : "border-white/10 bg-white/[0.07] shadow-black/30"
            }`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition duration-300 ${isLight
                  ? "text-slate-700 hover:bg-black/10 hover:text-slate-950"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm font-semibold transition duration-300 ${isLight
                ? "border-black/10 bg-white/45 text-slate-950 hover:bg-white/70"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
              }`}
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}