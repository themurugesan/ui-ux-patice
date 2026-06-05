import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* Display & headings — Open Sauce One (self-hosted per brand §05) */
const openSauce = localFont({
  variable: "--font-open-sauce",
  display: "swap",
  src: [
    { path: "./fonts/open-sauce-one-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/open-sauce-one-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/open-sauce-one-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/open-sauce-one-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/open-sauce-one-800.woff2", weight: "800", style: "normal" },
  ],
});

/* Body · UI · labels — Space Grotesk */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/* Code — JetBrains Mono */
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://searchadsbro.com"),
  title: {
    default: "Search Ads Bro — Turn ad spend into a predictable growth engine",
    template: "%s · Search Ads Bro",
  },
  description:
    "We build, run, and prove data-driven Google Ads systems for service businesses — predictable, high-quality leads with all the receipts. Start an audit.",
  keywords: [
    "Google Ads",
    "PPC for service businesses",
    "lead generation",
    "paid search agency",
    "performance marketing",
  ],
  openGraph: {
    title: "Search Ads Bro — Predictable leads, measurable growth",
    description:
      "Data-driven Google Ads systems for service businesses. Predictable, high-quality leads — with all the receipts.",
    siteName: "Search Ads Bro",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Ads Bro — Predictable leads, measurable growth",
    description:
      "Data-driven Google Ads systems for service businesses. Start an audit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSauce.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-raised"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
