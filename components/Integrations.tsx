import Reveal from "./Reveal";

const TOOLS = [
  "Google Ads",
  "Analytics 4",
  "Search Console",
  "Tag Manager",
  "Looker Studio",
  "CallRail",
];

export default function Integrations() {
  return (
    <section aria-label="Integrations" className="border-b border-line-soft bg-paper py-12 sm:py-16">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow text-ink-soft">
            Plugs into the stack you already run
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-line bg-cloud px-3 py-4 text-ink-soft transition-colors hover:border-line hover:text-ink"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-tint-sky"
                  aria-hidden="true"
                >
                  <span className="h-3 w-3 rounded-[4px] bg-brand" />
                </span>
                <span className="text-sm font-semibold">{tool}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
