import type { APIRoute } from "astro";
import { getProducts } from "../../data/products";

export const GET: APIRoute = ({ url }) => {
    const category = url.searchParams.get("category");
    const page = parseInt(url.searchParams.get("page") ?? "1", 10);
    const limit = parseInt(url.searchParams.get("limit") ?? "20", 10);

    const all = getProducts(category);
    const total = all.length;
    const start = (page - 1) * limit;
    const products = all.slice(start, start + limit);

    return new Response(
        JSON.stringify({
            products,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            category: category ?? "all",
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
