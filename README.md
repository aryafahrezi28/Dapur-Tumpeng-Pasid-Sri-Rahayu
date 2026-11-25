# Dapur Tumpeng Ibu Sri Rahayu

Website Dapur Tumpeng Ibu Sri Rahayu merupakan implementasi antarmuka pengguna (Frontend) berbasis web menggunakan ReactJS untuk layanan katering dan nasi tumpeng autentik sejak tahun 2015. Proyek ini dibuat sebagai bagian dari tugas Frontend Development – Group Challenge – UI Pages Practice dari Celerates.


## Teknologi yang Digunakan

* **ReactJS** – Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.
* **Vite** – Module bundler dan build tool untuk menjalankan serta mengembangkan proyek React.
* **Tailwind CSS** – Framework CSS untuk mengatur styling dan tata letak responsif di berbagai ukuran layar.
* **React Router DOM** – Library untuk mengatur navigasi dan routing halaman.
* **Axios** – HTTP client untuk kebutuhan komunikasi jaringan/API.
* **Font Awesome & Google Fonts** – Library ikon dan tipografi (*Playfair Display* & *Plus Jakarta Sans*) untuk mendukung elemen visual antarmuka.

## Fitur didalam Website

### Navigasi Responsif & Sapaan Dinamis (`Navbar.jsx`)

Menampilkan identitas Dapur Tumpeng Ibu Sri Rahayu, tombol menu dengan animasi *slide* kiri-ke-kanan yang memuat tautan navigasi ke setiap bagian halaman (*Beranda*, *Katalog Paket*, *Custom Tumpeng*, *Cek Jadwal*, *Cara Pesan*), sapaan dinamis untuk tamu maupun pengguna terverifikasi, tombol *Masuk / Daftar*, serta tombol *Keranjang & Status Pesanan*.

### Hero & Keunggulan Dapur (`Hero.jsx`)

Menampilkan tajuk utama *"Cita Rasa Tumpeng Warisan untuk Setiap Syukuran"*, informasi layanan sejak 2015 (100% Halal & Segar), menu andalan, ringkasan statistik, serta 4 poin keunggulan dapur (*100% Halal & Higienis*, *Bahan Segar Harian*, *Pengiriman Tepat Waktu*, dan *Fleksibel Custom Lauk*).

### Katalog Paket Menu (`MenuCatalog.jsx`)

Menampilkan daftar paket menu siap pesan dengan filter kategori (*Semua*, *Tumpeng Kuning Spesial*, *Nasi Kotak Catering*, *Paket Syukuran*) beserta rincian isian, porsi, harga, dan tombol tambah ke keranjang menggunakan `.map()`.

### Rancang Custom Tumpeng (`CustomTumpeng.jsx`)

Menyediakan kalkulator interaktif untuk memilih bentuk sajian (*Tumpeng Kuning Tampah* atau *Nasi Kotak Catering*), mengatur jumlah porsi (5–50 porsi), memilih lauk pendamping, menentukan tingkat kepedasan sambal, dan menambahkan ucapan *topper* tumpeng lengkap dengan estimasi harga *real-time*.

### Kalender Ketersediaan Jadwal (`ScheduleCalendar.jsx`)

Menampilkan kalender interaktif bulanan dengan status *Tersedia*, *Terbatas*, dan *Penuh* untuk mengecek kuota dapur serta otomatis mengisi tanggal acara pada formulir *checkout*.

### Cara Pesan & Slider Testimoni (`HowToOrder.jsx` & `TestimonialsSlider.jsx`)

Menampilkan panduan 3 langkah mudah memesan serta *slider* ulasan pelanggan dengan tombol navigasi panah dan indikator *dots*.

### Verifikasi WhatsApp, Keranjang, Invoice & Ulasan (`AuthModal.jsx`, `CartDrawer.jsx`, `InvoiceAndRatingModals.jsx` & `Footer.jsx`)

Menyediakan verifikasi akun via *reverse deep-link* WhatsApp, *drawer* keranjang & *checkout* dengan skema *DP 50%* atau *Lunas 100%*, pengiriman notifikasi pesanan ke WhatsApp Ibu Sri Rahayu, modal *invoice*, modal ulasan opsional yang langsung memperbarui *slider* testimoni, serta *footer* 3-kolom informasi dan kontak.

## Struktur Folder

```text
dapur-tumpeng-sri-rahayu/
├── public/
├── screenshots/
│   ├── dapur-tumpeng-1.png
│   ├── dapur-tumpeng-2.png
│   └── dapur-tumpeng-3.png
├── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── assets/
│   ├── components/
│   │   ├── AuthModal.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CustomTumpeng.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowToOrder.jsx
│   │   ├── InvoiceAndRatingModals.jsx
│   │   ├── MenuCatalog.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScheduleCalendar.jsx
│   │   └── TestimonialsSlider.jsx
│   ├── data/
│   │   └── cateringData.js
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

```

## Cara Menjalankan Website

Ikuti langkah-langkah berikut untuk menjalankan aplikasi Frontend ini secara lokal di komputer:

Clone repository:

```bash
git clone URL_REPOSITORY

```

Masuk ke direktori proyek:

```bash
cd dapur-tumpeng-sri-rahayu

```

Install dependencies:

```bash
npm install

```

Jalankan website:

```bash
npm run dev

```

Buka alamat lokal yang muncul pada terminal, biasanya:

```text
http://localhost:5173

```

## Informasi Tugas

* **Program:** Celerates
* **Module:** Frontend Development
* **Task:** Group Challenge - UI Pages Practice

## Anggota Kelompok

| Name | Role |
| --- | --- |
| *(Ahmad Khoiri Putranto)* | *(Project Manager)* |
| *(Mohamad Arya Fahrezi)* | *(UI/UX Designer)* |
| *(Najwa Kherunnisa Suherman)* | *(UI/UX Designer)* |
| *(Andhika Pramudya)* | *(Coder)* |
| *(Evelin Ade Oktalia)* | *(Coder)* |
| *(Ivan Wirahadi permana)* | *(Coder)* |
