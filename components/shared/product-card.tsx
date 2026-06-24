import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/site";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

type Props = {
  name: string;
  price: number;
  description?: string;
  category?: string;
  icon?: LucideIcon;
  variant?: "green" | "cream" | "sand" | "mixed" | "dark";
  className?: string;
};

export function ProductCard({
  name,
  price,
  description,
  category,
  icon,
  variant = "cream",
  className,
}: Props) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5",
        className,
      )}
    >
      <div className="overflow-hidden">
        <MediaPlaceholder
          icon={icon}
          variant={variant}
          aspect="square"
          alt={name}
          className="rounded-none transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg leading-tight font-semibold text-brand">
            {name}
          </h3>
          <span className="shrink-0 font-heading text-lg font-semibold text-brand">
            {formatPrice(price)}
          </span>
        </div>
        {description && (
          <p className="text-sm leading-relaxed text-foreground/60">
            {description}
          </p>
        )}
        {category && (
          <Badge
            variant="secondary"
            className="mt-auto w-fit bg-cream text-brand/80"
          >
            {category}
          </Badge>
        )}
      </div>
    </article>
  );
}
