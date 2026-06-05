/**
 * Icon library (§09) — 24×24 frame, 1.5px stroke, round caps & joins,
 * outline-only, currentColor. Ship as inline SVG.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.5-3.5" />
  </Base>
);

export const TrendIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 16.5 9 10l4 4 8-8.5" />
    <path d="M21 9V5.5H17.5" />
  </Base>
);

export const TargetIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 8.9 4.1-1.5 7-4.7 7-8.9V6l-7-2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const BoltIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M13 3 5 13.5h6L11 21l8-10.5h-6L13 3Z" />
  </Base>
);

export const ChartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <rect x="7.5" y="12" width="2.8" height="5" rx="0.6" />
    <rect x="12.5" y="8.5" width="2.8" height="8.5" rx="0.6" />
    <rect x="17.5" y="10.5" width="2.8" height="6.5" rx="0.6" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const PlugIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3v4M15 3v4" />
    <path d="M7 7h10v3a5 5 0 0 1-10 0V7Z" />
    <path d="M12 15v6" />
  </Base>
);

export const CompassIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15 9-1.5 4.5L9 15l1.5-4.5L15 9Z" />
  </Base>
);

export const ClipboardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="6" y="4.5" width="12" height="16" rx="2" />
    <path d="M9.5 4.5a2.5 2.5 0 0 1 5 0" />
    <path d="m9 12 2 2 3.5-3.5" />
  </Base>
);

export const RocketIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 4c2.5 0 4.5 2 4.5 4.5 0 3.5-3 6.5-6.5 8.5L9 15.5C11 12 14 9 14.5 4Z" />
    <path d="M9 15.5 6.5 13M9 15.5 11 18" />
    <path d="M6.5 17.5C5 18 4.5 20 4.5 20s2-.5 2.5-2" />
    <circle cx="14.5" cy="9" r="1.3" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);

export const QuoteIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M10 7c-2.5 1-4 3-4 6v4h5v-5H7.5C7.5 9.5 8.5 8.3 10 7.8V7Z" />
    <path d="M20 7c-2.5 1-4 3-4 6v4h5v-5h-3.5C17.5 9.5 18.5 8.3 20 7.8V7Z" />
  </Base>
);

export const StarIcon = (p: IconProps) => (
  <Base {...p}>
    <path
      d="m12 4 2.3 4.8 5.2.7-3.8 3.6.95 5.2L12 16.9l-4.65 2.4.95-5.2L4.5 9.5l5.2-.7L12 4Z"
      fill="currentColor"
      strokeWidth={1}
    />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const SparkIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </Base>
);
