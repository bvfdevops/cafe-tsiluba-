"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

/**
 * Botón flotante que abre el carrito. Solo aparece cuando hay productos.
 * Pensado para apilarse dentro de la columna de acciones flotantes.
 */
export function CartTrigger() {
  const { totalItems, open } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Ver pedido (${totalItems} producto${totalItems === 1 ? "" : "s"})`}
      className="relative grid size-14 place-items-center rounded-full bg-brand text-ivory shadow-xl shadow-brand/30 transition-transform duration-300 hover:scale-105"
    >
      <ShoppingBag className="size-6" strokeWidth={1.75} />
      <span className="absolute -right-1 -top-1 grid min-w-6 place-items-center rounded-full bg-[#25D366] px-1.5 text-xs font-bold text-white ring-2 ring-ivory">
        {totalItems}
      </span>
    </button>
  );
}
