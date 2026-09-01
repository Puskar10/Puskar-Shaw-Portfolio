"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight, FiCode, FiEye } from "react-icons/fi";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useThemeMode } from "./ThemeWrapper";
import { projects, type Project } from "../data/project";

// Types
interface ThemeStyles {
  mainBg: string;
  darkSection: string;
  lightSection: string;
  textMain: string;
  textSoft: string;
  textMuted: string;
  cardBg: string;
  cardBorder: string;
  buttonMain: string;
  buttonGhost: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isLight: boolean;
}

// Custom hook for carousel logic
const useCarousel = (totalItems: number, autoPlayInterval = 3500) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const timer = setInterval(slideNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, slideNext, autoPlayInterval, reducedMotion]);

  return {
    currentIndex,
    direction,
    isPaused,
    setIsPaused,
    slideNext,
    slidePrev,
    goToSlide,
    reducedMotion,
  };
};

export default function StickyPortfolioScroll(): React.ReactElement {
  const { isLight } = useThemeMode();
  
  const theme: ThemeStyles = useMemo(() => ({
    mainBg: isLight ? "bg-white text-black" : "bg-black text-white",
    darkSection: isLight ? "bg-zinc-100 text-black" : "bg-slate-950 text-white",
    lightSection: isLight ? "bg-white text-black" : "bg-neutral-300 text-black",
    textMain: isLight ? "text-black" : "text-white",
    textSoft: isLight ? "text-black/60" : "text-white/60",
    textMuted: isLight ? "text-black/50" : "text-white/50",
    cardBg: isLight ? "bg-white/80" : "bg-white/10",
    cardBorder: isLight ? "border-black/10" : "border-white/10",
    buttonMain: isLight ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90",
    buttonGhost: isLight ? "bg-black/5 text-black hover:bg-black/10" : "bg-white/10 text-white hover:bg-white/15",
  }), [isLight]);

  // Split projects for desktop view
  const halfLength = Math.ceil(projects.length / 2);
  const firstHalfProjects = projects.slice(0, halfLength);
  const secondHalfProjects = projects.slice(halfLength);

  return (
    <ReactLenis root>
      <main className={`transition-colors duration-300 ${theme.mainBg}`}>
        {/* About Sticky Sections */}
        <AboutSections theme={theme} isLight={isLight} />

        {/* Project Showcase - Mobile (shows all projects) */}
        <MobileProjectCarousel isLight={isLight} />

        {/* Project Showcase - Desktop Part 1 (First half of projects) */}
        <DesktopProjectShowcase 
          theme={theme} 
          isLight={isLight} 
          projects={firstHalfProjects}
          title="Selected Projects."
          subtitle="Scroll To Explore"
          description="These are some of my real-world projects where I practiced UI, frontend logic, backend integration, APIs, and deployment."
          sectionId="projects-part-1"
        />

        {/* Sticky Project Cards - Desktop Part 2 (Second half of projects) */}
        <StickyProjectCards 
          theme={theme} 
          isLight={isLight} 
          projects={secondHalfProjects}
          sectionId="projects-part-2"
        />
      </main>
    </ReactLenis>
  );
}

function AboutSections({ theme, isLight }: { theme: ThemeStyles; isLight: boolean }) {
  const sections = [
    {
      id: "about",
      sectionClass: theme.darkSection,
      label: "About Me",
      title: ["I Build Modern Websites", "That Feel Smooth & Professional"],
      description: "I'm Puskar Shaw, a software developer focused on building clean, responsive, and real-world web applications using React, Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
    },
    {
      id: "what-i-do",
      sectionClass: theme.lightSection,
      label: "What I Do",
      title: ["I Turn Ideas Into Clean UI,", "Smooth Animations & Working Projects"],
      description: "I enjoy creating user-friendly designs, writing clean code, and making websites that work beautifully on mobile, tablet, and desktop.",
      isInverted: true,
    },
    {
      id: "my-focus",
      sectionClass: theme.darkSection,
      label: "My Focus",
      title: ["Learning, Building, Improving", "And Creating Real Projects"],
      description: "My current focus is full-stack development, better UI/UX, frontend animations, and building portfolio projects that show practical skills.",
    },
  ];

  return (
    <div className="wrapper">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`sticky top-0 grid min-h-[100dvh] w-full place-content-center overflow-hidden px-4 py-16 sm:py-24 ${section.sectionClass}`}
        >
          <GridBackground isLight={section.isInverted ? !isLight : isLight} />
          
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${
                section.isInverted ? "text-black/50" : theme.textMuted
              }`}
            >
              {section.label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl"
            >
              {section.title[0]} <br className="hidden sm:block" />
              {section.title[1]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:mt-6 sm:text-lg sm:leading-8 ${
                section.isInverted ? "text-black/60" : theme.textSoft
              }`}
            >
              {section.description}
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  );
}

