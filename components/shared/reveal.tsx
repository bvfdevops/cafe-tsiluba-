"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Retraso de la animación en segundos. */
  delay?: number;
  /** Dirección de entrada. */
  from?: "up" | "down" | "left" | "right" | "fade";
  /** Render como otro elemento (por defecto div). */
  as?: "div" | "li" | "section" | "article";
};

const offset = 24;

const buildVariants = (from: NonNullable<Props["from"]>): Variants => {
  const hidden =
    from === "fade"
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: from === "left" ? -offset : from === "right" ? offset : 0,
          y: from === "up" ? offset : from === "down" ? -offset : 0,
        };
  return {
    hidden,
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={buildVariants(from)}
    >
      {children}
    </MotionTag>
  );
}
