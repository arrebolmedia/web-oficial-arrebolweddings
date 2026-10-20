// Alianzas comerciales: una landing para wedding planners y otra para venues.
// Las dos usan las mismas secciones; aquí solo cambia el texto (es / en).

import type { Metadata } from "next";

export type AlianzaVariant = "planners" | "venues";

export const ALIANZAS_EMAIL = "hola@arrebolweddings.com";
export const ALIANZAS_INSTAGRAM = "https://instagram.com/arrebolweddings";

interface Card {
  title: string;
  description: string;
}

interface Offer extends Card {
  whatsappMessage: string;
}

export interface AlianzasContent {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadge: string;
    whatsappMessage: string;
    image: string;
    imageAlt: string;
  };
  about: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    quote: string;
    signature: string;
    values: Card[];
  };
  gallery: {
    loading: string;
  };
  benefits: {
    subtitle: string;
    title: string;
    description: string;
    items: Card[];
  };
  offers: {
    subtitle: string;
    title: string;
    description: string;
    cardCta: string;
    otherText: string;
    otherCta: string;
    otherWhatsappMessage: string;
    items: Offer[];
  };
  howWeWork: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
    whatsappMessage: string;
    steps: (Card & { number: string })[];
  };
  faq: {
    subtitle: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    description: string;
    whatsapp: string;
    email: string;
    instagram: string;
    emailSubject: string;
    whatsappMessage: string;
    floatingLabel: string;
  };
}

// ---------------------------------------------------------------------------
// Wedding planners
// ---------------------------------------------------------------------------

