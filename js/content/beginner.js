// Beginner course — HTML & CSS
window.COURSES = window.COURSES || {};
COURSES.beginner = {
  id: 'beginner',
  level: 'Beginner',
  title: 'HTML & CSS Foundations',
  tagline: 'Build and style real web pages from scratch.',
  description: 'Every website is built from <b>HTML</b> (the content and structure) and <b>CSS</b> (the style and layout). In this course you will write both, and finish by building your own profile page.',
  lang: 'html',
  certTitle: 'HTML & CSS Foundations',
  skills: 'HTML5 structure, semantic markup, CSS styling, the box model, Flexbox and responsive design',
  resume: 'CodePath — HTML & CSS Foundations Certificate (Passed final test)\nSkills: HTML5, CSS3, Flexbox, responsive web design, web forms',
  units: [
    // ---------------- Unit 1 ----------------
    {
      title: 'How the Web Works & Your First Page',
      intro: 'What a web page really is, and the building blocks of HTML.',
      lessons: [
        {
          title: 'What is a web page?',
          body: `
<p>When you visit a website, your <b>browser</b> (Chrome, Safari…) asks another computer called a <b>server</b> for some files. The server sends them back, and your browser turns them into the page you see.</p>
<p>Those files are written in three languages, each with one job:</p>
<ul>
<li><b>HTML</b> — the <i>content and structure</i>: headings, paragraphs, images, buttons. (The skeleton 🦴)</li>
<li><b>CSS</b> — the <i>style</i>: colors, fonts, spacing, layout. (The clothes 👕)</li>
<li><b>JavaScript</b> — the <i>behavior</i>: what happens when you click, type or scroll. (The muscles 💪)</li>
</ul>
<p>You'll learn all three, starting with HTML. The editor below holds real HTML — the panel next to it (or below it on a phone) shows what the browser draws. Try changing the words and press <b>▶ Run</b>.</p>`,
          pic: 'webFlow',
          cap: 'Your browser asks a server for files, then <b>renders</b> (draws) them.',
          code: `<h1>Hello, web!</h1>
<p>This text is a paragraph.</p>
<p>Change these words, then press Run.</p>`
        },
        {
          title: 'Tags and elements',
          body: `
<p>HTML uses <b>tags</b> to label each piece of content. A tag is a word inside angle brackets, like [[<p>]] for "paragraph".</p>
<p>Most tags come in pairs: an <b>opening tag</b> [[<p>]] and a <b>closing tag</b> [[</p>]] (notice the slash). Whatever sits between them is the <b>content</b>. Together, the whole thing is called an <b>element</b>.</p>
<p>Tags can also have <b>attributes</b> — extra information written inside the opening tag, like [[class="intro"]]. You'll use lots of these later.</p>
<div class="callout warn">⚠️ Forgetting a closing tag is the #1 beginner bug. If your whole page suddenly turns bold or giant, look for a missing [[</...>]].</div>
<p>Some useful text tags: [[<strong>]] for <b>important (bold)</b> text, [[<em>]] for <i>emphasis (italic)</i>, and [[<br>]] for a line break (it has no closing tag).</p>`,
          pic: 'tagAnatomy',
          cap: 'An element = opening tag + content + closing tag. Attributes add extra info.',
          code: `<p class="intro">Hello world</p>
<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>
<p>Line one<br>Line two</p>`
        },
        {
          title: 'The structure of an HTML page',
          body: `
<p>A full HTML page always has the same basic skeleton:</p>
<ul>
<li>[[<!DOCTYPE html>]] — tells the browser "this is modern HTML".</li>
<li>[[<html>]] — wraps the whole page.</li>
<li>[[<head>]] — information <i>about</i> the page that isn't shown, like the [[<title>]] in the browser tab.</li>
<li>[[<body>]] — everything you actually <b>see</b> on the page.</li>
</ul>
<p>Elements placed inside other elements are <b>nested</b>. We indent nested elements with spaces so the code is easy to read — the browser ignores the extra spaces.</p>
<div class="callout tip">💡 In VS Code, type <code>!</code> in an empty <code>.html</code> file and press <b>Enter</b> or <b>Tab</b> — it writes this whole skeleton for you.</div>`,
          pic: 'pageStructure',
          cap: '[[<head>]] holds info about the page; [[<body>]] holds what you see.',
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Some text...</p>
  </body>
</html>`
        }
      ],
      recap: [
        'A browser requests files from a server and <b>renders</b> them into a page.',
        '<b>HTML</b> = structure/content, <b>CSS</b> = style, <b>JavaScript</b> = behavior.',
        'An <b>element</b> is an opening tag, content and a closing tag: [[<p>Hi</p>]]. Closing tags have a [[/]].',
        '<b>Attributes</b> go inside the opening tag and add extra info: [[<p class="intro">]].',
        'Every page has [[<!DOCTYPE html>]], [[<html>]], [[<head>]] (not shown) and [[<body>]] (shown).'
      ],
      cheat: `<!DOCTYPE html>
<html>
  <head><title>Tab title</title></head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph with <strong>bold</strong> and <em>italic</em>.</p>
  </body>
</html>`,
      quiz: [
        { q: 'Which language controls the STRUCTURE and content of a web page?', options: ['CSS', 'HTML', 'JavaScript', 'Python'], answer: 1, why: 'HTML is the structure (skeleton). CSS styles it and JavaScript adds behavior.' },
        { q: 'Which of these is a correct closing tag?', options: ['[[<p>]]', '[[<p/>]]', '[[</p>]]', '[[<\\p>]]'], answer: 2, why: 'Closing tags start with [[</]], like [[</p>]].' },
        { q: 'In [[<p class="intro">Hi</p>]], what is [[class="intro"]]?', options: ['The content', 'An attribute', 'A closing tag', 'A comment'], answer: 1, why: 'Attributes live inside the opening tag and add extra information about the element.' },
        { q: 'Where does the visible content of a page go?', options: ['Inside [[<head>]]', 'Inside [[<title>]]', 'Inside [[<body>]]', 'Before [[<!DOCTYPE html>]]'], answer: 2, why: 'Everything you see on the page goes inside [[<body>]]. [[<head>]] holds information about the page.' },
        { q: 'What does the [[<title>]] element control?', options: ['The biggest heading on the page', 'The text shown in the browser tab', 'The page background', 'The file name'], answer: 1, why: 'The [[<title>]] (inside [[<head>]]) is the name shown on the browser tab and in bookmarks.' }
      ]
    },
    // ---------------- Unit 2 ----------------
    {
      title: 'Text, Links, Images & Lists',
      intro: 'The everyday elements that make up most web pages.',
      lessons: [
        {
          title: 'Headings and paragraphs',
          body: `
<p>HTML has six levels of headings, [[<h1>]] (most important) down to [[<h6>]] (least important). Think of them like an outline for a school report:</p>
<ul>
<li>Use <b>one</b> [[<h1>]] per page for the main title.</li>
<li>Use [[<h2>]] for sections, [[<h3>]] for sub-sections, and so on.</li>
<li>Don't pick a heading just because of its size — you'll control size with CSS. Pick it for its <b>meaning</b>.</li>
</ul>
<p>Paragraphs use [[<p>]]. The browser ignores extra spaces and line breaks in your code — each [[<p>]] becomes its own block of text with space around it.</p>
<p>Want to leave a note in your code that doesn't show on the page? Use a <b>comment</b>: [[<!-- like this -->]].</p>`,
          pic: 'headings',
          cap: 'Six heading levels. Search engines and screen readers use them to understand your page.',
          code: `<h1>My Travel Blog</h1>
<!-- This comment is invisible on the page -->
<h2>Japan</h2>
<h3>Day 1: Tokyo</h3>
<p>We landed     in Tokyo.
The extra   spaces    and line breaks in the code are ignored!</p>
<h3>Day 2: Kyoto</h3>
<p>Temples everywhere.</p>`
        },
        {
          title: 'Links and images',
          body: `
<p><b>Links</b> use the anchor tag [[<a>]]. The [[href]] attribute says where the link goes:</p>
{{{
<a href="https://wikipedia.org">Go to Wikipedia</a>
}}}
<p>Add [[target="_blank"]] to open the link in a new tab.</p>
<p><b>Images</b> use [[<img>]]. It's a <b>self-closing</b> (empty) element — it has no content, so there's no [[</img>]]. Two attributes matter most:</p>
<ul>
<li>[[src]] — the image file or web address ("source").</li>
<li>[[alt]] — a text description, read aloud by screen readers for blind users and shown if the image fails to load. Always include it!</li>
</ul>
<p>You can also set [[width]] to control the size.</p>`,
          pic: 'linkImg',
          cap: '[[href]] = where the link goes. [[src]] = which image. [[alt]] = what the image shows, in words.',
          code: `<p>Learn more on <a href="https://developer.mozilla.org">MDN Web Docs</a>.</p>

<img src="https://picsum.photos/id/237/300/180"
     alt="A black puppy looking up"
     width="300">

<p>Image above should show a puppy (needs internet). If it can't load, you'll see the alt text.</p>`
        },
        {
          title: 'Lists',
          body: `
<p>Lists are everywhere on the web — menus, steps, features. There are two main kinds:</p>
<ul>
<li>[[<ul>]] — an <b>unordered</b> list (bullet points). Use it when order doesn't matter, like a shopping list.</li>
<li>[[<ol>]] — an <b>ordered</b> list (numbers). Use it when order matters, like recipe steps.</li>
</ul>
<p>Either way, each item goes inside an [[<li>]] (list item). Lists can even be nested: put a whole new [[<ul>]] inside an [[<li>]].</p>
<div class="callout tip">💡 Website navigation menus are almost always a [[<ul>]] of links, styled with CSS to look like a menu bar.</div>`,
          pic: 'lists',
          cap: '[[<ul>]] gives bullets, [[<ol>]] gives numbers. Each item is an [[<li>]].',
          code: `<h3>Shopping list</h3>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Fruit
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
</ul>

<h3>Make toast</h3>
<ol>
  <li>Put bread in toaster</li>
  <li>Wait</li>
  <li>Add butter</li>
</ol>`
        }
      ],
      recap: [
        'Headings go from [[<h1>]] (most important) to [[<h6>]]. Use one [[<h1>]] per page and choose by meaning, not size.',
        'Paragraphs use [[<p>]]. Extra spaces in your code are ignored. Comments look like [[<!-- note -->]].',
        'Links: [[<a href="url">text</a>]]. The [[href]] is the destination.',
        'Images: [[<img src="file.jpg" alt="description">]] — self-closing, and always include [[alt]].',
        '[[<ul>]] = bullet list, [[<ol>]] = numbered list, each item is an [[<li>]].'
      ],
      cheat: `<h2>Section</h2>
<a href="https://example.com" target="_blank">Link</a>
<img src="photo.jpg" alt="What the photo shows" width="200">
<ul><li>bullet</li></ul>
<ol><li>step 1</li></ol>`,
      quiz: [
        { q: 'Which tag makes the MOST important heading?', options: ['[[<h6>]]', '[[<head>]]', '[[<h1>]]', '[[<heading>]]'], answer: 2, why: '[[<h1>]] is the top-level heading. [[<head>]] is a totally different thing — the page info section.' },
        { q: 'Which attribute tells a link where to go?', options: ['[[src]]', '[[href]]', '[[link]]', '[[alt]]'], answer: 1, why: '[[href]] ("hypertext reference") holds the link destination. [[src]] is for images.' },
        { q: 'Why should every image have an [[alt]] attribute?', options: ['It makes the image load faster', 'It describes the image for screen readers and if it fails to load', 'It sets the image size', 'It is required for the image to appear'], answer: 1, why: 'Alt text makes your site accessible to blind users and shows when the image can\'t load.' },
        { q: 'You are writing the steps of a recipe. Which list should you use?', options: ['[[<ul>]]', '[[<ol>]]', '[[<li>]]', '[[<list>]]'], answer: 1, why: 'Order matters for steps, so use an ordered (numbered) list: [[<ol>]].' },
        { q: 'Which of these is a self-closing element (no closing tag)?', options: ['[[<p>]]', '[[<a>]]', '[[<img>]]', '[[<ul>]]'], answer: 2, why: '[[<img>]] has no content, so it has no closing tag. ([[<br>]] is another one.)' }
      ]
    },
    // ---------------- Unit 3 ----------------
    {
      title: 'Styling with CSS',
      intro: 'Colors, fonts and spacing — making pages look good.',
      lessons: [
        {
          title: 'Your first CSS rule',
          body: `
<p>CSS (Cascading Style Sheets) describes how HTML should <b>look</b>. A CSS <b>rule</b> has two parts:</p>
<ul>
<li>A <b>selector</b> — which elements to style (e.g. [[h1]]).</li>
<li>A <b>declaration block</b> in curly braces [[{ }]] — one or more [[property: value;]] pairs.</li>
</ul>
<p>The easiest place to put CSS while learning is a [[<style>]] element. In real projects it usually goes in its own file (like [[style.css]]) linked from the [[<head>]] with [[<link rel="stylesheet" href="style.css">]].</p>
<p>Some properties you'll use constantly: [[color]] (text color), [[background-color]], [[font-size]], [[font-family]], [[text-align]].</p>
<div class="callout warn">⚠️ Every declaration ends with a semicolon [[;]]. Forgetting one can break the next line too.</div>`,
          pic: 'cssRule',
          cap: 'selector { property: value; } — that\'s the whole pattern of CSS.',
          code: `<style>
  h1 {
    color: tomato;
    font-size: 32px;
    text-align: center;
  }
  p {
    color: #334155;
    font-family: Georgia, serif;
  }
  body {
    background-color: #f0f9ff;
  }
</style>

<h1>Styled heading</h1>
<p>Try changing tomato to another color like purple or teal.</p>`
        },
        {
          title: 'Selectors: element, class and id',
          body: `
<p>Styling <i>every</i> paragraph is not always what you want. Selectors let you target exactly the right elements:</p>
<ul>
<li><b>Element selector</b> [[p]] — every [[<p>]].</li>
<li><b>Class selector</b> [[.note]] (starts with a dot) — every element with [[class="note"]]. Classes can be reused on as many elements as you like.</li>
<li><b>ID selector</b> [[#top]] (starts with a hash) — the one element with [[id="top"]]. Each id should appear only once on a page.</li>
</ul>
<p>An element can have several classes separated by spaces: [[class="note big"]].</p>
<p><b>Colors</b> can be written as names ([[red]]), hex codes ([[#ff0000]]) or [[rgb(255, 0, 0)]]. Hex and rgb give you millions of choices.</p>`,
          pic: 'selectors',
          cap: 'No symbol = element. Dot = class. Hash = id.',
          code: `<style>
  p { color: #475569; }
  .note { background-color: #fef9c3; padding: 8px; }
  .big { font-size: 22px; }
  #top { color: white; background-color: #4f46e5; padding: 8px; }
</style>

<h2 id="top">I'm the only #top</h2>
<p>A plain paragraph.</p>
<p class="note">I have the note class.</p>
<p class="note big">I have TWO classes: note and big.</p>`
        },
        {
          title: 'The box model: margin, border, padding',
          body: `
<p>Here's the secret to CSS layout: <b>every element is a rectangle (a box)</b>. Each box has four layers, from the inside out:</p>
<ol>
<li><b>Content</b> — the text or image.</li>
<li><b>Padding</b> — space <i>inside</i> the border, around the content.</li>
<li><b>Border</b> — a line around the padding, e.g. [[border: 2px solid black;]].</li>
<li><b>Margin</b> — space <i>outside</i> the border, pushing other boxes away.</li>
</ol>
<p>You can set all sides at once ([[padding: 20px;]]) or one side at a time ([[padding-top]], [[margin-left]]…). [[border-radius]] rounds the corners.</p>
<div class="callout tip">💡 Add [[* { box-sizing: border-box; }]] at the top of your CSS. It makes [[width]] include padding and border, so sizes are much easier to predict.</div>`,
          pic: 'boxModel',
          cap: 'Margin (outside) → border → padding (inside) → content.',
          code: `<style>
  .box {
    width: 220px;
    padding: 20px;
    border: 4px solid #ea580c;
    margin: 30px;
    border-radius: 12px;
    background-color: #ffedd5;
  }
</style>

<div class="box">Padding is the space between me and my orange border.</div>
<div class="box">Margin is the gap between the two boxes.</div>`
        }
      ],
      recap: [
        'A CSS rule = <b>selector</b> + [[{ property: value; }]]. Every declaration ends with [[;]].',
        'Put CSS in a [[<style>]] element or a separate file linked with [[<link rel="stylesheet" href="style.css">]].',
        '[[p]] selects all paragraphs, [[.name]] selects a <b>class</b> (reusable), [[#name]] selects an <b>id</b> (unique).',
        'Colors: names ([[red]]), hex ([[#ff0000]]) or [[rgb(255, 0, 0)]].',
        'Box model, inside → out: <b>content, padding, border, margin</b>.'
      ],
      cheat: `.card {
  color: #333;
  background-color: #fff;
  font-size: 18px;
  padding: 16px;         /* inside space */
  border: 1px solid #ccc;
  border-radius: 8px;    /* rounded corners */
  margin: 12px;          /* outside space */
}`,
      quiz: [
        { q: 'In [[h1 { color: red; }]], what is [[h1]]?', options: ['The property', 'The value', 'The selector', 'The declaration'], answer: 2, why: 'The selector comes first and picks which elements get styled.' },
        { q: 'Which selector targets every element with [[class="card"]]?', options: ['[[card]]', '[[#card]]', '[[.card]]', '[[*card]]'], answer: 2, why: 'Class selectors start with a dot. A hash ([[#]]) is for ids.' },
        { q: 'Which part of the box model is the space INSIDE the border?', options: ['Margin', 'Padding', 'Content', 'Outline'], answer: 1, why: 'Padding is inside the border; margin is outside it.' },
        { q: 'What is wrong with this CSS?', code: 'p {\n  color: blue\n  font-size: 20px;\n}', options: ['[[p]] should be [[.p]]', 'Missing semicolon after [[blue]]', 'Colors must be hex codes', 'Nothing is wrong'], answer: 1, why: 'Without the [[;]] after [[blue]], the browser reads "blue font-size: 20px" as one broken value and ignores both lines.' },
        { q: 'How many times should the same [[id]] be used on one page?', options: ['Once', 'Twice', 'As many as you like', 'Only inside [[<head>]]'], answer: 0, why: 'An id is a unique name. Use a class when you need to style many elements the same way.' }
      ]
    },
    // ---------------- Unit 4 ----------------
    {
      title: 'Layout & Responsive Design',
      intro: 'Arrange boxes on the page and make it work on phones.',
      lessons: [
        {
          title: 'Block vs inline, div and span',
          body: `
<p>Elements behave in one of two main ways:</p>
<ul>
<li><b>Block</b> elements ([[<h1>]], [[<p>]], [[<div>]], [[<ul>]]) start on a new line and stretch the full width available.</li>
<li><b>Inline</b> elements ([[<a>]], [[<strong>]], [[<span>]], [[<img>]]) sit inside a line of text and are only as wide as their content.</li>
</ul>
<p>Two elements exist purely for grouping and styling, with no meaning of their own:</p>
<ul>
<li>[[<div>]] — a generic <b>block</b> box. Used to group things into sections, cards, rows.</li>
<li>[[<span>]] — a generic <b>inline</b> box. Used to style a few words.</li>
</ul>
<p>When something has a clearer meaning, prefer <b>semantic</b> tags: [[<header>]], [[<nav>]], [[<main>]], [[<section>]], [[<footer>]]. They work like [[<div>]] but tell browsers and screen readers what each part is.</p>
<p>You can change how an element behaves with the [[display]] property, e.g. [[display: inline-block;]].</p>`,
          pic: 'blockInline',
          cap: 'Block elements stack like bricks. Inline elements flow like words in a sentence.',
          code: `<style>
  div, p { background: #e0e7ff; margin: 6px 0; }
  span { background: #fde68a; }
  a { background: #bbf7d0; }
</style>

<div>I'm a div (block) — I take the full width.</div>
<p>I'm a paragraph (block) with a <span>span</span> and a <a href="#">link</a> (inline) inside.</p>
<div>Another div, on its own line.</div>`
        },
        {
          title: 'Flexbox: putting things side by side',
          body: `
<p><b>Flexbox</b> is the modern way to line boxes up in a row (or column). Set [[display: flex;]] on a <b>parent</b>, and its children line up automatically.</p>
<ul>
<li>[[flex-direction]] — [[row]] (default, left → right) or [[column]] (top → bottom).</li>
<li>[[justify-content]] — spacing along the main direction: [[flex-start]], [[center]], [[space-between]], [[space-around]].</li>
<li>[[align-items]] — alignment on the other axis: [[stretch]], [[center]], [[flex-start]].</li>
<li>[[gap]] — space between the children, e.g. [[gap: 12px;]].</li>
<li>[[flex: 1;]] on a child — "grow to fill the free space".</li>
</ul>
<p>Try changing [[justify-content]] to [[center]] or [[space-between]] in the example!</p>`,
          pic: 'flexAxes',
          cap: 'Flex children line up along the <b>main axis</b>. [[justify-content]] spaces them; [[align-items]] aligns them across.',
          code: `<style>
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    background: #f1f5f9;
    padding: 10px;
    height: 140px;
  }
  .item {
    background: #4f46e5;
    color: white;
    padding: 16px;
    border-radius: 8px;
  }
</style>

<div class="row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`
        },
        {
          title: 'Responsive design with media queries',
          body: `
<p>Over half of web traffic is on phones, so your pages must work on narrow <i>and</i> wide screens. That's called <b>responsive design</b>.</p>
<p>Step 1: always put this in your [[<head>]] so phones don't zoom out:</p>
{{{
<meta name="viewport" content="width=device-width, initial-scale=1">
}}}
<p>Step 2: use a <b>media query</b> to change styles at a certain screen width:</p>
{{{
@media (max-width: 600px) {
  .row { flex-direction: column; }
}
}}}
<p>This means "when the screen is 600px wide or less, stack the row's items in a column".</p>
<p>Other responsive tips: use [[max-width: 100%]] on images so they never overflow, and use percentages or [[flex]] instead of fixed pixel widths.</p>
<div class="callout tip">💡 The result panel in the example is narrow on phones and wide on computers. On a computer, drag your browser window smaller and press Run again to see the layout switch.</div>`,
          pic: 'responsive',
          cap: 'Same HTML, different layout: side-by-side when wide, stacked when narrow.',
          code: `<style>
  .row { display: flex; gap: 10px; }
  .card { flex: 1; padding: 20px; border-radius: 8px; color: white; }
  .a { background: #4f46e5; } .b { background: #ea580c; } .c { background: #0d9488; }

  @media (max-width: 400px) {
    .row { flex-direction: column; }
  }
</style>

<div class="row">
  <div class="card a">A</div>
  <div class="card b">B</div>
  <div class="card c">C</div>
</div>
<p>Narrower than 400px? The cards stack.</p>`
        }
      ],
      recap: [
        '<b>Block</b> elements start on a new line and fill the width; <b>inline</b> elements flow inside text.',
        '[[<div>]] is a generic block box, [[<span>]] is a generic inline box. Prefer semantic tags like [[<header>]], [[<main>]], [[<footer>]] when they fit.',
        '[[display: flex;]] on a parent lines up its children. Use [[justify-content]], [[align-items]] and [[gap]] to arrange them.',
        'Responsive design = works on every screen size. Always include the viewport [[<meta>]] tag.',
        'Media queries like [[@media (max-width: 600px) { … }]] apply styles only on small screens.'
      ],
      cheat: `.row {
  display: flex;
  flex-direction: row;          /* or column */
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
@media (max-width: 600px) {
  .row { flex-direction: column; }
}`,
      quiz: [
        { q: 'Which of these is an INLINE element by default?', options: ['[[<div>]]', '[[<p>]]', '[[<span>]]', '[[<h2>]]'], answer: 2, why: '[[<span>]] is inline. [[<div>]], [[<p>]] and headings are block elements.' },
        { q: 'To line up children in a row with Flexbox, which property goes on the PARENT?', options: ['[[display: flex;]]', '[[float: left;]]', '[[position: row;]]', '[[flex: 1;]]'], answer: 0, why: '[[display: flex;]] on the parent turns its children into flex items.' },
        { q: 'Which property adds space BETWEEN flex items?', options: ['[[margin-flex]]', '[[gap]]', '[[space]]', '[[border]]'], answer: 1, why: '[[gap]] puts equal space between children of a flex (or grid) container.' },
        { q: 'What does [[@media (max-width: 600px) { … }]] do?', options: ['Limits the page to 600px', 'Applies the styles inside only when the screen is 600px wide or less', 'Plays media files', 'Hides the page on phones'], answer: 1, why: 'Media queries apply their styles only when the condition (here, narrow screens) is true.' },
        { q: 'Which tag is the most meaningful (semantic) choice for the bottom section of a page?', options: ['[[<div class="bottom">]]', '[[<footer>]]', '[[<span>]]', '[[<end>]]'], answer: 1, why: '[[<footer>]] tells browsers and screen readers what the section is. [[<end>]] isn\'t a real tag.' }
      ]
    },
    // ---------------- Unit 5 ----------------
    {
      title: 'Forms & Your First Project',
      intro: 'Collect input from users, then build a personal profile page.',
      lessons: [
        {
          title: 'Forms, inputs and labels',
          body: `
<p>Forms let users type and send information — sign-ups, searches, contact messages. The main parts:</p>
<ul>
<li>[[<form>]] — wraps the whole form.</li>
<li>[[<input>]] — a field to type in. Self-closing.</li>
<li>[[<label>]] — the text describing a field. Connect it with [[for]] = the input's [[id]]. Then tapping the label focuses the field (great on phones!) and screen readers can announce it.</li>
<li>[[<textarea>]] — a bigger, multi-line text box.</li>
<li>[[<button type="submit">]] — sends the form.</li>
</ul>
<p>Useful input attributes: [[placeholder]] (grey hint text), [[required]] (can't be empty), and [[name]] (the key the data is sent under).</p>`,
          pic: 'formParts',
          cap: 'A label + input pair for each field, and a submit button — all inside a [[<form>]].',
          code: `<form>
  <label for="name">Name</label><br>
  <input id="name" name="name" placeholder="Jordan" required><br><br>

  <label for="msg">Message</label><br>
  <textarea id="msg" name="msg" rows="3"></textarea><br><br>

  <button type="submit">Send</button>
</form>
<p>Try pressing Send with the name empty — "required" stops you.</p>`
        },
        {
          title: 'Input types',
          body: `
<p>The [[type]] attribute changes what kind of input you get — and on phones it even changes the keyboard! For example, [[type="email"]] shows an [[@]] key, and [[type="tel"]] shows a number pad.</p>
<div class="table-wrap"><table class="simple">
<tr><th>type</th><th>Use for</th></tr>
<tr><td>[[text]]</td><td>Normal text (the default)</td></tr>
<tr><td>[[email]]</td><td>Email address — checks for an [[@]]</td></tr>
<tr><td>[[password]]</td><td>Hidden characters</td></tr>
<tr><td>[[number]]</td><td>Numbers only, with [[min]]/[[max]]</td></tr>
<tr><td>[[checkbox]]</td><td>Yes/no tick boxes (pick any)</td></tr>
<tr><td>[[radio]]</td><td>Pick exactly one (give them the same [[name]])</td></tr>
<tr><td>[[date]], [[color]], [[range]]</td><td>Date picker, color picker, slider</td></tr>
</table></div>
<p>A [[<select>]] with [[<option>]]s makes a dropdown menu.</p>`,
          pic: 'inputTypes',
          cap: 'One element, many looks — all controlled by [[type]].',
          code: `<form>
  <p><input type="email" placeholder="you@mail.com"></p>
  <p><input type="password" placeholder="password"></p>
  <p><input type="number" min="1" max="10" value="5"></p>
  <p><label><input type="checkbox"> Subscribe</label></p>
  <p>
    <label><input type="radio" name="size"> Small</label>
    <label><input type="radio" name="size"> Large</label>
  </p>
  <p><input type="date"> <input type="color" value="#4f46e5"></p>
  <p>
    <select>
      <option>Beginner</option>
      <option>Intermediate</option>
    </select>
  </p>
</form>`
        },
        {
          title: 'Project: your profile page',
          body: `
<p>Time to combine everything into a real mini-project: a personal profile page. It uses:</p>
<ul>
<li>Semantic structure: [[<header>]], [[<main>]], [[<section>]], [[<footer>]]</li>
<li>Headings, paragraphs, a list and links</li>
<li>CSS: colors, the box model, rounded corners and Flexbox</li>
<li>A contact form</li>
</ul>
<p><b>Your mission:</b> personalize it. Change the name, the about text and the skills. Change the colors. Add a section for your hobbies. Then copy it into VS Code as [[index.html]] — this is your first portfolio piece!</p>
<div class="callout tip">💡 In Advanced Unit 5 you'll learn how to publish this on GitHub Pages so anyone can visit it with a link — perfect for your resume.</div>`,
          pic: 'wireframe',
          cap: 'A <b>wireframe</b> — a simple sketch of the layout before you code it. Real developers sketch first!',
          codeTitle: 'Profile page project — make it yours',
          code: `<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #f1f5f9; margin: 0; }
  header { background: #4f46e5; color: white; text-align: center; padding: 30px 16px; }
  header h1 { margin: 0; }
  main { max-width: 600px; margin: 0 auto; padding: 16px; }
  section { background: white; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
  .skills { display: flex; gap: 8px; flex-wrap: wrap; padding: 0; list-style: none; }
  .skills li { background: #e0e7ff; color: #3730a3; padding: 6px 12px; border-radius: 99px; }
  input, textarea { width: 100%; padding: 8px; margin: 4px 0 10px; }
  button { background: #4f46e5; color: white; border: 0; padding: 10px 18px; border-radius: 8px; }
  footer { text-align: center; color: #64748b; padding: 16px; }
</style>

<header>
  <h1>Your Name</h1>
  <p>Aspiring Web Developer</p>
</header>
<main>
  <section>
    <h2>About me</h2>
    <p>I'm learning to code with HTML, CSS and JavaScript. I enjoy solving problems and building things.</p>
  </section>
  <section>
    <h2>Skills</h2>
    <ul class="skills">
      <li>HTML</li><li>CSS</li><li>Flexbox</li><li>Responsive design</li>
    </ul>
  </section>
  <section>
    <h2>Contact</h2>
    <form>
      <label for="email">Your email</label>
      <input id="email" type="email" required>
      <label for="note">Message</label>
      <textarea id="note" rows="3"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</main>
<footer>Made with HTML &amp; CSS</footer>`
        }
      ],
      recap: [
        'A form is built from [[<form>]], [[<label>]], [[<input>]], [[<textarea>]] and a [[<button type="submit">]].',
        'Connect a label to its input: [[<label for="email">]] + [[<input id="email">]].',
        'The [[type]] attribute ([[email]], [[password]], [[number]], [[checkbox]], [[radio]]…) changes the input — and the phone keyboard.',
        '[[required]] stops empty submissions; [[placeholder]] shows a hint.',
        'Real projects combine semantic HTML, CSS, Flexbox and forms. Sketch a <b>wireframe</b> first!'
      ],
      cheat: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" placeholder="you@mail.com" required>
  <button type="submit">Send</button>
</form>`,
      quiz: [
        { q: 'How do you connect a [[<label>]] to an [[<input id="phone">]]?', options: ['[[<label name="phone">]]', '[[<label for="phone">]]', '[[<label id="phone">]]', '[[<label input="phone">]]'], answer: 1, why: 'The label\'s [[for]] must match the input\'s [[id]].' },
        { q: 'Which input type hides what the user types?', options: ['[[hidden]]', '[[secret]]', '[[password]]', '[[text]]'], answer: 2, why: '[[type="password"]] shows dots instead of characters.' },
        { q: 'Which attribute stops a form from being sent if a field is empty?', options: ['[[required]]', '[[placeholder]]', '[[name]]', '[[value]]'], answer: 0, why: '[[required]] makes the browser block submission until the field is filled in.' },
        { q: 'You want users to choose exactly ONE shirt size. What should you use?', options: ['Checkboxes', 'Radio buttons with the same [[name]]', 'A [[<textarea>]]', 'Several [[<form>]]s'], answer: 1, why: 'Radio buttons sharing a [[name]] only allow one choice. Checkboxes allow many.' },
        { q: 'What is a wireframe?', options: ['A type of CSS border', 'A simple sketch of a page layout', 'A broken link', 'A form input'], answer: 1, why: 'A wireframe is a quick layout sketch you make before coding.' }
      ]
    }
  ],
  // ---------------- Final test ----------------
  test: {
    mc: [
      { q: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], answer: 1, why: 'HyperText Markup Language — it "marks up" content with tags.' },
      { q: 'Which element holds information ABOUT the page, like the tab title?', options: ['[[<body>]]', '[[<header>]]', '[[<head>]]', '[[<main>]]'], answer: 2, why: '[[<head>]] contains the [[<title>]], [[<meta>]] tags and stylesheet links.' },
      { q: 'Which is the correct way to make a link?', options: ['[[<link src="page.html">Go</link>]]', '[[<a href="page.html">Go</a>]]', '[[<a src="page.html">Go</a>]]', '[[<href a="page.html">Go</href>]]'], answer: 1, why: 'Links use [[<a>]] with an [[href]] attribute. ([[<link>]] is for stylesheets in the head.)' },
      { q: 'Which CSS selector targets the element with [[id="hero"]]?', options: ['[[.hero]]', '[[hero]]', '[[#hero]]', '[[*hero]]'], answer: 2, why: 'IDs are selected with a hash: [[#hero]].' },
      { q: 'In the box model, which layer is OUTSIDE the border?', options: ['Padding', 'Content', 'Margin', 'Width'], answer: 2, why: 'Margin is the outermost layer — the space between this box and others.' },
      { q: 'What will this CSS do?', code: '.row { display: flex; justify-content: center; }', options: ['Stack the children vertically', 'Put the children in a row, centered horizontally', 'Hide the children', 'Make the text centered only'], answer: 1, why: 'Flex lines children up in a row; [[justify-content: center]] centers them along that row.' },
      { q: 'Which tag would you use for a numbered list?', options: ['[[<ul>]]', '[[<ol>]]', '[[<nl>]]', '[[<li>]]'], answer: 1, why: '[[<ol>]] = ordered list, shown with numbers.' },
      { q: 'Why add [[<meta name="viewport" content="width=device-width, initial-scale=1">]]?', options: ['To add a page description for Google', 'So phones show the page at the right width instead of zooming out', 'To make images load', 'It is required for CSS to work'], answer: 1, why: 'Without it, mobile browsers pretend to be a wide desktop screen and shrink everything.' },
      { q: 'Which input type shows a keyboard with an @ key on phones and checks the format?', options: ['[[type="text"]]', '[[type="mail"]]', '[[type="email"]]', '[[type="at"]]'], answer: 2, why: '[[type="email"]] validates the address and gives phone users a better keyboard.' },
      { q: 'Which is the most accessible image?', options: ['[[<img src="dog.jpg">]]', '[[<img src="dog.jpg" alt="Golden retriever catching a frisbee">]]', '[[<img alt="image">]]', '[[<image src="dog.jpg">]]'], answer: 1, why: 'It has a real source AND a meaningful [[alt]] description.' }
    ],
    fix: [
      {
        title: 'The giant page',
        task: 'The page should have exactly <b>one</b> heading that says <b>My Recipes</b>, with the paragraph below it as normal text. Something is making everything into a heading. Fix it.',
        broken: `<h1>My Recipes<h1>
<p>Pancakes, waffles and french toast.</p>`,
        solution: `<h1>My Recipes</h1>
<p>Pancakes, waffles and french toast.</p>`,
        why: 'The closing tag was missing its slash, so the browser opened a second heading.',
        tests: [
          { name: 'There is exactly one [[<h1>]]', test: `return document.querySelectorAll('h1').length === 1;` },
          { name: 'The heading says "My Recipes"', test: `return document.querySelector('h1').textContent.trim() === 'My Recipes';` },
          { name: 'The paragraph is not inside the heading', test: `const p = document.querySelector('p'); return !!p && !p.closest('h1');` }
        ]
      },
      {
        title: 'The broken link',
        task: 'Clicking <b>MDN</b> should go to <code>https://developer.mozilla.org</code>. The link doesn\'t work. Find the typo.',
        broken: `<p>Learn more at <a herf="https://developer.mozilla.org">MDN</a>.</p>`,
        solution: `<p>Learn more at <a href="https://developer.mozilla.org">MDN</a>.</p>`,
        why: 'The attribute is spelled [[href]], not [[herf]].',
        tests: [
          { name: 'The link has the correct [[href]]', test: `const a = document.querySelector('a'); return !!a && a.getAttribute('href') === 'https://developer.mozilla.org';` },
          { name: 'The link text is still "MDN"', test: `return document.querySelector('a').textContent.trim() === 'MDN';` }
        ]
      },
      {
        title: 'The invisible cat',
        task: 'The image should load the file <code>cat.jpg</code> and have alt text describing it (anything describing the picture, e.g. "An orange cat sleeping").',
        broken: `<img scr="cat.jpg">`,
        solution: `<img src="cat.jpg" alt="An orange cat sleeping">`,
        why: 'The attribute is [[src]] (not [[scr]]), and every image needs [[alt]] text.',
        tests: [
          { name: 'The image uses [[src="cat.jpg"]]', test: `const i = document.querySelector('img'); return !!i && i.getAttribute('src') === 'cat.jpg';` },
          { name: 'The image has non-empty [[alt]] text', test: `const i = document.querySelector('img'); return !!i && (i.getAttribute('alt') || '').trim().length > 2;` }
        ]
      },
      {
        title: 'The out-of-order steps',
        task: 'These are steps in order, so they should be a <b>numbered</b> list with all <b>3 steps</b> as list items.',
        broken: `<ul>
  <li>Open the laptop</li>
  <li>Open VS Code</li>
  Write some code
</ul>`,
        solution: `<ol>
  <li>Open the laptop</li>
  <li>Open VS Code</li>
  <li>Write some code</li>
</ol>`,
        why: 'Use [[<ol>]] for ordered steps and wrap every item in [[<li>]].',
        tests: [
          { name: 'It uses an ordered list [[<ol>]]', test: `return !!document.querySelector('ol') && !document.querySelector('ul');` },
          { name: 'The list has 3 [[<li>]] items', test: `return document.querySelectorAll('ol > li').length === 3;` },
          { name: 'The 3rd item says "Write some code"', test: `const li = document.querySelectorAll('ol > li')[2]; return !!li && li.textContent.trim() === 'Write some code';` }
        ]
      },
      {
        title: 'The blue text that isn\'t',
        task: 'The paragraph should be <b>blue</b> and <b>20px</b>. Neither style is working.',
        broken: `<style>
  p {
    color: blue
    font-size: 20px;
  }
</style>
<p>I should be big and blue.</p>`,
        solution: `<style>
  p {
    color: blue;
    font-size: 20px;
  }
</style>
<p>I should be big and blue.</p>`,
        why: 'The missing semicolon after [[blue]] broke both declarations.',
        tests: [
          { name: 'Paragraph is blue', test: `return getComputedStyle(document.querySelector('p')).color === 'rgb(0, 0, 255)';` },
          { name: 'Paragraph is 20px', test: `return getComputedStyle(document.querySelector('p')).fontSize === '20px';` }
        ]
      },
      {
        title: 'The missing highlight',
        task: 'The paragraph with class <code>highlight</code> should have a <b>yellow</b> background.',
        broken: `<style>
  highlight {
    background-color: yellow;
  }
</style>
<p class="highlight">Important note!</p>`,
        solution: `<style>
  .highlight {
    background-color: yellow;
  }
</style>
<p class="highlight">Important note!</p>`,
        why: 'Class selectors need a dot: [[.highlight]].',
        tests: [
          { name: 'Highlighted paragraph has a yellow background', test: `return getComputedStyle(document.querySelector('.highlight')).backgroundColor === 'rgb(255, 255, 0)';` }
        ]
      },
      {
        title: 'The disappearing rule',
        task: 'The heading should be <b>purple</b> and the paragraph should be <b>18px</b>. The heading works but the paragraph doesn\'t.',
        broken: `<style>
  h1 {
    color: purple;

  p {
    font-size: 18px;
  }
</style>
<h1>Title</h1>
<p>Body text</p>`,
        solution: `<style>
  h1 {
    color: purple;
  }
  p {
    font-size: 18px;
  }
</style>
<h1>Title</h1>
<p>Body text</p>`,
        why: 'The [[h1]] rule was never closed with [[}]], so the [[p]] rule got swallowed inside it.',
        tests: [
          { name: 'Heading is purple', test: `return getComputedStyle(document.querySelector('h1')).color === 'rgb(128, 0, 128)';` },
          { name: 'Paragraph is 18px', test: `return getComputedStyle(document.querySelector('p')).fontSize === '18px';` }
        ]
      },
      {
        title: 'The squished box',
        task: 'The <code>.box</code> should have <b>20px of padding</b> and a <b>2px solid</b> border.',
        broken: `<style>
  .box {
    padding: 20;
    border: 2px soild black;
  }
</style>
<div class="box">Give me some room!</div>`,
        solution: `<style>
  .box {
    padding: 20px;
    border: 2px solid black;
  }
</style>
<div class="box">Give me some room!</div>`,
        why: 'CSS sizes need a unit ([[20px]]), and the border style is spelled [[solid]].',
        tests: [
          { name: 'Padding is 20px', test: `return getComputedStyle(document.querySelector('.box')).paddingTop === '20px';` },
          { name: 'Border is 2px wide', test: `return getComputedStyle(document.querySelector('.box')).borderTopWidth === '2px';` },
          { name: 'Border style is solid', test: `return getComputedStyle(document.querySelector('.box')).borderTopStyle === 'solid';` }
        ]
      },
      {
        title: 'The stacked cards',
        task: 'The three cards should sit <b>side by side</b> using Flexbox, with a <b>10px gap</b> between them.',
        broken: `<style>
  .row {
    display: flexbox;
    gap: 10 px;
  }
  .card { background: #e0e7ff; padding: 12px; }
</style>
<div class="row">
  <div class="card">One</div>
  <div class="card">Two</div>
  <div class="card">Three</div>
</div>`,
        solution: `<style>
  .row {
    display: flex;
    gap: 10px;
  }
  .card { background: #e0e7ff; padding: 12px; }
</style>
<div class="row">
  <div class="card">One</div>
  <div class="card">Two</div>
  <div class="card">Three</div>
</div>`,
        why: 'The value is [[flex]] (not [[flexbox]]), and there\'s no space between a number and its unit: [[10px]].',
        tests: [
          { name: '.row uses [[display: flex]]', test: `return getComputedStyle(document.querySelector('.row')).display === 'flex';` },
          { name: 'Gap is 10px', test: `return getComputedStyle(document.querySelector('.row')).columnGap === '10px';` }
        ]
      },
      {
        title: 'The unlabeled form',
        task: 'Fix the sign-up form: the input should be an <b>email</b> field with <b>id="email"</b>, its label must be connected to it, and it must be <b>required</b>.',
        broken: `<form>
  <label for="email">Email</label>
  <input id="mail" type="text">
  <button type="submit">Sign up</button>
</form>`,
        solution: `<form>
  <label for="email">Email</label>
  <input id="email" type="email" required>
  <button type="submit">Sign up</button>
</form>`,
        why: 'The label\'s [[for]] must match the input\'s [[id]]; use [[type="email"]] and add [[required]].',
        tests: [
          { name: 'An input with [[id="email"]] exists', test: `return !!document.getElementById('email');` },
          { name: 'Its type is email', test: `return document.getElementById('email').type === 'email';` },
          { name: 'The label is connected to it', test: `return document.querySelector('label').htmlFor === 'email';` },
          { name: 'It is required', test: `return document.getElementById('email').required === true;` }
        ]
      }
    ]
  }
};
