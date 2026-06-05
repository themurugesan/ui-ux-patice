import Reveal from "./Reveal";
import {
  SparkIcon,
  TargetIcon,
  ShieldIcon,
  BoltIcon,
  ChartIcon,
} from "./icons";

const VALUES = [
  {
    id: "01",
    title: "Accurate",
    icon: TargetIcon,
    body: "Precision in every keyword, bid, and targeting decision — backed by data, so minimal waste meets maximum return.",
    tint: "bg-tint-sky",
    ink: "text-brand",
  },
  {
    id: "02",
    title: "Transparent",
    icon: ShieldIcon,
    body: "No hidden tactics, no vanity metrics. You see exactly where the money goes and what it generates.",
    tint: "bg-tint-cream",
    ink: "text-accent-strong",
  },
  {
    id: "03",
    title: "Creative",
    icon: SparkIcon,
    body: "Fresh angles, hooks, and funnels that stand out in crowded markets and actually convert.",
    tint: "bg-tint-lilac",
    ink: "text-[#7c5cff]",
  },
  {
    id: "04",
    title: "Bold",
    icon: BoltIcon,
    body: "We test aggressively and challenge convention to unlock higher performance and scalable growth.",
    tint: "bg-tint-sky",
    ink: "text-brand",
  },
  {
    id: "05",
    title: "Reliable",
    icon: ChartIcon,
    body: "Consistent results through disciplined execution and accountability — growth you can plan around.",
    tint: "bg-[color-mix(in_srgb,var(--success)_12%,white)]",
    ink: "text-success",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-brand">Why Search Ads Bro</span>
            <h2
              className="mx-auto mt-4 max-w-xl font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Five things service businesses count on.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              The shorthand for how we hire, ship, and answer the phone — and
              why clients stay quarter after quarter.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.id} delay={i * 70}>
                <article className="soft-card flex h-full flex-col p-7">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${v.tint} ${v.ink}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="mt-5 flex items-baseline gap-2.5">
                    <span className="tabular text-xs font-bold text-ink-soft">
                      V/{v.id}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-ink">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-2 leading-relaxed text-ink-soft">{v.body}</p>
                </article>
              </Reveal>
            );
          })}

          {/* CTA tile in the 6th slot */}
          <Reveal delay={350}>
            <article className="flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-white">
              <div>
                <h3 className="font-display text-xl font-extrabold text-white">
                  See it on your own account.
                </h3>
                <p className="mt-2 leading-relaxed text-white/70">
                  We&apos;ll audit your Google Ads for free and show you exactly
                  where the wins are.
                </p>
              </div>
              <a href="#cta" className="btn btn-accent mt-6 self-start">
                Get my audit
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
