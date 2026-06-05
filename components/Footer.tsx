import Logo from "./Logo";
import { ArrowRightIcon, StarIcon } from "./icons";

const COLUMNS = [
  {
    heading: "Services",
    links: ["Google Ads management", "Landing pages", "Conversion tracking", "Reporting"],
  },
  {
    heading: "Company",
    links: ["About", "Case studies", "Process", "Careers"],
  },
  {
    heading: "Resources",
    links: ["Free audit", "Blog", "ROI calculator", "Help center"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="container-x py-16 lg:py-20">
        {/* Top: brand + newsletter */}
        <div className="grid gap-10 border-b border-white/12 pb-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="max-w-sm">
            <Logo variant="reversed" size={34} asHomeLink />
            <p className="mt-5 text-white/70">
              Data-driven Google Ads systems for service businesses.
              Predictable leads, measurable growth — built from clear, specific,
              accountable work.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={15} />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                4.9/5 · 120+ businesses
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <h2 className="font-display text-xl font-extrabold text-white">
              Get a free audit
            </h2>
            <p className="mt-2 text-white/70">
              See where your budget is leaking — in 24 hours.
            </p>
            <a href="#cta" className="btn btn-accent mt-5">
              Start a free audit
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a
              href="mailto:brand@searchadsbro.com"
              className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent hover:underline"
            >
              brand@searchadsbro.com
              <ArrowRightIcon size={16} />
            </a>
            <p className="mt-2 text-sm text-white/55">
              Bengaluru, IN · searchadsbro.com
            </p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex min-h-[40px] items-center text-[0.9375rem] text-white/80 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-7 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Search Ads Bro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white" aria-label="Search Ads Bro on X">
              @searchadsbro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
