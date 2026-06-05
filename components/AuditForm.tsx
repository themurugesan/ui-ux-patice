"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const domain = String(data.get("domain") || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid work email so we can send the audit.");
      setStatus("error");
      return;
    }
    if (!/\.[a-z]{2,}$/i.test(domain)) {
      setError("Add your website domain — must include a TLD (e.g. .com).");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-xl bg-white/12 p-6 text-white"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success text-white">
          <CheckIcon size={24} />
        </span>
        <p className="font-display text-xl font-bold">Audit requested.</p>
        <p className="text-white/80">
          Check your inbox — we&apos;ll send your free Google Ads audit within one
          business day, with the receipts attached.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={status === "error"}
            className="min-h-12 rounded-md border border-white/25 bg-white/10 px-4 text-white placeholder:text-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="domain" className="text-sm font-medium text-white">
            Website domain
          </label>
          <input
            id="domain"
            name="domain"
            type="text"
            inputMode="url"
            placeholder="acmeplumbing.com"
            aria-invalid={status === "error"}
            className="min-h-12 rounded-md border border-white/25 bg-white/10 px-4 text-white placeholder:text-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-accent sm:w-auto">
          Start an audit
          <ArrowRightIcon size={18} />
        </button>
        <p className="text-sm text-white/80">
          Free · no card · we never write to your account without confirmation.
        </p>
      </div>
    </form>
  );
}
