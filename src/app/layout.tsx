import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { noindex, site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} – ${site.tagline}`,
  description:
    "Neue und gebrauchte Land Rover Ersatzteile für Defender, Discovery, Range Rover und Freelander. " +
    "Eigene Werkstatt und Fahrzeugankauf in Horhausen im Westerwald. Versand innerhalb Deutschlands und Europas.",
  keywords: [
    "Land Rover Ersatzteile",
    "Defender Teile",
    "Discovery Ersatzteile",
    "Range Rover Teile",
    "Land Rover Werkstatt Westerwald",
    "Land Rover Ankauf",
    "Horhausen",
  ],
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description:
      "Neue und gebrauchte Land Rover Ersatzteile, eigene Werkstatt und Fahrzeugankauf im Westerwald.",
    locale: "de_DE",
    type: "website",
  },
  // Im Vorschau-Modus aus dem Index heraushalten. Siehe site.ts.
  ...(noindex
    ? {
        robots: {
          index: false,
          follow: false,
          nocache: true,
          googleBot: { index: false, follow: false },
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
