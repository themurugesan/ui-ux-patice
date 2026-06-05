const PARTNERS = [
  "Google Ads",
  "Analytics 4",
  "Search Console",
  "Tag Manager",
  "Looker Studio",
  "Merchant Center",
  "CallRail",
  "Local Services Ads",
];

export default function Integrations() {
  return (
    <section aria-label="Platforms we work with" className="border-b border-line bg-paper py-10">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-ink-faint">
          Certified expertise across the Google marketing stack
        </p>
      </div>

      {/* edge-faded marquee */}
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-cloud px-5 py-2.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-tint-sky" aria-hidden="true">
                <span className="h-2 w-2 rounded-[3px] bg-brand" />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-ink-soft">{p}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
