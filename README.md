# FanimeList (FAL) 🍥

[![GitHub last commit](https://img.shields.io/github/last-commit/faidzabdl/FanimeList?style=flat-square)](https://github.com/faidzabdl/FanimeList/commits/main)

FanimeList (FAL) adalah sebuah web sederhana untuk tracking anime, terinspirasi dari MyAnimeList. Dibangun dengan Next.js dan menggunakan API Jikan untuk mendapatkan data anime.

## ✨ Fitur

- **Anime Populer** - Lihat daftar anime trending mingguan.
- **Detail Anime** - Informasi lengkap tentang anime (judul, sinopsis, rating, genre, dll).
- **Pencarian Anime** - Cari anime berdasarkan judul.
- **Responsive Design** - Tampilan yang ramah di semua perangkat.
- **Integrasi API** - Menggunakan Jikan API (Unofficial MyAnimeList API).

## 🛠 Teknologi

- [Next.js](https://nextjs.org/) - React Framework.
- [React](https://react.dev/) - Library JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Jikan API](https://jikan.moe/) - Unofficial MyAnimeList API.

## 🚀 Instalasi

1. **Clone repositori**
   ```bash
   git clone https://github.com/faidzabdl/FanimeList.git
   cd FanimeList

2. **Install dependencies
    ```bash
     npm install
      atau
     yarn install

3. **Setup environment variables (buat file .env.local)
    ```bash
    NEXT_PUBLIC_JIKAN_API=https://api.jikan.moe/v4/

  4. **Jalankan development server
      ```bash
      npm run dev
       atau
      yarn dev

  ## 📂 Struktur Projek
      
      ├── public/          # Assets static
      ├── app/             # Halaman utama
      │   ├── page.js      # Halaman beranda
      │   └── anime/       # Halaman detail anime
      ├── components/      # Komponen React
      ├── lib/             # Utility functions
      └── styles/          # Global CSS

 ## 🤝 Kontribusi
    Pull request dipersilakan! Untuk perubahan besar, buka issue terlebih dahulu.

 **Disclaimer**: Proyek ini dibuat untuk tujuan edukasi dan tidak berafiliasi dengan MyAnimeList. Data anime menggunakan API dari Jikan.moe   

    
   
