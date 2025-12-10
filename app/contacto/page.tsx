"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function Contacto() {
  const { content } = useLanguage();
  const { contacto } = content;
  const [formData, setFormData] = useState({
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
      {/* Header con imagen de fondo */}
      <FadeIn>
        <SectionHeader
          title={contacto.title}
          subtitle={contacto.subtitle}
          backgroundImage="/images/gallery/TOP-AyJ-500.webp"
        />
      </FadeIn>

      {/* Form */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-10 text-lg text-[var(--foreground)]/80 leading-relaxed text-center max-w-2xl mx-auto">
              {contacto.intro}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Column */}
            <FadeIn delay={300}>
              <form onSubmit={handleSubmit} className="space-y-1">
                {/* Row 1: Couple & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      id="couple"
                      name="couple"
                      required
                      placeholder={contacto.fields.couple}
                      value={formData.couple}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={contacto.fields.email}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={contacto.fields.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder={contacto.fields.date}
                      value={formData.date}
                      onChange={handleChange}
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                    />
                  </div>
                </div>

                {/* Row 3: Venue & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      placeholder={contacto.fields.venue}
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      id="guests"
                      name="guests"
                      placeholder={contacto.fields.guests}
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
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
                    className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors text-sm text-[var(--foreground)]/40 focus:text-[var(--foreground)]"
                    style={{ color: formData.source ? 'var(--foreground)' : undefined }}
                  >
                    <option value="">{contacto.fields.source}</option>
                    {contacto.sourceOptions.map((option) => (
                      <option key={option} value={option}>
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
                    rows={3}
                    required
                    placeholder={contacto.fields.message}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors resize-none placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : contacto.submitButton}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="pt-4 text-sm text-green-700">
                    {contacto.successMessage}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="pt-4 text-sm text-red-700">
                    Error al enviar. Por favor intenta de nuevo o escr├¡benos a hola@arrebolweddings.com
                  </p>
                )}

                {/* Disclaimer */}
                <p className="pt-6 text-xs text-[var(--foreground)]/50 leading-relaxed">
                  {contacto.disclaimer}
                </p>
              </form>
            </FadeIn>

            {/* Image Column */}
            <FadeIn delay={400}>
              <div className="relative aspect-[3/4] w-full sticky top-24">
                <Image
                  src="/images/gallery/SyP-273.webp"
                  alt="Contact Arrebol Weddings"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={500}>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
              {contacto.whatsappText}
            </p>
            <a
              href={`https://wa.me/5217775001071?text=${encodeURIComponent(contacto.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
            >
              {contacto.whatsappButton}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
