"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { WHATSAPP_BASE } from "@/lib/config";

const whatsappMessage = "¡Hola! Me interesa una invitación digital para mi boda. ¿Me pueden dar más información?";

const features = [
  {
    title: "Diseño personalizado",
    description: "Tu invitación refleja el estilo de su boda: colores, tipografía, fotografías de ustedes.",
  },
  {
    title: "Cuenta regresiva",
    description: "Reloj en tiempo real que crea expectativa entre tus invitados conforme se acerca el gran día.",
  },
  {
    title: "Itinerario del evento",
    description: "Horarios y ubicaciones de ceremonia, coctel, cena y baile en un solo lugar.",
  },
  {
    title: "Galería de fotos",
    description: "Una selección de imágenes de ustedes para que sus invitados los conozcan un poco más.",
  },
  {
    title: "Sugerencias de hospedaje",
    description: "Lista de hoteles cercanos con códigos de reserva, teléfonos y enlaces directos.",
  },
  {
    title: "Código de vestimenta",
    description: "Instrucciones claras para que todos lleguen vestidos exactamente como lo imaginaron.",
  },
  {
    title: "Mesa de regalos",
    description: "Liga directa a su(s) mesa(s) de regalos para que sus invitados puedan consultarla con facilidad.",
  },
  {
    title: "Confirmación de asistencia",
    description: "Formulario de RSVP integrado para que sus invitados confirmen desde cualquier dispositivo.",
  },
];

const process = [
  {
    step: "01",
    title: "Aparta tu fecha",
    description: "Realizas el pago completo para asegurar tu lugar en nuestra agenda. Trabajamos con un número limitado de invitaciones al mes para cuidar la calidad de cada proyecto.",
  },
  {
    step: "02",
    title: "Nos compartes la información",
    description: "Te enviamos un formulario donde recopilamos todo: nombres, fecha, lugar, programa del evento, hoteles sugeridos, código de vestimenta, mesa de regalos, lista de invitados y cualquier detalle especial que quieran incluir.",
  },
  {
    step: "03",
    title: "Diseñamos y construimos",
    description: "Con toda la información en mano, desarrollamos tu invitación. Te compartimos un enlace de previsualización para que puedas revisarla antes de que salga al mundo.",
  },
  {
    step: "04",
    title: "Dos rondas de ajustes",
    description: "Tienes dos oportunidades para pedirnos cambios: textos, fotos, colores, orden de secciones. Lo ajustamos hasta que quede justo como lo imaginaron.",
  },
  {
    step: "05",
    title: "¡Lista para compartir!",
    description: "Recibes el enlace final de tu invitación. Compártelo por WhatsApp, correo o redes sociales. Sin impresiones, sin gastos de envío, sin límite de invitados.",
  },
];

export default function InvitacionesDigitales() {
  return (
    <>
      <div>
        {/* Hero */}
        <FadeIn>
          <SectionHeader
            title="Invitaciones Digitales"
            subtitle="Todo lo que tus invitados necesitan saber, en un solo enlace."
            backgroundImage="/images/gallery/TOP-SyP-116.webp"
          />
        </FadeIn>

        {/* Intro */}
        <section className="py-20 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
                Una invitación digital no es solo reemplazar el papel. Es una página web
                personalizada para tu boda: con su historia, sus fotos, el programa del día,
                hoteles, mesa de regalos y un formulario de confirmación de asistencia. Todo
                en un enlace que tus invitados pueden consultar desde cualquier dispositivo,
                en cualquier momento.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Example */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40 mb-4">
                Mira un ejemplo real
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
                Así luce una invitación terminada. Ana & Carlos comparten todos los
                detalles de su boda en un solo lugar, disponible para todos sus invitados.
              </p>
              <a
                href="https://rsvp.arrebolweddings.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                Ver ejemplo
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-16 uppercase">
                Qué incluye
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 60}>
                  <div className="bg-white border border-[var(--border-subtle)] p-6 h-full">
                    <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Price */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40 mb-6">
                Inversión
              </p>
              <p className="font-[var(--font-heading)] text-5xl md:text-6xl text-[var(--foreground)] mb-3" style={{ fontWeight: 300 }}>
                $5,500{" "}
                <span className="text-xl text-[var(--foreground)]/50 tracking-wider uppercase">MXN</span>
              </p>
              <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-widest mb-10">
                Pago único · Sin mensualidades
              </p>
              <p className="text-base text-[var(--foreground)]/70 leading-relaxed max-w-xl mx-auto">
                Incluye diseño, desarrollo, dos rondas de correcciones y alojamiento de la página
                por 12 meses a partir de la fecha de entrega.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] text-center mb-16 uppercase">
                Cómo funciona
              </h2>
            </FadeIn>
            <div className="space-y-10">
              {process.map((step, index) => (
                <FadeIn key={index} delay={index * 80}>
                  <div className="flex gap-8 items-start">
                    <p className="font-[var(--font-heading)] text-3xl text-[var(--foreground)]/20 flex-shrink-0 w-10 text-right" style={{ fontWeight: 300 }}>
                      {step.step}
                    </p>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--foreground)]/65 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Download CSV */}
        <section className="py-12 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/40 mb-4">
                Formulario de información
              </p>
              <p className="text-base text-[var(--foreground)]/70 leading-relaxed mb-8 max-w-xl mx-auto">
                Descarga esta plantilla, llénala con los datos de tu boda y envíanosla.
                Con eso tenemos todo lo que necesitamos para construir tu invitación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/downloads/informacion-invitacion-digital.csv"
                  download
                  className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                >
                  Información de la boda
                </a>
                <a
                  href="/downloads/plantilla-invitados.csv"
                  download
                  className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
                >
                  Lista de invitados
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-6 uppercase">
                ¿Empezamos?
              </h2>
              <p className="text-lg text-[var(--foreground)]/70 leading-relaxed mb-10">
                Escríbenos por WhatsApp y te contamos todo. Si ya tienes tu fecha y quieres
                asegurar tu lugar, con gusto te enviamos los detalles para apartar.
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest uppercase hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                Contactar por WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
