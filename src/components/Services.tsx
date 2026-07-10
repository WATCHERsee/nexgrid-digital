import { Code2, LineChart, Server, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Web & Software Development",
    desc: "Custom web apps, internal tools, and platforms engineered for reliability and scale.",
  },
  {
    icon: LineChart,
    title: "Digital Marketing & SEO",
    desc: "Data-driven campaigns and search strategy that turn traffic into qualified pipeline.",
  },
  {
    icon: Server,
    title: "IT Consulting & Infrastructure",
    desc: "Cloud architecture, security, and support that keeps critical systems running.",
  },
  {
    icon: Sparkles,
    title: "Branding & Growth Strategy",
    desc: "Positioning, identity, and roadmaps that align every team around one growth plan.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 max-w-[620px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            What We Do
          </p>
          <h2 className="text-[1.7rem] font-bold tracking-tight md:text-[2.3rem]">
            Core services built for growth
          </h2>
          <p className="mt-2 text-[1.02rem] text-gray-500 dark:text-gray-400">
            Four focused disciplines, one accountable team — so nothing falls
            through the cracks between vendors.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} as="article">
              <div className="group h-full rounded-[10px] border border-line bg-background p-7 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-md">
                <span className="mb-[18px] inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-tint text-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                  <service.icon className="h-[22px] w-[22px]" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[1.1rem] font-semibold">
                  {service.title}
                </h3>
                <p className="text-[0.92rem] text-gray-500 dark:text-gray-400">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
