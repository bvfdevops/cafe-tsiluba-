import Link from "next/link";
import { BookOpen, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";

/**
 * Barra de acción fija en móvil con las 3 conversiones clave:
 * Ver Carta, Cómo Llegar y WhatsApp.
 */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-ivory/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-3 divide-x divide-border/60">
        <Link
          href="/carta"
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-brand"
        >
          <BookOpen className="size-5" strokeWidth={1.5} />
          Ver Carta
        </Link>
        <a
          href={siteConfig.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-brand"
        >
          <MapPin className="size-5" strokeWidth={1.5} />
          Cómo Llegar
        </a>
        <a
          href={whatsappUrl("¡Hola Café Tsiluba! 😊")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-[#1a8a4a]"
        >
          <MessageCircle className="size-5" strokeWidth={1.5} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
