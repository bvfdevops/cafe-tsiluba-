import Link from "next/link";
import { Star, PawPrint, BookOpen, ArrowRight, MapPin } from "lucide-react";
import { Instagram } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const stats = [
  { icon: Star, label: "4.4 estrellas", fill: true },
  { icon: Star, label: "+300 opiniones", fill: false },
  { icon: PawPrint, label: "Pet Friendly", fill: false },
  { icon: BookOpen, label: "Cafetería Literaria", fill: false },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Fondo placeholder con gradiente de marca */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(120%_120%_at_70%_10%,#2f5848_0%,#183329_45%,#0f2019_100%)]"
      />
      {/* Manchas de color tipo aurora */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/4 -z-10 size-[28rem] rounded-full bg-sand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-0 -z-10 size-[24rem] rounded-full bg-cream/10 blur-3xl"
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="container-tsiluba relative w-full pt-28 pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory/80 backdrop-blur">
            <BookOpen className="size-3.5" />
            La Cisterna · Santiago
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Café, libros y buenos momentos en{" "}
            <span className="font-accent text-sand">La Cisterna</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
            Café de especialidad, repostería artesanal, helados, sandwiches y un
            espacio literario único para disfrutar, leer y compartir.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              render={<Link href="/carta" />}
              className="h-12 rounded-full px-6 text-base"
            >
              Ver Carta
              <ArrowRight className="size-4.5" />
            </Button>
            <Button
              variant="outline"
              render={
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 rounded-full border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
            >
              <MapPin className="size-4.5" />
              Cómo Llegar
            </Button>
            <Button
              variant="ghost"
              render={
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 rounded-full px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
            >
              <Instagram className="size-4.5" />
              Instagram
            </Button>
          </div>

          {/* Stats */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 text-sm font-medium text-ivory/80"
              >
                <s.icon
                  className="size-4 text-sand"
                  fill={s.fill ? "currentColor" : "none"}
                  strokeWidth={1.75}
                />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Degradado inferior para fundir con la siguiente sección */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory"
      />
    </section>
  );
}
