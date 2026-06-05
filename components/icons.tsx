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

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 4h3l1.2 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7 7.5 5.5L19.5 7" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21c4-4.2 6-7.3 6-10a6 6 0 1 0-12 0c0 2.7 2 5.8 6 10Z" />
    <circle cx="12" cy="11" r="2.3" />
  </Base>
);

export const ChatIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16.5H9l-4 3.5V7A1.5 1.5 0 0 1 6.5 5.5Z" />
    <path d="M8.5 10.5h7M8.5 13h4" />
  </Base>
);

export const LayersIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5L20 12M4 16.5 12 21l8-4.5" />
  </Base>
);

export const GaugeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 16a8 8 0 1 1 16 0" />
    <path d="M12 16l4-4" />
    <circle cx="12" cy="16" r="1.2" fill="currentColor" />
  </Base>
);

export const PenIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 5.5 18.5 9.5 8.5 19.5 4 21l1.5-4.5 9-11Z" />
    <path d="m13 7 4 4" />
  </Base>
);

export const MegaphoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l8 4V4.5l-8 4H5.5A1.5 1.5 0 0 0 4 10Z" />
    <path d="M8 15.5V19" />
    <path d="M18.5 9a3 3 0 0 1 0 6" />
  </Base>
);

export const LockIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15" r="1.1" fill="currentColor" />
  </Base>
);

export const UsersIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
  </Base>
);

export const MinusIcon = (p: IconProps) => (
  <Base {...p}><path d="M5 12h14" /></Base>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}><path d="M12 5v14M5 12h14" /></Base>
);

export const LinkedinIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <path d="M8 10.5V16M8 7.6v.01M11.5 16v-3a2 2 0 0 1 4 0v3" />
  </Base>
);

export const XSocialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 5l14 14M19 5 5 19" strokeWidth={1.7} />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="16.5" cy="7.5" r="0.6" fill="currentColor" />
  </Base>
);

export const WhatsappIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 19l1.2-3.4A7 7 0 1 1 9 18.2L5 19Z" />
    <path d="M9.2 9.3c.2 2 1.5 3.4 3.5 3.6.5 0 1-.6 1.1-1.1l-1.4-.7-.7.7a3 3 0 0 1-1.3-1.3l.7-.7-.7-1.4c-.5.1-1.1.6-1 .9Z" strokeWidth={1.2} />
  </Base>
);
