// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid"; // ⬅️ import biasa (tanpa dynamic)
import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Darren — Portfolio",
  description: "Frontend • 3D • Student — Portfolio by Darren",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
  {/* Apply saved theme before React hydration to avoid flash. Adds explicit html.light or html.dark so user choice overrides system preference. */}
  <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var root=document.documentElement; if(t==='dark'){root.classList.add('dark'); root.classList.remove('light');}else if(t==='light'){root.classList.add('light'); root.classList.remove('dark');}else{if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){root.classList.add('dark');root.classList.remove('light');}else{root.classList.add('light');root.classList.remove('dark');}}}catch(e){} })();` }} />
        {/* Static grid background component */}
        <DotGrid />
        {/* Theme toggle (client) */}
        <ThemeToggle />
        {/* Page transition wrapper: animates enter/exit for each page */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
