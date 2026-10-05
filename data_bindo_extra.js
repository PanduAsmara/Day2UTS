const trueFalseQuestions = [
  {
    id: 1,
    sentence: "Acara pelantikan pengurus BEM dihadiri oleh dekan, para ketua jurusan, dan staf ahli fakultas.",
    isCorrect: true,
    rule: "EYD V Bagian I Huruf A (Huruf Kapital) & Bagian IV Huruf B (Tanda Koma).",
    explanation: "BENAR. Kata 'dekan' dan 'ketua jurusan' ditulis dengan huruf kecil karena TIDAK diikuti oleh nama orang yang menyandang jabatan tersebut. Tanda koma sebelum kata 'dan' pada rincian tiga unsur atau lebih ('...dekan, para ketua jurusan, dan staf ahli...') digunakan secara tepat.",
    correction: "Kalimat sudah sesuai EYD Edisi V."
  },
  {
    id: 2,
    sentence: "Surat permohonan izin operasional laboratorium ditanda tangani oleh Direktur Politeknik Negeri Jakarta.",
    isCorrect: false,
    rule: "EYD V Bagian II Huruf D (Gabungan Kata Berimbuhan).",
    explanation: "SALAH. Kata 'ditanda tangani' ditulis salah. Karena bentuk dasar 'tanda tangan' mendapat awalan sekaligus akhiran (konfiks 'di-...-i'), maka gabungan kata tersebut wajib ditulis serangkai menjadi 'ditandatangani'. Kata 'Direktur Politeknik Negeri Jakarta' benar ditulis kapital karena diikuti nama lembaga resmi.",
    correction: "Surat permohonan izin operasional laboratorium ditandatangani oleh Direktur Politeknik Negeri Jakarta."
  },
  {
    id: 3,
    sentence: "Semua peserta seminar di wajibkan melakukan registrasi ulang di lantai dua gedung rektorat.",
    isCorrect: false,
    rule: "EYD V Bagian II Huruf E (Kata Depan vs Awalan di-).",
    explanation: "SALAH. Penulisan 'di wajibkan' keliru. Partikel 'di-' pada 'diwajibkan' adalah awalan (prefiks) pembentuk verba pasif sehingga WAJIB DIRANGKAI menjadi 'diwajibkan'. Sebaliknya, penulisan 'di lantai dua' sudah tepat dipisah karena 'di' merupakan preposisi (kata depan) penunjuk tempat.",
    correction: "Semua peserta seminar diwajibkan melakukan registrasi ulang di lantai dua gedung rektorat."
  },
  {
    id: 4,
    sentence: "Sebelum mengunduh berkas lamaran, pelamar harus men-download formulir pendaftaran dari situs resmi kementerian.",
    isCorrect: false,
    rule: "EYD V Bagian I Huruf B (Huruf Miring) & Bagian IV Huruf E (Tanda Hubung).",
    explanation: "SALAH. Kata asing 'download' yang dirangkai dengan awalan bahasa Indonesia 'men-' harus dirangkaikan dengan tanda hubung (-) DAN kata asingnya wajib dicetak miring: 'men-*download*'. Selain itu, dalam kalimat tersebut sudah ada padanan bahasa Indonesianya yaitu 'mengunduh', sehingga terjadi kerancuan penggunaan istilah.",
    correction: "Sebelum mengunduh berkas lamaran, pelamar harus mengunduh formulir pendaftaran dari situs resmi kementerian (atau: men-download jika belum diserap)."
  },
  {
    id: 5,
    sentence: "Kita memerlukan alat tulis kantor, yaitu: pensil 2B, penghapus karet, dan kertas HVS ukuran A4.",
    isCorrect: false,
    rule: "EYD V Bagian IV Huruf C (Tanda Titik Dua).",
    explanation: "SALAH. Tanda titik dua (:) TIDAK boleh dipakai jika sebelum rincian sudah ada kata penghubung penjelasan seperti 'yaitu', 'yakni', atau 'adalah'. Cukup gunakan tanda koma sebelum kata 'yaitu'.",
    correction: "Kita memerlukan alat tulis kantor, yaitu pensil 2B, penghapus karet, dan kertas HVS ukuran A4."
  },
  {
    id: 6,
    sentence: "Program studi kami telah memperbanyak mata kuliah berbasis kerja sama industri demi meningkatkan serapan lulusan.",
    isCorrect: true,
    rule: "EYD V Bagian II Huruf D (Gabungan Kata).",
    explanation: "BENAR. Gabungan kata 'kerja sama' yang berdiri sendiri tanpa imbuhan ditulis TERPISAH dengan spasi (bukan 'kerjasama'). Kalimat ini juga efektif dan lugas.",
    correction: "Kalimat sudah sesuai EYD Edisi V."
  },
  {
    id: 7,
    sentence: "Meskipun hujan lebat mengguyur kampus, namun para mahasiswa tetap bersemangat mengikuti praktikum lapangan.",
    isCorrect: false,
    rule: "Tata Bahasa Baku Bahasa Indonesia & EYD V (Konjungsi Majemuk Bertingkat).",
    explanation: "SALAH. Terjadi penggunaan konjungsi subordinatif ganda yang saling bertentangan: 'Meskipun' (penanda anak kalimat konsesif) digabungkan dengan 'namun' (konjungsi antarkalimat) di klausa kedua. Ini menyebabkan kalimat tidak memiliki induk kalimat (kalimat buntung). Cukup pilih salah satu.",
    correction: "Meskipun hujan lebat mengguyur kampus, para mahasiswa tetap bersemangat mengikuti praktikum lapangan."
  },
  {
    id: 8,
    sentence: "Pemberian vaksin polio ke-2 dijadwalkan berlangsung pada hari Kamis, 14 November 2024.",
    isCorrect: true,
    rule: "EYD V Bagian II Huruf C (Angka dan Lambang Bilangan Ordinal).",
    explanation: "BENAR. Penulisan angka tingkat (ordinal) dengan awalan 'ke-' dan angka Arab dirangkai menggunakan tanda hubung ('ke-2'). Nama hari 'Kamis' dan nama bulan 'November' benar diawali huruf kapital.",
    correction: "Kalimat sudah sesuai EYD Edisi V."
  },
  {
    id: 9,
    sentence: "Buku Pedoman Penulisan Karya Ilmiah diterbitkan oleh Politeknik Negeri Jakarta pada halaman 45 terdapat daftar rujukan.",
    isCorrect: false,
    rule: "EYD V Bagian IV Huruf A (Tanda Titik) & Huruf B (Tanda Koma).",
    explanation: "SALAH. Kalimat ini merupakan kalimat runtuh (run-on sentence) tanpa tanda pemisah gramatikal antara klausa penerbitan buku dan klausul halaman rujukan. Harus dipisahkan dengan tanda titik koma atau dijadikan dua kalimat mandiri.",
    correction: "Buku Pedoman Penulisan Karya Ilmiah diterbitkan oleh Politeknik Negeri Jakarta; pada halaman 45 terdapat daftar rujukan."
  },
  {
    id: 10,
    sentence: "Menteri Pendidikan Tinggi, Sains, dan Teknologi meresmikan gedung riset nanosains terpadu.",
    isCorrect: true,
    rule: "EYD V Bagian I Huruf A (Huruf Kapital Nama Jabatan Lembaga Resmi).",
    explanation: "BENAR. Nama jabatan resmi yang diikuti nama kementerian ('Menteri Pendidikan Tinggi, Sains, dan Teknologi') ditulis dengan huruf kapital pada setiap awal unsurnya. Kata 'nanosains' ditulis serangkai karena 'nano-' merupakan bentuk terikat.",
    correction: "Kalimat sudah sesuai EYD Edisi V."
  }
];

