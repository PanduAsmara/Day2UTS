// UTS Preparation Platform - Quiz Engine (Adapted from NetAcad Architecture)

class QuizEngine {
  constructor() {
    this.currentSubject = 'BINDO'; // 'BINDO' or 'AGAMA'
    this.quizMode = 'study'; // 'study' (DEFAULT!) or 'exam'
    this.currentIndex = 0;
    this.filteredModule = 'all'; // 'all' or module ID
    this.activeQuestions = [];

    // Answers & states
    this.answers = {}; // { qId: selectedKey }
    this.flagged = {}; // { qId: boolean }
    this.revealedExplanations = {}; // { qId: boolean } (for Study Mode)
    this.isSubmitted = false;

    // Exam timer state
    this.timerInterval = null;
    this.totalExamSeconds = 60 * 60; // 60 minutes
    this.timeLeftSeconds = 60 * 60;
    this.isExamActive = false;

    // True / False state (Bahasa Indonesia)
    this.tfAnswers = {};
    this.tfRevealed = {};

    // Essay state
    this.essayRevealed = {};

    this.onStateChangeCallback = null;
  }

  getCurrentDataset() {
    return this.currentSubject === 'BINDO' ? window.BINDO_DATA : window.AGAMA_DATA;
  }

  initActiveQuestions() {
    const dataset = this.getCurrentDataset();
    let list = [...dataset.multipleChoiceQuestions];

    if (this.filteredModule !== 'all') {
      const modNum = parseInt(this.filteredModule);
      // In Bindo:
      // Modul 1: Q1-5
      // Modul 2: Q6-15
      // Modul 3: Q16-23
      // Modul 4: Q24-30
      // In Agama:
      // Modul 1: Q1-7
      // Modul 2: Q8-15
      // Modul 3: Q16-22
      // Modul 4: Q23-30
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
    if (this.currentIndex >= this.activeQuestions.length) {
      this.currentIndex = 0;
    }
  }

  setSubject(subjectCode) {
    if (this.currentSubject === subjectCode) return;
    this.currentSubject = subjectCode;
    this.resetAll();
  }

  setQuizMode(mode) {
    this.quizMode = mode;
    if (mode === 'study') {
      this.stopTimer();
      this.isExamActive = false;
    } else if (mode === 'exam') {
      // Setup for exam mode
      this.isSubmitted = false;
      this.isExamActive = true;
      this.resetTimer();
      this.startTimer();
    }
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  setFilterModule(modVal) {
    this.filteredModule = modVal;
    this.initActiveQuestions();
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  shuffleCurrentOptions() {
    this.activeQuestions.forEach(q => {
      // Fisher-Yates shuffle options array
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
    });
    this.answers = {};
    this.revealedExplanations = {};
    this.isSubmitted = false;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
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
    this.tfAnswers = {};
    this.tfRevealed = {};
    this.essayRevealed = {};
    this.stopTimer();
    this.initActiveQuestions();
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

  selectOption(qId, key) {
    if (this.isSubmitted && this.quizMode === 'exam') return;
    this.answers[qId] = key;
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
      } else if (userAns === q.answer) {
        correct++;
      } else {
        wrong++;
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
