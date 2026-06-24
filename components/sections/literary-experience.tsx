import Link from "next/link";
import { BookOpen, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Button } from "@/components/ui/button";

export function LiteraryExperience() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-20 text-ivory sm:py-28">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -right-24 top-0 size-[26rem] rounded-full bg-sand/10 blur-3xl"
      />

      <div className="container-tsiluba relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal from="left">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-sand">
            <BookOpen className="size-4" />
            Experiencia Literaria
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Un rincón para quienes aman leer
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-ivory/75 sm:text-lg">
            Más que servir café, abrimos un espacio donde los libros son los
            protagonistas. Toma un título de nuestra selección, encuentra tu
            lugar favorito y déjate llevar por una buena historia mientras
            disfrutas tu taza.
          </p>
          <figure className="mt-8 border-l-2 border-sand/50 pl-5">
            <Quote className="size-5 text-sand" />
            <blockquote className="mt-2 font-heading text-lg italic text-ivory/90">
              Un buen libro y un buen café son el comienzo perfecto de cualquier
              conversación.
            </blockquote>
          </figure>

          <Button
            render={<Link href="/experiencia-literaria" />}
            className="mt-8 h-12 rounded-full bg-ivory px-6 text-base text-brand hover:bg-ivory/90"
          >
            Visítanos
            <ArrowRight className="size-4.5" />
          </Button>
        </Reveal>

        <Reveal from="right" className="grid grid-cols-2 gap-4">
          <MediaPlaceholder
            icon={BookOpen}
            label="Estantería"
            variant="dark"
            aspect="portrait"
            className="mt-8"
          />
          <MediaPlaceholder
            icon={BookOpen}
            label="Lectura & café"
            variant="sand"
            aspect="portrait"
          />
        </Reveal>
      </div>
    </section>
  );
}
