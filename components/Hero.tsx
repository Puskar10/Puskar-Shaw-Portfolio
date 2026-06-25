"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import LightRays from "./ui/LightRays";
import { useThemeMode } from "./ThemeWrapper";

const typingWords = [
  "Full Stack Developer",
  "Frontend Developer",
  "Next.js Developer",
  "React Developer",
  "Creative Web Developer",
];

export default function Hero() {
  const { isLight } = useThemeMode();
  const typedText = useTypewriter(typingWords);

  const handleNavClick = (id: string) => {
    const section = document.querySelector(`#${id.toLowerCase()}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden px-4 pt-32 pb-32 transition-colors duration-500 sm:pb-44 lg:pb-52 ${isLight ? "bg-[#f8fafc] text-slate-950" : "bg-[#020617] text-white"
        }`}
    >
      {/* Brighter Premium Background */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 ${isLight
            ? "bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.36),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.24),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_42%,#dbeafe_100%)]"
            : "bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.36),transparent_34%),radial-gradient(circle_at_20%_35%,rgba(168,85,247,0.30),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.30),transparent_32%),linear-gradient(180deg,#020617_0%,#020617_42%,#0f172a_100%)]"
          }`}
      />

      {/* Bright Light Rays */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-100">
        <LightRays
          raysOrigin="top-center"
          raysColor={isLight ? "#3b82f6" : "#e0f2fe"}
          raysSpeed={0.75}
          lightSpread={1.45}
          rayLength={1.9}
          pulsating
          fadeDistance={1.25}
          saturation={isLight ? 1.15 : 1.35}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.025}
          distortion={0.045}
          className="h-full w-full"
        />
      </div>

      {/* Readability Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 z-[2] ${isLight ? "bg-white/25" : "bg-black/10"
          }`}
      />

      {/* Bottom Fade Space */}
      <div
        className={`pointer-events-none absolute bottom-0 left-0 z-[3] h-52 w-full ${isLight
            ? "bg-gradient-to-b from-transparent via-[#f8fafc]/40 to-[#f8fafc]"
            : "bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]"
          }`}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.22]"
        style={{
          backgroundImage: isLight
            ? "linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)"
            : "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 80%, transparent)",
        }}
      />

      {/* Decorative Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`pointer-events-none absolute left-1/2 top-24 z-[3] h-[430px] w-[430px] -translate-x-1/2 rounded-full blur-[120px] ${isLight ? "bg-blue-400/55" : "bg-cyan-300/35"
          }`}
      />

      {/* Extra Side Glow Left */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`pointer-events-none absolute left-[-120px] top-44 z-[3] h-[360px] w-[360px] rounded-full blur-[110px] ${isLight ? "bg-purple-300/45" : "bg-purple-500/25"
          }`}
      />

      {/* Extra Side Glow Right */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`pointer-events-none absolute right-[-120px] top-40 z-[3] h-[380px] w-[380px] rounded-full blur-[115px] ${isLight ? "bg-sky-300/50" : "bg-blue-500/25"
          }`}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col items-center">
        {/* Avatar */}
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className={`relative grid h-44 w-44 place-items-center overflow-hidden rounded-full border p-1 shadow-2xl backdrop-blur-xl sm:h-52 sm:w-52 lg:h-60 lg:w-60 ${isLight
                ? "border-slate-300/80 bg-white/70 shadow-blue-300/30"
                : "border-white/15 bg-white/10 shadow-cyan-500/20"
              }`}
          >
            <Image
              src="/images/profile.png"
              alt="Puskar Shaw"
              width={260}
              height={260}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h1
            className={`mx-auto max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl ${isLight
                ? "text-slate-950 drop-shadow-sm"
                : "text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.22)]"
              }`}
          >
            Hey, I&apos;m Puskar!
            <br />
            Welcome to my corner of
            <br />
            the internet!
          </h1>

          {/* Typewriter */}
          <div
            className={`mx-auto mt-7 flex h-10 items-center justify-center text-lg font-semibold sm:text-xl lg:text-2xl ${isLight ? "text-slate-700" : "text-white/90"
              }`}
          >
            <span>I&apos;m a&nbsp;</span>

            <span
              className={`inline-flex min-w-[230px] items-center justify-start text-left sm:min-w-[300px] ${isLight ? "text-blue-700" : "text-cyan-100"
                }`}
            >
              <span className="truncate">{typedText}</span>
              <span
                className={`ml-1 h-6 w-[2px] animate-pulse rounded-full ${isLight ? "bg-blue-700" : "bg-cyan-100"
                  }`}
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className={`mx-auto mt-10 max-w-3xl text-center text-sm leading-7 sm:text-base ${isLight ? "text-slate-700" : "text-white/75"
            }`}
        >
          I&apos;m a full-stack developer with a love for clean design, smooth
          animations, and modern web technologies. I build responsive web
          experiences using Next.js, React, TypeScript, Tailwind CSS, Node.js,
          and MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => handleNavClick("projects")}
            className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-xl transition duration-300 ${isLight
                ? "bg-slate-950 text-white shadow-blue-300/40 hover:bg-slate-800"
                : "bg-white text-black shadow-cyan-300/20 hover:bg-white/90"
              }`}
          >
            See My Work
            <FiArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="/resume/Puskar-Shaw-Resume.pdf"
            download
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg backdrop-blur-xl transition duration-300 ${isLight
                ? "bg-white/90 text-slate-950 shadow-blue-200/70 ring-1 ring-slate-200 hover:bg-white"
                : "bg-white/10 text-white shadow-black/20 ring-1 ring-white/10 hover:bg-white/15"
              }`}
          >
            Download Resume
            <FiDownload className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = 75;
    const deletingSpeed = 40;
    const holdTime = 1400;
    const nextWordDelay = 250;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, holdTime);
    } else if (isDeleting && displayText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, nextWordDelay);
    } else {
      timer = setTimeout(
        () => {
          const nextText = isDeleting
            ? currentWord.slice(0, displayText.length - 1)
            : currentWord.slice(0, displayText.length + 1);

          setDisplayText(nextText);
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}