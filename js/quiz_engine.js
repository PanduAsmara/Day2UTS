// UTS Preparation Platform - Quiz Engine (Robust Shuffling Architecture)

class QuizEngine {
  constructor() {
    this.currentSubject = 'BINDO'; // 'BINDO' or 'AGAMA'
    this.quizMode = 'study'; // 'study' (DEFAULT!) or 'exam'
    this.currentIndex = 0;
    this.filteredModule = 'all'; // 'all' or module ID
    this.activeQuestions = [];

    // Shuffled options map: { questionId: [ { originalKey, text, isCorrect, shuffledKey } ] }
    this.shuffledOptionsMap = {};

    // User answers & states
    this.answers = {}; // { questionId: selectedShuffledKey }
    this.flagged = {}; // { questionId: boolean }
    this.revealedExplanations = {}; // { questionId: boolean } (for Study Mode)
    this.isSubmitted = false;

    // Exam timer state
    this.timerInterval = null;
    this.totalExamSeconds = 60 * 60; // 60 minutes
    this.timeLeftSeconds = 60 * 60;
    this.isExamActive = false;

    // True / False state (Bahasa Indonesia)
    this.tfAnswers = {};
    this.tfRevealed = {};

    this.onStateChangeCallback = null;

    if (typeof window !== 'undefined' && (window.BINDO_DATA || window.AGAMA_DATA)) {
      this.initActiveQuestions(false);
    }
  }

  getCurrentDataset() {
    return this.currentSubject === 'BINDO' ? window.BINDO_DATA : window.AGAMA_DATA;
  }

