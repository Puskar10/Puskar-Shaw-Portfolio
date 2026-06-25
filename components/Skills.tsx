"use client";

import React, { useRef } from "react";
import { AnimatedBeam, Circle } from "@/components/uilayouts/animated-beam";
import { useThemeMode } from "./ThemeWrapper";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
];

export default function Skills() {
  const { isLight } = useThemeMode();

  const containerRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const tsRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const tailwindRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const mongoRef = useRef<HTMLDivElement>(null);
  const jsRef = useRef<HTMLDivElement>(null);

  const sectionBg = isLight
    ? "bg-white text-black"
    : "bg-slate-950 text-white";

  const cardBg = isLight
    ? "border-black/10 bg-white/80 shadow-black/10"
    : "border-white/10 bg-white/[0.05] shadow-black/40";

  const textSoft = isLight ? "text-black/60" : "text-white/60";
  const textMuted = isLight ? "text-black/50" : "text-white/50";

  const chipClass = isLight
    ? "border-black/10 bg-black/[0.04] text-black hover:bg-black/[0.08]"
    : "border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12]";

  return (
    <section
      id="skills"
      className={`relative w-full overflow-hidden px-4 py-20 transition-colors duration-300 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${sectionBg}`}
    >
      <GridBackground isLight={isLight} />

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}
          >
            Frameworks I Used
          </p>

          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Tech Stack Behind <br className="hidden sm:block" />
            My Modern Web Projects
          </h2>

          <p
            className={`mx-auto mt-6 max-w-xl text-pretty text-base leading-8 sm:text-lg lg:mx-0 ${textSoft}`}
          >
            I use React, Next.js, TypeScript, Tailwind CSS, Node.js, Express,
            MongoDB, and JavaScript to build responsive, smooth, and
            professional full-stack web applications.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((item) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl transition ${chipClass}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT ANIMATED CARD */}
        <div
          ref={containerRef}
          className={`relative mx-auto flex min-h-[340px] w-full max-w-[360px] items-center justify-center overflow-hidden rounded-[1.75rem] border p-4 shadow-2xl backdrop-blur-2xl sm:min-h-[430px] sm:max-w-[520px] sm:p-8 lg:max-w-[580px] ${cardBg}`}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between gap-8 sm:gap-12">
            {/* TOP ROW */}
            <div className="flex items-center justify-between">
              <TechCircle ref={reactRef} isLight={isLight}>
                <SiReact className="text-[#61DAFB]" />
              </TechCircle>

              <TechCircle ref={tailwindRef} isLight={isLight}>
                <SiTailwindcss className="text-[#38BDF8]" />
              </TechCircle>
            </div>

            {/* MIDDLE ROW */}
            <div className="flex items-center justify-between">
              <TechCircle ref={nextRef} isLight={isLight}>
                <SiNextdotjs />
              </TechCircle>

              <Circle
                ref={centerRef}
                className={`h-20 w-20 border p-4 shadow-xl sm:h-24 sm:w-24 ${
                  isLight
                    ? "border-black/10 bg-black text-white shadow-black/20"
                    : "border-white/15 bg-white text-black shadow-indigo-500/20"
                }`}
              >
                <Code2 className="h-full w-full" />
              </Circle>

              <TechCircle ref={nodeRef} isLight={isLight}>
                <SiNodedotjs className="text-[#5FA04E]" />
              </TechCircle>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between">
              <TechCircle ref={tsRef} isLight={isLight}>
                <SiTypescript className="text-[#3178C6]" />
              </TechCircle>

              <TechCircle ref={mongoRef} isLight={isLight}>
                <SiMongodb className="text-[#47A248]" />
              </TechCircle>
            </div>

            {/* EXTRA MOBILE-FRIENDLY ROW */}
            <div className="flex items-center justify-center gap-8 sm:hidden">
              <TechCircle ref={jsRef} isLight={isLight}>
                <SiJavascript className="text-[#F7DF1E]" />
              </TechCircle>

              <div
                className={`grid h-12 w-12 place-items-center rounded-full border text-xl ${
                  isLight
                    ? "border-black/10 bg-white text-black"
                    : "border-white/10 bg-white/10 text-white"
                }`}
              >
                <SiExpress />
              </div>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={reactRef}
            toRef={centerRef}
            curvature={-70}
            endYOffset={-10}
            dotted
            gradientStartColor="#61DAFB"
            gradientStopColor="#38BDF8"
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={nextRef}
            toRef={centerRef}
            dotted
            gradientStartColor="#ffffff"
            gradientStopColor="#a3a3a3"
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={tsRef}
            toRef={centerRef}
            curvature={70}
            endYOffset={10}
            dotted
            gradientStartColor="#3178C6"
            gradientStopColor="#60A5FA"
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={tailwindRef}
            toRef={centerRef}
            curvature={-70}
            endYOffset={-10}
            reverse
            dotted
            gradientStartColor="#38BDF8"
            gradientStopColor="#67E8F9"
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={nodeRef}
            toRef={centerRef}
            reverse
            dotted
            gradientStartColor="#5FA04E"
            gradientStopColor="#86EFAC"
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={mongoRef}
            toRef={centerRef}
            curvature={70}
            endYOffset={10}
            reverse
            dotted
            gradientStartColor="#47A248"
            gradientStopColor="#4ADE80"
          />
        </div>
      </div>
    </section>
  );
}

const TechCircle = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    isLight: boolean;
  }
>(({ children, isLight }, ref) => {
  return (
    <Circle
      ref={ref}
      className={`h-12 w-12 border p-3 text-2xl shadow-lg transition hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl ${
        isLight
          ? "border-black/10 bg-white text-black shadow-black/10"
          : "border-white/10 bg-white/10 text-white shadow-black/30"
      }`}
    >
      {children}
    </Circle>
  );
});

TechCircle.displayName = "TechCircle";

function GridBackground({ isLight }: { isLight: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        isLight
          ? "bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]"
      } bg-[size:48px_48px] sm:bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_65%,transparent_100%)]`}
    />
  );
}