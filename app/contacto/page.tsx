import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { Instagram, Facebook } from "@/components/shared/social-icons";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig, mapsEmbedUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Visítanos en Av. Fernández Albano #196, La Cisterna. Escríbenos por WhatsApp o Instagram. Café Tsiluba — cafetería literaria y pet friendly en Santiago.",
  alternates: { canonical: "/contacto" },
};

const infoItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: `${siteConfig.address.street}, ${siteConfig.address.locality}`,
    href: siteConfig.maps.placeUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Correo",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
] as const;

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Conversemos"
        description="¿Tienes una consulta, una reserva o simplemente quieres saludar? Estamos a un mensaje de distancia."
      />

      <section className="container-tsiluba py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Información */}
          <Reveal from="left" className="flex flex-col gap-8">
            {/* CTAs rápidos */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                render={
                  <a
                    href={whatsappUrl("¡Hola Café Tsiluba! 😊")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-12 rounded-full bg-[#25D366] px-6 text-base text-white hover:bg-[#1fb457]"
              >
                <MessageCircle className="size-4.5" />
                WhatsApp
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
                className="h-12 rounded-full px-6 text-base"
              >
                <Instagram className="size-4.5" />
                Instagram
              </Button>
              <Button
                render={
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="h-12 rounded-full px-6 text-base"
              >
                <Facebook className="size-4.5" />
                Facebook
              </Button>
            </div>

            {/* Datos */}
            <ul className="flex flex-col gap-5">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-start gap-4"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-brand transition-colors group-hover:bg-brand group-hover:text-ivory">
                      <item.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-foreground/50">
                        {item.label}
                      </span>
                      <span className="font-medium text-foreground/85 group-hover:text-brand">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-brand">
                  <Clock className="size-5" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-foreground/50">
                    Horarios
                  </span>
                  {siteConfig.hours.map((h) => (
                    <span
                      key={h.days}
                      className="block font-medium text-foreground/85"
                    >
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            {/* Mapa */}
            <div className="overflow-hidden rounded-2xl border border-border/70">
              <iframe
                title="Mapa de ubicación de Café Tsiluba"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal from="right">
            <div className="rounded-3xl border border-border/70 bg-cream/30 p-7 sm:p-9">
              <h2 className="font-heading text-2xl font-semibold text-brand">
                Envíanos un mensaje
              </h2>
              <p className="mt-2 mb-6 text-sm text-foreground/60">
                Completa el formulario y te responderemos a la brevedad.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
