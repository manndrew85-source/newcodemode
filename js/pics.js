// Hand-drawn SVG "pictures" that show what code concepts look like. Colors come from CSS so they work in dark mode.
const Pics = (() => {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = (w, h, body, label) =>
    `<svg class="dg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label || 'Diagram')}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const R = (x, y, w, h, cls = 'box', rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" class="${cls}"/>`;
  const T = (x, y, txt, cls = '', anchor = 'middle') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}" dominant-baseline="middle">${esc(txt)}</text>`;
  const C = (x, y, r, cls = 'box') => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
  function A(x1, y1, x2, y2, cls = 'line') {
    const ang = Math.atan2(y2 - y1, x2 - x1), s = 9;
    const p1 = [x2 - s * Math.cos(ang - 0.45), y2 - s * Math.sin(ang - 0.45)];
    const p2 = [x2 - s * Math.cos(ang + 0.45), y2 - s * Math.sin(ang + 0.45)];
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/><polygon points="${x2},${y2} ${p1} ${p2}" class="arrowhead"/>`;
  }
  const L = (x1, y1, x2, y2, cls = 'line') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  // labelled box helper
  const B = (x, y, w, h, label, cls = 'box', tcls = '') => R(x, y, w, h, cls) + T(x + w / 2, y + h / 2, label, tcls);
  // a dark code block with lines of text
  function code(x, y, w, lines, lh = 22) {
    const h = lines.length * lh + 18;
    return R(x, y, w, h, 'codebg', 10) + lines.map((ln, i) => T(x + 14, y + 20 + i * lh, ln, 'codetext', 'start')).join('');
  }

  const P = {
    // ---------- Intro ----------
    setup: svg(640, 300, [
      R(20, 20, 400, 250, 'box2', 14), R(20, 20, 400, 30, 'box', 14), T(220, 36, 'Your computer', 'bold'),
      R(40, 66, 175, 185, 'box', 8), T(127, 84, 'Code editor (VS Code)', 'small bold'),
      code(50, 100, 155, ['<h1>Hi!</h1>', '<p>I code.</p>'], 22),
      R(228, 66, 175, 185, 'box', 8), T(315, 84, 'Web browser', 'small bold'),
      R(238, 100, 155, 140, 'a', 6), T(315, 130, 'Hi!', 'big'), T(315, 160, 'I code.', ''),
      A(207, 160, 236, 160, 'line-a'),
      R(460, 60, 160, 90, 'c', 12), T(540, 92, 'Internet', 'bold'), T(540, 116, '(for downloads)', 'small muted'),
      R(460, 170, 160, 90, 'd', 12), T(540, 202, 'CodePath app', 'bold'), T(540, 226, 'phone or computer', 'small muted'),
      A(420, 105, 458, 105), A(420, 215, 458, 215)
    ].join(''), 'Computer with a code editor and a browser'),

    roadmap: svg(640, 170, [
      L(70, 85, 570, 85, 'line dash'),
      C(70, 85, 34, 'd'), T(70, 85, 'Intro', 'small bold'),
      C(237, 85, 46, 'b'), T(237, 78, 'Beginner', 'small bold'), T(237, 96, 'HTML + CSS', 'small'),
      C(403, 85, 46, 'a'), T(403, 78, 'Intermediate', 'small bold'), T(403, 96, 'JavaScript', 'small'),
      C(570, 85, 46, 'c'), T(570, 78, 'Advanced', 'small bold'), T(570, 96, 'JS apps', 'small'),
      T(237, 150, '5 units + test', 'small muted'), T(403, 150, '5 units + test', 'small muted'), T(570, 150, '5 units + test', 'small muted'),
      T(70, 150, 'setup', 'small muted')
    ].join(''), 'Course roadmap'),

    unitFlow: svg(640, 110, [
      B(10, 30, 130, 50, 'Lessons', 'a', 'bold'), A(140, 55, 168, 55),
      B(170, 30, 130, 50, 'Recap', 'c', 'bold'), A(300, 55, 328, 55),
      B(330, 30, 130, 50, 'Pop quiz', 'b', 'bold'), A(460, 55, 488, 55),
      B(490, 30, 140, 50, 'Next unit 🔓', 'd', 'bold'),
      T(395, 98, 'score 60%+ to unlock', 'small muted')
    ].join(''), 'Each unit: lessons, recap, quiz, unlock'),

    // ---------- Beginner U1 ----------
    webFlow: svg(640, 220, [
      R(20, 50, 170, 120, 'a'), T(105, 80, '💻 Your browser', 'bold'), T(105, 110, 'asks for a page', 'small'), T(105, 132, 'example.com', 'small mono'),
      R(450, 50, 170, 120, 'c'), T(535, 80, '🗄️ Web server', 'bold'), T(535, 110, 'stores the files', 'small'), T(535, 132, 'index.html, style.css', 'small mono'),
      A(190, 85, 448, 85, 'line-a'), T(320, 70, '1. "Please send the page"', 'small'),
      A(450, 140, 192, 140), T(320, 158, '2. Sends HTML, CSS, JS back', 'small'),
      T(320, 200, '3. The browser reads the code and draws the page on screen', 'small muted')
    ].join(''), 'How a web page reaches your browser'),

    tagAnatomy: svg(640, 200, [
      T(320, 80, '<p class="intro">Hello world</p>', 'mono big'),
      L(95, 100, 95, 125, 'line'), L(95, 125, 160, 125, 'line'), T(100, 145, 'opening tag', 'small tb bold', 'start'),
      L(215, 60, 215, 35, 'line'), T(215, 25, 'attribute (extra info)', 'small ta bold'),
      L(375, 100, 375, 125, 'line'), T(375, 145, 'content', 'small tc bold'),
      L(510, 100, 510, 125, 'line'), T(510, 145, 'closing tag (has /)', 'small td bold'),
      T(320, 182, 'opening tag + content + closing tag = one ELEMENT', 'small muted')
    ].join(''), 'Parts of an HTML element'),

    pageStructure: svg(640, 280, [
      R(20, 10, 600, 260, 'box2'), T(40, 30, '<html>', 'mono bold', 'start'),
      R(40, 45, 560, 70, 'c'), T(56, 62, '<head>  — info about the page (not shown)', 'mono small', 'start'),
      R(60, 78, 240, 28, 'box', 6), T(180, 92, '<title>My Page</title>', 'mono small'),
      R(40, 125, 560, 130, 'a'), T(56, 142, '<body>  — everything you SEE', 'mono small', 'start'),
      R(60, 158, 240, 34, 'box', 6), T(180, 175, '<h1>Welcome</h1>', 'mono small'),
      R(60, 200, 240, 34, 'box', 6), T(180, 217, '<p>Some text…</p>', 'mono small'),
      R(330, 158, 250, 76, 'box', 6), T(455, 180, 'Welcome', 'big'), T(455, 210, 'Some text…', 'small'),
      T(455, 245, '↑ what the browser shows', 'small muted')
    ].join(''), 'Structure of an HTML page'),

    // ---------- Beginner U2 ----------
    headings: svg(640, 230, [
      ...[['<h1>', 30, 34], ['<h2>', 24, 76], ['<h3>', 19, 112], ['<h4>', 16, 142], ['<h5>', 13.5, 168], ['<h6>', 11, 192]].map(([t, s, y]) =>
        T(30, y, t, 'mono small muted', 'start') + `<text x="110" y="${y}" dominant-baseline="middle" style="font-size:${s}px;font-weight:700">Heading level ${t[2]}</text>`),
      T(470, 120, 'Biggest → smallest', 'small muted'), A(470, 60, 470, 100), A(470, 140, 470, 190)
    ].join(''), 'Six heading sizes'),

    linkImg: svg(640, 230, [
      T(320, 35, '<a href="https://site.com">Visit</a>', 'mono'),
      L(195, 52, 195, 70), T(195, 82, 'where it goes', 'small ta bold'),
      L(400, 52, 400, 70), T(400, 82, 'text you click', 'small tc bold'),
      T(320, 135, '<img src="cat.jpg" alt="A sleepy cat">', 'mono'),
      L(225, 152, 225, 170), T(225, 182, 'image file', 'small tb bold'),
      L(420, 152, 420, 170), T(420, 182, 'description for screen readers', 'small td bold'),
      T(320, 212, '<img> has NO closing tag — it is "self-closing"', 'small muted')
    ].join(''), 'Anatomy of links and images'),

    lists: svg(640, 210, [
      code(20, 20, 280, ['<ul>', '  <li>Milk</li>', '  <li>Eggs</li>', '</ul>'], 24),
      R(330, 20, 290, 114, 'box'), T(345, 50, '•  Milk', '', 'start'), T(345, 80, '•  Eggs', '', 'start'), T(560, 45, 'ul = bullets', 'small ta bold'),
      code(20, 140, 280, ['<ol> … </ol>'], 24),
      R(330, 140, 290, 60, 'box'), T(345, 160, '1. First', '', 'start'), T(345, 184, '2. Second', '', 'start'), T(545, 170, 'ol = numbers', 'small tb bold')
    ].join(''), 'Unordered vs ordered lists'),

    // ---------- Beginner U3 ----------
    cssRule: svg(640, 200, [
      T(320, 80, 'h1 { color: tomato; font-size: 32px; }', 'mono big'),
      L(95, 100, 95, 128), T(95, 142, 'selector', 'small ta bold'), T(95, 160, '(what to style)', 'small muted'),
      L(230, 60, 230, 35), T(230, 25, 'property', 'small tb bold'),
      L(330, 60, 330, 35), T(330, 25, 'value', 'small tc bold'),
      L(375, 100, 375, 128), T(375, 142, 'semicolon ends each line', 'small td bold'),
      T(320, 188, 'Everything inside { } is a "declaration block"', 'small muted')
    ].join(''), 'Parts of a CSS rule'),

    selectors: svg(640, 200, [
      B(20, 20, 190, 60, 'p { }', 'a', 'mono bold'), T(115, 100, 'ELEMENT', 'small bold'), T(115, 120, 'every <p> on the page', 'small muted'),
      B(225, 20, 190, 60, '.note { }', 'b', 'mono bold'), T(320, 100, 'CLASS (dot)', 'small bold'), T(320, 120, 'anything with class="note"', 'small muted'),
      B(430, 20, 190, 60, '#top { }', 'c', 'mono bold'), T(525, 100, 'ID (hash)', 'small bold'), T(525, 120, 'the ONE element id="top"', 'small muted'),
      T(320, 170, 'Classes can be reused many times. An id should be used only once per page.', 'small muted')
    ].join(''), 'Three kinds of CSS selectors'),

    boxModel: svg(640, 300, [
      R(70, 20, 500, 260, 'd', 4), T(320, 38, 'margin  (space OUTSIDE the border)', 'small td bold'),
      R(115, 55, 410, 190, 'b', 4), T(320, 72, 'border', 'small tb bold'),
      R(135, 85, 370, 140, 'c', 4), T(320, 102, 'padding  (space INSIDE the border)', 'small tc bold'),
      R(195, 120, 250, 70, 'a', 4), T(320, 155, 'content (text, images)', 'bold')
    ].join(''), 'The CSS box model'),

    // ---------- Beginner U4 ----------
    blockInline: svg(640, 220, [
      T(20, 20, 'BLOCK elements stack and take the full width', 'small bold', 'start'),
      B(20, 35, 600, 34, '<h1>', 'a', 'mono'), B(20, 75, 600, 34, '<p>', 'a', 'mono'), B(20, 115, 600, 34, '<div>', 'a', 'mono'),
      T(20, 172, 'INLINE elements sit in a line, only as wide as their content', 'small bold', 'start'),
      B(20, 185, 80, 30, '<a>', 'b', 'mono'), B(108, 185, 110, 30, '<strong>', 'b', 'mono'), B(226, 185, 90, 30, '<span>', 'b', 'mono'), B(324, 185, 80, 30, '<img>', 'b', 'mono')
    ].join(''), 'Block vs inline elements'),

    flexAxes: svg(640, 250, [
      R(20, 30, 600, 170, 'box2'), T(30, 18, 'display: flex', 'mono small bold', 'start'),
      B(50, 75, 110, 80, '1', 'a', 'big'), B(180, 75, 110, 80, '2', 'a', 'big'), B(310, 75, 110, 80, '3', 'a', 'big'),
      A(40, 185, 600, 185, 'line-a'), T(320, 228, 'main axis → (flex-direction: row) — use justify-content', 'small ta bold'),
      A(600, 45, 600, 175, 'line'), T(560, 112, 'cross axis', 'small muted', 'end'), T(560, 130, 'align-items', 'small muted', 'end')
    ].join(''), 'Flexbox main and cross axis'),

    responsive: svg(640, 260, [
      R(20, 20, 380, 220, 'box2', 12), T(210, 38, 'Desktop (wide)', 'small bold'),
      B(40, 55, 105, 160, 'A', 'a', 'big'), B(157, 55, 105, 160, 'B', 'b', 'big'), B(274, 55, 105, 160, 'C', 'c', 'big'),
      R(450, 20, 140, 220, 'box2', 18), T(520, 38, 'Phone', 'small bold'),
      B(465, 55, 110, 52, 'A', 'a', 'big'), B(465, 115, 110, 52, 'B', 'b', 'big'), B(465, 175, 110, 52, 'C', 'c', 'big'),
      T(420, 130, '→', 'big')
    ].join(''), 'Responsive layout: side by side on desktop, stacked on phone'),

    // ---------- Beginner U5 ----------
    formParts: svg(640, 240, [
      R(20, 20, 360, 200, 'box', 12),
      T(40, 50, 'Name', 'bold', 'start'), R(40, 65, 300, 36, 'box2', 8), T(52, 83, 'Jordan', 'muted', 'start'),
      T(40, 125, 'Email', 'bold', 'start'), R(40, 140, 300, 36, 'box2', 8), T(52, 158, 'you@mail.com', 'muted', 'start'),
      R(40, 186, 100, 30, 'a', 8), T(90, 201, 'Send', 'bold'),
      A(470, 50, 100, 50), T(480, 50, '<label>', 'mono small tb', 'start'),
      A(470, 100, 345, 85), T(480, 100, '<input>', 'mono small tc', 'start'),
      A(470, 200, 145, 201), T(480, 200, '<button>', 'mono small ta', 'start'),
      T(480, 150, 'all inside <form>', 'small muted', 'start')
    ].join(''), 'Parts of a form'),

    inputTypes: svg(640, 220, [
      T(20, 25, 'type="text"', 'mono small', 'start'), R(200, 10, 220, 30, 'box2', 6), T(210, 25, 'Hello', '', 'start'),
      T(20, 70, 'type="password"', 'mono small', 'start'), R(200, 55, 220, 30, 'box2', 6), T(210, 70, '••••••', '', 'start'),
      T(20, 115, 'type="checkbox"', 'mono small', 'start'), R(200, 103, 22, 22, 'a', 4), T(211, 114, '✓', 'bold'), T(232, 115, 'I agree', '', 'start'),
      T(20, 160, 'type="radio"', 'mono small', 'start'), C(211, 160, 11, 'a'), C(211, 160, 5, 'tc'), T(232, 160, 'Small', '', 'start'), C(311, 160, 11, 'box'), T(332, 160, 'Large', '', 'start'),
      T(20, 202, 'type="color"', 'mono small', 'start'), R(200, 190, 50, 26, 'd', 4)
    ].join(''), 'Different input types'),

    wireframe: svg(640, 280, [
      R(150, 10, 340, 260, 'box2', 14),
      C(320, 60, 32, 'a'), T(320, 60, '🙂'),
      T(320, 112, 'Your Name', 'big'), T(320, 136, 'Aspiring Web Developer', 'small muted'),
      B(175, 155, 90, 28, 'HTML', 'b', 'small'), B(275, 155, 90, 28, 'CSS', 'c', 'small'), B(375, 155, 90, 28, 'JS', 'd', 'small'),
      R(175, 198, 290, 54, 'box', 8), T(320, 215, 'Contact form', 'small bold'), T(320, 236, 'name • email • send', 'small muted'),
      T(80, 60, 'header', 'small muted'), A(110, 60, 285, 60), T(80, 168, 'skills', 'small muted'), A(105, 168, 172, 168), T(80, 225, 'form', 'small muted'), A(100, 225, 172, 225)
    ].join(''), 'Wireframe of the profile page project'),

    // ---------- Intermediate U1 ----------
    variables: svg(640, 220, [
      R(30, 50, 160, 110, 'a', 12), T(110, 35, 'name', 'mono bold ta'), T(110, 105, '"Sam"', 'mono big'),
      R(240, 50, 160, 110, 'b', 12), T(320, 35, 'age', 'mono bold tb'), T(320, 105, '16', 'mono big'),
      R(450, 50, 160, 110, 'c', 12), T(530, 35, 'isStudent', 'mono bold tc'), T(530, 105, 'true', 'mono big'),
      T(320, 195, 'A variable is a labelled box that holds a value:  let age = 16;', 'small muted')
    ].join(''), 'Variables are labelled boxes'),

    dataTypes: svg(640, 230, [
      B(20, 20, 190, 56, '"hello"', 'a', 'mono bold'), T(115, 90, 'String — text in quotes', 'small'),
      B(225, 20, 190, 56, '42   3.14', 'b', 'mono bold'), T(320, 90, 'Number', 'small'),
      B(430, 20, 190, 56, 'true / false', 'c', 'mono bold'), T(525, 90, 'Boolean — yes/no', 'small'),
      B(20, 125, 190, 56, 'undefined', 'box2', 'mono bold'), T(115, 195, 'no value given yet', 'small'),
      B(225, 125, 190, 56, 'null', 'box2', 'mono bold'), T(320, 195, '"empty on purpose"', 'small'),
      B(430, 125, 190, 56, '[1, 2]  {a: 1}', 'd', 'mono bold'), T(525, 195, 'Arrays & Objects', 'small')
    ].join(''), 'JavaScript data types'),

    operators: svg(640, 200, [
      ...[['5 + 2', '7'], ['5 - 2', '3'], ['5 * 2', '10'], ['5 / 2', '2.5'], ['5 % 2', '1']].map(([a, b], i) =>
        B(20 + i * 124, 20, 110, 50, a, 'a', 'mono bold') + A(75 + i * 124, 72, 75 + i * 124, 100) + B(20 + i * 124, 104, 110, 44, b, 'c', 'mono big')),
      T(516, 170, '% = remainder', 'small muted'), T(320, 190, '"5" + 2  →  "52"  (text joins, it does not add!)', 'small tb bold')
    ].join(''), 'Math operators'),

    // ---------- Intermediate U2 ----------
    ifElse: svg(640, 280, [
      `<polygon points="320,20 450,80 320,140 190,80" class="b"/>`, T(320, 72, 'age >= 18', 'mono bold'), T(320, 92, '?', 'bold'),
      A(190, 80, 120, 80), A(120, 80, 120, 175), T(150, 66, 'true', 'small good bold'),
      A(450, 80, 520, 80), A(520, 80, 520, 175), T(490, 66, 'false', 'small bad bold'),
      B(30, 178, 180, 56, 'run the if { } block', 'c', 'small bold'),
      B(430, 178, 180, 56, 'run the else { } block', 'd', 'small bold'),
      T(320, 262, 'Only ONE branch runs — the program picks a path.', 'small muted')
    ].join(''), 'If / else flowchart'),

    comparisons: svg(640, 250, [
      ...[['===', 'equal (same value AND type)', '5 === 5 → true'], ['!==', 'not equal', '5 !== 3 → true'], ['>', 'greater than', '7 > 2 → true'],
        ['<', 'less than', '7 < 2 → false'], ['>=', 'greater or equal', '5 >= 5 → true'], ['<=', 'less or equal', '4 <= 3 → false']].map(([op, d, ex], i) =>
        B(20, 10 + i * 39, 70, 32, op, 'a', 'mono bold') + T(105, 26 + i * 39, d, 'small', 'start') + T(620, 26 + i * 39, ex, 'mono small muted', 'end'))
    ].join(''), 'Comparison operators'),

    logic: svg(640, 220, [
      B(20, 20, 290, 50, 'A && B  (AND)', 'a', 'mono bold'), T(165, 92, 'true only if BOTH are true', 'small'),
      B(330, 20, 290, 50, 'A || B  (OR)', 'b', 'mono bold'), T(475, 92, 'true if AT LEAST ONE is true', 'small'),
      B(175, 130, 290, 50, '!A  (NOT)', 'c', 'mono bold'), T(320, 200, 'flips it: !true → false', 'small')
    ].join(''), 'Logical operators'),

    // ---------- Intermediate U3 ----------
    loopCycle: svg(640, 280, [
      B(220, 10, 200, 46, 'let i = 0  (start)', 'box2', 'mono small'), A(320, 56, 320, 82),
      `<polygon points="320,84 430,124 320,164 210,124" class="b"/>`, T(320, 124, 'i < 3 ?', 'mono bold'),
      A(320, 164, 320, 192), T(335, 178, 'yes', 'small good bold', 'start'),
      B(220, 194, 200, 40, 'run the body { }', 'c', 'small bold'),
      `<path d="M220,214 H120 V124 H208" class="line"/>`, `<polygon points="208,124 199,119 199,129" class="arrowhead"/>`, T(128, 200, 'i++  then check again', 'small', 'start'),
      A(430, 124, 520, 124), T(470, 112, 'no', 'small bad bold'), B(522, 104, 100, 40, 'done!', 'a', 'bold'),
      T(320, 262, 'The body runs for i = 0, 1, 2 — three times.', 'small muted')
    ].join(''), 'How a for-loop repeats'),

    arrayIndex: svg(640, 200, [
      T(320, 22, 'const fruits = ["apple", "banana", "cherry", "date"];', 'mono small'),
      ...['apple', 'banana', 'cherry', 'date'].map((f, i) => B(60 + i * 132, 50, 124, 60, `"${f}"`, i % 2 ? 'b' : 'a', 'mono bold') + T(122 + i * 132, 130, 'index ' + i, 'mono small bold')),
      T(320, 165, 'fruits[0] → "apple"     fruits.length → 4', 'mono small'),
      T(320, 190, 'Counting starts at 0, so the last index is length - 1', 'small muted')
    ].join(''), 'Array indexes start at 0'),

    forOf: svg(640, 200, [
      ...['🍎', '🍌', '🍒'].map((f, i) => B(30 + i * 90, 30, 76, 60, f, 'a', 'big')),
      A(300, 60, 360, 60),
      code(370, 20, 250, ['for (const f of list) {', '  console.log(f);', '}']),
      T(320, 140, 'The loop hands you each item, one at a time, in order:', 'small muted'),
      T(320, 172, '1st: 🍎      2nd: 🍌      3rd: 🍒', 'bold')
    ].join(''), 'Looping over an array'),

    // ---------- Intermediate U4 ----------
    functionMachine: svg(640, 220, [
      B(20, 80, 120, 50, '3, 4', 'b', 'mono big'), T(80, 150, 'inputs (arguments)', 'small'), A(140, 105, 210, 105),
      R(212, 40, 216, 130, 'a', 18), T(320, 75, 'function add(a, b)', 'mono small bold'), T(320, 110, '⚙️', 'big'), T(320, 140, 'return a + b;', 'mono small'),
      A(428, 105, 498, 105), B(500, 80, 120, 50, '7', 'c', 'mono big'), T(560, 150, 'output (return value)', 'small'),
      T(320, 200, 'A function is a machine: same recipe, any inputs.', 'small muted')
    ].join(''), 'A function is like a machine'),

    returnVsLog: svg(640, 220, [
      R(20, 20, 290, 180, 'c', 12), T(165, 45, 'return', 'mono big'), T(165, 80, 'hands the value BACK', 'small'), T(165, 100, 'to your code to use', 'small'),
      T(165, 140, 'let total = add(2, 3);', 'mono small'), T(165, 165, 'total is now 5 ✅', 'small bold'),
      R(330, 20, 290, 180, 'd', 12), T(475, 45, 'console.log', 'mono big'), T(475, 80, 'only PRINTS for humans', 'small'), T(475, 100, 'to read in the console', 'small'),
      T(475, 140, 'shows: 5', 'mono small'), T(475, 165, "your code can't use it", 'small bold')
    ].join(''), 'return versus console.log'),

    scope: svg(640, 260, [
      R(20, 20, 600, 220, 'box2', 14), T(40, 42, 'GLOBAL scope:  let score = 10;', 'mono small bold', 'start'),
      R(50, 65, 540, 160, 'a', 14), T(70, 87, 'function play() {   let bonus = 5;', 'mono small bold', 'start'),
      R(80, 110, 480, 90, 'c', 12), T(100, 132, 'if (...) {   let extra = 1;  }', 'mono small bold', 'start'),
      T(100, 165, 'Inside can see OUT: extra, bonus, score ✅', 'small', 'start'),
      T(100, 185, 'Outside can NOT see IN: score can\'t see bonus ❌', 'small', 'start')
    ].join(''), 'Scope: nested boxes'),

    // ---------- Intermediate U5 ----------
    objectKV: svg(640, 240, [
      R(20, 20, 290, 200, 'codebg', 12),
      T(35, 45, 'const pet = {', 'codetext', 'start'), T(55, 75, 'name: "Rex",', 'codetext', 'start'), T(55, 105, 'type: "dog",', 'codetext', 'start'), T(55, 135, 'age: 3', 'codetext', 'start'), T(35, 165, '};', 'codetext', 'start'),
      T(165, 200, 'pet.name → "Rex"', 'mono small', 'middle').replace('class="mono small"', 'class="codetext small"'),
      ...[['name', '"Rex"'], ['type', '"dog"'], ['age', '3']].map(([k, v], i) =>
        B(350, 30 + i * 62, 110, 48, k, 'b', 'mono bold') + A(460, 54 + i * 62, 490, 54 + i * 62) + B(492, 30 + i * 62, 120, 48, v, 'c', 'mono bold')),
      T(405, 225, 'key', 'small tb bold'), T(552, 225, 'value', 'small tc bold')
    ].join(''), 'Objects hold key/value pairs'),

    domTree: svg(640, 280, [
      B(260, 10, 120, 40, 'document', 'box2', 'mono small bold'), A(320, 50, 320, 68),
      B(260, 70, 120, 40, '<html>', 'd', 'mono small'), A(300, 110, 170, 140), A(340, 110, 470, 140),
      B(110, 142, 120, 40, '<head>', 'c', 'mono small'), B(410, 142, 120, 40, '<body>', 'a', 'mono small'),
      A(170, 182, 170, 210), B(110, 212, 120, 40, '<title>', 'c', 'mono small'),
      A(440, 182, 380, 210), A(500, 182, 560, 210),
      B(320, 212, 120, 40, '<h1>', 'b', 'mono small'), B(500, 212, 120, 40, '<button>', 'b', 'mono small'),
      T(320, 270, 'JavaScript sees your page as a family tree of objects (the DOM)', 'small muted')
    ].join(''), 'The DOM tree'),

    clickFlow: svg(640, 200, [
      B(20, 60, 140, 60, '👆 click!', 'b', 'bold'), A(160, 90, 200, 90),
      R(202, 40, 236, 100, 'a', 12), T(320, 62, 'addEventListener', 'mono small bold'), T(320, 90, '("click", () => {', 'mono small'), T(320, 114, '  … your code …  })', 'mono small'),
      A(438, 90, 478, 90), B(480, 60, 140, 60, 'page changes ✨', 'c', 'bold'),
      T(320, 175, 'Event → listener function runs → you update the DOM', 'small muted')
    ].join(''), 'Event listener flow'),

    // ---------- Advanced U1 ----------
    mapFilterReduce: svg(640, 260, [
      T(20, 20, '[1, 2, 3, 4]', 'mono bold', 'start'),
      T(20, 60, '.map(n => n * 2)', 'mono small ta', 'start'), A(190, 60, 240, 60), T(250, 60, '[2, 4, 6, 8]', 'mono bold', 'start'), T(420, 60, 'transform EVERY item', 'small muted', 'start'),
      T(20, 110, '.filter(n => n > 2)', 'mono small tb', 'start'), A(190, 110, 240, 110), T(250, 110, '[3, 4]', 'mono bold', 'start'), T(420, 110, 'KEEP items that pass', 'small muted', 'start'),
      T(20, 160, '.reduce((sum, n) => sum + n, 0)', 'mono small tc', 'start'), A(290, 160, 330, 160), T(340, 160, '10', 'mono bold', 'start'), T(420, 160, 'COMBINE into one value', 'small muted', 'start'),
      T(20, 210, '.find(n => n > 2)', 'mono small td', 'start'), A(190, 210, 240, 210), T(250, 210, '3', 'mono bold', 'start'), T(420, 210, 'FIRST item that passes', 'small muted', 'start'),
      T(320, 245, 'None of these change the original array.', 'small muted')
    ].join(''), 'map, filter, reduce, find'),

    destructuring: svg(640, 220, [
      T(320, 25, 'const user = { name: "Ava", age: 20 };', 'mono small'),
      T(320, 70, 'const { name, age } = user;', 'mono bold'),
      A(250, 85, 200, 120), A(330, 85, 400, 120),
      B(120, 122, 160, 46, 'name = "Ava"', 'a', 'mono small bold'), B(340, 122, 160, 46, 'age = 20', 'b', 'mono small bold'),
      T(320, 200, 'Arrays too:  const [first, second] = ["x", "y"];', 'mono small muted')
    ].join(''), 'Destructuring unpacks values'),

    spread: svg(640, 200, [
      B(20, 30, 150, 46, '[1, 2]', 'a', 'mono bold'), T(195, 53, '+', 'big'), B(220, 30, 150, 46, '[3, 4]', 'b', 'mono bold'),
      A(380, 53, 430, 53), B(440, 30, 180, 46, '[1, 2, 3, 4]', 'c', 'mono bold'),
      T(320, 115, 'const all = [...a, ...b];', 'mono'),
      T(320, 160, '... "spreads" the items out — great for copying arrays/objects', 'small muted')
    ].join(''), 'Spread operator'),

    // ---------- Advanced U2 ----------
    bubbling: svg(640, 250, [
      R(20, 20, 380, 210, 'box2', 12), T(40, 40, '<ul id="list">', 'mono small bold', 'start'),
      R(50, 60, 320, 70, 'a', 10), T(70, 80, '<li>', 'mono small bold', 'start'),
      R(90, 92, 200, 30, 'b', 8), T(190, 107, '<button> 👆', 'mono small'),
      A(190, 92, 190, 66, 'line-a'), A(250, 60, 250, 30, 'line-a'),
      T(420, 60, '1. click happens on button', 'small', 'start'), T(420, 95, '2. event BUBBLES up to <li>', 'small', 'start'), T(420, 130, '3. …then up to <ul>', 'small', 'start'),
      T(420, 175, 'So ONE listener on the parent', 'small bold', 'start'), T(420, 195, 'can handle many children.', 'small bold', 'start'),
      R(50, 145, 320, 70, 'a', 10), T(70, 165, '<li>  (another item)', 'mono small', 'start')
    ].join(''), 'Event bubbling and delegation'),

    stateRender: svg(640, 220, [
      R(20, 40, 200, 140, 'a', 14), T(120, 62, 'STATE (data)', 'bold'), T(120, 100, 'todos = [', 'mono small'), T(120, 122, '{text:"Gym", done:false}', 'mono small'), T(120, 144, ']', 'mono small'),
      A(220, 90, 300, 90), T(260, 75, 'render()', 'mono small ta'),
      R(302, 40, 200, 140, 'c', 14), T(402, 62, 'SCREEN (DOM)', 'bold'), T(402, 105, '☐ Gym', ''), T(402, 135, '[ Add ]', 'small'),
      `<path d="M402,180 V205 H120 V182" class="line"/>`, `<polygon points="120,182 115,191 125,191" class="arrowhead"/>`, T(260, 196, 'user clicks → update state → render again', 'small'),
      T(570, 110, '♻️', 'big')
    ].join(''), 'State drives the UI'),

    storage: svg(640, 200, [
      B(20, 50, 180, 80, 'Your app', 'a', 'bold'),
      A(200, 75, 420, 75), T(310, 60, 'localStorage.setItem("todos", JSON.stringify(data))', 'mono small'),
      A(420, 110, 200, 110), T(310, 128, 'JSON.parse(localStorage.getItem("todos"))', 'mono small'),
      B(422, 50, 200, 80, '🗄️ Browser storage', 'c', 'bold'),
      T(320, 175, 'Saved as TEXT, survives page refresh', 'small muted')
    ].join(''), 'Saving data with localStorage'),

    // ---------- Advanced U3 ----------
    asyncTimeline: svg(640, 230, [
      T(20, 20, 'time →', 'small muted', 'start'), A(70, 20, 620, 20),
      T(20, 60, 'sync', 'small bold', 'start'), B(80, 45, 150, 30, 'task A', 'a', 'small'), B(230, 45, 220, 30, 'task B (slow, everything waits)', 'b', 'small'), B(450, 45, 120, 30, 'task C', 'a', 'small'),
      T(20, 130, 'async', 'small bold', 'start'), B(80, 115, 150, 30, 'task A', 'a', 'small'), B(230, 115, 120, 30, 'task C', 'a', 'small'),
      R(230, 155, 220, 30, 'b dash', 8), T(340, 170, 'task B runs in background…', 'small'), A(450, 165, 480, 135), B(470, 115, 130, 30, 'B finished ✓', 'c', 'small'),
      T(320, 215, 'Async code lets the app keep working while slow things (like network) happen', 'small muted')
    ].join(''), 'Synchronous vs asynchronous'),

    promiseStates: svg(640, 220, [
      B(30, 80, 170, 60, '⏳ pending', 'box2', 'bold'),
      A(200, 100, 420, 50), A(200, 120, 420, 170),
      B(422, 20, 190, 60, '✅ fulfilled', 'c', 'bold'), T(517, 95, '.then(value => …)', 'mono small'),
      B(422, 140, 190, 60, '❌ rejected', 'd', 'bold'), T(517, 213, '.catch(error => …)', 'mono small'),
      T(300, 112, 'a Promise is a "IOU"', 'small muted')
    ].join(''), 'The three states of a Promise'),

    fetchFlow: svg(640, 230, [
      B(20, 70, 150, 70, 'Your app', 'a', 'bold'),
      A(170, 90, 470, 90), T(320, 75, 'fetch("https://api…/users")', 'mono small'),
      B(472, 70, 150, 70, '🌐 API server', 'c', 'bold'),
      A(472, 125, 172, 125), T(320, 140, 'Response (JSON text)', 'small'),
      code(140, 160, 360, ['[{ "name": "Ava", "id": 1 }, …]'], 22),
      T(560, 195, 'await res.json()', 'mono small tb')
    ].join(''), 'fetch talks to an API'),

    // ---------- Advanced U4 ----------
    classBlueprint: svg(640, 240, [
      R(20, 40, 220, 160, 'a dash', 14), T(130, 62, 'class Dog', 'mono bold'), T(130, 95, 'constructor(name)', 'mono small'), T(130, 120, 'this.name = name', 'mono small'), T(130, 155, 'bark()', 'mono small'), T(130, 185, '📐 blueprint', 'small muted'),
      A(240, 80, 340, 50), A(240, 120, 340, 120), A(240, 160, 340, 190),
      B(342, 25, 260, 50, 'new Dog("Rex")  🐕', 'c', 'mono small bold'),
      B(342, 95, 260, 50, 'new Dog("Bella")  🐶', 'c', 'mono small bold'),
      B(342, 165, 260, 50, 'new Dog("Max")  🦮', 'c', 'mono small bold'),
      T(470, 230, 'objects (instances)', 'small muted')
    ].join(''), 'A class is a blueprint for objects'),

    modules: svg(640, 220, [
      R(20, 30, 260, 150, 'b', 12), T(150, 52, 'math.js', 'mono bold'), T(150, 95, 'export function add(a, b) {', 'mono small'), T(150, 118, '  return a + b;', 'mono small'), T(150, 141, '}', 'mono small'),
      A(280, 105, 358, 105), T(320, 90, 'import', 'small bold'),
      R(360, 30, 260, 150, 'a', 12), T(490, 52, 'app.js', 'mono bold'), T(490, 95, 'import { add }', 'mono small'), T(490, 118, '  from "./math.js";', 'mono small'), T(490, 141, 'add(2, 3); // 5', 'mono small'),
      T(320, 205, 'Split big programs into small files that share code', 'small muted')
    ].join(''), 'Modules: export and import'),

    tryCatch: svg(640, 250, [
      B(220, 10, 200, 44, 'try { risky code }', 'a', 'mono small bold'),
      A(280, 54, 160, 110), A(360, 54, 480, 110),
      T(190, 75, 'all good', 'small good bold'), T(450, 75, 'error thrown!', 'small bad bold'),
      B(60, 112, 200, 44, 'skip catch', 'c', 'small bold'), B(380, 112, 200, 44, 'catch (err) { … }', 'd', 'mono small bold'),
      A(160, 156, 300, 196), A(480, 156, 340, 196),
      B(220, 198, 200, 44, 'finally { always }', 'box2', 'mono small bold')
    ].join(''), 'try / catch / finally'),

    // ---------- Advanced U5 ----------
    devtools: svg(640, 260, [
      R(20, 10, 600, 240, 'box2', 12), R(20, 10, 600, 30, 'box', 12), T(40, 25, 'Elements   Console   Sources   Network', 'small bold', 'start'),
      R(40, 52, 560, 30, 'box', 6), T(55, 67, '> console.log(total)', 'mono small', 'start'),
      T(55, 95, '12', 'mono small ta', 'start'),
      R(40, 110, 560, 30, 'd', 6), T(55, 125, '❌ Uncaught ReferenceError: totl is not defined   app.js:14', 'mono small', 'start'),
      T(470, 155, '↑ file name + LINE number', 'small td bold'),
      T(55, 185, 'Open DevTools:  F12  or  Ctrl+Shift+I  (Mac: Cmd+Option+I)', 'small', 'start'),
      T(55, 215, 'Read the error, go to that line, fix, refresh.', 'small muted', 'start')
    ].join(''), 'Browser DevTools console'),

    testing: svg(640, 220, [
      B(20, 70, 140, 60, 'add(2, 3)', 'b', 'mono bold'), A(160, 100, 220, 100),
      R(222, 40, 190, 120, 'a', 12), T(317, 80, 'expected: 5', 'mono small'), T(317, 115, 'actual:   5', 'mono small'),
      A(412, 100, 470, 100), B(472, 70, 150, 60, '✅ PASS', 'c', 'bold'),
      T(320, 190, 'A test runs your code and compares what you GOT to what you EXPECTED', 'small muted')
    ].join(''), 'How a test works'),

    gitFlow: svg(640, 240, [
      B(20, 90, 130, 60, '📝 edit files', 'box2', 'small bold'), A(150, 120, 180, 120),
      B(182, 90, 130, 60, 'git add', 'b', 'mono bold'), A(312, 120, 342, 120),
      B(344, 90, 130, 60, 'git commit', 'a', 'mono bold'), A(474, 120, 504, 120),
      B(506, 90, 120, 60, 'git push', 'c', 'mono bold'),
      T(247, 170, 'stage', 'small muted'), T(409, 170, 'save a snapshot', 'small muted'), T(566, 170, 'upload to GitHub', 'small muted'),
      T(320, 40, 'Git = save points for code.  GitHub = your public portfolio online.', 'small bold'),
      T(320, 215, 'GitHub Pages can then host your project as a real website 🌐', 'small muted')
    ].join(''), 'Git workflow')
  };

  return {
    get(name) { return P[name] || ''; },
    names: () => Object.keys(P)
  };
})();
