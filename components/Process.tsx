import Reveal from "./Reveal";
import { PlugIcon, CompassIcon, ClipboardIcon, RocketIcon } from "./icons";

const STEPS = [
  {
    n: "01",
    icon: PlugIcon,
    title: "Connect Google Ads",
    body: "OAuth in a single click. We audit your account and never write changes without your confirmation.",
  },
  {
    n: "02",
    icon: CompassIcon,
    title: "Set the goal",
    body: "Pick a service vertical, a target cost-per-lead, and a weekly cap. We translate it into a plan.",
  },
  {
    n: "03",
    icon: ClipboardIcon,
    title: "Review & approve",
    body: "Keywords, ad copy, and landing pages — all editable and signed off before anything goes live.",
  },
  {
    n: "04",
    icon: RocketIcon,
    title: "Launch & scale",
    body: "Live dashboard from minute one, continuous optimization, and a weekly review in plain English.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-brand">How it works</span>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              From connected to converting in four steps.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              No drawn-out onboarding. You stay in control the whole way — from
              first connection to your first qualified lead.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" aria-hidden="true" />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 90} as="li" className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-cloud text-brand shadow-sm">
                    <Icon size={24} />
                  </span>
                  <div className="lg:mt-5">
                    <span className="tabular text-xs font-bold text-ink-faint">STEP {s.n}</span>
                    <h3 className="font-display text-lg font-extrabold text-ink lg:mt-1">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft lg:pr-4">{s.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
