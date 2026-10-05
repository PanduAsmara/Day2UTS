// UTS Preparation Platform - App Controller (MIXD Minimalist Editorial Experience)

class AppController {
  constructor() {
    this.currentTab = 'materi';
    this.selectedModuleFilter = 'all'; // for Materi subnav: 'all' or 1,2,3,4
    this.materiSearchQuery = '';
  }

  init() {
    // Connect QuizEngine callback to re-render views on state change
    window.QuizEngine.onStateChangeCallback = () => {
      if (this.currentTab === 'quiz') {
        this.renderQuizView();
      } else if (this.currentTab === 'tf') {
        this.renderTfView();
      }
    };

    // Initialize with Bahasa Indonesia and start at 'materi'
    this.switchSubject('BINDO');
  }

  /* =========================================================================
     SUBJECT SWITCHER (TOP LEFT)
     ========================================================================= */
  switchSubject(subjectCode) {
    window.QuizEngine.setSubject(subjectCode);
    const isBindo = (subjectCode === 'BINDO');

    // Update body theme class
    document.body.className = isBindo ? 'theme-bindo flex flex-col min-h-screen' : 'theme-agama flex flex-col min-h-screen';

    // Update top-left switcher buttons
    const bindoBtn = document.getElementById('switch-btn-bindo');
    const agamaBtn = document.getElementById('switch-btn-agama');
    if (bindoBtn && agamaBtn) {
      if (isBindo) {
        bindoBtn.className = 'subject-toggle-btn active';
        agamaBtn.className = 'subject-toggle-btn';
      } else {
        bindoBtn.className = 'subject-toggle-btn';
        agamaBtn.className = 'subject-toggle-btn active';
      }
    }

    // Update Brand Titles
    const brandTitle = document.getElementById('brand-title');
    const brandSub = document.getElementById('brand-subtitle');
    if (brandTitle) brandTitle.textContent = isBindo ? 'BAHASA INDONESIA' : 'AGAMA ISLAM';
    if (brandSub) brandSub.textContent = isBindo ? 'UTS PREP • PNJ 2026' : 'PAI PERGURUAN TINGGI • PNJ 2026';

    // Update Hero Statement
    const heroTag = document.getElementById('hero-tag');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const navTf = document.getElementById('nav-btn-tf');

    if (isBindo) {
      if (heroTag) heroTag.textContent = 'KURIKULUM & MATERI RESMI PNJ 2026';
      if (heroTitle) heroTitle.innerHTML = 'BAHASA PERSATUAN,<br>BAHASA NEGARA.';
      if (heroDesc) {
        heroDesc.innerHTML = 'Platform pembelajaran dan simulasi UTS terlengkap untuk mata kuliah <strong>Bahasa Indonesia</strong>. Dilengkapi materi komprehensif Kelompok 1–4, ringkasan kata kunci, 30 soal PG analisis teks dengan bedah alasan opsi benar dan salah, 10 soal benar/salah EYD V, dan 10 soal esai analitis.';
      }
      if (navTf) navTf.style.display = 'inline-block';
    } else {
      if (heroTag) heroTag.textContent = 'MATA KULIAH PENGEMBANGAN KEPRIBADIAN (MPK)';
      if (heroTitle) heroTitle.innerHTML = 'INTEGRASI IMAN,<br>ILMU & AMAL.';
      if (heroDesc) {
        heroDesc.innerHTML = 'Platform pembelajaran dan simulasi UTS terlengkap untuk mata kuliah <strong>Pendidikan Agama Islam (PAI - PNJ)</strong>. Membahas 4 pokok bahasan utama: Hakikat Manusia & Tanggung Jawabnya, IPTEKS dalam Islam (Ulul Albab & I\'jaz \'Ilmi), Sistem Hukum/HAM/Demokrasi (Piagam Madinah & Maqashid Syari\'ah), serta Sumber Ajaran Islam (Al-Qur\'an, Hadis, Ijtihad). Dilengkapi 30 soal PG & 10 soal esai studi kasus.';
      }
      if (navTf) {
        navTf.style.display = 'none';
        if (this.currentTab === 'tf') {
          this.switchTab('materi');
        }
      }
    }

    // Reset module filter on subject change
    this.selectedModuleFilter = 'all';
    this.renderModuleSubnav();
    this.renderCurrentTab();
  }

