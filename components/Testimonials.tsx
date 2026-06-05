import Reveal from "./Reveal";
import { QuoteIcon, StarIcon } from "./icons";

const FEATURED = {
  quote:
    "We were burning budget on clicks that never called. Six weeks in, our cost per lead dropped by half and the calendar finally filled with the jobs we actually want.",
  name: "Rohan Mehta",
  role: "Owner · BrightFlow Plumbing",
  initial: "R",
  bg: "var(--brand)",
  metric: { value: "−51%", label: "cost per lead" },
};

const CARDS = [
  {
    quote:
      "Transparent to a fault — I can see every rupee and what it returned. No vanity metrics, just booked appointments.",
    name: "Dr. Anita Sharma",
    role: "Founder · Smilecraft Dental",
    initial: "A",
    bg: "#7c5cff",
    tint: "bg-tint-lilac",
    metric: { value: "3.8×", label: "ROAS in Q1" },
  },
  {
    quote:
      "They treated our account like an engine, not a set-and-forget campaign. Leads now grow month over month.",
    name: "Vikram Nair",
    role: "Director · CoolAir HVAC",
    initial: "V",
    bg: "var(--success)",
    tint: "bg-tint-sky",
    metric: { value: "+62%", label: "qualified leads" },
  },
  {
    quote:
      "The weekly review in plain English is the first agency report I've ever actually read end to end.",
    name: "Sana Kapoor",
    role: "Owner · Kapoor Legal",
    initial: "S",
    bg: "#e0792b",
    tint: "bg-tint-cream",
    metric: { value: "24h", label: "to first lead" },
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
    <section id="testimonials" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-brand">Receipts, not vibes</span>
            <h2
              className="mt-4 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Growth our clients can measure.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              4.9/5 across 120+ service businesses — and every number here is one
              we can show you.
            </p>
          </Reveal>
        </div>

        {/* Featured */}
        <Reveal className="mt-14">
          <figure className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-white sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--brand)" }}
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <QuoteIcon size={40} className="text-accent" />
                <blockquote className="mt-5 font-display text-2xl font-extrabold leading-tight sm:text-[2rem]">
                  {FEATURED.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <Avatar initial={FEATURED.initial} bg={FEATURED.bg} />
                  <span>
                    <span className="block font-semibold text-white">
                      {FEATURED.name}
                    </span>
                    <span className="block text-sm text-white/60">
                      {FEATURED.role}
                    </span>
                  </span>
                </figcaption>
              </div>
              <div className="rounded-3xl bg-white/8 p-7 text-center ring-1 ring-white/10">
                <span className="tabular block text-5xl font-extrabold text-accent">
                  {FEATURED.metric.value}
                </span>
                <span className="mt-2 block text-white/70">
                  {FEATURED.metric.label}
                </span>
              </div>
            </div>
          </figure>
        </Reveal>

        {/* Supporting pastel cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {CARDS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure
                className={`flex h-full flex-col justify-between rounded-3xl border border-line p-7 ${t.tint}`}
              >
                <div>
                  <Stars />
                  <blockquote className="mt-3 leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
                  <div className="flex items-center gap-3">
                    <Avatar initial={t.initial} bg={t.bg} />
                    <span>
                      <span className="block text-sm font-bold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-xs text-ink-soft">
                        {t.role}
                      </span>
                    </span>
                  </div>
                  <span className="text-right">
                    <span className="tabular block text-lg font-extrabold text-brand">
                      {t.metric.value}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
