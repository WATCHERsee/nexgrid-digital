"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      // Only auto-follow the OS while the user hasn't picked an explicit theme.
      if (localStorage.getItem("theme")) return;
      document.documentElement.classList.toggle("dark", e.matches);
      setDark(e.matches);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {mounted && (
        <>
          <Sun
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
              dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
            strokeWidth={1.8}
          />
          <Moon
            className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
              dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            }`}
            strokeWidth={1.8}
          />
        </>
      )}
    </button>
  );
}
