"use client";

import { useEffect, useState } from "react";

const KEY = "sab-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked — stay hidden */
    }
  }, []);

  function decide(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-line bg-cloud p-4 shadow-lg sm:inset-x-auto sm:left-5 sm:right-auto sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <p className="text-sm text-ink-soft">
          We use cookies to analyse traffic and improve your experience. See our{" "}
          <a href="#" className="font-semibold text-brand underline-offset-2 hover:underline">
            privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="btn btn-ghost !min-h-[42px] !px-4 text-sm"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="btn btn-primary !min-h-[42px] !px-4 text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
