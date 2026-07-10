"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "NexGrid rebuilt our infrastructure without a single hour of downtime. The team communicates like an in-house department, not a vendor.",
    name: "Elena Marsh",
    role: "COO, Northbay Logistics",
  },
  {
    quote:
      "Our organic traffic tripled in five months. What stood out was how clearly they tied every recommendation back to a number.",
    name: "David Osei",
    role: "CMO, Harlow & Finch",
  },
  {
    quote:
      "They shipped our inventory platform on time and under budget, then stayed on to support it. Exactly the partner we needed.",
    name: "Priya Nair",
    role: "Founder, Vanta Retail Group",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  return (
    <section id="testimonials" className="bg-panel px-6 py-24 text-white">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 max-w-[620px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            Testimonials
          </p>
          <h2 className="text-[1.7rem] font-bold tracking-tight md:text-[2.3rem]">
            What clients say about working with us
          </h2>
        </Reveal>

        <Reveal
          className="mx-auto max-w-[760px] overflow-hidden"
        >
          <div onMouseEnter={pause} onMouseLeave={resume}>
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="w-full flex-none px-4 py-10 text-center sm:px-10">
                  <p className="mb-6 text-[1.25rem] leading-normal text-white/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <strong className="block text-[0.95rem]">{t.name}</strong>
                    <span className="text-[0.85rem] text-white/55">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent"
              >
                &larr;
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 w-2 rounded-full transition-all duration-200 ${
                      i === index ? "scale-125 bg-accent" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent"
              >
                &rarr;
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
