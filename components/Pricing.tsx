import Reveal from "./Reveal";
import { CheckIcon, ArrowRightIcon } from "./icons";

const TIERS = [
  {
    name: "Starter",
    tagline: "For businesses new to Google Ads.",
    price: "₹25,000",
    unit: "/ month",
    spend: "Up to ₹2L / mo ad spend",
    features: [
      "Search campaign management",
      "Conversion tracking setup",
      "Live performance dashboard",
      "Monthly strategy call",
      "Email support",
    ],
    cta: "Start with a free audit",
    href: "#cta",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Our most popular plan for scaling lead flow.",
    price: "₹45,000",
    unit: "/ month",
    spend: "Up to ₹8L / mo ad spend",
    features: [
      "Search + Performance Max + LSA",
      "Landing page & CRO support",
      "Call & form attribution",
      "Weekly plain-English reviews",
      "Priority support",
    ],
    cta: "Get your free audit",
    href: "#cta",
    featured: true,
  },
  {
    name: "Scale",
    tagline: "For multi-location & high-spend accounts.",
    price: "Custom",
    unit: "",
    spend: "₹8L+ / mo ad spend",
    features: [
      "Dedicated growth strategist",
      "Server-side tracking & data layer",
      "Multi-location & feed management",
      "Quarterly business reviews",
      "Performance SLA",
    ],
    cta: "Talk to our team",
    href: "#cta",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow eyebrow-plain text-brand">Simple, transparent pricing</span>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Management fees that pay for themselves.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              One flat monthly fee — no percentage-of-spend games. Every plan
              starts with a free audit so you only commit once you&apos;ve seen the plan.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-7 sm:p-8 ${
                  t.featured
                    ? "border-2 border-brand bg-cloud shadow-lg lg:-mt-4 lg:mb-0"
                    : "border border-line bg-cloud"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold text-ink">{t.name}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{t.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="tabular font-display text-4xl font-extrabold text-ink">{t.price}</span>
                  {t.unit && <span className="mb-1 text-sm font-medium text-ink-faint">{t.unit}</span>}
                </div>
                <p className="mt-2 inline-flex w-fit rounded-md bg-tint-sky px-2.5 py-1 text-xs font-semibold text-brand">
                  {t.spend}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-tint text-success">
                        <CheckIcon size={13} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={t.href}
                  className={`btn mt-7 w-full ${t.featured ? "btn-accent" : "btn-ghost"}`}
                >
                  {t.cta}
                  <ArrowRightIcon size={17} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-ink-faint">
            Indicative starting fees — final pricing depends on ad spend, locations,
            and scope. Ad budget is paid directly to Google.{" "}
            <a href="#cta" className="font-semibold text-brand underline-offset-4 hover:underline">
              Get a custom quote →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
