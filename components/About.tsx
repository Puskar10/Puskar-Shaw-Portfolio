"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ReactLenis } from "lenis/react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeMode } from "./ThemeWrapper";
import { projects, type Project } from "../data/project";

export default function StickyPortfolioScroll(): React.ReactElement {
  const { isLight } = useThemeMode();

  const mainBg = isLight ? "bg-white text-black" : "bg-black text-white";
  const darkSection = isLight
    ? "bg-zinc-100 text-black"
    : "bg-slate-950 text-white";
  const lightSection = isLight
    ? "bg-white text-black"
    : "bg-neutral-300 text-black";
  const textMain = isLight ? "text-black" : "text-white";
  const textSoft = isLight ? "text-black/60" : "text-white/60";
  const textMuted = isLight ? "text-black/50" : "text-white/50";
  const cardBg = isLight ? "bg-white/80" : "bg-white/10";
  const cardBorder = isLight ? "border-black/10" : "border-white/10";
  const buttonMain = isLight
    ? "bg-black text-white hover:bg-black/90"
    : "bg-white text-black hover:bg-white/90";
  const buttonGhost = isLight
    ? "bg-black/5 text-black hover:bg-black/10"
    : "bg-white/10 text-white hover:bg-white/15";

  return (
    <ReactLenis root>
      <main className={`transition-colors duration-300 ${mainBg}`}>
        {/* ABOUT STICKY INTRO */}
        <div className="wrapper">
          <section
            id="about"
            className={`sticky top-0 grid min-h-[100dvh] w-full place-content-center overflow-hidden px-4 py-16 sm:py-24 ${darkSection}`}
          >
            <GridBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${textMuted}`}>
                About Me
              </p>

              <h1 className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-6xl 2xl:text-7xl">
                I Build Modern Websites <br className="hidden sm:block" />
                That Feel Smooth & Professional
              </h1>

              <p className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:mt-6 sm:text-lg sm:leading-8 ${textSoft}`}>
                I&apos;m Puskar Shaw, a software developer focused on building
                clean, responsive, and real-world web applications using React,
                Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.
              </p>
            </div>
          </section>

          <section
            className={`sticky top-0 grid min-h-[100dvh] place-content-center overflow-hidden rounded-tl-2xl rounded-tr-2xl px-4 py-16 sm:py-24 ${lightSection}`}
          >
            <GridBackground isLight={!isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-black/50 sm:mb-5 sm:text-sm">
                What I Do
              </p>

              <h1 className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl">
                I Turn Ideas Into Clean UI, <br className="hidden sm:block" />
                Smooth Animations & Working Projects
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/60 sm:mt-6 sm:text-lg sm:leading-8">
                I enjoy creating user-friendly designs, writing clean code, and
                making websites that work beautifully on mobile, tablet, and
                desktop.
              </p>
            </div>
          </section>

          <section
            className={`sticky top-0 grid min-h-[100dvh] w-full place-content-center overflow-hidden px-4 py-16 sm:py-24 ${darkSection}`}
          >
            <GridBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${textMuted}`}>
                My Focus
              </p>

              <h1 className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-6xl 2xl:text-7xl">
                Learning, Building, Improving <br className="hidden sm:block" />
                And Creating Real Projects
              </h1>

              <p className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:mt-6 sm:text-lg sm:leading-8 ${textSoft}`}>
                My current focus is full-stack development, better UI/UX,
                frontend animations, and building portfolio projects that show
                practical skills.
              </p>
            </div>
          </section>
        </div>

        {/* PROJECT SHOWCASE */}
        <section id="projects" className={`w-full ${darkSection}`}>
          {/* MOBILE CAROUSEL (< lg) */}
          <MobileProjectCarousel isLight={isLight} />

          {/* DESKTOP STICKY GRID (lg:) */}
          <div className="hidden grid-cols-1 lg:grid lg:grid-cols-2">
            <div className="lg:sticky lg:top-0 flex min-h-0 items-center justify-center px-4 py-12 lg:h-screen lg:py-24">
              <div className="max-w-xl text-center lg:px-8">
                <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${textMuted}`}>
                  Project Showcase
                </p>

                <h1 className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl">
                  Selected Projects.
                  <br /> Scroll To Explore
                </h1>

                <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 ${textSoft}`}>
                  These are some of my real-world projects where I practiced UI,
                  frontend logic, backend integration, APIs, and deployment.
                </p>
              </div>
            </div>

            <div className="grid gap-6 px-4 pb-16 lg:gap-2 lg:px-0 lg:py-10">
              {projects.map((project, index) => (
                <figure
                  key={project.title}
                  className={`grid min-h-0 place-content-center py-4 lg:min-h-[90vh] lg:py-0 ${
                    index % 2 === 0 ? "lg:-skew-x-6" : "lg:skew-x-6"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isLight={isLight}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* STICKY PROJECT CARDS (DESKTOP ONLY lg:) */}
        <section className={`hidden w-full lg:block ${darkSection}`}>
          <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10 lg:px-8">
            <div className="grid gap-4 sm:gap-6 lg:gap-2">
              {projects.map((project) => (
                <figure
                  key={project.title}
                  className="lg:sticky lg:top-0 grid min-h-0 py-4 lg:h-screen lg:min-h-screen lg:py-0 place-content-center"
                >
                  <div
                    className={`relative w-full max-w-[420px] overflow-hidden rounded-3xl border ${cardBorder} ${cardBg} p-2.5 sm:p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[240px] xs:h-[300px] sm:h-[420px] w-full rounded-2xl object-cover transition-all duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-2.5 sm:inset-3 rounded-2xl bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </figure>
              ))}
            </div>

            <div className="lg:sticky lg:top-0 grid min-h-0 py-12 lg:h-screen lg:min-h-screen lg:py-0 place-content-center">
              <div className="px-2 text-left lg:px-8 lg:text-right">
                <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${textMuted}`}>
                  My Work
                </p>

                <h1 className={`text-3xl font-medium leading-[120%] tracking-tight sm:text-5xl ${textMain}`}>
                  Every project helped me improve my design sense, coding
                  skills, and problem-solving ability.
                </h1>

                <p className={`mt-4 text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 ${textSoft}`}>
                  From WebRTC video calls to AI chatbots and movie recommender
                  apps, I focus on building projects that are useful, clean, and
                  portfolio-ready.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 lg:justify-end">
                  <a
                    href="https://github.com/Puskar10"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${buttonMain}`}
                  >
                    Visit GitHub
                    <FaGithub className="h-4 w-4" />
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${buttonGhost}`}
                  >
                    Contact Me
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

function ProjectCard({
  project,
  index,
  isLight,
}: {
  project: Project;
  index: number;
  isLight: boolean;
}) {
  const cardBorder = isLight ? "border-black/10" : "border-white/10";
  const tagBg = isLight ? "bg-white/80 text-black" : "bg-white/10 text-white";
  const buttonMain = isLight
    ? "bg-white text-black hover:bg-white/90"
    : "bg-white text-black hover:bg-white/90";
  const buttonGhost = "bg-white/10 text-white hover:bg-white/20";

  return (
    <div
      className={`group relative w-full max-w-[420px] overflow-hidden rounded-3xl border ${cardBorder} shadow-2xl shadow-black/30 ${
        index % 2 === 0 ? "lg:skew-x-6" : "lg:-skew-x-6"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[250px] xs:h-[310px] sm:h-[380px] lg:h-[460px] w-full object-cover align-bottom transition-all duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-xl sm:px-3 sm:py-1 sm:text-xs ${tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>

        <p className="mt-1.5 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${buttonGhost}`}
          >
            GitHub
            <FaGithub className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${buttonMain}`}
          >
            Live Demo
            <FiArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function GridBackground({ isLight }: { isLight: boolean }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 ${
        isLight
          ? "bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]"
      } bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}
    />
  );
}

function MobileProjectCarousel({ isLight }: { isLight: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const textSoft = isLight ? "text-black/60" : "text-white/60";
  const textMuted = isLight ? "text-black/50" : "text-white/50";
  const controlBtnClass = isLight
    ? "border-black/10 bg-white/80 text-black shadow-black/10 hover:bg-white"
    : "border-white/10 bg-white/10 text-white shadow-black/40 hover:bg-white/20";

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-play timer (3.5 seconds per slide, pauses on hover / touch)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      slideNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, slideNext]);

  // Swiper-like smooth transition variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.92,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
        scale: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.92,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const },
        scale: { duration: 0.3 },
        filter: { duration: 0.3 },
      },
    }),
  };

  const project = projects[currentIndex];

  return (
    <div
      className="w-full px-4 py-12 lg:hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="mx-auto max-w-xl text-center">
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.35em] ${textMuted}`}>
          Project Showcase
        </p>

        <h2 className="text-3xl font-semibold leading-[120%] tracking-tight">
          Selected Projects
        </h2>

        <p className={`mt-2 text-xs leading-6 ${textSoft}`}>
          Auto-playing • Swipe or use controls to explore
        </p>

        {/* Counter Badge & Auto-play status indicator */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xl dark:border-white/10">
            <span className="font-bold text-blue-500">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className={textMuted}>/</span>
            <span className={textMuted}>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <span
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
            }`}
            title={isPaused ? "Paused" : "Auto-playing"}
          />
        </div>
      </div>

      {/* Animated Swiper Card Container */}
      <div className="relative mx-auto mt-6 flex min-h-[460px] w-full max-w-[420px] items-center justify-center overflow-hidden py-2">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100 || offset.x < -60) {
                slideNext();
              } else if (swipe > 100 || offset.x > 60) {
                slidePrev();
              }
            }}
            className="w-full touch-pan-y cursor-grab active:cursor-grabbing"
          >
            <ProjectCard
              project={project}
              index={currentIndex}
              isLight={isLight}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={slidePrev}
            className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition duration-300 active:scale-95 ${controlBtnClass}`}
            aria-label="Previous project"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5 px-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? `w-6 ${isLight ? "bg-black" : "bg-white"}`
                    : `w-2.5 ${isLight ? "bg-black/20" : "bg-white/20"}`
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={slideNext}
            className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition duration-300 active:scale-95 ${controlBtnClass}`}
            aria-label="Next project"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}