export const site = {
  name: "Taller 2001",
  shortName: "T2001",
  tagline: "Taller mecánico en Montevideo",
  description:
    "Taller 2001 en Montevideo: mecánica general, diagnóstico y mantenimiento de automóviles. Ing. Eduardo García de Zúñiga 2376.",
  city: "Montevideo",
  country: "Uruguay",
  phoneDisplay: "092 837 737",
  phoneTel: "+59892837737",
  phoneSecondaryDisplay: "2710 0602",
  phoneSecondaryTel: "+59827100602",
  whatsapp: "59892837737",
  whatsappDisplay: "+598 92 837 737",
  address: "Ing. Eduardo García de Zúñiga 2376, 11300 Montevideo, Uruguay",
  addressShort: "García de Zúñiga 2376, Montevideo",
  lat: -34.91855,
  lng: -56.16171,
  mapsUrl:
    "https://www.google.com/maps/place/Taller+2001/@-34.9185324,-56.1616847,17z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8!2d-56.1616847!3d-34.9185324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8155da30e633%3A0xdddbf699e2136f4c!2sTaller%202001!5e0!3m2!1ses!2suy!4v1700000000000!5m2!1ses!2suy",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Taller+2001/@-34.9185324,-56.1616847,17z",
  rating: 5.0,
  reviewCount: 5,
  hours: "Lun–Jue 09:00–18:00 · Vie 09:00–17:00",
  hoursShort: "Lun a Vie · horario comercial",
  hoursDetail: [
    { day: "Lunes a jueves", time: "09:00 – 18:00" },
    { day: "Viernes", time: "09:00 – 17:00" },
    { day: "Sábado", time: "Cerrado" },
    { day: "Domingo", time: "Cerrado" },
  ],
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
      text: "Reparaciones y ajustes para que tu vehículo vuelva a circular con seguridad.",
    },
    {
      id: "diagnostico",
      title: "Diagnóstico de fallas",
      text: "Identificamos el origen del problema antes de definir la reparación.",
    },
    {
      id: "arranque",
      title: "Problemas de arranque",
      text: "Si el auto no prende o falla al intentar arrancar, lo revisamos a fondo.",
    },
    {
      id: "bateria",
      title: "Batería y carga",
      text: "Batería, alternador y sistema de carga: diagnóstico y solución.",
    },
    {
      id: "frenos",
      title: "Frenos",
      text: "Pastillas, discos y sistema de frenos con foco en tu seguridad.",
    },
    {
      id: "motor",
      title: "Motor",
      text: "Pérdida de potencia, ruidos, sobrecalentamiento y fallas de motor.",
    },
    {
      id: "electrica",
      title: "Electricidad",
      text: "Luces, sensores, cableado y fallas eléctricas del vehículo.",
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento",
      text: "Service, aceite, filtros y revisiones preventivas programadas.",
    },
    {
      id: "emergencias",
      title: "Reparaciones urgentes",
      text: "Priorizamos trabajos urgentes dentro del horario de atención.",
    },
  ],
  whyUs: [
    {
      code: "01",
      stat: "5.0",
      title: "Excelente reputación",
      text: "Calificación perfecta en Google: confianza ganada trabajo a trabajo.",
    },
    {
      code: "02",
      stat: "Local",
      title: "Atención directa",
      text: "Hablás con el taller. Respuestas claras, sin vueltas ni intermediarios.",
    },
    {
      code: "03",
      stat: "Antes",
      title: "Primero diagnosticamos",
      text: "Evaluamos el problema y te explicamos las opciones antes de avanzar.",
    },
    {
      code: "04",
      stat: "MVD",
      title: "En Montevideo",
      text: "Estamos en García de Zúñiga 2376, fáciles de ubicar y de contactar.",
    },
  ],
  emergencySteps: [
    {
      step: "01",
      title: "Nos contás",
      text: "Escribinos o llamá y contanos qué le pasa al auto.",
    },
    {
      step: "02",
      title: "Agendamos",
      text: "Coordinamos el ingreso al taller según urgencia y disponibilidad.",
    },
    {
      step: "03",
      title: "Lo resolvemos",
      text: "Diagnosticamos, te informamos y reparamos para que vuelvas a circular.",
    },
  ],
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hola, quiero consultar por el taller. ¿Me pueden ayudar?";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${site.phoneTel}`;
}

export function telSecondaryUrl() {
  return `tel:${site.phoneSecondaryTel}`;
}
