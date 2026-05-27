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

export const ALL_PRODUCTS: Product[] = [
    // ── Làm đẹp ──────────────────────────────────────────────────────────
    {
        id: "p001", name: "Kem chống nắng Anessa Perfect UV SPF50+ PA++++", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP1",
        price: "₫320.000", originalPrice: "₫380.000", commissionRate: "8%", sold: "2.1k", category: "Làm đẹp",
        affiliateLink: "#",
    },
    {
        id: "p002", name: "Son môi 3CE Soft Matte Lip Color nhiều màu", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP2",
        price: "₫195.000", originalPrice: "₫250.000", commissionRate: "10%", sold: "4.8k", category: "Làm đẹp",
        affiliateLink: "#",
    },
    {
        id: "p003", name: "Tẩy trang Bioderma Sensibio H2O 500ml cho da nhạy cảm", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP3",
        price: "₫285.000", originalPrice: "₫320.000", commissionRate: "9%", sold: "6.2k", category: "Làm đẹp",
        affiliateLink: "#",
    },
    {
        id: "p004", name: "Serum vitamin C Melano CC Rohto 20ml trắng sáng", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP4",
        price: "₫145.000", originalPrice: "₫180.000", commissionRate: "12%", sold: "9.7k", category: "Làm đẹp",
        affiliateLink: "#",
    },
    {
        id: "p005", name: "Bộ dưỡng da Sulwhasoo Concentrated Ginseng Basic Kit", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP5",
        price: "₫850.000", originalPrice: "₫1.200.000", commissionRate: "10%", sold: "3.2k", category: "Làm đẹp",
        affiliateLink: "#",
    },
    {
        id: "p006", name: "Mascara Maybelline Lash Sensational dài mi cong vút", image: "https://placehold.co/300x300/fff4f2/ee4d2d?text=SP6",
        price: "₫120.000", originalPrice: "₫155.000", commissionRate: "7%", sold: "11k", category: "Làm đẹp",
        affiliateLink: "#",
    },

    // ── Điện tử ───────────────────────────────────────────────────────────
    {
        id: "p007", name: "Tai nghe Bluetooth TWS không dây chống ồn ANC Pro", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP7",
        price: "₫189.000", originalPrice: "₫250.000", commissionRate: "12%", sold: "5.4k", category: "Điện tử",
        affiliateLink: "#",
    },
    {
        id: "p008", name: "Máy lọc không khí Xiaomi Air Purifier 4 Lite chính hãng", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP8",
        price: "₫2.190.000", originalPrice: "₫2.500.000", commissionRate: "7%", sold: "1.7k", category: "Điện tử",
        affiliateLink: "#",
    },
    {
        id: "p009", name: "Sạc dự phòng Anker 20000mAh PowerCore III Elite", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP9",
        price: "₫590.000", originalPrice: "₫750.000", commissionRate: "9%", sold: "3.1k", category: "Điện tử",
        affiliateLink: "#",
    },
    {
        id: "p010", name: "Robot hút bụi Dreame D10 Plus tự đổ rác thông minh", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP10",
        price: "₫4.590.000", originalPrice: "₫5.200.000", commissionRate: "8%", sold: "542", category: "Điện tử",
        affiliateLink: "#",
    },
    {
        id: "p011", name: "Đèn bàn học chống cận LED Baseus điều chỉnh sáng", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP11",
        price: "₫245.000", originalPrice: "₫320.000", commissionRate: "11%", sold: "678", category: "Điện tử",
        affiliateLink: "#",
    },
    {
        id: "p012", name: "Chuột không dây Logitech MX Master 3S Silent", image: "https://placehold.co/300x300/f0f9ff/3b82f6?text=SP12",
        price: "₫1.750.000", originalPrice: "₫2.100.000", commissionRate: "6%", sold: "920", category: "Điện tử",
        affiliateLink: "#",
    },

    // ── Thời trang nam ───────────────────────────────────────────────────
    {
        id: "p013", name: "Giày thể thao nam Nike Air Max 270 chạy bộ tập gym", image: "https://placehold.co/300x300/f0fdf4/22c55e?text=SP13",
        price: "₫1.250.000", originalPrice: "₫1.590.000", commissionRate: "9%", sold: "4.1k", category: "Thời trang nam",
        affiliateLink: "#",
    },
    {
        id: "p014", name: "Áo polo nam Lacoste slim fit cotton piqué", image: "https://placehold.co/300x300/f0fdf4/22c55e?text=SP14",
        price: "₫480.000", originalPrice: "₫650.000", commissionRate: "8%", sold: "2.3k", category: "Thời trang nam",
        affiliateLink: "#",
    },
    {
        id: "p015", name: "Quần jean nam Levi's 511 Slim Fit xanh đậm", image: "https://placehold.co/300x300/f0fdf4/22c55e?text=SP15",
        price: "₫890.000", originalPrice: "₫1.200.000", commissionRate: "7%", sold: "1.8k", category: "Thời trang nam",
        affiliateLink: "#",
    },
    {
        id: "p016", name: "Đồng hồ nam Casio G-Shock GA-2100 chống sốc nước", image: "https://placehold.co/300x300/f0fdf4/22c55e?text=SP16",
        price: "₫2.850.000", originalPrice: "₫3.500.000", commissionRate: "6%", sold: "760", category: "Thời trang nam",
        affiliateLink: "#",
    },
    {
        id: "p017", name: "Balo laptop nam Samsonite Tectonic 2 15.6 inch", image: "https://placehold.co/300x300/f0fdf4/22c55e?text=SP17",
        price: "₫1.450.000", originalPrice: "₫1.900.000", commissionRate: "8%", sold: "430", category: "Thời trang nam",
        affiliateLink: "#",
    },

    // ── Thời trang nữ ───────────────────────────────────────────────────
    {
        id: "p018", name: "Váy maxi hoa nhí cổ vuông dáng dài Vintage", image: "https://placehold.co/300x300/fdf4ff/a855f7?text=SP18",
        price: "₫185.000", originalPrice: "₫260.000", commissionRate: "12%", sold: "7.6k", category: "Thời trang nữ",
        affiliateLink: "#",
    },
    {
        id: "p019", name: "Túi xách nữ da PU cao cấp thương hiệu Charles & Keith", image: "https://placehold.co/300x300/fdf4ff/a855f7?text=SP19",
        price: "₫490.000", originalPrice: "₫720.000", commissionRate: "10%", sold: "3.4k", category: "Thời trang nữ",
        affiliateLink: "#",
    },
    {
        id: "p020", name: "Giày cao gót nữ mũi nhọn gót nhọn 7cm thanh lịch", image: "https://placehold.co/300x300/fdf4ff/a855f7?text=SP20",
        price: "₫295.000", originalPrice: "₫420.000", commissionRate: "11%", sold: "5.1k", category: "Thời trang nữ",
        affiliateLink: "#",
    },
    {
        id: "p021", name: "Áo sơ mi linen nữ tay dài dáng rộng basic casual", image: "https://placehold.co/300x300/fdf4ff/a855f7?text=SP21",
        price: "₫149.000", originalPrice: "₫210.000", commissionRate: "13%", sold: "12k", category: "Thời trang nữ",
        affiliateLink: "#",
    },
    {
        id: "p022", name: "Kính mát nữ Rayban Aviator Classic gọng titan UV400", image: "https://placehold.co/300x300/fdf4ff/a855f7?text=SP22",
        price: "₫1.890.000", originalPrice: "₫2.400.000", commissionRate: "7%", sold: "890", category: "Thời trang nữ",
        affiliateLink: "#",
    },

    // ── Mẹ & Bé ─────────────────────────────────────────────────────────
    {
        id: "p023", name: "Tã quần Huggies Dry Pants XXL34 miếng thấm hút tốt", image: "https://placehold.co/300x300/fffbeb/f59e0b?text=SP23",
        price: "₫95.000", originalPrice: "₫115.000", commissionRate: "5%", sold: "12k", category: "Mẹ & Bé",
        affiliateLink: "#",
    },
    {
        id: "p024", name: "Sữa công thức Nan Optipro 3 850g cho bé từ 1-3 tuổi", image: "https://placehold.co/300x300/fffbeb/f59e0b?text=SP24",
        price: "₫320.000", originalPrice: "₫380.000", commissionRate: "6%", sold: "8.9k", category: "Mẹ & Bé",
        affiliateLink: "#",
    },
    {
        id: "p025", name: "Xe đẩy em bé Aprica Soraria gấp gọn nhẹ", image: "https://placehold.co/300x300/fffbeb/f59e0b?text=SP25",
        price: "₫8.500.000", originalPrice: "₫10.200.000", commissionRate: "5%", sold: "234", category: "Mẹ & Bé",
        affiliateLink: "#",
    },
    {
        id: "p026", name: "Bình sữa Pigeon cổ rộng 240ml chống sặc", image: "https://placehold.co/300x300/fffbeb/f59e0b?text=SP26",
        price: "₫125.000", originalPrice: "₫160.000", commissionRate: "8%", sold: "15k", category: "Mẹ & Bé",
        affiliateLink: "#",
    },
    {
        id: "p027", name: "Đồ chơi xếp hình LEGO Duplo My First Bricks 120 mảnh", image: "https://placehold.co/300x300/fffbeb/f59e0b?text=SP27",
        price: "₫450.000", originalPrice: "₫580.000", commissionRate: "7%", sold: "1.2k", category: "Mẹ & Bé",
        affiliateLink: "#",
    },

    // ── Nhà cửa & Đời sống ───────────────────────────────────────────────
    {
        id: "p028", name: "Nồi chiên không dầu 5L Philips HD9270 đen bóng", image: "https://placehold.co/300x300/f0fdf4/16a34a?text=SP28",
        price: "₫1.490.000", originalPrice: "₫1.800.000", commissionRate: "6%", sold: "890", category: "Nhà cửa & Đời sống",
        affiliateLink: "#",
    },
    {
        id: "p029", name: "Máy xay sinh tố Blendtec Total Classic 1560W", image: "https://placehold.co/300x300/f0fdf4/16a34a?text=SP29",
        price: "₫3.200.000", originalPrice: "₫4.100.000", commissionRate: "7%", sold: "312", category: "Nhà cửa & Đời sống",
        affiliateLink: "#",
    },
    {
        id: "p030", name: "Bộ chăn ga gối Everon cotton lạnh 1m8x2m", image: "https://placehold.co/300x300/f0fdf4/16a34a?text=SP30",
        price: "₫580.000", originalPrice: "₫780.000", commissionRate: "9%", sold: "2.7k", category: "Nhà cửa & Đời sống",
        affiliateLink: "#",
    },
    {
        id: "p031", name: "Nồi cơm điện cao tần Panasonic SR-HZ105 1L", image: "https://placehold.co/300x300/f0fdf4/16a34a?text=SP31",
        price: "₫1.890.000", originalPrice: "₫2.300.000", commissionRate: "6%", sold: "1.4k", category: "Nhà cửa & Đời sống",
        affiliateLink: "#",
    },
    {
        id: "p032", name: "Bình giữ nhiệt Thermos 500ml giữ nóng lạnh 24h", image: "https://placehold.co/300x300/f0fdf4/16a34a?text=SP32",
        price: "₫280.000", originalPrice: "₫350.000", commissionRate: "10%", sold: "6.8k", category: "Nhà cửa & Đời sống",
        affiliateLink: "#",
    },

    // ── Thực phẩm & Sức khỏe ────────────────────────────────────────────
    {
        id: "p033", name: "Vitamin C 1000mg Now Foods hộp 250 viên nhập Mỹ", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP33",
        price: "₫280.000", originalPrice: "₫350.000", commissionRate: "15%", sold: "9.3k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },
    {
        id: "p034", name: "Whey protein Gold Standard 100% Optimum Nutrition 2lb", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP34",
        price: "₫680.000", originalPrice: "₫850.000", commissionRate: "12%", sold: "4.5k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },
    {
        id: "p035", name: "Yến mạch Quaker Oats nguyên hạt 4.5kg nhập Mỹ", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP35",
        price: "₫290.000", originalPrice: "₫360.000", commissionRate: "8%", sold: "7.1k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },
    {
        id: "p036", name: "Trà xanh Matcha Nhật Bản Ippodo Ummon 40g", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP36",
        price: "₫420.000", originalPrice: "₫520.000", commissionRate: "10%", sold: "2.6k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },
    {
        id: "p037", name: "Omega 3 fish oil Nature Made 1200mg 200 viên", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP37",
        price: "₫390.000", originalPrice: "₫480.000", commissionRate: "13%", sold: "5.8k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },
    {
        id: "p038", name: "Mật ong nguyên chất Đắk Lắk 1kg không pha trộn", image: "https://placehold.co/300x300/fef2f2/dc2626?text=SP38",
        price: "₫185.000", originalPrice: "₫230.000", commissionRate: "9%", sold: "3.9k", category: "Thực phẩm & Sức khỏe",
        affiliateLink: "#",
    },

    // ── Thể thao ─────────────────────────────────────────────────────────
    {
        id: "p039", name: "Thảm yoga TPE 6mm 2 lớp chống trơn trượt cao cấp", image: "https://placehold.co/300x300/eff6ff/2563eb?text=SP39",
        price: "₫185.000", originalPrice: "₫250.000", commissionRate: "11%", sold: "8.4k", category: "Thể thao",
        affiliateLink: "#",
    },
    {
        id: "p040", name: "Gậy golf Wilson Ultra Complete 13 gậy set đầy đủ", image: "https://placehold.co/300x300/eff6ff/2563eb?text=SP40",
        price: "₫3.500.000", originalPrice: "₫4.200.000", commissionRate: "6%", sold: "189", category: "Thể thao",
        affiliateLink: "#",
    },
    {
        id: "p041", name: "Vợt cầu lông Yonex Astrox 99 Pro carbon năng động", image: "https://placehold.co/300x300/eff6ff/2563eb?text=SP41",
        price: "₫2.100.000", originalPrice: "₫2.700.000", commissionRate: "7%", sold: "430", category: "Thể thao",
        affiliateLink: "#",
    },
    {
        id: "p042", name: "Giày chạy bộ Asics Gel-Nimbus 25 đệm khí cao cấp", image: "https://placehold.co/300x300/eff6ff/2563eb?text=SP42",
        price: "₫3.200.000", originalPrice: "₫4.000.000", commissionRate: "8%", sold: "760", category: "Thể thao",
        affiliateLink: "#",
    },
    {
        id: "p043", name: "Bộ tạ tay điều chỉnh Bowflex SelectTech 552 2-24kg", image: "https://placehold.co/300x300/eff6ff/2563eb?text=SP43",
        price: "₫4.800.000", originalPrice: "₫5.900.000", commissionRate: "7%", sold: "215", category: "Thể thao",
        affiliateLink: "#",
    },

    // ── Bách hóa online ───────────────────────────────────────────────────
    {
        id: "p044", name: "Nước giặt OMO Matic cửa trước 3.7kg thơm lâu", image: "https://placehold.co/300x300/fefce8/ca8a04?text=SP44",
        price: "₫145.000", originalPrice: "₫180.000", commissionRate: "5%", sold: "18k", category: "Bách hóa online",
        affiliateLink: "#",
    },
    {
        id: "p045", name: "Dầu gội Pantene Total Damage Care 650ml phục hồi tóc", image: "https://placehold.co/300x300/fefce8/ca8a04?text=SP45",
        price: "₫89.000", originalPrice: "₫115.000", commissionRate: "6%", sold: "22k", category: "Bách hóa online",
        affiliateLink: "#",
    },
    {
        id: "p046", name: "Kem đánh răng Colgate Total 12 Pro Gum 200g", image: "https://placehold.co/300x300/fefce8/ca8a04?text=SP46",
        price: "₫55.000", originalPrice: "₫70.000", commissionRate: "7%", sold: "35k", category: "Bách hóa online",
        affiliateLink: "#",
    },
    {
        id: "p047", name: "Nước rửa chén Sunlight trà xanh 1.35kg tiết kiệm", image: "https://placehold.co/300x300/fefce8/ca8a04?text=SP47",
        price: "₫65.000", originalPrice: "₫82.000", commissionRate: "5%", sold: "29k", category: "Bách hóa online",
        affiliateLink: "#",
    },
    {
        id: "p048", name: "Giấy vệ sinh Cellox 3 lớp 10 cuộn siêu mềm", image: "https://placehold.co/300x300/fefce8/ca8a04?text=SP48",
        price: "₫48.000", originalPrice: "₫60.000", commissionRate: "4%", sold: "41k", category: "Bách hóa online",
        affiliateLink: "#",
    },

    // ── Sách & Văn phòng phẩm ────────────────────────────────────────────
    {
        id: "p049", name: "Bút bi Pilot G2 07 mực xanh viết mượt chính hãng", image: "https://placehold.co/300x300/f5f3ff/7c3aed?text=SP49",
        price: "₫25.000", originalPrice: "₫32.000", commissionRate: "6%", sold: "48k", category: "Sách & Văn phòng phẩm",
        affiliateLink: "#",
    },
    {
        id: "p050", name: "Sổ tay bullet journal Leuchtturm1917 A5 dotted", image: "https://placehold.co/300x300/f5f3ff/7c3aed?text=SP50",
        price: "₫320.000", originalPrice: "₫390.000", commissionRate: "9%", sold: "2.1k", category: "Sách & Văn phòng phẩm",
        affiliateLink: "#",
    },
    {
        id: "p051", name: "Bộ màu nước Winsor & Newton Cotman 12 màu hộp thiếc", image: "https://placehold.co/300x300/f5f3ff/7c3aed?text=SP51",
        price: "₫180.000", originalPrice: "₫240.000", commissionRate: "8%", sold: "1.4k", category: "Sách & Văn phòng phẩm",
        affiliateLink: "#",
    },
    {
        id: "p052", name: "Máy tính khoa học Casio FX-580VN X giải phương trình", image: "https://placehold.co/300x300/f5f3ff/7c3aed?text=SP52",
        price: "₫290.000", originalPrice: "₫360.000", commissionRate: "7%", sold: "5.6k", category: "Sách & Văn phòng phẩm",
        affiliateLink: "#",
    },
    {
        id: "p053", name: "Hộp bút đựng văn phòng phẩm để bàn nhiều ngăn", image: "https://placehold.co/300x300/f5f3ff/7c3aed?text=SP53",
        price: "₫85.000", originalPrice: "₫110.000", commissionRate: "10%", sold: "7.8k", category: "Sách & Văn phòng phẩm",
        affiliateLink: "#",
    },
];

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
