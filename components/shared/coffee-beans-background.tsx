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
  { top: "4%", left: "6%", size: 48, rotate: -18, opacity: 0.16 },
  { top: "8%", left: "30%", size: 36, rotate: 42, opacity: 0.13 },
  { top: "12%", left: "58%", size: 56, rotate: -34, opacity: 0.15 },
  { top: "14%", left: "84%", size: 64, rotate: 24, opacity: 0.14 },
  { top: "22%", left: "18%", size: 40, rotate: 12, opacity: 0.13 },
  { top: "26%", left: "44%", size: 34, rotate: 8, opacity: 0.16 },
  { top: "28%", left: "72%", size: 50, rotate: -48, opacity: 0.14 },
  { top: "34%", left: "90%", size: 38, rotate: 30, opacity: 0.13 },
  { top: "38%", left: "12%", size: 58, rotate: -40, opacity: 0.15 },
  { top: "42%", left: "52%", size: 44, rotate: 56, opacity: 0.13 },
  { top: "46%", left: "76%", size: 42, rotate: -12, opacity: 0.14 },
  { top: "52%", left: "26%", size: 62, rotate: -8, opacity: 0.15 },
  { top: "56%", left: "6%", size: 36, rotate: 38, opacity: 0.13 },
  { top: "58%", left: "62%", size: 48, rotate: 18, opacity: 0.14 },
  { top: "64%", left: "92%", size: 40, rotate: -26, opacity: 0.16 },
  { top: "68%", left: "40%", size: 54, rotate: -52, opacity: 0.14 },
  { top: "72%", left: "14%", size: 44, rotate: 28, opacity: 0.13 },
  { top: "76%", left: "70%", size: 38, rotate: 64, opacity: 0.15 },
  { top: "82%", left: "50%", size: 58, rotate: -16, opacity: 0.14 },
  { top: "84%", left: "86%", size: 42, rotate: 44, opacity: 0.13 },
  { top: "88%", left: "24%", size: 50, rotate: 36, opacity: 0.16 },
  { top: "92%", left: "64%", size: 36, rotate: -38, opacity: 0.13 },
  { top: "94%", left: "8%", size: 46, rotate: 14, opacity: 0.15 },
  { top: "96%", left: "94%", size: 40, rotate: -22, opacity: 0.14 },
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
