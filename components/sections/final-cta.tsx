import { MapPin, Phone } from "lucide-react";
import { Instagram } from "@/components/shared/social-icons";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="container-tsiluba py-20 sm:py-28">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-[radial-gradient(120%_140%_at_20%_0%,#2f5848_0%,#183329_55%,#0f2019_100%)] px-6 py-16 text-center text-ivory sm:px-12 sm:py-20">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="absolute -left-20 -top-10 size-72 rounded-full bg-sand/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Listo para vivir la experiencia Tsiluba?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-ivory/75 sm:text-lg">
            Te esperamos con un buen café, una buena historia y un espacio pensado
            para disfrutar sin prisa.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              render={
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 w-full rounded-full bg-ivory px-6 text-base text-brand hover:bg-ivory/90 sm:w-auto"
            >
              <MapPin className="size-4.5" />
              Cómo Llegar
            </Button>
            <Button
              render={
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              className="h-12 w-full rounded-full border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory sm:w-auto"
            >
              <Instagram className="size-4.5" />
              Instagram
            </Button>
            <Button
              render={<a href={`tel:${siteConfig.contact.phoneRaw}`} />}
              variant="ghost"
              className="h-12 w-full rounded-full px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory sm:w-auto"
            >
              <Phone className="size-4.5" />
              Llamar
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
