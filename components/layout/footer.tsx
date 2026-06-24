import Link from "next/link";
import { MapPin, Phone, Mail, Clock, BookOpen } from "lucide-react";
import { Instagram, Facebook } from "@/components/shared/social-icons";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-brand text-ivory">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-tsiluba relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-xl font-semibold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-ivory/10">
              <BookOpen className="size-4.5" strokeWidth={1.5} />
            </span>
            Café <span className="font-accent text-3xl leading-none">Tsiluba</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/70">
            Cafetería literaria, pet friendly y de especialidad en el corazón de
            La Cisterna. Café, libros y buenos momentos.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Café Tsiluba"
              className="grid size-10 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20"
            >
              <Instagram className="size-4.5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Café Tsiluba"
              className="grid size-10 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20"
            >
              <Facebook className="size-4.5" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-ivory/60">
            Explora
          </h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ivory/80 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contacto */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-ivory/60">
            Visítanos
          </h3>
          <a
            href={siteConfig.maps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {siteConfig.address.street}, {siteConfig.address.locality}
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
          >
            <Phone className="size-4 shrink-0" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
          >
            <Mail className="size-4 shrink-0" />
            {siteConfig.contact.email}
          </a>
        </div>

        {/* Horarios */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-ivory/60">
            Horarios
          </h3>
          {siteConfig.hours.map((h) => (
            <div key={h.days} className="flex items-start gap-2 text-sm text-ivory/80">
              <Clock className="mt-0.5 size-4 shrink-0" />
              <span>
                {h.days}
                <br />
                <span className="text-ivory/60">{h.time}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-tsiluba flex flex-col items-center justify-between gap-2 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Café Tsiluba. Todos los derechos reservados.
          </p>
          <p>Hecho con ☕ y 📚 en La Cisterna, Santiago.</p>
        </div>
      </div>
    </footer>
  );
}
