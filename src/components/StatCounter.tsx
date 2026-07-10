"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  target: number;
  suffix?: string;
};

export default function StatCounter({ target, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(reduced ? target : 0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1200;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, reduced]);

  return (
    <span ref={ref} className="block text-[2.6rem] font-extrabold tracking-tight text-accent">
      {value}
      {suffix}
    </span>
  );
}
