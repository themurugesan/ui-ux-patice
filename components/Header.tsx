"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRightIcon, MenuIcon, CloseIcon } from "./icons";

const NAV = [
  { label: "Services", href: "#features" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container-x">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-4 rounded-full border px-3 py-2 pl-4 transition-all duration-300 ${
            scrolled
              ? "border-line bg-cloud/90 shadow-nav backdrop-blur-md"
              : "border-line/70 bg-cloud/70 backdrop-blur-sm"
          }`}
        >
          <Logo asHomeLink size={28} />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[40px] items-center rounded-full px-4 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:bg-tint-sky hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#"
              className="inline-flex min-h-[44px] items-center rounded-full px-4 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-brand"
            >
              Sign in
            </a>
            <a href="#cta" className="btn btn-accent !min-h-[46px] !px-5">
              Book a free audit
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cloud text-ink lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="mt-2 rounded-3xl border border-line bg-cloud p-3 shadow-nav lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-2xl px-4 text-base font-medium text-ink hover:bg-tint-sky"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2 border-t border-line-soft pt-3">
            <a href="#" onClick={() => setOpen(false)} className="btn btn-ghost w-full">
              Sign in
            </a>
            <a href="#cta" onClick={() => setOpen(false)} className="btn btn-accent w-full">
              Book a free audit
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
