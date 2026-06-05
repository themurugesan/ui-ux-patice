import Reveal from "./Reveal";
import { ArrowRightIcon, TargetIcon, ShieldIcon, SparkIcon, BoltIcon, GaugeIcon } from "./icons";

const VALUES = [
  {
    id: "01",
    title: "Accurate",
    icon: TargetIcon,
    body: "Precision in every keyword, bid, and audience — backed by data, so minimal waste meets maximum return on ad spend.",
  },
  {
    id: "02",
    title: "Transparent",
    icon: ShieldIcon,
    body: "No hidden tactics, no vanity metrics. You see exactly where the money goes and what it generates — in real time.",
  },
  {
    id: "03",
    title: "Creative",
    icon: SparkIcon,
    body: "Fresh angles, hooks, and funnels that stand out in crowded local markets and turn clicks into booked jobs.",
  },
  {
    id: "04",
    title: "Bold",
    icon: BoltIcon,
    body: "We test aggressively and challenge convention to unlock higher performance and genuinely scalable growth.",
  },
  {
    id: "05",
    title: "Reliable",
    icon: GaugeIcon,
    body: "Consistent results through disciplined execution and accountability — predictable growth you can plan around.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section bg-mist">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow text-brand">Why Search Ads Bro</span>
              <h2
                className="mt-5 font-display"
                style={{
                  fontSize: "var(--text-h1)",
                  lineHeight: "var(--text-h1--line-height)",
                  letterSpacing: "var(--text-h1--letter-spacing)",
                }}
              >
                The principles behind every account we run.
              </h2>
              <p className="mt-5 text-lg text-ink-soft">
                Five non-negotiables that shape how we hire, ship, and report —
                and why service businesses stay with us quarter after quarter.
              </p>
              <a href="#cta" className="btn btn-primary mt-7">
                Get a free audit
                <ArrowRightIcon size={18} />
              </a>
            </Reveal>
          </div>

          {/* Values grid */}
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.id} delay={i * 60}>
                  <article className="group flex h-full flex-col bg-cloud p-7 transition-colors hover:bg-tint-sky/60">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint-sky text-brand">
                        <Icon size={22} />
                      </span>
                      <span className="tabular text-xs font-bold text-ink-faint">V/{v.id}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{v.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{v.body}</p>
                  </article>
                </Reveal>
              );
            })}

            {/* Accent stat tile fills the 6th cell */}
            <Reveal delay={300}>
              <article className="flex h-full flex-col justify-center bg-ink p-7 text-white">
                <span className="tabular text-4xl font-extrabold text-accent">98%</span>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">
                  client retention — because predictable results compound, and
                  trust does too.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
