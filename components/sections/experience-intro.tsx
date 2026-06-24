import { Coffee, BookOpen } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";

export function ExperienceIntro() {
  return (
    <section className="container-tsiluba scroll-mt-24 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Imagen */}
        <Reveal from="left" className="order-2 lg:order-1">
          <div className="relative">
            <MediaPlaceholder
              icon={Coffee}
              label="Café & libros"
              variant="green"
              aspect="portrait"
              className="shadow-2xl shadow-brand/10"
            />
            {/* Tarjeta flotante */}
            <div className="absolute -bottom-6 -right-4 hidden max-w-[200px] rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
              <BookOpen className="size-6 text-brand" strokeWidth={1.5} />
              <p className="mt-2 font-heading text-sm font-semibold text-brand">
                Cada taza cuenta una historia
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal from="right" className="order-1 lg:order-2">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-px w-6 bg-brand/40" aria-hidden />
            Experiencia Tsiluba
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Más que una cafetería
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            En Café Tsiluba creemos que cada taza de café cuenta una historia.
            Creamos un espacio donde los libros, el café de especialidad y las
            buenas conversaciones transforman cualquier visita en una experiencia
            para recordar.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Un refugio urbano en La Cisterna pensado para leer, compartir y
            disfrutar sin prisa —y siempre con tu mascota bienvenida.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="font-heading text-3xl font-semibold text-brand">
                4.4★
              </dt>
              <dd className="text-sm text-foreground/60">+300 opiniones</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl font-semibold text-brand">
                100%
              </dt>
              <dd className="text-sm text-foreground/60">Artesanal y local</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
