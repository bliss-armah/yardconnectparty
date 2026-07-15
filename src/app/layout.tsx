import type { Metadata } from "next";
import { Anton } from "next/font/google";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Anton({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "400",
});

const sans = localFont({
  variable: "--font-sans-family",
  src: [
    {
      path: "../garet/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../garet/Garet-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YardConnect Party",
    template: "%s | YardConnect Party",
  },
  description:
    "YardConnect is the party the whole city waits for all year. One night of music, culture, and connection under the open sky.",
  keywords: [
    "YardConnect",
    "YardConnect Party",
    "yard party",
    "annual event",
    "music",
    "culture",
    "celebration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YardConnect Party",
    description:
      "One night of music, culture, and connection. Discover the party the whole city waits for all year.",
    url: "/",
    siteName: "YardConnect Party",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YardConnect Party",
    description:
      "One night of music, culture, and connection. Discover the party the whole city waits for all year.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
