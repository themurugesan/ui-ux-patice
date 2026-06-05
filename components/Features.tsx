import Reveal from "./Reveal";
import { MegaphoneIcon, PenIcon, GaugeIcon, ChartIcon, CheckIcon } from "./icons";

const SERVICES = [
  {
    icon: MegaphoneIcon,
    title: "Google Ads management",
    body: "Search, Performance Max, and Local Services Ads — structured to capture high-intent demand and cut broad-match waste.",
    tags: ["Search", "PMax", "LSA"],
  },
  {
    icon: PenIcon,
    title: "Landing pages & CRO",
    body: "Conversion-focused pages built as one system with your ads, so every click has a clear, fast path to a qualified lead.",
    tags: ["Copy", "Design", "A/B tests"],
  },
  {
    icon: GaugeIcon,
    title: "Conversion tracking",
    body: "Server-side tracking, call attribution, and offline conversions — so optimization is based on revenue, not guesses.",
    tags: ["GA4", "GTM", "Calls"],
  },
  {
    icon: ChartIcon,
    title: "Reporting & insights",
    body: "A live dashboard from day one plus a weekly review in plain English. Every claim earns a number.",
    tags: ["Live dashboard", "Weekly review"],
  },
];

const ROWS = [
  { name: "Emergency plumbing", clicks: "1,204", cpl: "₹162", roas: "4.8×", up: true },
  { name: "Water heater install", clicks: "842", cpl: "₹201", roas: "3.9×", up: true },
  { name: "Drain cleaning", clicks: "1,011", cpl: "₹176", roas: "4.3×", up: true },
  { name: "Leak detection", clicks: "388", cpl: "₹248", roas: "2.6×", up: false },
];

const BENEFITS = [
  "Real-time spend, leads, and ROAS — no waiting for month-end",
  "Call & form attribution down to the keyword",
  "Plain-English weekly review with the next move",
];

export default function Features() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brand">What we do</span>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              A growth engine, not a pile of campaigns.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Strategy → Test → Scale → Report. One accountable system where every
              rupee of spend ties back to a measurable result.
            </p>
          </Reveal>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <article className="surface surface-hover flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-md bg-tint-sky px-2 py-1 text-xs font-semibold text-brand">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Platform panel */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-navy-900">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* copy */}
              <div className="flex min-w-0 flex-col justify-center p-8 sm:p-10">
                <span className="eyebrow text-accent">Total transparency</span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  Your numbers, live and honest.
                </h3>
                <p className="mt-4 text-white/70">
                  Most agencies hide behind month-end PDFs. You get a real-time
                  dashboard and the full picture — wins and weak spots alike.
                </p>
                <ul className="mt-6 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-white">
                        <CheckIcon size={13} />
                      </span>
                      <span className="text-[0.95rem]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* dashboard mock */}
              <div className="min-w-0 border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-800/60">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="ml-2 font-mono text-[0.7rem] text-white/45">app.searchadsbro.com</span>
                  </div>
                  <div className="flex gap-5 border-b border-white/10 px-4 text-[0.8rem]">
                    {["Overview", "Campaigns", "Keywords", "Spend"].map((t, i) => (
                      <span key={t} className={`relative py-3 ${i === 1 ? "font-semibold text-white" : "text-white/45"}`}>
                        {t}
                        {i === 1 && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent" />}
                      </span>
                    ))}
                  </div>
                  <div className="p-4">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[0.65rem] uppercase tracking-wide text-white/40">
                          <th className="pb-2.5 font-medium">Campaign</th>
                          <th className="pb-2.5 text-right font-medium">Clicks</th>
                          <th className="pb-2.5 text-right font-medium">CPL</th>
                          <th className="pb-2.5 text-right font-medium">ROAS</th>
                        </tr>
                      </thead>
                      <tbody className="text-[0.82rem]">
                        {ROWS.map((r) => (
                          <tr key={r.name} className="border-t border-white/10">
                            <td className="py-2.5 pr-2 font-medium text-white/90">{r.name}</td>
                            <td className="tabular py-2.5 text-right text-white/65">{r.clicks}</td>
                            <td className="tabular py-2.5 text-right text-white/65">{r.cpl}</td>
                            <td className="py-2.5 text-right">
                              <span className={`tabular font-semibold ${r.up ? "text-[#46d39a]" : "text-accent"}`}>{r.roas}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-4 flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5">
                      <span className="text-[0.8rem] text-white/60">Blended account ROAS</span>
                      <span className="tabular text-base font-extrabold text-accent">4.2×</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
