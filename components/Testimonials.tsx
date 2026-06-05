import Reveal from "./Reveal";
import { QuoteIcon, StarIcon, TrendIcon } from "./icons";

const CASES = [
  { metric: "−51%", label: "cost per lead", who: "BrightFlow Plumbing", time: "in 6 weeks" },
  { metric: "3.8×", label: "return on ad spend", who: "Smilecraft Dental", time: "in Q1" },
  { metric: "+62%", label: "qualified leads", who: "CoolAir HVAC", time: "in 90 days" },
];

const FEATURED = {
  quote:
    "We were burning budget on clicks that never called. Six weeks in, our cost per lead dropped by half and the calendar finally filled with the jobs we actually want.",
  name: "Rohan Mehta",
  role: "Owner · BrightFlow Plumbing",
  initial: "R",
  bg: "var(--brand)",
};

const QUOTES = [
  {
    quote:
      "Transparent to a fault — I can see every rupee and exactly what it returned. No vanity metrics, just booked appointments.",
    name: "Dr. Anita Sharma",
    role: "Founder · Smilecraft Dental",
    initial: "A",
    bg: "#6b5bd6",
  },
  {
    quote:
      "They treated our account like an engine, not a set-and-forget campaign. Leads now grow month over month.",
    name: "Vikram Nair",
    role: "Director · CoolAir HVAC",
    initial: "V",
    bg: "var(--success)",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={15} aria-hidden="true" />
      ))}
    </div>
  );
}

function Avatar({ initial, bg }: { initial: string; bg: string }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="results" className="section bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brand">Proven results</span>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Growth our clients can measure.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Real service businesses, real numbers — and every figure here is one
              we can show you in the account.
            </p>
          </Reveal>
        </div>

        {/* Case-study metrics */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.who} delay={i * 70}>
              <div className="surface flex h-full flex-col p-6">
                <div className="flex items-center gap-2 text-success">
                  <TrendIcon size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Result</span>
                </div>
                <span className="tabular mt-3 text-4xl font-extrabold text-ink">{c.metric}</span>
                <span className="mt-1 text-sm font-medium text-ink-soft">{c.label}</span>
                <div className="mt-4 border-t border-line pt-3 text-sm">
                  <span className="font-semibold text-ink">{c.who}</span>
                  <span className="text-ink-faint"> · {c.time}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-7 text-white sm:p-8">
              <div>
                <QuoteIcon size={36} className="text-accent" />
                <blockquote className="mt-5 font-display text-xl font-bold leading-snug">
                  {FEATURED.quote}
                </blockquote>
              </div>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/12 pt-5">
                <Avatar initial={FEATURED.initial} bg={FEATURED.bg} />
                <span>
                  <span className="block font-semibold text-white">{FEATURED.name}</span>
                  <span className="block text-sm text-white/60">{FEATURED.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {QUOTES.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-cloud p-7">
                  <div>
                    <Stars />
                    <blockquote className="mt-3 leading-relaxed text-ink">“{t.quote}”</blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <Avatar initial={t.initial} bg={t.bg} />
                    <span>
                      <span className="block text-sm font-bold text-ink">{t.name}</span>
                      <span className="block text-xs text-ink-faint">{t.role}</span>
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
