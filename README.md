<div align="center">

  <!-- SPIDER-MAN ARTWORK DARI ASET WEBSITE ANDA -->
  <img src="https://habib-portofolio-nine.vercel.app/img/hero5.png" width="240" alt="Spider-Man - Habib Alfino" style="filter: drop-shadow(0 0 15px rgba(226, 54, 54, 0.6));" />

  # 🕷️ HABIB ALFINO — Spider-Man Interactive Developer Portfolio

  **High-Performance, Data-Driven & Modular Web Portfolio Platform**  
  *Built with Vanilla JavaScript (ES6+), HTML5 Canvas, CSS3 Glassmorphism, and EmailJS API*

  <p align="center">
    <a href="https://habib-portofolio-nine.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🌐_LIVE_WEBSITE-habib--portofolio--nine.vercel.app-E23636?style=for-the-badge" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Identity-Habib_Alfino_Febrianto-E23636?style=for-the-badge&logo=target" alt="Identity" />
    <img src="https://img.shields.io/badge/Edition-Spider--Man_Edition-000000?style=for-the-badge" alt="Spider-Man Edition" />
    <img src="https://img.shields.io/badge/Architecture-Modular_Data--Driven-2563EB?style=for-the-badge" alt="Architecture" />
    <img src="https://img.shields.io/badge/Localization-Bilingual_(ID%20%2F%20EN)-16A34A?style=for-the-badge" alt="Bilingual" />
    <img src="https://img.shields.io/badge/Integration-EmailJS_Realtime-EA580C?style=for-the-badge" alt="EmailJS" />
  </p>

</div>

---

## 📌 Ringkasan & Tujuan Website

Website ini merupakan **platform portofolio digital interaktif** milik **Habib Alfino Febrianto** yang berfungsi sebagai etalase profesional untuk memamerkan proyek pengembangan web, desain grafis/UI, dan keahlian rekayasa perangkat lunak.

Dibangun dengan arsitektur **Zero-Dependency Vanilla JavaScript (ES6+)**, website ini mengutamakan performa loading instan, transisi antarmuka dinamis, sistem dwibahasa (ID/EN) otomatis, serta integrasi formulir kontak yang terhubung langsung ke email pemilik tanpa memerlukan server backend tambahan.

---

## ⚙️ Fungsi & Fitur Utama Website

### 1. 🗂️ Modul Portofolio & Showcase Proyek
* **Katalog Karya Terstruktur**: Menampilkan daftar proyek terpilih (Web Aplikasi, UI/UX Design di Figma, dan Pemodelan 3D) lengkap dengan kartu pratinjau, deskripsi fungsi, dan tautan langsung ke demo/aplikasi.
* **Filter Navigasi Responsif**: Mempermudah pengunjung untuk melihat dokumentasi karya secara cepat baik dari desktop maupun smartphone.

### 2. 📬 Sistem Pengiriman Pesan Real-Time (Email Dispatcher)
* **Integrasi EmailJS API**: Pengunjung dapat mengirim pesan kolaborasi, penawaran proyek, atau pertanyaan langsung dari form kontak web. Data formulir langsung masuk ke email `finofebriantohabibal@gmail.com`.
* **Validasi Sisi Klien (*Client-Side Validation*)**: Memeriksa kelayakan input (nama, format email valid, batas minimal panjang pesan) disertai feedback status kirim (*Sending, Success, Error*).

### 3. 🌐 Engine Multi-Bahasa Dinamis (Bilingual Switcher)
* **Peralihan Bahasa Instan (ID ⇄ EN)**: Pengunjung dapat mengubah bahasa tampilan dari Bahasa Indonesia ke Bahasa Inggris (dan sebaliknya) secara *real-time* tanpa perlu reload halaman.
* **Binding Data `data-i18n`**: Seluruh teks antarmuka, tombol aksi, dan placeholder input terikat langsung dengan kamus data translasi.

### 4. 🛠️ Visualisasi Stack Keahlian & Teknologi
* **Pengelompokan Berbasis Kategori**: Menata keterampilan teknis ke dalam kategori terorganisir: *Frontend, Backend, Database, Programming Languages, Tools, Cloud Hosting,* dan *AI Workflows*.
* **Status Badges & Ikon Grafis**: Memberikan visualisasi yang jelas dan profesional terhadap teknologi yang dikuasai.

### 5. 🎨 Personalisasi Tampilan & Aksesibilitas
* **Theme Mode Switcher (Dark / Light)**: Pilihan tampilan mode gelap dan mode terang yang preferensinya tersimpan otomatis di *Local Storage* peramban pengunjung.
* **Audio Feedback Controller**: Dilengkapi tombol kontrol efek suara (*Mute / Unmute*) untuk interaktivitas klik elemen UI.
* **Preloader Persentase Dinamis**: Layar pemuatan awal (*0% - 100%*) dengan Spider Emblem SVG untuk memastikan semua aset dan skrip kanvas siap sebelum antarmuka dibuka.

### 6. 🌌 Engine Visual & Animasi Kanvas
* **Interactive Canvas Particles**: Partikel interaktif di latar belakang hero section yang diproses ringan menggunakan HTML5 Canvas API.
* **Typewriter Effect Engine**: Animasi teks mengetik otomatis yang menampilkan pergantian spesialisasi dan peran secara dinamis.

---

## 🏗️ Arsitektur Data Terpusat (`config.js`)

Seluruh data konten pada website ini dikelola secara terpusat melalui satu file `java/config.js` sehingga pengelolaan data proyek, kontak, maupun teks translasi tidak memerlukan perubahan struktur kode HTML:

```plaintext
java/config.js
 ├── defaults          -> Konfigurasi awal tema (dark/light) dan bahasa (id/en)
 ├── personal          -> Profil, bio, kontak, avatar, dan akun sosial media Habib Alfino
 ├── emailjs           -> Public Key, Service ID, dan Template ID untuk form kontak
 ├── skillsCategories  -> Daftar dan ikon teknologi yang dikuasai
 ├── projects          -> Daftar data proyek (judul, deskripsi, gambar, URL)
 └── translations      -> Kamus kosakata antarmuka (Bahasa Indonesia & English)

