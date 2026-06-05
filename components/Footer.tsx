import Logo from "./Logo";
import { ArrowRightIcon } from "./icons";

const COLUMNS = [
  {
    heading: "Services",
    links: ["Google Ads management", "Landing pages", "Conversion tracking", "Reporting"],
  },
  {
    heading: "Company",
    links: ["About", "Case studies", "Pricing", "Careers"],
  },
  {
    heading: "Resources",
    links: ["Free audit", "Blog", "ROI calculator", "Help center"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + contact */}
          <div className="max-w-sm">
            <Logo variant="reversed" size={34} asHomeLink />
            <p className="mt-5 text-white/70">
              Data-driven Google Ads systems for service businesses.
              Predictable leads, measurable growth — built from clear, specific,
              accountable work.
            </p>
            <a
              href="mailto:brand@searchadsbro.com"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-accent hover:underline"
            >
              brand@searchadsbro.com
              <ArrowRightIcon size={16} />
            </a>
            <p className="mt-2 text-sm text-white/55">Bengaluru, IN · searchadsbro.com</p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-6 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Search Ads Bro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-white"
              aria-label="Search Ads Bro on X"
            >
              @searchadsbro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
