/**
 * Constantes del negocio Café Tsiluba.
 * Punto único de verdad para datos de contacto, redes y SEO.
 */

export const siteConfig = {
  name: "Café Tsiluba",
  shortName: "Tsiluba",
  tagline: "Café, libros y buenos momentos en La Cisterna",
  description:
    "Cafetería literaria, pet friendly y de especialidad en La Cisterna. Café de especialidad, repostería artesanal, helados, sandwiches y un espacio literario único para disfrutar, leer y compartir.",
  url: "https://cafetsiluba.cl",

  address: {
    street: "Av. Fernández Albano #196",
    locality: "La Cisterna",
    region: "Región Metropolitana",
    city: "Santiago de Chile",
    country: "CL",
    full: "Av. Fernández Albano #196, La Cisterna, Santiago de Chile",
    // Coordenadas aproximadas de La Cisterna (ajustar con ubicación exacta)
    lat: -33.5377,
    lng: -70.6645,
  },

  contact: {
    phoneDisplay: "+56 9 7242 2068",
    phoneRaw: "+56972422068",
    whatsappNumber: "56972422068",
    email: "cafe.tsiluba@gmail.com",
  },

  social: {
    instagram: "https://www.instagram.com/cafetsiluba/",
    instagramHandle: "@cafetsiluba",
    facebook: "https://web.facebook.com/CafeTsiluba/",
  },

  hours: [
    { days: "Lunes a Sábado", time: "12:00 – 21:00" },
    { days: "Domingos y Festivos", time: "15:00 – 21:00" },
  ],

  rating: {
    value: 4.4,
    count: 300,
  },

  maps: {
    // Embed y link a Google Maps por dirección
    embedQuery: "Café Fernández Albano 196, La Cisterna, Santiago",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent("Av. Fernández Albano 196, La Cisterna, Santiago, Chile"),
    placeUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Café Tsiluba, Av. Fernández Albano 196, La Cisterna, Santiago"),
  },
} as const;

/** Construye un link de WhatsApp con mensaje opcional. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** URL del embed de Google Maps (modo búsqueda sin API key). */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.maps.embedQuery,
)}&output=embed`;

/** Navegación principal del sitio. */
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/carta", label: "Carta" },
  { href: "/experiencia-literaria", label: "Experiencia Literaria" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Formatea un precio en pesos chilenos: 1800 -> "$1.800". */
const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});
export function formatPrice(value: number) {
  return clp.format(value);
}
