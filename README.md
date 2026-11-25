# Dapur Tumpeng Ibu Sri Rahayu — Frontend UI (React + Vite + Tailwind CSS v4)

Aplikasi *frontend* web untuk **Dapur Tumpeng Ibu Sri Rahayu** (Catering & Nasi Tumpeng Autentik sejak 2015), dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS v4** dengan desain editorial hangat serta integrasi alur pemesanan ke WhatsApp.

## Fitur Utama
* **Top Navbar Interaktif:** Tombol menu *slide* kiri-ke-kanan yang tetap terbuka saat navigasi diklik, sapaan dinamis tamu/pengguna terverifikasi, serta akses cepat ke verifikasi WhatsApp dan keranjang.
* **Hero & Keunggulan Dapur:** Informasi layanan katering sejak 2015, menu andalan, serta 4 poin keunggulan dapur.
* **Katalog Paket Menu:** Filter kategori (*Semua*, *Tumpeng Kuning Spesial*, *Nasi Kotak Catering*, *Paket Syukuran*) dan fitur tambah ke keranjang.
* **Rancang Custom Tumpeng:** Kalkulator interaktif untuk memilih bentuk sajian, jumlah porsi (5–50 porsi), lauk pendamping, tingkat kepedasan sambal, dan ucapan *topper* dengan estimasi harga *real-time*.
* **Kalender Ketersediaan Jadwal:** Kalender interaktif bulanan dengan status *Tersedia*, *Terbatas*, dan *Penuh* yang otomatis mengisi tanggal acara di *checkout*.
* **Slider Testimoni & 3 Langkah Pesan:** Navigasi *slider* ulasan pelanggan dan panduan singkat cara memesan.
* **Verifikasi WhatsApp, Keranjang, Invoice & Ulasan Opsional:** Alur verifikasi kode via *deep-link* WhatsApp, *drawer* keranjang & status pesanan, skema *DP 50%* / *Lunas 100%*, pengiriman notifikasi pesanan ke WhatsApp Ibu Sri Rahayu, serta modal ulasan opsional.

## Teknologi yang Digunakan
* **React** & **Vite**
* **Tailwind CSS v4** (`@tailwindcss/vite`)
* **React Router DOM** & **Axios**
* **Font Awesome** & **Google Fonts** (*Playfair Display* & *Plus Jakarta Sans*)

## Menjalankan Proyek Secara Lokal
1. Masuk ke folder proyek:
   ```bash
   cd dapur-tumpeng-sri-rahayu

   npm install

   npm run dev
