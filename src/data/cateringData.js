export const IBU_SRI_WA = "6281234567890";

export const catalogProducts = [
  {
    id: "pkg-1",
    category: "tumpeng",
    name: "Tumpeng Kuning Mini Keluarga",
    portions: "5 Porsi",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    badge: "Favorit Keluarga",
    items: [
      "Nasi Kuning Gurih",
      "Ayam Bakar Madu",
      "Tempe Orek Kering",
      "Perkedel Kentang",
      "Telur Balado & Sambal",
    ],
  },
  {
    id: "pkg-2",
    category: "tumpeng",
    name: "Tumpeng Kuning Komplit",
    portions: "10 Porsi",
    price: 325000,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    badge: "Terlaris",
    items: [
      "Nasi Kuning Spesial",
      "Ayam Bakar Madu",
      "Sambal Goreng Kentang Ati",
      "Perkedel Kentang",
      "Telur Balado & Urap Sayur",
    ],
  },
  {
    id: "pkg-3",
    category: "tumpeng",
    name: "Tumpeng Agung Syukuran",
    portions: "20 Porsi",
    price: 620000,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    badge: "Acara Besar",
    items: [
      "Nasi Kuning / Uduk",
      "Empal Gepuk & Ayam Bakar",
      "Udang Balado Spesial",
      "Sambal Goreng Kentang Ati",
      "Perkedel & Hiasan Garnish",
    ],
  },
  {
    id: "pkg-4",
    category: "nasikotak",
    name: "Nasi Kotak Hemat Pengajian",
    portions: "Min. 15 Box (Rp15.000/box)",
    price: 225000,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    badge: "Ekonomis",
    items: [
      "15 Box Nasi Putih",
      "Ayam Goreng Lengkuas",
      "Tempe Orek & Tahu Bacem",
      "Lalapan & Sambal Terasi",
    ],
  },
  {
    id: "pkg-5",
    category: "nasikotak",
    name: "Nasi Kotak Rapat Eksekutif",
    portions: "Min. 10 Box (Rp25.000/box)",
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    badge: "Rapat Kantor",
    items: [
      "10 Box Nasi Putih / Kuning",
      "Ayam Bakar Madu",
      "Sambal Goreng Kentang Ati",
      "Capcay Sayur & Kerupuk",
      "Buah Pisang & Air Mineral",
    ],
  },
  {
    id: "pkg-6",
    category: "syukuran",
    name: "Paket Nasi Liwet Tampah",
    portions: "12 Porsi",
    price: 360000,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    badge: "Khas Tradisional",
    items: [
      "Nasi Liwet Teri Medan",
      "Ayam Bakar Utuh Potong",
      "Udang Balado & Cumi Asin",
      "Tahu Tempe Goreng",
      "Lalapan Segar & Sambal Dadak",
    ],
  },
];

export const initialTestimonialsData = [
  {
    id: "rev-1",
    name: "Bapak Hendra Wijaya",
    occasion: "Acara Peresmian Kantor",
    stars: 5,
    comment:
      "Pesan tumpeng 15 porsi untuk syukuran kantor. Ayam bakar madunya empuk banget, bumbunya meresap, dan datang 30 menit sebelum acara dimulai. Rapi sekali!",
  },
  {
    id: "rev-2",
    name: "Ibu Ratna Sari",
    occasion: "Syukuran Ulang Tahun Keluarga",
    stars: 5,
    comment:
      "Suka banget karena bisa custom lauk dan request sambal yang tidak pedas untuk acara ulang tahun anak. Hiasan tumpeng Ibu Sri Rahayu cantik dan bersih.",
  },
  {
    id: "rev-3",
    name: "Ibu Hj. Nurhayati",
    occasion: "Koordinator Pengajian Wilayah",
    stars: 5,
    comment:
      "Sudah langganan nasi kotak Ibu Sri Rahayu sejak 2019 untuk pengajian rutin. Harga sangat bersahabat mulai 15 ribuan tapi porsinya mengenyangkan dan rasanya konsisten.",
  },
  {
    id: "rev-4",
    name: "Mas Dimas Anggara",
    occasion: "Syukuran Wisuda & Keluarga",
    stars: 5,
    comment:
      "Pesan paket nasi liwet tampah untuk kumpul syukuran wisuda. Porsinya melimpah, sambal dadaknya juara, dan konfirmasi pesanannya sangat cepat lewat WhatsApp.",
  },
  {
    id: "rev-5",
    name: "Keluarga Bpk. Rahmat",
    occasion: "Acara Lamaran",
    stars: 5,
    comment:
      "Tumpeng Agung 20 porsinya luar biasa mewah. Semua tamu keluarga memuji rasa empal gepuk dan udang baladonya. Pasti pesan lagi untuk acara berikutnya.",
  },
];

export const SIDE_DISH_OPTIONS = [
  { name: "Ayam Bakar Madu", price: 10000, priceLabel: "+Rp10rb/porsi", defaultChecked: true },
  { name: "Empal Gepuk", price: 12000, priceLabel: "+Rp12rb/porsi", defaultChecked: false },
  { name: "Sambal Goreng Kentang Ati", price: 5000, priceLabel: "+Rp5rb/porsi", defaultChecked: true },
  { name: "Perkedel Kentang", price: 3500, priceLabel: "+Rp3.5rb/porsi", defaultChecked: true },
  { name: "Udang Balado", price: 9000, priceLabel: "+Rp9rb/porsi", defaultChecked: false },
  { name: "Telur Balado", price: 4000, priceLabel: "+Rp4rb/porsi", defaultChecked: true },
];

export function formatRupiah(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}