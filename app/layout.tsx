import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const schibstedGrotest = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventDev",
  description: "The hub for every developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen", "antialiased", schibstedGrotest.variable, martianMono.variable, "font-sans", geist.variable)}
    >
        {/* import LightRays from './LightRays'; */}

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={3}
    lightSpread={2}
    rayLength={3}
    followMouse={true}
    mouseInfluence={1}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={2}
    saturation={2}
/>
</div>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
