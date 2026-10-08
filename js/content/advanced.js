// Advanced course — modern JavaScript and building real apps
window.COURSES = window.COURSES || {};
COURSES.advanced = {
  id: 'advanced',
  level: 'Advanced',
  title: 'Modern JavaScript & Real Apps',
  tagline: 'Build interactive apps, talk to APIs, debug, test and ship.',
  description: 'Time to work like a professional developer. You\'ll use modern JavaScript features, build a real to-do app, load data from the internet, organize code with classes and modules, handle errors, debug, test — and publish your work on GitHub.',
  lang: 'js',
  certTitle: 'Modern JavaScript & Real Apps',
  skills: 'ES6+ array methods, app state and rendering, asynchronous JavaScript and the Fetch API, classes, error handling, debugging, testing and Git',
  resume: 'CodePath — Modern JavaScript & Real Apps Certificate (Passed final test)\nSkills: ES6+, map/filter/reduce, async/await, Fetch API, JSON, classes,\nerror handling, debugging with DevTools, unit testing basics, Git & GitHub Pages',
  units: [
    // ---------------- Unit 1 ----------------
    {
      title: 'Modern Array & Object Tools',
      intro: 'map, filter, reduce, destructuring and spread.',
      lessons: [
        {
          title: 'map, filter, find and reduce',
          body: `
<p>In Intermediate you used [[for]] loops to work with arrays. Professional JavaScript usually uses <b>array methods</b> instead — shorter and clearer. Each one takes a <b>function</b> (often an arrow function) that runs for every item:</p>
<ul>
<li>[[.map(fn)]] — <b>transform</b> every item → a new array of the same length.</li>
<li>[[.filter(fn)]] — <b>keep</b> only items where [[fn]] returns true → a new, shorter array.</li>
<li>[[.find(fn)]] — the <b>first</b> item where [[fn]] returns true (or [[undefined]]).</li>
<li>[[.reduce(fn, start)]] — <b>combine</b> all items into one value, like a total.</li>
<li>[[.forEach(fn)]] — just do something with each item (returns nothing).</li>
</ul>
<p>These methods <b>don't change the original array</b> — they give you a new result. You can also <b>chain</b> them: [[nums.filter(…).map(…)]].</p>`,
          pic: 'mapFilterReduce',
          cap: 'Four tools, four jobs: transform, keep, find, combine.',
          code: `const nums = [1, 2, 3, 4, 5, 6];

const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const firstBig = nums.find(n => n > 3);
const total = nums.reduce((sum, n) => sum + n, 0);

console.log(doubled);   // [2, 4, 6, 8, 10, 12]
console.log(evens);     // [2, 4, 6]
console.log(firstBig);  // 4
console.log(total);     // 21

// Real-world: a shopping cart
const cart = [
  { item: "Shirt", price: 20, qty: 2 },
  { item: "Hat", price: 15, qty: 1 },
  { item: "Socks", price: 5, qty: 3 }
];
const cartTotal = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
const names = cart.filter(p => p.price >= 10).map(p => p.item);
console.log("Total: $" + cartTotal);
console.log("Items $10+:", names);`
        },
        {
          title: 'Destructuring',
          body: `
<p><b>Destructuring</b> unpacks values from objects or arrays into variables in one line.</p>
<p><b>Objects</b> — use curly braces and the property names:</p>
{{{
const { name, age } = user;      // same as: const name = user.name; ...
const { name: userName } = user; // rename while unpacking
const { city = "Unknown" } = user; // default if missing
}}}
<p><b>Arrays</b> — use square brackets; position matters:</p>
{{{
const [first, second] = ["gold", "silver", "bronze"];
}}}
<p>It's especially handy in function parameters: [[function show({ name, age }) { … }]] lets you call [[show(user)]] and use the names directly.</p>`,
          pic: 'destructuring',
          cap: 'Destructuring pulls values out by name (objects) or by position (arrays).',
          code: `const user = { name: "Ava", age: 20, city: "Austin" };

const { name, age } = user;
console.log(name, age);

const { city: hometown, country = "USA" } = user;
console.log(hometown, country);

const medals = ["gold", "silver", "bronze"];
const [first, second] = medals;
console.log(first, second);

// In function parameters
function intro({ name, city }) {
  return \`I'm \${name} from \${city}\`;
}
console.log(intro(user));`
        },
        {
          title: 'Spread and rest ( ... )',
          body: `
<p>The three dots [[...]] do two opposite jobs:</p>
<p><b>Spread</b> — "unpack these items here":</p>
<ul>
<li>Copy an array: [[const copy = [...nums];]]</li>
<li>Combine arrays: [[const all = [...a, ...b];]]</li>
<li>Copy/update an object: [[const updated = { ...user, age: 21 };]]</li>
</ul>
<p><b>Rest</b> — "collect the remaining items":</p>
<ul>
<li>[[function sum(...numbers) { }]] — any number of arguments become an array.</li>
<li>[[const [head, ...tail] = list;]]</li>
</ul>
<div class="callout warn">⚠️ [[const copy = original;]] does <b>not</b> copy an array or object — both names point to the <i>same</i> one, so changing [[copy]] changes [[original]] too! Use spread to make a real copy.</div>`,
          pic: 'spread',
          cap: 'Spread lays items out; it\'s the easy way to copy and combine.',
          code: `const a = [1, 2];
const b = [3, 4];
const all = [...a, ...b];
console.log(all);

// The copy trap
const original = ["x", "y"];
const notACopy = original;
notACopy.push("z");
console.log("original:", original);   // changed! 😱

const realCopy = [...original];
realCopy.push("!");
console.log("original:", original, "copy:", realCopy);

// Objects
const user = { name: "Ava", age: 20 };
const older = { ...user, age: 21 };
console.log(user, older);

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}
console.log(sum(1, 2, 3, 4));`
        }
      ],
      recap: [
        '[[map]] transforms, [[filter]] keeps, [[find]] gets the first match, [[reduce]] combines into one value. None change the original.',
        'Always give [[reduce]] a starting value: [[arr.reduce((sum, n) => sum + n, 0)]].',
        'Object destructuring: [[const { name, age } = user;]] — array destructuring: [[const [a, b] = list;]].',
        'Spread copies/combines: [[[...a, ...b]]], [[{ ...obj, key: newValue }]].',
        '[[const copy = original]] is NOT a copy — both point to the same array/object.'
      ],
      cheat: `arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.find(x => x.id === 3)
arr.reduce((acc, x) => acc + x, 0)
const { a, b } = obj;   const [x, y] = arr;
const copy = [...arr];  const upd = { ...obj, a: 1 };`,
      quiz: [
        { q: 'What does [[[1, 2, 3].map(n => n * 10)]] give?', options: ['[[60]]', '[[[10, 20, 30]]]', '[[[1, 2, 3]]]', '[[[11, 12, 13]]]'], answer: 1, why: '[[map]] transforms every item and returns a new array.' },
        { q: 'Which method keeps only the items that pass a test?', options: ['[[map]]', '[[reduce]]', '[[filter]]', '[[forEach]]'], answer: 2, why: '[[filter]] keeps items where your function returns true.' },
        { q: 'What is [[x]] after this?', code: 'const { x } = { x: 5, y: 9 };', options: ['9', '5', '{ x: 5 }', 'undefined'], answer: 1, why: 'Object destructuring pulls out the property with the matching name.' },
        { q: 'After this code, what is [[a]]?', code: 'const a = [1, 2];\nconst b = a;\nb.push(3);', options: ['[[[1, 2]]]', '[[[1, 2, 3]]]', '[[[3]]]', 'Error'], answer: 1, why: '[[b]] isn\'t a copy — it points to the same array, so [[a]] changes too. Use [[[...a]]] to copy.' },
        { q: 'What does [[[2, 4, 6].reduce((t, n) => t + n, 0)]] give?', options: ['[[[2, 4, 6]]]', '[[6]]', '[[12]]', '[[246]]'], answer: 2, why: '[[reduce]] combines the items: 0 + 2 + 4 + 6 = 12.' }
      ]
    },
    // ---------------- Unit 2 ----------------
    {
      title: 'Building an Interactive App',
      intro: 'Events, state and saving data — build a to-do app.',
      lessons: [
        {
          title: 'Event objects and delegation',
          lang: 'html',
          body: `
<p>When an event fires, your listener receives an <b>event object</b> (usually named [[e]] or [[event]]) full of details:</p>
<ul>
<li>[[e.target]] — the exact element that was clicked/typed in.</li>
<li>[[e.key]] — which key was pressed (for keyboard events).</li>
<li>[[e.preventDefault()]] — stop the browser's default action (like a form reloading the page on submit).</li>
</ul>
<p><b>Bubbling:</b> an event on an element also travels <i>up</i> to its parent, grandparent, and so on. That enables <b>event delegation</b>: put <b>one</b> listener on a parent (like a [[<ul>]]) and use [[e.target]] to see which child was clicked. It even works for items you add later!</p>`,
          pic: 'bubbling',
          cap: 'Events bubble up from the clicked element through its parents.',
          code: `<ul id="menu">
  <li><button data-food="🍕">Pizza</button></li>
  <li><button data-food="🌮">Tacos</button></li>
  <li><button data-food="🍣">Sushi</button></li>
</ul>
<p id="pick">Pick a food</p>
<form id="f"><input id="q" placeholder="Type & press Enter"></form>

<script>
  // ONE listener on the parent handles every button
  document.getElementById("menu").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.getElementById("pick").textContent = "You picked " + btn.dataset.food;
  });

  document.getElementById("f").addEventListener("submit", (e) => {
    e.preventDefault();              // don't reload the page
    console.log("Searched for:", document.getElementById("q").value);
  });

  document.getElementById("q").addEventListener("keydown", (e) => {
    if (e.key === "Escape") e.target.value = "";
  });
</script>`
        },
        {
          title: 'State and rendering: a to-do app',
          lang: 'html',
          body: `
<p>Real apps follow one powerful pattern:</p>
<ol>
<li>Keep your data in one place — the <b>state</b> (here, an array of to-do objects).</li>
<li>Write a [[render()]] function that rebuilds the screen <b>from the state</b>.</li>
<li>When the user does something: <b>update the state</b>, then <b>call render()</b>.</li>
</ol>
<p>You never edit the screen directly — you change the data and let [[render]] draw it. This is exactly how frameworks like <b>React</b> and <b>Vue</b> work, so learning it now makes those much easier later.</p>
<p>Below is a complete working to-do app. Add tasks, tick them off, delete them. Read the code — you know every piece of it!</p>`,
          pic: 'stateRender',
          cap: 'Data → render → screen. User action → update data → render again.',
          codeTitle: 'To-do app — try it, then read the code',
          code: `<style>
  body { font-family: system-ui; }
  li { display: flex; gap: 8px; align-items: center; padding: 4px 0; }
  .done span { text-decoration: line-through; color: #94a3b8; }
  li button { margin-left: auto; }
</style>

<form id="form">
  <input id="input" placeholder="New task" required>
  <button>Add</button>
</form>
<ul id="list"></ul>
<p id="count"></p>

<script>
  // 1. STATE
  let todos = [
    { id: 1, text: "Learn map & filter", done: true },
    { id: 2, text: "Build a to-do app", done: false }
  ];

  // 2. RENDER: draw the screen from the state
  function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    for (const t of todos) {
      const li = document.createElement("li");
      li.className = t.done ? "done" : "";
      li.innerHTML = '<input type="checkbox"><span></span><button>✕</button>';
      li.querySelector("input").checked = t.done;
      li.querySelector("span").textContent = t.text;
      li.dataset.id = t.id;
      list.append(li);
    }
    const left = todos.filter(t => !t.done).length;
    document.getElementById("count").textContent = left + " left to do";
  }

  // 3. EVENTS: update state, then render
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("input");
    todos.push({ id: Date.now(), text: input.value.trim(), done: false });
    input.value = "";
    render();
  });

  document.getElementById("list").addEventListener("click", (e) => {
    const id = Number(e.target.closest("li").dataset.id);
    if (e.target.tagName === "BUTTON") todos = todos.filter(t => t.id !== id);
    if (e.target.type === "checkbox") {
      const todo = todos.find(t => t.id === id);
      todo.done = !todo.done;
    }
    render();
  });

  render();
</script>`
        },
        {
          title: 'Saving data: JSON and localStorage',
          body: `
<p>Refresh the to-do app and your tasks vanish — the state only lives in memory. To keep it, save it in the browser with <b>localStorage</b>.</p>
<p>localStorage can only store <b>text</b>, so we convert data with <b>JSON</b> (JavaScript Object Notation) — the most common data format on the web:</p>
<ul>
<li>[[JSON.stringify(data)]] — object/array → text.</li>
<li>[[JSON.parse(text)]] — text → object/array.</li>
<li>[[localStorage.setItem("key", text)]] — save.</li>
<li>[[localStorage.getItem("key")]] — load (gives [[null]] if nothing is saved yet).</li>
</ul>
<p>The pattern for any app:</p>
{{{
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// on startup:
let todos = JSON.parse(localStorage.getItem("todos")) || [];
}}}
<p>Then call [[save()]] every time the state changes. <i>(This very app saves your course progress exactly this way!)</i></p>`,
          pic: 'storage',
          cap: 'Data is turned into JSON text, stored in the browser, and parsed back when the app loads.',
          code: `const todos = [{ text: "Gym", done: false }, { text: "Read", done: true }];

const text = JSON.stringify(todos);
console.log("As text:", text);
console.log(typeof text);  // string

localStorage.setItem("todos", text);

// ...later, even after a page refresh:
const loaded = JSON.parse(localStorage.getItem("todos")) || [];
console.log("Loaded back:", loaded);
console.log(loaded[0].text);

console.log(localStorage.getItem("nothing-here")); // null`
        }
      ],
      recap: [
        'Listeners receive an event object: [[e.target]] (what was clicked), [[e.key]], [[e.preventDefault()]].',
        'Events <b>bubble</b> up to parents → one listener on a parent can handle many children (<b>delegation</b>).',
        'App pattern: <b>state</b> (data) → [[render()]] (draw from data) → events update state → render again.',
        '[[JSON.stringify]] turns data into text; [[JSON.parse]] turns it back.',
        'Save with [[localStorage.setItem(key, text)]], load with [[getItem(key)]] ([[null]] if missing).'
      ],
      cheat: `form.addEventListener("submit", e => {
  e.preventDefault();
  state.push(newItem);
  save();
  render();
});
const save = () => localStorage.setItem("k", JSON.stringify(state));
let state = JSON.parse(localStorage.getItem("k")) || [];`,
      quiz: [
        { q: 'Inside a click listener, what is [[e.target]]?', options: ['The page', 'The element that was actually clicked', 'The event name', 'The mouse position'], answer: 1, why: '[[e.target]] is the exact element where the event happened.' },
        { q: 'Why call [[e.preventDefault()]] in a form\'s submit listener?', options: ['To delete the form', 'To stop the page from reloading', 'To clear the inputs', 'To submit faster'], answer: 1, why: 'By default, submitting a form reloads/navigates the page. preventDefault stops that so your JS can handle it.' },
        { q: 'In the state + render pattern, what should a click handler do?', options: ['Edit the HTML directly', 'Update the state, then call render()', 'Reload the page', 'Call render() only'], answer: 1, why: 'Change the data, then redraw from it. The screen always matches the state.' },
        { q: 'What does [[JSON.stringify([1, 2])]] return?', options: ['The array [[[1, 2]]]', 'The string [["[1,2]"]]', 'The number 3', '[[undefined]]'], answer: 1, why: 'stringify turns data into a JSON text string.' },
        { q: 'What does [[localStorage.getItem("x")]] return if nothing was saved under "x"?', options: ['[[""]]', '[[undefined]]', '[[null]]', 'An error'], answer: 2, why: 'It returns [[null]] — that\'s why we write [[|| []]] as a fallback.' }
      ]
    },
    // ---------------- Unit 3 ----------------
    {
      title: 'Asynchronous JavaScript',
      intro: 'Timers, promises, async/await and loading data from the internet.',
      lessons: [
        {
          title: 'Sync vs async and callbacks',
          body: `
<p>So far, code ran top to bottom, one line after another — <b>synchronous</b>. But some things take time: waiting for a timer, a file, or data from the internet. If JavaScript just sat and waited, the whole page would freeze.</p>
<p>Instead, JavaScript is <b>asynchronous</b>: it starts the slow task, keeps running other code, and comes back when the task finishes. The simplest example is [[setTimeout]]:</p>
{{{
setTimeout(() => {
  console.log("2 seconds later!");
}, 2000);   // milliseconds
}}}
<p>The function you hand over is a <b>callback</b> — "call me back when you're done". Notice the order of the output below: the code <i>after</i> setTimeout runs first!</p>
<div class="callout warn">⚠️ Pass the function itself — [[setTimeout(sayHi, 1000)]] — not [[setTimeout(sayHi(), 1000)]], which runs it immediately.</div>`,
          pic: 'asyncTimeline',
          cap: 'Async lets slow tasks finish in the background while your app keeps going.',
          code: `console.log("1. Start");

setTimeout(() => {
  console.log("3. Timer done (after 1 second)");
}, 1000);

console.log("2. This runs BEFORE the timer!");

// setInterval repeats
let n = 0;
const id = setInterval(() => {
  n++;
  console.log("tick", n);
  if (n === 3) clearInterval(id);  // stop it
}, 400);`
        },
        {
          title: 'Promises',
          body: `
<p>A <b>Promise</b> is an object that represents a value you'll get <i>later</i> — like an order receipt. It's in one of three states:</p>
<ul>
<li><b>pending</b> — still waiting.</li>
<li><b>fulfilled</b> — finished successfully, with a value.</li>
<li><b>rejected</b> — failed, with an error.</li>
</ul>
<p>You react to the result with [[.then()]] (success) and [[.catch()]] (failure). [[.then]] calls can be <b>chained</b> — whatever one returns is passed to the next.</p>
<p>Most of the time you'll <i>use</i> promises that other code gives you (like [[fetch]]). Making one looks like this:</p>
{{{
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
}}}`,
          pic: 'promiseStates',
          cap: 'A promise starts pending, then is either fulfilled or rejected — never both.',
          code: `const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const roll = Math.ceil(Math.random() * 6);
      if (roll === 1) reject(new Error("Rolled a 1 — you lose!"));
      else resolve(roll);
    }, 500);
  });
}

console.log("Rolling...");
rollDice()
  .then(n => {
    console.log("You rolled", n);
    return n * 10;
  })
  .then(points => console.log("Points:", points))
  .catch(err => console.log("😢", err.message))
  .finally(() => console.log("(Press Run to roll again)"));`
        },
        {
          title: 'async/await and fetch',
          body: `
<p>[[async]]/[[await]] lets you write asynchronous code that <i>reads</i> like normal top-to-bottom code:</p>
<ul>
<li>Put [[async]] before a function.</li>
<li>Inside it, put [[await]] before a promise to pause <i>that function</i> until the promise finishes — the rest of the page keeps running.</li>
<li>Handle errors with [[try]]/[[catch]] (more in Unit 4).</li>
</ul>
<p>The most common promise of all is [[fetch()]], which requests data from a URL — usually an <b>API</b> (a server that sends data instead of web pages). APIs usually reply with JSON:</p>
{{{
const res = await fetch("https://api.example.com/users");
const users = await res.json();   // parse the JSON body
}}}
<p>The example loads real data from a free practice API (needs internet).</p>
<div class="callout warn">⚠️ Forgetting [[await]] is a classic bug: you get a <i>Promise</i> instead of the data, and properties like [[.name]] are [[undefined]].</div>`,
          pic: 'fetchFlow',
          cap: 'Your app asks an API for data with [[fetch]], and gets JSON back.',
          code: `async function loadUsers() {
  try {
    console.log("Loading...");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const users = await res.json();

    console.log("Got", users.length, "users:");
    for (const u of users.slice(0, 5)) {
      console.log(\`- \${u.name} (\${u.address.city})\`);
    }
  } catch (err) {
    console.log("Could not load data:", err.message);
    console.log("(Are you offline? That's okay — the code is what matters.)");
  }
}

loadUsers();`
        }
      ],
      recap: [
        '<b>Async</b> code starts slow tasks and keeps going; results arrive later via callbacks or promises.',
        '[[setTimeout(fn, ms)]] runs [[fn]] once later; [[setInterval]] repeats. Pass the function, don\'t call it.',
        'A <b>Promise</b> is pending → fulfilled ([[.then]]) or rejected ([[.catch]]).',
        '[[async]] functions can [[await]] promises, so async code reads top-to-bottom.',
        '[[const res = await fetch(url); const data = await res.json();]] loads JSON from an API. Don\'t forget [[await]]!'
      ],
      cheat: `async function getData() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}`,
      quiz: [
        { q: 'What is the order of the output?', code: 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");', options: ['A B C', 'A C B', 'B A C', 'C B A'], answer: 1, why: 'Even with 0ms, the timer callback waits until the current code finishes: A, C, then B.' },
        { q: 'Which promise method handles an error?', options: ['[[.then()]]', '[[.catch()]]', '[[.error()]]', '[[.fail()]]'], answer: 1, why: '[[.catch()]] runs when a promise is rejected.' },
        { q: 'Where can you use [[await]]?', options: ['Anywhere', 'Only inside an [[async]] function (or a module\'s top level)', 'Only inside loops', 'Only with setTimeout'], answer: 1, why: '[[await]] works inside [[async]] functions (and at the top level of modules).' },
        { q: 'What does [[fetch(url)]] return?', options: ['The data directly', 'A Promise', 'A string of HTML', 'An array'], answer: 1, why: 'fetch returns a Promise for a Response. You then [[await res.json()]] to get the data.' },
        { q: 'What is the bug?', code: 'async function getUser() {\n  const res = fetch("/user");\n  const user = await res.json();\n}', options: ['fetch needs two arguments', 'Missing [[await]] before fetch', 'json() should be JSON()', 'No bug'], answer: 1, why: 'Without [[await]], [[res]] is a Promise, which has no [[.json()]] method.' }
      ]
    },
    // ---------------- Unit 4 ----------------
    {
      title: 'Classes, Modules & Errors',
      intro: 'Organize bigger programs and handle things going wrong.',
      lessons: [
        {
          title: 'Classes',
          body: `
<p>When you need many objects of the same shape — users, enemies in a game, bank accounts — a <b>class</b> is a blueprint for making them.</p>
<ul>
<li>The [[constructor]] runs when you create an object with [[new]], and sets up its properties.</li>
<li>[[this]] means "the object being created/used".</li>
<li><b>Methods</b> are functions every object from the class shares.</li>
<li>[[extends]] creates a class based on another one (<b>inheritance</b>); [[super(...)]] calls the parent's constructor.</li>
</ul>
<p>Each object made from a class is called an <b>instance</b>.</p>`,
          pic: 'classBlueprint',
          cap: 'One blueprint (class), many objects (instances), each with its own data.',
          code: `class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  toString() {
    return \`\${this.owner}: $\${this.balance}\`;
  }
}

const a = new BankAccount("Ava", 100);
const b = new BankAccount("Ben");
a.deposit(50);
b.deposit(20);
console.log(a.toString());
console.log(b.toString());

class SavingsAccount extends BankAccount {
  constructor(owner, balance, rate) {
    super(owner, balance);
    this.rate = rate;
  }
  addInterest() {
    return this.deposit(this.balance * this.rate);
  }
}
const s = new SavingsAccount("Cy", 1000, 0.05);
s.addInterest();
console.log(s.toString());`
        },
        {
          title: 'Modules: splitting code into files',
          body: `
<p>Real apps have thousands of lines. Instead of one giant file, developers split code into <b>modules</b> — small files that each do one job and share code with [[export]] and [[import]].</p>
<p><b>math.js</b></p>
{{{
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;
}}}
<p><b>app.js</b></p>
{{{
import { add, PI } from "./math.js";
console.log(add(2, 3));
}}}
<p>To use modules in a web page, load your main file with [[type="module"]]:</p>
{{{
<script type="module" src="app.js"></script>
}}}
<ul>
<li>A file can also have one [[export default]], imported without braces: [[import Thing from "./thing.js"]].</li>
<li>Modules need to be served by a web server (VS Code's <b>Live Server</b> works) — opening the file directly may block them.</li>
<li>Professional tools like <b>npm</b> let you import thousands of free modules other people wrote.</li>
</ul>
<p>A typical project folder:</p>
{{{
my-app/
├── index.html
├── style.css
└── js/
    ├── app.js        (starts everything)
    ├── storage.js    (save/load)
    └── render.js     (draws the screen)
}}}`,
          pic: 'modules',
          cap: 'Export from one file, import into another.'
        },
        {
          title: 'Handling errors: try, catch, throw',
          body: `
<p>Things go wrong: bad user input, missing data, the network is down. Without handling, one error can stop your whole app. Use [[try]]/[[catch]]:</p>
{{{
try {
  riskyThing();          // if this throws...
} catch (err) {
  console.log(err.message);   // ...we land here instead of crashing
} finally {
  // always runs, error or not (optional)
}
}}}
<p>You can create your own errors with [[throw new Error("message")]] — great for stopping bad data early.</p>
<p>Common built-in error types you'll see:</p>
<ul>
<li><b>ReferenceError</b> — using a name that doesn't exist (typo?).</li>
<li><b>TypeError</b> — using a value the wrong way, like calling something that isn't a function or reading a property of [[undefined]].</li>
<li><b>SyntaxError</b> — the code itself is written incorrectly (missing bracket, quote…).</li>
</ul>`,
          pic: 'tryCatch',
          cap: 'try → if it throws, jump to catch → finally always runs.',
          code: `function parseAge(text) {
  const age = Number(text);
  if (Number.isNaN(age)) throw new Error(\`"\${text}" is not a number\`);
  if (age < 0) throw new Error("Age can't be negative");
  return age;
}

for (const input of ["25", "abc", "-4"]) {
  try {
    console.log("Age is", parseAge(input));
  } catch (err) {
    console.log("⚠️", err.message);
  }
}

// JSON.parse throws on bad input:
try {
  JSON.parse("{ oops }");
} catch (err) {
  console.log(err.name);   // SyntaxError
} finally {
  console.log("Done checking.");
}

// Uncaught errors stop the program:
const user = undefined;
console.log(user.name);   // TypeError
console.log("This line never runs");`
        }
      ],
      recap: [
        'A <b>class</b> is a blueprint: [[constructor]] sets up properties on [[this]], methods are shared. Create instances with [[new]].',
        '[[extends]] + [[super()]] build one class on top of another.',
        '<b>Modules</b> split code into files: [[export]] from one, [[import { x } from "./file.js"]] in another. Use [[<script type="module">]].',
        '[[try { } catch (err) { } finally { }]] handles errors instead of crashing. [[throw new Error("msg")]] creates your own.',
        'Know your errors: <b>ReferenceError</b> (unknown name), <b>TypeError</b> (wrong use of a value), <b>SyntaxError</b> (broken code).'
      ],
      cheat: `class Dog {
  constructor(name) { this.name = name; }
  bark() { return this.name + " says woof"; }
}
const d = new Dog("Rex");

export function helper() {}          // file A
import { helper } from "./a.js";     // file B

try { risky(); } catch (err) { console.log(err.message); }`,
      quiz: [
        { q: 'Which keyword creates a new object from a class?', options: ['[[make]]', '[[new]]', '[[create]]', '[[class]]'], answer: 1, why: '[[new ClassName(...)]] runs the constructor and returns a new instance.' },
        { q: 'Inside a class method, what does [[this]] refer to?', options: ['The class file', 'The current object (instance)', 'The window', 'The previous object'], answer: 1, why: '[[this]] is the specific object the method was called on.' },
        { q: 'How do you share a function from one module file to another?', options: ['[[share]] / [[get]]', '[[export]] / [[import]]', '[[public]] / [[require]]', '[[send]] / [[receive]]'], answer: 1, why: 'ES modules use [[export]] and [[import]].' },
        { q: 'When does a [[finally]] block run?', options: ['Only if there was an error', 'Only if there was no error', 'Always', 'Never'], answer: 2, why: '[[finally]] runs whether the try succeeded or failed.' },
        { q: 'What error does [[let x = undefined; x.length;]] cause?', options: ['SyntaxError', 'ReferenceError', 'TypeError', 'No error'], answer: 2, why: 'Reading a property of [[undefined]] is a TypeError. (A ReferenceError is when a name doesn\'t exist at all.)' }
      ]
    },
    // ---------------- Unit 5 ----------------
    {
      title: 'Debugging, Testing & Shipping',
      intro: 'Find bugs fast, prove code works, and publish your portfolio.',
      lessons: [
        {
          title: 'Debugging like a pro',
          body: `
<p>Every developer writes bugs — what makes you good is how fast you find them. A reliable process:</p>
<ol>
<li><b>Read the error message.</b> It tells you the <i>type</i> of error, a description, and the <b>file and line number</b>.</li>
<li><b>Reproduce it.</b> Find the exact steps that make it happen.</li>
<li><b>Check your assumptions</b> with [[console.log]]. Print variables right before the broken line — is the value what you expected?</li>
<li><b>Change one thing at a time</b>, then test again.</li>
</ol>
<p>Browser <b>DevTools</b> (press <b>F12</b>, or <b>Ctrl+Shift+I</b> / <b>Cmd+Option+I</b>) are your toolbox:</p>
<ul>
<li><b>Console</b> — errors, your logs, and you can type JavaScript to try things.</li>
<li><b>Elements</b> — see and live-edit the HTML and CSS.</li>
<li><b>Sources</b> — set a <b>breakpoint</b> (click a line number) to pause code and inspect every variable. You can also write [[debugger;]] in your code.</li>
<li><b>Network</b> — see every request your page makes (great for fetch problems).</li>
</ul>
<p>The code below has a bug: the average is wrong. The logs show how to hunt it down — can you fix it?</p>`,
          pic: 'devtools',
          cap: 'The Console shows the error, the file and the line number. Start there.',
          code: `function average(nums) {
  let total = 0;
  for (let i = 1; i < nums.length; i++) {
    total += nums[i];
    console.log(\`i=\${i}, added \${nums[i]}, total=\${total}\`);  // 🔍 debug log
  }
  return total / nums.length;
}

const result = average([10, 20, 30]);
console.log("Average:", result, "(expected 20)");
// 🐛 The logs show index 0 is never added. Fix the loop start!`
        },
        {
          title: 'Testing your code',
          body: `
<p>A <b>test</b> is code that checks other code. You give a function an input, and compare what it returns (<b>actual</b>) with what it <i>should</i> return (<b>expected</b>). If they match, the test passes.</p>
<p>Why bother? Tests catch bugs <b>before</b> users do, and let you change code later without fear of breaking things. Companies expect developers to write them — mentioning testing on your resume stands out.</p>
<p>Professionals use testing libraries like <b>Jest</b> or <b>Vitest</b>:</p>
{{{
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
}}}
<p>Below we build a tiny version of that ourselves, so you can see there's no magic. Good tests check <b>normal cases</b>, <b>edge cases</b> (empty lists, zero, negative numbers) and <b>bad input</b>.</p>
<p><i>Fun fact: the final tests in this app grade your "fix the code" answers in exactly this way!</i></p>`,
          pic: 'testing',
          cap: 'Expected vs actual. Match = pass ✅, no match = fail ❌.',
          code: `// A tiny test framework
function test(name, fn) {
  try {
    fn();
    console.log("✅ " + name);
  } catch (err) {
    console.log("❌ " + name + " — " + err.message);
  }
}
function expectEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(\`expected \${expected}, got \${actual}\`);
  }
}

// The code we're testing
function titleCase(str) {
  return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}

// The tests
test("capitalizes each word", () => expectEqual(titleCase("hello world"), "Hello World"));
test("single word", () => expectEqual(titleCase("code"), "Code"));
test("empty string", () => expectEqual(titleCase(""), ""));
// 🐛 The last test fails! Can you change titleCase so it handles "" ?`
        },
        {
          title: 'Git, GitHub & publishing your portfolio',
          body: `
<p><b>Git</b> is a tool that saves snapshots ("commits") of your project, so you can see history and undo mistakes. <b>GitHub</b> is a website that stores your Git projects online — it's your <b>public portfolio</b>, and many employers will look at it.</p>
<h3>One-time setup</h3>
<ol>
<li>Install Git from <code>git-scm.com</code> (Macs may already have it).</li>
<li>Create a free account at <code>github.com</code>.</li>
<li>Tell Git who you are (in VS Code: <b>Terminal → New Terminal</b>):</li>
</ol>
{{{
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
}}}
<h3>Publish a project</h3>
<ol>
<li>On GitHub click <b>New repository</b>, name it (e.g. [[profile-page]]), and create it.</li>
<li>In your project folder's terminal:</li>
</ol>
{{{
git init
git add .
git commit -m "First version of my profile page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/profile-page.git
git push -u origin main
}}}
<p>Each time you improve it: [[git add .]] → [[git commit -m "what changed"]] → [[git push]]. (VS Code's <b>Source Control</b> panel can do this with buttons too.)</p>
<h3>Make it a live website — free</h3>
<p>On your repository page: <b>Settings → Pages → Source: Deploy from a branch → main → Save</b>. In a minute your site is live at [[https://YOUR-USERNAME.github.io/profile-page/]]. Put that link on your resume! 🎉</p>
<h3>Portfolio ideas to build next</h3>
<ul>
<li>Your profile page (Beginner project) — upgrade it with JavaScript.</li>
<li>The to-do app (with localStorage).</li>
<li>A weather or movie search app using a free API and fetch.</li>
<li>A quiz game using arrays of question objects (like this app!).</li>
</ul>
<p>Write a short <b>README.md</b> in each repo: what it does, a screenshot, and what you learned. Employers read these.</p>`,
          pic: 'gitFlow',
          cap: 'Edit → add → commit → push. Then GitHub Pages turns your repo into a real website.'
        }
      ],
      recap: [
        'Debug process: <b>read the error</b> (type, message, line) → reproduce → [[console.log]] your assumptions → change one thing at a time.',
        'DevTools (F12): Console, Elements, Sources (breakpoints / [[debugger;]]), Network.',
        'A <b>test</b> compares actual vs expected. Test normal cases, edge cases and bad input. Pros use Jest or Vitest.',
        'Git saves snapshots: [[git add .]] → [[git commit -m "msg"]] → [[git push]]. GitHub hosts them online.',
        'GitHub Pages turns a repo into a free live website — link it on your resume.'
      ],
      cheat: `git init
git add .
git commit -m "Describe the change"
git remote add origin https://github.com/you/repo.git
git push -u origin main

// debugging
console.log({ total, items });  // label your logs
debugger;                       // pause here in DevTools`,
      quiz: [
        { q: 'An error says [[ReferenceError: totl is not defined at app.js:14]]. What\'s the best first step?', options: ['Delete app.js', 'Go to line 14 and look for a typo in "totl"', 'Restart the computer', 'Add more console.logs everywhere'], answer: 1, why: 'The message gives the cause (an unknown name — likely a typo of "total") and the exact line.' },
        { q: 'Which DevTools panel lets you pause code at a line with a breakpoint?', options: ['Elements', 'Network', 'Sources', 'Console'], answer: 2, why: 'Click a line number in Sources to set a breakpoint.' },
        { q: 'A test compares…', options: ['Two different functions', 'The actual result with the expected result', 'Your code to someone else\'s', 'Speed only'], answer: 1, why: 'Tests pass when actual === expected.' },
        { q: 'What is the correct order to save and upload changes with Git?', options: ['push → commit → add', 'commit → add → push', 'add → commit → push', 'add → push → commit'], answer: 2, why: 'Stage with add, snapshot with commit, upload with push.' },
        { q: 'What does GitHub Pages do?', options: ['Writes code for you', 'Hosts your repository as a free live website', 'Tests your code', 'Makes your repo private'], answer: 1, why: 'GitHub Pages publishes your HTML/CSS/JS as a website with a public link.' }
      ]
    }
  ],
  // ---------------- Final test ----------------
  test: {
    mc: [
      { q: 'What does this return?', code: '[5, 10, 15].filter(n => n > 7).map(n => n * 2)', options: ['[[[10, 20, 30]]]', '[[[20, 30]]]', '[[[10, 15]]]', '[[50]]'], answer: 1, why: 'filter keeps [10, 15], then map doubles them → [20, 30].' },
      { q: 'What is [[b]]?', code: 'const [a, b] = ["red", "green", "blue"];', options: ['"red"', '"green"', '"blue"', '[[["green", "blue"]]]'], answer: 1, why: 'Array destructuring is by position: a = "red", b = "green".' },
      { q: 'What does [[{ ...user, age: 30 }]] do?', options: ['Changes user\'s age', 'Creates a new object copied from user, with age set to 30', 'Deletes age', 'Throws an error'], answer: 1, why: 'Spread copies all properties into a new object, then age is overwritten — user is untouched.' },
      { q: 'Which pattern do frameworks like React follow?', options: ['Edit the DOM directly everywhere', 'Update state, then re-render the UI from state', 'Reload the page on every click', 'Store everything in the HTML'], answer: 1, why: 'State drives the UI: change data, then render.' },
      { q: 'What is the order of the output?', code: 'setTimeout(() => console.log("1"), 100);\nconsole.log("2");\nPromise.resolve().then(() => console.log("3"));', options: ['1 2 3', '2 3 1', '2 1 3', '3 2 1'], answer: 1, why: 'Sync code first (2), then the resolved promise callback (3), then the 100ms timer (1).' },
      { q: 'Why use [[await res.json()]] after a fetch?', options: ['To send data', 'To read and parse the response body as JSON', 'To check the URL', 'It isn\'t needed'], answer: 1, why: 'The Response body has to be read and parsed — json() returns a promise for the data.' },
      { q: 'In a class, what is the [[constructor]] for?', options: ['Deleting objects', 'Setting up a new instance\'s properties', 'Importing modules', 'Handling errors'], answer: 1, why: 'The constructor runs on [[new]] and initializes [[this]].' },
      { q: 'Which correctly imports a named export [[formatDate]] from [[utils.js]]?', options: ['[[import formatDate from utils;]]', '[[import { formatDate } from "./utils.js";]]', '[[require formatDate in utils.js]]', '[[export { formatDate } from "./utils.js";]]'], answer: 1, why: 'Named exports are imported with braces and a relative path.' },
      { q: 'What does this print?', code: 'try {\n  throw new Error("Oops");\n} catch (e) {\n  console.log(e.message);\n}', options: ['Error', 'Oops', 'e.message', 'Nothing — it crashes'], answer: 1, why: 'The thrown error is caught and its message, "Oops", is printed.' },
      { q: 'Which Git command uploads your commits to GitHub?', options: ['[[git add]]', '[[git commit]]', '[[git push]]', '[[git init]]'], answer: 2, why: '[[git push]] sends your local commits to the remote repository.' }
    ],
    fix: [
      {
        title: 'map returns nothing',
        task: '<code>doubled</code> should be <b>[2, 4, 6]</b>, but it\'s full of <code>undefined</code>.',
        broken: `const nums = [1, 2, 3];
const doubled = nums.map(n => { n * 2 });
console.log(doubled);`,
        solution: `const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);`,
        why: 'With curly braces an arrow function needs [[return]]. Either remove the braces or write [[{ return n * 2; }]].',
        tests: [
          { name: '[[doubled]] is [2, 4, 6]', test: `return JSON.stringify(doubled) === '[2,4,6]';` },
          { name: '[[nums]] is unchanged', test: `return JSON.stringify(nums) === '[1,2,3]';` }
        ]
      },
      {
        title: 'Who counts as an adult?',
        task: '<code>adults</code> should contain everyone who is <b>18 or older</b> (so Ava and Ben).',
        broken: `const people = [
  { name: "Ava", age: 18 },
  { name: "Ben", age: 25 },
  { name: "Cy", age: 12 }
];
const adults = people.filter(p => p.age > 18);
console.log(adults.map(p => p.name));`,
        solution: `const people = [
  { name: "Ava", age: 18 },
  { name: "Ben", age: 25 },
  { name: "Cy", age: 12 }
];
const adults = people.filter(p => p.age >= 18);
console.log(adults.map(p => p.name));`,
        why: '"18 or older" means [[>=]], not [[>]].',
        tests: [
          { name: '[[adults]] has 2 people', test: `return adults.length === 2;` },
          { name: 'Ava and Ben are included', test: `return adults.map(p => p.name).join() === 'Ava,Ben';` }
        ]
      },
      {
        title: 'The [object Object] total',
        task: '<code>total</code> should be the sum of all prices: <b>15</b>.',
        broken: `const cart = [
  { item: "Pen", price: 2 },
  { item: "Book", price: 8 },
  { item: "Mug", price: 5 }
];
const total = cart.reduce((sum, p) => sum + p.price);
console.log(total);`,
        solution: `const cart = [
  { item: "Pen", price: 2 },
  { item: "Book", price: 8 },
  { item: "Mug", price: 5 }
];
const total = cart.reduce((sum, p) => sum + p.price, 0);
console.log(total);`,
        why: 'Without a starting value, reduce starts with the first OBJECT as the sum. Pass [[0]] as the second argument.',
        tests: [
          { name: '[[total]] is 15', test: `return total === 15;` }
        ]
      },
      {
        title: 'Dune by undefined',
        task: 'This should print <b>Dune by Frank Herbert</b>.',
        broken: `const book = { title: "Dune", author: "Frank Herbert", year: 1965 };
const { title, writer } = book;
console.log(\`\${title} by \${writer}\`);`,
        solution: `const book = { title: "Dune", author: "Frank Herbert", year: 1965 };
const { title, author } = book;
console.log(\`\${title} by \${author}\`);`,
        why: 'Object destructuring uses the real property names — the key is [[author]].',
        tests: [
          { name: 'Prints "Dune by Frank Herbert"', test: `return __logs[0] === 'Dune by Frank Herbert';` }
        ]
      },
      {
        title: 'The copy that isn\'t',
        task: 'Make <code>copy</code> a <b>real copy</b> of <code>original</code>. After the push, <code>original</code> must still be <b>[1, 2, 3]</b> and <code>copy</code> should be <b>[1, 2, 3, 4]</b>.',
        broken: `const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original, copy);`,
        solution: `const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original, copy);`,
        why: 'Assigning an array just points to the same one. Spread [[[...original]]] makes a new array.',
        tests: [
          { name: '[[original]] is still [1, 2, 3]', test: `return JSON.stringify(original) === '[1,2,3]';` },
          { name: '[[copy]] is [1, 2, 3, 4]', test: `return JSON.stringify(copy) === '[1,2,3,4]';` }
        ]
      },
      {
        title: 'The name that never arrives',
        task: '<code>getName()</code> should resolve to the user\'s name, <b>"Ava"</b>. Don\'t change <code>fetchUser</code> — it pretends to load a user from a server.',
        broken: `// Pretend server call — don't change this
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Ava", id: 7 }), 100);
  });
}

async function getName() {
  const user = fetchUser();
  return user.name;
}

getName().then(name => console.log("Name:", name));`,
        solution: `// Pretend server call — don't change this
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Ava", id: 7 }), 100);
  });
}

async function getName() {
  const user = await fetchUser();
  return user.name;
}

getName().then(name => console.log("Name:", name));`,
        why: 'Without [[await]], [[user]] is a Promise, so [[user.name]] is undefined.',
        tests: [
          { name: '[[await getName()]] is "Ava"', test: `return (await getName()) === 'Ava';` }
        ]
      },
      {
        title: 'Too soon!',
        task: 'The message <b>Done!</b> should appear after <b>300 milliseconds</b> — not immediately.',
        broken: `function sayDone() {
  console.log("Done!");
}
setTimeout(sayDone(), 300);`,
        solution: `function sayDone() {
  console.log("Done!");
}
setTimeout(sayDone, 300);`,
        why: '[[sayDone()]] calls the function right away. Pass the function itself: [[setTimeout(sayDone, 300)]].',
        tests: [
          { name: 'Nothing is printed immediately', test: `return !__logs.includes('Done!');` },
          { name: '"Done!" is printed after the delay', test: `await new Promise(r => setTimeout(r, 450)); return __logs.includes('Done!');` }
        ]
      },
      {
        title: 'The broken counter class',
        task: 'A new <code>Counter</code> should start at 0, and <code>increment()</code> adds 1 to its <code>count</code>. Creating one currently crashes.',
        broken: `class Counter {
  constructor() {
    count = 0;
  }
  increment() {
    this.count++;
  }
}

const c = new Counter();
c.increment();
console.log(c.count);`,
        solution: `class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const c = new Counter();
c.increment();
console.log(c.count);`,
        why: 'Properties of the object must be set on [[this]]: [[this.count = 0]].',
        tests: [
          { name: 'A new Counter starts at 0', test: `return new Counter().count === 0;` },
          { name: 'Two increments give 2', test: `const k = new Counter(); k.increment(); k.increment(); return k.count === 2;` }
        ]
      },
      {
        title: 'The always-null parser',
        task: '<code>safeJSON(text)</code> should return the parsed data for valid JSON, and <b>null</b> (instead of crashing) for invalid JSON. Right now it always returns null.',
        broken: `function safeJSON(text) {
  try {
    return JSON.parse(text);
  } finally {
    return null;
  }
}

console.log(safeJSON('{"score": 10}'));
console.log(safeJSON("not json"));`,
        solution: `function safeJSON(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    return null;
  }
}

console.log(safeJSON('{"score": 10}'));
console.log(safeJSON("not json"));`,
        why: '[[finally]] ALWAYS runs, and its return overrides the try. Use [[catch]] to handle only the error case.',
        tests: [
          { name: 'Valid JSON is parsed', test: `const r = safeJSON('{"score": 10}'); return !!r && r.score === 10;` },
          { name: 'Invalid JSON returns null', test: `return safeJSON('not json') === null;` }
        ]
      },
      {
        title: 'The to-do that adds nothing',
        lang: 'html',
        task: 'Clicking <b>Add</b> should add a list item with the <b>typed text</b>, then <b>clear the input box</b>. There are <b>two</b> bugs.',
        broken: `<input id="task" placeholder="New task">
<button id="add">Add</button>
<ul id="list"></ul>

<script>
  const input = document.getElementById("task");
  const list = document.getElementById("list");

  document.getElementById("add").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.textContent;
    list.append(li);
    input.value === "";
  });
</script>`,
        solution: `<input id="task" placeholder="New task">
<button id="add">Add</button>
<ul id="list"></ul>

<script>
  const input = document.getElementById("task");
  const list = document.getElementById("list");

  document.getElementById("add").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    input.value = "";
  });
</script>`,
        why: 'An input\'s text is in [[.value]] (not [[.textContent]]), and [[===]] compares — use [[=]] to assign.',
        tests: [
          { name: 'Adding "Gym" creates one list item', test: `const i = document.getElementById('task'); i.value = 'Gym'; document.getElementById('add').click(); return document.querySelectorAll('#list li').length === 1;` },
          { name: 'The item says "Gym"', test: `const li = document.querySelector('#list li'); return !!li && li.textContent === 'Gym';` },
          { name: 'The input is cleared', test: `return document.getElementById('task').value === '';` }
        ]
      }
    ]
  }
};
