import React, { useState } from "react";
import { SIDE_DISH_OPTIONS, formatRupiah } from "../data/cateringData";

export default function CustomTumpeng({ onAddCustomToCart, onToast }) {
  const [customType, setCustomType] = useState("Tumpeng Kuning");
  const [portions, setPortions] = useState(10);
  const [selectedSides, setSelectedSides] = useState(
    SIDE_DISH_OPTIONS.filter((s) => s.defaultChecked).map((s) => s.name)
  );
  const [spiceLevel, setSpiceLevel] = useState("Sedang");
  const [note, setNote] = useState("");

  const toggleSide = (name) => {
    setSelectedSides((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const basePricePerPortion = customType === "Tumpeng Kuning" ? 13000 : 11000;
  const sidePricePerPortion = SIDE_DISH_OPTIONS.filter((s) =>
    selectedSides.includes(s.name)
  ).reduce((sum, item) => sum + item.price, 0);

  const totalPerPortion = basePricePerPortion + sidePricePerPortion;
  const totalPrice = totalPerPortion * portions;

  const handleAdd = () => {
    if (selectedSides.length === 0) {
      onToast("Silakan pilih minimal 1 lauk pendamping terlebih dahulu.");
      return;
    }

    onAddCustomToCart({
      id: "custom-" + Date.now(),
      name: `Custom ${customType} (${portions} Porsi)`,
      details: `Lauk: ${selectedSides.join(", ")} • Sambal: ${spiceLevel}${
        note.trim() ? ` • Topper: "${note.trim()}"` : ""
      }`,
      price: totalPrice,
      qty: 1,
    });
  };

  return (
    <section id="custom-tumpeng" className="py-20 bg-sage text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Intro & Live Price Summary */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-ivory/10 text-gold-light text-xs font-semibold uppercase tracking-wider">
              Racik Sajian Mandiri
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-ivory leading-tight">
              Rancang Custom Tumpeng Sesuai Selera Anda
            </h2>
            <p className="text-sage-muted text-sm sm:text-base leading-relaxed">
              Sesuaikan jumlah porsi dengan tamu undangan Anda, pilih lauk
              pendamping favorit keluarga, atur tingkat kepedasan sambal, dan
              tambahkan ucapan spesial di atas tumpeng.
            </p>

            {/* Live Estimator Card */}
            <div className="bg-ivory text-charcoal rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                    Ringkasan Pesanan Custom
                  </span>
                  <h3 className="font-serif-editorial text-xl font-bold text-sage mt-0.5">
                    {customType} ({portions} Porsi)
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-sage-pale text-sage text-xs font-semibold">
                  {spiceLevel}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-charcoal/60 uppercase mb-2">
                  Lauk Pendamping Terpilih:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSides.length === 0 ? (
                    <span className="text-xs text-red-600 italic">
                      Pilih minimal 1 lauk pendamping
                    </span>
                  ) : (
                    selectedSides.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-cream text-charcoal text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {note.trim() && (
                <div className="bg-cream p-3 rounded-xl text-xs text-charcoal/85">
                  <span className="font-semibold text-sage">
                    Ucapan Topper Tumpeng:
                  </span>{" "}
                  "{note.trim()}"
                </div>
              )}

              <div className="pt-3 border-t border-charcoal/10 flex items-end justify-between">
                <div>
                  <span className="text-xs text-charcoal/60 block">
                    Total Harga Custom
                  </span>
                  <span className="font-serif-editorial text-3xl font-bold text-sage">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <span className="text-xs text-charcoal/60">
                  {formatRupiah(totalPerPortion)} / porsi
                </span>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-3.5 px-6 rounded-full bg-sage hover:bg-sage-light text-ivory font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-cart-plus"></i>
                <span>Masukkan Custom Tumpeng ke Keranjang</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Builder Controls */}
          <div className="lg:col-span-7 bg-ivory text-charcoal rounded-3xl p-6 sm:p-10 shadow-xl space-y-7">
            {/* Step 1: Jenis Sajian */}
            <div>
              <label className="block font-serif-editorial text-lg font-bold text-sage mb-3">
                1. Pilih Bentuk Sajian
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="customType"
                    value="Tumpeng Kuning"
                    checked={customType === "Tumpeng Kuning"}
                    onChange={(e) => setCustomType(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className="p-4 rounded-2xl border-2 border-charcoal/10 peer-checked:border-sage peer-checked:bg-sage-pale/50 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sage">
                        Tumpeng Kuning Tampah
                      </span>
                      <i className="fa-solid fa-mountain text-gold"></i>
                    </div>
                    <p className="text-xs text-charcoal/65">
                      Nasi kuning kerucut hias daun pisang &amp; garnish
                    </p>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="customType"
                    value="Nasi Kotak Catering"
                    checked={customType === "Nasi Kotak Catering"}
                    onChange={(e) => setCustomType(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className="p-4 rounded-2xl border-2 border-charcoal/10 peer-checked:border-sage peer-checked:bg-sage-pale/50 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sage">
                        Nasi Kotak Catering
                      </span>
                      <i className="fa-solid fa-box-open text-gold"></i>
                    </div>
                    <p className="text-xs text-charcoal/65">
                      Kemasan box eksklusif praktis untuk tamu
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 2: Jumlah Porsi */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label
                  htmlFor="portion-range"
                  className="font-serif-editorial text-lg font-bold text-sage"
                >
                  2. Atur Jumlah Porsi
                </label>
                <span className="px-4 py-1 rounded-full bg-sage text-ivory text-sm font-bold">
                  {portions} Porsi
                </span>
              </div>
              <input
                type="range"
                id="portion-range"
                min="5"
                max="50"
                step="5"
                value={portions}
                onChange={(e) => setPortions(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-cream rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-charcoal/60 mt-2">
                <span>5 Porsi</span>
                <span>15 Porsi</span>
                <span>30 Porsi</span>
                <span>50 Porsi</span>
              </div>
            </div>

            {/* Step 3: Checkboxes Lauk Pendamping */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-serif-editorial text-lg font-bold text-sage">
                  3. Pilih Lauk Pendamping
                </label>
                <span className="text-xs text-charcoal/60">
                  Sudah termasuk Nasi &amp; Lalapan
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIDE_DISH_OPTIONS.map((side) => (
                  <label
                    key={side.name}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-charcoal/10 hover:bg-cream/60 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedSides.includes(side.name)}
                        onChange={() => toggleSide(side.name)}
                        className="w-4 h-4 rounded accent-sage"
                      />
                      <span className="text-sm font-medium">{side.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gold">
                      {side.priceLabel}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 4: Tingkat Pedas & Kartu Ucapan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="spice-level"
                  className="block text-sm font-bold text-sage mb-2"
                >
                  Tingkat Kepedasan Sambal
                </label>
                <select
                  id="spice-level"
                  value={spiceLevel}
                  onChange={(e) => setSpiceLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-ivory text-sm focus:outline-none focus:border-sage"
                >
                  <option value="Tidak Pedas">Tidak Pedas</option>
                  <option value="Sedang">Sedang</option>
                  <option value="Pedas Mantap">Pedas Mantap</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="tumpeng-note"
                  className="block text-sm font-bold text-sage mb-2"
                >
                  Ucapan Topper Tumpeng (Opsional)
                </label>
                <input
                  type="text"
                  id="tumpeng-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Contoh: Selamat Wisuda Arya!"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-ivory text-sm focus:outline-none focus:border-sage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}