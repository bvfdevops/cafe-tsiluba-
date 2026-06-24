import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * Marcador de posición de imagen con gradiente de marca.
 *
 * Centraliza cada "hueco" de fotografía del sitio. Para usar fotos reales
 * más adelante basta con reemplazar este componente por <Image /> en su lugar
 * de uso, sin tocar el layout circundante.
 */

type Variant = "green" | "cream" | "sand" | "mixed" | "dark";

const variants: Record<Variant, string> = {
  green:
    "bg-[linear-gradient(135deg,#1f3d31_0%,#183329_55%,#0f2019_100%)] text-ivory/80",
  cream:
    "bg-[linear-gradient(135deg,#faf6ee_0%,#efe2c5_60%,#d7c5a0_100%)] text-brand/45",
  sand: "bg-[linear-gradient(135deg,#efe2c5_0%,#d7c5a0_60%,#c2ad84_100%)] text-brand/45",
  mixed:
    "bg-[linear-gradient(135deg,#183329_0%,#2f5848_45%,#d7c5a0_100%)] text-ivory/80",
  dark: "bg-[linear-gradient(135deg,#142a22_0%,#0d1b15_100%)] text-ivory/70",
};

const aspects: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  tall: "aspect-[2/3]",
  wide: "aspect-[16/9]",
  banner: "aspect-[21/9]",
  hero: "aspect-auto",
};

export type MediaPlaceholderProps = {
  icon?: LucideIcon;
  label?: string;
  caption?: string;
  variant?: Variant;
  aspect?: keyof typeof aspects;
  className?: string;
  iconClassName?: string;
  /** Texto accesible cuando no hay label visible. */
  alt?: string;
  children?: React.ReactNode;
};

export function MediaPlaceholder({
  icon: Icon,
  label,
  caption,
  variant = "green",
  aspect = "video",
  className,
  iconClassName,
  alt,
  children,
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt ?? label ?? "Imagen de Café Tsiluba"}
      className={cn(
        "relative isolate flex flex-col items-center justify-center overflow-hidden rounded-2xl",
        variant === "sand" ? "bg-sand text-brand/45" : variants[variant],
        aspects[aspect],
        className,
      )}
    >
      {/* Grano sutil */}
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-60" />

      {Icon && (
        <Icon
          aria-hidden
          className={cn("size-10 opacity-80", iconClassName)}
          strokeWidth={1.25}
        />
      )}
      {label && (
        <span className="mt-3 px-4 text-center font-heading text-sm tracking-wide">
          {label}
        </span>
      )}
      {caption && (
        <span className="mt-1 px-4 text-center text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
          {caption}
        </span>
      )}
      {children}
    </div>
  );
}
