import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig, mapsEmbedUrl } from "@/lib/site";

export function Location() {
  return (
    <section className="container-tsiluba scroll-mt-24 py-20 sm:py-28">
      <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
        <div className="grid lg:grid-cols-2">
          {/* Info */}
          <Reveal from="left" className="flex flex-col justify-center gap-6 p-8 sm:p-12">
            <div>
              <span className="eyebrow">Dónde encontrarnos</span>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                Te esperamos en La Cisterna
              </h2>
            </div>

            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="text-foreground/75">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="text-foreground/75">
                  {siteConfig.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-foreground/75 hover:text-brand"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <Button
              render={
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 w-fit rounded-full px-6 text-base"
            >
              Abrir en Google Maps
              <ExternalLink className="size-4.5" />
            </Button>
          </Reveal>

          {/* Mapa */}
          <div className="min-h-[20rem] lg:min-h-[28rem]">
            <iframe
              title="Mapa de ubicación de Café Tsiluba"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[20rem] border-0 lg:min-h-[28rem]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
