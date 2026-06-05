"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

const inputClass =
  "min-h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-white placeholder:text-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const domain = String(data.get("domain") || "").trim();

    if (name.length < 2) {
      setError("Please tell us your name.");
      setStatus("error");
      return;
    }
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
      <div role="status" className="flex flex-col items-start gap-3 py-4 text-white">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
          <CheckIcon size={26} />
        </span>
        <p className="font-display text-2xl font-extrabold">You&apos;re booked in.</p>
        <p className="text-white/80">
          Check your inbox — we&apos;ll send your free Google Ads audit within one
          business day, with the receipts attached.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <p className="font-display text-lg font-extrabold text-white">Request your free audit</p>

      <Field id="name" label="Full name">
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Ananya Rao" aria-invalid={status === "error"} className={inputClass} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label="Work email">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" aria-invalid={status === "error"} className={inputClass} />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" className={inputClass} />
        </Field>
      </div>

      <Field id="domain" label="Website domain">
        <input id="domain" name="domain" type="text" inputMode="url" placeholder="acmeplumbing.com" aria-invalid={status === "error"} className={inputClass} />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-accent">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-accent btn-lg mt-1 w-full">
        Get my free audit
        <ArrowRightIcon size={18} />
      </button>
      <p className="text-center text-xs text-white/70">
        Free · no card · we never write to your account without confirmation.
      </p>
    </form>
  );
}
