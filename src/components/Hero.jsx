import React from "react";

export default function Hero() {
  return (
    <>
      <section
        id="beranda"
        className="relative pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-light border border-gold/25 text-gold-dark text-xs font-semibold tracking-wide uppercase">
                <i className="fa-solid fa-award"></i>
                <span>Melayani Sejak 2015 • 100% Halal &amp; Segar</span>
              </div>
              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-sage leading-[1.15]">
                Cita Rasa Tumpeng Warisan untuk Setiap Syukuran.
              </h1>
              <p className="text-base sm:text-lg text-charcoal/75 leading-relaxed max-w-xl">
                Diracik langsung dengan rempah pilihan oleh{" "}
                <strong>Ibu Sri Rahayu</strong>. Pesan nasi tumpeng dan nasi
                kotak catering secara praktis—atur kombinasi lauk sendiri, cek
                kapasitas dapur secara langsung, dan terhubung otomatis ke
                WhatsApp kami.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#katalog"
                  className="px-7 py-3.5 rounded-full bg-sage hover:bg-sage-light text-ivory font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Lihat Katalog Paket</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
                <a
                  href="#custom-tumpeng"
                  className="px-7 py-3.5 rounded-full bg-transparent border border-sage text-sage hover:bg-sage-pale font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
                >
                  <i className="fa-solid fa-sliders text-xs"></i>
                  <span>Rancang Custom Tumpeng</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-charcoal/10 max-w-md">
                <div>
                  <p className="font-serif-editorial text-2xl font-bold text-sage">
                    100%
                  </p>
                  <p className="text-xs text-charcoal/65 mt-0.5">
                    Bahan Halal &amp; Segar
                  </p>
                </div>
                <div>
                  <p className="font-serif-editorial text-2xl font-bold text-sage">
                    2.500+
                  </p>
                  <p className="text-xs text-charcoal/65 mt-0.5">
                    Acara Terlayani
                  </p>
                </div>
                <div>
                  <p className="font-serif-editorial text-2xl font-bold text-sage">
                    4.9/5
                  </p>
                  <p className="text-xs text-charcoal/65 mt-0.5">
                    Rating Pelanggan
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-cream border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/800x600/2A362D/FAF9F6?text=Dapur+Tumpeng+Ibu+Sri+Rahayu";
                  }}
                  alt="Sajian Nasi Tumpeng Kuning Spesial Dapur Ibu Sri Rahayu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 bg-ivory/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                      Menu Andalan Dapur
                    </span>
                    <p className="font-serif-editorial text-base sm:text-lg font-bold text-sage">
                      Tumpeng Kuning Komplit 10 Porsi
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-charcoal/60 block">
                      Harga Paket
                    </span>
                    <span className="font-bold text-sage text-base sm:text-lg">
                      Rp 325.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION BAR */}
      <section className="py-12 bg-cream/80 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-pale text-sage flex items-center justify-center shrink-0 text-lg">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <div>
                <h3 className="font-serif-editorial text-lg font-bold text-sage">
                  100% Halal &amp; Higienis
                </h3>
                <p className="text-sm text-charcoal/70 mt-1">
                  Seluruh bahan baku dan proses pengolahan terjamin kehalalan
                  serta kebersihannya.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-pale text-sage flex items-center justify-center shrink-0 text-lg">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
              <div>
                <h3 className="font-serif-editorial text-lg font-bold text-sage">
                  Bahan Segar Harian
                </h3>
                <p className="text-sm text-charcoal/70 mt-1">
                  Belanja bahan segar di pasar setiap subuh sesuai jadwal
                  pesanan hari tersebut.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-pale text-sage flex items-center justify-center shrink-0 text-lg">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div>
                <h3 className="font-serif-editorial text-lg font-bold text-sage">
                  Pengiriman Tepat Waktu
                </h3>
                <p className="text-sm text-charcoal/70 mt-1">
                  Diantar kurir khusus catering kami agar bentuk hiasan tumpeng
                  tetap rapi hingga lokasi.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-pale text-sage flex items-center justify-center shrink-0 text-lg">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <div>
                <h3 className="font-serif-editorial text-lg font-bold text-sage">
                  Fleksibel Custom Lauk
                </h3>
                <p className="text-sm text-charcoal/70 mt-1">
                  Bebas sesuaikan porsi, lauk pendamping, tingkat kepedasan, dan
                  kartu ucapan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}