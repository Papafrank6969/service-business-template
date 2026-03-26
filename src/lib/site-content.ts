export type ServiceItem = {
  title: string;
  description: string;
  priceHint: string;
  turnaround: string;
  badge: string;
};

export type ReviewItem = {
  name: string;
  location: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
    surfaceAlt: string;
  };
  business: {
    name: string;
    shortName: string;
    tagline: string;
    city: string;
    state: string;
    phone: string;
    phoneHref: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    hours: Array<{
      days: string;
      open: string;
      close: string;
      label: string;
    }>;
    serviceAreas: string[];
    heroImage: string;
    trustBadges: string[];
  };
  cta: {
    primary: string;
    secondary: string;
    stickyPrimary: string;
    stickySecondary: string;
    responsePromise: string;
  };
  socialProof: {
    rating: number;
    reviewCount: number;
    proofItems: Array<{
      label: string;
      value: string;
    }>;
  };
  services: ServiceItem[];
  reasons: Array<{
    title: string;
    description: string;
  }>;
  reviews: ReviewItem[];
  faqs: FaqItem[];
};

export const siteContent: SiteContent = {
  seo: {
    title: "Summit Auto Care | Honest Auto Repair in Raleigh, NC",
    description:
      "Summit Auto Care provides honest diagnostics, brake service, oil changes, A/C repair, tires, and engine work for Raleigh drivers. Call now or request a fast quote.",
    keywords: [
      "auto repair Raleigh NC",
      "brake repair Raleigh",
      "oil change Raleigh",
      "ASE certified mechanic Raleigh",
      "same day diagnostics Raleigh",
      "local auto repair shop"
    ],
    siteUrl: "https://service-business-template.vercel.app"
  },
  theme: {
    primary: "#c46a2d",
    secondary: "#13161d",
    accent: "#f5b568",
    surface: "#fffaf4",
    surfaceAlt: "#f2eee8"
  },
  business: {
    name: "Summit Auto Care",
    shortName: "Summit Auto",
    tagline: "Honest repairs, fast turnarounds, no surprises.",
    city: "Raleigh",
    state: "NC",
    phone: "(919) 555-0147",
    phoneHref: "tel:+19195550147",
    email: "service@summitautocare.com",
    address: {
      street: "1840 Glenwood Avenue",
      city: "Raleigh",
      state: "NC",
      zip: "27608"
    },
    hours: [
      {
        days: "Mon-Fri",
        open: "07:30",
        close: "18:00",
        label: "Mon-Fri: 7:30 AM - 6:00 PM"
      },
      {
        days: "Sat",
        open: "08:00",
        close: "14:00",
        label: "Sat: 8:00 AM - 2:00 PM"
      }
    ],
    serviceAreas: ["Raleigh", "North Hills", "Five Points", "Cary", "Morrisville", "Wake Forest"],
    heroImage:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80",
    trustBadges: [
      "ASE-Certified Technicians",
      "Warranty-Backed Repairs",
      "Same-Day Diagnostics",
      "No Work Without Approval"
    ]
  },
  cta: {
    primary: "Call for a Quote",
    secondary: "Request Service",
    stickyPrimary: "Call Now",
    stickySecondary: "Get Quote",
    responsePromise: "Most quote requests get a response within 15 minutes during business hours."
  },
  socialProof: {
    rating: 4.9,
    reviewCount: 187,
    proofItems: [
      {
        label: "Local rating",
        value: "4.9 stars from 187 reviews"
      },
      {
        label: "Typical response",
        value: "15-minute quote replies"
      },
      {
        label: "Warranty support",
        value: "24-month / 24,000-mile coverage"
      },
      {
        label: "Customer promise",
        value: "No surprise work, ever"
      }
    ]
  },
  services: [
    {
      title: "Brake Repair",
      description:
        "Pads, rotors, calipers, fluid checks, and full brake inspections with clear next-step recommendations.",
      priceHint: "Estimates available same day",
      turnaround: "Often completed in one visit",
      badge: "Safety First"
    },
    {
      title: "Diagnostics",
      description:
        "Check-engine lights, drivability issues, strange noises, and warning codes traced by experienced techs.",
      priceHint: "Fast fault-code evaluation",
      turnaround: "Same-day diagnostics",
      badge: "Most Requested"
    },
    {
      title: "Oil Changes",
      description:
        "Quick maintenance service with filter replacement, fluid checks, and a simple service timeline for your vehicle.",
      priceHint: "Straightforward maintenance pricing",
      turnaround: "Quick in-and-out visits",
      badge: "Routine Care"
    },
    {
      title: "A/C Repair",
      description:
        "System inspections, leak checks, compressor service, and recharge work to bring back reliable cabin cooling.",
      priceHint: "Inspection before major parts",
      turnaround: "Clear repair plan up front",
      badge: "Comfort"
    },
    {
      title: "Tires & Alignment",
      description:
        "Tire replacement, balancing, rotation, and alignment service that keeps your car driving straight and smooth.",
      priceHint: "Options for everyday and premium tires",
      turnaround: "Most installs same day",
      badge: "Performance"
    },
    {
      title: "Engine & Fleet Work",
      description:
        "From ignition problems to ongoing fleet maintenance, Summit Auto keeps work vehicles and family cars dependable.",
      priceHint: "Custom estimate by vehicle and scope",
      turnaround: "Priority scheduling available",
      badge: "Business Ready"
    }
  ],
  reasons: [
    {
      title: "Upfront estimates",
      description:
        "You get a clear explanation of the problem, your options, and the price before any repair starts."
    },
    {
      title: "Experienced local technicians",
      description:
        "Our ASE-certified team works on domestic, import, gas, and light-duty fleet vehicles every week."
    },
    {
      title: "Fast communication",
      description:
        "Call, text, or request service online and get a fast answer without chasing down the shop all day."
    },
    {
      title: "Built on repeat trust",
      description:
        "We grow through referrals, which means honesty and good workmanship are part of the business model."
    }
  ],
  reviews: [
    {
      name: "Maya R.",
      location: "Raleigh",
      quote:
        "They explained exactly what was wrong, what could wait, and what needed attention now. No pressure, no surprises, and my brakes feel perfect."
    },
    {
      name: "Chris D.",
      location: "Cary",
      quote:
        "I called in the morning for a check-engine light and had answers the same day. The whole experience felt organized and professional."
    },
    {
      name: "Angela P.",
      location: "North Hills",
      quote:
        "Summit Auto kept me updated, sent a clean estimate, and finished my A/C repair faster than I expected. This is my new shop."
    }
  ],
  faqs: [
    {
      question: "Do you work on all makes and models?",
      answer:
        "Yes. We regularly service most domestic and import vehicles, including family cars, SUVs, light trucks, and fleet vehicles."
    },
    {
      question: "How long do most repairs take?",
      answer:
        "Routine maintenance is often completed the same day. Diagnostics and larger repairs depend on parts availability and inspection results, but we always give you a realistic timeline."
    },
    {
      question: "Do you offer warranties?",
      answer:
        "Yes. Many repairs include a 24-month / 24,000-mile warranty. We will confirm warranty details before work starts."
    },
    {
      question: "Can I request a quote before I come in?",
      answer:
        "Absolutely. Call us or use the quote request form and we will help you with a fast estimate range based on your vehicle and symptoms."
    }
  ]
};
