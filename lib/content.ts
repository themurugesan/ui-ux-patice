/**
 * Single source of truth for site content & business info.
 * Keeps copy, contact details, and navigation maintainable in one place.
 */

export const company = {
  name: "Search Ads Bro",
  tagline: "Predictable leads, measurable growth.",
  email: "hello@searchadsbro.com",
  brandEmail: "brand@searchadsbro.com",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappHref: "https://wa.me/919876543210",
  location: "Bengaluru, India",
  site: "searchadsbro.com",
  social: { x: "@searchadsbro", linkedin: "#", instagram: "#" },
} as const;

export const primaryNav = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
] as const;

export const footerNav = [
  {
    heading: "Services",
    links: [
      { label: "Google Ads management", href: "#services" },
      { label: "Landing pages & CRO", href: "#services" },
      { label: "Conversion tracking", href: "#services" },
      { label: "Reporting & insights", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why Search Ads Bro", href: "#why" },
      { label: "How it works", href: "#process" },
      { label: "Case studies", href: "#results" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free Ads audit", href: "#cta" },
      { label: "FAQs", href: "#faq" },
      { label: "Book a call", href: "#cta" },
      { label: "Contact", href: "#cta" },
    ],
  },
] as const;
