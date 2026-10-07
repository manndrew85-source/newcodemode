// Progress is saved in this browser (localStorage). Everything still works if storage is blocked.
const Progress = (() => {
  const KEY = 'codepath-progress-v1';
  let state = { lessons: {}, quizzes: {}, tests: {}, drafts: {}, name: '', theme: '' };

  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved) state = Object.assign(state, saved);
  } catch (e) { /* storage unavailable */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  return {
    get state() { return state; },
    lessonDone: (c, u, l) => !!state.lessons[`${c}.${u}.${l}`],
    markLesson(c, u, l) { state.lessons[`${c}.${u}.${l}`] = true; save(); },
    quizScore: (c, u) => state.quizzes[`${c}.${u}`],
    setQuiz(c, u, pct) {
      const k = `${c}.${u}`;
      state.quizzes[k] = Math.max(pct, state.quizzes[k] || 0);
      save();
    },
    testScore: c => state.tests[c],
    setTest(c, pct) {
      const prev = state.tests[c];
      state.tests[c] = { best: Math.max(pct, prev ? prev.best : 0), date: (prev && prev.best >= pct) ? prev.date : new Date().toISOString() };
      save();
    },
    getDraft: c => state.drafts[c],
    setDraft(c, d) { state.drafts[c] = d; save(); },
    clearDraft(c) { delete state.drafts[c]; save(); },
    get name() { return state.name; },
    set name(v) { state.name = v; save(); },
    get theme() { return state.theme; },
    set theme(v) { state.theme = v; save(); },
    reset() { state = { lessons: {}, quizzes: {}, tests: {}, drafts: {}, name: state.name, theme: state.theme }; save(); }
  };
})();
