"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRightIcon, MenuIcon, CloseIcon, PhoneIcon } from "./icons";
import { primaryNav, company } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-[68px] items-center justify-between gap-4">
        <Logo asHomeLink size={28} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-[40px] items-center rounded-lg px-3.5 text-[0.9rem] font-medium text-ink-soft transition-colors hover:bg-tint-sky hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-2 text-[0.9rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            <PhoneIcon size={17} className="text-brand" />
            {company.phoneDisplay}
          </a>
          <a href="#cta" className="btn btn-accent">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong bg-cloud text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-line text-base font-medium text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2.5">
          <a href="#cta" onClick={() => setOpen(false)} className="btn btn-accent w-full">
            Book a free audit
            <ArrowRightIcon size={18} />
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn btn-ghost w-full">
            <PhoneIcon size={18} className="text-brand" />
            {company.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
