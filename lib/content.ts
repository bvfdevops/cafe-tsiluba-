import {
  BookOpen,
  Coffee,
  CakeSlice,
  PawPrint,
  Sandwich,
  Home,
  type LucideIcon,
} from "lucide-react";

/** Diferenciales de la marca (sección Home + uso general). */
export const differentiators: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BookOpen,
    title: "Cafetería Literaria",
    description: "Espacios para leer, descubrir y disfrutar entre libros.",
  },
  {
    icon: Coffee,
    title: "Café de Especialidad",
    description: "Preparaciones elaboradas cuidadosamente, taza a taza.",
  },
  {
    icon: CakeSlice,
    title: "Repostería Artesanal",
    description: "Sabores caseros para acompañar cada momento.",
  },
  {
    icon: PawPrint,
    title: "Pet Friendly",
    description: "Tu mascota también es bienvenida a la mesa.",
  },
  {
    icon: Sandwich,
    title: "Sandwiches Exclusivos",
    description: "Preparaciones únicas, abundantes y con nombre propio.",
  },
  {
    icon: Home,
    title: "Ambiente Acogedor",
    description: "Ideal para conversar, trabajar o simplemente relajarse.",
  },
];

/** Beneficios del espacio literario (página Experiencia Literaria). */
export const literaryBenefits: {
  title: string;
  description: string;
}[] = [
  {
    title: "Un refugio para leer",
    description:
      "Rincones cómodos y luz cálida pensados para perderte entre páginas sin prisa.",
  },
  {
    title: "Descubre nuevas historias",
    description:
      "Libros disponibles para hojear mientras disfrutas tu café de especialidad.",
  },
  {
    title: "Comunidad de lectores",
    description:
      "Un punto de encuentro para quienes aman las buenas conversaciones y las buenas historias.",
  },
  {
    title: "Cultura de barrio",
    description:
      "Un espacio con identidad propia en La Cisterna, donde la cultura se vive a diario.",
  },
];

/**
 * Testimonios semilla. PLACEHOLDER — estructura lista para conectar a
 * Google Reviews reales. Reemplazar por reseñas verificadas.
 */
export const testimonials: {
  name: string;
  text: string;
  rating: number;
}[] = [
  {
    name: "Camila R.",
    rating: 5,
    text: "Un lugar precioso para leer y desconectar. El café de especialidad es de los mejores que he probado en la comuna.",
  },
  {
    name: "Felipe A.",
    rating: 5,
    text: "Fui con mi perro y nos atendieron increíble. La mechada Luchín es imperdible y el ambiente es súper acogedor.",
  },
  {
    name: "Daniela S.",
    rating: 4,
    text: "Me encanta el concepto de cafetería literaria. Café rico, tortas caseras y un rincón perfecto para trabajar.",
  },
  {
    name: "Matías P.",
    rating: 5,
    text: "El tiramisú y el cappuccino esencia son una combinación perfecta. Volveré seguro, se siente como en casa.",
  },
  {
    name: "Javiera M.",
    rating: 5,
    text: "Atención cálida y cercana. Un oasis cultural en La Cisterna, ideal para una tarde tranquila con un buen libro.",
  },
];

/** Categorías y elementos de la galería (placeholders categorizados). */
export type GalleryCategory =
  | "Café"
  | "Literatura"
  | "Pastelería"
  | "Helados"
  | "Sandwiches"
  | "Local";

export const galleryCategories: GalleryCategory[] = [
  "Café",
  "Literatura",
  "Pastelería",
  "Helados",
  "Sandwiches",
  "Local",
];

type GalleryItem = {
  category: GalleryCategory;
  label: string;
  variant: "green" | "cream" | "sand" | "mixed" | "dark";
  span?: "tall" | "wide" | "normal";
};

export const galleryItems: GalleryItem[] = [
  { category: "Café", label: "Latte art", variant: "green", span: "tall" },
  { category: "Literatura", label: "Rincón de lectura", variant: "cream" },
  { category: "Pastelería", label: "Cheesecake", variant: "sand" },
  { category: "Local", label: "Fachada", variant: "mixed", span: "wide" },
  { category: "Helados", label: "Copa de helado", variant: "cream", span: "tall" },
  { category: "Café", label: "Espresso", variant: "dark" },
  { category: "Sandwiches", label: "Mechada Luchín", variant: "sand" },
  { category: "Literatura", label: "Estantería", variant: "green", span: "tall" },
  { category: "Pastelería", label: "Tiramisú", variant: "cream" },
  { category: "Local", label: "Interior acogedor", variant: "mixed" },
  { category: "Helados", label: "Brownie + helado", variant: "dark", span: "wide" },
  { category: "Café", label: "Cappuccino esencia", variant: "green" },
  { category: "Sandwiches", label: "Pollo Javito", variant: "cream" },
  { category: "Pastelería", label: "Carrot cake", variant: "sand", span: "tall" },
];
