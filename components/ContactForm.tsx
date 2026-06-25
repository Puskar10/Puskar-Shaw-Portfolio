"use client";

import * as React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Mail, MapPin, Send, UserRound } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { useThemeMode } from "./ThemeWrapper";



const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(50, "Subject must be at most 50 characters."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(250, "Message must be at most 250 characters."),
});

export default function ContactForm() {
  const { isLight } = useThemeMode();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await toast.promise(
      async () => {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Message could not be sent.");
        }

        form.reset();

        return result;
      },
      {
        loading: "Sending your message...",
        success: "Message sent successfully!",
        error: (error) =>
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      }
    );
  }

  const sectionBg = isLight
    ? "bg-[radial-gradient(circle_at_top,#f8fafc_0%,#ffffff_45%,#f4f4f5_100%)] text-black"
    : "bg-[radial-gradient(circle_at_top,#020617_0%,#010313_45%,#000000_100%)] text-white";

  const textSoft = isLight ? "text-black/60" : "text-white/55";
  const textMuted = isLight ? "text-black/50" : "text-white/40";

  const cardClass = isLight
    ? "border-black/10 bg-white/30 shadow-black/10"
    : "border-white/10 bg-white/[0.035] shadow-black/80";

  const inputClass = isLight
    ? "border-black/10 bg-white/35 text-black placeholder:text-black/35 backdrop-blur-xl focus-visible:ring-black/20"
    : "border-white/10 bg-white/[0.035] text-white placeholder:text-white/35 backdrop-blur-xl focus-visible:ring-white/20";

  const imageCardClass = isLight
    ? "border-black/10 bg-white/40 shadow-black/10"
    : "border-white/10 bg-white/[0.035] shadow-black/80";

  const titleClass = isLight ? "text-slate-950" : "text-white";
  const labelClass = isLight ? "text-slate-900" : "text-white/90";
  const descriptionClass = isLight ? "text-slate-600" : "text-white/65";
  const errorClass = isLight ? "text-red-600" : "text-red-400";

  return (
    <section
      id="contact"
      className={`relative w-full overflow-hidden px-4 py-24 transition-colors duration-500 sm:px-6 sm:py-28 lg:px-8 lg:py-32 ${sectionBg}`}
    >
      <GridBackground isLight={isLight} />

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p
            className={`mb-5 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm ${textMuted}`}
          >
            Contact Me
          </p>

          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Let&apos;s Create Something <br className="hidden sm:block" />
            Clean, Modern & Useful
          </h2>

          <p
            className={`mx-auto mt-6 max-w-xl text-pretty text-base leading-8 sm:text-lg lg:mx-0 ${textSoft}`}
          >
            Have a project idea, collaboration, freelance work, or portfolio
            feedback? Send me a message and I&apos;ll get back to you soon.
          </p>

          {/* IMAGE CARD */}
          <div
            className={`mt-8 overflow-hidden rounded-[2rem] border p-2 shadow-2xl backdrop-blur-2xl ${imageCardClass}`}
          >
            <div className="relative h-[80vh] min-h-[520px] max-h-[760px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/contact/contact-support.jpg"
                alt="Contact support workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div
                className={`absolute inset-0 ${isLight
                    ? "bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                    : "bg-gradient-to-t from-black/90 via-black/45 to-black/20"
                  }`}
              />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                  Available For Work
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Let&apos;s discuss your project
                </h3>
              </div>
            </div>
          </div>

          {/* INFO BOXES */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-xl">
            <InfoBox
              isLight={isLight}
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value="puskarshaw346@gmail.com"
            />

            <InfoBox
              isLight={isLight}
              icon={<UserRound className="h-5 w-5" />}
              title="Role"
              value="Full Stack Developer"
            />

            <InfoBox
              isLight={isLight}
              icon={<MapPin className="h-5 w-5" />}
              title="Location"
              value="India"
            />

            <InfoBox
              isLight={isLight}
              icon={<SiGithub className="h-5 w-5" />}
              title="GitHub"
              value="github.com/Puskar10"
            />
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://github.com/Puskar10"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-1 ${isLight
                ? "border-black/10 bg-black text-white hover:bg-black/85"
                : "border-white/10 bg-white text-black hover:bg-white/85"
                }`}
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-1 ${isLight
                ? "border-black/10 bg-white/35 text-black hover:bg-white/55"
                : "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.1]"
                }`}
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* FORM CARD */}
        <Card
          className={`mx-auto w-full max-w-xl rounded-[2rem] border shadow-2xl backdrop-blur-2xl ${cardClass}`}
        >
          <CardHeader className="space-y-3 bg-transparent p-6 sm:p-8">
            <div
              className={`mb-2 grid h-12 w-12 place-items-center rounded-2xl ${isLight ? "bg-black text-white" : "bg-white text-black"
                }`}
            >
              <Send className="h-5 w-5" />
            </div>

            <CardTitle className={`text-2xl tracking-tight sm:text-3xl ${titleClass}`}>
              Send Message
            </CardTitle>

            <CardDescription className={descriptionClass}>
              Fill out the form below and I&apos;ll reply as soon as possible.
            </CardDescription>
          </CardHeader>

          <CardContent className="bg-transparent px-6 sm:px-8">
            <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup className="gap-5">
                {/* NAME */}
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-name" className={labelClass}>
                        Your Name
                      </FieldLabel>

                      <Input
                        {...field}
                        id="contact-name"
                        placeholder="Puskar Shaw"
                        autoComplete="name"
                        aria-invalid={fieldState.invalid}
                        className={inputClass}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className={errorClass}
                        />
                      )}
                    </Field>
                  )}
                />

                {/* EMAIL */}
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-email" className={labelClass}>
                        Email
                      </FieldLabel>

                      <Input
                        {...field}
                        id="contact-email"
                        type="email"
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        aria-invalid={fieldState.invalid}
                        className={inputClass}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className={errorClass}
                        />
                      )}
                    </Field>
                  )}
                />

                {/* SUBJECT */}
                <Controller
                  name="subject"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-subject" className={labelClass}>
                        Subject
                      </FieldLabel>

                      <Input
                        {...field}
                        id="contact-subject"
                        placeholder="Project collaboration"
                        autoComplete="off"
                        aria-invalid={fieldState.invalid}
                        className={inputClass}
                      />

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className={errorClass}
                        />
                      )}
                    </Field>
                  )}
                />

                {/* MESSAGE */}
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-message" className={labelClass}>
                        Message
                      </FieldLabel>

                      <InputGroup
                        className={`min-h-36 overflow-hidden rounded-xl border backdrop-blur-xl ${isLight
                          ? "border-black/10 bg-white/35"
                          : "border-white/10 bg-white/[0.055]"
                          }`}
                      >
                        <InputGroupTextarea
                          {...field}
                          id="contact-message"
                          placeholder="Write your message here..."
                          rows={6}
                          className={`min-h-36 resize-none border-0 bg-transparent focus-visible:ring-0 ${isLight
                            ? "text-black placeholder:text-black/35"
                            : "text-white placeholder:text-white/35"
                            }`}
                          aria-invalid={fieldState.invalid}
                        />

                        <InputGroupAddon align="block-end">
                          <InputGroupText
                            className={`tabular-nums ${isLight ? "text-black/45" : "text-white/50"
                              }`}
                          >
                            {field.value.length}/250
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>

                      <FieldDescription className={descriptionClass}>
                        Write your project idea, collaboration details, or any message
                        you want to share.
                      </FieldDescription>

                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className={errorClass}
                        />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 bg-transparent p-6 sm:flex-row sm:justify-end sm:p-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              className={`w-full rounded-full sm:w-auto ${isLight
                ? "border-black/10 bg-white/35 text-black hover:bg-white/60"
                : "border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                }`}
            >
              Reset
            </Button>

            <Button
              type="submit"
              form="contact-form"
              disabled={form.formState.isSubmitting}
              className={`w-full rounded-full font-semibold sm:w-auto ${isLight
                ? "bg-black text-white hover:bg-black/85"
                : "bg-white text-black hover:bg-white/85"
                }`}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

function InfoBox({
  isLight,
  icon,
  title,
  value,
}: {
  isLight: boolean;
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className={`group rounded-2xl border p-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${isLight
        ? "border-black/10 bg-white/35 shadow-lg shadow-black/5 hover:bg-white/55"
        : "border-white/10 bg-white/[0.035] shadow-lg shadow-black/40 hover:bg-white/[0.08]"
        }`}
    >
      <div
        className={`mb-4 grid h-10 w-10 place-items-center rounded-xl transition group-hover:scale-110 ${isLight ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        {icon}
      </div>

      <p className="text-sm font-semibold">{title}</p>

      <p
        className={`mt-1 break-words text-sm ${isLight ? "text-black/60" : "text-white/55"
          }`}
      >
        {value}
      </p>
    </div>
  );
}


function GridBackground({ isLight }: { isLight: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${isLight
        ? "bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)]"
        : "bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
        } bg-[size:48px_48px] sm:bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_65%,transparent_100%)]`}
    />
  );
}