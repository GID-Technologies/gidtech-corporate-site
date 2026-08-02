import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import SiteChrome from "./_components/SiteChrome";

const siteUrl = "https://www.gidtechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "GID Technologies | Digital Products & Business Visibility Systems",
    template: "%s | GID Technologies",
  },

  description:
    "GID Technologies builds practical digital products, business visibility systems, and technology solutions that help modern businesses become easier to find, trust, and contact.",

  applicationName: "GID Technologies",

  keywords: [
    "GID Technologies",
    "GIDTech",
    "StatBet",
    "Business Visibility Systems",
    "business visibility systems",
    "digital products",
    "technology solutions",
    "Lagos technology company",
    "Nigeria technology company",
  ],

  authors: [{ name: "GID Technologies" }],
  creator: "GID Technologies",
  publisher: "GID Technologies",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "GID Technologies | Digital Products & Business Visibility Systems",
    description:
      "A practical technology company building digital products, business visibility systems, and future connection platforms.",
    url: "/",
    siteName: "GID Technologies",
    type: "website",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: "GID Technologies | Digital Products & Business Visibility Systems",
    description:
      "Practical technology company building digital products, business visibility systems, and future connection platforms.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
