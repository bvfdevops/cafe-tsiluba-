import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

/** Cabecera editorial para páginas internas. */
export function PageHeader({ eyebrow, title, description, className }: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[radial-gradient(120%_140%_at_75%_0%,#2f5848_0%,#183329_55%,#0f2019_100%)] text-ivory",
        className,
      )}
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -right-20 -top-10 size-72 rounded-full bg-sand/15 blur-3xl"
      />
      <div className="container-tsiluba relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-sand">
            <span className="h-px w-6 bg-sand/50" aria-hidden />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
