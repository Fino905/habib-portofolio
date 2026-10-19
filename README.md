<div align="center">

  # 💻 FINO.DEV — Interactive Developer Portfolio

  **High-Performance, Data-Driven & Modular Web Portfolio Platform**  
  *Built with Vanilla JavaScript (ES6+), HTML5 Canvas, CSS3 Glassmorphism, and EmailJS API*

  <p align="center">
    <a href="https://habib-portofolio-nine.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🌐_LIVE_WEBSITE-habib--portofolio--nine.vercel.app-2563EB?style=for-the-badge" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Architecture-Modular_Data--Driven-blue?style=for-the-badge" alt="Architecture" />
    <img src="https://img.shields.io/badge/Localization-Bilingual_(ID%20%2F%20EN)-green?style=for-the-badge" alt="Bilingual" />
    <img src="https://img.shields.io/badge/Integration-EmailJS_Realtime-orange?style=for-the-badge" alt="EmailJS" />
    <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge" alt="License" />
  </p>

</div>

---

## 📌 Ringkasan & Tujuan Website

Website ini berfungsi sebagai **pusat representasi profesional (*professional showcase hub*)** untuk mendemonstrasikan keahlian teknis rekayasa perangkat lunak, portofolio proyek teruji, dan saluran komunikasi langsung dengan calon klien atau perekrut.

Dirancang dengan arsitektur **Zero-Dependency Vanilla JavaScript**, website ini menghadirkan kecepatan muat maksimal (*instant load time*), transisi visual interaktif, sistem multi-bahasa instan, serta integrasi formulir kontak otomatis tanpa memerlukan backend server khusus.

---

## ⚙️ Fungsi & Fitur Utama Website

### 1. 🗂️ Modul Portofolio & Showcase Proyek Interaktif
* **Katalog Proyek Terstruktur**: Menampilkan daftar karya (Web Aplikasi, UI/UX Design Figma, dan Pemodelan 3D) lengkap dengan *preview card*, ringkasan teknologi, dan tautan akses langsung ke aplikasi/demo.
* **Filter & Routing Tampilan**: Memungkinkan pengunjung menelusuri detail proyek secara cepat dan responsif di berbagai resolusi layar.

### 2. 📬 Sistem Pengiriman Pesan Real-Time (Email Dispatcher)
* **Integrasi EmailJS API**: Pengunjung dapat mengirimkan pesan penawaran kerja, kolaborasi, atau pertanyaan langsung dari form kontak web, dan data langsung terkirim ke kotak masuk email pemilik web tanpa memerlukan server backend/SMTP terpisah.
* **Validasi Input Sisi Klien (*Client-Side Validation*)**: Memeriksa format alamat email yang valid, batas minimal panjang karakter nama dan isi pesan, serta memberikan notifikasi status (*Sending, Success, Error*) secara interaktif.

### 3. 🌐 Engine Multi-Bahasa Dinamis (Bilingual Switcher)
* **Bilingual On-The-Fly (ID ⇄ EN)**: Pengunjung dapat mengganti bahasa antarmuka secara instan antara Bahasa Indonesia dan Bahasa Inggris dengan sekali klik tanpa memuat ulang (*refresh*) halaman.
* **Data-Attribute Binding (`data-i18n`)**: Seluruh teks dinamis, placeholder formulir, dan metadata halaman terikat secara modular dengan kamus data terjemahan.

### 4. 🛠️ Visualisasi Stack Keahlian & Teknologi
* **Pengelompokan Keahlian Berdasarkan Kategori**: Membagi keahlian ke dalam domain kerja spesifik: *Frontend, Backend, Database, Programming Languages, Tools, Cloud Hosting,* dan *AI Engineering*.
* **Status Badges & Ikon Grafis**: Memberikan representasi visual yang jelas dan terstandarisasi untuk setiap alat kerja yang dikuasai.

### 5. 🎨 Personalisasi Tampilan & Aksesibilitas
* **Theme Mode Switcher (Dark / Light)**: Memberikan kebebasan bagi pengunjung memilih preferensi kontras visual (Mode Gelap atau Mode Terang) yang tersimpan otomatis di *Local Storage* peramban.
* **Audio Feedback Controller**: Dilengkapi tombol kontrol suara interaktif (*Mute / Unmute*) untuk memberikan respons audio ketika tombol antarmuka diklik.
* **Layar Pemuatan Dinamis (*Loading Tracker*)**: Indikator persentase pemuatan aset (*0% - 100%*) guna memastikan seluruh elemen kanvas dan skrip telah siap sebelum antarmuka ditampilkan.

### 6. 🌌 Engine Visual & Animasi Kanvas
* **Interaktif Canvas Particle System**: Menghasilkan partikel visual berbasis koordinat kanvas HTML5 yang bergerak mulus di latar belakang tanpa memberatkan penggunaan CPU/GPU.
* **Typewriter Effect Engine**: Animasi pengetikan otomatis yang menampilkan pergantian peran dan spesialisasi secara berulang di area beranda.

---

## 🏗️ Arsitektur Data Terpusat (`config.js`)

Salah satu fungsi paling penting dari sistem website ini adalah **arsitektur data terpusat**. Pengembang tidak perlu mengubah struktur kode HTML untuk memperbarui portofolio. Seluruh data dikendalikan melalui satu file konfigurasi:

```plaintext
java/config.js
 ├── defaults          -> Preferensi awal tema dan bahasa sistem
 ├── personal          -> Profil, bio, kontak, avatar, dan tautan sosial media
 ├── emailjs           -> Kunci API publik, service ID, dan template ID
 ├── skillsCategories  -> Daftar dan kategori teknologi yang dikuasai
 ├── projects          -> Daftar data proyek (nama, deskripsi, gambar, tautan)
 └── translations      -> Kamus teks antarmuka lengkap (Bahasa Indonesia & Inggris)