const plannersEs: AlianzasContent = {
  hero: {
    badge: "Para wedding planners",
    headline: "Que se vea todo\nlo que planeaste",
    subheadline:
      "Foto y video de bodas que sigue tu timeline, se coordina con tu equipo y deja a tus parejas contentas de haberte hecho caso.",
    ctaPrimary: "Escríbenos",
    ctaSecondary: "Ver nuestro trabajo",
    trustBadge: "Más de 200 bodas documentadas",
    whatsappMessage: "¡Hola! Soy wedding planner y quiero platicar sobre una alianza con Arrebol.",
    image: "/images/gallery/SyP-109.webp",
    imageAlt: "Entrada de la novia por el pasillo de una ceremonia en hacienda, por Arrebol Weddings",
  },
  about: {
    subtitle: "Quiénes somos",
    title: "Somos Brenda y Anthony",
    paragraphs: [
      "Hacemos foto y video de bodas, y sabemos que cuando nos recomiendas pones tu nombre de por medio. Si un proveedor falla, la pareja se acuerda de quién se lo sugirió.",
      "Por eso cuidamos lo mismo que tú: llegar a tiempo, seguir el timeline, no estorbarle a tu equipo y entregar en la fecha que dijimos.",
    ],
    quote: "Cuando nos recomiendas, también cuidamos tu nombre.",
    signature: "— Brenda & Anthony",
    values: [
      {
        title: "Puntuales",
        description: "Llegamos antes de la hora acordada y respetamos cada bloque del timeline.",
      },
      {
        title: "Sin sorpresas",
        description: "Antes, durante y después de la boda sabes qué estamos haciendo y cuándo llega cada entrega.",
      },
      {
        title: "Trabajo que te luce",
        description: "Las parejas comparten sus fotos y su video, y con ellos se ve también tu trabajo.",
      },
    ],
  },
  gallery: {
    loading: "Cargando galería...",
  },
  benefits: {
    subtitle: "Para planners",
    title: "¿Por qué con nosotros?",
    description:
      "Porque una boda bien planeada merece verse así de bien, y porque trabajar con nosotros te quita pendientes en vez de sumarte.",
    items: [
      {
        title: "Seguimos tu timeline",
        description: "Lo revisamos contigo antes de la boda, marcamos los momentos clave y lo seguimos al pie de la letra.",
      },
      {
        title: "Tu montaje, bien retratado",
        description: "Cuidamos la decoración, las mesas y los detalles que diseñaste, no solo a la pareja.",
      },
      {
        title: "Discretos",
        description: "En la ceremonia casi no se nota que estamos. Si necesitamos mover algo, primero te preguntamos.",
      },
      {
        title: "Entregas en fecha",
        description: "Teaser en 2 a 3 semanas, fotos en 6 a 8 y video completo en 10 a 12. Tus parejas no te van a llamar para preguntar por qué no llega.",
      },
      {
        title: "Hablas directo con nosotros",
        description: "Sin intermediarios, antes y después de la boda. Respondemos rápido.",
      },
      {
        title: "Nos adaptamos",
        description: "Se movió la ceremonia, llovió, se recorrió la cena: nos ajustamos contigo sobre la marcha.",
      },
    ],
  },
  offers: {
    subtitle: "Alianza comercial",
    title: "¿Qué te ofrecemos?",
    description: "Depende de lo que necesites. Elige una, dos o las tres.",
    cardCta: "Me interesa",
    otherText: "¿Necesitas algo distinto?",
    otherCta: "Cuéntanos",
    otherWhatsappMessage: "¡Hola! Soy wedding planner y quiero platicar sobre una alianza distinta.",
    items: [
      {
        title: "10% de comisión",
        description:
          "Por cada pareja que nos recomiendes y nos contrate, te llevas el 10% del servicio. Lo pagamos nosotros: la pareja paga lo mismo que cualquier otro cliente.",
        whatsappMessage: "¡Hola! Soy wedding planner y me interesa la comisión por recomendarlos.",
      },
      {
        title: "Tu sitio web",
        description:
          "Diseñamos y construimos el sitio de tu agencia —portafolio, servicios y contacto— y lo mantenemos al día para que tú no tengas que pensar en él.",
        whatsappMessage: "¡Hola! Soy wedding planner y me interesa que me hagan mi sitio web.",
      },
      {
        title: "Foto y video para tu marca",
        description:
          "Sesiones de tu equipo, cobertura de tus montajes y reels de tus bodas para tus redes. Contenido de tu negocio, no solo de la pareja.",
        whatsappMessage: "¡Hola! Soy wedding planner y me interesa foto y video para mi marca.",
      },
    ],
  },
  howWeWork: {
    subtitle: "Cómo trabajamos",
    title: "Así hacemos equipo",
    description: "Cuatro pasos, sin trámites de más.",
    cta: "Agendar llamada",
    whatsappMessage: "¡Hola! Soy wedding planner y me gustaría agendar una llamada con ustedes.",
    steps: [
      {
        number: "01",
        title: "Platicamos",
        description: "Una llamada para conocernos, ver cómo trabajas y enseñarte bodas completas, no solo nuestras mejores fotos.",
      },
      {
        number: "02",
        title: "Coordinamos",
        description: "Antes de cada boda revisamos juntos el timeline, los momentos clave y lo que espera la pareja.",
      },
      {
        number: "03",
        title: "El día de la boda",
        description: "Llegamos antes y trabajamos discretamente, coordinados con tu equipo.",
      },
      {
        number: "04",
        title: "Entregamos",
        description: "En la fecha acordada. Te avisamos cuando está listo y te compartimos fotos para tu portafolio.",
      },
    ],
  },
  faq: {
    subtitle: "Preguntas frecuentes",
    title: "Lo que nos suelen preguntar",
    items: [
      {
        question: "¿Cómo funciona la comisión?",
        answer: "Por cada pareja que nos recomiendes y firme contrato, recibes el 10% del servicio contratado. Sale de nosotros: el precio para la pareja no cambia.",
      },
      {
        question: "¿Cómo manejan la comunicación con mis parejas?",
        answer: "Como prefieras: hablamos directo con ellos o todo pasa por ti. En cualquier caso, siempre estás enterado/a.",
      },
      {
        question: "¿Qué pasa si hay cambios de último momento?",
        answer: "Pasan en todas las bodas. Nos ajustamos al nuevo timeline y lo coordinamos contigo en el momento.",
      },
      {
        question: "¿Cuánto tardan en entregar?",
        answer: "El teaser en 2 a 3 semanas, las fotos en 6 a 8 y el video completo en 10 a 12.",
      },
      {
        question: "¿Puedo usar las fotos en mi portafolio?",
        answer: "Sí. Te compartimos una selección de cada boda para tus redes, tu sitio y tus presentaciones.",
      },
      {
        question: "¿Trabajan fuera de Morelos?",
        answer: "Sí, en todo México; solo se suman viáticos según el lugar. Hemos trabajado en CDMX, Guerrero, Puebla, Oaxaca y más.",
      },
    ],
  },
  contact: {
    title: "¿Hacemos equipo?",
    description: "Escríbenos por WhatsApp, correo o Instagram y agendamos una llamada.",
    whatsapp: "WhatsApp",
    email: "Correo",
    instagram: "Instagram",
    emailSubject: "Alianza con wedding planner",
    whatsappMessage: "¡Hola! Soy wedding planner y quiero platicar sobre una alianza con Arrebol.",
    floatingLabel: "Escríbenos por WhatsApp",
  },
};

