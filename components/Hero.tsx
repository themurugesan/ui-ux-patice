import { ArrowRightIcon, CheckIcon, TrendIcon } from "./icons";

const PROOF = [
  { label: "Avg. ROAS", value: "4.2×" },
  { label: "Cost / lead", value: "₹184" },
  { label: "Leads / quarter", value: "412" },
  { label: "MoM growth", value: "+18%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* atmosphere: grid texture + brand glow */}
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 38%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* ── Copy ─────────────────────────────────────────── */}
        <div className="max-w-xl">
          <span className="animate-in eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-cloud px-3 py-1.5 text-ink">
            <span className="badge-dot bg-success" />
            Google Ads · for service businesses
          </span>

          <h1
            className="animate-in mt-6 font-display font-extrabold text-ink"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--text-display--line-height)",
              letterSpacing: "var(--text-display--letter-spacing)",
              ["--in-delay" as string]: "70ms",
            }}
          >
            Turn ad spend into a{" "}
            <span className="relative whitespace-nowrap text-brand">
              predictable
              <svg
                className="absolute -bottom-1 left-0 h-[0.5em] w-full text-accent"
                viewBox="0 0 200 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 11C40 5 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            growth engine.
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
              Start an audit
              <ArrowRightIcon size={18} />
            </a>
            <a href="#testimonials" className="btn btn-ghost">
              See results
            </a>
          </div>

          <ul
            className="animate-in mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft"
            style={{ ["--in-delay" as string]: "280ms" }}
          >
            {["No lock-in contracts", "OAuth — we never write without confirmation", "Weekly review in plain English"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckIcon size={18} className="text-success" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ── Receipts card ────────────────────────────────── */}
        <div
          className="animate-in relative mx-auto w-full max-w-md lg:mx-0"
          style={{ ["--in-delay" as string]: "180ms" }}
        >
          {/* floating accent chip */}
          <div className="absolute -left-3 -top-3 z-10 hidden rotate-[-4deg] rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white shadow-pop sm:block">
            <span className="tabular text-accent">Q3</span> · Search · 14 days
          </div>

          <div className="card relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">
                  Acme Plumbing Co.
                </h2>
                <p className="mt-1 text-sm text-ink-soft">Live campaign snapshot</p>
              </div>
              <span className="badge bg-[color-mix(in_srgb,var(--success)_14%,white)] text-success">
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
                <div
                  key={m.k}
                  className="rounded-lg bg-surface px-3 py-4 text-center"
                >
                  <dt className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-soft">
                    {m.k}
                  </dt>
                  <dd className="tabular mt-1 text-2xl font-bold text-ink">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>

            {/* mini bar chart */}
            <div className="mt-6">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[28, 35, 31, 44, 40, 52, 49, 63, 58, 71, 76, 88].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}px`,
                      background:
                        i > 8 ? "var(--brand)" : "color-mix(in srgb, var(--brand) 30%, white)",
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-soft">
                <span>Conversions, last 12 weeks</span>
                <span className="tabular font-semibold text-success">↑ trending</span>
              </div>
            </div>
          </div>

          {/* ground shadow accent */}
          <div
            className="absolute inset-x-6 -bottom-3 h-6 rounded-full opacity-40 blur-xl"
            style={{ background: "var(--brand)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* trust strip */}
      <div className="border-y border-line bg-cloud/60">
        <dl className="container-x grid grid-cols-2 divide-line py-6 sm:grid-cols-4 sm:divide-x">
          {PROOF.map((p, i) => (
            <div
              key={p.label}
              className={`px-2 py-2 text-center sm:px-6 ${i === 0 ? "" : ""}`}
            >
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {p.label}
              </dt>
              <dd className="tabular mt-1 text-2xl font-bold text-ink sm:text-3xl">
                {p.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
