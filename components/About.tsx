"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
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
            className={`sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden px-4 py-24 ${darkSection}`}
          >
            <GridBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className={`mb-5 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}>
                About Me
              </p>

              <h1 className="text-4xl font-semibold leading-[120%] tracking-tight sm:text-6xl 2xl:text-7xl">
                I Build Modern Websites <br className="hidden sm:block" />
                That Feel Smooth & Professional
              </h1>

              <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${textSoft}`}>
                I&apos;m Puskar Shaw, a software developer focused on building
                clean, responsive, and real-world web applications using React,
                Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.
              </p>
            </div>
          </section>

          <section
            className={`sticky top-0 grid min-h-screen place-content-center overflow-hidden rounded-tl-2xl rounded-tr-2xl px-4 py-24 ${lightSection}`}
          >
            <GridBackground isLight={!isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-black/50 sm:text-sm">
                What I Do
              </p>

              <h1 className="text-4xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl">
                I Turn Ideas Into Clean UI, <br className="hidden sm:block" />
                Smooth Animations & Working Projects
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                I enjoy creating user-friendly designs, writing clean code, and
                making websites that work beautifully on mobile, tablet, and
                desktop.
              </p>
            </div>
          </section>

          <section
            className={`sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden px-4 py-24 ${darkSection}`}
          >
            <GridBackground isLight={isLight} />

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
              <p className={`mb-5 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}>
                My Focus
              </p>

              <h1 className="text-4xl font-semibold leading-[120%] tracking-tight sm:text-6xl 2xl:text-7xl">
                Learning, Building, Improving <br className="hidden sm:block" />
                And Creating Real Projects
              </h1>

              <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${textSoft}`}>
                My current focus is full-stack development, better UI/UX,
                frontend animations, and building portfolio projects that show
                practical skills.
              </p>
            </div>
          </section>
        </div>

        {/* PROJECT SHOWCASE */}
        <section id="projects" className={`w-full ${darkSection}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:sticky lg:top-0 flex min-h-[70vh] lg:h-screen items-center justify-center px-4 py-24">
              <div className="max-w-xl text-center lg:px-8">
                <p className={`mb-5 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}>
                  Project Showcase
                </p>

                <h1 className="text-4xl font-semibold leading-[120%] tracking-tight sm:text-5xl 2xl:text-7xl">
                  Selected Projects.
                  <br /> Scroll To Explore
                </h1>

                <p className={`mx-auto mt-6 max-w-xl text-base leading-8 ${textSoft}`}>
                  These are some of my real-world projects where I practiced UI,
                  frontend logic, backend integration, APIs, and deployment.
                </p>
              </div>
            </div>

            <div className="grid gap-10 px-4 pb-20 lg:gap-2 lg:px-0 lg:py-10">
              {projects.map((project, index) => (
                <figure
                  key={project.title}
                  className={`grid min-h-[85vh] place-content-center lg:min-h-[90vh] ${
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

        {/* STICKY PROJECT CARDS */}
        <section className={`w-full ${darkSection}`}>
          <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:px-8">
            <div className="grid gap-2">
              {projects.map((project) => (
                <figure
                  key={project.title}
                  className="lg:sticky lg:top-0 grid min-h-[85vh] lg:h-screen place-content-center"
                >
                  <div
                    className={`relative w-full max-w-[420px] overflow-hidden rounded-3xl border ${cardBorder} ${cardBg} p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[420px] w-full rounded-2xl object-cover transition-all duration-500 hover:scale-105 sm:w-96"
                    />

                    <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </figure>
              ))}
            </div>

            <div className="lg:sticky lg:top-0 grid min-h-[70vh] lg:h-screen place-content-center">
              <div className="px-2 text-left lg:px-8 lg:text-right">
                <p className={`mb-5 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}>
                  My Work
                </p>

                <h1 className={`text-4xl font-medium leading-[120%] tracking-tight sm:text-5xl ${textMain}`}>
                  Every project helped me improve my design sense, coding
                  skills, and problem-solving ability.
                </h1>

                <p className={`mt-6 text-base leading-8 ${textSoft}`}>
                  From WebRTC video calls to AI chatbots and movie recommender
                  apps, I focus on building projects that are useful, clean, and
                  portfolio-ready.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
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
        className="h-[460px] w-full object-cover align-bottom transition-all duration-500 group-hover:scale-105 sm:w-96"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-xl ${tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

        <p className="mt-2 text-sm leading-6 text-white/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${buttonGhost}`}
          >
            GitHub
            <FaGithub className="h-4 w-4" />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${buttonMain}`}
          >
            Live Demo
            <FiArrowUpRight className="h-4 w-4" />
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