import React, { useState, useEffect } from "react";
import { formatRupiah } from "../data/cateringData";

export function InvoiceModal({ order, isOpen, onClose, onViewOrderStatus }) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/65 backdrop-blur-xs"
      ></div>
      <div className="relative bg-ivory rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl z-10 text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-sage-pale text-sage mx-auto flex items-center justify-center text-3xl">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            Pesanan Berhasil Dibuat
          </span>
          <h3 className="font-serif-editorial text-2xl font-bold text-sage mt-1">
            Terima Kasih, <span>{order.customerName}</span>!
          </h3>
          <p className="text-xs text-charcoal/70 mt-1">
            Order ID: <strong className="text-charcoal">{order.code}</strong>
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-4 text-left text-xs space-y-2 text-charcoal/85">
          <p>
            <strong>Menu:</strong> {order.itemsSummary}
          </p>
          <p>
            <strong>Jadwal Acara:</strong> {order.eventDate} pukul{" "}
            {order.eventTime} WIB
          </p>
          <p>
            <strong>Metode:</strong> {order.method} ({order.address})
          </p>
          <p>
            <strong>Total Pesanan:</strong> {formatRupiah(order.total)}
          </p>
          <p className="text-sage font-bold pt-1 border-t border-charcoal/10">
            <strong>Status Pembayaran:</strong> {order.scheme} (
            {formatRupiah(order.payNow)})
          </p>
        </div>

        <div className="bg-gold-light/70 border border-gold/25 rounded-xl p-3 text-xs text-charcoal/85">
          <p className="font-semibold text-sage mb-0.5">
            Rekening Transfer Dapur Ibu Sri Rahayu:
          </p>
          <p>
            Bank BCA <strong>123-456-7890</strong> a.n.{" "}
            <strong>Sri Rahayu</strong>
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-1">
          <a
            href={order.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-ivory text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Kirim Notifikasi Pesanan ke WA Ibu Sri Rahayu</span>
          </a>
          <button
            type="button"
            onClick={onViewOrderStatus}
            className="w-full py-3 px-4 rounded-full bg-cream hover:bg-sage-pale text-sage text-xs font-semibold"
          >
            Lihat Status Pesanan di Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export function RatingModal({
  isOpen,
  orderCode,
  defaultOccasion,
  onClose,
  onSubmitRating,
}) {
  const [stars, setStars] = useState(5);
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStars(5);
      setOccasion(defaultOccasion || "");
      setComment("");
    }
  }, [isOpen, defaultOccasion]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRating({
      stars,
      occasion: occasion.trim(),
      comment: comment.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/65 backdrop-blur-xs"
      ></div>
      <div className="relative bg-ivory rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl z-10 space-y-5">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Ulasan Pelanggan (Opsional)
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-sage mt-1">
              Bagikan Pengalaman Anda
            </h3>
            <p className="text-xs text-charcoal/70 mt-1">
              Order ID {orderCode}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream hover:bg-charcoal/10 flex items-center justify-center text-charcoal"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal/80 mb-2">
              Rating Bintang (1–5)
            </label>
            <div className="flex gap-2 text-2xl">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setStars(num)}
                  className={num <= stars ? "text-gold" : "text-charcoal/20"}
                >
                  <i className="fa-solid fa-star"></i>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal/80 mb-1">
              Momen Acara
            </label>
            <input
              type="text"
              required
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              placeholder="Misal: Syukuran Wisuda / Acara Keluarga"
              className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal/80 mb-1">
              Komentar &amp; Kesan Anda
            </label>
            <textarea
              rows="3"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Bagaimana rasa masakan dan ketepatan waktu pengirimannya?"
              className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
            ></textarea>
          </div>
          <div className="flex gap-2.5 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-full bg-sage hover:bg-sage-light text-ivory text-xs font-semibold shadow-md"
            >
              Kirim Ulasan ke Beranda
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-full border border-charcoal/20 hover:bg-cream text-xs font-semibold text-charcoal"
            >
              Tutup / Selesai
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}