  // Fisher-Yates array shuffler
  static shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Initialize or re-shuffle options for active questions
  prepareOptions(shouldShuffle = false) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    this.activeQuestions.forEach(q => {
      let rawOpts = q.options.map(opt => ({
        originalKey: opt.key,
        text: opt.text,
        isCorrect: (opt.key === q.answer)
      }));

      if (shouldShuffle) {
        rawOpts = QuizEngine.shuffleArray(rawOpts);
      }

      this.shuffledOptionsMap[q.id] = rawOpts.map((opt, idx) => ({
        ...opt,
        shuffledKey: letters[idx]
      }));
    });
  }

  getOptions(qId) {
    if (!this.shuffledOptionsMap[qId]) {
      const q = this.activeQuestions.find(item => item.id === qId);
      if (q) {
        const letters = ['A', 'B', 'C', 'D', 'E'];
        this.shuffledOptionsMap[qId] = q.options.map((opt, idx) => ({
          originalKey: opt.key,
          text: opt.text,
          isCorrect: (opt.key === q.answer),
          shuffledKey: letters[idx]
        }));
      }
    }
    return this.shuffledOptionsMap[qId] || [];
  }

  getCorrectOption(qId) {
    const opts = this.getOptions(qId);
    return opts.find(o => o.isCorrect) || null;
  }

  initActiveQuestions(shouldShuffleOptions = false) {
    const dataset = this.getCurrentDataset();
    let list = [...dataset.multipleChoiceQuestions];

    if (this.filteredModule !== 'all') {
      const modNum = parseInt(this.filteredModule);
      if (this.currentSubject === 'BINDO') {
        if (modNum === 1) list = list.filter(q => q.id >= 1 && q.id <= 5);
        else if (modNum === 2) list = list.filter(q => q.id >= 6 && q.id <= 15);
        else if (modNum === 3) list = list.filter(q => q.id >= 16 && q.id <= 23);
        else if (modNum === 4) list = list.filter(q => q.id >= 24 && q.id <= 30);
      } else {
        if (modNum === 1) list = list.filter(q => q.id >= 1 && q.id <= 7);
        else if (modNum === 2) list = list.filter(q => q.id >= 8 && q.id <= 15);
        else if (modNum === 3) list = list.filter(q => q.id >= 16 && q.id <= 22);
        else if (modNum === 4) list = list.filter(q => q.id >= 23 && q.id <= 30);
      }
    }

    this.activeQuestions = list;
    this.prepareOptions(shouldShuffleOptions);

    if (this.currentIndex >= this.activeQuestions.length) {
      this.currentIndex = 0;
    }
  }

  setSubject(subjectCode, force = false) {
    if (this.currentSubject === subjectCode && !force && this.activeQuestions && this.activeQuestions.length > 0) return;
    this.currentSubject = subjectCode;
    this.resetAll();
  }

  setQuizMode(mode) {
    this.quizMode = mode;
    if (mode === 'study') {
      this.stopTimer();
      this.isExamActive = false;
    } else if (mode === 'exam') {
      this.isSubmitted = false;
      this.isExamActive = true;
      this.resetTimer();
      this.startTimer();
    }
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  setFilterModule(modVal) {
    this.filteredModule = modVal;
    this.initActiveQuestions(false);
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  shuffleAllOptions() {
    this.currentIndex = 0;
    this.answers = {};
    this.revealedExplanations = {};
    this.isSubmitted = false;
    this.prepareOptions(true);
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  // Alias for compatibility
  shuffleCurrentOptions() {
    this.shuffleAllOptions();
  }

  resetAll() {
    this.currentIndex = 0;
    this.filteredModule = 'all';
    this.quizMode = 'study'; // ALWAYS DEFAULT TO STUDY MODE
    this.isExamActive = false;
    this.isSubmitted = false;
    this.answers = {};
    this.flagged = {};
    this.revealedExplanations = {};
    this.shuffledOptionsMap = {};
    this.tfAnswers = {};
    this.tfRevealed = {};
    this.essayRevealed = {};
    this.stopTimer();
    this.initActiveQuestions(false);
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.timeLeftSeconds > 0) {
        this.timeLeftSeconds--;
        this.updateTimerDisplay();
      } else {
        this.stopTimer();
        alert('Waktu ujian UTS 60 menit telah habis! Lembar jawaban Anda otomatis dikumpulkan.');
        this.submitQuiz();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  resetTimer() {
    this.timeLeftSeconds = this.totalExamSeconds;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer-display');
    if (!timerEl) return;
    const mins = Math.floor(this.timeLeftSeconds / 60);
    const secs = this.timeLeftSeconds % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (this.timeLeftSeconds < 300) { // < 5 mins
      timerEl.style.backgroundColor = '#FEE2E2';
      timerEl.style.color = '#DC2626';
      timerEl.style.borderColor = '#DC2626';
    } else {
      timerEl.style.backgroundColor = '#FFFFFF';
      timerEl.style.color = '#000000';
      timerEl.style.borderColor = '#000000';
    }
  }

  selectOption(qId, shuffledKey) {
    if (this.isSubmitted && this.quizMode === 'exam') return;
    this.answers[qId] = shuffledKey;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  checkAnswerInstant(qId) {
    this.revealedExplanations[qId] = true;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  toggleFlag(qId) {
    this.flagged[qId] = !this.flagged[qId];
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  goToQuestion(idx) {
    if (idx >= 0 && idx < this.activeQuestions.length) {
      this.currentIndex = idx;
      if (this.onStateChangeCallback) this.onStateChangeCallback();
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.activeQuestions.length - 1) {
      this.currentIndex++;
      if (this.onStateChangeCallback) this.onStateChangeCallback();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      if (this.onStateChangeCallback) this.onStateChangeCallback();
    }
  }

  submitQuiz() {
    this.isSubmitted = true;
    this.stopTimer();
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  calculateScore() {
    const list = this.activeQuestions;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    list.forEach(q => {
      const userAns = this.answers[q.id];
      if (!userAns) {
        unattempted++;
      } else {
        const opts = this.getOptions(q.id);
        const selectedOpt = opts.find(o => o.shuffledKey === userAns);
        if (selectedOpt && selectedOpt.isCorrect) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    const score = Math.round((correct / list.length) * 100);
    const spentSecs = this.totalExamSeconds - this.timeLeftSeconds;
    const spentMins = Math.floor(spentSecs / 60);
    const spentRemSecs = spentSecs % 60;

    return {
      total: list.length,
      correct,
      wrong,
      unattempted,
      score,
      timeSpentFormatted: `${spentMins} menit ${spentRemSecs} detik`
    };
  }

  // True/False methods
  selectTfAnswer(id, val) {
    this.tfAnswers[id] = val;
    this.tfRevealed[id] = true;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  // Essay methods
  toggleEssayReveal(id) {
    this.essayRevealed[id] = !this.essayRevealed[id];
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }
}

window.QuizEngine = new QuizEngine();
