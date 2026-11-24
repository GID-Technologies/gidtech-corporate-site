import type { Metadata, Viewport } from "next";

import type { ReactNode } from "react";
import "./globals.css";

import SiteChrome from "./_components/SiteChrome";

const siteUrl = "https://www.gidtechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "GID Technologies | Business Websites & Digital Solutions",
    template: "%s | GID Technologies",
  },

  description:
    "GID Technologies creates professional business websites, custom software and practical digital solutions for growing organisations.",

  applicationName: "GID Technologies",

  keywords: [
    "GID Technologies",
    "GIDTech",
    "business websites Nigeria",
    "business website design",
    "custom web development",
    "business digital solutions",
    "Lagos technology company",
  ],

  authors: [
    {
      name: "GID Technologies",
    },
  ],

  creator: "GID Technologies",
  publisher: "GID Technologies",

  openGraph: {
    title: "GID Technologies | Business Websites & Digital Solutions",
    description:
      "Professional business websites, custom software and practical digital solutions from GID Technologies.",
    url: "/",
    siteName: "GID Technologies",
    type: "website",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: "GID Technologies | Business Websites & Digital Solutions",
    description:
      "Professional websites, custom software and practical digital solutions.",
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
