"use client";

import React, { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useThemeMode } from "./ThemeWrapper";

const footerText = "PUSKAR SHAW".split("");

export default function Footer() {
  const { isLight } = useThemeMode();
  const [showMessage, setShowMessage] = useState(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(logoRef, {
    once: false,
    margin: "-80px",
  });

  const letterVariants = {
    hidden: {
      y: 160,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 14,
        delay: i * 0.04,
      },
    }),
  };

  function handleNewsletter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const formData = new FormData(target);
    const email = formData.get("newsletter_email");

    console.log("Newsletter Email:", email);

    setShowMessage(true);
    target.reset();

    setTimeout(() => {
      setShowMessage(false);
    }, 2200);
  }

  const sectionBg = isLight
    ? "bg-[radial-gradient(circle_at_top,#f8fafc_0%,#ffffff_45%,#f4f4f5_100%)] text-black"
    : "bg-[radial-gradient(circle_at_top,#020617_0%,#010313_45%,#000000_100%)] text-white";

  const textSoft = isLight ? "text-black/60" : "text-white/60";
  const textMuted = isLight ? "text-black/45" : "text-white/40";

  const glassCard = isLight
    ? "border-black/10 bg-white/35 shadow-black/10"
    : "border-white/10 bg-white/[0.035] shadow-black/80";

  const linkHover = isLight
    ? "text-black/65 hover:text-black"
    : "text-white/55 hover:text-white";

  return (
    <footer
      className={`relative w-full overflow-hidden px-4 pt-20 transition-colors duration-500 sm:px-6 lg:px-8 ${sectionBg}`}
    >
      <GridBackground isLight={isLight} />

      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />

      {showMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 rounded-2xl border px-5 py-4 text-sm font-medium shadow-2xl backdrop-blur-2xl ${
            isLight
              ? "border-black/10 bg-white/80 text-black"
              : "border-white/10 bg-black/70 text-white"
          }`}
        >
          Thanks! I received your email.
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP FOOTER */}
        <div className="grid gap-12 border-b border-black/10 pb-12 dark:border-white/10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div>
            <p
              className={`mb-5 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}
            >
              Let&apos;s Connect
            </p>

            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Let&apos;s do great work together
            </h2>

            <p className={`mt-5 max-w-xl text-base leading-8 ${textSoft}`}>
              I build clean, responsive, and modern web applications using
              React, Next.js, Tailwind CSS, Node.js, and MongoDB.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-8 max-w-xl">
              <p className={`mb-3 text-sm font-medium ${textMuted}`}>
                Sign up for updates
              </p>

              <form
                onSubmit={handleNewsletter}
                className={`group relative flex overflow-hidden rounded-full border shadow-2xl backdrop-blur-2xl ${glassCard}`}
              >
                <div className="grid h-14 w-14 place-items-center">
                  <Mail className={`h-5 w-5 ${textMuted}`} />
                </div>

                <input
                  type="email"
                  name="newsletter_email"
                  required
                  placeholder="Your email address"
                  className={`min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:${
                    isLight ? "text-black/35" : "text-white/35"
                  }`}
                />

                <button
                  type="submit"
                  className={`m-1 grid h-12 w-12 place-items-center rounded-full transition-all duration-300 group-hover:scale-105 ${
                    isLight
                      ? "bg-black text-white hover:bg-black/85"
                      : "bg-white text-black hover:bg-white/85"
                  }`}
                  aria-label="Submit newsletter email"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]">
                Sitemap
              </h3>

              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link href="#home" className={`transition ${linkHover}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className={`transition ${linkHover}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className={`transition ${linkHover}`}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className={`transition ${linkHover}`}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className={`transition ${linkHover}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]">
                Social
              </h3>

              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="https://github.com/Puskar10"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 transition ${linkHover}`}
                  >
                    <SiGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 transition ${linkHover}`}
                  >
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:puskarshaw346@gmail.com"
                    className={`inline-flex items-center gap-2 transition ${linkHover}`}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BIG ANIMATED FOOTER TEXT */}
        <div
          ref={logoRef}
          className="overflow-hidden border-b border-black/10 py-8 dark:border-white/10 sm:py-10"
        >
          <motion.div
            className="flex justify-center gap-[0.02em] text-center text-[13vw] font-bold uppercase leading-none tracking-[-0.1em] sm:text-[12vw]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {footerText.map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                custom={index}
                variants={letterVariants}
                className={`inline-block bg-gradient-to-b bg-clip-text text-transparent ${
                  isLight
                    ? "from-black via-black/70 to-black/10"
                    : "from-white via-white/60 to-white/5"
                } ${letter === " " ? "w-[0.25em]" : ""}`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col-reverse gap-3 py-5 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <p className={textSoft}>
            &copy; {new Date().getFullYear()} Puskar Shaw. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className={`transition ${linkHover}`}>
              Privacy Policy
            </a>
            <a href="#home" className={`transition ${linkHover}`}>
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GridBackground({ isLight }: { isLight: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        isLight
          ? "bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      } bg-[size:48px_48px] sm:bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_65%,transparent_100%)]`}
    />
  );
}