function DesktopProjectShowcase({ 
  theme, 
  isLight, 
  projects,
  title,
  subtitle,
  description,
  sectionId 
}: { 
  theme: ThemeStyles; 
  isLight: boolean;
  projects: Project[];
  title: string;
  subtitle: string;
  description: string;
  sectionId: string;
}) {
  return (
    <section id={sectionId} className={`w-full ${theme.darkSection}`}>
      <div className="hidden grid-cols-1 lg:grid lg:grid-cols-2">
        <div className="lg:sticky lg:top-0 flex min-h-0 items-center justify-center px-4 py-12 lg:h-screen lg:py-24">
          <div className="max-w-xl text-center lg:px-8">
            <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${theme.textMuted}`}>
              Project Showcase
            </p>

            <h1 className="text-3xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl">
              {title}
              <br /> {subtitle}
            </h1>

            <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 ${theme.textSoft}`}>
              {description}
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
              <ProjectCard project={project} index={index} isLight={isLight} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyProjectCards({ 
  theme, 
  isLight, 
  projects,
  sectionId 
}: { 
  theme: ThemeStyles; 
  isLight: boolean;
  projects: Project[];
  sectionId: string;
}) {
  return (
    <section id={sectionId} className={`hidden w-full lg:block ${theme.darkSection}`}>
      <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="grid gap-4 sm:gap-6 lg:gap-2">
          {projects.map((project, index) => (
            <figure
              key={project.title}
              className="lg:sticky lg:top-0 grid min-h-0 py-4 lg:h-screen lg:min-h-screen lg:py-0 place-content-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`relative w-full max-w-[420px] overflow-hidden rounded-3xl border ${theme.cardBorder} ${theme.cardBg} p-2.5 sm:p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-[240px] xs:h-[300px] sm:h-[420px] w-full object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </figure>
          ))}
        </div>

        <div className="lg:sticky lg:top-0 grid min-h-0 py-12 lg:h-screen lg:min-h-screen lg:py-0 place-content-center">
          <div className="px-2 text-left lg:px-8 lg:text-right">
            <p className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] sm:mb-5 sm:text-sm ${theme.textMuted}`}>
              My Work
            </p>

            <h1 className={`text-3xl font-medium leading-[120%] tracking-tight sm:text-5xl ${theme.textMain}`}>
              Every project helped me improve my design sense, coding skills,
              and problem-solving ability.
            </h1>

            <p className={`mt-4 text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 ${theme.textSoft}`}>
              From WebRTC video calls to AI chatbots and movie recommender apps,
              I focus on building projects that are useful, clean, and
              portfolio-ready.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 lg:justify-end">
              <a
                href="https://github.com/Puskar10"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${theme.buttonMain}`}
              >
                <FaGithub className="h-4 w-4" />
                Visit GitHub
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${theme.buttonGhost}`}
              >
                Contact Me
                <FiArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isLight }: ProjectCardProps) {
  const cardBorder = isLight ? "border-black/10" : "border-white/10";
  const tagBg = isLight ? "bg-white/80 text-black" : "bg-white/10 text-white";
  const buttonMain = "bg-white text-black hover:bg-white/90";
  const buttonGhost = "bg-white/10 text-white hover:bg-white/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative w-full max-w-[420px] overflow-hidden rounded-3xl border ${cardBorder} shadow-2xl shadow-black/30 ${
        index % 2 === 0 ? "lg:skew-x-6" : "lg:-skew-x-6"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-[250px] xs:h-[310px] sm:h-[380px] lg:h-[460px] w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
        
        {/* Project number badge */}
        <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-xl px-3 py-1 text-xs font-semibold text-white">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-xl sm:px-3 sm:py-1 sm:text-xs ${tagBg}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-xl sm:px-3 sm:py-1 sm:text-xs text-white">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${buttonGhost}`}
          >
            <FiCode className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} live demo`}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${buttonMain}`}
          >
            <FiEye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function GridBackground({ isLight }: { isLight: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-0 left-0 right-0 top-0 ${
        isLight
          ? "bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]"
      } bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}
    />
  );
}

function MobileProjectCarousel({ isLight }: { isLight: boolean }) {
  const { 
    currentIndex, 
    direction, 
    isPaused, 
    setIsPaused, 
    slideNext, 
    slidePrev, 
    goToSlide,
    reducedMotion 
  } = useCarousel(projects.length);

  const textSoft = isLight ? "text-black/60" : "text-white/60";
  const textMuted = isLight ? "text-black/50" : "text-white/50";
  const controlBtnClass = isLight
    ? "border-black/10 bg-white/80 text-black shadow-black/10 hover:bg-white"
    : "border-white/10 bg-white/10 text-white shadow-black/40 hover:bg-white/20";

  // Swiper-like smooth transition variants
  const variants = {
    enter: (dir: number) => ({
      x: reducedMotion ? 0 : dir > 0 ? "100%" : "-100%",
      opacity: reducedMotion ? 1 : 0,
      scale: reducedMotion ? 1 : 0.92,
      filter: reducedMotion ? "blur(0px)" : "blur(4px)",
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
      x: reducedMotion ? 0 : dir > 0 ? "-100%" : "100%",
      opacity: reducedMotion ? 1 : 0,
      scale: reducedMotion ? 1 : 0.92,
      filter: reducedMotion ? "blur(0px)" : "blur(4px)",
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
          {isPaused ? "Paused • Tap to resume" : "Auto-playing • Swipe or use controls"}
        </p>

        {/* Counter Badge */}
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
            drag={reducedMotion ? false : "x"}
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
                onClick={() => goToSlide(idx)}
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