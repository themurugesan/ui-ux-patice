import Reveal from "./Reveal";
import AuditForm from "./AuditForm";
import { CheckIcon } from "./icons";

const INCLUDED = [
  "A full account audit in 24 hours",
  "Where your budget is leaking — line by line",
  "A keyword & landing-page action plan",
  "Projected cost-per-lead and ROAS",
];

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            {/* atmosphere */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--brand)" }}
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <div>
                <span className="eyebrow text-accent">Now go build it</span>
                <h2 className="mt-4 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl">
                  Ready to turn spend into a system?
                </h2>
                <p className="mt-5 max-w-md text-lg text-white/80">
                  Get a free, no-obligation audit of your Google Ads account.
                  Here&apos;s exactly what you&apos;ll get back:
                </p>

                <ul className="mt-6 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-white">
                        <CheckIcon size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-8">
                <AuditForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
