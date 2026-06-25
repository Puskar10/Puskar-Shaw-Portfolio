import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  ThemeWrapper  from "@/components/ThemeWrapper";
import SonnerProvider from "@/components/providers/SonnerProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puskar Shaw",
  description: "This is my Portfolio Thanks for Vistiting !!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeWrapper>
        {children}
        <SonnerProvider/>
        </ThemeWrapper>
        </body>
    </html>
  );
}
