import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Coffee, Users, Sparkles, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Button } from "@/components/ui/button";
import { literaryBenefits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiencia Literaria",
  description:
    "Descubre qué es una cafetería literaria. En Café Tsiluba los libros, el café de especialidad y las buenas conversaciones se encuentran en La Cisterna.",
  alternates: { canonical: "/experiencia-literaria" },
};

const benefitIcons = [BookOpen, Coffee, Users, Sparkles];

export default function ExperienciaLiterariaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiencia Literaria"
        title="Donde el café y los libros se encuentran"
        description="Más que una cafetería, somos un refugio cultural pensado para los que aman leer, conversar y disfrutar sin prisa."
      />

      {/* Qué es una cafetería literaria */}
      <section className="container-tsiluba py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <span className="eyebrow">El concepto</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              ¿Qué es una cafetería literaria?
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              <p>
                Una cafetería literaria es mucho más que un lugar para tomar
                café: es un espacio donde los libros son protagonistas y cada
                visita invita a detenerse, leer y conversar.
              </p>
              <p>
                En Café Tsiluba combinamos café de especialidad y repostería
                artesanal con un ambiente diseñado para la lectura. Aquí el
                tiempo se vive distinto: con calma, entre páginas y buenas
                conversaciones.
              </p>
            </div>
          </Reveal>

          <Reveal from="right">
            <MediaPlaceholder
              icon={BookOpen}
              label="Lectura & café"
              variant="green"
              aspect="video"
              className="shadow-2xl shadow-brand/10"
            />
          </Reveal>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-cream/40 py-20 sm:py-28">
        <div className="container-tsiluba">
          <SectionHeading
            eyebrow="Por qué te encantará"
            title="Un espacio pensado para ti"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {literaryBenefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <Reveal as="li" key={b.title} delay={i * 0.06}>
                  <div className="flex h-full gap-5 rounded-2xl border border-border/70 bg-card p-7">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand text-ivory">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-brand">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Cultura y comunidad — editorial */}
      <section className="container-tsiluba py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left" className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <MediaPlaceholder
              icon={Users}
              label="Comunidad"
              variant="sand"
              aspect="portrait"
              className="mt-8"
            />
            <MediaPlaceholder
              icon={Coffee}
              label="Ambiente"
              variant="dark"
              aspect="portrait"
            />
          </Reveal>
          <Reveal from="right" className="order-1 lg:order-2">
            <span className="eyebrow">Cultura & comunidad</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              Un punto de encuentro en el barrio
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-foreground/70 sm:text-lg">
              <p>
                Creemos en el valor de los espacios que reúnen a las personas.
                Café Tsiluba es un lugar con identidad de barrio, donde vecinos,
                lectores y curiosos comparten una mesa.
              </p>
              <p>
                Y como sabemos que los buenos momentos se disfrutan en compañía,
                tu mascota también es bienvenida. 🐾
              </p>
            </div>
            <Button
              render={<Link href="/contacto" />}
              className="mt-8 h-12 rounded-full px-6 text-base"
            >
              Visítanos
              <ArrowRight className="size-4.5" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
