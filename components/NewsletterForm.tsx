"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <p role="status" className="flex items-center gap-2 text-sm font-medium text-white">
        <CheckIcon size={18} className="text-accent" />
        You&apos;re subscribed — watch your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your work email"
          aria-invalid={status === "error"}
          className="min-h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-ink transition-colors hover:bg-accent-strong"
        >
          <ArrowRightIcon size={20} />
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-xs font-medium text-accent">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