const plannersEn: AlianzasContent = {
  hero: {
    badge: "For wedding planners",
    headline: "Let everything\nyou planned show",
    subheadline:
      "Wedding photo and video that follows your timeline, works with your team and leaves your couples glad they took your advice.",
    ctaPrimary: "Message us",
    ctaSecondary: "See our work",
    trustBadge: "Over 200 weddings documented",
    whatsappMessage: "Hi! I'm a wedding planner and I'd like to talk about partnering with Arrebol.",
    image: "/images/gallery/SyP-109.webp",
    imageAlt: "Bride walking down the aisle at a hacienda ceremony, by Arrebol Weddings",
  },
  about: {
    subtitle: "Who we are",
    title: "We're Brenda and Anthony",
    paragraphs: [
      "We do wedding photo and video, and we know that when you recommend us, your name is on the line. If a vendor lets them down, the couple remembers who suggested them.",
      "So we care about the same things you do: showing up on time, following the timeline, staying out of your team's way and delivering on the date we said.",
    ],
    quote: "When you recommend us, we look after your name too.",
    signature: "— Brenda & Anthony",
    values: [
      {
        title: "On time",
        description: "We arrive before the agreed time and respect every block of the timeline.",
      },
      {
        title: "No surprises",
        description: "Before, during and after the wedding you know what we're doing and when each delivery arrives.",
      },
      {
        title: "Work that makes you look good",
        description: "Couples share their photos and video, and your work shows in them too.",
      },
    ],
  },
  gallery: {
    loading: "Loading gallery...",
  },
  benefits: {
    subtitle: "For planners",
    title: "Why us?",
    description:
      "Because a well-planned wedding deserves to look this good, and because working with us takes things off your plate instead of adding to it.",
    items: [
      {
        title: "We follow your timeline",
        description: "We go over it with you before the wedding, mark the key moments and stick to it.",
      },
      {
        title: "Your setup, well photographed",
        description: "We take care of the décor, the tables and the details you designed, not just the couple.",
      },
      {
        title: "Discreet",
        description: "During the ceremony you'll barely notice us. If we need to move something, we ask you first.",
      },
      {
        title: "Deliveries on time",
        description: "Teaser in 2 to 3 weeks, photos in 6 to 8 and the full film in 10 to 12. Your couples won't be calling you to ask where it is.",
      },
      {
        title: "You talk to us directly",
        description: "No middlemen, before and after the wedding. We answer fast.",
      },
      {
        title: "We adapt",
        description: "The ceremony moved, it rained, dinner ran late: we adjust with you on the fly.",
      },
    ],
  },
  offers: {
    subtitle: "Partnership",
    title: "What we offer you",
    description: "It depends on what you need. Pick one, two or all three.",
    cardCta: "I'm interested",
    otherText: "Need something different?",
    otherCta: "Tell us",
    otherWhatsappMessage: "Hi! I'm a wedding planner and I'd like to talk about a different kind of partnership.",
    items: [
      {
        title: "10% commission",
        description:
          "For every couple you refer who books us, you get 10% of the service. We pay it: the couple pays the same as any other client.",
        whatsappMessage: "Hi! I'm a wedding planner and I'm interested in the referral commission.",
      },
      {
        title: "Your website",
        description:
          "We design and build your agency's site —portfolio, services and contact— and keep it up to date so you don't have to think about it.",
        whatsappMessage: "Hi! I'm a wedding planner and I'm interested in having you build my website.",
      },
      {
        title: "Photo and video for your brand",
        description:
          "Shoots of your team, coverage of your setups and reels of your weddings for your social media. Content about your business, not just the couple.",
        whatsappMessage: "Hi! I'm a wedding planner and I'm interested in photo and video for my brand.",
      },
    ],
  },
  howWeWork: {
    subtitle: "How we work",
    title: "How we team up",
    description: "Four steps, no red tape.",
    cta: "Schedule a call",
    whatsappMessage: "Hi! I'm a wedding planner and I'd like to schedule a call with you.",
    steps: [
      {
        number: "01",
        title: "We talk",
        description: "A call to meet, see how you work and show you full weddings, not just our best shots.",
      },
      {
        number: "02",
        title: "We coordinate",
        description: "Before each wedding we go over the timeline, the key moments and what the couple expects.",
      },
      {
        number: "03",
        title: "The wedding day",
        description: "We arrive early and work discreetly, in sync with your team.",
      },
      {
        number: "04",
        title: "We deliver",
        description: "On the agreed date. We let you know when it's ready and share photos for your portfolio.",
      },
    ],
  },
  faq: {
    subtitle: "FAQ",
    title: "What people usually ask",
    items: [
      {
        question: "How does the commission work?",
        answer: "For every couple you refer who signs with us, you get 10% of the contracted service. It comes from us: the couple's price doesn't change.",
      },
      {
        question: "How do you handle communication with my couples?",
        answer: "However you prefer: we talk to them directly or everything goes through you. Either way, you're always in the loop.",
      },
      {
        question: "What if there are last-minute changes?",
        answer: "They happen at every wedding. We adjust to the new timeline and coordinate with you on the spot.",
      },
      {
        question: "How long does delivery take?",
        answer: "The teaser in 2 to 3 weeks, photos in 6 to 8 and the full film in 10 to 12.",
      },
      {
        question: "Can I use the photos in my portfolio?",
        answer: "Yes. We share a selection from each wedding for your social media, your site and your presentations.",
      },
      {
        question: "Do you work outside Morelos?",
        answer: "Yes, all over Mexico; we only add travel expenses depending on the location. We've worked in CDMX, Guerrero, Puebla, Oaxaca and more.",
      },
    ],
  },
  contact: {
    title: "Shall we team up?",
    description: "Message us on WhatsApp, email or Instagram and we'll set up a call.",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    emailSubject: "Wedding planner partnership",
    whatsappMessage: "Hi! I'm a wedding planner and I'd like to talk about partnering with Arrebol.",
    floatingLabel: "Message us on WhatsApp",
  },
};

