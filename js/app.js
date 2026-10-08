// CodePath — main app: routing and screens.
(() => {
  const app = document.getElementById('app');
  const COURSE_IDS = ['beginner', 'intermediate', 'advanced'];
  const QUIZ_PASS = 60;
  const TEST_PASS = 70;
  const LETTERS = 'ABCDEFGH';

  // ---------- helpers ----------
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // Tiny markup: {{{ code block }}} and [[inline code]] are escaped for you.
  // The (?!\]) lets inline code end in brackets, e.g. [[list[0]]].
  const INLINE = /\[\[([\s\S]+?)\]\](?!\])/g;
  const md = s => {
    const blocks = [];
    return String(s || '')
      .replace(/\{\{\{\n?([\s\S]*?)\n?\}\}\}/g, (_, c) => `\u0000${blocks.push(`<pre class="code"><code>${esc(c)}</code></pre>`) - 1}\u0000`)
      .replace(INLINE, (_, c) => `<code>${esc(c)}</code>`)
      .replace(/\u0000(\d+)\u0000/g, (_, i) => blocks[i]);
  };
  const mdInline = s => esc(s).replace(INLINE, (_, c) => `<code>${c}</code>`);
  const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const course = id => COURSES[id];
  const colorVars = id => `--c: var(--${id}); --c-soft: color-mix(in srgb, var(--${id}) 16%, var(--surface));`;
  const pic = (name, cap) => name ? `<figure class="pic"><div class="pic-label">📷 Picture it${innerWidth < 600 ? ' <span class="muted" style="text-transform:none;letter-spacing:0;font-weight:600">· swipe to see all →</span>' : ''}</div><div class="pic-scroll">${Pics.get(name)}</div>${cap ? `<figcaption>${md(cap)}</figcaption>` : ''}</figure>` : '';

  const unitUnlocked = (c, u) => u === 0 || (Progress.quizScore(c, u - 1) || 0) >= QUIZ_PASS;
  const testUnlocked = c => course(c).units.every((_, u) => (Progress.quizScore(c, u) || 0) >= QUIZ_PASS);
  const testPassed = c => { const t = Progress.testScore(c); return t && t.best >= TEST_PASS; };

  function courseProgress(c) {
    const C = course(c);
    let total = 0, done = 0;
    C.units.forEach((unit, u) => {
      unit.lessons.forEach((_, l) => { total++; if (Progress.lessonDone(c, u, l)) done++; });
      total++; if ((Progress.quizScore(c, u) || 0) >= QUIZ_PASS) done++;
    });
    total += 2; if (testPassed(c)) done += 2;
    return Math.round(done / total * 100);
  }

  // Two-tap confirm: the first tap asks, the second tap (within 4s) does it. Works where confirm() is blocked.
  function confirmTap(btn, question) {
    if (btn.dataset.armed === '1') { btn.dataset.armed = ''; btn.textContent = btn.dataset.label; return true; }
    btn.dataset.label = btn.dataset.label || btn.textContent;
    btn.dataset.armed = '1';
    btn.textContent = question;
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.dataset.armed = ''; btn.textContent = btn.dataset.label; }, 4000);
    return false;
  }

  function setTitle(t) { document.title = t ? `${t} · CodePath` : 'CodePath — Learn to Code'; }

  function render(html, { wide = false, title = '' } = {}) {
    app.className = wide ? 'wide' : '';
    app.innerHTML = html;
    setTitle(title);
    window.scrollTo(0, 0);
  }

  // ---------- code playground ----------
  function playground({ code, lang = 'html', title = 'Try it yourself', tests = null, autorun = true, onChange = null, runLabel = null }) {
    const el = h(`
      <div class="playground">
        <div class="pg-head">
          <span class="title">${esc(title)}</span>
          <span class="lang">${lang === 'js' ? 'JavaScript' : 'HTML / CSS'}</span>
          <span class="spacer"></span>
          <button class="btn small" data-act="reset" type="button">↺ Reset</button>
          <button class="btn small primary" data-act="run" type="button">${runLabel || '▶ Run'}</button>
        </div>
        <div class="pg-body">
          <textarea class="pg-editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="Code editor"></textarea>
          <div class="pg-out">
            <div class="out-label">${lang === 'js' ? 'Console output' : 'Result'}</div>
            <div class="frame-holder" style="${lang === 'js' ? 'display:none' : 'display:flex;flex-direction:column;flex:1'}"></div>
            <pre class="console" ${lang === 'js' ? '' : 'hidden'}></pre>
            <ul class="checks" hidden></ul>
          </div>
        </div>
      </div>`);
    const ta = el.querySelector('textarea');
    const holder = el.querySelector('.frame-holder');
    const con = el.querySelector('.console');
    const checks = el.querySelector('.checks');
    ta.value = code;
    const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.min(Math.max(ta.scrollHeight + 4, 200), 520) + 'px'; };

    const line = (text, cls) => {
      if (lang !== 'js') con.hidden = false;
      const s = document.createElement('div');
      if (cls) s.className = cls;
      s.textContent = text;
      con.appendChild(s);
      con.scrollTop = con.scrollHeight;
    };

    async function run(withTests) {
      con.textContent = '';
      if (lang === 'js') line('Running…', 'note');
      else con.hidden = true;
      checks.hidden = true;
      let first = true;
      const clearNote = () => { if (first && lang === 'js') { con.textContent = ''; first = false; } };
      const res = await Runner.run({
        lang, code: ta.value, container: holder,
        tests: withTests && tests ? tests : null,
        onLog: (t, lvl) => { clearNote(); line(t, lvl === 'error' ? 'err' : lvl === 'warn' ? 'warn' : ''); },
        onError: t => { clearNote(); line('❌ ' + t, 'err'); }
      });
      clearNote();
      if (lang === 'js' && !res.logs.length && !res.errors.length) line('(nothing was printed — use console.log() to see values)', 'note');
      if (res.timedOut && withTests) line('⏱️ Your code took too long. Check for a loop that never ends.', 'err');
      if (withTests && tests) {
        checks.hidden = false;
        checks.innerHTML = tests.map((t, i) => {
          const r = res.results[i];
          const ok = r && r.pass;
          return `<li class="${ok ? 'pass' : 'fail'}">${mdInline(t.name)}${!ok && r && r.error ? ` <span class="muted small">(${esc(r.error)})</span>` : ''}</li>`;
        }).join('');
      }
      const passed = !!(tests && res.results.length === tests.length && res.results.every(r => r.pass));
      return { ...res, passed };
    }

    ta.addEventListener('keydown', e => {
      if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        const s = ta.selectionStart, en = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 2;
      } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); run(!!tests);
      }
    });
    ta.addEventListener('input', () => { fit(); onChange && onChange(ta.value); });
    el.querySelector('[data-act=run]').addEventListener('click', () => run(!!tests));
    el.querySelector('[data-act=reset]').addEventListener('click', () => { ta.value = code; fit(); onChange && onChange(code); run(false); });
    requestAnimationFrame(fit);
    if (autorun) setTimeout(() => run(false), 50);
    else if (lang === 'js') line('Press ▶ Run to see the output.', 'note');
    return { el, run, get value() { return ta.value; }, set value(v) { ta.value = v; fit(); } };
  }

  // ---------- screens ----------
  function courseCard(id) {
    const C = course(id);
    const pct = courseProgress(id);
    return `
      <a class="card course-card" href="#/course/${id}" style="${colorVars(id)}">
        <span class="level">${esc(C.level)}</span>
        <h3>${esc(C.title)}</h3>
        <p>${esc(C.tagline)}</p>
        <div class="progressbar" aria-label="${pct}% complete"><div style="width:${pct}%"></div></div>
        <span class="small muted">${pct}% complete${testPassed(id) ? ' · 🏆 Certified' : ''}</span>
      </a>`;
  }

  function home() {
    const started = Object.keys(Progress.state.lessons).length > 0;
    let next = null;
    for (const c of COURSE_IDS) {
      const C = course(c);
      for (let u = 0; u < C.units.length && !next; u++) {
        if (!unitUnlocked(c, u)) break;
        const l = C.units[u].lessons.findIndex((_, i) => !Progress.lessonDone(c, u, i));
        if (l >= 0) next = { href: `#/lesson/${c}/${u}/${l}`, label: `${C.title} · Unit ${u + 1}: ${C.units[u].lessons[l].title}` };
        else if ((Progress.quizScore(c, u) || 0) < QUIZ_PASS) next = { href: `#/quiz/${c}/${u}`, label: `${C.title} · Unit ${u + 1} pop quiz` };
      }
      if (!next && testUnlocked(c) && !testPassed(c)) next = { href: `#/test/${c}`, label: `${C.title} · Final test` };
      if (next) break;
    }
    render(`
      <section class="hero">
        <h1>${Progress.name ? `Welcome back, ${esc(Progress.name)}!` : 'Learn to code, one step at a time.'}</h1>
        <p>Three courses — HTML &amp; CSS, then JavaScript — with pictures, a live code editor, pop quizzes and final tests. Works on your phone and your computer.</p>
        <div class="row">
          ${started && next ? `<a class="btn" href="${next.href}">▶ Continue</a>` : `<a class="btn" href="#/intro">▶ Start with the Introduction</a>`}
          <a class="btn ghost" href="#/course/beginner">Go to Beginner</a>
        </div>
        ${started && next ? `<p class="small" style="margin:.8rem 0 0">Up next: ${esc(next.label)}</p>` : ''}
      </section>
      <h2>Your courses</h2>
      <div class="grid cols-3">${COURSE_IDS.map(courseCard).join('')}</div>
      ${pic('roadmap', 'Your path: set up your computer, then work through each course in order. Each one ends with a final test and a certificate.')}
      <div class="card">
        <h3 style="margin-top:0">📱 Install CodePath as an app</h3>
        <p class="small muted" style="margin:0"><b>iPhone:</b> Safari → Share → <i>Add to Home Screen</i>. <b>Android:</b> Chrome menu ⋮ → <i>Install app</i>. <b>Computer:</b> Chrome/Edge → the install icon in the address bar. Your progress is saved on each device.</p>
      </div>`, { title: '' });
  }

  function coursesList() {
    render(`<h1>Courses</h1><p class="muted">Take them in order — each one builds on the last.</p>
      <div class="grid">${COURSE_IDS.map(courseCard).join('')}</div>
      <p class="center"><a href="#/intro">New here? Read the Introduction first →</a></p>`, { title: 'Courses' });
  }

  function intro() {
    render(`
      <div class="crumbs"><a href="#/">Home</a> › Introduction</div>
      <h1>${esc(INTRO.title)}</h1>
      ${INTRO.sections.map(s => `
        <section class="lesson-body">
          <h2>${esc(s.heading)}</h2>
          ${md(s.body)}
          ${pic(s.pic, s.cap)}
        </section>`).join('')}
      <div class="row" style="margin-top:24px">
        <a class="btn primary" href="#/lesson/beginner/0/0">Start the Beginner course →</a>
      </div>`, { title: 'Introduction' });
  }

  function courseView(c) {
    const C = course(c);
    if (!C) return notFound();
    const tScore = Progress.testScore(c);
    const units = C.units.map((unit, u) => {
      const open = unitUnlocked(c, u);
      const q = Progress.quizScore(c, u);
      return `
        <div class="unit ${open ? '' : 'locked'}">
          <div class="num">${open ? u + 1 : '🔒'}</div>
          <div style="flex:1;min-width:0">
            <h3>Unit ${u + 1}: ${esc(unit.title)}</h3>
            <div class="small muted">${esc(unit.intro)}</div>
            ${open ? `
              <ol>
                ${unit.lessons.map((ls, l) => `<li class="${Progress.lessonDone(c, u, l) ? 'done' : ''}"><a href="#/lesson/${c}/${u}/${l}">${esc(ls.title)}</a></li>`).join('')}
              </ol>
              <div class="row">
                <a class="btn small" href="#/recap/${c}/${u}">📝 Recap</a>
                <a class="btn small" href="#/quiz/${c}/${u}">❓ Pop quiz</a>
                ${q !== undefined ? `<span class="badge ${q >= QUIZ_PASS ? 'good' : 'bad'}">Best: ${q}%</span>` : ''}
              </div>` : `<p class="small muted" style="margin:.5em 0 0">Pass the Unit ${u} pop quiz (${QUIZ_PASS}%+) to unlock.</p>`}
          </div>
        </div>`;
    }).join('');
    const tOpen = testUnlocked(c);
    render(`
      <div class="crumbs"><a href="#/">Home</a> › ${esc(C.title)}</div>
      <div style="${colorVars(c)}">
        <span class="badge" style="background:var(--c-soft);color:var(--c)">${esc(C.level)}</span>
        <h1>${esc(C.title)}</h1>
        <p class="lesson-body">${md(C.description)}</p>
        <div class="progressbar"><div style="width:${courseProgress(c)}%"></div></div>
        ${pic('unitFlow', 'How every unit works: read the lessons (with pictures and live code), review the recap, then take the 5-question pop quiz.')}
        <div class="stack">${units}</div>
        <div class="unit ${tOpen ? '' : 'locked'}" style="margin-top:14px">
          <div class="num">${tOpen ? '🎓' : '🔒'}</div>
          <div style="flex:1">
            <h3>Final test</h3>
            <div class="small muted">${C.test.mc.length} multiple-choice + ${C.test.fix.length} fix-the-broken-code questions. Pass with ${TEST_PASS}% to earn your certificate.</div>
            <div class="row" style="margin-top:10px">
              ${tOpen ? `<a class="btn small primary" href="#/test/${c}">Take the test</a>` : `<span class="small muted">Pass all 5 pop quizzes to unlock.</span>`}
              ${tScore ? `<span class="badge ${tScore.best >= TEST_PASS ? 'good' : 'bad'}">Best: ${tScore.best}%</span>` : ''}
              ${testPassed(c) ? `<a class="btn small" href="#/cert/${c}">🏆 Certificate</a>` : ''}
            </div>
          </div>
        </div>
      </div>`, { title: C.title });
  }

  function lockedView(c, u) {
    render(`<div class="card center"><h1>🔒 Locked</h1><p>Pass the Unit ${u} pop quiz with ${QUIZ_PASS}% or more to open this unit.</p>
      <a class="btn primary" href="#/quiz/${c}/${u - 1}">Take Unit ${u} quiz</a> <a class="btn" href="#/course/${c}">Back to course</a></div>`, { title: 'Locked' });
  }

  function lesson(c, u, l) {
    const C = course(c);
    const unit = C && C.units[u];
    const L = unit && unit.lessons[l];
    if (!L) return notFound();
    if (!unitUnlocked(c, u)) return lockedView(c, u);
    const last = l === unit.lessons.length - 1;
    const nextHref = last ? `#/recap/${c}/${u}` : `#/lesson/${c}/${u}/${l + 1}`;
    const prevHref = l > 0 ? `#/lesson/${c}/${u}/${l - 1}` : `#/course/${c}`;
    render(`
      <div class="crumbs"><a href="#/course/${c}">${esc(C.title)}</a> › Unit ${u + 1}: ${esc(unit.title)} › Lesson ${l + 1} of ${unit.lessons.length}</div>
      <h1>${esc(L.title)}</h1>
      <div class="lesson-body">${md(L.body)}</div>
      ${pic(L.pic, L.cap)}
      <div id="pg"></div>
      ${L.after ? `<div class="lesson-body">${md(L.after)}</div>` : ''}
      <div class="row" style="margin-top:20px">
        <a class="btn" href="${prevHref}">← Back</a>
        <span class="spacer"></span>
        <a class="btn primary" id="nextBtn" href="${nextHref}">${last ? 'Finish → Unit recap' : 'Next lesson →'}</a>
      </div>`, { wide: true, title: L.title });
    if (L.code) {
      const pg = playground({ code: L.code, lang: L.lang || C.lang, title: L.codeTitle || 'Example — edit me and press Run' });
      document.getElementById('pg').appendChild(pg.el);
    }
    document.getElementById('nextBtn').addEventListener('click', () => Progress.markLesson(c, u, l));
  }

  function recap(c, u) {
    const C = course(c);
    const unit = C && C.units[u];
    if (!unit) return notFound();
    if (!unitUnlocked(c, u)) return lockedView(c, u);
    render(`
      <div class="crumbs"><a href="#/course/${c}">${esc(C.title)}</a> › Unit ${u + 1} › Recap</div>
      <h1>📝 Unit ${u + 1} Recap: ${esc(unit.title)}</h1>
      <p class="muted">The key ideas from this unit. Read them out loud — if any feel fuzzy, go back to that lesson before the quiz.</p>
      <ul class="recap-list">${unit.recap.map(p => `<li>${md(p)}</li>`).join('')}</ul>
      ${unit.cheat ? `<h2>Cheat sheet</h2>${md('{{{\n' + unit.cheat + '\n}}}')}` : ''}
      <div class="row" style="margin-top:22px">
        <a class="btn" href="#/lesson/${c}/${u}/0">↺ Review lessons</a>
        <span class="spacer"></span>
        <a class="btn primary" href="#/quiz/${c}/${u}">Take the pop quiz →</a>
      </div>`, { title: `Unit ${u + 1} recap` });
  }

  function quiz(c, u) {
    const C = course(c);
    const unit = C && C.units[u];
    if (!unit) return notFound();
    if (!unitUnlocked(c, u)) return lockedView(c, u);
    const qs = unit.quiz;
    let i = 0, score = 0;

    const show = () => {
      const q = qs[i];
      render(`
        <div class="crumbs"><a href="#/course/${c}">${esc(C.title)}</a> › Unit ${u + 1} › Pop quiz</div>
        <div class="card">
          <div class="q-progress"><span>❓ Pop quiz · Unit ${u + 1}</span><span>Question ${i + 1} / ${qs.length}</span></div>
          <div class="progressbar"><div style="width:${i / qs.length * 100}%"></div></div>
          <div class="question">${mdInline(q.q)}${q.code ? md('{{{\n' + q.code + '\n}}}') : ''}</div>
          <div class="options">${q.options.map((o, k) => `<button class="option" data-k="${k}" type="button"><span class="letter">${LETTERS[k]}</span><span>${mdInline(o)}</span></button>`).join('')}</div>
          <div id="after"></div>
        </div>`, { title: `Unit ${u + 1} quiz` });
      app.querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => {
        const k = +btn.dataset.k;
        const right = k === q.answer;
        if (right) score++;
        app.querySelectorAll('.option').forEach(b => {
          b.disabled = true;
          if (+b.dataset.k === q.answer) b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
        });
        const after = document.getElementById('after');
        after.innerHTML = `<div class="explain"><b>${right ? '✅ Correct!' : '❌ Not quite.'}</b> ${mdInline(q.why)}</div>
          <div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn primary" id="nextQ" type="button">${i < qs.length - 1 ? 'Next question →' : 'See my score →'}</button></div>`;
        const nb = document.getElementById('nextQ');
        nb.focus();
        nb.addEventListener('click', () => { i++; i < qs.length ? show() : finish(); });
      }));
    };

    const finish = () => {
      const pct = Math.round(score / qs.length * 100);
      Progress.setQuiz(c, u, pct);
      const pass = pct >= QUIZ_PASS;
      const lastUnit = u === C.units.length - 1;
      render(`
        <div class="card center">
          <div class="muted">Unit ${u + 1} pop quiz</div>
          <div class="score-big" style="color:var(${pass ? '--good' : '--bad'})">${pct}%</div>
          <p>${score} of ${qs.length} correct. ${pass ? (pct === 100 ? 'Perfect score! 🎉' : 'Nice work — you passed! 🎉') : `You need ${QUIZ_PASS}% to unlock the next step. Review the recap and try again — you've got this.`}</p>
          <div class="row" style="justify-content:center">
            <button class="btn" id="retry" type="button">↺ Retry quiz</button>
            ${pass ? (lastUnit
              ? (testUnlocked(c) ? `<a class="btn primary" href="#/test/${c}">Go to the final test →</a>` : `<a class="btn primary" href="#/course/${c}">Back to course</a>`)
              : `<a class="btn primary" href="#/lesson/${c}/${u + 1}/0">Start Unit ${u + 2} →</a>`)
              : `<a class="btn primary" href="#/recap/${c}/${u}">Review recap</a>`}
          </div>
        </div>`, { title: 'Quiz result' });
      document.getElementById('retry').addEventListener('click', () => { i = 0; score = 0; show(); });
    };
    show();
  }

  function test(c) {
    const C = course(c);
    if (!C) return notFound();
    if (!testUnlocked(c)) {
      return render(`<div class="card center"><h1>🔒 Final test locked</h1><p>Pass all 5 unit pop quizzes (${QUIZ_PASS}%+) to unlock the ${esc(C.title)} final test.</p><a class="btn primary" href="#/course/${c}">Back to course</a></div>`, { title: 'Locked' });
    }
    const T = C.test;
    const draft = Progress.getDraft(c) || { mc: {}, fix: {} };
    let saveTimer;
    const saveDraft = () => { clearTimeout(saveTimer); saveTimer = setTimeout(() => Progress.setDraft(c, draft), 300); };

    render(`
      <div class="crumbs"><a href="#/course/${c}">${esc(C.title)}</a> › Final test</div>
      <h1>🎓 ${esc(C.title)} — Final Test</h1>
      <div class="card">
        <p style="margin-top:0"><b>${T.mc.length + T.fix.length} questions:</b> Part A is ${T.mc.length} multiple-choice. Part B is ${T.fix.length} broken programs — read what each one <i>should</i> do, then fix the code. You can press <b>Run checks</b> to test your fix as many times as you like.</p>
        <p style="margin-bottom:0">Pass mark: <b>${TEST_PASS}%</b>. Your answers are saved as you go, so you can leave and come back.</p>
      </div>
      <div id="result"></div>
      <h2>Part A — Multiple choice</h2>
      <div id="mc"></div>
      <h2>Part B — Fix the broken code</h2>
      <div id="fix"></div>
      <div class="row" style="margin-top:22px">
        <button class="btn" id="clear" type="button">Clear my answers</button>
        <span class="spacer"></span>
        <button class="btn primary" id="submit" type="button">Submit test</button>
      </div>`, { wide: true, title: 'Final test' });

    const mcBox = document.getElementById('mc');
    T.mc.forEach((q, qi) => {
      const el = h(`
        <div class="test-q" id="mc${qi}">
          <div class="qnum">Question ${qi + 1}</div>
          <div class="question">${mdInline(q.q)}${q.code ? md('{{{\n' + q.code + '\n}}}') : ''}</div>
          ${q.options.map((o, k) => `<label class="radio-opt"><input type="radio" name="mc${qi}" value="${k}" ${draft.mc[qi] === k ? 'checked' : ''}><span><b>${LETTERS[k]}.</b> ${mdInline(o)}</span></label>`).join('')}
          <div class="feedback"></div>
        </div>`);
      el.querySelectorAll('input').forEach(inp => inp.addEventListener('change', () => { draft.mc[qi] = +inp.value; saveDraft(); }));
      mcBox.appendChild(el);
    });

    const fixBox = document.getElementById('fix');
    const pgs = T.fix.map((f, fi) => {
      const num = T.mc.length + fi + 1;
      const wrap = h(`
        <div class="test-q" id="fix${fi}">
          <div class="qnum">Question ${num} · Fix the code</div>
          <h3 style="margin:.3em 0">${esc(f.title)}</h3>
          <div class="lesson-body">${md(f.task)}</div>
          <div class="pg-slot"></div>
          <div class="feedback"></div>
        </div>`);
      const pg = playground({
        code: f.broken, lang: f.lang || C.lang, title: '🐞 Broken code', tests: f.tests, autorun: false,
        runLabel: '▶ Run checks',
        onChange: v => { draft.fix[fi] = v; saveDraft(); }
      });
      if (draft.fix[fi] !== undefined) pg.value = draft.fix[fi];
      wrap.querySelector('.pg-slot').appendChild(pg.el);
      fixBox.appendChild(wrap);
      return pg;
    });

    document.getElementById('clear').addEventListener('click', e => {
      if (!confirmTap(e.currentTarget, 'Tap again to clear all answers')) return;
      Progress.clearDraft(c);
      test(c);
    });

    document.getElementById('submit').addEventListener('click', async () => {
      const btn = document.getElementById('submit');
      const unanswered = T.mc.filter((_, qi) => draft.mc[qi] === undefined).length;
      if (unanswered && !confirmTap(btn, `${unanswered} unanswered. Tap again to submit`)) return;
      btn.disabled = true; btn.textContent = 'Grading…';
      let correct = 0;
      T.mc.forEach((q, qi) => {
        const box = document.getElementById('mc' + qi);
        const ok = draft.mc[qi] === q.answer;
        if (ok) correct++;
        box.classList.remove('res-good', 'res-bad');
        box.classList.add(ok ? 'res-good' : 'res-bad');
        box.querySelectorAll('.radio-opt').forEach((lab, k) => {
          lab.classList.remove('is-correct', 'is-wrong');
          if (k === q.answer) lab.classList.add('is-correct');
          else if (k === draft.mc[qi]) lab.classList.add('is-wrong');
        });
        box.querySelector('.feedback').innerHTML = `<div class="explain">${ok ? '✅' : '❌'} ${mdInline(q.why)}</div>`;
      });
      for (let fi = 0; fi < pgs.length; fi++) {
        const res = await pgs[fi].run(true);
        const box = document.getElementById('fix' + fi);
        if (res.passed) correct++;
        box.classList.remove('res-good', 'res-bad');
        box.classList.add(res.passed ? 'res-good' : 'res-bad');
        box.querySelector('.feedback').innerHTML = `<div class="explain">${res.passed ? '✅ Fixed! All checks pass.' : '❌ Some checks still fail.'}
          <details style="margin-top:6px"><summary>Show a correct solution</summary>${md('{{{\n' + T.fix[fi].solution + '\n}}}')}${T.fix[fi].why ? `<p class="small">${mdInline(T.fix[fi].why)}</p>` : ''}</details></div>`;
      }
      const total = T.mc.length + T.fix.length;
      const pct = Math.round(correct / total * 100);
      Progress.setTest(c, pct);
      const pass = pct >= TEST_PASS;
      document.getElementById('result').innerHTML = `
        <div class="card center" style="margin-top:14px;border-color:var(${pass ? '--good' : '--bad'})">
          <div class="score-big" style="color:var(${pass ? '--good' : '--bad'})">${pct}%</div>
          <p>${correct} of ${total} correct. ${pass ? 'You passed! 🎉 Your certificate is ready.' : `You need ${TEST_PASS}% to pass. Scroll down to see what to fix, then submit again.`}</p>
          ${pass ? `<a class="btn primary" href="#/cert/${c}">🏆 View certificate</a>` : ''}
        </div>`;
      btn.disabled = false; btn.textContent = 'Submit again';
      document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function cert(c) {
    const C = course(c);
    if (!C) return notFound();
    const t = Progress.testScore(c);
    if (!testPassed(c)) {
      return render(`<div class="card center"><h1>No certificate yet</h1><p>Pass the ${esc(C.title)} final test with ${TEST_PASS}% to earn it.</p><a class="btn primary" href="#/course/${c}">Back to course</a></div>`, { title: 'Certificate' });
    }
    const date = new Date(t.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    render(`
      <div class="crumbs no-print"><a href="#/course/${c}">${esc(C.title)}</a> › Certificate</div>
      <div class="card no-print" style="margin-bottom:14px">
        <label class="field" for="nm">Name on certificate</label>
        <div class="row"><input class="input" id="nm" style="flex:1" value="${esc(Progress.name)}" placeholder="Your full name">${window.self === window.top ? '<button class="btn primary" id="print" type="button">🖨️ Print / Save PDF</button>' : ''}</div>
        ${window.self === window.top ? '' : '<p class="small muted" style="margin:8px 0 0">To print or save as PDF, open the installed app (from GitHub Pages) or take a screenshot.</p>'}
      </div>
      <div class="cert">
        <div class="seal">🏆</div>
        <div style="letter-spacing:.2em;font-size:.8rem">CERTIFICATE OF COMPLETION</div>
        <h1>${esc(C.certTitle)}</h1>
        <p style="margin:.8em 0 0">This certifies that</p>
        <div class="name" id="certName">${esc(Progress.name || 'Your Name')}</div>
        <p>has completed all 5 units and passed the final test with a score of <b>${t.best}%</b>,<br>demonstrating skills in ${esc(C.skills)}.</p>
        <p style="margin-bottom:0">${date} · CodePath</p>
      </div>
      <div class="card no-print" style="margin-top:14px">
        <h3 style="margin-top:0">📄 Put it on your resume</h3>
        <p class="small">Under <i>Education &amp; Training</i> or <i>Certifications</i>:</p>
        ${md('{{{\n' + C.resume + '\n}}}')}
        <p class="small muted">Tip: pair it with a real project on GitHub (the Advanced course shows you how) so employers can see your code.</p>
      </div>`, { title: 'Certificate' });
    const nm = document.getElementById('nm');
    nm.addEventListener('input', () => { Progress.name = nm.value.trim(); document.getElementById('certName').textContent = nm.value.trim() || 'Your Name'; });
    const pb = document.getElementById('print');
    if (pb) pb.addEventListener('click', () => window.print());
  }

  function profile() {
    const rows = COURSE_IDS.map(c => {
      const C = course(c);
      const quizzes = C.units.map((_, u) => Progress.quizScore(c, u));
      const t = Progress.testScore(c);
      return `<tr><td><a href="#/course/${c}">${esc(C.title)}</a></td><td>${courseProgress(c)}%</td><td>${quizzes.map(q => q === undefined ? '–' : q + '%').join(' · ')}</td><td>${t ? t.best + '%' : '–'}${testPassed(c) ? ` <a href="#/cert/${c}">🏆</a>` : ''}</td></tr>`;
    }).join('');
    render(`
      <h1>👤 Profile &amp; settings</h1>
      <div class="card stack">
        <div>
          <label class="field" for="nm">Your name (used on certificates)</label>
          <input class="input" id="nm" value="${esc(Progress.name)}" placeholder="Your full name">
        </div>
        <div>
          <label class="field" for="theme">Appearance</label>
          <select class="input" id="theme">
            <option value="">Match my device</option>
            <option value="light" ${Progress.theme === 'light' ? 'selected' : ''}>Light</option>
            <option value="dark" ${Progress.theme === 'dark' ? 'selected' : ''}>Dark</option>
          </select>
        </div>
      </div>
      <h2>Progress</h2>
      <div class="card table-wrap">
        <table class="simple"><thead><tr><th>Course</th><th>Done</th><th>Quiz best (units 1–5)</th><th>Final test</th></tr></thead><tbody>${rows}</tbody></table>
      </div>
      <h2>Your data</h2>
      <p class="muted small">Progress is stored on this device only (in your browser). Using another device? Your progress starts fresh there.</p>
      <button class="btn" id="reset" type="button">🗑️ Reset all progress</button>`, { title: 'Profile' });
    const nm = document.getElementById('nm');
    nm.addEventListener('input', () => { Progress.name = nm.value.trim(); });
    document.getElementById('theme').addEventListener('change', e => { Progress.theme = e.target.value; applyTheme(); });
    document.getElementById('reset').addEventListener('click', e => {
      if (confirmTap(e.currentTarget, 'Tap again to erase everything (can\'t be undone)')) { Progress.reset(); profile(); }
    });
  }

  function notFound() {
    render(`<div class="card center"><h1>Page not found</h1><a class="btn primary" href="#/">Go home</a></div>`, { title: 'Not found' });
  }

  // ---------- router ----------
  function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    const [view, c, a, b] = parts;
    const n = x => parseInt(x, 10);
    switch (view) {
      case undefined: home(); break;
      case 'intro': intro(); break;
      case 'courses': coursesList(); break;
      case 'course': courseView(c); break;
      case 'lesson': lesson(c, n(a), n(b)); break;
      case 'recap': recap(c, n(a)); break;
      case 'quiz': quiz(c, n(a)); break;
      case 'test': test(c); break;
      case 'cert': cert(c); break;
      case 'profile': profile(); break;
      default: notFound();
    }
    const key = view === 'lesson' || view === 'recap' || view === 'quiz' || view === 'test' || view === 'cert' ? 'course/' + c : (view || '');
    document.querySelectorAll('.topnav a, .bottomnav a').forEach(a => {
      const href = a.getAttribute('href').replace('#/', '');
      const active = href === key || (href === 'courses' && /^course/.test(key)) || (href === '' && key === '');
      a.classList.toggle('active', active);
    });
    app.focus({ preventScroll: true });
  }

  // ---------- theme ----------
  function applyTheme() {
    const t = Progress.theme;
    if (t) document.documentElement.dataset.theme = t;
    else delete document.documentElement.dataset.theme;
  }
  document.getElementById('themeToggle').addEventListener('click', () => {
    const dark = Progress.theme ? Progress.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    Progress.theme = dark ? 'light' : 'dark';
    applyTheme();
  });

  applyTheme();
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
