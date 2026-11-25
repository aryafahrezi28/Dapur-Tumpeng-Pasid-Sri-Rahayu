import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2825] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <p className="font-serif text-5xl text-[#A38C6D]">404</p>
      <h1 className="font-serif text-2xl sm:text-3xl text-[#2A362D]">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-sm text-[#5C554E] max-w-md">
        Tautan yang Anda tuju tidak tersedia. Silakan kembali ke halaman utama
        Dapur Tumpeng Ibu Sri Rahayu.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl bg-[#2A362D] text-[#FAF9F6] text-sm font-semibold hover:bg-[#3E4F42] transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}