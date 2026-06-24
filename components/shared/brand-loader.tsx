import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Pantalla de carga con identidad de marca: taza de café con vapor animado,
 * anillo giratorio y wordmark "Café Tsiluba".
 */
export function BrandLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid min-h-[70vh] place-items-center px-6",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-7">
        {/* Taza + vapor + anillo */}
        <div className="relative grid size-24 place-items-center">
          {/* Vapor */}
          <div className="absolute -top-1 flex gap-1.5">
            <span className="animate-steam h-4 w-1 rounded-full bg-brand/40 [animation-delay:0ms]" />
            <span className="animate-steam h-5 w-1 rounded-full bg-brand/40 [animation-delay:300ms]" />
            <span className="animate-steam h-4 w-1 rounded-full bg-brand/40 [animation-delay:600ms]" />
          </div>

          {/* Anillo giratorio */}
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-brand/15 border-t-brand [animation-duration:1.1s]" />

          {/* Taza */}
          <span className="grid size-14 place-items-center rounded-full bg-brand text-ivory shadow-lg shadow-brand/20">
            <Coffee className="size-7" strokeWidth={1.5} />
          </span>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-1">
          <p className="flex items-baseline gap-1.5 font-heading text-xl font-semibold text-brand">
            Café
            <span className="font-accent text-3xl leading-none">Tsiluba</span>
          </p>
          <p className="text-sm text-foreground/50">Preparando algo rico…</p>
        </div>

        <span className="sr-only">Cargando contenido de Café Tsiluba</span>
      </div>
    </div>
  );
}
