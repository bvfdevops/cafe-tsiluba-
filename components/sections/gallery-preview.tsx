import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  return (
    <section className="container-tsiluba scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Un vistazo"
        title="Galería"
        description="Café, libros, dulces y rincones para enamorarse del lugar."
      />
      <div className="mt-12">
        <GalleryGrid limit={8} />
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          render={<Link href="/galeria" />}
          variant="outline"
          className="h-12 rounded-full px-7 text-base"
        >
          Ver galería completa
          <ArrowRight className="size-4.5" />
        </Button>
      </div>
    </section>
  );
}
