import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  LinkedinIcon,
  XSocialIcon,
  InstagramIcon,
} from "./icons";
import { company, footerNav } from "@/lib/content";

const SOCIAL = [
  { label: "LinkedIn", href: company.social.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: "#", Icon: XSocialIcon },
  { label: "Instagram", href: company.social.instagram, Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-900 text-white">
      <div className="container-x py-16 lg:py-20">
        {/* Top: brand + newsletter */}
        <div className="grid gap-10 border-b border-white/12 pb-12 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
          <div className="max-w-sm">
            <Logo variant="reversed" size={32} asHomeLink />
            <p className="mt-5 text-white/70">
              Data-driven Google Ads systems for service businesses. Predictable
              leads, measurable growth — built from clear, specific, accountable work.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <div className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={15} />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">4.9/5 · 120+ businesses</span>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-extrabold text-white">
              Sharper ad spend, every month
            </h2>
            <p className="mt-2 text-sm text-white/70">
              One practical Google Ads tip for service businesses. No spam, unsubscribe anytime.
            </p>
            <div className="mt-4 max-w-sm">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Middle: nav + contact */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_2fr]">
          <address className="not-italic">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">Get in touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${company.email}`} className="inline-flex min-h-[40px] items-center gap-2.5 text-[0.95rem] text-white/80 hover:text-white">
                  <MailIcon size={18} className="text-accent" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phoneHref}`} className="inline-flex min-h-[40px] items-center gap-2.5 text-[0.95rem] text-white/80 hover:text-white">
                  <PhoneIcon size={18} className="text-accent" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex min-h-[40px] items-center gap-2.5 text-[0.95rem] text-white/80">
                <MapPinIcon size={18} className="text-accent" />
                {company.location}
              </li>
            </ul>
          </address>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">{col.heading}</h2>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="inline-flex min-h-[38px] items-center text-[0.95rem] text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/12 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
