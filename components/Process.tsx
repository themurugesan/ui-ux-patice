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
    <section id="process" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-brand">How it works</span>
            <h2
              className="mt-4 font-display"
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
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 90} as="li">
                <div className="soft-card relative flex h-full flex-col p-7">
                  <span
                    className="tabular absolute right-6 top-5 font-display text-5xl font-extrabold text-tint-sky"
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent">
                    <Icon size={24} />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-extrabold text-ink">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
