import React, { useState } from "react";
import { catalogProducts, formatRupiah } from "../data/cateringData";

const TABS = [
  { id: "all", label: "Semua" },
  { id: "tumpeng", label: "Tumpeng Kuning Spesial" },
  { id: "nasikotak", label: "Nasi Kotak Catering" },
  { id: "syukuran", label: "Paket Syukuran" },
];

export default function MenuCatalog({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? catalogProducts
      : catalogProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="katalog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Sajian Pilihan
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-sage mt-2">
            Katalog Paket Tumpeng &amp; Catering
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 mt-3">
            Pilih paket menu siap pesan yang telah kami kurasi untuk acara
            keluarga, wisuda, pengajian, maupun rapat kantor.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === tab.id
                  ? "bg-sage text-ivory"
                  : "bg-cream text-charcoal hover:bg-sage-pale"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-cream">
                  <img
                    src={product.image}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/600x400/2A362D/FAF9F6?text=${encodeURIComponent(
                        product.name
                      )}`;
                    }}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-xs text-sage text-xs font-bold shadow-2xs">
                    {product.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-sage/90 text-ivory text-xs font-medium">
                    {product.portions}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif-editorial text-xl font-bold text-sage">
                    {product.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {product.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-charcoal/75"
                      >
                        <i className="fa-solid fa-check text-[10px] text-gold"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-charcoal/5 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] text-charcoal/55 block">
                    Harga Paket
                  </span>
                  <span className="font-bold text-lg text-sage">
                    {formatRupiah(product.price)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart(product.id)}
                  className="px-4 py-2.5 rounded-full bg-sage hover:bg-sage-light text-ivory text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <i className="fa-solid fa-plus"></i>
                  <span>Tambah ke Keranjang</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}