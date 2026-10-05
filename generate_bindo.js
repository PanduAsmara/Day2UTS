const fs = require('fs');
const path = require('path');

const pgPart1 = require('./data_bindo_pg_part1.js');
const pgPart2 = require('./data_bindo_pg_part2.js');
const { trueFalseQuestions, essayQuestions } = require('./data_bindo_extra.js');

const bindoData = {
  subject: "Bahasa Indonesia",
  code: "BINDO",
  instructor: "Mata Kuliah Bahasa Indonesia",
  institution: "Politeknik Negeri Jakarta (PNJ)",
  examInfo: {
    title: "Simulasi Ujian Tengah Semester (UTS) Bahasa Indonesia",
    durationMinutes: 60, // 30 soal x 2 menit
    totalQuestions: 30,
    technicalNotes: [
      "Total 30 soal Pilihan Ganda + 10 Soal Benar/Salah (EYD V) + 10 Soal Esai Analisis Teks.",
      "Standar waktu pengerjaan: 1 soal = 2 menit (Total 60 menit untuk 30 soal).",
      "Dilengkapi teks kutipan untuk dianalisis: bukan hanya menghafal fakta, tetapi mencermati penggunaan kata/diksi, keefektifan kalimat, dan kesesuaian EYD Edisi V.",
      "Materi mengacu pada silabus PNJ & presentasi Kelompok 1 s.d. 4 (Kedudukan/Fungsi/Ragam, EYD V, Diksi & Kalimat Efektif, Paragraf).",
      "Ketentuan UTS: Menggunakan laptop, login email mahasiswa PNJ, posisi kursi membelakangi meja dosen."
    ]
  },
  modules: [
    {
      id: 1,
      title: "Kedudukan, Fungsi, & Ragam Bahasa Indonesia",
      presenter: "Kelompok 1",
      summary: "Bahasa Indonesia memiliki dua kedudukan fundamental yang terpisah secara yuridis dan sosiologis: sebagai Bahasa Nasional (berdasarkan Ikrar Sumpah Pemuda 28 Oktober 1928) dan sebagai Bahasa Negara (berdasarkan UUD 1945 Pasal 36). Ragam bahasa timbul akibat latar belakang penutur, situasi interaksi (resmi, akrab, santai), serta media penyampaian (lisan vs tulis).",
      keywords: [
        { term: "Bahasa Nasional", desc: "Kedudukan bahasa Indonesia yang bersumber dari Ikrar Sumpah Pemuda 1928, berfungsi sebagai lambang kebanggaan, lambang identitas nasional, alat pemersatu suku bangsa, dan alat perhubungan antardaerah." },
        { term: "Bahasa Negara", desc: "Kedudukan resmi bahasa Indonesia yang diatur dalam Pasal 36 UUD 1945, berfungsi sebagai bahasa resmi kenegaraan, bahasa pengantar resmi pendidikan, bahasa perencanaan/pemerintahan, dan bahasa ipteks." },
        { term: "Ragam Baku", desc: "Variasi bahasa yang peka kaidah, terstandarisasi menurut kaidah tata bahasa dan EYD, digunakan pada situasi resmi/akademis." },
        { term: "Ragam Lisan vs Tulis", desc: "Ragam lisan terikat situasi dan dibantu intonasi/gestur; ragam tulis mandiri serta menuntut ketepatan ejaan, tanda baca, dan kelengkapan gramatikal subjek-predikat." },
        { term: "Situasi Resmi (Formal)", desc: "Konteks berbahasa dengan kaidah standar, tanpa pengaruh dialek daerah atau bahasa pasar (contoh: perkuliahan, rapat dinas, karya ilmiah)." }
      ],
      sections: [
        {
          heading: "1. Kedudukan Bahasa Indonesia",
          content: `Bahasa Indonesia memiliki dua kedudukan utama yang memiliki landasan historis dan hukum yang berbeda:\n\n` +
            `A. Sebagai Bahasa Nasional (Sejak 28 Oktober 1928 - Sumpah Pemuda):\n` +
            `Menurut Seminar Politik Bahasa Nasional (1999), fungsinya adalah:\n` +
            `1. Lambang kebanggaan kebangsaan (mencerminkan nilai-nilai luhur budaya bangsa).\n` +
            `2. Lambang identitas nasional (pembeda dari bangsa-bangsa lain di dunia).\n` +
            `3. Alat pemersatu berbagai suku bangsa yang berbeda latar belakang sosial budaya dan bahasa ibu.\n` +
            `4. Alat perhubungan antardaerah dan antarbudaya.\n\n` +
            `B. Sebagai Bahasa Negara (Sejak 18 Agustus 1945 - UUD 1945 Pasal 36):\n` +
            `1. Bahasa resmi kenegaraan (dokumen, upacara, pidato kenegaraan, sidang lembaga negara).\n` +
            `2. Bahasa pengantar resmi di lembaga-lembaga pendidikan (dari sekolah dasar hingga perguruan tinggi).\n` +
            `3. Bahasa resmi dalam perhubungan pada tingkat nasional untuk kepentingan perencanaan dan pelaksanaan pembangunan serta pemerintahan.\n` +
            `4. Bahasa resmi dalam pengembangan kebudayaan dan pemanfaatan serta pengembangan ilmu pengetahuan dan teknologi modern (IPTEKS).`
        },
        {
          heading: "2. Klasifikasi Ragam Bahasa",
          content: `Ragam bahasa adalah variasi bahasa menurut pemakaian yang berbeda-beda karena faktor penutur dan situasi komunikasi:\n\n` +
            `• Berdasarkan Situasi: Ragam resmi (formal), ragam semi-resmi, ragam santai/akrab (informal). Dipengaruhi oleh topik pembicaraan, hubungan penutur-mitra tutur, dan suasana.\n` +
            `• Berdasarkan Media:\n` +
            `  - Ragam Lisan: Mengandalkan lafal, intonasi, aksen, serta situasi fisik. Kosa kata sering tidak lengkap karena dibantu gerak tubuh/konteks.\n` +
            `  - Ragam Tulis: Tidak terikat ruang dan waktu, menuntut kecermatan ejaan (EYD), kelengkapan fungsi sintaksis (S-P-O-K), dan pilihan kata yang tepat.\n` +
            `• Berdasarkan Penutur: Dipengaruhi oleh daerah asal (dialek/aksen geografis), tingkat pendidikan, usia, dan status sosial.\n` +
            `• Berdasarkan Bidang: Ragam ilmiah/akademis, ragam hukum, ragam jurnalistik, ragam niaga, ragam sastra.`
        }
      ]
    },
    {
      id: 2,
      title: "Ejaan Bahasa Indonesia (EYD Edisi V) & Tanda Baca",
      presenter: "Kelompok 2",
      summary: "Ejaan yang Disempurnakan Edisi V (EYD V, resmi diberlakukan sejak Keputusan Mendikbudristek No. 0424/I/BS.00.01/2022 menggantikan PUEBI) mengatur pemakaian huruf, penulisan kata, tanda baca, serta penyerapan unsur asing. Kepatuhan terhadap ejaan adalah penentu utama keterbacaan, presisi, dan wibawa tulisan ilmiah.",
      keywords: [
        { term: "Huruf Kapital", desc: "Digunakan pada huruf pertama awal kalimat, nama orang/gelar kehormatan melekat, nama geografi spesifik (Selat Sunda, Sungai Ciliwung), nama agama dan kitab suci." },
        { term: "Huruf Miring", desc: "Digunakan untuk menuliskan judul buku/majalah/surat kabar, istilah asing/daerah yang belum diserap, serta penegasan huruf/bagian kata. Nama lembaga/merek dagang asing tetap ditulis TEGAK." },
        { term: "Huruf Tebal", desc: "Digunakan untuk menegaskan bagian tulisan yang telah berstruktur (Judul Bab, Subbab) atau menyoroti kata lema/sublema dalam kamus; BUKAN untuk menegaskan kata di dalam kalimat teks biasa." },
        { term: "Kata Depan (Preposisi)", desc: "Kata 'di', 'ke', 'dari' ditulis TERPISAH dari kata yang mengikutinya jika menyatakan tempat/arah (contoh: di mana, ke kampus, dari Jakarta)." },
        { term: "Gabungan Kata", desc: "Bentuk dasar terpisah (tanda tangan, kerja sama); mendapat awalan ATAU akhiran saja tetap terpisah (bertanda tangan, tanda tangani); mendapat awalan dan akhiran sekaligus DIRANGKAI (menandatangani, mempertanggungjawabkan)." },
        { term: "Tanda Titik Dua (:)", desc: "Digunakan pada akhir pernyataan lengkap yang diikuti perincian. TIDAK digunakan jika rincian itu merupakan pelengkap atau langsung menyambung predikat." },
        { term: "Tanda Titik Koma (;)", desc: "Digunakan sebagai pengganti kata penghubung untuk memisahkan klausa setara, atau memisahkan butir rincian bertingkat/berunsur tanda koma." }
      ],
      sections: [
        {
          heading: "1. Pemakaian Huruf Menurut EYD V",
          content: `A. Huruf Kapital:\n` +
            `• Awal kalimat dan petikan langsung.\n` +
            `• Huruf pertama nama orang dan gelar kehormatan/akademik yang diikuti nama (contoh: Prof. Dr. Hasanuddin, M.Pd., Haji Agus Salim). Gelar tanpa nama orang ditulis huruf kecil (contoh: Beliau dilantik menjadi gubernur).\n` +
            `• Nama geografi spesifik: Danau Toba, Bukit Barisan, Selat Malaka. Huruf kecil jika nama jenis (kunci inggris, pisang ambon, garam dapur).\n` +
            `• Nama bangsa, suku, dan bahasa: bangsa Indonesia, suku Bugis, bahasa Melayu (kata bangsa/suku/bahasa huruf kecil).\n\n` +
            `B. Huruf Miring:\n` +
            `• Judul buku, majalah, atau surat kabar yang dikutip dalam teks: majalah *Tempo*, koran *Kompas*, buku *Tata Bahasa Baku*.\n` +
            `• Huruf atau kata yang ditegaskan/dikhususkan: Huruf pertama kata *abad* adalah *a*.\n` +
            `• Istilah asing dan daerah yang belum diserap: *problem-based learning*, *welcoming speech*, *mawarung*.\n` +
            `• Pengecualian: Nama instansi atau merek dagang asing TIDAK dimiringkan (contoh: Harvard University, Microsoft Excel, Bank Mandiri).\n\n` +
            `C. Huruf Tebal:\n` +
            `• Menegaskan struktur karangan seperti Judul Bab dan Judul Bagian Bab (contoh: **BAB I PENDAHULUAN**).\n` +
            `• Menunjukkan kesalahan atau bentuk yang sedang dianalisis dalam kajian kebahasaan.`
        },
        {
          heading: "2. Penulisan Kata & Unsur Serapan",
          content: `A. Kata Depan (di, ke, dari) vs Awalan (di-, ke-):\n` +
            `• Kata Depan (tempat/arah) DIPISAH: di rumah, di mana, di kampus, ke pasar, ke atas, dari luar.\n` +
            `• Awalan (pembentuk verba/kata kerja atau numeralia) DIRANGKAI: ditulis, dikirim, dimakan, kedua, ketua.\n\n` +
            `B. Gabungan Kata:\n` +
            `• Terpisah: kerja sama, orang tua, rumah sakit, tanda tangan, terima kasih.\n` +
            `• Padu (serangkai): beasiswa, matahari, daripada, olahraga, segitiga, sukacita, kacamata.\n` +
            `• Berimbuhan sepihak (terpisah): berkerja sama, bertanggung jawab, tanda tangani.\n` +
            `• Berkonfiks sekaligus (serangkai): menandatangani, mempertanggungjawabkan, menyebarluaskan, menggarisbawahi.\n\n` +
            `C. Singkatan dan Akronim:\n` +
            `• Nama orang/gelar: menggunakan titik pada tiap unsur (M.Pd., S.T., Ir., Dr.).\n` +
            `• Surat-menyurat 2 huruf: titik tiap huruf (a.n., d.a., s.d., u.b.).\n` +
            `• Singkatan umum 3 huruf atau lebih: satu titik di akhir (dll., dsb., dst., hlm.).\n` +
            `• Akronim nama diri (suku kata): kapital hanya huruf pertama (Bappenas, Bulog, Puskesmas [bukan nama diri = puskesmas]).\n` +
            `• Akronim nama diri (huruf awal): kapital seluruhnya tanpa titik (LIPI, BIN, PNJ).\n` +
            `• Bukan nama diri: huruf kecil semua (tilang, pemilu, rudal).`
        },
        {
          heading: "3. Tanda Baca Utama",
          content: `• Tanda Titik (.): Penanda akhir kalimat berita; pemisah angka jam, menit, detik (pukul 07.30.20); penanda daftar pustaka; pemisah ribuan kuantitas (13.000 mahasiswa). Tidak dipakai di belakang judul atau nomor bab terakhir tanpa bawahan.\n` +
            `• Tanda Koma (,): Di antara unsur perincian (buku, pensil, dan tas); sebelum konjungsi pertentangan (tetapi, melainkan, sedangkan); setelah anak kalimat yang mendahului induk kalimat (*Jika hujan deras, kami tidak datang*); di belakang konjungsi antarkalimat (*Oleh karena itu, ...*).\n` +
            `• Tanda Titik Dua (:): Dipakai pada akhir suatu pernyataan lengkap yang diikuti pemerincian (*Ibu membeli perabot: kursi, meja, dan lemari*). JANGAN dipakai jika langsung menyambung predikat (*Kita memerlukan kursi, meja, dan lemari*).\n` +
            `• Tanda Hubung (-): Menyambung kata ulang (anak-anak); merangkai se- dengan kapital (se-Indonesia); merangkai ke- dengan angka (ke-75); merangkai imbuhan Indonesia dengan kata asing (di-*backup*, me-*review*).`
        }
      ]
    },
    {
      id: 3,
      title: "Diksi (Pilihan Kata) dan Kalimat Efektif",
      presenter: "Kelompok 3",
      summary: "Diksi adalah ketepatan dan kecermatan dalam memilih kata untuk mewakili gagasan secara akurat sesuai konteks dan nilai rasa. Kalimat efektif adalah kalimat yang mampu menyampaikan gagasan secara utuh, lugas, logis, dan hemat tanpa memicu ambiguitas bagi pembaca.",
      keywords: [
        { term: "Diksi", desc: "Kecakapan memilih kata yang tepat, cermat, sesuai konteks nilai rasa, dan lazim digunakan dalam ragam bahasa ilmiah." },
        { term: "Denotasi vs Konotasi", desc: "Makna denotasi adalah makna sebenarnya (harfiah/lugas); makna konotasi adalah makna asosiatif tambahan yang dipengaruhi nilai rasa atau kiasan." },
        { term: "Kesepadanan Struktur", desc: "Keseimbangan antara pikiran dan struktur gramatikal kalimat. Wajib memiliki Subjek dan Predikat yang jelas tanpa preposisi yang menghalangi subjek." },
        { term: "Keparalelan (Kesejajaran)", desc: "Kesamaan bentuk kata atau konstruksi gramatikal yang digunakan dalam perincian (misal: verba berimbuhan me- sejajar dengan me-)." },
        { term: "Kehematan Kata", desc: "Menghindari pemborosan kata, kesinoniman ganda, atau penjamakan bentuk yang sudah jamak (misal: 'para mahasiswa-mahasiswa' atau 'agar supaya')." },
        { term: "Kelogisan Bahasa", desc: "Gagasan dalam kalimat dapat diterima oleh akal sehat dan bernalar secara tepat (misal bukan 'Waktu dan tempat kami persilakan', melainkan 'Bapak Rektor kami persilakan')." }
      ],
      sections: [
        {
          heading: "1. Hakikat dan Prinsip Diksi",
          content: `Diksi mencakup dua hal pokok: kemampuan membedakan nuansa makna dari gagasan, dan kemampuan menemukan bentuk kata yang cocok dengan situasi pembicara dan pendengar/pembaca.\n\n` +
            `Prinsip Pemilihan Kata:\n` +
            `1. Ketepatan: Gagasan yang diterima pembaca persis sama dengan yang dimaksudkan penulis.\n` +
            `2. Kecermatan: Memilih kata yang hemat, efisien, dan tidak rancu.\n` +
            `3. Kesesuaian: Kecocokan kata dengan suasana formal, resmi, atau situasional.\n` +
            `4. Kelaziman: Menggunakan kata-kata yang wajar dan lazim dalam perbendaharaan baku bahasa Indonesia.`
        },
        {
          heading: "2. Ciri dan Prinsip Kalimat Efektif",
          content: `Kalimat efektif memiliki enam prinsip utama yang wajib dipenuhi dalam penulisan akademis:\n\n` +
            `1. Kesepadanan Struktur:\n` +
            `   • Memiliki Subjek (S) dan Predikat (P) yang jelas.\n` +
            `   • SALAH: *Bagi seluruh mahasiswa diwajibkan mengumpulkan laporan.* (Subjek terhalang preposisi 'bagi').\n` +
            `   • BENAR: *Seluruh mahasiswa diwajibkan mengumpulkan laporan.*\n` +
            `   • Tidak ada subjek ganda dan tidak menempatkan konjungsi intrakalimat (seperti *sehingga, karena*) di awal kalimat tunggal.\n\n` +
            `2. Keparalelan / Kesejajaran Bentuk:\n` +
            `   • Unsur yang dirinci harus sejajar bentuk gramatikalnya.\n` +
            `   • SALAH: *Tahap penelitian meliputi pengumpulan data, analisis data, dan menyusun laporan.* (Nomina - Nomina - Verba).\n` +
            `   • BENAR: *Tahap penelitian meliputi pengumpulan data, penganalisisan data, dan penyusunan laporan.* (Nomina sejajar).\n\n` +
            `3. Kehematan Kata:\n` +
            `   • Tidak mengulang subjek dalam anak kalimat.\n` +
            `   • Tidak menggunakan kata bersinonim ganda: *demi untuk* (cukup *demi* atau *untuk*), *agar supaya* (cukup *agar*).\n` +
            `   • Tidak menjamakkan kata yang sudah bermakna jamak: SALAH *para hadirin-hadirin sekalian*, BENAR *hadirin* atau *para hadirin*.\n\n` +
            `4. Kecermatan:\n` +
            `   • Tidak menimbulkan tafsiran ganda (ambiguitas).\n` +
            `   • SALAH: *Mahasiswa perguruan tinggi yang terkenal itu mendapat beasiswa.* (Siapa yang terkenal? Mahasiswanya atau perguruan tingginya?).\n\n` +
            `5. Kepaduan:\n` +
            `   • Informasi tidak terpecah-pecah.\n` +
            `   • Tidak menyisipkan kata *tentang* atau *daripada* di antara Predikat transitif dan Objek: SALAH *Penelitian ini membahas tentang kecerdasan buatan*, BENAR *Penelitian ini membahas kecerdasan buatan*.\n\n` +
            `6. Kelogisan Bahasa:\n` +
            `   • Hubungan unsur dapat diterima akal sehat.\n` +
            `   • SALAH: *Untuk mempersingkat waktu, acara kita mulai.* (Waktu tidak bisa dipersingkat, melainkan dihemat).\n` +
            `   • SALAH: *Mayat wanita yang tenggelam itu mondar-mandir di tepi pantai.* (Mayat tidak bisa mondar-mandir).`
        }
      ]
    },
    {
      id: 4,
      title: "Paragraf (Syarat, Jenis, & Pola Pengembangan)",
      presenter: "Kelompok 4",
      summary: "Paragraf adalah satuan bahasa yang terdiri atas kumpulan kalimat yang membentuk satu kesatuan ide pokok. Paragraf akademis yang bermutu wajib memenuhi syarat kesatuan (unity), kepaduan (coherence), kohesi, ketuntasan, dan keruntutan.",
      keywords: [
        { term: "Paragraf", desc: "Satuan wacana yang tersusun dari dua kalimat atau lebih yang membentuk kesatuan semantis dan sintaksis, diawali baris baru dengan indentasi 5 ketukan (Chaer, 2011; Rahardi, 2009)." },
        { term: "Gagasan Utama", desc: "Ide pokok atau pikiran pengendali dalam paragraf yang dijabarkan lebih lanjut oleh kalimat-kalimat penjelas." },
        { term: "Gagasan Mayor vs Minor", desc: "Gagasan mayor adalah penjelas primer yang langsung menjelaskan gagasan utama; gagasan minor adalah penjelas sekunder yang merinci gagasan mayor." },
        { term: "Kesatuan (Unity)", desc: "Seluruh kalimat dalam paragraf hanya membicarakan satu topik inti; tidak ada kalimat sumbang (kalimat yang melompat keluar dari topik)." },
        { term: "Kepaduan (Coherence)", desc: "Keterkaitan logis dan kelancaran alur pikiran antarkalimat sehingga mudah dipahami pembaca." },
        { term: "Deduktif vs Induktif", desc: "Deduktif meletakkan gagasan utama di awal paragraf (umum ke khusus); Induktif meletakkan gagasan utama di akhir paragraf sebagai simpulan (khusus ke umum)." },
        { term: "Ineratif", desc: "Paragraf yang gagasan utamanya terletak tepat di tengah-tengah paragraf, diawali kalimat penjelas dan diakhiri kalimat penjelas." }
      ],
      sections: [
        {
          heading: "1. Syarat Pembentukan Paragraf yang Baik",
          content: `Menurut Kanzunnudin (2023) dan Subakti et al. (2021), terdapat lima syarat pembentukan paragraf yang baik:\n\n` +
            `1. Kesatuan (Unity): Paragraf hanya memuat SATU ide pokok. Kalimat-kalimat penjelas wajib mendukung gagasan utama. Jika terdapat kalimat yang tidak bertalian, kalimat tersebut disebut 'kalimat sumbang' dan harus dihapus.\n` +
            `2. Kepaduan (Coherence): Hubungan timbal balik antarkalimat terjalin serasi, runtut, dan teratur dengan menggunakan alat perangkai kata hubung (konjungsi), kata ganti (pronomina), atau repetisi kata kunci.\n` +
            `3. Kohesi: Kepaduan bentuk struktur internal wacana pada tingkat gramatikal.\n` +
            `4. Ketuntasan: Topik dibahas secara tuntas dengan penjelasan yang cukup dan memadai sehingga pembaca tidak bertanya-tanya tentang maksud penulis.\n` +
            `5. Keruntutan: Penyajian kalimat mengikuti urutan pemikiran yang sistematis (kronologis, spasial, hierarkis, atau kausal).`
        },
        {
          heading: "2. Jenis Paragraf Berdasarkan Letak Gagasan Utama",
          content: `Menurut Suladi dalam Reistanti & Anwar (2022):\n\n` +
            `• Paragraf Deduktif: Kalimat topik berada di AWAL paragraf, diikuti kalimat-kalimat penjelas (Pola: Umum ➔ Khusus).\n` +
            `• Paragraf Induktif: Dimulai dengan rincian penjelasan khusus dan diakhiri kalimat topik sebagai simpulan (Pola: Khusus ➔ Umum).\n` +
            `• Paragraf Campuran (Deduktif-Induktif): Kalimat topik ada di AWAL dan ditegaskan kembali di AKHIR dengan variasi kata.\n` +
            `• Paragraf Ineratif: Kalimat topik berada di TENGAH-TENGAH paragraf (Pola: Khusus ➔ Umum/Topik ➔ Khusus).\n` +
            `• Paragraf Menyebar (Tersirat): Tidak memiliki satu kalimat topik tunggal; gagasan utama menyebar ke seluruh kalimat (biasa pada karangan deskriptif dan naratif).`
        },
        {
          heading: "3. Pola Pengembangan Paragraf",
          content: `Model pengembangan paragraf bervariasi menurut Bahtiar & Fatimah (2014):\n` +
            `• Pola Kronologis / Runtutan Waktu: Berdasarkan urutan peristiwa dari waktu ke waktu.\n` +
            `• Pola Spasial / Ruang: Menggambarkan letak objek dari kiri ke kanan, dekat ke jauh, atas ke bawah.\n` +
            `• Pola Sebab-Akibat: Sebab menjadi gagasan utama diikuti akibat-akibatnya, atau sebaliknya.\n` +
            `• Pola Pembanding / Pertentangan: Memperbandingkan persamaan dan perbedaan dua hal.\n` +
            `• Pola Ibarat (Analogi): Mengilustrasikan konsep rumit dengan benda/fenomena yang sudah dikenal luas.\n` +
            `• Pola Contoh / Ilustrasi: Memberikan bukti konkret atau sampel nyata.\n` +
            `• Pola Definisi Luas: Menjelaskan batas pengertian suatu istilah secara mendalam.`
        }
      ]
    }
  ],
  multipleChoiceQuestions: [...pgPart1, ...pgPart2],
  trueFalseQuestions: trueFalseQuestions,
  essayQuestions: essayQuestions
};

const fileContent = `// UTS Preparation Platform - Bahasa Indonesia Dataset
// Generated automatically from authentic lecture and exam criteria

window.BINDO_DATA = ${JSON.stringify(bindoData, null, 2)};
`;

const outputPath = path.join(__dirname, 'js', 'bindo_data.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully generated ${outputPath}!`);
console.log(`Total Modules: ${bindoData.modules.length}`);
console.log(`Total PG: ${bindoData.multipleChoiceQuestions.length}`);
console.log(`Total TF: ${bindoData.trueFalseQuestions.length}`);
console.log(`Total Essays: ${bindoData.essayQuestions.length}`);
