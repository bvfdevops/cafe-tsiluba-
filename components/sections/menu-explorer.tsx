"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/site";
import { menuCategories } from "@/lib/menu";
import { resolveIcon } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AddToCart } from "@/components/cart/add-to-cart";

export function MenuExplorer() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    return menuCategories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: normalizedQuery
          ? c.items.filter((i) =>
              i.name.toLowerCase().includes(normalizedQuery),
            )
          : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [active, normalizedQuery]);

  const totalResults = visibleCategories.reduce(
    (acc, c) => acc + c.items.length,
    0,
  );

  return (
    <div>
      {/* Controles */}
      <div className="sticky top-16 z-30 -mx-5 mb-10 bg-ivory/90 px-5 py-4 backdrop-blur-md lg:top-20">
        <div className="relative mx-auto max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-foreground/40" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en la carta…"
            aria-label="Buscar producto"
            className="h-12 rounded-full border-border bg-card pl-11 pr-10 text-base"
          />
          {query && (
            <button
              type="button"
              aria-label="Limpiar búsqueda"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-brand"
            >
              <X className="size-4.5" />
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
          <Chip
            label="Todo"
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {menuCategories.map((c) => (
            <Chip
              key={c.id}
              label={c.name}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Resultados */}
      {totalResults === 0 ? (
        <p className="py-16 text-center text-foreground/60">
          No encontramos productos para{" "}
          <span className="font-medium text-brand">“{query}”</span>.
        </p>
      ) : (
        <div className="flex flex-col gap-16">
          {visibleCategories.map((category) => {
            const Icon = resolveIcon(category.icon);
            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-40"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand text-ivory">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-brand">
                      {category.name}
                    </h2>
                    <p className="text-sm text-foreground/60">
                      {category.blurb}
                    </p>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className={cn(
                        "flex items-center justify-between gap-4 rounded-xl border bg-card px-5 py-4 transition-colors",
                        item.featured
                          ? "border-sand bg-cream/40"
                          : "border-border/70 hover:border-brand/30",
                      )}
                    >
                      <span className="flex items-center gap-2 font-medium text-foreground/85">
                        {item.name}
                        {item.featured && (
                          <Badge className="gap-1 bg-brand text-ivory">
                            <Sparkles className="size-3" />
                            Favorito
                          </Badge>
                        )}
                      </span>
                      <span className="flex shrink-0 flex-col items-end gap-2">
                        <span className="font-heading text-lg font-semibold text-brand">
                          {formatPrice(item.price)}
                        </span>
                        <AddToCart item={{ name: item.name, price: item.price }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-brand bg-brand text-ivory"
          : "border-border bg-card text-foreground/70 hover:border-brand/40 hover:text-brand",
      )}
    >
      {label}
    </button>
  );
}
