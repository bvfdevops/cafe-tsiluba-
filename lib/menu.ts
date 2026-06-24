import menuData from "@/data/menu.json";

export type MenuItem = {
  name: string;
  price: number;
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  icon: string;
  blurb: string;
  items: MenuItem[];
};

export const menu = menuData as {
  currency: string;
  categories: MenuCategory[];
};

export const menuCategories = menu.categories;

/** Todos los productos marcados como destacados, con su categoría. */
export function getFeaturedItems() {
  return menu.categories.flatMap((c) =>
    c.items
      .filter((i) => i.featured)
      .map((i) => ({ ...i, categoryId: c.id, categoryName: c.name })),
  );
}

/** Busca un producto por nombre (case-insensitive, primera coincidencia). */
export function findItem(name: string): MenuItem | undefined {
  const target = name.trim().toLowerCase();
  for (const c of menu.categories) {
    const found = c.items.find((i) => i.name.toLowerCase() === target);
    if (found) return found;
  }
}
