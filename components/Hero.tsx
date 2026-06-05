import { ArrowRightIcon, TrendIcon, StarIcon, CheckIcon } from "./icons";

const PROOF = [
  { label: "Avg. return on ad spend", value: "4.2×" },
  { label: "Lower cost per lead", value: "−37%" },
  { label: "Qualified leads / quarter", value: "412" },
  { label: "Managed ad spend", value: "₹8Cr+" },
];

const TRUST = ["No lock-in contracts", "OAuth-safe access", "Weekly plain-English reviews"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-60 [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-36">
        {/* ── Copy ─────────────────────────────────── */}
        <div className="min-w-0 max-w-xl">
          <span className="animate-in chip text-ink">
            <span className="badge-dot bg-success" />
            Google Ads systems · for service businesses
          </span>

          <h1
            className="animate-in mt-6 font-display"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--text-display--line-height)",
              letterSpacing: "var(--text-display--letter-spacing)",
              ["--in-delay" as string]: "60ms",
            }}
          >
            Turn ad spend into{" "}
            <span className="relative whitespace-nowrap text-brand">
              predictable
              <svg
                className="absolute -bottom-1.5 left-0 h-[0.4em] w-full text-accent"
                viewBox="0 0 200 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 11C40 5 160 3 198 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            growth.
          </h1>

          <p
            className="animate-in mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            style={{ ["--in-delay" as string]: "130ms" }}
          >
            We build, run, and prove data-driven Google Ads systems for service
            businesses — turning every rupee of spend into measurable, qualified
            leads. No jargon. All the receipts.
          </p>

          <div
            className="animate-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ ["--in-delay" as string]: "200ms" }}
          >
            <a href="#cta" className="btn btn-accent btn-lg">
              Get your free audit
              <ArrowRightIcon size={18} />
            </a>
            <a href="#results" className="btn btn-ghost btn-lg">
              See client results
            </a>
          </div>

          <ul
            className="animate-in mt-7 flex flex-wrap gap-x-5 gap-y-2"
            style={{ ["--in-delay" as string]: "260ms" }}
          >
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 text-sm text-ink-soft">
                <CheckIcon size={17} className="text-success" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Dashboard proof ───────────────────────── */}
        <div className="animate-in relative mx-auto w-full min-w-0 max-w-md lg:mx-0" style={{ ["--in-delay" as string]: "170ms" }}>
          <div className="card relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-success">
                    Live account
                  </span>
                </div>
                <h2 className="mt-1.5 font-display text-xl font-extrabold text-ink">
                  Acme Plumbing Co.
                </h2>
                <p className="mt-0.5 text-sm text-ink-soft">Q3 · Search · last 14 days</p>
              </div>
              <span className="chip border-transparent bg-success-tint text-success">
                <TrendIcon size={15} />
                +18%
              </span>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-2.5">
              {[
                { k: "Leads", v: "412" },
                { k: "CPL", v: "₹184" },
                { k: "ROAS", v: "4.2×" },
              ].map((m) => (
                <div key={m.k} className="rounded-xl bg-tint-sky px-2 py-4 text-center">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-ink-soft">{m.k}</dt>
                  <dd className="tabular mt-1 text-2xl font-extrabold text-ink">{m.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[28, 35, 31, 44, 40, 52, 49, 63, 58, 71, 76, 88].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}px`,
                      background: i > 8 ? "var(--brand)" : "color-mix(in srgb, var(--brand) 24%, white)",
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-soft">
                <span>Conversions · last 12 weeks</span>
                <span className="tabular font-bold text-success">↑ trending</span>
              </div>
            </div>
          </div>

          {/* rating proof under card */}
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-line bg-cloud/70 px-4 py-3 backdrop-blur-sm">
            <div className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} size={15} />
              ))}
            </div>
            <p className="text-sm text-ink-soft">
              <span className="font-bold text-ink">4.9/5</span> from 120+ service businesses
            </p>
          </div>
        </div>
      </div>

      {/* ── Enterprise stat band ──────────────────────── */}
      <div className="relative border-t border-line bg-cloud/50 backdrop-blur-sm">
        <dl className="container-x grid grid-cols-2 gap-y-7 py-9 md:grid-cols-4">
          {PROOF.map((p, i) => (
            <div key={p.label} className={`px-3 ${i % 2 === 1 ? "border-l border-line" : ""} md:border-l ${i === 0 ? "md:border-l-0" : ""}`}>
              <dd className="tabular text-3xl font-extrabold text-ink sm:text-4xl">{p.value}</dd>
              <dt className="mt-1 text-sm text-ink-soft">{p.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
