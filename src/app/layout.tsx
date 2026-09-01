import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteContent } from "@content/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="min-h-screen antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
