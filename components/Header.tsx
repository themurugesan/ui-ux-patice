"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRightIcon, MenuIcon, CloseIcon } from "./icons";

const NAV = [
  { label: "Services", href: "#features" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#testimonials" },
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

  // lock body scroll + close on Escape when the mobile menu is open
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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-[68px] items-center justify-between gap-4"
      >
        <Logo asHomeLink size={30} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-[44px] items-center rounded-md px-3.5 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-ink hover:bg-surface-soft"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#" className="btn btn-ghost">
            Sign in
          </a>
          <a href="#cta" className="btn btn-primary">
            Book audit
            <ArrowRightIcon size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-cloud text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden border-t border-line bg-paper"
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center rounded-md px-3 text-base font-medium text-ink hover:bg-surface-soft"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2">
            <a href="#" onClick={() => setOpen(false)} className="btn btn-ghost w-full">
              Sign in
            </a>
            <a href="#cta" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Book audit
              <ArrowRightIcon size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
