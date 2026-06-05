import { ArrowRightIcon, TrendIcon, StarIcon } from "./icons";

const AVATARS = [
  { i: "R", bg: "var(--brand)" },
  { i: "A", bg: "#7c5cff" },
  { i: "V", bg: "var(--success)" },
  { i: "S", bg: "#e0792b" },
  { i: "M", bg: "var(--ink)" },
];

const PROOF = [
  { label: "Avg. ROAS", value: "4.2×" },
  { label: "Cost / lead", value: "₹184" },
  { label: "Leads / quarter", value: "412" },
  { label: "Wasted spend cut", value: "−37%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="container-x relative grid items-center gap-12 pb-14 pt-28 sm:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24 lg:pt-36">
        {/* ── Copy ─────────────────────────────────────────── */}
        <div className="max-w-xl">
          <span className="animate-in chip text-ink">
            <span className="badge-dot bg-success" />
            Google Ads, done right · for service businesses
          </span>

          <h1
            className="animate-in mt-6 font-display"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--text-display--line-height)",
              letterSpacing: "var(--text-display--letter-spacing)",
              ["--in-delay" as string]: "70ms",
            }}
          >
            Turn ad spend into{" "}
            <span className="relative whitespace-nowrap text-brand">
              predictable
              <svg
                className="absolute -bottom-2 left-0 h-[0.42em] w-full text-accent"
                viewBox="0 0 200 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 11C40 5 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            growth.
          </h1>

          <p
            className="animate-in mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            style={{ ["--in-delay" as string]: "140ms" }}
          >
            We build, run, and prove Google Ads systems for service businesses
            — without the agency jargon, with all the receipts.
          </p>

          <div
            className="animate-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ ["--in-delay" as string]: "210ms" }}
          >
            <a href="#cta" className="btn btn-accent">
              Start a free audit
              <ArrowRightIcon size={18} />
            </a>
            <a href="#testimonials" className="btn btn-ghost">
              See client results
            </a>
          </div>

          {/* social proof cluster */}
          <div
            className="animate-in mt-9 flex flex-wrap items-center gap-4"
            style={{ ["--in-delay" as string]: "280ms" }}
          >
            <div className="flex -space-x-3" aria-hidden="true">
              {AVATARS.map((a, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper font-display text-sm font-bold text-white"
                  style={{ background: a.bg }}
                >
                  {a.i}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={15} aria-hidden="true" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-ink">4.9/5</span>
              </div>
              <p className="text-sm text-ink-soft">
                Join 120+ service businesses growing with us
              </p>
            </div>
          </div>
        </div>

        {/* ── Receipts card ────────────────────────────────── */}
        <div
          className="animate-in relative mx-auto w-full max-w-md lg:mx-0"
          style={{ ["--in-delay" as string]: "180ms" }}
        >
          {/* floating chips */}
          {/* <div className="animate-float absolute -left-4 top-8 z-10 hidden rounded-2xl border border-line bg-cloud px-3.5 py-2.5 shadow-pop sm:block">
            <p className="text-[0.7rem] font-medium text-ink-soft">This week</p>
            <p className="tabular text-base font-bold text-success">+34 leads</p>
          </div> */}
          <div
            className="absolute -right-3 bottom-16 z-10 hidden rounded-2xl border border-line bg-cloud px-3.5 py-2.5 shadow-pop sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="text-[0.7rem] font-medium text-ink-soft">Cost / lead</p>
            <p className="tabular text-base font-bold text-ink">↓ ₹184</p>
          </div>

          <div className="card relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-extrabold text-ink">
                  Acme Plumbing Co.
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Q3 · Search · last 14 days
                </p>
              </div>
              <span className="chip border-transparent bg-[color-mix(in_srgb,var(--success)_14%,white)] text-success">
                <TrendIcon size={16} />
                +18%
              </span>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Leads", v: "412" },
                { k: "CPL", v: "₹184" },
                { k: "ROAS", v: "4.2×" },
              ].map((m) => (
                <div key={m.k} className="rounded-2xl bg-tint-sky px-3 py-4 text-center">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-soft">
                    {m.k}
                  </dt>
                  <dd className="tabular mt-1 text-2xl font-extrabold text-ink">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[28, 35, 31, 44, 40, 52, 49, 63, 58, 71, 76, 88].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-md"
                    style={{
                      height: `${h}px`,
                      background:
                        i > 8
                          ? "var(--brand)"
                          : "color-mix(in srgb, var(--brand) 26%, white)",
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
        </div>
      </div>

      {/* trust strip */}
      <div className="relative border-t border-line/70 bg-cloud/40 backdrop-blur-sm">
        <dl className="container-x grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="px-2 text-center sm:border-l sm:border-line first:sm:border-l-0">
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {p.label}
              </dt>
              <dd className="tabular mt-1 text-3xl font-extrabold text-ink">
                {p.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
