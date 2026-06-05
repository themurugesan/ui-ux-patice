import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Will you change my account without asking?",
    a: "Never. You connect via Google OAuth in one click, and we never write to your account without your confirmation. You stay in control of every change.",
  },
  {
    q: "How fast will I see results?",
    a: "You get a live dashboard from minute one. Most service businesses see their first qualified leads within days of launch — and we review progress with you every week.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. There are no long-term contracts and no lock-in. We earn the relationship month to month by showing measurable results.",
  },
  {
    q: "What exactly do you manage?",
    a: "The whole engine: keyword strategy, ad copy, bids, audiences, landing pages, and conversion tracking — continuously optimized and reported in plain English.",
  },
  {
    q: "How do you report on performance?",
    a: "A real-time dashboard plus a weekly review written in plain English. Every claim earns a number — cost per lead, ROAS, and qualified leads, with full context.",
  },
  {
    q: "Is the free audit really free?",
    a: "Yes — free, no card required, no obligation. We'll show you where budget is leaking and the plan to fix it, whether or not you work with us.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section warm-panel">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-brand">Answers to</span>
            <h2
              className="mt-4 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Frequently asked questions.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="group rounded-3xl border border-line bg-cloud px-6 py-1 [&[open]]:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg font-bold text-ink marker:hidden focus-visible:outline-none">
                  {item.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint-sky text-brand transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 pr-12 leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-ink-soft">
            Still have a question?{" "}
            <a
              href="mailto:brand@searchadsbro.com"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Talk to us →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
