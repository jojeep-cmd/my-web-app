import type { APIRoute } from "astro";
import { CATEGORIES, ALL_PRODUCTS } from "../../data/products";

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            categories: CATEGORIES,
            total: ALL_PRODUCTS.length,
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
