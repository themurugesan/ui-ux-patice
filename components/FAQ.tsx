import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Who owns the Google Ads account and the data?",
    a: "You do — always. We work inside your account via secure OAuth, so you keep full ownership of the account, the history, and every conversion. If we ever part ways, nothing leaves with us.",
  },
  {
    q: "Will you make changes without asking?",
    a: "No. We audit and propose, but you approve the strategy, keywords, and budgets before anything goes live. You stay in control of every meaningful change.",
  },
  {
    q: "How fast will I see results?",
    a: "You get a live dashboard from day one. Most service businesses see their first qualified leads within days of launch, with performance compounding over the first 60–90 days.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No long-term lock-in. We earn the relationship month to month by showing measurable results — cost per lead, ROAS, and qualified leads you can verify.",
  },
  {
    q: "How does pricing work?",
    a: "A flat monthly management fee based on your ad spend and scope — never a percentage-of-spend markup. Your ad budget is paid directly to Google. See the Pricing section for indicative tiers.",
  },
  {
    q: "What does the free audit include?",
    a: "A full review of your account in 24 hours: where budget is leaking line by line, a keyword and landing-page action plan, and projected cost-per-lead and ROAS — no card, no obligation.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-mist">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-brand">Answers</span>
            <h2
              className="mt-5 font-display"
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--text-h1--line-height)",
                letterSpacing: "var(--text-h1--letter-spacing)",
              }}
            >
              Questions, answered straight.
            </h2>
            <p className="mt-5 text-ink-soft">
              Still unsure about something?{" "}
              <a href="#cta" className="font-semibold text-brand underline-offset-4 hover:underline">
                Talk to our team →
              </a>
            </p>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <details className="group rounded-xl border border-line bg-cloud px-6 [&[open]]:border-line-strong [&[open]]:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-base font-bold text-ink marker:hidden focus-visible:outline-none sm:text-lg">
                    {item.q}
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-sky text-brand transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 leading-relaxed text-ink-soft">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
