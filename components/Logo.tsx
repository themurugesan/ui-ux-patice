import Link from "next/link";

type LogoProps = {
  /** "default" = navy/blue on light; "reversed" = white marks on color/dark (yellow dot preserved) */
  variant?: "default" | "reversed";
  /** show the "Search Ads Bro" wordmark next to the mark */
  withWordmark?: boolean;
  /** mark height in px (lockup min 32, icon min 24 per §03) */
  size?: number;
  className?: string;
  /** render as a home link with a 44px hit target */
  asHomeLink?: boolean;
};

/**
 * Search Ads Bro logo — three figures with a preserved Signal Yellow dot.
 * Rebuilt to spec; do not recolor outside the approved variants (§02.3).
 */
function Mark({
  variant = "default",
  size = 36,
}: {
  variant?: "default" | "reversed";
  size?: number;
}) {
  const reversed = variant === "reversed";
  const outer = reversed ? "#FFFFFF" : "var(--ink)";
  const middle = reversed ? "#FFFFFF" : "var(--brand)";
  const dot = "var(--accent)"; // yellow dot is always preserved

  // viewBox 44 x 40 → keep aspect when scaling by height
  const width = (size * 44) / 40;

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 44 40"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* bodies */}
      <rect x="4.5" y="15" width="9" height="23" rx="4.5" fill={outer} />
      <rect x="30.5" y="15" width="9" height="23" rx="4.5" fill={outer} />
      <rect x="17.5" y="12" width="9" height="26" rx="4.5" fill={middle} />
      {/* heads */}
      <circle cx="9" cy="9" r="4.6" fill={outer} />
      <circle cx="35" cy="9" r="4.6" fill={outer} />
      <circle cx="22" cy="6.2" r="4.9" fill={dot} />
    </svg>
  );
}

export default function Logo({
  variant = "default",
  withWordmark = true,
  size = 36,
  className = "",
  asHomeLink = false,
}: LogoProps) {
  const reversed = variant === "reversed";
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark variant={variant} size={size} />
      {withWordmark && (
        <span
          className="font-display font-extrabold leading-[0.92] tracking-tight"
          style={{
            fontSize: size * 0.46,
            color: reversed ? "#FFFFFF" : "var(--ink)",
          }}
        >
          Search
          <br />
          Ads&nbsp;Bro
        </span>
      )}
    </span>
  );

  if (asHomeLink) {
    return (
      <Link
        href="/"
        aria-label="Search Ads Bro — home"
        className="inline-flex min-h-[44px] items-center"
      >
        {content}
      </Link>
    );
  }
  return content;
}
