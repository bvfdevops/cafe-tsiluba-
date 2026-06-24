"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = testimonials.length;

  const go = (next: number) => {
    setDir(next > index || (index === total - 1 && next === 0) ? 1 : -1);
    setIndex((next + total) % total);
  };

  const current = testimonials[index];

  return (
    <section className="bg-cream/40 py-20 sm:py-28">
      <div className="container-tsiluba">
        <SectionHeading
          eyebrow="Lo que dicen de nosotros"
          title="Historias que nos enorgullecen"
          description={`Calificación ${siteConfig.rating.value}★ basada en más de ${siteConfig.rating.count} opiniones.`}
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="relative min-h-[15rem] overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-sm sm:p-12">
            <Quote className="size-9 text-sand" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-4",
                        i < current.rating
                          ? "text-sand"
                          : "text-border",
                      )}
                      fill={i < current.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-pretty font-heading text-xl leading-relaxed text-brand sm:text-2xl">
                  “{current.text}”
                </blockquote>
                <p className="mt-5 text-sm font-medium text-foreground/60">
                  — {current.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Testimonio anterior"
              onClick={() => go(index - 1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-brand transition-colors hover:bg-cream"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir al testimonio ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-brand" : "w-2 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Testimonio siguiente"
              onClick={() => go(index + 1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-brand transition-colors hover:bg-cream"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
