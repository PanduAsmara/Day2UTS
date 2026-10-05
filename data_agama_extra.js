const essayQuestions = [
  {
    id: 1,
    topic: "Hakikat Manusia: Integrasi 'Abdullah dan Khalifatullah",
    prompt: `Manusia diciptakan oleh Allah SWT mengemban misi ganda: sebagai ''Abdullah' (Hamba Allah) dan sebagai 'Khalifatullah fil ardh' (Wakil Allah di bumi).\n` +
      `a. Jelaskan makna hakiki dari kedua peran tersebut beserta dalil Al-Qur'annya!\n` +
      `b. Bagaimana seorang mahasiswa teknik/vokasi mengintegrasikan kedua peran ini secara konkret dalam kehidupan akademis dan profesional di tengah pesatnya perkembangan teknologi modern?`,
    idealAnswer: `Jawaban Komprehensif:\n\n` +
      `a. Makna Hakiki Kedua Peran:\n` +
      `   1. Manusia sebagai 'Abdullah (Hamba Allah):\n` +
      `      - Makna: Menempatkan manusia pada posisi penghambaan dan ketundukan mutlak kepada Allah SWT. Seluruh aktivitas hidup ditujukan untuk beribadah dan mencari ridha-Nya (dimensi vertikal / Hablun minallah).\n` +
      `      - Dalil: QS Adz-Dzariyat: 56: "Wa ma khalaqtul jinna wal insa illa liya'budun" (Dan tidaklah Aku menciptakan jin dan manusia melainkan agar mereka beribadah kepada-Ku).\n` +
      `   2. Manusia sebagai Khalifatullah fil Ardh (Wakil Allah di Bumi):\n` +
      `      - Makna: Mandat kepemimpinan untuk mengelola, memakmurkan, dan menjaga kelestarian alam semesta serta menegakkan keadilan di muka bumi (dimensi horizontal / Hablun minannas wa minal 'alam).\n` +
      `      - Dalil: QS Al-Baqarah: 30: "Inni ja'ilun fil ardhi khalifah" dan QS Hud: 61: "Huwa ansya'akum minal ardhi wasta'marakum fiiha" (Dia telah menciptakan kamu dari bumi dan meminta kamu memakmurkannya).\n\n` +
      `b. Integrasi Konkret bagi Mahasiswa Teknik/Vokasi:\n` +
      `   - Dimensi 'Abdullah: Melandasi setiap niat belajar dan riset teknologi dengan nilai ibadah dan tauhid; menjaga shalat lima waktu di sela kesibukan laboratorium; menjauhi kecurangan akademis (plagiarisme, fabrikasi data, kecurangan ujian) sebagai bukti integritas moral hamba Allah.\n` +
      `   - Dimensi Khalifatullah: Mengembangkan inovasi teknologi rekayasa yang bermanfaat bagi kemaslahatan masyarakat banyak (misalnya: merancang sistem otomatisasi hemat energi, teknologi pengolahan air bersih, atau aplikasi keamanan siber); menolak menciptakan teknologi yang merusak lingkungan (*fasad fil ardh*) atau merugikan kemanusiaan.`,
    rubric: [
      { aspect: "Penjelasan makna hakiki 'Abdullah dan dalil QS Adz-Dzariyat: 56", score: 25 },
      { aspect: "Penjelasan makna hakiki Khalifatullah dan dalil QS Al-Baqarah: 30 / Hud: 61", score: 25 },
      { aspect: "Penerapan konkret dimensi 'Abdullah dalam dunia mahasiswa teknik", score: 25 },
      { aspect: "Penerapan konkret dimensi Khalifatullah dalam inovasi teknologi ramah lingkungan", score: 25 }
    ]
  },
  {
    id: 2,
    topic: "IPTEKS: Paradigma Ulul Albab Menghadapi AI",
    prompt: `Al-Qur'an dalam QS Ali 'Imran ayat 190-191 menggariskan karakteristik cendekiawan Muslim sejati dengan sebutan 'Ulul Albab'.\n` +
      `a. Bedah dan analisislah dua pilar utama (Dzikir dan Fikir) yang membentuk kepribadian Ulul Albab berdasarkan ayat tersebut!\n` +
      `b. Bagaimana paradigma Ulul Albab dapat memandu para pengembang teknologi informasi dalam menyikapi disrupsi kecerdasan buatan (Artificial Intelligence) agar tidak melanggar etika kemanusiaan dan nilai-nilai ketuhanan?`,
    idealAnswer: `Analisis Paradigma Ulul Albab:\n\n` +
      `a. Dua Pilar Utama Kepribadian Ulul Albab (QS Ali Imran: 190-191):\n` +
      `   1. Pilar Dzikir (Spiritualitas & Nilai Etik Ketuhanan):\n` +
      `      - Tercermin dari frasa: "Alladzina yadzkurunallaha qiyaman wa qu'udan wa 'ala junubihim" (mengingat Allah sambil berdiri, duduk, atau berbaring).\n` +
      `      - Makna: Keterhubungan batin tanpa henti kepada Allah SWT dalam segala situasi hidup. Pilar ini melahirkan kepekaan nurani, ketakutan berbuat dosa, integritas etis, dan orientasi aksiologis bahwa ilmu pengetahuan harus bernilai manfaat akhirat.\n` +
      `   2. Pilar Fikir (Rasionalitas Saintifik & Riset Empiris):\n` +
      `      - Tercermin dari frasa: "Wa yatafakkaruna fi khalqis samawati wal ardh" (memikirkan/mengkaji penciptaan langit dan bumi).\n` +
      `      - Makna: Pengerahan daya nalar intelektual, pengamatan objektif, riset laboratorium, dan pembuktian matematis terhadap sunnatullah di alam raya.\n` +
      `   - Sintesis Aksiologis: Kedua pilar ini berpadu melahirkan pengakuan: "Rabbana ma khalaqta hadza bathila" (Ya Tuhan kami, tidaklah Engkau menciptakan semua ini sia-sia). Sains tidak boleh bebas nilai (value-free), melainkan terikat nilai tauhid.\n\n` +
      `b. Panduan Menghadapi Disrupsi AI (Kecerdasan Buatan):\n` +
      `   - Fikir (Penguasaan Sains AI): Peneliti Muslim tidak boleh apatis terhadap AI, melainkan wajib menguasai algoritma, machine learning, dan arsitektur data mutakhir agar umat Islam berdaulat secara digital dan tidak sekadar menjadi konsumen pasif.\n` +
      `   - Dzikir (Benteng Etika & Kemanusiaan): Mengendalikan AI agar tidak dimanfaatkan untuk kejahatan (seperti deepfake manipulatif, hoaks penyesat publik, senjata otonom pemusnah, atau eksploitasi data pribadi). Menempatkan AI hanya sebagai instrumen pembantu manusia (alat fasilitator), bukan menggantikan eksistensi moral manusia atau meniadakan keimanan kepada kekuasaan mutlak Allah SWT.`,
    rubric: [
      { aspect: "Analisis pilar Dzikir dan dalil tekstual", score: 25 },
      { aspect: "Analisis pilar Fikir dan telaah sunnatullah", score: 25 },
      { aspect: "Sintesis kesadaran 'Rabbana ma khalaqta hadza bathila'", score: 20 },
      { aspect: "Strategi implementasi etika pengembangan teknologi AI", score: 30 }
    ]
  },
  {
    id: 3,
    topic: "Hukum Islam: Implementasi Maqashid Asy-Syari'ah",
    prompt: `Ulama ushul fiqih merumuskan bahwa seluruh syariat Islam diturunkan untuk mewujudkan kemaslahatan hamba yang terangkum dalam 'Al-Kulliyyat Al-Khams' (Lima Prinsip Pokok Maqashid Asy-Syari'ah).\n` +
      `Sebutkan kelima prinsip pokok tersebut, jelaskan maknanya masing-masing, dan berikan satu contoh implementasi nyatanya dalam konteks hukum modern atau keselamatan kerja industri!`,
    idealAnswer: `Penjabaran Al-Kulliyyat Al-Khams (Maqashid Asy-Syari'ah):\n\n` +
      `1. Hifzh ad-Din (Memelihara Agama):\n` +
      `   - Makna: Menjaga kemurnian akidah, kebebasan beribadah, dan perlindungan syiar Islam dari penyimpangan dan penistaan.\n` +
      `   - Implementasi: Menjamin fasilitas dan waktu shalat bagi pekerja pabrik saat pergantian jam kerja (shift); perlindungan hukum bagi kebebasan beribadah.\n\n` +
      `2. Hifzh an-Nafs (Memelihara Jiwa/Nyawa):\n` +
      `   - Makna: Melindungi hak kelangsungan hidup manusia dari pembunuhan, penyiksaan, dan bahaya fisik.\n` +
      `   - Implementasi: Kewajiban standar K3 (Keselamatan dan Kesehatan Kerja), penggunaan alat pelindung diri (helm, sepatu proyek) di lapangan kerja teknik, serta pelarangan aborsi ilegal.\n\n` +
      `3. Hifzh al-'Aql (Memelihara Akal Pikiran):\n` +
      `   - Makna: Menjaga fungsi akal sehat dari segala hal yang dapat merusak daya nalar, kesadaran, dan sel otak.\n` +
      `   - Implementasi: Pengharaman total minuman beralkohol, narkotika, psikotropika, serta zat adiktif perusak sel saraf di lingkungan kerja dan kampus.\n\n` +
      `4. Hifzh an-Nasl (Memelihara Keturunan & Kehormatan Keluarga):\n` +
      `   - Makna: Menjaga kebersihan silsilah nasab, kehormatan keluarga, dan pencegahan degradasi moral seksual.\n` +
      `   - Implementasi: Pensyariatan pernikahan yang sah, pencatatan nikah resmi, pengharaman perzinaan, prostitusi, dan pergaulan bebas.\n\n` +
      `5. Hifzh al-Mal (Memelihara Harta Kekayaan):\n` +
      `   - Makna: Melindungi hak kepemilikan harta halal dari kezaliman, perampasan, penipuan, dan manipulasi ekonomi.\n` +
      `   - Implementasi: Pengharaman pencurian, korupsi, suap (risywah), riba, monopoli zalim, serta regulasi keamanan siber perbankan terhadap pembobolan rekening nasabah.`,
    rubric: [
      { aspect: "Penyebutan dan penjelasan Hifzh ad-Din dan Hifzh an-Nafs", score: 40 },
      { aspect: "Penyebutan dan penjelasan Hifzh al-'Aql, an-Nasl, dan al-Mal", score: 40 },
      { aspect: "Kualitas dan relevansi contoh implementasi di dunia industri modern", score: 20 }
    ]
  },
  {
    id: 4,
    topic: "HAM dalam Islam: Analisis Piagam Madinah",
    prompt: `Piagam Madinah (Mitsaq al-Madinah) tahun 622 M diakui sebagai piagam konstitusi tertulis paling maju pada zamannya.\n` +
      `a. Jelaskan latar belakang sosiopolitik dirumuskannya Piagam Madinah oleh Nabi Muhammad SAW!\n` +
      `b. Analisislah tiga pasal penting dalam Piagam Madinah yang mencerminkan prinsip pluralisme, kebebasan beragama, dan kesetaraan warga negara!`,
    idealAnswer: `Analisis Piagam Madinah:\n\n` +
      `a. Latar Belakang Sosiopolitik:\n` +
      `   - Sebelum kedatangan Rasulullah SAW, masyarakat Yatsrib (Madinah) berada dalam situasi perpecahan horizontal berkepanjangan. Terjadi perang saudara puluhan tahun antarsuku Arab (Bani Aus dan Bani Khazraj, puncaknya Perang Bu'ats).\n` +
      `   - Selain suku Arab, terdapat populasi signifikan kaum Yahudi (Bani Qainuqa', Bani Nadhir, Bani Quraizhah) serta kabilah-kabilah sekutu yang sering saling mencurigai.\n` +
      `   - Setelah hijrah tahun 622 M, Nabi Muhammad SAW bertindak sebagai mediator dan negarawan agung untuk menyatukan masyarakat majemuk tersebut ke dalam suatu tatanan politik hukum yang adil, stabil, dan melindungi seluruh golongan melalui kontrak sosial tertulis: Piagam Madinah.\n\n` +
      `b. Tiga Prinsip Fundamental dalam Naskah Piagam Madinah:\n` +
      `   1. Konsep Kesatuan Bangsa Inklusif (Ummah Wahidah):\n` +
      `      - Bunyi klausul: Kaum Mukminin dari Quraisy (Muhajirin), Yatsrib (Anshar), dan siapa saja yang mengikuti mereka serta berjuang bersama mereka adalah 'satu umat yang berbeda dari komunitas manusia lainnya' (ummatun wahidatun min dunin nas).\n` +
      `      - Makna: Melebur ikatan primordial kesukuan menjadi ikatan kewarganegaraan politik bersama.\n` +
      `   2. Jaminan Kebebasan Beragama dan Berkeyakinan:\n` +
      `      - Bunyi klausul: "Wa inna yahuda bani 'auf ummatun ma'al mu'minin, lil-yahudi dinuhum wa lil-muslimina dinuhum" (Bagi kaum Yahudi agama mereka, dan bagi kaum Muslimin agama mereka).\n` +
      `      - Makna: Pengakuan hukum atas eksistensi agama Yahudi tanpa diskriminasi, pemaksaan ibadah, atau intimidasi teologis.\n` +
      `   3. Kesetaraan di Depan Hukum dan Tanggung Jawab Kolektif Bela Negara:\n` +
      `      - Bunyi klausul: Siapa pun warga Madinah (baik Muslim maupun Yahudi) yang berbuat zalim atau melanggar hukum, ia tidak boleh dilindungi oleh keluarganya sendiri dan wajib diadili.\n` +
      `      - Seluruh warga negara berkewajiban saling tolong-menolong memikul biaya pertahanan jika Madinah diserang pihak musuh dari luar.`,
    rubric: [
      { aspect: "Penjelasan latar belakang konflik Madinah (Aus, Khazraj, Yahudi)", score: 30 },
      { aspect: "Analisis prinsip Ummah Wahidah (kesatuan bangsa inklusif)", score: 25 },
      { aspect: "Analisis jaminan kebebasan beragama dan toleransi", score: 25 },
      { aspect: "Analisis supremasi hukum dan kewajiban pertahanan kolektif", score: 20 }
    ]
  },
  {
    id: 5,
    topic: "Sumber Ajaran: Hubungan Sunnah terhadap Al-Qur'an",
    prompt: `As-Sunnah menempati posisi sumber ajaran Islam kedua setelah Al-Qur'an. Para ulama merumuskan tiga fungsi pokok Sunnah terhadap Al-Qur'an, yaitu: Bayan Taqrir (Taukid), Bayan Tafshil (Tafsir), dan Bayan Tasyri' (Itsbat).\n` +
      `Jelaskan pengertian ketiga fungsi tersebut dan berikan masing-masing satu contoh hukum syariat aplikatifnya!`,
    idealAnswer: `Penjelasan Tiga Fungsi Pokok As-Sunnah terhadap Al-Qur'an:\n\n` +
      `1. Bayan Taqrir / Taukid (Memperkuat dan Mengukuhkan):\n` +
      `   - Pengertian: Hadis Nabi datang untuk mengukuhkan, menegaskan, dan memperkuat kepastian hukum yang sudah tercantum secara jelas dalam ayat Al-Qur'an, sehingga hukum tersebut memiliki dua dalil sekaligus (nash Al-Qur'an dan hadis).\n` +
      `   - Contoh: Perintah berpuasa Ramadhan dalam QS Al-Baqarah: 183 dikukuhkan oleh sabda Nabi SAW: "Shumu li ru'yatihi wa afthiru li ru'yatihi" (Berpuasalah kalian karena melihat hilal dan berbukalah karena melihat hilal - HR Bukhari).\n\n` +
      `2. Bayan Tafshil / Tafsir (Menjelaskan dan Merinci):\n` +
      `   - Pengertian: Hadis berfungsi merinci ayat yang masih bersifat global (mujmal), mengkhususkan ayat yang bersifat umum (takhshis al-'amm), atau membatasi ayat yang bersifat mutlak (taqyid al-muthlaq).\n` +
      `   - Contoh: Al-Qur'an memerintahkan "Aqimush shalah" (Dirikanlah shalat) secara global tanpa menyebut jumlah rakaat, bacaan, dan rukun ruku'-sujudnya. Hadis Nabi datang merinci seluruh tata cara tersebut: "Shallu kama ra'aitumuni ushalli" (Shalatlah kalian sebagaimana kalian melihat aku shalat - HR Bukhari).\n\n` +
      `3. Bayan Tasyri' / Itsbat (Menetapkan Hukum Baru):\n` +
      `   - Pengertian: Hadis menetapkan hukum syariat baru yang ketentuannya belum disebutkan secara eksplisit atau tidak disinggung sama sekali dalam teks Al-Qur'an.\n` +
      `   - Contoh: Larangan memakan binatang buas bertaring dan burung bercakar tajam (HR Muslim); pengharaman memakai perhiasan emas dan kain sutra bagi laki-laki Muslim (HR Abu Dawud); serta keharaman memadu seorang wanita bersama bibinya dari jalur ayah maupun ibu (HR Bukhari). Ketentuan hukum ini murni ditetapkan melalui sunnah Rasulullah SAW.`,
    rubric: [
      { aspect: "Penjelasan Bayan Taqrir beserta contoh aplikatif", score: 30 },
      { aspect: "Penjelasan Bayan Tafshil beserta contoh aplikatif shalat/zakat", score: 35 },
      { aspect: "Penjelasan Bayan Tasyri' beserta contoh aplikatif hukum baru", score: 35 }
    ]
  },
  {
    id: 6,
    topic: "Kritik Hadis: Syarat Keabsahan Hadis Shahih",
    prompt: `Para muhadditsin menetapkan lima kriteria ilmiah yang sangat ketat untuk menentukan keshahihan sebuah hadis Nabi.\n` +
      `a. Sebutkan kelima syarat hadis shahih tersebut!\n` +
      `b. Jelaskan perbedaan mendasar antara kriteria ''Adalah' dan 'Dhabith' pada seorang perawi hadis!\n` +
      `c. Mengapa hadis yang mengandung 'Syudzudz' dan ''Illah' tidak dapat diterima sebagai hadis shahih?`,
    idealAnswer: `Analisis Kritik Keshahihan Hadis:\n\n` +
      `a. Lima Syarat Hadis Shahih:\n` +
      `   1. Ittishal as-Sanad (Sanad bersambung tanpa putus dari mukharrij hingga Rasulullah SAW).\n` +
      `   2. 'Adalat ar-Ruwat (Seluruh perawi dalam rantai sanad memiliki sifat adil / berintegritas takwa moral).\n` +
      `   3. Dhabt ar-Ruwat (Seluruh perawi memiliki tingkat kedhabithan / ketelitian hafalan dan catatan yang sempurna).\n` +
      `   4. 'Adam asy-Syudzudz (Terbebas dari kejanggalan atau pertentangan dengan perawi yang lebih terpercaya).\n` +
      `   5. 'Adam al-'Illah (Terbebas dari cacat tersembunyi yang merusak keshahihan hadis).\n\n` +
      `b. Perbedaan Kriteria ''Adalah' dan 'Dhabith':\n` +
      `   - Sifat 'Adil ('Adalah): Menilai dimensi spiritual, moral, dan integritas kepribadian perawi. Kriterianya: beragama Islam, baligh, berakal sehat, bertakwa (menjauhi dosa besar dan tidak terus-menerus melakukan dosa kecil), serta memelihara kehormatan diri (*muru'ah*).\n` +
      `   - Sifat Dhabith (Dhabth): Menilai kapasitas intelektual dan ketelitian teknis perawi. Kriterianya: memiliki daya ingat yang kokoh sejak mendengar riwayat hingga meriwayatkannya kembali (*dhabt ash-shadr*), atau memiliki buku catatan naskah hadis yang terverifikasi dan terjaga dari perubahan/pemalsuan pihak luar (*dhabt al-kitab*).\n\n` +
      `c. Alasan Penolakan Akibat Syudzudz dan 'Illah:\n` +
      `   - Syudzudz (Kejanggalan): Terjadi ketika seorang perawi yang tsiqah (terpercaya) meriwayatkan suatu lafal yang bertentangan dengan periwayatan orang-orang yang jauh lebih banyak atau lebih tsiqah darinya. Kontradiksi ini mengindikasikan adanya kekeliruan personal perawi tersebut.\n` +
      `   - 'Illah (Cacat Tersembunyi): Adanya cacat yang samar dalam sanad atau matan (misalnya: hadis tampak bersambung, padahal setelah diteliti mendalam ada perawi yang tidak pernah bertemu gurunya / mursal khafi). Cacat samar ini meruntuhkan otentisitas penukilan sehingga hadis tidak sah dinisbatkan secara mutlak kepada Nabi.`,
    rubric: [
      { aspect: "Penyebutan 5 syarat hadis shahih secara tepat", score: 30 },
      { aspect: "Pembedaan mendalam antara sifat 'Adalah dan Dhabith", score: 40 },
      { aspect: "Penjelasan konseptual 'Syudzudz' dan ''Illah' serta alasan penolakannya", score: 30 }
    ]
  },
  {
    id: 7,
    topic: "Ijtihad: Studi Kasus Qiyas dan Mu'amalah Modern",
    prompt: `Dalam dunia transaksi keuangan modern, muncul praktik baru seperti aset kripto (cryptocurrency), pinjaman daring ilegal (pinjol), dan paylater.\n` +
      `a. Jelaskan definisi Qiyas dan sebutkan empat rukun Qiyas!\n` +
      `b. Buatlah analogi Qiyas untuk menetapkan hukum keharaman praktik 'Bunga Bank / Pinjol Rentenir' dengan merujuk pada keharaman Riba dalam Al-Qur'an! Identifikasi secara rinci mana yang menjadi: Ashl, Far'u, Hukum Ashl, dan 'Illat-nya!`,
    idealAnswer: `Analisis Qiyas dan Studi Kasus Mu'amalah:\n\n` +
      `a. Definisi dan Empat Rukun Qiyas:\n` +
      `   - Definisi: Qiyas menurut ushul fiqih adalah mempersamakan hukum suatu kasus baru yang tidak ada nash hukumnya dengan kasus pokok yang sudah ada ketetapan hukum nashnya, karena adanya kesamaan alasan/motif hukum ('illat) di antara keduanya.\n` +
      `   - Empat Rukun Qiyas:\n` +
      `     1. Ashl (Kasus dasar/pokok yang ada nash hukumnya dalam Al-Qur'an atau Hadis).\n` +
      `     2. Far'u (Kasus cabang/baru yang hendak ditetapkan status hukumnya).\n` +
      `     3. Hukm al-Ashl (Status hukum syara' yang sudah pasti pada kasus pokok).\n` +
      `     4. 'Illat (Sifat atau motif logis yang menjadi penyebab ditetapkannya hukum pada ashl dan sifat itu terbukti ada pula pada far'u).\n\n` +
      `b. Analisis Qiyas Bunga Pinjol Rentenir / Riba Nasi'ah:\n` +
      `   1. Ashl: Praktik Riba Nasi'ah jahiliyah pada piutang tempo yang diharamkan secara sharih dalam QS Al-Baqarah: 275 ("Wa ahallallahul bai'a wa harramar riba") dan QS Ali Imran: 130.\n` +
      `   2. Far'u: Praktik penarikan bunga berlipat ganda pada pinjaman daring ilegal (pinjol rentenir modern).\n` +
      `   3. Hukm al-Ashl: Haram mutlak (termasuk dosa besar yang diperangi Allah dan Rasul-Nya).\n` +
      `   4. 'Illat (Rasio Legis): Adanya tambahan nominal pembayaran utang yang dipersyaratkan semata-mata karena pertambahan waktu tempo pembayaran (ziyadah masyruthah muqabala al-ajal) yang mengeksploitasi pihak peminjam dan mengandung kezaliman ekonomi (*aklu amwalin nas bil bathil*).\n` +
      `   - Kesimpulan Hukum: Praktik bunga pinjol rentenir dihukumi HARAM berdasarkan Qiyas yang sah terhadap riba nasi'ah.`,
    rubric: [
      { aspect: "Definisi Qiyas dan ketepatan penyebutan 4 rukun", score: 35 },
      { aspect: "Identifikasi Ashl, Far'u, dan Hukum Ashl pada kasus bunga pinjol", score: 35 },
      { aspect: "Ketepatan perumusan 'Illat kesamaan sifat eksploitasi riba", score: 30 }
    ]
  },
  {
    id: 8,
    topic: "Ijtihad: Metode Maslahah Mursalah & Sadduz Dzari'ah",
    prompt: `Ketika menghadapi problematika masyarakat modern yang tidak diatur secara eksplisit dalam nash, para mujtahid menggunakan metode 'Maslahah Mursalah' dan 'Sadduz Dzari'ah'.\n` +
      `a. Jelaskan pengertian Maslahah Mursalah dan sebutkan syarat sah digunakannya metode ini agar tidak disalahgunakan untuk melegalkan nafsu pribadi!\n` +
      `b. Jelaskan konsep 'Sadduz Dzari'ah' (menutup pintu bahaya) dan berikan contoh penerapannya dalam regulasi perlindungan data pribadi atau teknologi informasi!`,
    idealAnswer: `Penjelasan Maslahah Mursalah dan Sadduz Dzari'ah:\n\n` +
      `a. Maslahah Mursalah:\n` +
      `   - Pengertian: Kemaslahatan umum yang tidak disinggung oleh nash syariat secara khusus, baik perintah maupun larangan, namun keberadaannya sejalan dengan tujuan-tujuan umum syariat (*Maqashid Asy-Syari'ah*).\n` +
      `   - Tiga Syarat Sah Maslahah Mursalah (menurut Imam Malik dan Al-Ghazali):\n` +
      `     1. Maslahat Hakiki (*Maslahah Haqiqiyyah*): Kemaslahatan itu nyata dan objektif membawa kebaikan publik, bukan sekadar ilusi atau dugaan subjektif pembuat kebijakan.\n` +
      `     2. Maslahat Umum (*Maslahah 'Ammah*): Dirasakan oleh masyarakat luas, bukan untuk membela kepentingan privilese individu, kelompok penguasa, atau dinasti tertentu.\n` +
      `     3. Tidak Bertentangan dengan Nash (*'Adam Mukhalafah an-Nash*): Kebijakan maslahat tersebut sama sekali tidak boleh menabrak ayat Al-Qur'an, Hadis sahih, atau Ijma' ulama yang pasti (*qath'i*).\n\n` +
      `b. Sadduz Dzari'ah:\n` +
      `   - Pengertian: Menutup, melarang, atau memblokir jalan/sarana yang pada dasarnya mubah, tetapi secara dominan dan nyata dapat mengantarkan kepada perbuatan yang haram atau menimbulkan kerusakan parah (*mafsadah*).\n` +
      `   - Implementasi pada Teknologi Informasi / Data Pribadi:\n` +
      `     Memasang kamera pengawas di ruang ganti pakaian atau menjual basis data pribadi pengguna tanpa izin adalah terlarang melalui instrumen Sadduz Dzari'ah. Meskipun merekam atau mengumpulkan data pada dasarnya aktivitas teknis netral, jika sarana itu membuka peluang terjadinya pemerasan, pencurian identitas, pelecehan martabat, atau pembobolan finansial (*Hifzh al-'Irdh* dan *Hifzh al-Mal*), maka praktik jual-beli data mentah dan celah keamanan tersebut wajib diharamkan dan diblokir sedini mungkin.`,
    rubric: [
      { aspect: "Penjelasan Maslahah Mursalah dan 3 syarat validitasnya", score: 40 },
      { aspect: "Penjelasan konsep Sadduz Dzari'ah (menutup celah kerusakan)", score: 30 },
      { aspect: "Penerapan contoh konkret Sadduz Dzari'ah pada teknologi informasi", score: 30 }
    ]
  },
  {
    id: 9,
    topic: "Demokrasi dalam Islam: Prinsip Musyawarah & Supremasi Hukum",
    prompt: `Sistem politik dalam Islam memiliki prinsip-prinsip luhur yang sejalan dengan nilai-nilai demokrasi universal dan antikorupsi.\n` +
      `a. Bandingkan prinsip 'Asy-Syura' dalam Islam dengan konsep Demokrasi Liberal Barat ditinjau dari sumber kedaulatan hukum dan batas kewenangannya!\n` +
      `b. Uraikan bagaimana prinsip 'Al-Amanah' dan 'Al-'Adalah' dapat menjadi solusi pencegahan korupsi, kolusi, dan nepotisme (KKN) di lingkungan birokrasi pemerintahan!`,
    idealAnswer: `Komparasi Demokrasi dan Prinsip Antikorupsi Islam:\n\n` +
      `a. Perbandingan Asy-Syura vs Demokrasi Liberal Barat:\n` +
      `   1. Sumber Kedaulatan Tertinggi:\n` +
      `      - Demokrasi Liberal Barat: Kedaulatan tertinggi berada di tangan rakyat secara mutlak (*Vox Populi Vox Dei*). Parlemen dapat melegalkan apa saja sepanjang disetujui suara mayoritas (misal: melegalkan aborsi bebas, LGBT, atau minuman keras).\n` +
      `      - Asy-Syura dalam Islam: Kedaulatan tertinggi (*Hakimiyyah*) berada di tangan Allah SWT. Rakyat memegang kedaulatan mandat eksekutif/kebijakan (*khilafah insaniyyah*). Musyawarah hanya berlaku pada ranah ijtihadiyyah/kebijakan publik, dan TIDAK BOLEH mengubah hukum yang sudah qath'i dalam syariat.\n` +
      `   2. Orientasi Nilai:\n` +
      `      - Demokrasi Liberal mengedepankan hak individu sekuler dan kebebasan tanpa batas moral agama.\n` +
      `      - Asy-Syura mengedepankan kemaslahatan bersama yang dipagari oleh nilai tauhid, akhlak luhur, dan pertanggungjawaban akhirat.\n\n` +
      `b. Penerapan Al-Amanah dan Al-'Adalah Mencegah KKN:\n` +
      `   1. Prinsip Al-Amanah (Integritas Mandat):\n` +
      `      - Pejabat menyadari bahwa jabatan adalah titipan Ilahi, bukan modal memperkaya diri atau keluarga. Kesadaran ini memblokir korupsi anggaran dan suap (*risywah*). Sabda Nabi: "Barang siapa mengangkat seseorang karena faktor kekerabatan/nepotisme, padahal ada yang lebih cakap, maka ia telah mengkhianati Allah, Rasul-Nya, dan kaum mukminin" (HR Hakim).\n` +
      `   2. Prinsip Al-'Adalah (Keadilan Hukum Imparsial):\n` +
      `      - Hukum ditegakkan tanpa tebang pilih. Setiap pelaku penyelewengan ditindak tegas tanpa memandang apakah ia pejabat tinggi atau rakyat jelata, sebagaimana teladan Nabi SAW saat menegaskan hukum pencurian kepada bangsawan Makhzumiyah.`,
    rubric: [
      { aspect: "Komparasi sumber kedaulatan Asy-Syura vs Demokrasi Barat", score: 40 },
      { aspect: "Penjelasan peran Al-Amanah dalam membasmi nepotisme dan korupsi", score: 30 },
      { aspect: "Penjelasan peran Al-'Adalah dalam supremasi hukum antikorupsi", score: 30 }
    ]
  },
  {
    id: 10,
    topic: "Seni dalam Perspektif Islam: Estetika & Batasan Syar'i",
    prompt: `Islam sering kali dituduh anti-seni oleh sebagian kalangan orientalis, padahal peradaban Islam melahirkan warisan seni arsitektur dan kaligrafi yang mengagumkan dunia.\n` +
      `a. Jelaskan bagaimana pandangan Islam mengenai fitrah keindahan dan seni berdasarkan dalil hadis riwayat Muslim!\n` +
      `b. Jelaskan tiga batasan syar'i (*dhowabith syar'iyyah*) dalam berkarya seni (seni rupa, musik, maupun sastra) agar tetap berada dalam koridor ajaran Islam!`,
    idealAnswer: `Pandangan Islam terhadap Seni dan Batasan Syar'i:\n\n` +
      `a. Pandangan Islam terhadap Fitrah Keindahan:\n` +
      `   - Islam adalah agama yang selaras dengan fitrah manusia, termasuk naluri mengagumi dan mengekspresikan keindahan (*al-jamal*).\n` +
      `   - Landasan hadis utama: Sabda Rasulullah SAW: "Innallaha jamilun yuhibbul jamal" (Sesungguhnya Allah itu Mahaindah dan mencintai keindahan - HR. Muslim).\n` +
      `   - Alam semesta dengan keteraturan kosmik, warna-warni flora-fauna, dan melodi alam diciptakan Allah dengan estetika sempurna. Oleh karena itu, apresiasi seni pada hukum asalnya adalah MUBAH (boleh) dan bernilai ibadah jika digunakan untuk mengagungkan ciptaan Allah dan melembutkan hati nurani.\n\n` +
      `b. Tiga Batasan Syar'i (Dhowabith Syar'iyyah) dalam Berkesenian:\n` +
      `   1. Tidak Mengarah pada Kemusyrikan (*Tauhid al-Aqidah*):\n` +
      `      - Seni tidak boleh memvisualisasikan wujud Allah secara jasmani, tidak menggambarkan rupa para nabi dengan cara yang merendahkan, serta tidak membuat patung atau lukisan makhluk bernyawa yang ditujukan untuk disembah atau dikultuskan (*tasybih/ta'dzim*). Oleh karena itu, seni Islam berkembang pesat pada seni kaligrafi wahyu dan ornamen geometris abstrak (*arabesque*).\n` +
      `   2. Bebas dari Pornografi dan Dekadensi Moral (*Iffah wa Taharah*):\n` +
      `      - Karya seni (syair sastra, koreografi, musik, film) tidak boleh mengeksploitasi aurat, sensualitas vulgar, memicu syahwat liar, atau mempromosikan gaya hidup maksiat dan kekerasan.\n` +
      `   3. Tidak Melalaikan dari Kewajiban Pokok Agama (*'Adam at-Talhi*):\n` +
      `      - Menikmati atau menggeluti karya seni tidak boleh membuat seseorang kecanduan sehingga meninggalkan shalat, mengabaikan tanggung jawab keluarga, atau menghambur-hamburkan harta secara tabdzir/israf. Seni harus menjadi sarana pencerahan ruhani, bukan candu pelalaian jiwa.`,
    rubric: [
      { aspect: "Penjelasan fitrah keindahan dan dalil hadis riwayat Muslim", score: 35 },
      { aspect: "Penjelasan batasan tauhid dan penghindaran kemusyrikan", score: 25 },
      { aspect: "Penjelasan batasan etika moral (menolak pornografi/sensualitas)", score: 20 },
      { aspect: "Penjelasan batasan tidak melalaikan kewajiban pokok syariat", score: 20 }
    ]
  }
];

module.exports = { essayQuestions };
