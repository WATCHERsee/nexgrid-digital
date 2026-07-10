import Reveal from "./Reveal";

const META = [
  { value: "200+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "12+", label: "Years in business" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-surface to-background px-6 pt-24 pb-18 md:pt-24 md:pb-18"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[760px]">
          <Reveal>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
              IT &amp; Digital Marketing, Under One Roof
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mb-5 text-[2.2rem] leading-[1.12] font-extrabold tracking-tight md:text-[3.4rem]">
              Technology and marketing that{" "}
              <span className="text-accent">move your business forward</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-8 max-w-[600px] text-[1.1rem] text-gray-500 dark:text-gray-400">
              NexGrid Digital partners with growing companies to build reliable
              software, run infrastructure, and drive measurable marketing
              results — without the agency runaround.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mb-14 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_1px_2px_rgba(47,93,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_10px_20px_rgba(47,93,255,0.28)]"
              >
                Book a Call
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-white/15 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                See Our Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-7 border-t border-line pt-8">
              {META.map((item, i) => (
                <div key={item.label} className="flex items-center gap-7">
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[1.6rem] font-extrabold">
                      {item.value}
                    </strong>
                    <span className="text-[0.85rem] text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                  </div>
                  {i < META.length - 1 && (
                    <div className="h-8 w-px bg-line" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