const essayQuestions = [
  {
    id: 1,
    topic: "Analisis Kedudukan & Fungsi Bahasa Indonesia",
    prompt: `Jelaskan secara komprehensif perbedaan yuridis dan fungsional antara kedudukan bahasa Indonesia sebagai 'Bahasa Nasional' dan sebagai 'Bahasa Negara'. Sertakan masing-masing dua contoh penerapan konkretnya dalam kehidupan bermasyarakat dan bernegara!`,
    idealAnswer: `1. Landasan Yuridis/Historis:\n` +
      `   - Bahasa Nasional bersumber dari Ikrar Sumpah Pemuda pada 28 Oktober 1928, butir ketiga: 'Kami poetra dan poetri Indonesia mendjoendjoeng bahasa persatoean, bahasa Indonesia'. Kedudukan ini berdimensi sosiologis-emosional pemersatu keragaman suku bangsa.\n` +
      `   - Bahasa Negara bersumber dari Pasal 36 UUD NRI 1945 yang disahkan pada 18 Agustus 1945: 'Bahasa Negara ialah Bahasa Indonesia'. Kedudukan ini berdimensi yuridis-formal ketatanegaraan.\n\n` +
      `2. Perbedaan Fungsi:\n` +
      `   A. Fungsi Bahasa Nasional:\n` +
      `      (1) Lambang kebanggaan kebangsaan (kebanggaan identitas budaya luhur tanpa rasa rendah diri di hadapan bahasa asing).\n` +
      `      (2) Lambang identitas nasional (pembeda resmi kepribadian bangsa Indonesia di panggung dunia).\n` +
      `      (3) Alat pemersatu berbagai suku bangsa yang berlainan bahasa ibu dan budaya.\n` +
      `      (4) Alat perhubungan antardaerah dan antarbudaya.\n` +
      `      Contoh Konkret: Mahasiswa asal Papua bercakap-cakap dengan mahasiswa asal Minang di asrama; penggunaan bahasa Indonesia dalam obrolan lintas komunitas budaya di pasar tradisional.\n\n` +
      `   B. Fungsi Bahasa Negara:\n` +
      `      (1) Bahasa resmi kenegaraan (naskah undang-undang, dokumen resmi pemerintah, upacara kenegaraan, pidato resmi presiden).\n` +
      `      (2) Bahasa pengantar resmi di lembaga pendidikan (mulai PAUD hingga perguruan tinggi).\n` +
      `      (3) Bahasa resmi dalam perhubungan tingkat nasional untuk perencanaan, tata kelola, dan pelaksanaan pembangunan nasional.\n` +
      `      (4) Bahasa resmi dalam pengembangan kebudayaan, ilmu pengetahuan, teknologi, dan seni modern (IPTEKS).\n` +
      `      Contoh Konkret: Dosen memberikan materi kuliah di kampus PNJ; penulisan berkas rancangan APBN oleh Kementerian Keuangan.`,
    rubric: [
      { aspect: "Penjelasan landasan hukum (Sumpah Pemuda 1928 vs UUD 1945 Pasal 36)", score: 25 },
      { aspect: "Ketepatan penjabaran 4 fungsi Bahasa Nasional", score: 25 },
      { aspect: "Ketepatan penjabaran 4 fungsi Bahasa Negara", score: 25 },
      { aspect: "Kesesuaian dan kelogisan contoh penerapan konkret", score: 25 }
    ]
  },
  {
    id: 2,
    topic: "Analisis dan Perbaikan Kalimat Tidak Efektif",
    prompt: `Cermati tiga kalimat tidak efektif di bawah ini. Analisislah jenis kesalahan yang terjadi (kesepadanan, keparalelan, kehematan, kecermatan, kepaduan, atau kelogisan) kemudian tuliskan kalimat perbaikannya!\n\n` +
      `Kalimat A: "Bagi mahasiswa yang belum membayar uang kuliah tunggal tidak diperbolehkan mengikuti ujian akhir semester."\n` +
      `Kalimat B: "Tugas asisten laboratorium meliputi menyiapkan modul praktikum, pengecekan ketersediaan alat, dan mendokumentasikan hasil pengujian."\n` +
      `Kalimat C: "Untuk mempersingkat waktu, marilah kita bersama-sama mendengarkan sambutan dari ketua panitia."`,
    idealAnswer: `Analisis dan Perbaikan:\n\n` +
      `Kalimat A:\n` +
      `- Jenis Kesalahan: Pelanggaran Kesepadanan Struktur (Subjek terhalang preposisi). Kehadiran preposisi 'Bagi' di awal kalimat mengubah frasa subjek menjadi Keterangan, sehingga predikat pasif 'tidak diperbolehkan' kehilangan subjek gramatikal.\n` +
      `- Perbaikan: "Mahasiswa yang belum membayar uang kuliah tunggal tidak diperbolehkan mengikuti ujian akhir semester." (Hapus kata 'Bagi').\n\n` +
      `Kalimat B:\n` +
      `- Jenis Kesalahan: Pelanggaran Keparalelan (Kesejajaran Bentuk). Rincian memadukan verba aktif transitif ('menyiapkan', 'mendokumentasikan') dengan nomina ('pengecekan').\n` +
      `- Perbaikan: "Tugas asisten laboratorium meliputi penyiapan modul praktikum, pengecekan ketersediaan alat, dan pendokumentasian hasil pengujian." (Semua diseragamkan menjadi nomina berkategori proses).\n\n` +
      `Kalimat C:\n` +
      `- Jenis Kesalahan: Pelanggaran Kelogisan Bahasa dan Kehematan Kata. Secara logika nalar, waktu tidak dapat 'dipersingkat' melainkan diefisienkan/dihemat. Selain itu, frasa 'bersama-sama mendengarkan' berpotensi mubazir.\n` +
      `- Perbaikan: "Untuk menghemat waktu, marilah kita dengarkan sambutan dari ketua panitia." (atau: "Untuk mengefisienkan waktu, ketua panitia kami persilakan menyampaikan sambutan.").`,
    rubric: [
      { aspect: "Ketepatan identifikasi kesalahan pada Kalimat A, B, C", score: 45 },
      { aspect: "Ketepatan penulisan hasil rekonstruksi kalimat efektif", score: 45 },
      { aspect: "Kerapian penjelasan kaidah kebahasaan", score: 10 }
    ]
  },
  {
    id: 3,
    topic: "EYD V: Rekonstruksi Ejaan & Tanda Baca Teks Akademik",
    prompt: `Perbaikilah seluruh kesalahan penulisan huruf kapital, huruf miring, gabungan kata, kata depan, dan tanda baca pada paragraf di bawah ini sehingga 100% memenuhi kaidah EYD Edisi V!\n\n` +
      `"Di era globalisasi saat ini, universitas indonesia menjalin kerjasama dengan harvard university dalam bidang cloud computing. Dekan fakultas teknik menandatangani nota kesepahaman di jakarta pada hari senin, 12 agustus 2024. Adapun penelitian bersama ini akan di biayai oleh kementerian pendidikan, kebudayaan, riset, dan teknologi : yang mencakup pertukaran dosen, beasiswa mahasiswa, dan publikasi jurnal internasional."`,
    idealAnswer: `Teks Perbaikan Sesuai EYD Edisi V:\n\n` +
      `"Di era globalisasi saat ini, Universitas Indonesia menjalin kerja sama dengan Harvard University dalam bidang *cloud computing*. Dekan Fakultas Teknik menandatangani nota kesepahaman di Jakarta pada hari Senin, 12 Agustus 2024. Adapun penelitian bersama ini akan dibiayai oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi yang mencakup pertukaran dosen, beasiswa mahasiswa, dan publikasi jurnal internasional."\n\n` +
      `Katalog Perbaikan Spesifik:\n` +
      `1. 'universitas indonesia' ➔ 'Universitas Indonesia' (Kapital nama lembaga pendidikan tinggi).\n` +
      `2. 'kerjasama' ➔ 'kerja sama' (Gabungan kata tanpa imbuhan ditulis terpisah).\n` +
      `3. 'harvard university' ➔ 'Harvard University' (Nama instansi asing diawali huruf kapital dan TETAP TEGAK, tidak dimiringkan).\n` +
      `4. 'cloud computing' ➔ '*cloud computing*' (Istilah asing yang belum diserap dicetak miring).\n` +
      `5. 'Dekan fakultas teknik' ➔ 'Dekan Fakultas Teknik' (Nama jabatan yang diikuti nama satuan instansinya wajib kapital).\n` +
      `6. 'jakarta' ➔ 'Jakarta' (Nama diri kota/geografi).\n` +
      `7. 'senin, 12 agustus' ➔ 'Senin, 12 Agustus' (Nama hari dan bulan wajib huruf kapital).\n` +
      `8. 'di biayai' ➔ 'dibiayai' (Awalan kata kerja pasif dirangkai, bukan dipisah).\n` +
      `9. 'kementerian pendidikan, kebudayaan, riset, dan teknologi' ➔ 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi' (Nama resmi kementerian negara).\n` +
      `10. Tanda titik dua (:) setelah kata 'teknologi' DIHAPUS karena klausa 'yang mencakup...' merupakan pelengkap sambungan verba, bukan perincian pernyataan tuntas.`,
    rubric: [
      { aspect: "Koreksi huruf kapital (Universitas, Nama Hari/Bulan, Kota, Lembaga)", score: 30 },
      { aspect: "Koreksi istilah asing dan nama entitas (Harvard University tegak, cloud computing miring)", score: 25 },
      { aspect: "Koreksi kata depan vs awalan ('kerja sama' dipisah, 'dibiayai' serangkai)", score: 25 },
      { aspect: "Koreksi tanda baca (penghapusan titik dua yang tidak sah)", score: 20 }
    ]
  },
  {
    id: 4,
    topic: "Paragraf: Analisis Syarat Kesatuan, Kepaduan, & Pola",
    prompt: `Bacalah wacana paragraf berikut secara kritis:\n` +
      `"(1) Kendaraan listrik kini menjadi solusi strategis dalam menekan emisi karbon perkotaan.\n` +
      `(2) Emisi gas buang dari sektor transportasi fosil menyumbang hampir empat puluh persen dari total polutan udara di kota-kota megapolitan.\n` +
      `(3) Oleh karena itu, peralihan menuju baterai lithium ramah lingkungan secara langsung meniadakan gas buang berbahaya seperti karbon monoksida dan nitrogen oksida.\n` +
      `(4) Harga mobil berbahan bakar bensin impor saat ini terus meroket akibat depresiasi nilai tukar rupiah.\n` +
      `(5) Selain ramah lingkungan, biaya perawatan motor listrik juga terbukti jauh lebih ekonomis dibandingkan mesin pembakaran internal.\n` +
      `(6) Dengan demikian, integrasi ekosistem kendaraan listrik mampu menghadirkan transportasi berkelanjutan yang bersih dan efisien bagi masyarakat."\n\n` +
      `Pertanyaan:\n` +
      `a. Tentukan kalimat mana yang merupakan ide pokok (gagasan utama) dan tentukan jenis paragrafnya berdasarkan posisi gagasan utama!\n` +
      `b. Identifikasi satu 'kalimat sumbang' yang merusak syarat kesatuan (unity) paragraf tersebut beserta argumen ilmiahnya!\n` +
      `c. Sebutkan alat kohesi yang menghubungkan kalimat (2) dan (3)!`,
    idealAnswer: `Jawaban Analisis Paragraf:\n\n` +
      `a. Ide Pokok dan Jenis Paragraf:\n` +
      `   - Ide Pokok terletak pada Kalimat (1): 'Kendaraan listrik kini menjadi solusi strategis dalam menekan emisi karbon perkotaan' yang ditegaskan kembali secara sintesis pada Kalimat (6): 'Dengan demikian, integrasi ekosistem kendaraan listrik mampu menghadirkan transportasi berkelanjutan yang bersih dan efisien bagi masyarakat'.\n` +
      `   - Jenis Paragraf: Paragraf Campuran (Deduktif-Induktif) karena gagasan utama berada di awal kalimat pembuka dan diperkuat dengan simpulan penegas di akhir kalimat penutup.\n\n` +
      `b. Identifikasi Kalimat Sumbang:\n` +
      `   - Kalimat Sumbang adalah Kalimat (4): 'Harga mobil berbahan bakar bensin impor saat ini terus meroket akibat depresiasi nilai tukar rupiah.'\n` +
      `   - Argumen Ilmiah: Topik pengendali wacana adalah efektivitas kendaraan listrik dalam menekan emisi karbon serta efisiensinya. Kalimat (4) menyimpang ke masalah makroekonomi kurs valuta asing dan harga mobil bensin impor, sehingga melanggar asas kesatuan tema (unity).\n\n` +
      `c. Alat Kohesi Kalimat (2) dan (3):\n` +
      `   - Alat kohesi yang digunakan adalah Konjungsi Antarkalimat Kausalitas 'Oleh karena itu' yang menghubungkan fakta tingginya emisi kendaraan fosil (kalimat 2) dengan kesimpulan logis peralihan ke baterai tanpa emisi (kalimat 3).`,
    rubric: [
      { aspect: "Penetapan ide pokok dan jenis paragraf campuran secara tepat", score: 35 },
      { aspect: "Penetapan kalimat sumbang beserta argumen ilmiah yang runtut", score: 35 },
      { aspect: "Identifikasi alat kohesi konjungsi antarkalimat", score: 30 }
    ]
  },
  {
    id: 5,
    topic: "Diksi: Pasangan Kata Bertaut dan Makna Leksikal",
    prompt: `Dalam bahasa Indonesia ragam ilmiah terdapat pasangan kata yang bertaut tetap (idiomatis/korelatif) yang sering tertukar atau dirancukan oleh mahasiswa. Jelaskan perbedaan penggunaan dan berikan contoh kalimat baku dari pasangan kata berikut:\n` +
      `1. 'antara ... dan ...' (bukan 'antara ... dengan ...')\n` +
      `2. 'bukan ... melainkan ...' vs 'tidak ... tetapi ...'\n` +
      `3. 'terdiri atas' (bukan 'terdiri dari')`,
    idealAnswer: `Penjelasan Pasangan Kata Bertaut Baku:\n\n` +
      `1. Pasangan 'antara ... dan ...':\n` +
      `   - Aturan: Kata 'antara' menyatakan rentang dua hal yang sejajar dan pasangannya yang baku adalah 'dan', bukan 'dengan'.\n` +
      `   - Kalimat Baku: "Terdapat korelasi positif yang signifikan antara motivasi belajar dan indeks prestasi kumulatif mahasiswa."\n\n` +
      `2. Pasangan 'bukan ... melainkan ...' vs 'tidak ... tetapi ...':\n` +
      `   - Aturan: Kata ingkar 'bukan' berpasangan dengan 'melainkan' untuk menegasikan kata benda (nomina) atau frasa benda. Kata ingkar 'tidak' berpasangan dengan 'tetapi' untuk menegasikan kata kerja (verba), kata sifat (adjektiva), atau klausa.\n` +
      `   - Kalimat Baku 'bukan ... melainkan ...': "Penyebab utama terhentinya mesin ini bukan kerusakan motor listrik, melainkan ketiadaan suplai daya dari baterai." (nomina)\n` +
      `   - Kalimat Baku 'tidak ... tetapi ...': "Sistem kendali ini tidak berhenti beroperasi saat listrik padam, tetapi langsung beralih ke generator cadangan." (verba)\n\n` +
      `3. Ungkapan 'terdiri atas':\n` +
      `   - Aturan: Kata kerja intransitif 'terdiri' secara semantis bermakna beranggotakan atau tersusun dari bagian-bagian, dan pasangan preposisi tetap yang baku menurut tata bahasa baku adalah 'atas', bukan 'dari'.\n` +
      `   - Kalimat Baku: "Tim perumus kurikulum vokasi terdiri atas para praktisi industri, perwakilan asosiasi profesi, dan dosen senior."`,
    rubric: [
      { aspect: "Ketepatan penjelasan kaidah 'antara ... dan ...' & contohnya", score: 30 },
      { aspect: "Ketepatan pembedaan 'bukan ... melainkan' vs 'tidak ... tetapi' & contohnya", score: 40 },
      { aspect: "Ketepatan kaidah 'terdiri atas' & contohnya", score: 30 }
    ]
  },
  {
    id: 6,
    topic: "Paragraf: Pola Pengembangan Logis",
    prompt: `Buatlah sebuah paragraf ilmiah bertema 'Keamanan Informasi di Lingkungan Siber Kampus' dengan ketentuan:\n` +
      `a. Paragraf berjenis DEDUKTIF dengan 1 kalimat utama di awal dan minimal 3 kalimat penjelas.\n` +
      `b. Menggunakan pola pengembangan SEBAB-AKIBAT atau POLA CONTOH/ILUSTRASI.\n` +
      `c. Memenuhi syarat kesatuan (unity), kepaduan (kohesi kata perangkai), dan seluruh kalimat berstruktur efektif.`,
    idealAnswer: `Contoh Paragraf Akademis Ideal (Pola Sebab-Akibat / Contoh):\n\n` +
      `"Penerapan autentikasi multifaktor (MFA) merupakan langkah paling krusial dalam memperkuat sistem keamanan siber di lingkungan kampus Politeknik Negeri Jakarta. Melalui mekanisme verifikasi berlapis ini, setiap mahasiswa dan dosen yang ingin mengakses akun surel institusi diwajibkan memasukkan kode verifikasi unik yang dikirimkan secara langsung ke perangkat ponsel terdaftar. Sistem verifikasi ganda tersebut secara efektif memblokir upaya pembajakan kredensial hingga sembilan puluh sembilan persen, meskipun kata sandi pengguna telah bocor di jaringan publik. Oleh sebab itu, celah peretasan data akademik berharga dapat dicegah sedini mungkin sehingga integritas data seluruh civitas academica tetap terjaga dengan aman."\n\n` +
      `Analisis Pemenuhan Syarat:\n` +
      `1. Kalimat Pertama berstatus kalimat topik deduktif ('Penerapan autentikasi multifaktor merupakan langkah paling krusial...').\n` +
      `2. Kalimat penjelas 1 menguraikan mekanisme operasional, kalimat 2 memaparkan efektivitas penolakan serangan siber (sebab), dan kalimat 3 menyimpulkan perlindungan integritas data (akibat).\n` +
      `3. Memiliki alat kohesi kuat: 'Mekanisme verifikasi berlapis ini', 'Sistem verifikasi ganda tersebut', dan konjungsi 'Oleh sebab itu'.`,
    rubric: [
      { aspect: "Penetapan struktur deduktif yang jelas pada kalimat pembuka", score: 30 },
      { aspect: "Ketepatan implementasi pola sebab-akibat / ilustrasi teknis", score: 35 },
      { aspect: "Kepaduan kohesi, koherensi, dan kepatuhan EYD V", score: 35 }
    ]
  },
  {
    id: 7,
    topic: "EYD V: Penulisan Kata Serapan & Afiksasi",
    prompt: `Jelaskan kaidah adaptasi penyerapan unsur asing ke dalam bahasa Indonesia menurut EYD Edisi V untuk akhiran serapan berikut, lalu berikan masing-masing dua contoh kata bentukan bakunya:\n` +
      `1. Akhiran '-tion' menjadi '-si'\n` +
      `2. Akhiran '-ic' / '-ical' menjadi '-ik' / '-is'\n` +
      `3. Penyesuaian gabungan huruf 'ph' menjadi 'f' dan 'rh' menjadi 'r'`,
    idealAnswer: `Penjelasan Kaidah Penyerapan EYD V:\n\n` +
      `1. Akhiran '-tion' (Inggris) atau '-tie' (Belanda) diserap menjadi '-si':\n` +
      `   - Kaidah: Mengacu pada pembentukan nomina proses atau keadaan yang diserap secara fonologis dan grafemis ke akhiran '-si'.\n` +
      `   - Contoh 1: *Communication* ➔ Komunikasi\n` +
      `   - Contoh 2: *Validation* ➔ Validasi (bukan validisir)\n` +
      `   - Contoh lain: *Acceleration* ➔ Akselerasi\n\n` +
      `2. Akhiran '-ic' dan '-ical' (Inggris) diserap menjadi '-ik' dan '-is':\n` +
      `   - Kaidah: Akhiran '-ic' yang merujuk pada ilmu atau sifat serapan diserap menjadi '-ik', sedangkan bentuk ajektiva '-ical' diserap menjadi '-is'.\n` +
      `   - Contoh 1: *Electronic* ➔ Elektronik (ilmu/sistem) atau Elektronika; *Logical* ➔ Logis\n` +
      `   - Contoh 2: *Systematic* / *Systematical* ➔ Sistematik / Sistematis\n\n` +
      `3. Gabungan Huruf 'ph' menjadi 'f' dan 'rh' menjadi 'r':\n` +
      `   - Kaidah: Unsur fonem konsonan rangkap Yunani/Latin disederhanakan agar selaras dengan sistem fonotaktik dan grafem bahasa Indonesia.\n` +
      `   - Contoh penyesuaian 'ph' ➔ 'f': *Phosphorus* ➔ Fosfor; *Photograph* ➔ Foto / Fotografi; *Phase* ➔ Fase (bukan pase).\n` +
      `   - Contoh penyesuaian 'rh' ➔ 'r': *Rhythm* ➔ Ritme; *Rhetoric* ➔ Retorika.`,
    rubric: [
      { aspect: "Penjelasan kaidah akhiran -tion ➔ -si dengan 2 contoh baku", score: 30 },
      { aspect: "Penjelasan kaidah akhiran -ic/-ical ➔ -ik/-is dengan 2 contoh baku", score: 35 },
      { aspect: "Penjelasan penyerapan ph ➔ f dan rh ➔ r dengan 2 contoh baku", score: 35 }
    ]
  },
  {
    id: 8,
    topic: "Ragam Bahasa: Penulisan Surat Dinas / Akademik",
    prompt: `Dalam penulisan surat dinas resmi di lingkungan perguruan tinggi, sering kali dijumpai kesalahan pada penulisan alamat surat dan salam pembuka. Perbaikilah kesalahan berikut ini sesuai kaidah surat menyurat baku:\n\n` +
      `Tertulis salah:\n` +
      `"Kepada Yth. Bapak Dekan Fakultas Teknik Sipil\n` +
      `D/a: Jalan Prof. Dr. G.A. Siwabessy, Kampus UI Depok.\n` +
      `Di tempat.\n\n` +
      `Dengan hormat,\n` +
      `Sehubungan dengan surat nomor: 124/UN.PNJ/2024..."`,
    idealAnswer: `Perbaikan Format Surat Dinas Sesuai EYD V:\n\n` +
      `Yth. Dekan Fakultas Teknik Sipil\n` +
      `Jalan Prof. Dr. G.A. Siwabessy, Kampus UI Depok\n\n` +
      `Dengan hormat,\n` +
      `Sehubungan dengan Surat Nomor 124/UN.PNJ/2024...\n\n` +
      `Uraian Kaidah Perbaikan:\n` +
      `1. Kata 'Kepada' DIHAPUS karena kata 'Yth.' (Yang terhormat) sudah langsung menyapa subjek penerima surat tanpa perlu kata penghubung arah 'Kepada'.\n` +
      `2. Kata 'Bapak' DIHAPUS jika diikuti langsung oleh nama jabatan/gelar ('Bapak Dekan' rancu, cukup 'Dekan Fakultas Teknik Sipil'). Kata sapaan Bapak/Ibu hanya dipakai jika langsung diikuti nama orang pribadi tanpa sebutan jabatan.\n` +
      `3. Singkatan 'D/a:' DIHAPUS karena merupakan bentuk nonbaku. Singkatan yang baku adalah 'd.a.' (dengan alamat) dan tidak perlu dicantumkan jika alamat sudah langsung ditulis.\n` +
      `4. Frasa 'Di tempat.' DIHAPUS karena tidak informatif dan mengindikasikan ketidaktahuan lokasi tujuan surat.\n` +
      `5. Tanda titik pada akhir baris alamat DIHAPUS karena alamat surat bukan sebuah kalimat berita.\n` +
      `6. Huruf awal 'Surat Nomor' ditulis kapital jika merujuk pada dokumen spesifik, dan tanda titik dua (:) dihapus karena nomor surat langsung mengikutinya.`,
    rubric: [
      { aspect: "Penghapusan 'Kepada' dan sapaan 'Bapak' sebelum jabatan", score: 35 },
      { aspect: "Penghapusan 'D/a:' dan 'Di tempat.' serta penghapusan titik di akhir baris alamat", score: 40 },
      { aspect: "Kerapian pembetulan format rujukan nomor surat dinas", score: 25 }
    ]
  },
  {
    id: 9,
    topic: "Paragraf: Kohesi dan Koherensi Wacana",
    prompt: `Jelaskan secara mendalam perbedaan antara konsep KOHESI dan KOHERENSI dalam sebuah wacana atau paragraf akademik! Berikan contoh sebuah paragraf yang memiliki kohesi leksikal namun gagal mencapai koherensi logis (kohesif tetapi tidak koheren)!`,
    idealAnswer: `Perbedaan Konseptual Kohesi dan Koherensi:\n\n` +
      `1. Kohesi (Kepaduan Bentuk / Lahiriah):\n` +
      `   - Kohesi adalah keserasian hubungan antarelemen gramatikal dan leksikal dalam struktur wacana.\n` +
      `   - Terlihat secara kasat mata melalui piranti kebahasaan seperti konjungsi (dan, tetapi, oleh karena itu), pronomina (ia, mereka, hal tersebut), elipsis, dan repetisi kata kunci.\n\n` +
      `2. Koherensi (Kepaduan Makna / Batiniah):\n` +
      `   - Koherensi adalah keterpautan ide, kesinambungan semantik, dan kelogisan jalinan gagasan antarkalimat sehingga membentuk satu kesatuan pikiran yang utuh dan bermakna masuk akal bagi pembaca.\n` +
      `   - Paragraf yang koheren tidak melompat-lompat gagasannya dan memiliki keteraturan penalaran.\n\n` +
      `3. Contoh Paragraf Kohesif tetapi TIDAK Koheren (Cacat Logika):\n` +
      `   "Laboratorium robotika itu membeli lima unit komputer berkecepatan tinggi. Komputer berkecepatan tinggi tersebut berwarna hitam pekat. Warna hitam adalah warna kesukaan mendiang kakek kepala jurusan. Mendiang kakek kepala jurusan sangat gemar menanam pohon mangga di pekarangan rumahnya."\n\n` +
      `   Analisis Kerusakan:\n` +
      `   Secara kohesi, antarkalimat tersambung rapi oleh repetisi ('komputer berkecepatan tinggi', 'warna hitam', 'mendiang kakek'). Namun, paragraf ini SAMA SEKALI TIDAK KOHEREN karena jalinan informasinya melompat liar dari teknologi komputer laboratorium ke warna hitam kesukaan kakek hingga menanam pohon mangga di kampung. Tidak ada gagasan pokok yang bermakna logis.`,
    rubric: [
      { aspect: "Ketepatan penjelasan konsep Kohesi (bentuk gramatikal)", score: 30 },
      { aspect: "Ketepatan penjelasan konsep Koherensi (makna semantik logis)", score: 30 },
      { aspect: "Kualitas contoh paragraf kohesif tetapi tidak koheren beserta analisisnya", score: 40 }
    ]
  },
  {
    id: 10,
    topic: "Diksi & Kalimat Efektif: Analisis Kerancuan Frasa dan Preposisi",
    prompt: `Analisislah letak kerancuan (kontaminasi) gramatikal pada tiga bentuk bentukan kata/frasa di bawah ini, jelaskan mengapa bentuk tersebut salah, dan berikan bentuk rekonstruksi bakunya:\n` +
      `1. 'mengenyampingkan'\n` +
      `2. 'saling tolong-menolong'\n` +
      `3. 'disebabkan karena'`,
    idealAnswer: `Analisis Bentuk Rancu (Kontaminasi):\n\n` +
      `1. Bentuk 'mengenyampingkan':\n` +
      `   - Kerancuan: Terjadi kesalahan penentuan kata dasar. Kata dasarnya adalah 'samping' (bukan 'nyamping'). Jika kata dasar yang berawal fonem /s/ diberi imbuhan konfiks *me-...-kan*, fonem /s/ luluh menjadi bunyi sengau /ny/, menghasilkan bentukan 'menyampingkan' (bukan mengenyampingkan).\n` +
      `   - Alternatif lain: Jika berasal dari gabungan bentuk 'ke samping', pembentukan verba yang tepat adalah 'mengesampingkan' (awalan *me-* + preposisi *ke-* + *samping* + akhiran *-kan*).\n` +
      `   - Bentuk Baku: 'mengesampingkan' atau 'menyampingkan' (Bentuk 'mengenyampingkan' TIDAK BAKU).\n\n` +
      `2. Bentuk 'saling tolong-menolong':\n` +
      `   - Kerancuan: Terjadi kontaminasi (perancuan dua struktur bermakna resiprokal/timbal balik). Kata 'saling' sudah bermakna berbalas-balasan, sementara reduplikasi verba 'tolong-menolong' juga sudah bermakna saling menolong. Menggabungkan keduanya adalah pemborosan makna ganda.\n` +
      `   - Bentuk Baku: Cukup pilih salah satu: 'saling menolong' ATAU 'tolong-menolong'.\n\n` +
      `3. Bentuk 'disebabkan karena':\n` +
      `   - Kerancuan: Kata 'disebabkan' adalah verba pasif yang berarti ditimbulkan oleh, sedangkan 'karena' adalah konjungsi kausalitas subordinatif (penanda klausa sebab). Menjajarkan keduanya setelah predikat pasif adalah rancu karena predikat pasif memerlukan pelengkap/frasa preposisional penunjuk pelaku sebab (preposisi 'oleh'), bukan konjungsi klausa.\n` +
      `   - Bentuk Baku: 'disebabkan oleh' ATAU 'terjadi karena'.`,
    rubric: [
      { aspect: "Penjelasan kerancuan & pembetulan 'mengenyampingkan' ➔ 'mengesampingkan'", score: 35 },
      { aspect: "Penjelasan kerancuan resiprokal ganda 'saling tolong-menolong'", score: 30 },
      { aspect: "Penjelasan kesalahan sintaksis 'disebabkan karena' ➔ 'disebabkan oleh'", score: 35 }
    ]
  }
];

module.exports = { trueFalseQuestions, essayQuestions };
