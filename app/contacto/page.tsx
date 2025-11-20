"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { content } from "@/lib/content";

export default function Contacto() {
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
      "Gracias por su mensaje. Nos pondremos en contacto con ustedes pronto."
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
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title={contacto.title}
              subtitle={contacto.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <p className="mb-12 text-lg text-[var(--foreground)]/80 leading-relaxed text-center">
              {contacto.intro}
            </p>
          </FadeIn>
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
                  <option value="">Seleccionar...</option>
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
                Enviar mensaje
              </button>
            </form>
          </FadeIn>

          {/* Disclaimer */}
          <FadeIn delay={400}>
            <p className="mt-8 text-sm text-[var(--foreground)]/60 leading-relaxed text-center">
              {contacto.disclaimer}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
