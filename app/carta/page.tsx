import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { MenuExplorer } from "@/components/sections/menu-explorer";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Descubre la carta de Café Tsiluba: café de especialidad, bebidas frías, pastelería artesanal, sandwiches exclusivos, bollería y helados en La Cisterna.",
  alternates: { canonical: "/carta" },
};

export default function CartaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra carta"
        title="Para cada momento, una buena elección"
        description="Café de especialidad, repostería artesanal, sandwiches con nombre propio, helados y más. Filtra por categoría o busca tu favorito."
      />
      <div className="container-tsiluba py-16 sm:py-20">
        <MenuExplorer />
      </div>
    </>
  );
}
