import Reveal from "./Reveal";
import { TargetIcon, CompassIcon, TrendIcon, ChartIcon } from "./icons";

const FEATURES = [
  {
    icon: TargetIcon,
    title: "Precision targeting",
    body: "Right intent, right time. We cut broad-match waste and put budget on the searches that actually book jobs.",
  },
  {
    icon: CompassIcon,
    title: "Conversion-focused funnels",
    body: "Keywords, ad copy, and landing pages built as one system — every step engineered toward a qualified lead.",
  },
  {
    icon: TrendIcon,
    title: "Continuous optimization",
    body: "Always-on testing on bids, creative, and audiences. The account compounds instead of plateauing.",
  },
  {
    icon: ChartIcon,
    title: "Transparent reporting",
    body: "A live dashboard from minute one and a weekly review in plain English. Receipts, never vibes.",
  },
];

const ROWS = [
  { name: "Emergency plumbing", clicks: "1,204", cpl: "₹162", roas: "4.8×", up: true },
  { name: "Water heater install", clicks: "842", cpl: "₹201", roas: "3.9×", up: true },
  { name: "Drain cleaning", clicks: "1,011", cpl: "₹176", roas: "4.3×", up: true },
  { name: "Leak detection", clicks: "388", cpl: "₹248", roas: "2.6×", up: false },
];

export default function Features() {
  return (
    <section id="features" className="section bg-surface-soft">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: narrative + feature list */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <span className="eyebrow text-brand">What we build</span>
              <h2
                className="mt-4 font-display font-extrabold"
                style={{
                  fontSize: "var(--text-h1)",
                  lineHeight: "var(--text-h1--line-height)",
                  letterSpacing: "var(--text-h1--letter-spacing)",
                }}
              >
                A growth engine, not a pile of campaigns.
              </h2>
              <p className="mt-4 max-w-md text-lg text-ink-soft">
                Strategy → Test → Scale → Report. One data-driven system where
                every rupee of spend is accountable to a result.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={i * 80} as="li">
                    <div className="flex h-full flex-col bg-cloud p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand">
                        <Icon size={20} />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {f.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Right: product UI mock */}
          <Reveal delay={120}>
            <div className="card overflow-hidden bg-dark text-white">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  app.searchadsbro.com/dashboard
                </span>
              </div>

              {/* tabs */}
              <div className="flex gap-6 border-b border-white/10 px-5">
                {["Overview", "Campaigns", "Keywords", "Spend"].map((t, i) => (
                  <span
                    key={t}
                    className={`relative py-3.5 text-sm ${
                      i === 1 ? "font-semibold text-white" : "text-white/55"
                    }`}
                  >
                    {t}
                    {i === 1 && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent" />
                    )}
                  </span>
                ))}
              </div>

              {/* table */}
              <div className="p-5">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[0.7rem] uppercase tracking-wide text-white/40">
                      <th className="pb-3 font-medium">Campaign</th>
                      <th className="pb-3 text-right font-medium">Clicks</th>
                      <th className="pb-3 text-right font-medium">CPL</th>
                      <th className="pb-3 text-right font-medium">ROAS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {ROWS.map((r) => (
                      <tr key={r.name} className="border-t border-white/10">
                        <td className="py-3.5 pr-3 font-medium text-white/90">
                          {r.name}
                        </td>
                        <td className="tabular py-3.5 text-right text-white/70">
                          {r.clicks}
                        </td>
                        <td className="tabular py-3.5 text-right text-white/70">
                          {r.cpl}
                        </td>
                        <td className="py-3.5 text-right">
                          <span
                            className={`tabular inline-flex items-center gap-1 font-semibold ${
                              r.up ? "text-[#46d39a]" : "text-accent"
                            }`}
                          >
                            {r.roas}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-5 flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-sm text-white/60">Blended account ROAS</span>
                  <span className="tabular text-lg font-bold text-accent">4.2×</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
