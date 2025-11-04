"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-white/10">
      <nav className="container-std py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Darren</Link>

        <button
          className="md:hidden rounded-lg border border-white/15 px-3 py-1 text-sm"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="a-hover">Discover Pages</a>
          <a href="#projects" className="a-hover">Projects</a>
          <a href="#contact" className="a-hover">Contact</a>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container-std py-3 flex flex-col gap-3 text-sm">
            <a href="#about" onClick={() => setOpen(false)} className="a-hover">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="a-hover">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="a-hover">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
