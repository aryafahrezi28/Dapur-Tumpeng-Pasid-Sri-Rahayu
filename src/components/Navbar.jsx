import React, { useState, useEffect } from "react";

export default function Navbar({
  currentUser,
  cartCount,
  onOpenVerification,
  onOpenCart,
  onLogout,
}) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (isNavbarExpanded) {
      timer = requestAnimationFrame(() => setIsSlideVisible(true));
    } else {
      setIsSlideVisible(false);
    }
    return () => {
      if (typeof timer === "number") cancelAnimationFrame(timer);
    };
  }, [isNavbarExpanded]);

  const firstName = currentUser?.name ? currentUser.name.split(" ")[0] : "";
  const occasionGreeting = currentUser?.occasion
    ? `Selamat ${currentUser.occasion}!`
    : "Selamat Wisuda & Syukuran!";

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-3">
          {/* Left: Menu Toggle Button + Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsNavbarExpanded((prev) => !prev)}
              className={`px-3.5 py-2 rounded-full border border-charcoal/15 flex items-center gap-2 transition-all shadow-2xs text-xs font-semibold z-10 ${
                isNavbarExpanded
                  ? "bg-sage text-ivory"
                  : "bg-white hover:bg-sage hover:text-ivory text-sage"
              }`}
              aria-label="Buka atau Tutup Navigasi"
            >
              <i
                className={`fa-solid ${
                  isNavbarExpanded ? "fa-xmark" : "fa-bars"
                } text-sm`}
              ></i>
              <span className="hidden sm:inline">
                {isNavbarExpanded ? "Tutup" : "Menu"}
              </span>
            </button>

            {!isNavbarExpanded && (
              <a
                href="#beranda"
                className="flex items-center gap-2.5 group transition-all duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sage text-ivory flex items-center justify-center font-serif-editorial text-lg sm:text-xl font-bold shadow-xs group-hover:bg-gold transition-colors">
                  SR
                </div>
                <div className="hidden md:block">
                  <span className="font-serif-editorial text-base font-bold tracking-tight text-sage block leading-none">
                    Ibu Sri Rahayu
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                    Dapur Tumpeng &amp; Catering
                  </span>
                </div>
              </a>
            )}
          </div>

          {/* Center: Dynamic Greeting vs Sliding Nav Links */}
          <div className="relative flex-1 flex items-center justify-center h-12 overflow-hidden px-1">
            {!isNavbarExpanded ? (
              <div className="flex items-center justify-center gap-2 text-center transition-all duration-300 max-w-full">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0 hidden sm:inline-block"></span>
                {currentUser && currentUser.verified ? (
                  <p className="text-xs sm:text-sm font-medium text-charcoal truncate">
                    Halo,{" "}
                    <span className="font-serif-editorial font-bold text-sage">
                      Selamat Datang {firstName}!
                    </span>{" "}
                    <span className="hidden md:inline text-charcoal/70 text-xs ml-1">
                      — {occasionGreeting}
                    </span>
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm font-medium text-charcoal truncate">
                    Halo,{" "}
                    <span className="font-serif-editorial font-bold text-sage">
                      Selamat Datang Tamu!
                    </span>
                  </p>
                )}
              </div>
            ) : (
              <nav
                className={`nav-slide-panel ${
                  isSlideVisible ? "nav-slide-open" : "nav-slide-closed"
                } absolute inset-y-0 left-0 right-0 flex items-center justify-start sm:justify-center space-x-1 sm:space-x-2 md:space-x-5 text-xs sm:text-sm font-medium text-charcoal/90 overflow-x-auto py-1`}
              >
                <a
                  href="#beranda"
                  className="px-3 py-1.5 rounded-full hover:bg-cream hover:text-sage transition-colors whitespace-nowrap"
                >
                  Beranda
                </a>
                <a
                  href="#katalog"
                  className="px-3 py-1.5 rounded-full hover:bg-cream hover:text-sage transition-colors whitespace-nowrap"
                >
                  Katalog Paket
                </a>
                <a
                  href="#custom-tumpeng"
                  className="px-3 py-1.5 rounded-full hover:bg-cream hover:text-sage transition-colors whitespace-nowrap"
                >
                  Custom Tumpeng
                </a>
                <a
                  href="#cek-jadwal"
                  className="px-3 py-1.5 rounded-full hover:bg-cream hover:text-sage transition-colors whitespace-nowrap"
                >
                  Cek Jadwal
                </a>
                <a
                  href="#cara-pesan"
                  className="px-3 py-1.5 rounded-full hover:bg-cream hover:text-sage transition-colors whitespace-nowrap"
                >
                  Cara Pesan
                </a>
              </nav>
            )}
          </div>

          {/* Right: Masuk/Daftar & Keranjang */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {currentUser && currentUser.verified ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="px-3 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-1.5"
                  title="Akun WhatsApp Terverifikasi"
                >
                  <i className="fa-solid fa-circle-check text-emerald-600"></i>
                  <span className="hidden sm:inline">{firstName}</span>
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  className="p-2 rounded-full bg-cream hover:bg-red-50 text-charcoal/70 hover:text-red-700 text-xs transition-colors"
                  title="Keluar Akun"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onOpenVerification(false)}
                className="px-3.5 py-2 rounded-full bg-sage hover:bg-sage-light text-ivory text-xs font-semibold transition-all shadow-2xs flex items-center gap-1.5"
              >
                <i className="fa-brands fa-whatsapp text-sm text-gold-light"></i>
                <span>Masuk / Daftar</span>
              </button>
            )}

            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-cream hover:bg-sage-pale text-sage transition-colors"
              aria-label="Buka Keranjang dan Status Pesanan"
              title="Keranjang & Status Pesanan"
            >
              <i className="fa-solid fa-bag-shopping text-base"></i>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-ivory text-[11px] font-bold flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}