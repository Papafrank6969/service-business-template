"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/lib/site-content";

type QuoteFormState = {
  name: string;
  phone: string;
  service: string;
  vehicle: string;
  message: string;
};

const initialState: QuoteFormState = {
  name: "",
  phone: "",
  service: "",
  vehicle: "",
  message: ""
};

export function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${siteContent.business.shortName} quote request from ${form.name || "website visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service Needed: ${form.service}`,
      `Vehicle: ${form.vehicle}`,
      "",
      "Issue details:",
      form.message
    ].join("\n");

    window.location.href = `mailto:${siteContent.business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function updateField<K extends keyof QuoteFormState>(key: K, value: QuoteFormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value
    }));
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form-grid">
        <div>
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input
            className="field-input"
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="field-input"
            id="phone"
            name="phone"
            placeholder="Best number to reach you"
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="service">
            Service Needed
          </label>
          <select
            className="field-select"
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
          >
            <option value="">Select a service</option>
            {siteContent.services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="vehicle">
            Year / Make / Model
          </label>
          <input
            className="field-input"
            id="vehicle"
            name="vehicle"
            placeholder="2018 Honda Accord"
            required
            value={form.vehicle}
            onChange={(event) => updateField("vehicle", event.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="message">
          Tell us what is going on
        </label>
        <textarea
          className="field-textarea"
          id="message"
          name="message"
          placeholder="Brake noise, check-engine light, A/C blowing warm, or anything else we should know."
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </div>

      <button className="button-primary" type="submit">
        {siteContent.cta.secondary}
      </button>
      <div className="form-note">
        This template opens the visitor&apos;s email app with the quote request prefilled. Replace
        this with your CRM or form backend when you are ready.
      </div>
    </form>
  );
}
