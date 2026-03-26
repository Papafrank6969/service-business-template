import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.siteUrl,
    siteName: siteContent.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteContent.business.heroImage,
        width: 1200,
        height: 630,
        alt: `${siteContent.business.name} service bay`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.business.heroImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
