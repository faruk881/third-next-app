import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from '@/components/LightRays';
import NavBar from "@/components/NavBar";

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
    <body className="min-h-full flex flex-col">
    <NavBar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
            <LightRays
                raysOrigin="top-center-offset"
                raysColor="#5dfeca"
                raysSpeed={0.5}
                lightSpread={0.9}
                rayLength={1.4}
                followMouse={true}
                mouseInfluence={0.2}
                noiseAmount={0}
                distortion={0.01}
                className="custom-rays"
                pulsating={false}
                fadeDistance={2}
                saturation={2}
            />
        </div>

        <main>
        {children}
      </main>
    </body>
    </html>
  );
}
