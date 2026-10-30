# 📁 Dokumentasi Struktur Folder Proyek — RBP Portfolio

Dokumentasi komprehensif mengenai arsitektur direktori, tata letak file, dan alur modul dari proyek portofolio personal **Sultan Syarif Al**.

---

## 🛠️ Ringkasan Teknologi Utama (Tech Stack)

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling & Desain:** [Tailwind CSS v4](https://tailwindcss.com/), Apple iOS 26 Pro Liquid Glass & Radiant Blue Obsidian
* **Animasi:** [Motion (Framer Motion v12)](https://motion.dev/)
* **Background Shaders:** Custom WebGL GLSL Flow Shader (Radiant Blue / Cyan)
* **Internasionalisasi (i18n):** Client React Context (`useLanguage` ID/EN)
* **Manajemen Paket:** npm / pnpm

---

## 🌳 Diagram Pohon Direktori (Directory Tree)

```text
rbp-portfolio/
├── 📁 app/                           # Next.js App Router (Halaman & Konfigurasi Global)
│   ├── 📁 about/                     # Rute: /about
│   │   └── page.tsx                  # Halaman Biografi, Hobi, Pengalaman, & Pendidikan
│   ├── 📁 projects/                  # Rute: /projects
│   │   └── page.tsx                  # Halaman Showcase Proyek & Arsip
│   ├── 📁 skills/                    # Rute: /skills
│   │   └── page.tsx                  # Halaman Toolkit, What I Do, & Sertifikasi
│   ├── apple-icon.svg                # Icon Apple Touch Device
│   ├── favicon.ico                   # Favicon Browser
│   ├── globals.css                   # Tailwind CSS v4, Variabel Tema, & Keyframes
│   ├── icon.svg                      # Web Favicon SVG
│   ├── layout.tsx                    # Root Layout (Navigasi, Backdrop, Providers)
│   ├── page.tsx                      # Halaman Utama (Homepage / Hero & Kontak)
│   ├── robots.ts                     # Konfigurasi Mesin Pencari (SEO)
│   └── sitemap.ts                    # Generator Peta Situs Otomatis
│
├── 📁 components/                    # Komponen Antarmuka Pengguna (UI Components)
│   ├── 📁 about/                     # Komponen Khusus Halaman About
│   │   ├── about-bio.tsx             # Kartu Kaca Liquid Glass Riwayat & Fokus
│   │   ├── about-hero.tsx            # Header Pembuka Halaman About
│   │   ├── education.tsx             # Linimasa Riwayat Pendidikan
│   │   ├── experience.tsx            # Linimasa Pengalaman Kerja & Organisasi (AVRO)
│   │   ├── polaroid-strip.tsx        # Galeri Foto Polaroid Interaktif
│   │   ├── skills.tsx                # Ringkasan Keahlian Khusus Halaman About
│   │   └── stack.tsx                 # iOS 26 Smart Stack Hobi (3D Physical Card Drag)
│   │
│   ├── 📁 contact/                   # Komponen Formulir & Tombol Kontak
│   │   ├── contact-button.tsx        # Tombol Kontak Cepat (Direct CTA)
│   │   ├── contact-card.tsx          # Kartu Kontak Kaca dengan Info Lengkap
│   │   └── contact-card-ctas.tsx     # Tombol Salin Email, LinkedIn, & WhatsApp
│   │
│   ├── 📁 hero/                      # Komponen Header Beranda (Homepage)
│   │   ├── hero.tsx                  # Section Utama Beranda & Rotating Roles
│   │   ├── hero-ctas.tsx             # Tombol Tindakan Cepat (Resume, Project, Chat)
│   │   └── portrait-morph.tsx        # Efek Transisi Foto Sultan (Hover Wave)
│   │
│   ├── 📁 layout/                    # Kerangka & Pembungkus Halaman Global
│   │   ├── nav.tsx                   # Navbar Mengambang (Floating Glass Bar)
│   │   ├── page-backdrop.tsx         # Layer Latar Belakang & Shader Gelombang
│   │   ├── providers.tsx             # Pembungkus Global (ThemeProvider, LanguageProvider)
│   │   ├── skip-to-content.tsx       # Tombol Aksesibilitas Pembaca Layar
│   │   └── smooth-scroll.tsx         # Utilitas Pengguliran Halus (Lenis / CSS Scroll)
│   │
│   ├── 📁 projects/                  # Komponen Portofolio Proyek
│   │   ├── projects.tsx              # Sticky Stacking Cards Showcase (Apple Liquid Glass)
│   │   └── projects-header.tsx       # Header & Statistik Ringkas Proyek
│   │
│   ├── 📁 shaders/                   # Render Grafis Interaktif (WebGL / GLSL)
│   │   └── shader-flow.tsx           # Animasi Gelombang Kuantum Biru/Cyan Halus
│   │
│   ├── 📁 skills/                    # Komponen Halaman Keahlian (/skills)
│   │   ├── certificates-section.tsx  # Vault Sertifikat & Dual-Pane PDF Inspector
│   │   ├── skills-grid.tsx           # Grid Lengkap Seluruh Kategori Teknologi
│   │   ├── skills-hero.tsx           # Header Pembuka Halaman Skills
│   │   ├── skills-stack-playground.tsx# Area Bermain Fisika Interaktif (Matter.js)
│   │   ├── skills-toolkit-marquee.tsx# Marquee Dua Baris Berjalan Berlawanan Arah
│   │   └── what-i-do.tsx             # Split Layout Sticky Kiri (Cyber-Avionics GCS)
│   │
│   └── 📁 ui/                        # Primitif Desain & Dekorasi Mikro
│       ├── dotted-pattern.tsx        # Pola Titik-Titik Halus Latar Belakang
│       └── motion-primitives.tsx     # Efek Teks Masuk, Transisi Blur, & Stagger
│
├── 📁 data/                          # Pusat Data Statis (Single Source of Truth)
│   └── portfolio.ts                  # Seluruh Data Diri, Proyek, Pengalaman, & Sertifikat
│
├── 📁 lib/                           # Utilitas Logika & Konfigurasi Aplikasi
│   ├── config.ts                     # Konfigurasi Umum & URL Situs
│   ├── language-context.tsx          # Sistem Alih Bahasa Real-Time (Indonesia / English)
│   ├── metadata.ts                   # Generator Metadata Dinamis untuk OpenGraph & Twitter
│   └── motion.tsx                    # Preset Kurva Easing & Durasi Animasi
│
├── 📁 public/                        # Berkas Aset Statis Publik
│   ├── 📁 certificates/              # Arsip Dokumen & Cuplikan Sertifikat
│   │   ├── 📄 CERTIFICATE-20260907-JRPFASI.pdf
│   │   ├── 📄 SERTIF AVRO SLTN.pdf
│   │   ├── 📄 laravel-11-filament-...pdf
│   │   ├── 📄 UC-8e419c6d-3b6c-...pdf
│   │   ├── 🖼️ cert-fasi-drone.png    # Thumbnail Resolusi Tinggi Lisensi FASI
│   │   ├── 🖼️ cert-avro-vtol.png     # Thumbnail Tim Inti AVRO Polinema
│   │   ├── 🖼️ cert-laravel-filament.png # Thumbnail Kelas Laravel 11 BWA
│   │   └── 🖼️ cert-udemy-python.png   # Thumbnail Bootcamp Python Udemy
│   ├── 🖼️ sultan.jpg                 # Foto Profil Utama
│   ├── 🖼️ sultan_wave.jpg            # Foto Profil Mode Sapaan (Hover Wave)
│   ├── 🖼️ site.webmanifest           # Manifest PWA / Web App
│   └── 🖼️ icons & vectors            # Aset Ikon Sosial Media & Pihak Ketiga
│
├── 📄 .prettierrc                    # Aturan Format Kode Otomatis
├── 📄 DESAIN_SYSTEM_IOS26.md         # Dokumentasi Bahasa Desain Apple Liquid Glass
├── 📄 eslint.config.mjs              # Aturan Linter Kode JavaScript / TypeScript
├── 📄 next.config.ts                 # Konfigurasi Inti Next.js
├── 📄 package.json                   # Daftar Dependensi & Perintah Script
├── 📄 STRUKTUR_FOLDER.md             # Dokumen Ini (Struktur & Arsitektur Direktori)
└── 📄 tsconfig.json                  # Konfigurasi Kompiler TypeScript
```

---

## 🔍 Penjelasan Fungsi Tiap Folder Utama

### 1. `app/` (Next.js App Router)
Menangani routing berbasis sistem folder (*file-system routing*):
* **`app/page.tsx`**: Rute `/` (Beranda) yang menampilkan identitas Sultan, peran yang berotasi (*rotating role badge*), dan jalur kontak cepat.
* **`app/about/page.tsx`**: Rute `/about` yang memuat biografi mendalam, tumpukan 3D hobi interaktif (*Smart Stack iOS 26*), linimasa edukasi di Polinema, serta rekam jejak riset di AVRO.
* **`app/projects/page.tsx`**: Rute `/projects` untuk menampilkan karya komputasi, web full-stack, mobile, hingga sistem GCS.
* **`app/skills/page.tsx`**: Rute `/skills` yang berisi Marquee Dua Baris Toolkit, Matter.js Physics Stack Playground, modul **What I Do** (Split Layout Sticky Cyber-Avionics), dan Vault Sertifikasi resmi.
* **`app/globals.css`**: Basis styling menggunakan Tailwind CSS v4. Memuat variabel warna tema (`--background`, `--foreground`, `--ring`), aturan *backdrop blur*, serta keyframes kustom untuk efek marquee.

---

### 2. `components/` (Komponen Antarmuka)
Dipecah ke dalam modul domain spesifik agar kode tetap modular dan mudah dirawat:
* **`components/about/stack.tsx`**: Mengadopsi mekanisme *Apple iOS 26 Smart Stack*, di mana 5 kartu hobi (Coding, AVRO Drone, Gaming, AI/ML, dan Sepak Bola) dapat digeser dengan drag fisika 3D dan berpindah secara estetik ke tumpukan paling belakang.
* **`components/skills/what-i-do.tsx`**: Mengusung konsep **Split Layout Sticky Kiri** bergaya konsol workstation telemetri AVRO GCS. Kolom kiri menempel saat di-scroll, lengkap dengan *Interactive Module Selector* dan *Telemetry Bar*.
* **`components/skills/certificates-section.tsx`**: Mengusung konsep **Apple Liquid Glass Credential Vault**. Kartu menampilkan cuplikan resolusi tinggi dokumen asli, dan saat diklik membuka **Dual-Pane Inspector Modal** untuk melihat detail kredensial dan membuka berkas PDF asli.
* **`components/shaders/shader-flow.tsx`**: Canvas WebGL kustom yang merender gelombang cairan biru obsidian dinamis tanpa membebani performa browser.

---

### 3. `data/portfolio.ts` (Pusat Data / Single Source of Truth)
Seluruh konten teks, riwayat, proyek, statistik, dan sertifikat tersimpan dalam file ini.
* Mendukung tipe data `Localized<T>` (objek `{ id: string, en: string }`) sehingga seluruh konten dapat langsung diterjemahkan secara konsisten.
* Setiap penambahan sertifikat, proyek, atau riwayat baru cukup dilakukan pada file ini tanpa perlu membongkar struktur komponen UI.

---

### 4. `lib/` (Pustaka Logika & Utilitas)
* **`lib/language-context.tsx`**: Menyediakan `LanguageContext` dan hook `useLanguage()` untuk alih bahasa instan (Bahasa Indonesia 🇮🇩 / English 🇬🇧) di seluruh website.
* **`lib/metadata.ts`**: Menyusun *meta tags*, judul dinamis, deskripsi SEO, dan kartu OpenGraph untuk media sosial.

---

### 5. `public/` (Aset Publik & Media)
* **`public/certificates/`**: Berisi file PDF asli dari sertifikasi yang dimiliki Sultan (FASI Drone Pilot, AVRO Polinema VTOL, BuildWithAngga Laravel, dan Udemy Python), serta file render PNG beresolusi tinggi untuk thumbnail preview.
* Berkas di folder ini dapat diakses langsung oleh browser melalui URL `/certificates/[nama-file]`.

---

## 🚀 Panduan Memperbarui Konten

### Menambah Sertifikat Baru
1. Letakkan berkas PDF sertifikat di folder `public/certificates/`.
2. Hasilkan atau letakkan gambar thumbnail `.png` dari halaman depan sertifikat ke folder `public/certificates/`.
3. Buka `data/portfolio.ts`, lalu tambahkan entitas baru ke dalam array `certificates`:
   ```typescript
   {
     id: "cert-nama-unik",
     title: { id: "Nama Sertifikat (ID)", en: "Certificate Name (EN)" },
     issuer: "Nama Lembaga Penerbit",
     date: "Tahun / Tanggal",
     category: "aviation" | "software",
     badge: "Label Badge",
     credentialId: "NOMOR-KREDENSIAL",
     pdfUrl: "/certificates/nama-file.pdf",
     imageUrl: "/certificates/nama-thumbnail.png",
     metric: "Skor atau Durasi Jam",
     description: { id: "Deskripsi bahasa Indonesia", en: "Description in English" },
     skills: ["Skill 1", "Skill 2"]
   }
   ```
4. Simpan, halaman `/skills` akan otomatis merender kartu sertifikat baru secara rapi!

---

*Dokumen ini dibuat otomatis sebagai panduan arsitektur pengembangan portofolio Sultan Syarif Al.*
