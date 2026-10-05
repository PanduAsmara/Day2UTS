// UTS Preparation Platform - Main Application Logic
// Handles Theme Toggling, Tab Navigation, Real Exam Simulation, and Rendering

class AppController {
  constructor() {
    this.currentTab = 'materi';
    this.currentSearch = '';
  }

  init() {
    // Connect QuizEngine callback to re-render PG and TF views on state changes
    window.QuizEngine.onStateChangeCallback = () => {
      this.updatePgView();
      if (window.QuizEngine.currentSubject === 'BINDO') {
        this.updateTfView();
      }
    };

    // Initial render
    this.switchSubject('BINDO');
    window.QuizEngine.startTimer();
  }

  switchSubject(subjectCode) {
    window.QuizEngine.setSubject(subjectCode);
    const isBindo = subjectCode === 'BINDO';

    // Update body class
    document.body.className = isBindo ? 'theme-bindo' : 'theme-agama';

    // Update switcher pills
    const bindoBtn = document.getElementById('switch-bindo');
    const agamaBtn = document.getElementById('switch-agama');
    if (bindoBtn && agamaBtn) {
      if (isBindo) {
        bindoBtn.className = 'subject-pill active-bindo';
        agamaBtn.className = 'subject-pill';
      } else {
        bindoBtn.className = 'subject-pill';
        agamaBtn.className = 'subject-pill active-agama';
      }
    }

    // Update Hero elements
    const heroTitle = document.getElementById('hero-title');
    const heroLecturer = document.getElementById('hero-lecturer');
    const heroDesc = document.getElementById('hero-desc');
    const heroBadge = document.getElementById('hero-badge');
    const tabTfBtn = document.getElementById('tab-btn-tf');

    if (isBindo) {
      heroTitle.textContent = "Persiapan UTS Bahasa Indonesia";
      heroLecturer.textContent = "Dosen Pengampu: Dinda Kadarwati, M.Pd — Politeknik Negeri Jakarta";
      heroDesc.textContent = "Platform belajar komprehensif mengacu pada silabus PNJ dan presentasi Kelompok 1 s.d. 4. Dilengkapi modul teori lengkap, ringkasan kata kunci, simulasi 30 soal pilihan ganda berbasis analisis teks (1 soal = 2 menit), 10 soal benar/salah EYD V, dan 10 esai HOTS.";
      heroBadge.textContent = "MATA KULIAH WAJIB POLITEKNIK // BINDO";
      if (tabTfBtn) tabTfBtn.style.display = 'inline-block';
    } else {
      heroTitle.textContent = "Persiapan UTS Pendidikan Agama Islam";
      heroLecturer.textContent = "Mata Kuliah Wajib Umum — Politeknik Negeri Jakarta";
      heroDesc.textContent = "Platform belajar komprehensif mata kuliah Pendidikan Agama Islam. Membahas 4 topik utama: Hakikat Manusia & Tanggung Jawabnya, IPTEKS dalam Islam (Ulul Albab & I'jaz 'Ilmi), Sistem Hukum/HAM/Demokrasi (Piagam Madinah & Maqashid), serta Sumber Ajaran Islam (Al-Qur'an, Hadis, Ijtihad). Dilengkapi 30 simulasi soal PG & 10 soal esai studi kasus.";
      heroBadge.textContent = "MATA KULIAH PENGEMBANGAN KEPRIBADIAN // PAI";
      if (tabTfBtn) {
        tabTfBtn.style.display = 'none';
        if (this.currentTab === 'tf') {
          this.switchTab('materi');
        }
      }
    }

    // Refresh UI
    this.renderCurrentTab();
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Views
    const views = ['materi', 'pg', 'tf', 'essay', 'summary'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) {
        el.style.display = (v === tabId) ? 'block' : 'none';
      }
    });

    this.renderCurrentTab();
  }

  renderCurrentTab() {
    switch (this.currentTab) {
      case 'materi':
        this.renderMateri(this.currentSearch);
        break;
      case 'pg':
        this.updatePgView();
        break;
      case 'tf':
        this.updateTfView();
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
     TAB 1: MATERI & MODUL
     ========================================================================= */
  searchMateri(query) {
    this.currentSearch = query.toLowerCase();
    this.renderMateri(this.currentSearch);
  }

  renderMateri(query = '') {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('materi-container');
    const countEl = document.getElementById('module-count');
    if (!container) return;

    if (countEl) countEl.textContent = dataset.modules.length;

    const filteredModules = dataset.modules.filter(mod => {
      if (!query) return true;
      const titleMatch = mod.title.toLowerCase().includes(query);
      const summaryMatch = mod.summary.toLowerCase().includes(query);
      const kwMatch = mod.keywords.some(k => k.term.toLowerCase().includes(query) || k.desc.toLowerCase().includes(query));
      const sectionMatch = mod.sections.some(s => s.heading.toLowerCase().includes(query) || s.content.toLowerCase().includes(query));
      return titleMatch || summaryMatch || kwMatch || sectionMatch;
    });

    if (filteredModules.length === 0) {
      container.innerHTML = `
        <div class="neo-card" style="padding: 2rem; text-align: center; background: #FFFFFF;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 800; font-size: 1.1rem;">Materi Tidak Ditemukan</div>
          <p style="color: #64748B; font-size: 0.9rem;">Tidak ditemukan hasil yang cocok dengan kata kunci "${query}". Silakan coba kata kunci lain.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filteredModules.map(mod => {
      const keywordsHtml = mod.keywords.map(kw => `
        <div style="background: rgba(0,0,0,0.03); border: 1.5px solid var(--theme-border); border-radius: 8px; padding: 0.75rem;">
          <div style="font-weight: 800; font-size: 0.85rem; color: var(--theme-primary); margin-bottom: 0.25rem;">
            📌 ${kw.term}
          </div>
          <div style="font-size: 0.825rem; line-height: 1.45; color: #334155;">
            ${kw.desc}
          </div>
        </div>
      `).join('');

      const sectionsHtml = mod.sections.map(sec => `
        <div style="border-top: 1.5px solid #E2E8F0; padding-top: 1.25rem; margin-top: 1.25rem;">
          <h3 style="font-size: 1.15rem; font-weight: 800; margin: 0 0 0.75rem 0; color: #0F172A;">
            ${sec.heading}
          </h3>
          <div style="font-size: 0.95rem; line-height: 1.7; color: #334155; white-space: pre-line;">
            ${sec.content}
          </div>
        </div>
      `).join('');

      return `
        <article class="neo-card" style="padding: 1.75rem; background: #FFFFFF;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div>
              <span class="badge-tag" style="background: var(--theme-primary); color: #FFF; margin-bottom: 0.4rem; display: inline-block;">
                MODUL ${mod.id} • ${mod.presenter}
              </span>
              <h2 style="font-size: 1.4rem; font-weight: 900; margin: 0; color: #0F172A;">
                ${mod.title}
              </h2>
            </div>
          </div>

          <!-- Summary Box -->
          <div style="background: var(--theme-primary-light); border-left: 4px solid var(--theme-primary); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.25rem;">
            <div style="font-weight: 800; font-size: 0.8rem; text-transform: uppercase; color: var(--theme-primary-dark); margin-bottom: 0.25rem;">
              RINGKASAN EKSEKUTIF
            </div>
            <div style="font-size: 0.925rem; line-height: 1.55; color: var(--theme-primary-dark); font-weight: 500;">
              ${mod.summary}
            </div>
          </div>

          <!-- Keywords Grid -->
          <div style="margin-bottom: 1.25rem;">
            <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: #64748B; margin-bottom: 0.5rem;">
              🔑 KATA KUNCI & ISTILAH PENTING
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.65rem;">
              ${keywordsHtml}
            </div>
          </div>

          <!-- Detailed Sections -->
          <div>
            ${sectionsHtml}
          </div>
        </article>
      `;
    }).join('');
  }

  /* =========================================================================
     TAB 2: UJIAN PILIHAN GANDA (30 SOAL)
     ========================================================================= */
  toggleExamMode() {
    const qe = window.QuizEngine;
    const newMode = qe.quizMode === 'exam' ? 'practice' : 'exam';
    qe.setQuizMode(newMode);

    const btn = document.getElementById('btn-toggle-mode');
    const badge = document.getElementById('mode-badge');
    const timerWrapper = document.getElementById('exam-timer-wrapper');

    if (newMode === 'exam') {
      if (btn) btn.textContent = '🔄 Ganti ke Mode Belajar Langsung';
      if (badge) {
        badge.textContent = 'MODE: UJIAN UTS (60 MENIT)';
        badge.style.background = 'var(--theme-primary-light)';
      }
      if (timerWrapper) timerWrapper.style.display = 'inline-flex';
      qe.startTimer();
    } else {
      if (btn) btn.textContent = '⏱️ Ganti ke Mode Ujian Resmi (Timer)';
      if (badge) {
        badge.textContent = 'MODE: LATIHAN SANTAI (BAHAS LANGSUNG)';
        badge.style.background = '#FEF3C7';
        badge.style.color = '#92400E';
      }
      if (timerWrapper) timerWrapper.style.display = 'none';
      qe.stopTimer();
    }
  }

  updatePgView() {
    const qe = window.QuizEngine;
    const dataset = qe.getCurrentDataset();
    const questions = dataset.multipleChoiceQuestions;
    const currentQ = questions[qe.currentIndex];

    // Score banner check
    const banner = document.getElementById('pg-score-banner');
    if (banner) {
      if (qe.isSubmitted) {
        const stats = qe.calculateScore();
        document.getElementById('score-val').textContent = stats.score;
        document.getElementById('score-details').textContent = 
          `Benar: ${stats.correct} | Salah: ${stats.wrong} | Kosong: ${stats.unattempted} | Waktu Pengerjaan: ${stats.timeSpentFormatted}`;
        banner.style.display = 'block';
      } else {
        banner.style.display = 'none';
      }
    }

    if (!currentQ) return;

    // Badges & Passage
    const numBadge = document.getElementById('q-number-badge');
    const topicBadge = document.getElementById('q-topic-badge');
    const passageContainer = document.getElementById('q-passage-container');
    const passageEl = document.getElementById('q-passage');
    const qText = document.getElementById('q-text');
    const btnFlag = document.getElementById('btn-flag');

    if (numBadge) numBadge.textContent = `SOAL ${qe.currentIndex + 1} DARI ${questions.length}`;
    if (topicBadge) topicBadge.textContent = currentQ.topic || 'Analisis Teks';
    
    if (btnFlag) {
      const isFlagged = qe.flagged[currentQ.id];
      btnFlag.textContent = isFlagged ? '🚩 Ditandai Ragu-ragu' : '🏳️ Ragu-ragu';
      btnFlag.style.background = isFlagged ? '#FEF3C7' : '#FFFFFF';
    }

    if (currentQ.passage) {
      passageContainer.style.display = 'block';
      passageEl.textContent = currentQ.passage;
    } else {
      passageContainer.style.display = 'none';
    }

    if (qText) qText.textContent = currentQ.question;

    // Render Options
    const optionsContainer = document.getElementById('q-options');
    const userSelected = qe.answers[currentQ.id];
    const showAnswer = qe.isSubmitted || qe.quizMode === 'practice';

    optionsContainer.innerHTML = currentQ.options.map(opt => {
      let optClass = 'quiz-option';
      if (userSelected === opt.key) {
        optClass += ' selected';
      }

      if (showAnswer) {
        if (opt.key === currentQ.answer) {
          optClass += ' correct-answer';
        } else if (userSelected === opt.key && userSelected !== currentQ.answer) {
          optClass += ' wrong-answer';
        }
      }

      return `
        <div class="${optClass}" onclick="app.selectOption(${currentQ.id}, '${opt.key}')">
          <div class="quiz-letter">${opt.key}</div>
          <div style="font-size: 0.95rem; line-height: 1.5; padding-top: 0.15rem;">
            ${opt.text}
          </div>
        </div>
      `;
    }).join('');

    // Explanation Box
    const explBox = document.getElementById('q-explanation-box');
    const explContent = document.getElementById('q-explanation-content');
    if (showAnswer && (userSelected || qe.isSubmitted)) {
      explBox.style.display = 'block';
      explContent.textContent = currentQ.explanation;
    } else {
      explBox.style.display = 'none';
    }

    // Previous / Next buttons
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');
    const submitBtn = document.getElementById('btn-submit-exam');

    if (prevBtn) prevBtn.disabled = (qe.currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (qe.currentIndex === questions.length - 1);
    if (submitBtn) submitBtn.style.display = qe.isSubmitted ? 'none' : 'inline-flex';

    // Matrix
    this.renderMatrix(questions);
  }

  renderMatrix(questions) {
    const qe = window.QuizEngine;
    const matrixContainer = document.getElementById('q-matrix');
    const answeredCounter = document.getElementById('answered-counter');
    if (!matrixContainer) return;

    let answeredCount = 0;
    matrixContainer.innerHTML = questions.map((q, idx) => {
      const userAns = qe.answers[q.id];
      const isAnswered = !!userAns;
      const isCurrent = (idx === qe.currentIndex);
      const isFlagged = !!qe.flagged[q.id];

      if (isAnswered) answeredCount++;

      let boxClass = 'nav-box';
      if (isCurrent) boxClass += ' current';
      if (isFlagged) boxClass += ' flagged';

      if (qe.isSubmitted) {
        if (userAns === q.answer) {
          boxClass += ' correct';
        } else if (userAns) {
          boxClass += ' wrong';
        }
      } else if (isAnswered) {
        boxClass += ' answered';
      }

      return `
        <button class="${boxClass}" onclick="app.goToQuestion(${idx})">
          ${idx + 1}
        </button>
      `;
    }).join('');

    if (answeredCounter) {
      answeredCounter.textContent = `${answeredCount} / ${questions.length} Terjawab`;
    }
  }

  selectOption(qId, key) {
    window.QuizEngine.selectOption(qId, key);
  }

  toggleFlagCurrent() {
    const qe = window.QuizEngine;
    const questions = qe.getCurrentDataset().multipleChoiceQuestions;
    const currentQ = questions[qe.currentIndex];
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

  confirmSubmitExam() {
    const qe = window.QuizEngine;
    const questions = qe.getCurrentDataset().multipleChoiceQuestions;
    let answered = 0;
    questions.forEach(q => {
      if (qe.answers[q.id]) answered++;
    });
    const unanswered = questions.length - answered;

    const modal = document.getElementById('submit-modal');
    const textEl = document.getElementById('modal-summary-text');
    if (textEl) {
      if (unanswered > 0) {
        textEl.textContent = `Anda telah menjawab ${answered} dari ${questions.length} soal. Masih ada ${unanswered} soal yang BELUM dijawab. Apakah Anda yakin ingin menyelesaikan simulasi ujian ini dan melihat skor evaluasi?`;
      } else {
        textEl.textContent = `Hebat! Anda telah menjawab seluruh ${questions.length} soal. Apakah Anda siap mengumpulkan lembar jawaban untuk mengecek skor dan analisis nilai?`;
      }
    }
    if (modal) modal.style.display = 'flex';
  }

  closeSubmitModal() {
    const modal = document.getElementById('submit-modal');
    if (modal) modal.style.display = 'none';
  }

  executeSubmitExam() {
    this.closeSubmitModal();
    window.QuizEngine.submitQuiz();
    this.scrollIntoQuestionView();
  }

  scrollIntoQuestionView() {
    const banner = document.getElementById('pg-score-banner');
    if (banner) {
      banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  resetCurrentSubjectQuiz() {
    if (confirm('Mulai ulang ujian? Seluruh pilihan jawaban pada ujian ini akan direset.')) {
      window.QuizEngine.resetQuiz();
    }
  }

  /* =========================================================================
     TAB 3: BENAR / SALAH EYD V (10 SOAL)
     ========================================================================= */
  updateTfView() {
    const qe = window.QuizEngine;
    if (qe.currentSubject !== 'BINDO') return;

    const dataset = window.BINDO_DATA;
    const tfList = dataset.trueFalseQuestions;
    const container = document.getElementById('tf-list-container');
    const tallyEl = document.getElementById('tf-score-tally');
    if (!container) return;

    let score = 0;
    container.innerHTML = tfList.map(item => {
      const userChoice = qe.tfAnswers[item.id];
      const isRevealed = qe.tfRevealed[item.id];
      const isCorrect = (userChoice === item.isCorrect);

      if (isRevealed && isCorrect) score++;

      return `
        <div class="neo-card" style="padding: 1.5rem; background: #FFFFFF;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span class="badge-tag" style="background: #F1F5F9;">SOAL ${item.id}</span>
            ${isRevealed ? `
              <span class="badge-tag" style="background: ${isCorrect ? '#D1FAE5' : '#FEE2E2'}; color: ${isCorrect ? '#065F46' : '#991B1B'};">
                ${isCorrect ? '✓ JAWABAN ANDA TEPAT' : '✗ JAWABAN KURANG TEPAT'}
              </span>
            ` : ''}
          </div>

          <div style="font-size: 1.05rem; font-weight: 700; line-height: 1.5; margin-bottom: 1.25rem; color: #1E293B; background: #F8FAFC; padding: 1rem; border-radius: 8px; border: 1.5px solid #E2E8F0;">
            "${item.sentence}"
          </div>

          <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem;">
            <button class="tf-btn tf-btn-true ${userChoice === true ? 'active' : ''}" onclick="app.selectTfAnswer(${item.id}, true)">
              ✓ BENAR
            </button>
            <button class="tf-btn tf-btn-false ${userChoice === false ? 'active' : ''}" onclick="app.selectTfAnswer(${item.id}, false)">
              ✗ SALAH
            </button>
          </div>

          ${isRevealed ? `
            <div style="background: #F0FDF4; border: 1.5px solid #059669; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
              <div style="font-weight: 800; font-size: 0.8rem; text-transform: uppercase; color: #065F46; margin-bottom: 0.25rem;">
                📌 DASAR KAIDAH: ${item.rule}
              </div>
              <div style="font-size: 0.9rem; line-height: 1.5; color: #166534; margin-bottom: 0.5rem;">
                ${item.explanation}
              </div>
              <div style="font-size: 0.85rem; font-weight: 800; color: #064E3B; background: #DCFCE7; padding: 0.5rem 0.75rem; border-radius: 6px;">
                ✍️ Rekonstruksi Baku: <em>${item.correction}</em>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (tallyEl) {
      tallyEl.textContent = `${score} / ${tfList.length}`;
    }
  }

  selectTfAnswer(id, val) {
    window.QuizEngine.selectTfAnswer(id, val);
  }

  resetTfQuiz() {
    window.QuizEngine.resetTf();
  }

  /* =========================================================================
     TAB 4: LATIHAN SOAL ESAI (10 SOAL)
     ========================================================================= */
  renderEssayView() {
    const qe = window.QuizEngine;
    const dataset = qe.getCurrentDataset();
    const container = document.getElementById('essay-list-container');
    if (!container) return;

    container.innerHTML = dataset.essayQuestions.map(item => {
      const isRevealed = qe.essayRevealed[item.id];
      const rubricRows = item.rubric.map(r => `
        <tr>
          <td>${r.aspect}</td>
          <td style="font-weight: 800; font-family: var(--font-mono); text-align: center; width: 80px;">${r.score}%</td>
        </tr>
      `).join('');

      return `
        <div class="neo-card" style="padding: 1.75rem; background: #FFFFFF;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span class="badge-tag" style="background: var(--theme-primary); color: #FFF;">SOAL ESAI ${item.id}</span>
            <span class="badge-tag" style="background: #F1F5F9;">${item.topic}</span>
          </div>

          <div style="font-size: 1.05rem; font-weight: 800; line-height: 1.55; margin-bottom: 1rem; color: #0F172A; white-space: pre-line;">
            ${item.prompt}
          </div>

          <!-- User Writing Box -->
          <div style="margin-bottom: 1rem;">
            <label style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #64748B; display: block; margin-bottom: 0.35rem;">
              ✍️ Lembar Analisis / Draf Jawaban Anda:
            </label>
            <textarea class="neo-textarea" placeholder="Ketikkan argumen analisis, perbaikan kalimat, atau dalil pendukung jawaban Anda di sini..."></textarea>
          </div>

          <!-- Toggle Answer Button -->
          <div style="margin-bottom: 1rem;">
            <button class="neo-btn neo-btn-outline" style="font-size: 0.85rem;" onclick="app.toggleEssayAnswer(${item.id})">
              ${isRevealed ? '▲ Tutup Kunci Jawaban' : '▼ Buka Kunci Jawaban Ideal & Rubrik Penilaian'}
            </button>
          </div>

          <!-- Ideal Answer & Rubric Disclosure -->
          ${isRevealed ? `
            <div style="border-top: 2px dashed var(--theme-border); padding-top: 1.25rem; margin-top: 1rem;">
              <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: var(--theme-primary); margin-bottom: 0.4rem;">
                🎯 MODEL KUNCI JAWABAN IDEAL (STANDAR MAHASISWA PNJ)
              </div>
              <div style="font-size: 0.925rem; line-height: 1.65; color: #1E293B; background: #F8FAFC; border: 1.5px solid #CBD5E1; border-radius: 8px; padding: 1.25rem; white-space: pre-line; margin-bottom: 1.25rem;">
                ${item.idealAnswer}
              </div>

              <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: #334155; margin-bottom: 0.25rem;">
                📊 RUBRIK PENILAIAN DOSEN (TOTAL 100 POIN)
              </div>
              <table class="rubric-table">
                <thead>
                  <tr>
                    <th>Aspek Penilaian Substantif & Kebahasaan</th>
                    <th>Bobot Poin</th>
                  </tr>
                </thead>
                <tbody>
                  ${rubricRows}
                </tbody>
              </table>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  toggleEssayAnswer(id) {
    window.QuizEngine.toggleEssayReveal(id);
  }

  /* =========================================================================
     TAB 5: RANGKUMAN & KATA KUNCI
     ========================================================================= */
  renderSummaryView() {
    const dataset = window.QuizEngine.getCurrentDataset();
    const container = document.getElementById('summary-cards-container');
    if (!container) return;

    container.innerHTML = dataset.modules.map(mod => {
      const kwTable = mod.keywords.map(kw => `
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="font-weight: 800; color: var(--theme-primary); padding: 0.6rem 0.75rem; vertical-align: top; width: 180px;">
            ${kw.term}
          </td>
          <td style="padding: 0.6rem 0.75rem; font-size: 0.85rem; line-height: 1.45; color: #334155;">
            ${kw.desc}
          </td>
        </tr>
      `).join('');

      return `
        <div class="neo-card" style="padding: 1.75rem; background: #FFFFFF;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge-tag" style="background: var(--theme-primary); color: #FFF;">MODUL ${mod.id}</span>
            <h3 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: #0F172A;">${mod.title}</h3>
          </div>

          <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0 0 1rem 0;">
            ${mod.summary}
          </p>

          <div style="font-weight: 800; font-size: 0.85rem; text-transform: uppercase; color: #64748B; margin-bottom: 0.5rem;">
            Glosarium Cepat Modul Ini
          </div>
          <table style="width: 100%; border-collapse: collapse; border: 1.5px solid var(--theme-border); border-radius: 8px; overflow: hidden; background: #FAFAFA;">
            <tbody>
              ${kwTable}
            </tbody>
          </table>
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
