import React from "react";

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="py-16 bg-cream/70 border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            3 Langkah Mudah
          </span>
          <h2 className="font-serif-editorial text-3xl font-bold text-sage mt-1">
            Cara Memesan di Dapur Ibu Sri Rahayu
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ivory p-7 rounded-3xl border border-charcoal/5 shadow-2xs">
            <span className="font-serif-editorial text-3xl font-bold text-gold">
              01
            </span>
            <h4 className="font-bold text-sage text-base mt-2">
              Pilih Paket atau Custom Tumpeng
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed">
              Pilih paket menu siap saji di katalog atau racik kombinasi lauk
              tumpeng Anda sendiri dan kunci tanggal acara.
            </p>
          </div>
          <div className="bg-ivory p-7 rounded-3xl border border-charcoal/5 shadow-2xs">
            <span className="font-serif-editorial text-3xl font-bold text-gold">
              02
            </span>
            <h4 className="font-bold text-sage text-base mt-2">
              Verifikasi Akun &amp; Kirim Notif WA
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed">
              Verifikasi nomor WhatsApp Anda, pilih skema DP 50% atau Lunas, dan
              pesanan otomatis terhubung ke WA Ibu Sri Rahayu.
            </p>
          </div>
          <div className="bg-ivory p-7 rounded-3xl border border-charcoal/5 shadow-2xs">
            <span className="font-serif-editorial text-3xl font-bold text-gold">
              03
            </span>
            <h4 className="font-bold text-sage text-base mt-2">
              Sajian Dimasak Segar &amp; Tiba Tepat Waktu
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed">
              Hidangan diolah segar di hari-H dan dikirimkan oleh kurir khusus
              catering kami sesuai jam acara Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}