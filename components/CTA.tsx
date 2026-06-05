import Reveal from "./Reveal";
import AuditForm from "./AuditForm";

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] bg-brand px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            {/* texture + glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <div>
                <span className="eyebrow text-white/70">Now go build it</span>
                <h2 className="mt-4 max-w-md font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
                  Ready to turn spend into a system?
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/85">
                  Get a free, no-obligation audit of your Google Ads account.
                  We&apos;ll show you exactly where budget is leaking — and the
                  plan to fix it.
                </p>

                <dl className="mt-8 flex gap-8">
                  {[
                    { v: "24h", l: "audit turnaround" },
                    { v: "₹0", l: "to get started" },
                    { v: "100%", l: "transparent" },
                  ].map((s) => (
                    <div key={s.l}>
                      <dt className="tabular text-2xl font-bold text-white">
                        {s.v}
                      </dt>
                      <dd className="mt-0.5 text-xs text-white/80">{s.l}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl bg-ink/30 p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-8">
                <AuditForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
