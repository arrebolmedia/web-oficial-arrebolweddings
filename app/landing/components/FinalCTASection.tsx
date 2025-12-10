"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { landingContentEs, landingContentEn } from "../content";

interface FormData {
  couple: string;
  email: string;
  phone: string;
  date: string;
  venue: string;
  guests: string;
  source: string;
  message: string;
}

const WHATSAPP_BASE = "https://wa.me/5217775001071?text=";

export default function FinalCTASection() {
  const { language } = useLanguage();
  const content = language === "es" ? landingContentEs : landingContentEn;
  const { contact } = content;

  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(contact.whatsappMessage);

  const [formData, setFormData] = useState<FormData>({
    couple: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    guests: "",
    source: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          couple: "",
          email: "",
          phone: "",
          date: "",
          venue: "",
          guests: "",
          source: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-[var(--foreground)] text-white"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent-blush)] mb-4">
            {contact.subtitle}
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            {contact.title}
          </h2>
          <p className="text-lg text-white/80">{contact.description}</p>
        </div>

        {/* Form */}
        {submitStatus !== "success" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Couple & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="couple"
                  name="couple"
                  required
                  placeholder={contact.formLabels.couple}
                  value={formData.couple}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={contact.formLabels.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={contact.formLabels.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder={contact.formLabels.date}
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Venue & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  placeholder={contact.formLabels.venue}
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="guests"
                  name="guests"
                  placeholder={contact.formLabels.guests}
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Source */}
            <div>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors"
                style={{ color: formData.source ? "white" : undefined }}
              >
                <option value="" className="text-[var(--foreground)]">
                  {contact.formLabels.source}
                </option>
                {contact.sourceOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="text-[var(--foreground)]"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: Message */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={contact.formLabels.message}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-blush)] transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--foreground)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === "es" ? "Enviando..." : "Sending...") : contact.formLabels.submit}
              </button>

              {/* Trust badge */}
              <p className="text-sm text-white/60 mt-4">
                ✓ {contact.trustBadge}
              </p>
            </div>

            {/* Error message */}
            {submitStatus === "error" && (
              <p className="text-center text-sm text-red-300">
                {contact.errorMessage}
              </p>
            )}
          </form>
        ) : (
          /* Success state */
          <div className="text-center py-12">
            <div className="text-5xl mb-6">✓</div>
            <h3 className="font-[var(--font-heading)] text-2xl text-white mb-4">
              {language === "es" ? "¡Mensaje enviado!" : "Message sent!"}
            </h3>
            <p className="text-white/80">{contact.successMessage}</p>
          </div>
        )}

        {/* Alternative contact */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm mb-4">
            {contact.whatsappText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
          >
            {contact.whatsappButton}
          </a>
        </div>
      </div>
    </section>
  );
}
