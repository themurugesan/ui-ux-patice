import Reveal from "./Reveal";
import { PlugIcon, CompassIcon, ClipboardIcon, RocketIcon } from "./icons";

const STEPS = [
  {
    n: "01",
    icon: PlugIcon,
    title: "Connect Google Ads",
    body: "OAuth in a single click. We never write to your account without confirmation.",
  },
  {
    n: "02",
    icon: CompassIcon,
    title: "Tell us the goal",
    body: "Pick a service vertical, a target cost-per-lead, and a weekly cap. That's it.",
  },
  {
    n: "03",
    icon: ClipboardIcon,
    title: "Review the plan",
    body: "Keywords, ad copy, and landing pages — all editable before anything goes live.",
  },
  {
    n: "04",
    icon: RocketIcon,
    title: "Launch & learn",
    body: "A live dashboard from minute one, plus a weekly review in plain English.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-surface-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand">How it works</span>
          <h2
            className="mt-4 font-display font-extrabold"
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "var(--text-h1--line-height)",
              letterSpacing: "var(--text-h1--letter-spacing)",
            }}
          >
            Four steps to your first lead.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            No drawn-out onboarding. From connection to live campaign, you stay
            in control the whole way.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {/* connecting line (desktop) */}
          <span
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 100} as="li" className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-cloud text-brand shadow-raised">
                    <Icon size={24} />
                  </span>
                  <span className="tabular hidden text-sm font-semibold text-brand lg:mt-5 lg:block">
                    STEP {s.n}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink lg:mt-2 lg:text-xl">
                    <span className="tabular mr-2 text-brand lg:hidden">
                      {s.n}
                    </span>
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xs text-ink-soft lg:pr-4">{s.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
