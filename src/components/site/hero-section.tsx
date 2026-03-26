import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Premium Local Auto Repair</span>
          <h1>Honest auto repair, done right the first time.</h1>
          <p className="hero-lead">
            {siteContent.business.tagline} Summit Auto Care delivers same-day diagnostics, clear
            estimates, and reliable workmanship for drivers across {siteContent.business.city}.
          </p>

          <div className="hero-meta">
            <div className="hero-metric">
              {siteContent.socialProof.rating.toFixed(1)} stars from {siteContent.socialProof.reviewCount} local reviews
            </div>
            <div className="hero-metric">Free inspection with any repair estimate</div>
            <div className="hero-metric">No work starts without your approval</div>
          </div>

          <div className="hero-actions">
            <a className="button-primary" href={siteContent.business.phoneHref}>
              {siteContent.cta.primary}
            </a>
            <a className="button-secondary" href="#quote-request">
              {siteContent.cta.secondary}
            </a>
          </div>

          <p className="hero-note">
            Call now for a fast answer, or send your vehicle details for a no-pressure quote.
          </p>
        </div>

        <aside className="hero-card">
          <div
            aria-hidden="true"
            className="hero-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(19, 22, 29, 0.04), rgba(19, 22, 29, 0.5)), url("${siteContent.business.heroImage}")`
            }}
          />
          <div className="hero-card-copy">
            <div className="hero-card-label">Why drivers choose Summit</div>
            <h2>Fast turnarounds. Straight answers. Local trust.</h2>
            <p>
              From brake work and diagnostics to A/C and tire service, we keep the process clear,
              responsive, and easy to trust.
            </p>

            <div className="hero-card-list">
              {siteContent.business.trustBadges.map((badge) => (
                <div className="hero-card-item" key={badge}>
                  <span>{badge}</span>
                  <strong>Included</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
