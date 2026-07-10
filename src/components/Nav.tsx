"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#work", label: "Case Studies" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[72px]">
        <a href="#top" className="font-extrabold text-lg tracking-tight">
          NexGrid<span className="text-accent">Digital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 dark:text-gray-300 py-1 transition-colors duration-200 hover:text-ink after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-accent px-[18px] py-[9px] text-sm font-semibold text-white shadow-[0_1px_2px_rgba(47,93,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_10px_20px_rgba(47,93,255,0.28)]"
          >
            Get a Quote
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9"
          >
            <span
              className={`h-[2px] w-full rounded bg-ink transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 border-b border-line bg-background px-6 py-5 shadow-md">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-accent px-[18px] py-[9px] text-sm font-semibold text-white"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
