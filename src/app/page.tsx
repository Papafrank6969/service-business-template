import type { CSSProperties } from "react";
import { HeroSection } from "@/components/site/hero-section";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import {
  ContactSection,
  FaqSection,
  FooterSection,
  ProofStrip,
  ReviewsSection,
  ServicesSection,
  WhyChooseUsSection
} from "@/components/site/sections";
import { SiteHeader } from "@/components/site/site-header";
import { siteContent } from "@/lib/site-content";

const themeStyle = {
  ["--site-primary" as string]: siteContent.theme.primary,
  ["--site-secondary" as string]: siteContent.theme.secondary,
  ["--site-accent" as string]: siteContent.theme.accent,
  ["--site-surface" as string]: siteContent.theme.surface,
  ["--site-surface-alt" as string]: siteContent.theme.surfaceAlt
} satisfies CSSProperties;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteContent.business.name,
  image: [siteContent.business.heroImage],
  telephone: siteContent.business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.business.address.street,
    addressLocality: siteContent.business.address.city,
    addressRegion: siteContent.business.address.state,
    postalCode: siteContent.business.address.zip,
    addressCountry: "US"
  },
  areaServed: siteContent.business.serviceAreas,
  priceRange: "$$",
  openingHours: siteContent.business.hours.map((item) => `${item.days} ${item.open}-${item.close}`),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteContent.socialProof.rating.toFixed(1),
    reviewCount: siteContent.socialProof.reviewCount
  },
  url: siteContent.seo.siteUrl
};

export default function HomePage() {
  return (
    <main className="site-shell" style={themeStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd)
        }}
      />
      <SiteHeader />
      <HeroSection />
      <ProofStrip />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
      <MobileCtaBar />
    </main>
  );
}