// ---------------------------------------------------------------------------
// Venues
// ---------------------------------------------------------------------------

const venuesEs: AlianzasContent = {
  hero: {
    badge: "Para venues",
    headline: "Tu venue,\nen su mejor luz",
    subheadline:
      "Foto y video de bodas que respeta tus reglas, se coordina con tu equipo y muestra tu espacio como merece verse.",
    ctaPrimary: "Escríbenos",
    ctaSecondary: "Ver nuestro trabajo",
    trustBadge: "Más de 200 bodas documentadas",
    whatsappMessage: "¡Hola! Escribo de parte de un venue y quiero platicar sobre una alianza con Arrebol.",
    image: "/images/gallery/_MG_1245.webp",
    imageAlt: "Los novios salen de su ceremonia en un jardín, por Arrebol Weddings",
  },
  about: {
    subtitle: "Quiénes somos",
    title: "Somos Brenda y Anthony",
    paragraphs: [
      "Hacemos foto y video de bodas. Y cada boda que se celebra en tu venue también habla de ti: de tu espacio, de tu servicio y de los proveedores que dejas entrar.",
      "Por eso trabajamos como invitados que conocen la casa: respetamos tus horarios y tus zonas, nos coordinamos con tu equipo y dejamos todo como lo encontramos.",
    ],
    quote: "Cada boda en tu venue también es una foto de tu venue.",
    signature: "— Brenda & Anthony",
    values: [
      {
        title: "Respetamos tus reglas",
        description: "Horarios, accesos, zonas restringidas y tiempos de montaje: los conocemos antes de llegar.",
      },
      {
        title: "Nos coordinamos con tu equipo",
        description: "Hablamos con tu coordinador antes de la boda y el día del evento seguimos sus indicaciones.",
      },
      {
        title: "Tu espacio sale bien",
        description: "Arquitectura, jardines y rincones: en cada boda, tu venue aparece en su mejor versión.",
      },
    ],
  },
  gallery: {
    loading: "Cargando galería...",
  },
  benefits: {
    subtitle: "Para venues",
    title: "¿Por qué con nosotros?",
    description: "Las fotos de una boda se comparten durante años, y en todas sale tu venue.",
    items: [
      {
        title: "Tu venue en cada foto",
        description: "Retratamos a la pareja sin olvidar dónde está: la arquitectura, los jardines y la luz de tu espacio.",
      },
      {
        title: "Aprendemos tu casa",
        description: "Con cada boda conocemos mejor tu venue: dónde cae la luz a cada hora y cuáles son sus mejores rincones.",
      },
      {
        title: "Sin interrupciones",
        description: "Llegamos a tiempo, seguimos tus lineamientos y no interferimos con el servicio ni con el montaje.",
      },
      {
        title: "Material para vender",
        description: "Te compartimos fotos y clips de las bodas en tu espacio para tu sitio, tus redes y tus presentaciones a parejas.",
      },
      {
        title: "Parejas que presumen tu venue",
        description: "Cuando el recuerdo queda hermoso, las parejas recomiendan el lugar donde se casaron.",
      },
      {
        title: "Hablas directo con nosotros",
        description: "Sin intermediarios, antes y después de cada boda. Respondemos rápido.",
      },
    ],
  },
  offers: {
    subtitle: "Alianza comercial",
    title: "¿Qué te ofrecemos?",
    description: "Depende de lo que necesite tu venue. Elige una, dos o las tres.",
    cardCta: "Me interesa",
    otherText: "¿Necesitas algo distinto?",
    otherCta: "Cuéntanos",
    otherWhatsappMessage: "¡Hola! Escribo de parte de un venue y quiero platicar sobre una alianza distinta.",
    items: [
      {
        title: "10% de comisión",
        description:
          "Por cada pareja que nos recomiendes y nos contrate, te llevas el 10% del servicio. Lo pagamos nosotros: la pareja paga lo mismo que cualquier otro cliente.",
        whatsappMessage: "¡Hola! Escribo de parte de un venue y me interesa la comisión por recomendarlos.",
      },
      {
        title: "El sitio web de tu venue",
        description:
          "Diseñamos y construimos tu sitio —espacios, capacidades, galería y contacto— y lo mantenemos al día para que tú no tengas que pensar en él.",
        whatsappMessage: "¡Hola! Escribo de parte de un venue y me interesa que nos hagan el sitio web.",
      },
      {
        title: "Foto y video de tu espacio",
        description:
          "Sesiones del venue, recorridos en video y reels para tus redes y tu material de ventas, haya boda o no.",
        whatsappMessage: "¡Hola! Escribo de parte de un venue y me interesa foto y video de nuestro espacio.",
      },
    ],
  },
  howWeWork: {
    subtitle: "Cómo trabajamos",
    title: "Así hacemos equipo",
    description: "Cuatro pasos, sin trámites de más.",
    cta: "Agendar llamada",
    whatsappMessage: "¡Hola! Escribo de parte de un venue y me gustaría agendar una llamada con ustedes.",
    steps: [
      {
        number: "01",
        title: "Platicamos",
        description: "Una llamada o una visita para conocer tu espacio, tus lineamientos y cómo trabaja tu equipo.",
      },
      {
        number: "02",
        title: "Coordinamos",
        description: "Antes de cada boda acordamos con tu coordinador horarios, accesos y zonas para foto.",
      },
      {
        number: "03",
        title: "El día de la boda",
        description: "Trabajamos discretamente, siguiendo tus reglas y coordinados con tu equipo.",
      },
      {
        number: "04",
        title: "Entregamos",
        description: "A la pareja, en la fecha acordada. Y a ti, fotos de tu espacio para tu marketing.",
      },
    ],
  },
  faq: {
    subtitle: "Preguntas frecuentes",
    title: "Lo que nos suelen preguntar",
    items: [
      {
        question: "¿Cómo funciona la comisión?",
        answer: "Por cada pareja que nos recomiendes y firme contrato, recibes el 10% del servicio contratado. Sale de nosotros: el precio para la pareja no cambia.",
      },
      {
        question: "¿Respetan los lineamientos del venue?",
        answer: "Siempre. Antes de cada boda revisamos contigo horarios, accesos, zonas restringidas y cualquier regla del lugar.",
      },
      {
        question: "¿Qué material recibe el venue?",
        answer: "Una selección de fotos y clips de cada boda en tu espacio, para tu sitio, tus redes y tus presentaciones.",
      },
      {
        question: "¿Pueden hacer una sesión del venue sin boda?",
        answer: "Sí. Hacemos sesiones de foto y video de tu espacio para tu marketing, aparte de las bodas que cubrimos.",
      },
      {
        question: "¿Trabajan fuera de Morelos?",
        answer: "Sí, en todo México; solo se suman viáticos según el lugar. Hemos trabajado en CDMX, Guerrero, Puebla, Oaxaca y más.",
      },
    ],
  },
  contact: {
    title: "¿Hacemos equipo?",
    description: "Escríbenos por WhatsApp, correo o Instagram y agendamos una llamada.",
    whatsapp: "WhatsApp",
    email: "Correo",
    instagram: "Instagram",
    emailSubject: "Alianza con venue",
    whatsappMessage: "¡Hola! Escribo de parte de un venue y quiero platicar sobre una alianza con Arrebol.",
    floatingLabel: "Escríbenos por WhatsApp",
  },
};

