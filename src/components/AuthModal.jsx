import React, { useState } from "react";
import { IBU_SRI_WA } from "../data/cateringData";

export default function AuthModal({ isOpen, onClose, onVerified, onToast }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [verifCode, setVerifCode] = useState("VERIF-SR8492");

  if (!isOpen) return null;

  const handleGenerateCode = (e) => {
    e.preventDefault();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setVerifCode(`VERIF-SR${randomDigits}`);
    setStep(2);
  };

  const handleComplete = () => {
    onVerified({
      name: name.trim(),
      phone: phone.trim(),
      occasion: occasion.trim(),
      verified: true,
    });
    setStep(1);
  };

  const waMessage = `Halo Dapur Tumpeng Ibu Sri Rahayu,%0ASaya ingin memverifikasi akun pelanggan saya:%0A*Nama:* ${name.trim()}%0A*No. WhatsApp:* ${phone.trim()}%0A*Kode Verifikasi:* ${verifCode}`;

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
              Verifikasi Akun Pelanggan
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-sage mt-1">
              Masuk / Daftar via WhatsApp
            </h3>
            <p className="text-xs text-charcoal/70 mt-1">
              Pastikan nomor WhatsApp Anda aktif agar riwayat pesanan dan
              konfirmasi jadwal terhubung langsung.
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

        {step === 1 ? (
          <form onSubmit={handleGenerateCode} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                Nama Lengkap Anda *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Arya Pratama"
                className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                Nomor WhatsApp Aktif *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{9,15}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
              />
              <p className="text-[11px] text-charcoal/55 mt-1">
                Gunakan nomor WhatsApp pribadi yang dapat dihubungi kurir.
              </p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal/80 mb-1">
                Momen Acara Anda (Opsional)
              </label>
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="Misal: Wisuda & Syukuran, Ulang Tahun"
                className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white text-sm focus:outline-none focus:border-sage"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-sage hover:bg-sage-light text-ivory font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Lanjut ke Verifikasi WhatsApp</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-cream p-4 rounded-2xl border border-charcoal/10 text-center space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                Kode Verifikasi Unik Anda
              </span>
              <div className="font-mono text-2xl font-bold tracking-widest text-sage bg-white py-2.5 px-4 rounded-xl border border-dashed border-sage/40 select-all">
                {verifCode}
              </div>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Kirimkan kode di atas ke WhatsApp{" "}
                <strong>Ibu Sri Rahayu</strong> dengan menekan tombol hijau di
                bawah ini untuk membuktikan nomor Anda aktif.
              </p>
            </div>

            <a
              href={`https://wa.me/${IBU_SRI_WA}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                onToast("Membuka WhatsApp untuk mengirim kode verifikasi...")
              }
              className="w-full py-3.5 px-5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-ivory font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Kirim Kode Verifikasi ke WA Ibu Sri Rahayu</span>
            </a>

            <button
              type="button"
              onClick={handleComplete}
              className="w-full py-3 px-5 rounded-full bg-sage hover:bg-sage-light text-ivory font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-circle-check text-gold-light"></i>
              <span>Saya Sudah Mengirim Pesan WA (Konfirmasi)</span>
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-xs text-charcoal/60 hover:text-sage underline"
            >
              Ubah Nama atau Nomor WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}