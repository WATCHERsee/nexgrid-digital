import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const STATS = [
  { target: 200, suffix: "+", label: "Projects delivered" },
  { target: 98, suffix: "%", label: "Client retention" },
  { target: 45, suffix: "+", label: "Industries served" },
  { target: 24, suffix: "/7", label: "Infrastructure monitoring" },
];

export default function Stats() {
  return (
    <section id="why-us" className="bg-ink px-6 py-24 text-white">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 max-w-[620px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            Why Us
          </p>
          <h2 className="text-[1.7rem] font-bold tracking-tight md:text-[2.3rem]">
            Results our clients can point to
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-[10px] border border-white/10 p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/5">
                <StatCounter target={stat.target} suffix={stat.suffix} />
                <span className="mt-1.5 block text-[0.88rem] text-white/60">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
