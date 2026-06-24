"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice, whatsappUrl } from "@/lib/site";
import { buildOrderMessage, useCart } from "@/lib/cart";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Diálogo del carrito: lista de productos con cantidades, datos para el
 * retiro y envío del pedido por WhatsApp. Su apertura se controla desde
 * el contexto del carrito (botón flotante).
 */
export function CartSheet() {
  const {
    lines,
    isOpen,
    setOpen,
    totalItems,
    totalPrice,
    add,
    decrement,
    remove,
    clear,
  } = useCart();

  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const empty = lines.length === 0;
  const orderUrl = empty
    ? "#"
    : whatsappUrl(buildOrderMessage(lines, { name, note }));

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[88vh] flex-col gap-0 overflow-hidden p-0 sm:max-w-md"
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between border-b border-border bg-brand px-5 py-4 text-ivory">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5" strokeWidth={1.75} />
            <DialogTitle className="text-ivory">Tu pedido</DialogTitle>
            {totalItems > 0 && (
              <span className="rounded-full bg-ivory/20 px-2 py-0.5 text-xs font-semibold">
                {totalItems}
              </span>
            )}
          </div>
          <DialogClose
            aria-label="Cerrar"
            className="grid size-8 place-items-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/15 hover:text-ivory"
          >
            <X className="size-5" />
          </DialogClose>
        </div>

        {empty ? (
          <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
            <ShoppingBag
              className="size-10 text-brand/30"
              strokeWidth={1.5}
            />
            <p className="font-heading text-lg text-brand">
              Tu carrito está vacío
            </p>
            <DialogDescription>
              Agrega productos desde la carta y envíanos tu pedido por
              WhatsApp para pasar a retirar.
            </DialogDescription>
          </div>
        ) : (
          <>
            {/* Listado de productos */}
            <ul className="flex-1 divide-y divide-border/70 overflow-y-auto px-5">
              {lines.map((line) => (
                <li
                  key={line.name}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-foreground/90">
                      {line.name}
                    </p>
                    <p className="text-sm text-foreground/55">
                      {formatPrice(line.price)} c/u
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-cream/70 p-1 text-brand">
                    <button
                      type="button"
                      onClick={() => decrement(line.name)}
                      aria-label={`Quitar una unidad de ${line.name}`}
                      className="grid size-6 place-items-center rounded-full transition-colors hover:bg-sand/60"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="min-w-5 text-center text-sm font-semibold tabular-nums">
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(line)}
                      aria-label={`Agregar otra unidad de ${line.name}`}
                      className="grid size-6 place-items-center rounded-full transition-colors hover:bg-sand/60"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>

                  <span className="w-20 shrink-0 text-right font-heading font-semibold text-brand tabular-nums">
                    {formatPrice(line.price * line.qty)}
                  </span>

                  <button
                    type="button"
                    onClick={() => remove(line.name)}
                    aria-label={`Eliminar ${line.name} del pedido`}
                    className="grid size-7 shrink-0 place-items-center rounded-full text-foreground/40 transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Datos del retiro + total + envío */}
            <div className="space-y-3 border-t border-border bg-muted/40 px-5 py-4">
              <div className="grid gap-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre (para el retiro)"
                  aria-label="Tu nombre"
                  className="h-11 rounded-lg bg-card"
                />
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Comentario (opcional): hora de retiro, preferencias…"
                  aria-label="Comentario"
                  className="min-h-14 rounded-lg bg-card"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-sm text-foreground/60">Total</span>
                <span className="font-heading text-xl font-semibold text-brand tabular-nums">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-[1.02]"
              >
                Enviar pedido por WhatsApp
              </a>

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={clear}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/45 transition-colors hover:text-destructive"
                >
                  <Trash2 className="size-3.5" />
                  Vaciar carrito
                </button>
              </div>

              <p className="text-center text-xs text-foreground/45">
                El pedido se coordina por WhatsApp. El pago se realiza al
                retirar en el local.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
