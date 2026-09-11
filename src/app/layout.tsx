import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteContent } from "@content/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const industryBold = localFont({
  src: "../fonts/Industry-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-industry",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.site.title,
  description: siteContent.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${industryBold.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/diq5oqx.css" />
      </head>
      <body className="min-h-screen antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
