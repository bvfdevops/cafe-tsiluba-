import {
  Coffee,
  CupSoda,
  CakeSlice,
  Sandwich,
  Croissant,
  IceCream,
  IceCreamCone,
  BookOpen,
  PawPrint,
  Home,
  type LucideIcon,
} from "lucide-react";

/** Resuelve nombres de íconos (string en data/JSON) a componentes Lucide. */
export const iconMap: Record<string, LucideIcon> = {
  Coffee,
  CupSoda,
  CakeSlice,
  Sandwich,
  Croissant,
  IceCream,
  IceCream2: IceCream,
  IceCreamCone,
  BookOpen,
  PawPrint,
  Home,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Coffee;
}
