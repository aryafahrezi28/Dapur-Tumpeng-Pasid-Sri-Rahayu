import React, { useState, useEffect } from "react";
import { IBU_SRI_WA, formatRupiah } from "../data/cateringData";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  currentUser,
  eventDate,
  onChangeEventDate,
  activeOrder,
  onRequireVerification,
  onSubmitNewOrder,
  onSimulateCompleted,
  onOpenRatingModal,
}) {
  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [eventTime, setEventTime] = useState("11:00");
  const [deliveryMethod, setDeliveryMethod] = useState("Diantar Kurir");
  const [custAddress, setCustAddress] = useState("");
  const [paymentScheme, setPaymentScheme] = useState("dp");

  useEffect(() => {
    if (currentUser?.verified) {
      setCustName(currentUser.name);
      setCustPhone(currentUser.phone);
    }
  }, [currentUser]);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const payNow = paymentScheme === "dp" ? Math.round(subtotal * 0.5) : subtotal;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser || !currentUser.verified) {
      onRequireVerification();
      return;
    }

    const addressFinal =
      deliveryMethod === "Ambil Sendiri"
        ? "Ambil Sendiri di Dapur Ibu Sri Rahayu"
        : custAddress.trim() || "Ambil Sendiri di Dapur Ibu Sri Rahayu";

    const orderId = "TMP-" + Math.floor(1000 + Math.random() * 9000);
    const itemsFormatted = cart
      .map(
        (i) =>
          `${i.name} (x${i.qty})${
            i.id.startsWith("custom-") ? " [" + i.details + "]" : ""
          }`
      )
      .join("; ");

    const waNotifMessage =
      `Halo Dapur Tumpeng Ibu Sri Rahayu,%0A` +
      `Ada *PESANAN BARU* masuk dari website:%0A%0A` +
      `*Order ID:* ${orderId}%0A` +
      `*Nama Pemesan:* ${custName.trim()}%0A` +
      `*No. WhatsApp:* ${custPhone.trim()}%0A` +
      `*Daftar Menu:* ${itemsFormatted}%0A` +
      `*Tanggal & Jam Acara:* ${eventDate} pukul ${eventTime} WIB%0A` +
      `*Pengiriman:* ${deliveryMethod} (${addressFinal})%0A` +
      `*Total Pesanan:* ${formatRupiah(subtotal)}%0A` +
      `*Status Pembayaran:* ${
        paymentScheme === "dp"
          ? "DP 50% (" + formatRupiah(payNow) + ")"
          : "Lunas 100% (" + formatRupiah(payNow) + ")"
      }%0A%0A` +
      `Mohon konfirmasi jadwal dapurnya ya Bu. Terima kasih!`;

    const waUrl = `https://wa.me/${IBU_SRI_WA}?text=${waNotifMessage}`;

    onSubmitNewOrder({
      code: orderId,
      customerName: custName.trim(),
      customerPhone: custPhone.trim(),
      itemsSummary: itemsFormatted,
      eventDate,
      eventTime,
      method: deliveryMethod,
      address: addressFinal,
      total: subtotal,
      payNow,
      scheme: paymentScheme === "dp" ? "DP 50%" : "Lunas 100%",
      status: "Menunggu Konfirmasi WA",
      waUrl,
      reviewed: false,
    });
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-ivory shadow-2xl flex flex-col z-10">
        <div className="px-6 py-5 bg-sage text-ivory flex items-center justify-between">
          <div>
            <h3 className="font-serif-editorial text-xl font-bold">
              Keranjang, Checkout &amp; Status
            </h3>
            <p className="text-xs text-sage-muted">
              Pesanan otomatis terhubung ke WhatsApp Ibu Sri Rahayu
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* List Item Keranjang */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
              Rincian Menu Pilihan
            </h4>
            {cart.length === 0 ? (
              <div className="text-center py-8 bg-white rounded-2xl border border-charcoal/10">
                <i className="fa-solid fa-basket-shopping text-3xl text-charcoal/25 mb-2"></i>
                <p className="text-sm text-charcoal/65">
                  Keranjang belanja Anda saat ini kosong.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-white p-4 rounded-2xl border border-charcoal/10 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <h5 className="font-bold text-sm text-sage">
                        {item.name}
                      </h5>
                      <p className="text-xs text-charcoal/65 mt-0.5 line-clamp-2">
                        {item.details}
                      </p>
                      <p className="text-sm font-bold text-gold-dark mt-1.5">
                        {formatRupiah(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-cream rounded-full px-2 py-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(idx, -1)}
                        className="w-6 h-6 rounded-full bg-white text-charcoal text-xs font-bold shadow-2xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(idx, 1)}
                        className="w-6 h-6 rounded-full bg-sage text-ivory text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Checkout */}
          {cart.length > 0 && (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 pt-4 border-t border-charcoal/10"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif-editorial text-lg font-bold text-sage">
                  Detail Acara &amp; Pengiriman
                </h4>
                {currentUser?.verified && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1">
                    <i className="fa-solid fa-circle-check"></i> WA Terverifikasi
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                    Nama Pemesan *
                  </label>
                  <input
                    type="text"
                    required
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    placeholder="Nama lengkap"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                    Tanggal Acara *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => onChangeEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                    Jam Pengiriman *
                  </label>
                  <input
                    type="time"
                    required
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                  Metode Pengiriman *
                </label>
                <select
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                >
                  <option value="Diantar Kurir">
                    Diantar Kurir Khusus Catering
                  </option>
                  <option value="Ambil Sendiri">
                    Ambil Sendiri di Dapur Ibu Sri Rahayu
                  </option>
                </select>
              </div>

              {deliveryMethod !== "Ambil Sendiri" && (
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                    Alamat Lengkap Pengiriman *
                  </label>
                  <textarea
                    rows="2"
                    value={custAddress}
                    onChange={(e) => setCustAddress(e.target.value)}
                    placeholder="Nama jalan, nomor rumah/gedung, patokan lokasi..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
                  ></textarea>
                </div>
              )}

              {/* Skema Pembayaran */}
              <div className="bg-cream p-4 rounded-2xl space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-sage">
                  Skema Pembayaran
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="paymentScheme"
                    value="dp"
                    checked={paymentScheme === "dp"}
                    onChange={(e) => setPaymentScheme(e.target.value)}
                    className="mt-1 accent-sage"
                  />
                  <div>
                    <span className="font-semibold text-charcoal">
                      DP 50% (Pelanggan Baru)
                    </span>
                    <p className="text-xs text-charcoal/65">
                      Kunci jadwal dapur sekarang, pelunasan H-1 atau saat
                      pesanan tiba.
                    </p>
                  </div>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="paymentScheme"
                    value="full"
                    checked={paymentScheme === "full"}
                    onChange={(e) => setPaymentScheme(e.target.value)}
                    className="mt-1 accent-sage"
                  />
                  <div>
                    <span className="font-semibold text-charcoal">
                      Lunas 100%
                    </span>
                    <p className="text-xs text-charcoal/65">
                      Pembayaran penuh langsung via Transfer Bank BCA / Mandiri.
                    </p>
                  </div>
                </label>
              </div>

              {/* Ringkasan Harga */}
              <div className="bg-white p-4 rounded-2xl border border-charcoal/10 space-y-2 text-sm">
                <div className="flex justify-between text-charcoal/70">
                  <span>Total Harga Pesanan</span>
                  <span className="font-semibold">
                    {formatRupiah(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sage font-bold text-base pt-2 border-t border-charcoal/10">
                  <span>
                    {paymentScheme === "dp"
                      ? "Nominal DP (50%)"
                      : "Nominal Lunas (100%)"}
                  </span>
                  <span>{formatRupiah(payNow)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-sage hover:bg-sage-light text-ivory font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-base text-gold-light"></i>
                <span>Buat Pesanan &amp; Hubungkan ke WA Ibu Sri Rahayu</span>
              </button>
            </form>
          )}

          {/* Status Pesanan Terakhir Terintegrasi */}
          <div className="pt-5 border-t border-charcoal/10 space-y-3">
            {!activeOrder ? (
              <div className="bg-cream/60 p-4 rounded-2xl border border-charcoal/5 text-center">
                <p className="text-xs text-charcoal/65">
                  Ringkasan status konfirmasi pesanan Anda akan otomatis muncul
                  di sini setelah melakukan checkout.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                    Status Pesanan Terakhir
                  </h4>
                  <span className="text-[11px] font-mono font-bold text-charcoal/60">
                    {activeOrder.code}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-charcoal/10 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-sage">
                      {activeOrder.customerName}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        activeOrder.status === "Selesai"
                          ? "bg-sage-pale text-sage"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {activeOrder.status}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/80 leading-relaxed">
                    {activeOrder.itemsSummary}
                  </p>
                  <p className="text-xs text-charcoal/65">
                    <i className="fa-regular fa-calendar mr-1.5 text-gold"></i>
                    Jadwal: {activeOrder.eventDate} pukul{" "}
                    {activeOrder.eventTime} WIB
                  </p>
                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="text-charcoal/65">
                      Skema: <strong>{activeOrder.scheme}</strong>
                    </span>
                    <span className="font-bold text-sage text-sm">
                      {formatRupiah(activeOrder.total)}
                    </span>
                  </div>

                  {activeOrder.status !== "Selesai" ? (
                    <div className="pt-3 border-t border-charcoal/10 flex flex-col gap-2">
                      <a
                        href={activeOrder.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-ivory text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span>Kirim Ulang Notif ke WA Ibu Sri Rahayu</span>
                      </a>
                      <button
                        type="button"
                        onClick={onSimulateCompleted}
                        className="w-full py-2 px-4 rounded-full bg-cream hover:bg-sage-pale text-sage text-xs font-semibold transition-colors"
                      >
                        Simulasikan Pesanan Diterima / Selesai
                      </button>
                    </div>
                  ) : activeOrder.reviewed ? (
                    <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs text-sage font-semibold">
                      <span>
                        <i className="fa-solid fa-check-double mr-1"></i>Ulasan
                        telah tampil di beranda
                      </span>
                      <span className="text-charcoal/50">Selesai</span>
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenRatingModal(activeOrder.code)}
                        className="flex-1 py-2.5 px-4 rounded-full bg-gold-light hover:bg-gold text-gold-dark hover:text-ivory text-xs font-semibold transition-colors"
                      >
                        <i className="fa-regular fa-star mr-1"></i>Beri Ulasan
                        (Opsional)
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="py-2.5 px-4 rounded-full bg-cream hover:bg-charcoal/10 text-charcoal text-xs font-semibold"
                      >
                        Selesai
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}