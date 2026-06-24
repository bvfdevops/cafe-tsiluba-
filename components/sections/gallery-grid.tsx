"use client";

import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/content";

type Item = (typeof galleryItems)[number];

function aspectFor(span: Item["span"]) {
  if (span === "tall") return "portrait" as const;
  if (span === "wide") return "video" as const;
  return "square" as const;
}

export function GalleryGrid({
  showFilters = false,
  limit,
}: {
  showFilters?: boolean;
  limit?: number;
}) {
  const [active, setActive] = useState<"Todas" | GalleryCategory>("Todas");
  const [selected, setSelected] = useState<Item | null>(null);

  const items = useMemo(() => {
    const base =
      active === "Todas"
        ? galleryItems
        : galleryItems.filter((i) => i.category === active);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [active, limit]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["Todas", ...galleryCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-brand bg-brand text-ivory"
                  : "border-border bg-card text-foreground/70 hover:border-brand/40 hover:text-brand",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-4 [column-fill:_balance] lg:columns-3 xl:columns-4">
        {items.map((item, i) => (
          <button
            key={`${item.label}-${i}`}
            type="button"
            onClick={() => setSelected(item)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <MediaPlaceholder
              icon={Camera}
              label={item.label}
              caption={item.category}
              variant={item.variant}
              aspect={aspectFor(item.span)}
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl border-0 bg-transparent p-0 shadow-none ring-0">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.label}</DialogTitle>
              <DialogDescription className="sr-only">
                {selected.category} — Café Tsiluba
              </DialogDescription>
              <MediaPlaceholder
                icon={Camera}
                label={selected.label}
                caption={selected.category}
                variant={selected.variant}
                aspect="video"
                iconClassName="size-16"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
