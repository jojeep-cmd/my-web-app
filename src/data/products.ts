import { products as products1 } from "./banchay.js";
import { products as products2 } from "./tatca.js";
export interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    originalPrice: string;
    commissionRate: string;
    sold: string;
    category: string;
    affiliateLink: string;
}

export interface Category {
    id: string;
    label: string;
    count: number;
}

export const ALL_PRODUCTS: Product[] = [...products2, ...products1];

export const CATEGORIES: Category[] = [
    ...Array.from(new Set(ALL_PRODUCTS.map((p) => p.category))).map((cat) => ({
        id: cat,
        label: cat,
        count: ALL_PRODUCTS.filter((p) => p.category === cat).length,
    })),
];

export function getProducts(category?: string | null): Product[] {
    if (!category || category === "all") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
    if (!query.trim()) return ALL_PRODUCTS;
    const q = query.toLowerCase().trim();
    return ALL_PRODUCTS.filter(
        (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q),
    );
}
