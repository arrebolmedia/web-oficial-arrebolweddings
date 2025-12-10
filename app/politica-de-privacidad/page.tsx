import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Pol├¡tica de Privacidad | Arrebol Weddings",
  description:
    "Pol├¡tica de privacidad y protecci├│n de datos personales de Arrebol Weddings.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header con imagen de fondo */}
      <SectionHeader
        title="Pol├¡tica de Privacidad"
        subtitle="├Ültima actualizaci├│n: enero 2026"
        backgroundImage="/images/gallery/SyP-273.webp"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Content */}
        <article className="prose prose-lg max-w-none text-[var(--foreground)]/80 space-y-8">
          <p className="text-lg leading-relaxed">
            En Arrebol Weddings, valoramos profundamente la privacidad y
            protecci├│n de los datos personales de nuestros clientes, prospectos
            y visitantes de nuestro sitio web. Este documento explica c├│mo
            recopilamos, utilizamos, resguardamos y, en su caso, compartimos la
            informaci├│n que nos proporcionas.
          </p>

          <p>
            Esta Pol├¡tica de Privacidad se emite en cumplimiento de la Ley
            Federal de Protecci├│n de Datos Personales en Posesi├│n de los
            Particulares (LFPDPPP) vigente en M├®xico.
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
              rectificaci├│n, cancelaci├│n u oposici├│n (ARCO), puedes contactarnos
              en:
            </p>
            <p className="font-medium">
              ­ƒô® Correo de contacto:{" "}
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
              de manera directa (formularios, correo, WhatsApp) o autom├ítica
              (cookies):
            </p>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Datos proporcionados directamente por los clientes o interesados:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Tel├®fono</li>
              <li>Correo electr├│nico</li>
              <li>Fecha de la boda</li>
              <li>Nombre de la pareja</li>
              <li>Informaci├│n sobre proveedores</li>
              <li>Preferencias o inspiraciones visuales</li>
              <li>Informaci├│n enviada mediante formularios del sitio web</li>
              <li>
                Archivos multimedia proporcionados por los clientes (im├ígenes,
                videos, referencias)
              </li>
            </ul>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Datos recolectados autom├íticamente:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cookies y tecnolog├¡as de seguimiento</li>
              <li>Anal├¡ticas de uso (Google Analytics)</li>
              <li>
                Informaci├│n de rendimiento de campa├▒as (Meta Pixel y
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
            <p>Los datos personales recabados ser├ín utilizados para:</p>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Finalidades primarias (necesarias para la prestaci├│n del
              servicio):
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Establecer contacto comercial.</li>
              <li>Preparar propuestas fotogr├íficas y de video.</li>
              <li>
                Gestionar el proceso de contrataci├│n y firma de acuerdos.
              </li>
              <li>Organizar log├¡stica de cobertura de la boda.</li>
              <li>Entregar material fotogr├ífico y videogr├ífico final.</li>
              <li>Emitir facturaci├│n y comprobantes fiscales.</li>
              <li>Mantener comunicaci├│n operativa con el cliente.</li>
            </ul>

            <h3 className="font-semibold text-[var(--foreground)] mt-6 mb-3">
              Finalidades secundarias (opcionales):
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Env├¡o de newsletter o comunicaciones de inter├®s.</li>
              <li>
                Estad├¡sticas internas, an├ílisis de rendimiento y mejora de
                servicios.
              </li>
              <li>
                Gesti├│n de remarketing o publicidad digital (cuando el usuario
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
              <li>Software de administraci├│n o CRM</li>
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
            <p className="mt-4">Solo podremos compartir informaci├│n cuando:</p>
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
              necesarias para proteger tu informaci├│n.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              6. Derechos ARCO (Acceso, Rectificaci├│n, Cancelaci├│n y Oposici├│n)
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
                requieren para alguna de las finalidades se├▒aladas.
              </li>
              <li>
                <strong>Oponerte</strong> al tratamiento de los mismos para
                finalidades espec├¡ficas.
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, escribe a:
            </p>
            <p className="font-medium">
              ­ƒô®{" "}
              <a
                href="mailto:hola@arrebolweddings.com"
                className="underline hover:text-[var(--foreground)]"
              >
                hola@arrebolweddings.com
              </a>
            </p>
            <p className="mt-4">
              Tu solicitud ser├í atendida conforme a los plazos y requisitos
              establecidos por la LFPDPPP.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              7. Uso de cookies y tecnolog├¡as similares
            </h2>
            <p>Nuestro sitio web puede utilizar:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Cookies de sesi├│n</li>
              <li>Cookies anal├¡ticas</li>
              <li>Cookies de publicidad (como Meta Pixel)</li>
            </ul>
            <p className="mt-4">
              Los usuarios pueden deshabilitar las cookies desde la
              configuraci├│n de su navegador. Esto podr├¡a limitar algunas
              funciones del sitio.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              8. Medidas de seguridad
            </h2>
            <p>
              Arrebol Weddings implementa medidas t├®cnicas, administrativas y
              f├¡sicas para proteger los datos personales contra:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>P├®rdida</li>
              <li>Acceso no autorizado</li>
              <li>Uso indebido</li>
              <li>Modificaci├│n</li>
              <li>Destrucci├│n</li>
            </ul>
            <p className="mt-4">
              Aun as├¡, ning├║n sistema es completamente invulnerable; en caso de
              detectar alguna vulneraci├│n, se notificar├í a los usuarios
              afectados conforme a la ley aplicable.
            </p>
          </section>

          {/* Section 9 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              9. Conservaci├│n de datos
            </h2>
            <p>
              Los datos personales se conservar├ín ├║nicamente por el tiempo
              necesario para cumplir con:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Las finalidades descritas en esta pol├¡tica</li>
              <li>Obligaciones legales y fiscales</li>
              <li>Intereses leg├¡timos relacionados con servicios contratados</li>
            </ul>
            <p className="mt-4">
              Posteriormente ser├ín eliminados o anonimizados de forma segura.
            </p>
          </section>

          {/* Section 10 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              10. Modificaciones a esta Pol├¡tica de Privacidad
            </h2>
            <p>
              Arrebol Weddings podr├í actualizar o modificar este documento en
              cualquier momento. La versi├│n vigente siempre estar├í disponible en
              nuestro sitio web.
            </p>
            <p className="mt-2">
              La fecha de la ├║ltima actualizaci├│n aparece al inicio del
              documento.
            </p>
          </section>

          {/* Section 11 */}
          <section className="pt-8 border-t border-[var(--foreground)]/10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              11. Aceptaci├│n
            </h2>
            <p>
              Al utilizar nuestros servicios, acceder a nuestro sitio web o
              proporcionarnos tus datos personales, reconoces haber le├¡do y
              aceptado los t├®rminos de esta Pol├¡tica de Privacidad.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