  /* =========================================================================
     TAB NAVIGATION
     ========================================================================= */
  switchTab(tabId) {
    this.currentTab = tabId;

    // Update active underline on nav links
    const tabs = ['materi', 'quiz', 'tf', 'essay', 'summary'];
    tabs.forEach(t => {
      const btn = document.getElementById(`nav-btn-${t}`);
      const section = document.getElementById(`tab-${t}`);
      if (btn) {
        if (t === tabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
      if (section) {
        section.classList.toggle('hidden', t !== tabId);
      }
    });

    this.renderCurrentTab();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCurrentTab() {
    switch (this.currentTab) {
      case 'materi':
        this.renderMateri();
        break;
      case 'quiz':
        this.renderQuizView();
        break;
      case 'tf':
        this.renderTfView();
        break;
      case 'essay':
        this.renderEssayView();
        break;
      case 'summary':
        this.renderSummaryView();
        break;
    }
  }

  /* =========================================================================
     TAB 1: MATERI & MODUL SUBNAVIGATION
     ========================================================================= */
  renderModuleSubnav() {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('module-subnav-container');
    if (!container) return;

    let html = `
      <button onclick="app.setModuleSubnavFilter('all')" class="mod-nav-btn ${this.selectedModuleFilter === 'all' ? 'active' : ''}">
        Semua Modul (1–${dataset.modules.length})
      </button>
    `;

    dataset.modules.forEach(mod => {
      const isActive = (this.selectedModuleFilter === String(mod.id));
      html += `
        <button onclick="app.setModuleSubnavFilter('${mod.id}')" class="mod-nav-btn ${isActive ? 'active' : ''}">
          Modul ${mod.id}: ${mod.title.split(':')[0]}
        </button>
      `;
    });

    container.innerHTML = html;
  }

  setModuleSubnavFilter(modId) {
    this.selectedModuleFilter = modId;
    this.renderModuleSubnav();
    this.renderMateri();
  }

  searchMateri(query) {
    this.materiSearchQuery = query.toLowerCase();
    this.renderMateri();
  }

  renderMateri() {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('materi-content-area');
    if (!container) return;

    let modules = dataset.modules;

    // Filter by subnav pill
    if (this.selectedModuleFilter !== 'all') {
      const idNum = parseInt(this.selectedModuleFilter);
      modules = modules.filter(m => m.id === idNum);
    }

    // Filter by search query
    if (this.materiSearchQuery) {
      const q = this.materiSearchQuery;
      modules = modules.filter(m => {
        const titleMatch = m.title.toLowerCase().includes(q);
        const summaryMatch = m.summary.toLowerCase().includes(q);
        const kwMatch = m.keywords.some(k => k.term.toLowerCase().includes(q) || k.desc.toLowerCase().includes(q));
        const secMatch = m.sections.some(s => s.heading.toLowerCase().includes(q) || s.content.toLowerCase().includes(q));
        return titleMatch || summaryMatch || kwMatch || secMatch;
      });
    }

    if (modules.length === 0) {
      container.innerHTML = `
        <div class="mixd-card p-12 text-center">
          <div class="text-4xl mb-3">🔍</div>
          <h3 class="font-display font-extrabold text-xl text-black">Materi Tidak Ditemukan</h3>
          <p class="text-sm text-black/70 mt-1">Tidak ada hasil yang sesuai dengan kata kunci "${this.materiSearchQuery}".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = modules.map(mod => {
      const keywordsHtml = mod.keywords.map(kw => `
        <div class="p-3.5 rounded-xl border-2 border-black/20 bg-black/5">
          <div class="font-display font-black text-xs uppercase tracking-wider text-black mb-1 flex items-center gap-1.5">
            <span>📌</span> ${kw.term}
          </div>
          <div class="text-xs text-black/80 font-medium leading-relaxed">
            ${kw.desc}
          </div>
        </div>
      `).join('');

      const sectionsHtml = mod.sections.map(sec => `
        <div class="pt-6 border-t-2 border-black/15">
          <h3 class="font-display font-extrabold text-lg sm:text-xl text-black uppercase mb-3 flex items-center gap-2">
            <span>🔹</span> ${sec.heading}
          </h3>
          <div class="text-sm sm:text-[15px] leading-relaxed text-black/90 font-medium whitespace-pre-line space-y-2">
            ${sec.content}
          </div>
        </div>
      `).join('');

      return `
        <article class="mixd-card p-6 sm:p-10 space-y-6">
          
          <!-- Header Bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-black/15">
            <div class="flex items-center gap-2.5">
              <span class="px-3 py-1 bg-black text-white font-display font-black text-xs rounded uppercase tracking-wider">
                MODUL ${mod.id}
              </span>
              <span class="px-3 py-1 bg-black/10 text-black font-bold text-xs rounded uppercase">
                ${mod.presenter}
              </span>
            </div>
            <span class="text-xs font-mono font-bold text-black/60">
              Dokumen Silabus PNJ
            </span>
          </div>

          <!-- Title -->
          <div>
            <h2 class="font-display font-black text-2xl sm:text-3xl text-black uppercase leading-snug">
              ${mod.title}
            </h2>
          </div>

          <!-- Executive Summary Callout -->
          <div class="p-5 sm:p-6 rounded-xl border-2 border-black bg-[#FFFBEA] shadow-[2px_2px_0px_#000]">
            <div class="font-display font-black text-xs uppercase tracking-widest text-black/80 mb-1.5 flex items-center gap-1.5">
              <span>⚡</span> RANGKUMAN EKSEKUTIF MATERI
            </div>
            <div class="text-sm sm:text-base font-semibold text-black leading-relaxed">
              ${mod.summary}
            </div>
          </div>

          <!-- Keywords Grid -->
          <div>
            <div class="font-display font-black text-xs uppercase tracking-wider text-black/70 mb-3 flex items-center gap-2">
              <span>🔑</span> KATA KUNCI & GLOSARIUM POKOK:
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${keywordsHtml}
            </div>
          </div>

          <!-- Detailed Sections -->
          <div class="space-y-6">
            ${sectionsHtml}
          </div>

        </article>
      `;
    }).join('');
  }

  /* =========================================================================
     TAB 2: KUIS SOAL (30 PG) - MODE BELAJAR vs MODE UJIAN
     ========================================================================= */
  setQuizMode(mode) {
    const qe = window.QuizEngine;
    qe.setQuizMode(mode);

    // Update Mode Selector Buttons
    const studyBtn = document.getElementById('mode-study-btn');
    const examBtn = document.getElementById('mode-exam-btn');
    const timerBar = document.getElementById('exam-timer-bar');
    const checkContainer = document.getElementById('study-check-btn-container');

    if (mode === 'study') {
      if (studyBtn) studyBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-white transition-all';
      if (examBtn) examBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 transition-all';
      if (timerBar) timerBar.classList.add('hidden');
      if (checkContainer) checkContainer.style.display = 'block';
    } else {
      if (studyBtn) studyBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-black hover:opacity-75 transition-all';
      if (examBtn) examBtn.className = 'px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-white transition-all';
      if (timerBar) timerBar.classList.remove('hidden');
      if (checkContainer) checkContainer.style.display = 'none';
    }

    this.renderQuizView();
  }

  filterQuizByModule(val) {
    window.QuizEngine.setFilterModule(val);
  }

  shuffleAndRestartQuiz() {
    window.QuizEngine.shuffleCurrentOptions();
    this.renderQuizView();
  }

  renderQuizView() {
    const qe = window.QuizEngine;
    const questions = qe.activeQuestions;
    const currentQ = questions[qe.currentIndex];

    // Exam Score Banner
    const scoreBanner = document.getElementById('exam-score-banner');
    if (scoreBanner) {
      if (qe.isSubmitted) {
        const stats = qe.calculateScore();
        document.getElementById('score-number-display').textContent = stats.score;
        document.getElementById('score-breakdown-text').textContent = 
          `Benar: ${stats.correct} • Salah: ${stats.wrong} • Kosong: ${stats.unattempted} • Waktu: ${stats.timeSpentFormatted}`;
        scoreBanner.classList.remove('hidden');
      } else {
        scoreBanner.classList.add('hidden');
      }
    }

    if (!currentQ) return;

    // Badges & Meta
    const numBadge = document.getElementById('q-number-badge');
    const topicBadge = document.getElementById('q-topic-badge');
    const flagBtn = document.getElementById('q-flag-btn');
    const flagText = document.getElementById('q-flag-text');

    if (numBadge) numBadge.textContent = `SOAL #${qe.currentIndex + 1} DARI ${questions.length}`;
    if (topicBadge) topicBadge.textContent = currentQ.topic || 'Analisis Teks';
    
    const isFlagged = !!qe.flagged[currentQ.id];
    if (flagBtn && flagText) {
      if (isFlagged) {
        flagBtn.className = 'px-3 py-1 rounded-lg border-2 border-black font-display font-bold text-xs flex items-center gap-1.5 bg-amber-400 text-black shadow-sm';
        flagText.textContent = 'Ditandai Ragu';
      } else {
        flagBtn.className = 'px-3 py-1 rounded-lg border-2 border-black font-display font-bold text-xs flex items-center gap-1.5 bg-white text-black hover:bg-black/5';
        flagText.textContent = 'Tandai Ragu';
      }
    }

    // Passage Container
    const passageContainer = document.getElementById('q-passage-container');
    const passageText = document.getElementById('q-passage-text');
    if (currentQ.passage) {
      passageContainer.classList.remove('hidden');
      passageText.textContent = currentQ.passage;
    } else {
      passageContainer.classList.add('hidden');
    }

    // Question Prompt
    const promptText = document.getElementById('q-prompt-text');
    if (promptText) promptText.textContent = currentQ.question;

    // Options Cards
    const optionsContainer = document.getElementById('q-options-container');
    const userSelected = qe.answers[currentQ.id];
    const isRevealedInStudy = (qe.quizMode === 'study' && !!qe.revealedExplanations[currentQ.id]);
    const showAnswers = qe.isSubmitted || isRevealedInStudy;

    optionsContainer.innerHTML = currentQ.options.map(opt => {
      let optClass = 'mixd-option';
      if (userSelected === opt.key) {
        optClass += ' selected';
      }

      if (showAnswers) {
        if (opt.key === currentQ.answer) {
          optClass += ' correct-answer';
        } else if (userSelected === opt.key && userSelected !== currentQ.answer) {
          optClass += ' wrong-answer';
        }
      }

      return `
        <div class="${optClass}" onclick="app.selectQuizOption(${currentQ.id}, '${opt.key}')">
          <div class="mixd-option-letter">${opt.key}</div>
          <div class="text-sm sm:text-[15px] font-semibold leading-relaxed pt-0.5">
            ${opt.text}
          </div>
        </div>
      `;
    }).join('');

    // Detailed Explanation Box
    const explBox = document.getElementById('explanation-box');
    const explContent = document.getElementById('explanation-text-content');
    const explBadge = document.getElementById('explanation-status-badge');

    if (showAnswers) {
      explBox.classList.remove('hidden');
      explContent.textContent = currentQ.explanation;
      if (explBadge) {
        if (userSelected === currentQ.answer) {
          explBadge.className = 'px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider bg-emerald-600 text-white border-2 border-black';
          explBadge.textContent = '✓ JAWABAN ANDA BENAR';
        } else if (userSelected) {
          explBadge.className = 'px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider bg-rose-600 text-white border-2 border-black';
          explBadge.textContent = '✗ JAWABAN KURANG TEPAT';
        } else {
          explBadge.className = 'px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black';
          explBadge.textContent = 'KUNCI RESMI';
        }
      }
    } else {
      explBox.classList.add('hidden');
    }

    // Previous / Next button states
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');
    if (prevBtn) prevBtn.disabled = (qe.currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (qe.currentIndex === questions.length - 1);

    // Matrix
    this.renderMatrix(questions);
  }

  selectQuizOption(qId, key) {
    window.QuizEngine.selectOption(qId, key);
  }

  checkAnswerInstant() {
    const qe = window.QuizEngine;
    const questions = qe.activeQuestions;
    const currentQ = questions[qe.currentIndex];
    if (currentQ) {
      qe.checkAnswerInstant(currentQ.id);
      this.scrollIntoExplanation();
    }
  }

  scrollIntoExplanation() {
    const box = document.getElementById('explanation-box');
    if (box) {
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  toggleCurrentFlag() {
    const qe = window.QuizEngine;
    const currentQ = qe.activeQuestions[qe.currentIndex];
    if (currentQ) {
      qe.toggleFlag(currentQ.id);
    }
  }

  goToQuestion(idx) {
    window.QuizEngine.goToQuestion(idx);
  }

  prevQuestion() {
    window.QuizEngine.prevQuestion();
  }

  nextQuestion() {
    window.QuizEngine.nextQuestion();
  }

  renderMatrix(questions) {
    const qe = window.QuizEngine;
    const grid = document.getElementById('quiz-matrix-grid');
    const counterText = document.getElementById('matrix-counter-text');
    if (!grid) return;

    let answered = 0;
    grid.innerHTML = questions.map((q, idx) => {
      const userAns = qe.answers[q.id];
      const isAnswered = !!userAns;
      const isCurrent = (idx === qe.currentIndex);
      const isFlagged = !!qe.flagged[q.id];

      if (isAnswered) answered++;

      let btnClass = 'mixd-grid-btn';
      if (isCurrent) btnClass += ' current';
      if (isFlagged) btnClass += ' flagged';

      if (qe.isSubmitted) {
        if (userAns === q.answer) {
          btnClass += ' correct';
        } else if (userAns) {
          btnClass += ' incorrect';
        }
      } else if (isAnswered) {
        btnClass += ' answered';
      }

      return `
        <button onclick="app.goToQuestion(${idx})" class="${btnClass}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    if (counterText) {
      counterText.textContent = `${answered} / ${questions.length} Terjawab`;
    }
  }

  confirmSubmitExam() {
    const qe = window.QuizEngine;
    const questions = qe.activeQuestions;
    let answered = 0;
    questions.forEach(q => {
      if (qe.answers[q.id]) answered++;
    });
    const unanswered = questions.length - answered;

    const modal = document.getElementById('exam-confirm-modal');
    const textEl = document.getElementById('exam-modal-summary-text');
    if (textEl) {
      if (unanswered > 0) {
        textEl.textContent = `Anda telah menjawab ${answered} dari ${questions.length} soal. Masih ada ${unanswered} soal yang BELUM dijawab. Apakah Anda yakin ingin menyelesaikan simulasi UTS ini dan menghitung skor kelulusan?`;
      } else {
        textEl.textContent = `Semua ${questions.length} soal telah terjawab lengkap! Apakah Anda siap mengumpulkan lembar jawaban UTS sekarang?`;
      }
    }
    if (modal) modal.classList.remove('hidden');
  }

  closeSubmitModal() {
    const modal = document.getElementById('exam-confirm-modal');
    if (modal) modal.classList.add('hidden');
  }

  executeSubmitExam() {
    this.closeSubmitModal();
    window.QuizEngine.submitQuiz();
    const banner = document.getElementById('exam-score-banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* =========================================================================
     TAB 3: BENAR / SALAH EYD V (10 SOAL)
     ========================================================================= */
  renderTfView() {
    const qe = window.QuizEngine;
    if (qe.currentSubject !== 'BINDO') return;

    const dataset = window.BINDO_DATA;
    const container = document.getElementById('tf-cards-container');
    const tallyEl = document.getElementById('tf-score-display');
    if (!container) return;

    let score = 0;
    container.innerHTML = dataset.trueFalseQuestions.map(item => {
      const userChoice = qe.tfAnswers[item.id];
      const isRevealed = qe.tfRevealed[item.id];
      const isCorrect = (userChoice === item.isCorrect);

      if (isRevealed && isCorrect) score++;

      return `
        <div class="mixd-card p-6 sm:p-8 space-y-4">
          <div class="flex items-center justify-between pb-3 border-b-2 border-black/15">
            <span class="px-2.5 py-1 bg-black text-white font-display font-black text-xs rounded uppercase tracking-wider">
              SOAL #${item.id}
            </span>
            ${isRevealed ? `
              <span class="px-3 py-1 rounded text-xs font-black uppercase tracking-wider ${isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'} border-2 border-black">
                ${isCorrect ? '✓ JAWABAN ANDA BENAR' : '✗ JAWABAN KURANG TEPAT'}
              </span>
            ` : ''}
          </div>

          <div class="p-4 rounded-xl border-2 border-black/20 bg-black/5 text-base sm:text-lg font-bold text-black leading-snug">
            "${item.sentence}"
          </div>

          <div class="flex items-center gap-3">
            <button onclick="app.selectTfOption(${item.id}, true)" class="px-5 py-2 rounded-lg border-2 border-black font-display font-black text-xs uppercase tracking-wider transition-all ${userChoice === true ? 'bg-emerald-600 text-white shadow-[2px_2px_0px_#000]' : 'bg-white text-black hover:bg-black/5'}">
              ✓ BENAR
            </button>
            <button onclick="app.selectTfOption(${item.id}, false)" class="px-5 py-2 rounded-lg border-2 border-black font-display font-black text-xs uppercase tracking-wider transition-all ${userChoice === false ? 'bg-rose-600 text-white shadow-[2px_2px_0px_#000]' : 'bg-white text-black hover:bg-black/5'}">
              ✗ SALAH
            </button>
          </div>

          ${isRevealed ? `
            <div class="p-5 rounded-xl border-2 border-black bg-[#FFFBEA] space-y-2 mt-3">
              <div class="font-display font-black text-xs uppercase tracking-wider text-black/80 flex items-center gap-1.5">
                <span>📌</span> DASAR KAIDAH: ${item.rule}
              </div>
              <div class="text-xs sm:text-sm font-semibold text-black/90 leading-relaxed">
                ${item.explanation}
              </div>
              <div class="p-3 rounded-lg border-2 border-black/20 bg-white text-xs sm:text-sm font-bold text-emerald-800">
                ✍️ Rekonstruksi Baku: <em>${item.correction}</em>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (tallyEl) {
      tallyEl.textContent = `${score} / ${dataset.trueFalseQuestions.length}`;
    }
  }

  selectTfOption(id, val) {
    window.QuizEngine.selectTfAnswer(id, val);
  }

  /* =========================================================================
     TAB 4: LATIHAN SOAL ESAI (10 SOAL HOTS)
     ========================================================================= */
  renderEssayView() {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('essay-cards-container');
    if (!container) return;

    container.innerHTML = dataset.essayQuestions.map(item => {
      const isRevealed = !!window.QuizEngine.essayRevealed[item.id];
      const rubricRows = item.rubric.map(r => `
        <tr>
          <td class="font-semibold text-xs sm:text-sm">${r.aspect}</td>
          <td class="font-display font-black text-center font-mono text-xs sm:text-sm" style="width: 80px;">${r.score}%</td>
        </tr>
      `).join('');

      return `
        <div class="mixd-card p-6 sm:p-8 space-y-4">
          
          <div class="flex items-center justify-between pb-3 border-b-2 border-black/15">
            <span class="px-2.5 py-1 bg-black text-white font-display font-black text-xs rounded uppercase tracking-wider">
              SOAL ESAI #${item.id}
            </span>
            <span class="px-2.5 py-1 bg-black/10 text-black font-bold text-xs rounded uppercase">
              ${item.topic}
            </span>
          </div>

          <div class="text-base sm:text-lg font-bold text-black leading-relaxed whitespace-pre-line">
            ${item.prompt}
          </div>

          <!-- Student Writing Pad -->
          <div class="space-y-1.5 pt-2">
            <label class="font-display font-black text-xs uppercase tracking-wider text-black/70 flex items-center gap-1.5">
              <span>✍️</span> Lembar Draf Jawaban Anda:
            </label>
            <textarea placeholder="Tuliskan argumen analitis Anda di sini..." class="w-full min-h-[120px] p-3.5 rounded-xl border-2 border-black text-sm font-semibold text-black focus:outline-none shadow-sm"></textarea>
          </div>

          <!-- Answer & Rubric Toggle -->
          <div class="pt-2">
            <button onclick="app.toggleEssayAnswer(${item.id})" class="mixd-btn-black text-xs">
              ${isRevealed ? '▲ Tutup Kunci Jawaban' : '▼ Buka Kunci Jawaban Ideal & Rubrik Penilaian'}
            </button>
          </div>

          <!-- Revealed Model Answer -->
          ${isRevealed ? `
            <div class="p-6 rounded-xl border-4 border-black bg-[#FFFBEA] space-y-4 mt-4 shadow-[2px_2px_0px_#000]">
              <div>
                <div class="font-display font-black text-xs uppercase tracking-widest text-black mb-2 flex items-center gap-1.5">
                  <span>🎯</span> MODEL KUNCI JAWABAN IDEAL (STANDAR PNJ)
                </div>
                <div class="text-xs sm:text-[14px] leading-relaxed font-semibold text-black whitespace-pre-line p-4 bg-white rounded-lg border-2 border-black/20">
                  ${item.idealAnswer}
                </div>
              </div>

              <div>
                <div class="font-display font-black text-xs uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
                  <span>📊</span> RUBRIK PENILAIAN DOSEN (TOTAL 100 POIN)
                </div>
                <table class="rubric-table bg-white">
                  <thead>
                    <tr>
                      <th>Aspek Penilaian Substantif & Kebahasaan</th>
                      <th>Bobot</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rubricRows}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

        </div>
      `;
    }).join('');
  }

  toggleEssayAnswer(id) {
    window.QuizEngine.toggleEssayReveal(id);
    this.renderEssayView();
  }

  /* =========================================================================
     TAB 5: RANGKUMAN & GLOSARIUM KATA KUNCI
     ========================================================================= */
  renderSummaryView() {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('summary-content-container');
    if (!container) return;

    container.innerHTML = dataset.modules.map(mod => {
      const kwRows = mod.keywords.map(kw => `
        <tr class="border-b-2 border-black/15">
          <td class="font-display font-black text-xs uppercase tracking-wider text-black p-3.5 align-top" style="width: 200px;">
            ${kw.term}
          </td>
          <td class="text-xs sm:text-sm font-semibold text-black/85 p-3.5 leading-relaxed">
            ${kw.desc}
          </td>
        </tr>
      `).join('');

      return `
        <div class="mixd-card p-6 sm:p-8 space-y-5">
          
          <div class="flex items-center gap-2 pb-3 border-b-2 border-black/15">
            <span class="px-3 py-1 bg-black text-white font-display font-black text-xs rounded uppercase tracking-wider">
              MODUL ${mod.id}
            </span>
            <h3 class="font-display font-extrabold text-xl text-black uppercase">
              ${mod.title}
            </h3>
          </div>

          <div class="p-4 rounded-xl border-2 border-black bg-[#FFFBEA]">
            <p class="text-sm font-semibold text-black leading-relaxed">
              ${mod.summary}
            </p>
          </div>

          <div>
            <div class="font-display font-black text-xs uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
              <span>📖</span> GLOSARIUM KATA KUNCI LENGKAP
            </div>
            <table class="w-full border-collapse border-2 border-black rounded-lg overflow-hidden bg-white">
              <tbody>
                ${kwRows}
              </tbody>
            </table>
          </div>

        </div>
      `;
    }).join('');
  }
}

window.app = new AppController();

// Boot application upon DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
