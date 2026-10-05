# UTS Preparation Platform — Bahasa Indonesia & Pendidikan Agama Islam
### Politeknik Negeri Jakarta (PNJ)

Platform persiapan Ujian Tengah Semester (UTS) all-in-one dengan gaya **Minimalist Editorial & Neo-Brutalist**, mengintegrasikan dua mata kuliah wajib dalam satu aplikasi web responsif:
1. **Bahasa Indonesia** — Tema Merah Minimalis (`#DC2626`)
2. **Pendidikan Agama Islam (PAI)** — Tema Hijau Emerald & Emas Islami (`#065F46` / `#D97706`)

---

## 🌟 Fitur Utama & Kepatuhan Instruksi Dosen

### 1. Dual-Subject 1-Click Switcher
- Tombol peralihan cepat di bagian atas untuk beralih antara **Bahasa Indonesia** dan **Agama Islam**.
- Gaya tampilan, palet warna, tipografi, serta modul materi dan soal ujian berganti secara dinamis dan mulus.

### 2. Materi Perkuliahan Lengkap, Rangkuman Eksekutif, & Glosarium
- Disusun langsung dari file presentasi kelompok mahasiswa dan diktat dosen:
  - **Bahasa Indonesia:**
    - Modul 1: Kedudukan, Fungsi, & Ragam Bahasa Indonesia (Kelompok 1)
    - Modul 2: Ejaan Bahasa Indonesia (EYD Edisi V) & Tanda Baca (Kelompok 2)
    - Modul 3: Diksi (Pilihan Kata) dan Kalimat Efektif (Kelompok 3)
    - Modul 4: Paragraf: Pengertian, Syarat, Jenis, & Pola Pengembangan (Kelompok 4)
  - **Pendidikan Agama Islam:**
    - Modul 1: Hakikat Eksistensi Manusia dan Tanggung Jawabnya (Penciptaan, Fitrah, 'Abdullah & Khalifah)
    - Modul 2: Perkembangan IPTEKS dalam Islam (Ulul Albab, I'jaz 'Ilmi, Seni Islami)
    - Modul 3: Sistem Hukum Islam, HAM, dan Demokrasi (Hukum Taklifi, Maqashid Syari'ah, Piagam Madinah, Asy-Syura)
    - Modul 4: Sumber Ajaran Islam PAI (Al-Qur'an, Hadis/Sunnah, Ijtihad & Qiyas)
- Dilengkapi pencarian interaktif (*live search*) dan kartu kata kunci (*glosarium cepat*).

### 3. Simulasi Ujian Pilihan Ganda (30 Soal Realistis)
- **Standar Waktu UTS:** 1 soal = 2 menit (Total countdown timer 60 menit).
- **Teks Analisis Nyata:** Menguji kemampuan mencermati teks, diksi, efektivitas kalimat (kesepadanan, keparalelan, kehematan, kecermatan, kepaduan, kelogisan), penilaian EYD V, dan logika paragraf.
- **Review Pembahasan Mendalam Tanpa Keliru:** Menjelaskan secara rinci mengapa pilihan benar adalah BENAR dan mengapa pilihan salah adalah SALAH.
- **Navigator Lembar Jawaban (1–30):** Menampilkan status belum dijawab, sudah dijawab, ragu-ragu (flagged), serta koreksi warna hijau/merah setelah dikumpulkan.

### 4. Ujian Khusus: Praktik Menilai Kalimat Sesuai EYD V (10 Soal)
- 10 kalimat autentik yang sering rancu di kalangan mahasiswa vokasi.
- Tombol evaluasi interaktif `[✓ BENAR]` dan `[✗ SALAH]`.
- Dilengkapi kutipan pasal Kepmendikbudristek EYD Edisi V, pembahasan detail, dan teks rekonstruksi baku yang tepat.

### 5. Latihan 10 Soal Esai HOTS (Higher Order Thinking Skills)
- Disertai lembar kerja teks (*writing textarea*) bagi mahasiswa untuk menyusun argumen mandiri.
- Tombol buka kunci jawaban ideal yang menampilkan model jawaban standar mahasiswa PNJ dan tabel rubrik penilaian dosen dengan bobot poin persentase.

---

## 🚀 Cara Menjalankan Secara Lokal

1. Buka PowerShell atau terminal di direktori proyek:
   ```bash
   cd C:\Users\Pandu\.gemini\antigravity\scratch\uts-prep-platform
   ```
2. Jalankan server lokal:
   ```bash
   node server.js
   ```
3. Buka browser pada tautan:
   [http://localhost:3000](http://localhost:3000)
