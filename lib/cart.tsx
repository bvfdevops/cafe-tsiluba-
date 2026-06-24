"use client";

import { useMemo, useSyncExternalStore } from "react";
import { formatPrice, siteConfig } from "@/lib/site";

export type CartLine = { name: string; price: number; qty: number };

type CartState = { lines: CartLine[]; isOpen: boolean };

const STORAGE_KEY = "tsiluba-cart";

/**
 * Store del carrito como fuente externa (useSyncExternalStore). Vive a nivel de
 * módulo para compartirse entre componentes sin Provider y se sincroniza con
 * localStorage. En el servidor nunca se muta: getServerSnapshot devuelve un
 * estado vacío estable, evitando desajustes de hidratación.
 */
const SERVER_STATE: CartState = { lines: [], isOpen: false };

let state: CartState = SERVER_STATE;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
  } catch {
    // Sin persistencia si el almacenamiento no está disponible.
  }
}

function loadOnce() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...state, lines: JSON.parse(raw) as CartLine[] };
  } catch {
    // Ignoramos datos corruptos.
  }
}

function setLines(updater: (lines: CartLine[]) => CartLine[]) {
  state = { ...state, lines: updater(state.lines) };
  persist();
  emit();
}

const store = {
  subscribe(listener: () => void) {
    loadOnce();
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      try {
        state = { ...state, lines: e.newValue ? JSON.parse(e.newValue) : [] };
      } catch {
        // Ignoramos datos corruptos de otra pestaña.
      }
      emit();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot: () => state,
  getServerSnapshot: () => SERVER_STATE,
};

function add(item: { name: string; price: number }) {
  setLines((lines) => {
    const found = lines.find((l) => l.name === item.name);
    if (found) {
      return lines.map((l) =>
        l.name === item.name ? { ...l, qty: l.qty + 1 } : l,
      );
    }
    return [...lines, { name: item.name, price: item.price, qty: 1 }];
  });
}

function decrement(name: string) {
  setLines((lines) =>
    lines.flatMap((l) => {
      if (l.name !== name) return [l];
      if (l.qty <= 1) return [];
      return [{ ...l, qty: l.qty - 1 }];
    }),
  );
}

function remove(name: string) {
  setLines((lines) => lines.filter((l) => l.name !== name));
}

function clear() {
  setLines(() => []);
}

function setOpen(open: boolean) {
  state = { ...state, isOpen: open };
  emit();
}

export function useCart() {
  const { lines, isOpen } = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );

  return useMemo(() => {
    const totalItems = lines.reduce((acc, l) => acc + l.qty, 0);
    const totalPrice = lines.reduce((acc, l) => acc + l.qty * l.price, 0);
    return {
      lines,
      totalItems,
      totalPrice,
      isOpen,
      setOpen,
      open: () => setOpen(true),
      add,
      decrement,
      remove,
      clear,
      qtyOf: (name: string) => lines.find((l) => l.name === name)?.qty ?? 0,
    };
  }, [lines, isOpen]);
}

/** Construye el texto del pedido para enviar por WhatsApp. */
export function buildOrderMessage(
  lines: CartLine[],
  details: { name?: string; note?: string },
) {
  const items = lines
    .map((l) => `• ${l.qty}× ${l.name} — ${formatPrice(l.qty * l.price)}`)
    .join("\n");

  const total = lines.reduce((acc, l) => acc + l.qty * l.price, 0);

  const parts = [
    `¡Hola ${siteConfig.name}! 😊 Quiero hacer un pedido para *retirar*:`,
    "",
    items,
    "",
    `*Total: ${formatPrice(total)}*`,
  ];

  if (details.name?.trim()) parts.push("", `Nombre: ${details.name.trim()}`);
  if (details.note?.trim()) parts.push(`Comentario: ${details.note.trim()}`);

  parts.push("", "¿Me confirman cuándo puedo pasar a retirar? ¡Gracias!");

  return parts.join("\n");
}