const venuesEn: AlianzasContent = {
  hero: {
    badge: "For venues",
    headline: "Your venue,\nin its best light",
    subheadline:
      "Wedding photo and video that respects your rules, works with your team and shows your space the way it deserves to be seen.",
    ctaPrimary: "Message us",
    ctaSecondary: "See our work",
    trustBadge: "Over 200 weddings documented",
    whatsappMessage: "Hi! I'm writing on behalf of a venue and I'd like to talk about partnering with Arrebol.",
    image: "/images/gallery/_MG_1245.webp",
    imageAlt: "Couple walking back down the aisle at a garden ceremony, by Arrebol Weddings",
  },
  about: {
    subtitle: "Who we are",
    title: "We're Brenda and Anthony",
    paragraphs: [
      "We do wedding photo and video. And every wedding held at your venue says something about you: your space, your service and the vendors you let in.",
      "So we work like guests who know the house: we respect your schedules and your areas, coordinate with your team and leave everything as we found it.",
    ],
    quote: "Every wedding at your venue is also a photo of your venue.",
    signature: "— Brenda & Anthony",
    values: [
      {
        title: "We respect your rules",
        description: "Schedules, access, restricted areas and setup times: we know them before we arrive.",
      },
      {
        title: "We work with your team",
        description: "We talk to your coordinator before the wedding and on the day we follow their lead.",
      },
      {
        title: "Your space looks good",
        description: "Architecture, gardens and corners: at every wedding, your venue shows at its best.",
      },
    ],
  },
  gallery: {
    loading: "Loading gallery...",
  },
  benefits: {
    subtitle: "For venues",
    title: "Why us?",
    description: "Wedding photos get shared for years, and your venue is in every one of them.",
    items: [
      {
        title: "Your venue in every photo",
        description: "We photograph the couple without forgetting where they are: the architecture, the gardens and the light of your space.",
      },
      {
        title: "We learn your house",
        description: "With every wedding we know your venue better: where the light falls at each hour and which corners work best.",
      },
      {
        title: "No interruptions",
        description: "We arrive on time, follow your guidelines and don't get in the way of service or setup.",
      },
      {
        title: "Material that sells",
        description: "We share photos and clips from the weddings in your space for your site, your social media and your pitches to couples.",
      },
      {
        title: "Couples who show off your venue",
        description: "When the memories turn out beautiful, couples recommend the place where they got married.",
      },
      {
        title: "You talk to us directly",
        description: "No middlemen, before and after every wedding. We answer fast.",
      },
    ],
  },
  offers: {
    subtitle: "Partnership",
    title: "What we offer you",
    description: "It depends on what your venue needs. Pick one, two or all three.",
    cardCta: "I'm interested",
    otherText: "Need something different?",
    otherCta: "Tell us",
    otherWhatsappMessage: "Hi! I'm writing on behalf of a venue and I'd like to talk about a different kind of partnership.",
    items: [
      {
        title: "10% commission",
        description:
          "For every couple you refer who books us, you get 10% of the service. We pay it: the couple pays the same as any other client.",
        whatsappMessage: "Hi! I'm writing on behalf of a venue and I'm interested in the referral commission.",
      },
      {
        title: "Your venue's website",
        description:
          "We design and build your site —spaces, capacities, gallery and contact— and keep it up to date so you don't have to think about it.",
        whatsappMessage: "Hi! I'm writing on behalf of a venue and I'm interested in having you build our website.",
      },
      {
        title: "Photo and video of your space",
        description:
          "Venue shoots, video walkthroughs and reels for your social media and sales material, wedding or not.",
        whatsappMessage: "Hi! I'm writing on behalf of a venue and I'm interested in photo and video of our space.",
      },
    ],
  },
  howWeWork: {
    subtitle: "How we work",
    title: "How we team up",
    description: "Four steps, no red tape.",
    cta: "Schedule a call",
    whatsappMessage: "Hi! I'm writing on behalf of a venue and I'd like to schedule a call with you.",
    steps: [
      {
        number: "01",
        title: "We talk",
        description: "A call or a visit to get to know your space, your guidelines and how your team works.",
      },
      {
        number: "02",
        title: "We coordinate",
        description: "Before each wedding we agree with your coordinator on schedules, access and photo areas.",
      },
      {
        number: "03",
        title: "The wedding day",
        description: "We work discreetly, following your rules and in sync with your team.",
      },
      {
        number: "04",
        title: "We deliver",
        description: "To the couple, on the agreed date. And to you, photos of your space for your marketing.",
      },
    ],
  },
  faq: {
    subtitle: "FAQ",
    title: "What people usually ask",
    items: [
      {
        question: "How does the commission work?",
        answer: "For every couple you refer who signs with us, you get 10% of the contracted service. It comes from us: the couple's price doesn't change.",
      },
      {
        question: "Do you follow the venue's guidelines?",
        answer: "Always. Before each wedding we go over schedules, access, restricted areas and any house rules with you.",
      },
      {
        question: "What material does the venue get?",
        answer: "A selection of photos and clips from each wedding in your space, for your site, your social media and your presentations.",
      },
      {
        question: "Can you shoot the venue without a wedding?",
        answer: "Yes. We do photo and video shoots of your space for your marketing, separate from the weddings we cover.",
      },
      {
        question: "Do you work outside Morelos?",
        answer: "Yes, all over Mexico; we only add travel expenses depending on the location. We've worked in CDMX, Guerrero, Puebla, Oaxaca and more.",
      },
    ],
  },
  contact: {
    title: "Shall we team up?",
    description: "Message us on WhatsApp, email or Instagram and we'll set up a call.",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    emailSubject: "Venue partnership",
    whatsappMessage: "Hi! I'm writing on behalf of a venue and I'd like to talk about partnering with Arrebol.",
    floatingLabel: "Message us on WhatsApp",
  },
};

