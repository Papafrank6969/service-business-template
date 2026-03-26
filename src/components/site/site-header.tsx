import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <div className="brand-lockup">
          <span className="brand-mark">{siteContent.business.name}</span>
          <span className="brand-subtitle">
            {siteContent.business.city}, {siteContent.business.state} auto repair
          </span>
        </div>

        <div className="header-meta">
          {siteContent.business.hours[0]?.label} | {siteContent.socialProof.rating.toFixed(1)} stars
        </div>

        <div className="header-actions">
          <a className="phone-pill" href={siteContent.business.phoneHref}>
            {siteContent.business.phone}
          </a>
          <a className="button-primary" href={siteContent.business.phoneHref}>
            {siteContent.cta.primary}
          </a>
        </div>
      </div>
    </header>
  );
}
