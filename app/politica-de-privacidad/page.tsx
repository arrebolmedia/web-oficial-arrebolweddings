import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Política de Privacidad | Arrebol Weddings",
  description:
    "Política de privacidad y protección de datos personales de Arrebol Weddings.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header con imagen de fondo */}
      <SectionHeader
        title="Política de Privacidad"
        subtitle="Última actualización: enero 2026"
        backgroundImage="/images/gallery/SyP-273.webp"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Content */}
        <article className="prose prose-lg max-w-none text-[var(--foreground)]/80 space-y-8">
          <p className="text-lg leading-relaxed">
            En Arrebol Weddings, valoramos profundamente la privacidad y
            protección de los datos personales de nuestros clientes, prospectos
            y visitantes de nuestro sitio web. Este documento explica cómo
            recopilamos, utilizamos, resguardamos y, en su caso, compartimos la
            información que nos proporcionas.
          </p>

          <p>
            Esta Política de Privacidad se emite en cumplimiento de la Ley
            Federal de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP) vigente en México.
          </p>

          {/* Section 1 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              1. Responsable del tratamiento de datos personales
            </h2>
            <p>
              El responsable del tratamiento de tus datos personales es Anthony
              Cazares, titular del proyecto Arrebol Weddings.
            </p>
            <p>
              Para asuntos relacionados con privacidad, solicitudes de acceso,
              rectificación, cancelación u oposición (ARCO), puedes contactarnos
              en:
            </p>
            <p className="font-medium">
              📩 Correo de contacto:{" "}
              <a
                href="mailto:hola@arrebolweddings.com"
                className="underline hover:text-[var(--foreground)]"
              >
                hola@arrebolweddings.com
              </a>
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              2. Datos personales que recolectamos
            </h2>
            <p>
              Arrebol Weddings recopila los siguientes datos personales, ya sea
              de manera directa (formularios, correo, WhatsApp) o automática
              (cookies):
            </p>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Datos proporcionados directamente por los clientes o interesados:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Teléfono</li>
              <li>Correo electrónico</li>
              <li>Fecha de la boda</li>
              <li>Nombre de la pareja</li>
              <li>Información sobre proveedores</li>
              <li>Preferencias o inspiraciones visuales</li>
              <li>Información enviada mediante formularios del sitio web</li>
              <li>
                Archivos multimedia proporcionados por los clientes (imágenes,
                videos, referencias)
              </li>
            </ul>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Datos recolectados automáticamente:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cookies y tecnologías de seguimiento</li>
              <li>Analíticas de uso (Google Analytics)</li>
              <li>
                Información de rendimiento de campañas (Meta Pixel y
                herramientas similares)
              </li>
            </ul>

            <p className="mt-4 italic">
              No solicitamos ni tratamos datos personales sensibles.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              3. Finalidades del tratamiento de datos
            </h2>
            <p>Los datos personales recabados serán utilizados para:</p>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Finalidades primarias (necesarias para la prestación del
              servicio):
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Establecer contacto comercial.</li>
              <li>Preparar propuestas fotográficas y de video.</li>
              <li>
                Gestionar el proceso de contratación y firma de acuerdos.
              </li>
              <li>Organizar logística de cobertura de la boda.</li>
              <li>Entregar material fotográfico y videográfico final.</li>
              <li>Emitir facturación y comprobantes fiscales.</li>
              <li>Mantener comunicación operativa con el cliente.</li>
            </ul>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Finalidades secundarias (opcionales):
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Envío de newsletter o comunicaciones de interés.</li>
              <li>
                Estadísticas internas, análisis de rendimiento y mejora de
                servicios.
              </li>
              <li>
                Gestión de remarketing o publicidad digital (cuando el usuario
                lo acepte).
              </li>
            </ul>

            <p className="mt-4">
              Si no deseas que tus datos sean utilizados para finalidades
              secundarias, puedes solicitarlo en cualquier momento enviando un
              correo a{" "}
              <a
                href="mailto:hola@arrebolweddings.com"
                className="underline hover:text-[var(--foreground)]"
              >
                hola@arrebolweddings.com
              </a>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              4. Uso de herramientas externas
            </h2>
            <p>
              Para operar nuestros servicios utilizamos plataformas de terceros
              que pueden procesar datos personales en nuestro nombre, tales
              como:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Google Workspace (correo, Drive, documentos)</li>
              <li>Google Analytics</li>
              <li>Meta Ads / Meta Pixel</li>
              <li>
                Plataformas de entrega de contenido (como Pic-Time u otras
                similares)
              </li>
              <li>Software de administración o CRM</li>
              <li>Servicios de almacenamiento en la nube</li>
            </ul>
            <p className="mt-4">
              Estos proveedores aplican sus propios avisos de privacidad y
              compromisos de seguridad.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              5. Transferencias de datos personales
            </h2>
            <p className="font-medium">
              Arrebol Weddings no vende ni comercializa datos personales.
            </p>
            <p className="mt-4">Solo podremos compartir información cuando:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>
                Sea necesario para completar servicios contratados (por ejemplo,
                proveedores involucrados en la boda).
              </li>
              <li>Se requiera por mandato legal o autoridad competente.</li>
              <li>
                Se utilicen servicios de terceros que procesen datos en nuestro
                nombre (como los mencionados anteriormente).
              </li>
            </ul>
            <p className="mt-4">
              Todas las transferencias se realizan con las medidas de seguridad
              necesarias para proteger tu información.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h2>
            <p>Como titular de datos personales, tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>
                <strong>Acceder</strong> a tus datos que poseemos.
              </li>
              <li>
                <strong>Rectificarlos</strong> en caso de ser inexactos o
                incompletos.
              </li>
              <li>
                <strong>Cancelar</strong> tus datos cuando consideres que no se
                requieren para alguna de las finalidades señaladas.
              </li>
              <li>
                <strong>Oponerte</strong> al tratamiento de los mismos para
                finalidades específicas.
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, escribe a:
            </p>
            <p className="font-medium">
              📩{" "}
              <a
                href="mailto:hola@arrebolweddings.com"
                className="underline hover:text-[var(--foreground)]"
              >
                hola@arrebolweddings.com
              </a>
            </p>
            <p className="mt-4">
              Tu solicitud será atendida conforme a los plazos y requisitos
              establecidos por la LFPDPPP.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              7. Uso de cookies y tecnologías similares
            </h2>
            <p>Nuestro sitio web puede utilizar:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Cookies de sesión</li>
              <li>Cookies analíticas</li>
              <li>Cookies de publicidad (como Meta Pixel)</li>
            </ul>
            <p className="mt-4">
              Los usuarios pueden deshabilitar las cookies desde la
              configuración de su navegador. Esto podría limitar algunas
              funciones del sitio.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              8. Medidas de seguridad
            </h2>
            <p>
              Arrebol Weddings implementa medidas técnicas, administrativas y
              físicas para proteger los datos personales contra:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Pérdida</li>
              <li>Acceso no autorizado</li>
              <li>Uso indebido</li>
              <li>Modificación</li>
              <li>Destrucción</li>
            </ul>
            <p className="mt-4">
              Aun así, ningún sistema es completamente invulnerable; en caso de
              detectar alguna vulneración, se notificará a los usuarios
              afectados conforme a la ley aplicable.
            </p>
          </section>

          {/* Section 9 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              9. Conservación de datos
            </h2>
            <p>
              Los datos personales se conservarán únicamente por el tiempo
              necesario para cumplir con:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Las finalidades descritas en esta política</li>
              <li>Obligaciones legales y fiscales</li>
              <li>Intereses legítimos relacionados con servicios contratados</li>
            </ul>
            <p className="mt-4">
              Posteriormente serán eliminados o anonimizados de forma segura.
            </p>
          </section>

          {/* Section 10 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              10. Modificaciones a esta Política de Privacidad
            </h2>
            <p>
              Arrebol Weddings podrá actualizar o modificar este documento en
              cualquier momento. La versión vigente siempre estará disponible en
              nuestro sitio web.
            </p>
            <p className="mt-2">
              La fecha de la última actualización aparece al inicio del
              documento.
            </p>
          </section>

          {/* Section 11 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              11. Aceptación
            </h2>
            <p>
              Al utilizar nuestros servicios, acceder a nuestro sitio web o
              proporcionarnos tus datos personales, reconoces haber leído y
              aceptado los términos de esta Política de Privacidad.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
