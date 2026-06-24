import Link from "next/link";
import { ArrowRight, Coffee, IceCreamCone, CakeSlice, Sandwich, IceCream } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { findItem } from "@/lib/menu";
import type { LucideIcon } from "lucide-react";

type Featured = {
  name: string;
  description: string;
  icon: LucideIcon;
  variant: "green" | "cream" | "sand" | "mixed" | "dark";
};

const featured: Featured[] = [
  {
    name: "Café Latte",
    description: "Espresso suave con leche cremosa, nuestro clásico de cada día.",
    icon: Coffee,
    variant: "green",
  },
  {
    name: "Cappuccino",
    description: "Equilibrio perfecto entre espresso, leche y espuma aterciopelada.",
    icon: Coffee,
    variant: "dark",
  },
  {
    name: "Ice Latte Esencia",
    description: "Nuestra versión fría de autor, intensa y refrescante.",
    icon: IceCreamCone,
    variant: "mixed",
  },
  {
    name: "Cheesecake",
    description: "Cremoso, artesanal y con la medida justa de dulzor.",
    icon: CakeSlice,
    variant: "cream",
  },
  {
    name: "Tiramisú",
    description: "El postre italiano por excelencia, hecho en casa.",
    icon: CakeSlice,
    variant: "sand",
  },
  {
    name: "Mechada Luchín",
    description: "Sandwich estrella: mechada jugosa con nombre propio.",
    icon: Sandwich,
    variant: "green",
  },
  {
    name: "Brownie + Helado",
    description: "Brownie tibio con helado artesanal. Imperdible.",
    icon: IceCream,
    variant: "dark",
  },
];

export function FeaturedProducts() {
  return (
    <section className="container-tsiluba scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Favoritos de la casa"
        title="Productos destacados"
        description="Una selección de lo que más se disfruta en Café Tsiluba."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((f, i) => {
          const item = findItem(f.name);
          if (!item) return null;
          return (
            <Reveal as="li" key={f.name} delay={(i % 4) * 0.06}>
              <ProductCard
                name={f.name}
                price={item.price}
                description={f.description}
                icon={f.icon}
                variant={f.variant}
              />
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-12 flex justify-center">
        <Button
          render={<Link href="/carta" />}
          variant="outline"
          className="h-12 rounded-full px-7 text-base"
        >
          Ver la carta completa
          <ArrowRight className="size-4.5" />
        </Button>
      </div>
    </section>
  );
}
