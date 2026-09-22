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

const shiprockedNeue = localFont({
  src: [
    {
      path: "../fonts/ShiprockedNeue-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ShiprockedNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-shiprocked-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.storyofshiprocked.com"),
  title: siteContent.site.title,
  description: siteContent.site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: siteContent.site.title,
    description: siteContent.site.description,
    siteName: siteContent.site.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
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
      className={`${inter.variable} ${industryBold.variable} ${shiprockedNeue.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/diq5oqx.css" />
      </head>
      <body className="min-h-screen antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
