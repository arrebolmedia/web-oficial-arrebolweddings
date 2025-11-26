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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log("Form submitted:", formData);
    alert(
      contacto.successMessage
    );
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center">
              {contacto.intro}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Column */}
            <FadeIn delay={300}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Couple Name */}
                <div>
                  <label
                    htmlFor="couple"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.couple}
                  </label>
                  <input
                    type="text"
                    id="couple"
                    name="couple"
                    required
                    value={formData.couple}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.date}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Venue */}
                <div>
                  <label
                    htmlFor="venue"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.venue}
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.guests}
                  </label>
                  <input
                    type="text"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  />
                </div>

                {/* Source */}
                <div>
                  <label
                    htmlFor="source"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.source}
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all"
                  >
                    <option value="">{contacto.selectOption}</option>
                    {contacto.sourceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    {contacto.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--border-subtle)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-wine)] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                >
                  {contacto.submitButton}
                </button>
              </form>

              {/* Disclaimer */}
              <p className="mt-8 text-sm text-[var(--foreground)]/60 leading-relaxed text-center">
                {contacto.disclaimer}
              </p>
            </FadeIn>

            {/* Image Column */}
            <FadeIn delay={400}>
              <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0 lg:ml-auto sticky top-8">
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
