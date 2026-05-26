import type { APIRoute } from "astro";
import { searchProducts } from "../../data/products";

export const GET: APIRoute = ({ url }) => {
    const query = url.searchParams.get("q") ?? "";
    const page = parseInt(url.searchParams.get("page") ?? "1", 10);
    const limit = parseInt(url.searchParams.get("limit") ?? "20", 10);

    if (!query.trim()) {
        return new Response(
            JSON.stringify({ error: "Missing query parameter ?q=" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
        );
    }

    const all = searchProducts(query);
    const total = all.length;
    const start = (page - 1) * limit;
    const results = all.slice(start, start + limit);

    return new Response(
        JSON.stringify({
            results,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            query,
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
