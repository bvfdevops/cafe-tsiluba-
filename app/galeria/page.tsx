import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de Café Tsiluba: café de especialidad, libros, pastelería artesanal, helados, sandwiches y el ambiente acogedor de nuestra cafetería literaria en La Cisterna.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="El lugar, en imágenes"
        description="Café, libros, dulces y rincones. Explora por categoría y descubre el ambiente de Café Tsiluba."
      />
      <div className="container-tsiluba py-16 sm:py-20">
        <GalleryGrid showFilters />
      </div>
    </>
  );
}
