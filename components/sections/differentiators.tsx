import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="bg-cream/40 py-20 sm:py-28">
      <div className="container-tsiluba">
        <SectionHeading
          eyebrow="Lo que nos hace únicos"
          title="Una experiencia con identidad propia"
          description="Cada detalle de Café Tsiluba está pensado para que te sientas como en casa."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-ivory transition-transform duration-300 group-hover:scale-105">
                  <d.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-brand">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {d.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
