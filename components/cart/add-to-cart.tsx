"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";

/**
 * Control compacto para añadir un producto al carrito. Muestra el botón
 * "Agregar" y, una vez en el carrito, un selector de cantidad (− N +).
 */
export function AddToCart({
  item,
  className,
}: {
  item: { name: string; price: number };
  className?: string;
}) {
  const { qtyOf, add, decrement } = useCart();
  const qty = qtyOf(item.name);

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => add(item)}
        aria-label={`Agregar ${item.name} al carrito`}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-card px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:border-brand hover:bg-brand hover:text-ivory",
          className,
        )}
      >
        <Plus className="size-3.5" />
        Agregar
      </button>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-brand p-1 text-ivory",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => decrement(item.name)}
        aria-label={`Quitar una unidad de ${item.name}`}
        className="grid size-6 place-items-center rounded-full transition-colors hover:bg-ivory/20"
      >
        <Minus className="size-3.5" />
      </button>
      <span
        className="min-w-5 text-center text-sm font-semibold tabular-nums"
        aria-live="polite"
      >
        {qty}
      </span>
      <button
        type="button"
        onClick={() => add(item)}
        aria-label={`Agregar otra unidad de ${item.name}`}
        className="grid size-6 place-items-center rounded-full transition-colors hover:bg-ivory/20"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
