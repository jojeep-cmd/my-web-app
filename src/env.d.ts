type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime {}
}
/// <reference types="astro/client" />

// Khai báo kiểu dữ liệu cho các binding Cloudflare
interface Env {
    // D1 Database — dùng cho truy vấn SQL
    DB: D1Database;

    // KV Storage — dùng cho dữ liệu key-value
    MY_KV: KVNamespace;

    // Static Assets — file tĩnh (hình ảnh, CSS, JS)
    ASSETS: Fetcher;
}