const alianzasContent: Record<AlianzaVariant, { es: AlianzasContent; en: AlianzasContent }> = {
  planners: { es: plannersEs, en: plannersEn },
  venues: { es: venuesEs, en: venuesEn },
};

export function getAlianzasContent(variant: AlianzaVariant, language: "es" | "en"): AlianzasContent {
  return alianzasContent[variant][language];
}

// Metadatos (solo español: el HTML del servidor siempre sale en español).
// El canonical de /alianzas apunta a /alianzas/planners/, que muestra lo mismo.
const metaText: Record<AlianzaVariant, { title: string; description: string; path: string }> = {
  planners: {
    title: "Alianzas para Wedding Planners | Arrebol Weddings",
    description:
      "Foto y video de bodas que sigue tu timeline y se coordina con tu equipo. Comisión por recomendarnos, sitio web para tu agencia y contenido para tu marca.",
    path: "/alianzas/planners/",
  },
  venues: {
    title: "Alianzas para Venues | Arrebol Weddings",
    description:
      "Foto y video de bodas que respeta las reglas de tu venue y muestra tu espacio en su mejor luz. Comisión por recomendarnos, sitio web y contenido de tu espacio.",
    path: "/alianzas/venues/",
  },
};

export function getAlianzasMetadata(variant: AlianzaVariant): Metadata {
  const { title, description, path } = metaText[variant];
  const image = encodeURI(alianzasContent[variant].es.hero.image);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [image],
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
