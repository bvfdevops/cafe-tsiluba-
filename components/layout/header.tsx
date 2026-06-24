"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cabecera transparente sobre el hero oscuro (texto claro) hasta que se hace
  // scroll o se abre el menú móvil, momento en que toma fondo marfil (texto oscuro).
  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        onDark
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/60 bg-ivory/85 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="container-tsiluba flex h-16 items-center justify-between lg:h-20"
      >
        <Link
          href="/"
          aria-label="Café Tsiluba — inicio"
          className={cn(
            "flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight transition-colors",
            onDark ? "text-ivory" : "text-brand",
          )}
        >
          {/* Marca: solo la taza (dorada, se lee bien sobre claro y oscuro). */}
          <Image
            src="/logo-cup.png"
            alt="Café Tsiluba"
            width={52}
            height={52}
            priority
            className="h-10 w-auto lg:h-11"
          />
          {/* Wordmark de texto */}
          <span className="flex items-baseline gap-1.5 leading-none">
            Café{" "}
            <span className="font-accent text-2xl leading-none">Tsiluba</span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    onDark
                      ? active
                        ? "text-ivory"
                        : "text-ivory/70 hover:text-ivory"
                      : active
                        ? "text-brand"
                        : "text-foreground/60 hover:text-brand",
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-px",
                        onDark ? "bg-ivory" : "bg-brand",
                      )}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/carta" />}
            className={cn(
              "h-10 rounded-full px-5 transition-colors",
              onDark && "bg-ivory text-brand hover:bg-ivory/90",
            )}
          >
            Ver Carta
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
            onDark
              ? "text-ivory hover:bg-ivory/10"
              : "text-brand hover:bg-cream",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Panel móvil */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-b border-border/60 bg-ivory transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-tsiluba flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-cream text-brand"
                      : "text-foreground/70 hover:bg-cream/60",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 grid grid-cols-2 gap-2">
            <Button render={<Link href="/carta" />} className="h-11 rounded-xl">
              Ver Carta
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
              className="h-11 rounded-xl"
            >
              Cómo Llegar
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
