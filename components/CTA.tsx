import Reveal from "./Reveal";
import AuditForm from "./AuditForm";
import { CheckIcon, MailIcon, PhoneIcon, MapPinIcon, WhatsappIcon } from "./icons";
import { company } from "@/lib/content";

const INCLUDED = [
  "A full account audit within 24 hours",
  "Where your budget is leaking — line by line",
  "A keyword & landing-page action plan",
  "Projected cost-per-lead and ROAS",
];

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.07]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--brand)" }}
              aria-hidden="true"
            />

            <div className="relative grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
              {/* Pitch + contact */}
              <div>
                <span className="eyebrow text-accent">Book your free audit</span>
                <h2 className="mt-4 max-w-md font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-[2.6rem]">
                  See where your spend is leaking — in 24 hours.
                </h2>
                <p className="mt-4 max-w-md text-white/75">
                  No card, no obligation. Here&apos;s exactly what you&apos;ll get back:
                </p>

                <ul className="mt-6 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-white">
                        <CheckIcon size={13} />
                      </span>
                      <span className="text-[0.95rem]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct contact methods */}
                <div className="mt-8 grid gap-2.5 border-t border-white/12 pt-7 sm:grid-cols-2">
                  <a href={`mailto:${company.email}`} className="group flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <MailIcon size={18} className="text-accent" />
                    <span className="text-sm text-white/85 group-hover:text-white">{company.email}</span>
                  </a>
                  <a href={`tel:${company.phoneHref}`} className="group flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <PhoneIcon size={18} className="text-accent" />
                    <span className="text-sm text-white/85 group-hover:text-white">{company.phoneDisplay}</span>
                  </a>
                  <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <WhatsappIcon size={18} className="text-accent" />
                    <span className="text-sm text-white/85 group-hover:text-white">Chat on WhatsApp</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10">
                    <MapPinIcon size={18} className="text-accent" />
                    <span className="text-sm text-white/85">{company.location}</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-8">
                <AuditForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
