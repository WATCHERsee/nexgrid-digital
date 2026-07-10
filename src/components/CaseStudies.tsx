import Reveal from "./Reveal";

const CASES = [
  {
    tag: "IT Infrastructure",
    name: "Northbay Logistics",
    desc: "Migrated legacy on-prem servers to a monitored cloud stack.",
    stats: [
      { value: "99.98%", label: "Uptime" },
      { value: "-40%", label: "Infra cost" },
    ],
  },
  {
    tag: "Digital Marketing",
    name: "Harlow & Finch",
    desc: "Rebuilt SEO foundation and paid funnel across three markets.",
    stats: [
      { value: "3.2x", label: "Organic traffic" },
      { value: "+68%", label: "Qualified leads" },
    ],
  },
  {
    tag: "Software Development",
    name: "Vanta Retail Group",
    desc: "Built a custom inventory platform replacing three disconnected tools.",
    stats: [
      { value: "12hrs", label: "Saved weekly" },
      { value: "99.9%", label: "Order accuracy" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-12 max-w-[620px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            Case Studies
          </p>
          <h2 className="text-[1.7rem] font-bold tracking-tight md:text-[2.3rem]">
            Recent work, measured in outcomes
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} as="article">
              <div className="h-full rounded-[10px] border border-line bg-background p-7 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-md">
                <div className="mb-3.5 inline-block rounded bg-accent-tint px-2.5 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-accent">
                  {item.tag}
                </div>
                <h3 className="mb-2 text-[1.1rem] font-semibold">{item.name}</h3>
                <p className="mb-5 text-[0.92rem] text-gray-500 dark:text-gray-400">{item.desc}</p>
                <div className="flex gap-7 border-t border-line pt-[18px]">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong className="block text-[1.25rem] font-extrabold">
                        {stat.value}
                      </strong>
                      <span className="text-[0.8rem] text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
