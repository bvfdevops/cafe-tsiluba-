import type { Metadata } from "next";
import { ShoppingBag, MessageCircle, Store } from "lucide-react";
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
      <div className="container-tsiluba pt-10 sm:pt-12">
        <div className="rounded-2xl border border-sand/70 bg-cream/40 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-ivory">
              <ShoppingBag className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-brand">
                Arma tu pedido y pasa a retirar
              </h2>
              <p className="text-sm text-foreground/65">
                Agrega tus productos al carrito, envíanos el pedido por
                WhatsApp y lo dejamos listo para que lo retires en el local.
              </p>
            </div>
          </div>
          <ol className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
            <li className="flex items-center gap-2 rounded-xl bg-card/70 px-3 py-2.5">
              <ShoppingBag className="size-4 shrink-0 text-brand" />
              <span>
                <strong className="text-brand">1.</strong> Agrega productos
                con el botón “Agregar”.
              </span>
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-card/70 px-3 py-2.5">
              <MessageCircle className="size-4 shrink-0 text-brand" />
              <span>
                <strong className="text-brand">2.</strong> Envía tu pedido
                por WhatsApp.
              </span>
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-card/70 px-3 py-2.5">
              <Store className="size-4 shrink-0 text-brand" />
              <span>
                <strong className="text-brand">3.</strong> Pasa a retirar y
                paga en el local.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="container-tsiluba py-16 sm:py-20">
        <MenuExplorer />
      </div>
    </>
  );
}
