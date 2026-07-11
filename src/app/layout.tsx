import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yardconnect.party"),
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
  openGraph: {
    title: "YardConnect Party",
    description:
      "One night of music, culture, and connection. Discover the party the whole city waits for all year.",
    type: "website",
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
