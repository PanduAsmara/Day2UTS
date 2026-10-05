const fs = require('fs');
const path = require('path');

const pgPart1 = require('./data_agama_pg_part1.js');
const pgPart2 = require('./data_agama_pg_part2.js');
const { essayQuestions } = require('./data_agama_extra.js');

const agamaData = {
  subject: "Pendidikan Agama Islam",
  code: "AGAMA",
  instructor: "Dosen Pengampu PAI",
  institution: "Politeknik Negeri Jakarta (PNJ)",
  examInfo: {
    title: "Simulasi Ujian Tengah Semester (UTS) Pendidikan Agama Islam",
    durationMinutes: 60, // 30 soal x 2 menit
    totalQuestions: 30,
    technicalNotes: [
      "Total 30 soal Pilihan Ganda Komprehensif + 10 Soal Esai Analisis Studi Kasus.",
      "Standar waktu pengerjaan: 1 soal = 2 menit (Total 60 menit untuk 30 soal).",
      "Materi mengacu pada 4 Pokok Bahasan Utama PAI Perguruan Tinggi: Hakikat Manusia, IPTEKS dalam Islam, Hukum/HAM/Demokrasi, dan Sumber Ajaran Islam.",
      "Dilengkapi penjelasan mendalam, dalil Al-Qur'an dan Hadis sahih, serta penalaran opsi benar vs opsi salah."
    ]
  },
  modules: [
    {
      id: 1,
      title: "Hakikat Eksistensi Manusia dan Tanggung Jawabnya",
      presenter: "Materi PAI 1",
      summary: "Manusia diciptakan melalui pentahapan fisik-biologis dan peniupan ruh (QS Al-Mu'minun: 12-14). Sejak alam arwah, manusia mengikat perjanjian fitrah tauhid dengan Allah SWT (QS Al-A'raf: 172). Dalam Islam, potensi manusia berpadu secara konvergen antara fitrah suci bawaan dan pendidikan lingkungan. Manusia mengemban tanggung jawab ganda: sebagai 'Abdullah (hamba yang beribadah) dan Khalifatullah fil ardh (pemimpin pemakmur bumi).",
      keywords: [
        { term: "Nuthfah & 'Alaqah", desc: "Fase biologis embriologi manusia dalam rahim: setetes sperma/ovum (nuthfah) berkembang menjadi segumpal darah melekat ('alaqah), segumpal daging (mudhghah), hingga peniupan ruh pada usia 120 hari." },
        { term: "Fitrah Tauhid", desc: "Potensi bawaan suci manusia sejak lahir untuk mengakui keesaan Allah dan menyembah-Nya berdasarkan perjanjian primordial (QS Al-A'raf: 172)." },
        { term: "Dimensi Al-Basyar", desc: "Dimensi manusia sebagai makhluk biologis-fisik materi yang membutuhkan makan, minum, reproduksi, dan tunduk pada hukum-hukum fisis alamiah." },
        { term: "Dimensi Al-Insan", desc: "Dimensi manusia sebagai makhluk intelektual-spiritual berakal budi yang mengemban amanah moral, ilmu pengetahuan, dan taklif hukum syariat." },
        { term: "Peran 'Abdullah", desc: "Kedudukan manusia sebagai hamba sahaya Allah yang tunduk patuh beribadah secara vertikal (QS Adz-Dzariyat: 56)." },
        { term: "Peran Khalifatullah", desc: "Kedudukan manusia sebagai mandataris/wakil Allah di bumi untuk memakmurkan alam, menegakkan keadilan, dan memelihara ekosistem (QS Al-Baqarah: 30 & QS Hud: 61)." }
      ],
      sections: [
        {
          heading: "1. Proses Penciptaan Manusia (Fisik & Metafisik)",
          content: `Al-Qur'an menguraikan penciptaan manusia melalui dua dimensi:\n\n` +
            `A. Asal Kejadian Pertama (Adam AS):\n` +
            `Diciptakan langsung dari tanah (*turab, thinin lazib, shalshalin min hama-in masnun*).\n\n` +
            `B. Reproduksi Biologis Keturunan Adam (QS Al-Mu'minun: 12-14):\n` +
            `1. *Sulalatin min thin*: Saripati tanah yang diserap tubuh menjadi nutrisi.\n` +
            `2. *Nuthfah*: Tetesan mani (sperma dan ovum) yang tersimpan di tempat kokoh (*qararin makin* / rahim).\n` +
            `3. *'Alaqah*: Segumpal darah atau struktur menyerupai lintah yang menempel kuat di dinding rahim ibu.\n` +
            `4. *Mudhghah*: Segumpal daging bertanda dan tidak bertanda.\n` +
            `5. *'Idzam & Lahm*: Pembentukan tulang belulang yang kemudian dibungkus oleh daging dan otot.\n` +
            `6. *Nafkh ar-Ruh*: Peniupan ruh oleh Malaikat pada usia kandungan 120 hari (4 bulan), disertai pencatatan takdir ajal, rezeki, amal, dan nasibnya (HR. Bukhari dan Muslim).`
        },
        {
          heading: "2. Fitrah dan Dimensi Eksistensi Manusia",
          content: `• Perjanjian Primordial (QS Al-A'raf: 172):\n` +
            `Ketika di alam ruh, Allah mengambil kesaksian: *\"Alastu bi Rabbikum?\"* (Bukankah Aku ini Tuhanmu?). Ruh menjawab serentak: *\"Qalu bala syahidna\"* (Benar, kami bersaksi). Maka manusia lahir membawa fitrah tauhid.\n\n` +
            `• Dialektika Potensi Manusia:\n` +
            `  - Teori Empirisme (John Locke): Jiwa bayi adalah tabularasa (kertas putih kosong) tanpa potensi bawaan.\n` +
            `  - Teori Naturalisme/Nativisme (Rousseau/Schopenhauer): Manusia murni ditentukan oleh faktor bawaan.\n` +
            `  - Perspektif Islam & Konvergensi: Hadis Nabi menegaskan *\"Kullu mauludin yuladu 'alal fithrah...\"*. Manusia membawa benih fitrah kebaikan, tetapi peran orang tua, lingkungan, dan pendidikan (konvergensi) sangat menentukan apakah fitrah itu bertumbuh subur atau menyimpang.\n\n` +
            `• Tiga Sebutan Manusia dalam Al-Qur'an:\n` +
            `  1. *Al-Basyar*: Menunjuk sisi ragawi/biologis (makan, minum, lelah, wafat).\n` +
            `  2. *Al-Insan*: Menunjuk sisi kecerdasan, akal budi, dan tanggung jawab moral.\n` +
            `  3. *An-Nas*: Menunjuk sisi sosial kemasyarakatan yang majemuk.`
        },
        {
          heading: "3. Tanggung Jawab Eksistensial Manusia",
          content: `Manusia memiliki dwi-fungsi integral yang tidak boleh dipisahkan:\n\n` +
            `1. Sebagai 'Abdullah (QS Adz-Dzariyat: 56):\n` +
            `   - Menjadi hamba Allah yang ikhlas, taat, dan berserah diri secara vertikal (*hablun minallah*).\n` +
            `   - Orientasi seluruh amal perbuatan adalah ibadah dan penghambaan kepada Sang Khalik.\n\n` +
            `2. Sebagai Khalifatullah fil Ardh (QS Al-Baqarah: 30 & QS Hud: 61):\n` +
            `   - Memakmurkan bumi (*isti'mar al-ardh*) dengan ilmu pengetahuan dan teknologi.\n` +
            `   - Mengelola sumber daya alam secara lestari tanpa menimbulkan kerusakan (*la tufsidu fil ardh*).\n` +
            `   - Menegakkan keadilan sosial dan perdamaian di tengah umat manusia (*hablun minannas*).`
        }
      ]
    },
    {
      id: 2,
      title: "Perkembangan IPTEKS dalam Islam",
      presenter: "Materi PAI 2",
      summary: "Islam adalah agama peradaban yang menempatkan ilmu pengetahuan dan teknologi (IPTEKS) pada derajat termulia. Perintah wahyu pertama QS Al-'Alaq: 1-5 meletakkan epistemologi riset ('Iqra') dan dokumentasi ilmiah ('Al-Qalam') berbasis tauhid. Sosok cendekiawan ideal digambarkan sebagai Ulul Albab (QS Ali Imran: 190-191) yang memadukan dzikir dan fikir. Al-Qur'an memuat mukjizat ilmiah (I'jaz 'Ilmi) dan menempatkan seni estetika sebagai sarana bertauhid.",
      keywords: [
        { term: "Iqra' & Al-Qalam", desc: "Fondasi epistemologis peradaban Islam: perintah observasi/telaah riset mendalam ('Iqra') dan kodifikasi/dokumentasi tertulis ('Al-Qalam') berbasis nama Allah (Bismi Rabbika)." },
        { term: "Ulul Albab", desc: "Karakter cendekiawan Muslim paripurna yang menyatukan dzikir (spiritualitas moral batin) dan fikir (riset rasional objektif semesta) sehingga melahirkan kesadaran 'Rabbana ma khalaqta hadza bathila'." },
        { term: "Ilmu Ladunny vs Kasyby", desc: "Ilmu Ladunny diperoleh langsung dari Allah melalui wahyu/ilham kepada hamba bertakwa; Ilmu Kasyby diperoleh melalui proses ikhtiar belajar, observasi indrawi, dan eksperimen ilmiah." },
        { term: "Mukjizat Ilmiah (I'jaz 'Ilmi)", desc: "Fakta-fakta saintifik mutakhir yang telah diisyaratkan Al-Qur'an 14 abad silam sebelum ditemukannya teknologi modern (seperti nebula mawar, orbit matahari, 7 lapis atmosfer)." },
        { term: "Arabesque", desc: "Ornamen geometris khas seni Islam berupa pola garis berulang tak berujung yang mencerminkan sifat keesaan dan ketidakterbatasan (*infinity*) Allah SWT." }
      ],
      sections: [
        {
          heading: "1. Landasan Teologis IPTEKS (Wahyu Pertama)",
          content: `Surah Al-'Alaq ayat 1-5 adalah tonggak awal revolusi ilmiah dalam Islam:\n` +
            `• *Iqra' bismi Rabbikalladzi khalaq*: Perintah membaca, meneliti, dan menganalisis fenomena alam (ayat kauniyah) dan wahyu (ayat qauliyah) dengan landasan tauhid.\n` +
            `• *'Allama bil qalam*: Penegasan bahwa instrumen peradaban dan pewarisan ilmu adalah pena/catatan (literasi, dokumentasi data, kodifikasi riset).\n` +
            `• Islam menolak dikotomi sekuler: Sains tanpa agama berujung pada kehancuran dan keangkuhan moral; agama tanpa sains menjadi statis dan tertinggal.`
        },
        {
          heading: "2. Konsep Cendekiawan Muslim (Ulul Albab)",
          content: `Berdasarkan QS Ali 'Imran ayat 190-191, Ulul Albab memiliki dua pilar harmonis:\n\n` +
            `A. Pilar Dzikir (*Yadzkurunallah qiyaman wa qu'udan wa 'ala junubihim*):\n` +
            `Koneksi hati yang selalu terikat kepada Allah dalam setiap kondisi gerak maupun diam. Menghasilkan integritas moral, kerendahan hati, dan etika riset luhur.\n\n` +
            `B. Pilar Fikir (*Wa yatafakkaruna fi khalqis samawati wal ardh*):\n` +
            `Riset empiris, penalaran rasional, penyelidikan hukum alam (sunnatullah), dan inovasi rekayasa teknologi.\n\n` +
            `C. Muara Aksiologis:\n` +
            `Melahirkan pernyataan: *\"Rabbana ma khalaqta hadza bathila, subhanaka faqina 'adzaban nar\"* (Tiada yang Engkau ciptakan sia-sia. Mahasuci Engkau, lindungilah kami dari azab neraka). Teknologi ditujukan untuk rahmatan lil 'alamin.`
        },
        {
          heading: "3. Klasifikasi Ilmu & Mukjizat Ilmiah Al-Qur'an",
          content: `• Klasifikasi Ilmu:\n` +
            `  1. *Ilmu Ladunny*: Ilmu yang dilimpahkan langsung dari sisi Allah melalui wahyu/ilham suci (QS Al-Kahfi: 65).\n` +
            `  2. *Ilmu Kasyby (Kasbi)*: Ilmu yang diperoleh lewat ikhtiar manusia melalui studi, eksperimen, observasi laboratorium, dan metode ilmiah (mencakup 6 rumpun sains terapan).\n\n` +
            `• Mukjizat Ilmiah Al-Qur'an (I'jaz 'Ilmi):\n` +
            `  1. *Nebula Mawar Merah* (QS Ar-Rahman: 37): Ledakan bintang dan formasi nebula menyerupai bunga mawar dan kilau minyak (*wardatan kad-dihan*), terbukti oleh teleskop NASA.\n` +
            `  2. *Orbit Bergeraknya Matahari* (QS Yasin: 38): Matahari bergerak mengitari pusat galaksi menuju *Solar Apex* (*tajri limustaqarrin laha*).\n` +
            `  3. *Tujuh Lapisan Atmosfer* (QS Al-Baqarah: 29 & QS At-Talaq: 12): Troposfer, stratosfer, mesosfer, termosfer, ionosfer, eksosfer, magnetosfer.`
        },
        {
          heading: "4. Estetika dan Seni dalam Pandangan Islam",
          content: `• Hakikat Seni: Islam menghargai fitrah keindahan. Rasulullah SAW bersabda: *\"Innallaha jamilun yuhibbul jamal\"* (Allah Maha Indah dan mencintai keindahan - HR. Muslim).\n` +
            `• Karakteristik Seni Islam: Berlandaskan tauhid, kaligrafi huruf wahyu, motif floral dan ornamen geometris repetitif (*arabesque*), arsitektur akustik kubah masjid.\n` +
            `• Batasan Syar'i: Hukum asal seni adalah mubah, asalkan tidak menjurus pada kemusyrikan/berhala, tidak mengeksploitasi pornografi/sensualitas, dan tidak melalaikan kewajiban ibadah pokok.`
        }
      ]
    },
    {
      id: 3,
      title: "Sistem Hukum Islam, HAM, dan Demokrasi",
      presenter: "Materi PAI 3",
      summary: "Hukum Islam bersumber dari wahyu dengan tujuan melindungi lima hak asasi pokok manusia (Maqashid Asy-Syari'ah). Pembagian hukum taklifi mengatur dinamika amal manusia. Konsep HAM Islam mendahului piagam barat melalui Piagam Madinah (622 M) yang menjamin kebebasan beragama dan persamaan hukum. Demokrasi Islam bertumpu pada musyawarah (Asy-Syura), keadilan (Al-'Adalah), dan amanah akuntabilitas kepemimpinan.",
      keywords: [
        { term: "Hukum Taklifi", desc: "Lima norma tuntutan syariat: Wajib (Ijab), Sunnah (Mandub), Haram (Tahrim), Makruh (Karahah), dan Mubah (Ibahah)." },
        { term: "Maqashid Asy-Syari'ah", desc: "Tujuan universal pensyariatan hukum: Hifzh ad-Din (Agama), Hifzh an-Nafs (Jiwa), Hifzh al-'Aql (Akal), Hifzh an-Nasl (Keturunan), dan Hifzh al-Mal (Harta)." },
        { term: "Al-Karamah Al-Insaniyah", desc: "Prinsip kemuliaan martabat manusia yang dianugerahkan Allah kepada setiap anak cucu Adam tanpa diskriminasi ras atau kasta (QS Al-Isra': 70)." },
        { term: "Piagam Madinah", desc: "Konstitusi tertulis modern pertama dunia (622 M) yang meletakkan dasar negara kesatuan multikultural, kebebasan beragama, dan perlindungan minoritas." },
        { term: "Asy-Syura", desc: "Prinsip musyawarah mufakat dalam pengambilan kebijakan publik demi mencegah kediktatoran penguasa (QS Ali Imran: 159)." },
        { term: "Al-Musawah & Al-'Adalah", desc: "Kesetaraan mutlak seluruh warga negara di hadapan hukum dan penegakan keadilan tanpa pandang bulu (QS An-Nisa': 58)." }
      ],
      sections: [
        {
          heading: "1. Sistem Hukum Islam & Maqashid Asy-Syari'ah",
          content: `A. Lima Kategori Hukum Taklifi:\n` +
            `1. *Wajib*: Dikerjakan berpahala, ditinggalkan berdosa (Fardhu 'Ain & Fardhu Kifayah).\n` +
            `2. *Sunnah (Mandub)*: Dikerjakan berpahala, ditinggalkan tidak berdosa.\n` +
            `3. *Haram*: Ditinggalkan berpahala, dikerjakan mendapat dosa dan sanksi.\n` +
            `4. *Makruh*: Ditinggalkan berpahala, dikerjakan tidak berdosa tetapi dicela secara moral.\n` +
            `5. *Mubah*: Netral, boleh dikerjakan atau ditinggalkan.\n\n` +
            `B. Maqashid Asy-Syari'ah (Al-Kulliyyat Al-Khams):\n` +
            `Hukum Islam disyariatkan demi memelihara lima sendi kehidupan:\n` +
            `1. *Hifzh ad-Din*: Perlindungan akidah dan kebebasan beragama.\n` +
            `2. *Hifzh an-Nafs*: Perlindungan hak hidup (QS Al-Ma'idah: 32).\n` +
            `3. *Hifzh al-'Aql*: Perlindungan akal sehat (pengharaman miras dan narkoba).\n` +
            `4. *Hifzh an-Nasl*: Perlindungan nasab dan kehormatan keluarga (syariat nikah, larangan zina).\n` +
            `5. *Hifzh al-Mal*: Perlindungan hak milik harta (larangan korupsi, riba, pencurian).`
        },
        {
          heading: "2. HAM dalam Islam & Piagam Madinah",
          content: `• Berakar pada *Al-Karamah Al-Insaniyah* (QS Al-Isra': 70: \"Wa laqad karramna bani Adam\").\n` +
            `• Hak Hidup: Membunuh satu jiwa tanpa hak laksana membunuh seluruh umat manusia (QS Al-Ma'idah: 32).\n` +
            `• Hak Kebebasan Beragama: \"La ikraha fid-din\" (QS Al-Baqarah: 256) dan QS Al-Kahfi: 29.\n` +
            `• Pluralisme & Kesetaraan: Manusia diciptakan berbangsa-bangsa agar saling mengenal (*lita'arafu*), yang termulia adalah yang paling bertakwa (QS Al-Hujurat: 13).\n` +
            `• Piagam Madinah (Mitsaq al-Madinah 622 M): Konstitusi tertulis konsensus antara Muslim, Yahudi, dan kabilah Arab yang menjamin hak sipil, persatuan bangsa (*ummah wahidah*), toleransi beragama, dan kesetaraan hukum.`
        },
        {
          heading: "3. Prinsip Demokrasi dalam Islam",
          content: `Islam meletakkan 6 pilar demokrasi substansial:\n` +
            `1. *Asy-Syura*: Musyawarah dalam pengambilan keputusan publik (QS Ali Imran: 159).\n` +
            `2. *Al-'Adalah*: Keadilan hukum yang independen dan tegas tanpa tebang pilih (QS An-Nisa': 58).\n` +
            `3. *Al-Musawah*: Kesetaraan dan perlakuan setara di depan hukum (*equality before the law*).\n` +
            `4. *Al-Amanah*: Kekuasaan adalah titipan amanat Allah yang wajib dijaga integritasnya.\n` +
            `5. *Al-Mas'uliyyah*: Akuntabilitas pertanggungjawaban kepada rakyat di dunia dan Allah di akhirat.\n` +
            `6. *Al-Hurriyyah*: Kebebasan yang beradab dan bertanggung jawab dalam koridor akhlak syariat.`
        }
      ]
    },
    {
      id: 4,
      title: "Sumber Ajaran Islam PAI (Al-Qur'an, Hadis, Ijtihad)",
      presenter: "Materi PAI 4",
      summary: "Ajaran Islam memiliki tiga sumber hierarkis yang kokoh: Al-Qur'an sebagai kalamullah mukjizat mutawatir; As-Sunnah/Hadis (Qauliyah, Fi'liyah, Taqririyah) dengan fungsi Bayan Taqrir, Tafshil, dan Tasyri'; serta Ijtihad sebagai pengerahan daya nalar fukaha melalui metode Qiyas, Ijma', Maslahah Mursalah, dan Sadduz Dzari'ah. Kaidah fiqih induk mendahulukan penolakan kerusakan di atas pencapaian kemaslahatan.",
      keywords: [
        { term: "Al-Qur'an", desc: "Kalamullah yang mukjizat, diturunkan kepada Nabi Muhammad SAW melalui Malaikat Jibril secara mutawatir, tertulis dalam mushaf, dan membacanya bernilai ibadah." },
        { term: "Tafsir Tahlili vs Maudhu'i", desc: "Tahlili menafsirkan ayat secara analitis berurutan sesuai susunan mushaf; Maudhu'i menafsirkan ayat secara tematik menghimpun seluruh ayat seputar satu topik khusus." },
        { term: "Tafsir bi al-Ma'tsur vs ar-Ra'yi", desc: "Bi al-Ma'tsur bersandar pada riwayat Al-Qur'an, hadis, dan atsar sahabat; Bi ar-Ra'yi bersandar pada kaidah penalaran rasional ijtihad mufasir yang terkontrol kaidah bahasa dan ushul fiqih." },
        { term: "As-Sunnah / Hadis", desc: "Segala sabda (qauliyah), perbuatan (fi'liyah), dan persetujuan diam (taqririyah) Rasulullah SAW yang menjadi sumber hukum kedua." },
        { term: "Fungsi Hadis (Bayan)", desc: "Bayan Taqrir (memperkuat hukum Al-Qur'an), Bayan Tafshil (merinci yang global), dan Bayan Tasyri' (menetapkan hukum baru yang belum ada di teks Al-Qur'an)." },
        { term: "Sanad, Matan, Rawi", desc: "Sanad adalah silsilah rantai transmisi perawi; Matan adalah redaksi teks hadis; Rawi adalah penghimpun/pembuku hadis." },
        { term: "Hadis Shahih", desc: "Hadis yang memenuhi 5 syarat: sanad bersambung, perawi adil, perawi dhabith (teliti & kuat hafalannya), tidak ada syudzudz (kejanggalan), dan tidak ada 'illah (cacat tersembunyi)." },
        { term: "Qiyas", desc: "Metode ijtihad menyamakan hukum kasus baru (far'u) dengan kasus pokok (ashl) karena adanya kesamaan motif hukum ('illat), contohnya mengharamkan narkoba karena sama-sama memabukkan seperti khamr." },
        { term: "Maslahah Mursalah", desc: "Penetapan hukum kemaslahatan publik yang tidak disinggung secara spesifik dalam nash namun sejalan dengan maqashid syariat (contoh: pencatatan nikah di KUA, kodifikasi mushaf)." },
        { term: "Dar'ul Mafasid", desc: "Kaidah fiqih induk: 'Dar'ul mafasid muqaddamun 'ala jalbil mashalih' (Menolak kerusakan didahulukan daripada mengambil kemaslahatan)." }
      ],
      sections: [
        {
          heading: "1. Al-Qur'an: Hakikat, Nama, & Metode Penafsiran",
          content: `A. Nama-Nama Mulia Al-Qur'an:\n` +
            `• *Al-Kitab* (Buku/Tulisan Wahyu - QS Al-Baqarah: 2)\n` +
            `• *Al-Furqan* (Pembeda Hak dan Batil - QS Al-Furqan: 1)\n` +
            `• *Adz-Dzikr* (Pemberi Peringatan - QS Al-Hijr: 9)\n` +
            `• *Al-Huda* (Petunjuk Hidup - QS Al-Baqarah: 185)\n` +
            `• *Asy-Syifa* (Obat Penawar Batin - QS Al-Isra': 82)\n\n` +
            `B. Metode Penafsiran:\n` +
            `• Berdasarkan Corak Sumber: *Tafsir bi al-Ma'tsur* (riwayat teks ayat, hadis, atsar) vs *Tafsir bi ar-Ra'yi* (ijtihad nalar kebahasaan dan hermeneutika ushul).\n` +
            `• Berdasarkan Sistematika: *Tafsir Tahlili* (analitis berurutan per ayat) vs *Tafsir Maudhu'i* (tematik mengumpulkan seluruh ayat seputar satu tema tertentu).`
        },
        {
          heading: "2. As-Sunnah: Bentuk, Struktur, & Keshahihan",
          content: `A. Bentuk-Bentuk Hadis:\n` +
            `1. *Qauliyah*: Sabda verbal Nabi SAW.\n` +
            `2. *Fi'liyah*: Perbuatan dan keteladanan fisik nyata Nabi SAW.\n` +
            `3. *Taqririyah*: Persetujuan atau diamnya pembiaran Nabi terhadap tindakan sahabat di hadapan beliau.\n\n` +
            `B. Fungsi Hadis terhadap Al-Qur'an:\n` +
            `1. *Bayan Taqrir*: Mengukuhkan hukum yang sudah ada di Al-Qur'an.\n` +
            `2. *Bayan Tafshil*: Merinci ayat yang masih mujmal/global (misal: rukun shalat, kadar zakat).\n` +
            `3. *Bayan Tasyri'*: Menetapkan hukum baru yang tidak tertulis dalam Al-Qur'an (misal: larangan makan binatang buas bertaring, larangan memakai emas bagi pria).\n\n` +
            `C. Lima Syarat Mutlak Hadis Shahih:\n` +
            `1. Sanad bersambung (*ittishal as-sanad*).\n` +
            `2. Seluruh perawi adil (*'adalah* - integritas takwa dan moral).\n` +
            `3. Seluruh perawi dhabith (*tamamudh dhabth* - akurasi daya ingat hafalan dan catatan).\n` +
            `4. Selamat dari kejanggalan (*syudzudz*).\n` +
            `5. Selamat dari cacat tersembunyi (*'illah*).`
        },
        {
          heading: "3. Ijtihad: Landasan, Metode, & Kaidah Fiqih",
          content: `A. Landasan Syar'i Ijtihad:\n` +
            `Hadis Mu'adz bin Jabal saat diutus ke Yaman: Ketika ditanya jika tidak menemukan di Kitabullah dan Sunnah Rasulullah, Mu'adz menjawab: *\"Ajtahidu ra'yi wa la alu\"* (Aku berijtihad dengan akal pikiranku dan aku tidak melalaikannya), lalu dipuji oleh Rasulullah SAW.\n\n` +
            `B. Metode Ijtihad Utama:\n` +
            `1. *Ijma'*: Kesepakatan bulat para mujtahid umat Islam pasca wafatnya Nabi atas suatu hukum syara'.\n` +
            `2. *Qiyas*: Menyamakan hukum kasus baru (*far'u*) dengan kasus pokok (*ashl*) karena kesamaan motif hukum (*'illat*). Rukunnya: Ashl, Far'u, Hukum Ashl, 'Illat.\n` +
            `3. *Maslahah Mursalah*: Penetapan hukum berdasarkan kemaslahatan publik yang tidak disinggung khusus dalam nash (contoh: pencatatan nikah di KUA, kodifikasi Al-Qur'an era Sahabat).\n` +
            `4. *Sadduz Dzari'ah*: Menutup pintu sarana yang dapat menjerumuskan kepada perbuatan haram.\n\n` +
            `C. Kaidah Fiqih Induk:\n` +
            `*\"Dar'ul mafasid muqaddamun 'ala jalbil mashalih\"* (Menolak marabahaya dan kerusakan wajib didahulukan daripada sekadar meraih kemaslahatan).`
        }
      ]
    }
  ],
  multipleChoiceQuestions: [...pgPart1, ...pgPart2],
  essayQuestions: essayQuestions
};

const fileContent = `// UTS Preparation Platform - Pendidikan Agama Islam Dataset
// Generated automatically from authentic lecture and exam criteria

window.AGAMA_DATA = ${JSON.stringify(agamaData, null, 2)};
`;

const outputPath = path.join(__dirname, 'js', 'agama_data.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully generated ${outputPath}!`);
console.log(`Total Modules: ${agamaData.modules.length}`);
console.log(`Total PG: ${agamaData.multipleChoiceQuestions.length}`);
console.log(`Total Essays: ${agamaData.essayQuestions.length}`);
