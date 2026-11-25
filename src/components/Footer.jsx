import React from "react";
import { IBU_SRI_WA } from "../data/cateringData";

export default function Footer() {
  return (
    <footer className="bg-sage text-ivory pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-ivory/15">
          {/* Kolom 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-ivory text-sage flex items-center justify-center font-serif-editorial text-lg font-bold shrink-0">
                SR
              </div>
              <div>
                <span className="font-serif-editorial text-xl font-bold block leading-none text-ivory">
                  Dapur Tumpeng Ibu Sri Rahayu
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold-light mt-1 block">
                  Catering &amp; Nasi Tumpeng Autentik
                </span>
              </div>
            </div>
            <p className="text-sm text-sage-muted leading-relaxed">
              Menghadirkan kehangatan hidangan Nusantara sejak tahun 2015. Setiap
              tumpeng dan nasi kotak diracik dengan resep keluarga, bahan segar
              harian, dan ketulusan untuk menyempurnakan momen syukuran Anda.
            </p>
          </div>

          {/* Kolom 2: Informasi & Layanan */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-ivory mb-4">
              Informasi &amp; Layanan
            </h4>
            <ul className="space-y-3 text-sm text-sage-muted">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-gold shrink-0"></i>
                <span>
                  Jl. Melati Raya No. 24, Srengseng, Jakarta Barat (Tersedia di
                  Google Maps)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-clock text-gold shrink-0"></i>
                <span>Buka Setiap Hari: 06.00 – 20.00 WIB</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-calendar-check text-gold shrink-0"></i>
                <span>Pemesanan Tumpeng &amp; Catering minimal H-2 acara</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-truck-fast text-gold shrink-0"></i>
                <span>
                  Pengiriman Kurir Khusus Catering atau Ambil di Lokasi
                </span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Hubungi & Ikuti Kami */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-ivory mb-4">
              Hubungi &amp; Ikuti Kami
            </h4>
            <p className="text-sm text-sage-muted mb-4 leading-relaxed">
              Konsultasi menu acara atau konfirmasi pembayaran langsung
              terhubung dengan WhatsApp resmi Ibu Sri Rahayu.
            </p>
            <a
              href={`https://wa.me/${IBU_SRI_WA}?text=Halo%20Dapur%20Tumpeng%20Ibu%20Sri%20Rahayu,%20saya%20ingin%20bertanya%20seputar%20pemesanan%20catering.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-dark text-ivory text-xs font-semibold transition-colors mb-5"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>0812-3456-7890 (Ibu Sri Rahayu)</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#beranda"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                aria-label="Instagram Dapur Ibu Sri Rahayu"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#beranda"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                aria-label="TikTok Dapur Ibu Sri Rahayu"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href={`https://wa.me/${IBU_SRI_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                aria-label="WhatsApp Dapur Ibu Sri Rahayu"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-muted">
          <p>
            &copy; 2026 Dapur Tumpeng Ibu Sri Rahayu. Seluruh Hak Cipta
            Dilindungi.
          </p>
          <p>100% Halal • Dimasak Segar Sesuai Pesanan</p>
        </div>
      </div>
    </footer>
  );
}