import { siteContent } from "@/lib/site-content";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <a className="button-primary" href={siteContent.business.phoneHref}>
        {siteContent.cta.stickyPrimary}
      </a>
      <a className="button-secondary" href="#quote-request">
        {siteContent.cta.stickySecondary}
      </a>
    </div>
  );
}
