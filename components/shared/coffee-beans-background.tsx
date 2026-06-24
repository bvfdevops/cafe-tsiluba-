import type { CSSProperties, SVGProps } from "react";

/**
 * Grano de café en estilo outline, coherente con los íconos Lucide del sitio.
 * Una elipse inclinada con la hendidura central característica.
 */
function CoffeeBean(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <g transform="rotate(32 16 16)">
        <ellipse cx="16" cy="16" rx="8.5" ry="12.5" />
        <path d="M16 4.5C12.3 9 19.7 13 16 17s-3.7 8 0 10.5" />
      </g>
    </svg>
  );
}

/** Granos esparcidos con tamaño, posición, giro y opacidad variables. */
const beans: Array<{
  top: string;
  left: string;
  size: number;
  rotate: number;
  opacity: number;
}> = [
  { top: "6%", left: "8%", size: 46, rotate: -18, opacity: 0.06 },
  { top: "14%", left: "82%", size: 64, rotate: 24, opacity: 0.05 },
  { top: "26%", left: "44%", size: 34, rotate: 8, opacity: 0.05 },
  { top: "38%", left: "16%", size: 54, rotate: -40, opacity: 0.06 },
  { top: "46%", left: "70%", size: 40, rotate: 60, opacity: 0.05 },
  { top: "58%", left: "30%", size: 60, rotate: -8, opacity: 0.05 },
  { top: "64%", left: "90%", size: 36, rotate: 18, opacity: 0.06 },
  { top: "72%", left: "54%", size: 48, rotate: -28, opacity: 0.05 },
  { top: "82%", left: "10%", size: 58, rotate: 36, opacity: 0.06 },
  { top: "88%", left: "76%", size: 42, rotate: -52, opacity: 0.05 },
  { top: "94%", left: "38%", size: 38, rotate: 14, opacity: 0.05 },
];

/**
 * Capa decorativa fija con granos de café detrás de todo el contenido.
 * Es puramente ornamental (aria-hidden) y no captura eventos del puntero.
 */
export function CoffeeBeansBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-brand"
    >
      {beans.map((bean, i) => {
        const style: CSSProperties = {
          top: bean.top,
          left: bean.left,
          width: bean.size,
          height: bean.size,
          opacity: bean.opacity,
          transform: `rotate(${bean.rotate}deg)`,
        };
        return <CoffeeBean key={i} className="absolute" style={style} />;
      })}
    </div>
  );
}
