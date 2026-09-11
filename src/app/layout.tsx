import type { Metadata } from "next";
import { Inter, Overpass } from "next/font/google";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteContent } from "@content/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const din = localFont({
  src: "../fonts/DINCondensed-Bold.ttf",
  weight: "700",
  variable: "--font-header",
  display: "swap",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-overline",
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
    <html
      lang="en"
      className={`${inter.variable} ${din.variable} ${overpass.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
