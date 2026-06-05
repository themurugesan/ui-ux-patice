"use client";

import { useEffect, useState } from "react";
import { WhatsappIcon } from "./icons";
import { company } from "@/lib/content";

/** Floating WhatsApp action — appears after the hero so it never blocks the first view. */
export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-105 sm:h-15 sm:w-15 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsappIcon size={26} />
    </a>
  );
}
