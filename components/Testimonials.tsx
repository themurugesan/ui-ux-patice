import Reveal from "./Reveal";
import { QuoteIcon, StarIcon } from "./icons";

const FEATURED = {
  quote:
    "We were burning budget on clicks that never called. Six weeks in, our cost per lead dropped by half and the calendar finally filled with the jobs we actually want. The weekly review is the first agency report I've ever read end to end.",
  name: "Rohan Mehta",
  role: "Owner",
  company: "BrightFlow Plumbing",
  metric: { value: "−51%", label: "cost per lead" },
};

const MORE = [
  {
    quote:
      "Transparent to a fault — I can see every rupee and what it returned. No vanity metrics, just booked appointments.",
    name: "Dr. Anita Sharma",
    role: "Founder",
    company: "Smilecraft Dental",
    metric: { value: "3.8×", label: "ROAS in Q1" },
  },
  {
    quote:
      "They treated our account like an engine, not a set-and-forget campaign. Leads now grow month over month.",
    name: "Vikram Nair",
    role: "Director",
    company: "CoolAir HVAC",
    metric: { value: "+62%", label: "qualified leads" },
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={16} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-brand">Receipts, not vibes</span>
            <h2
              className="mt-4 font-display font-extrabold"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Growth our clients can measure.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center gap-3 rounded-full border border-line bg-cloud px-4 py-2">
              <Stars />
              <span className="text-sm font-semibold text-ink">
                4.9/5 · 120+ service businesses
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* Featured */}
          <Reveal className="lg:col-span-2">
            <figure className="flex h-full flex-col justify-between overflow-hidden rounded-xl bg-ink p-8 text-white sm:p-10">
              <div>
                <QuoteIcon size={40} className="text-accent" />
                <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-[1.75rem]">
                  {FEATURED.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/12 pt-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white"
                    aria-hidden="true"
                  >
                    {FEATURED.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">
                      {FEATURED.name}
                    </span>
                    <span className="block text-sm text-white/60">
                      {FEATURED.role} · {FEATURED.company}
                    </span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="tabular block text-3xl font-bold text-accent">
                    {FEATURED.metric.value}
                  </span>
                  <span className="block text-sm text-white/60">
                    {FEATURED.metric.label}
                  </span>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Stacked */}
          <div className="grid gap-4">
            {MORE.map((t, i) => (
              <Reveal key={t.company} delay={i * 90}>
                <figure className="flex h-full flex-col justify-between rounded-xl border border-line bg-cloud p-6">
                  <div>
                    <Stars />
                    <blockquote className="mt-3 leading-relaxed text-ink">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-xs text-ink-soft">
                        {t.role} · {t.company}
                      </span>
                    </span>
                    <span className="text-right">
                      <span className="tabular block text-lg font-bold text-brand">
                        {t.metric.value}
                      </span>
                      <span className="block text-[0.7rem] text-ink-soft">
                        {t.metric.label}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
