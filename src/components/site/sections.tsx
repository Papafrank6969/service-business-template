import { QuoteForm } from "@/components/site/quote-form";
import { siteContent } from "@/lib/site-content";

function SectionIntro({
  kicker,
  title,
  description
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading-row">
      <div className="section-kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

export function ProofStrip() {
  return (
    <section className="proof-strip">
      <div className="site-container proof-grid">
        {siteContent.socialProof.proofItems.map((item) => (
          <article className="proof-card" key={item.label}>
            <div className="proof-label">{item.label}</div>
            <div className="proof-value">{item.value}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="site-container section-panel">
        <SectionIntro
          kicker="Services"
          title="Everything your car needs, in one reliable local shop."
          description="Summit Auto Care is built for drivers who want skilled repairs without the runaround. We organize service around what customers actually need: speed, clarity, and confidence."
        />

        <div className="services-grid">
          {siteContent.services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-badge">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-meta">
                <span>{service.priceHint}</span>
                <span>{service.turnaround}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="site-container section-panel">
        <SectionIntro
          kicker="Why Choose Us"
          title="Straight answers, fast turnarounds, and repair plans you can trust."
          description="We keep the process simple. Inspect the issue, explain your options, quote the work clearly, and get you back on the road without surprise add-ons."
        />

        <div className="why-grid">
          {siteContent.reasons.map((reason) => (
            <article className="why-card" key={reason.title}>
              <span className="reason-badge">Driver Benefit</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="section" id="reviews">
      <div className="site-container section-panel">
        <SectionIntro
          kicker="Reviews"
          title="What local drivers say after the repair is done."
          description="The strongest proof is how the shop feels after a real visit: quick communication, clear pricing, and work that solves the problem."
        />

        <div className="reviews-grid">
          {siteContent.reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars">★★★★★</div>
              <h3>{review.name}</h3>
              <p>{review.quote}</p>
              <div className="review-author">
                {review.name}
                <span>{review.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="site-container section-panel">
        <SectionIntro
          kicker="FAQ"
          title="Common questions before you book."
          description="These are the questions we hear most often from new customers calling for the first time."
        />

        <div className="faq-grid">
          {siteContent.faqs.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section" id="quote-request">
      <div className="site-container contact-grid">
        <div className="quote-panel">
          <div className="section-kicker">Book Service</div>
          <h2 className="quote-title">Need a mechanic you can count on today?</h2>
          <p className="quote-copy">
            Call now or send your vehicle details for a fast estimate. We keep quote requests simple
            so you can get answers without committing to anything on the spot.
          </p>

          <div className="quote-list">
            <div className="quote-list-item">
              <span>1</span>
              <div>Tell us the issue, your vehicle, and the best way to reach you.</div>
            </div>
            <div className="quote-list-item">
              <span>2</span>
              <div>We follow up quickly with a next-step recommendation or estimate range.</div>
            </div>
            <div className="quote-list-item">
              <span>3</span>
              <div>You approve the work before anything begins.</div>
            </div>
          </div>
        </div>

        <div className="quote-panel">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="footer">
      <div className="site-container footer-panel">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">{siteContent.business.name}</h2>
            <p className="footer-copy">
              Honest diagnostics, premium communication, and local repair work drivers feel good
              recommending.
            </p>
          </div>

          <div>
            <div className="footer-copy">
              {siteContent.business.address.street}
              <br />
              {siteContent.business.address.city}, {siteContent.business.address.state} {siteContent.business.address.zip}
              <br />
              <a href={siteContent.business.phoneHref}>{siteContent.business.phone}</a>
              <br />
              <a href={`mailto:${siteContent.business.email}`}>{siteContent.business.email}</a>
            </div>

            <ul className="footer-list">
              {siteContent.business.hours.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">Serving {siteContent.business.serviceAreas.join(", ")}.</div>
      </div>
    </footer>
  );
}
