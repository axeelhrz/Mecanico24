export const site = {
  name: "Mecánica 24 Horas",
  shortName: "M24H",
  tagline: "Servicio mecánico disponible las 24 horas en Montevideo",
  description:
    "Mecánica 24 Horas en Montevideo: atención mecánica rápida, diagnóstico y emergencias las 24 horas, los 365 días del año.",
  city: "Montevideo",
  country: "Uruguay",
  phoneDisplay: "097 249 759",
  phoneTel: "+59897249759",
  whatsapp: "59897249759",
  whatsappDisplay: "+598 97 249 759",
  address: "Montevideo, Uruguay",
  lat: -34.899701,
  lng: -56.1689637,
  mapsUrl:
    "https://www.google.com/maps/place/Mec%C3%A1nica+24+horas/@-34.899701,-56.1689637,17z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.5!2d-56.1689637!3d-34.899701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cf4a433e2b%3A0xc2d613a716125a57!2sMec%C3%A1nica%2024%20horas!5e0!3m2!1ses!2suy!4v1700000000000!5m2!1ses!2suy",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Mec%C3%A1nica+24+horas/@-34.899701,-56.1689637,17z",
  rating: 5.0,
  reviewCount: 27,
  hours: "Disponible ahora · 24 horas",
  /** Completar con reseñas reales de Google cuando estén disponibles */
  reviews: [] as ReadonlyArray<{
    name: string;
    initial: string;
    text: string;
    stars: number;
  }>,
  services: [
    {
      id: "mecanica",
      title: "Mecánica general",
      text: "Desde ruidos raros hasta fallas de circulación: revisamos y reparamos para que vuelvas a la ruta.",
    },
    {
      id: "diagnostico",
      title: "Diagnóstico de fallas",
      text: "Escaneamos y detectamos el origen del problema antes de tocar una pieza.",
    },
    {
      id: "arranque",
      title: "No arranca",
      text: "Si el auto no prende, queda en neutro o falla al intentar arrancar, te asistimos.",
    },
    {
      id: "bateria",
      title: "Batería y carga",
      text: "Batería descargada, alternador o problemas de arranque eléctrico: solución rápida.",
    },
    {
      id: "frenos",
      title: "Frenos",
      text: "Pastillas, discos y sistema de frenos. Prioridad absoluta: tu seguridad.",
    },
    {
      id: "motor",
      title: "Motor",
      text: "Pérdida de potencia, humo, sobrecalentamiento o fallas intermitentes del motor.",
    },
    {
      id: "electrica",
      title: "Electricidad",
      text: "Luces, sensores, cableado y fallas eléctricas que dejan el vehículo fuera de servicio.",
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento",
      text: "Service, aceite, filtros y revisiones preventivas para evitar que te deje a pie.",
    },
    {
      id: "emergencias",
      title: "Emergencias 24 h",
      text: "Avería de madrugada, feriado o domingo: estamos disponibles cuando hace falta.",
    },
  ],
  whyUs: [
    {
      code: "01",
      stat: "24/7",
      title: "Siempre abiertos",
      text: "De madrugada, domingo o feriado: si el auto falla, hay alguien del otro lado.",
    },
    {
      code: "02",
      stat: "Directo",
      title: "Sin intermediarios",
      text: "Hablás con quien puede ayudarte. Respuestas claras, sin dar vueltas ni transferencias.",
    },
    {
      code: "03",
      stat: "Antes",
      title: "Primero diagnosticamos",
      text: "Entendemos qué pasa y te explicamos las opciones antes de definir cómo seguir.",
    },
    {
      code: "04",
      stat: "5.0",
      title: "Confianza local",
      text: "Negocio de Montevideo con valoración perfecta en Google y atención de cerca.",
    },
  ],
  emergencySteps: [
    {
      step: "01",
      title: "Nos escribís",
      text: "Decinos qué le pasa al auto: no arranca, se detuvo, hace ruido, se calentó…",
    },
    {
      step: "02",
      title: "Indicás dónde estás",
      text: "Barrio, ruta o punto de referencia. Con eso evaluamos cómo ayudarte más rápido.",
    },
    {
      step: "03",
      title: "Te damos una salida",
      text: "Te decimos qué hacer y coordinamos la asistencia según tu situación.",
    },
  ],
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hola, necesito asistencia mecánica. ¿Me pueden ayudar?";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${site.phoneTel}`;
}
