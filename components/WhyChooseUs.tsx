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
    body: "Precision in every keyword, bid, and targeting decision — backed by data, so minimal waste meets maximum return on ad spend.",
    span: "lg:col-span-2",
    feature: true,
  },
  {
    id: "02",
    title: "Transparent",
    icon: ShieldIcon,
    body: "No hidden tactics, no vanity metrics. You see exactly where the money goes and what it generates.",
  },
  {
    id: "03",
    title: "Creative",
    icon: SparkIcon,
    body: "Fresh angles, hooks, and funnels that stand out in crowded markets and actually convert.",
  },
  {
    id: "04",
    title: "Bold",
    icon: BoltIcon,
    body: "We test aggressively and challenge convention to unlock higher performance and scalable growth.",
  },
  {
    id: "05",
    title: "Reliable",
    icon: ChartIcon,
    body: "Consistent results through disciplined execution and accountability — predictable growth you can plan around.",
    span: "lg:col-span-2",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brand">Why Search Ads Bro</span>
            <h2
              className="mt-4 font-display font-extrabold"
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.id}
                delay={i * 80}
                className={`group ${v.span ?? ""} ${
                  v.feature ? "" : ""
                }`}
              >
                <article
                  className={`flex h-full flex-col rounded-xl border p-6 transition-all duration-300 sm:p-7 ${
                    v.feature
                      ? "border-transparent bg-ink text-white"
                      : "border-line bg-cloud hover:-translate-y-1 hover:shadow-card"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                      v.feature
                        ? "bg-white/10 text-accent"
                        : "bg-surface text-brand"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span
                      className={`tabular text-xs font-semibold ${
                        v.feature ? "text-accent" : "text-brand"
                      }`}
                    >
                      V/{v.id}
                    </span>
                    <h3
                      className={`font-display text-xl font-bold ${
                        v.feature ? "text-white" : "text-ink"
                      }`}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-2 leading-relaxed ${
                      v.feature ? "text-white/75" : "text-ink-soft"
                    } ${v.feature ? "max-w-md" : ""}`}
                  >
                    {v.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
