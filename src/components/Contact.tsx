"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const SERVICES = [
  "Web & Software Development",
  "Digital Marketing & SEO",
  "IT Consulting & Infrastructure",
  "Branding & Growth Strategy",
];

const CONTACT_INFO = [
  { label: "Email", value: "hello@nexgriddigital.com" },
  { label: "Phone", value: "+1 (555) 019-2044" },
  { label: "Office", value: "410 Market St, Suite 220, Austin, TX" },
];

const inputClasses =
  "rounded-md border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 px-3.5 py-2.5 text-[0.95rem] text-ink transition-all duration-200 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
              Get a Quote
            </p>
            <h2 className="mb-2 text-[1.7rem] font-bold tracking-tight md:text-[2.3rem]">
              Tell us about your project
            </h2>
            <p className="text-[1.02rem] text-gray-500 dark:text-gray-400">
              Fill out the form or book a call directly — we typically respond
              within one business day.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-white/15 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Book a Call on Calendly
            </a>

            <ul className="mt-10 flex flex-col gap-4 border-t border-line pt-6">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5">
                  <strong className="text-[0.85rem] text-gray-500 dark:text-gray-400">
                    {item.label}
                  </strong>
                  <span className="text-[0.98rem] font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[18px] rounded-[10px] border border-line bg-surface p-8"
            >
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[0.85rem] font-semibold">
                    Full name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[0.85rem] font-semibold">
                    Work email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-[0.85rem] font-semibold">
                    Company
                  </label>
                  <input id="company" name="company" type="text" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[0.85rem] font-semibold">
                    Service needed
                  </label>
                  <select id="service" name="service" className={inputClasses}>
                    {SERVICES.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.85rem] font-semibold">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_1px_2px_rgba(47,93,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_10px_20px_rgba(47,93,255,0.28)]"
              >
                Request a Quote
              </button>

              <p aria-live="polite" className="min-h-[1.2em] text-[0.88rem] text-accent">
                {submitted &&
                  "Thanks — we received your request and will be in touch within one business day."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
