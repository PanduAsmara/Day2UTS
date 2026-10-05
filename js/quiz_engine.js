// UTS Preparation Platform - Quiz & Assessment Engine

class QuizEngine {
  constructor() {
    this.currentSubject = 'BINDO'; // 'BINDO' or 'AGAMA'
    this.quizMode = 'exam'; // 'exam' (timer + review at end) or 'practice' (instant reveal)
    this.currentIndex = 0;
    this.answers = {}; // { questionId: selectedKey }
    this.flagged = {}; // { questionId: boolean }
    this.isSubmitted = false;
    this.timerInterval = null;
    this.timeLeftSeconds = 60 * 60; // 60 minutes
    this.totalSeconds = 60 * 60;
    this.onStateChangeCallback = null;

    // True/False answers for B. Indo
    this.tfAnswers = {}; // { id: boolean }
    this.tfRevealed = {}; // { id: boolean }

    // Essay states
    this.essayAnswers = {}; // { id: string }
    this.essayRevealed = {}; // { id: boolean }
    this.essayScores = {}; // { id: number }
  }

  getCurrentDataset() {
    return this.currentSubject === 'BINDO' ? window.BINDO_DATA : window.AGAMA_DATA;
  }

  setSubject(subjectCode) {
    if (this.currentSubject === subjectCode) return;
    this.currentSubject = subjectCode;
    this.resetQuiz();
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  setQuizMode(mode) {
    this.quizMode = mode;
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
        alert('Waktu ujian telah habis! Jawaban Anda akan dihitung secara otomatis.');
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
    this.stopTimer();
    this.timeLeftSeconds = 60 * 60;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer');
    if (!timerEl) return;
    const mins = Math.floor(this.timeLeftSeconds / 60);
    const secs = this.timeLeftSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerEl.textContent = formatted;

    if (this.timeLeftSeconds < 300) { // < 5 mins
      timerEl.classList.add('timer-warning');
    } else {
      timerEl.classList.remove('timer-warning');
    }
  }

  resetQuiz() {
    this.currentIndex = 0;
    this.answers = {};
    this.flagged = {};
    this.isSubmitted = false;
    this.resetTimer();
    if (this.quizMode === 'exam') {
      this.startTimer();
    }
  }

  selectOption(qId, key) {
    if (this.isSubmitted && this.quizMode === 'exam') return;
    this.answers[qId] = key;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  toggleFlag(qId) {
    this.flagged[qId] = !this.flagged[qId];
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  goToQuestion(index) {
    const questions = this.getCurrentDataset().multipleChoiceQuestions;
    if (index >= 0 && index < questions.length) {
      this.currentIndex = index;
      if (this.onStateChangeCallback) this.onStateChangeCallback();
    }
  }

  nextQuestion() {
    const questions = this.getCurrentDataset().multipleChoiceQuestions;
    if (this.currentIndex < questions.length - 1) {
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
    const questions = this.getCurrentDataset().multipleChoiceQuestions;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach(q => {
      const userAns = this.answers[q.id];
      if (!userAns) {
        unattempted++;
      } else if (userAns === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    const timeSpentSeconds = this.totalSeconds - this.timeLeftSeconds;
    const spentMins = Math.floor(timeSpentSeconds / 60);
    const spentSecs = timeSpentSeconds % 60;

    return {
      total: questions.length,
      correct,
      wrong,
      unattempted,
      score,
      timeSpentFormatted: `${spentMins} menit ${spentSecs} detik`
    };
  }

  // True/False methods
  selectTfAnswer(id, val) {
    this.tfAnswers[id] = val;
    this.tfRevealed[id] = true;
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  resetTf() {
    this.tfAnswers = {};
    this.tfRevealed = {};
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }

  // Essay methods
  toggleEssayReveal(id) {
    this.essayRevealed[id] = !this.essayRevealed[id];
    if (this.onStateChangeCallback) this.onStateChangeCallback();
  }
}

window.QuizEngine = new QuizEngine();
