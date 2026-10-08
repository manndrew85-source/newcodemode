// Intermediate course — JavaScript fundamentals
window.COURSES = window.COURSES || {};
COURSES.intermediate = {
  id: 'intermediate',
  level: 'Intermediate',
  title: 'JavaScript Fundamentals',
  tagline: 'Think like a programmer: variables, logic, loops and functions.',
  description: '<b>JavaScript</b> is the programming language of the web — it runs in every browser on Earth. In this course you\'ll learn the core ideas used in <i>every</i> programming language, then use them to make web pages interactive.',
  lang: 'js',
  certTitle: 'JavaScript Fundamentals',
  skills: 'JavaScript variables, data types, conditionals, loops, arrays, functions, objects and DOM events',
  resume: 'CodePath — JavaScript Fundamentals Certificate (Passed final test)\nSkills: JavaScript (ES6), control flow, arrays, functions, objects, DOM manipulation, event handling',
  units: [
    // ---------------- Unit 1 ----------------
    {
      title: 'Variables, Data Types & Operators',
      intro: 'Store information and do math with it.',
      lessons: [
        {
          title: 'Hello, JavaScript! Variables',
          body: `
<p>A program is a list of instructions the computer follows <b>top to bottom</b>. Your first instruction: [[console.log()]], which prints a message to the <b>console</b> (the output panel). Developers use it all the time to check what their code is doing.</p>
<p>To remember information, you store it in a <b>variable</b> — a labelled box with a value inside:</p>
<ul>
<li>[[let]] — a variable whose value can <b>change</b> later.</li>
<li>[[const]] — a <b>constant</b>; once set it can't be reassigned. Use [[const]] by default and [[let]] only when you need to change it.</li>
</ul>
<p>The [[=]] sign means "put this value in the box" — it's <b>assignment</b>, not "equals" like in math.</p>
<p>Names are case-sensitive ([[score]] and [[Score]] are different) and usually written in <b>camelCase</b>: [[firstName]], [[totalPrice]].</p>
<div class="callout">📌 Lines starting with [[//]] are <b>comments</b>. JavaScript ignores them — they're notes for humans.</div>`,
          pic: 'variables',
          cap: 'A variable is a named box. [[let age = 16;]] puts 16 in a box labelled [[age]].',
          code: `// console.log prints to the console
console.log("Hello, JavaScript!");

const name = "Sam";
let age = 16;
console.log(name);
console.log(age);

age = 17;            // let can change
console.log("Next year:", age);

// name = "Alex";    // ❌ remove the // to see the error: const can't change`
        },
        {
          title: 'Data types',
          body: `
<p>Every value has a <b>type</b>. The main ones:</p>
<ul>
<li><b>String</b> — text, in quotes: [["hello"]], [['hi']] or [[\`hey\`]].</li>
<li><b>Number</b> — whole or decimal: [[42]], [[3.14]], [[-7]].</li>
<li><b>Boolean</b> — [[true]] or [[false]]. Used for yes/no decisions.</li>
<li>[[undefined]] — a variable that was never given a value.</li>
<li>[[null]] — "intentionally empty".</li>
<li><b>Arrays</b> [[[1, 2, 3]]] and <b>Objects</b> [[{ name: "Sam" }]] — collections (later units).</li>
</ul>
<p>Use [[typeof]] to check a value's type.</p>
<p><b>Template literals</b> use backticks [[\`…\`]] and let you drop variables right into text with [[\${ }]]. They're the easiest way to build strings.</p>`,
          pic: 'dataTypes',
          cap: 'The building blocks of every JavaScript program.',
          code: `const city = "Chicago";
const temp = 72.5;
const isSunny = true;
let plans;

console.log(typeof city);     // string
console.log(typeof temp);     // number
console.log(typeof isSunny);  // boolean
console.log(plans);           // undefined

// Template literal with backticks:
console.log(\`It's \${temp}° in \${city}. Sunny? \${isSunny}\`);

// Strings have useful tools:
console.log(city.length);         // number of characters
console.log(city.toUpperCase());`
        },
        {
          title: 'Operators: doing math',
          body: `
<p>JavaScript can do math with the usual operators: [[+]] [[-]] [[*]] (multiply) [[/]] (divide), plus [[%]] (<b>remainder</b>, also called modulo — great for checking even/odd).</p>
<p>Shortcuts for updating a variable:</p>
<ul>
<li>[[score += 5]] is the same as [[score = score + 5]] (also [[-=]], [[*=]]).</li>
<li>[[count++]] adds 1. [[count--]] subtracts 1.</li>
</ul>
<div class="callout warn">⚠️ <b>Watch out:</b> [[+]] also <b>joins strings</b>. [["5" + 2]] gives [["52"]], not 7! Text from forms is always a string — convert it with [[Number("5")]] first.</div>`,
          pic: 'operators',
          cap: 'Math operators — and the classic string trap.',
          code: `console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 4);   // 2.5
console.log(10 % 3);   // 1  (10 ÷ 3 = 3 remainder 1)

let score = 0;
score += 10;
score++;
console.log("Score:", score);  // 11

console.log("5" + 2);          // "52" 😱 joined as text
console.log(Number("5") + 2);  // 7 ✅`
        }
      ],
      recap: [
        '[[console.log(value)]] prints to the console — your main tool for seeing what code does.',
        '[[const]] for values that never get reassigned, [[let]] for values that change. [[=]] means <b>assign</b>.',
        'Types: <b>string</b> [["text"]], <b>number</b> [[42]], <b>boolean</b> [[true]]/[[false]], [[undefined]], [[null]]. Check with [[typeof]].',
        'Template literals: [[`Hi ${name}`]] put variables inside text.',
        'Math: [[+ - * / %]]. Shortcuts: [[+=]], [[++]]. Careful: [["5" + 2]] is [["52"]] — convert with [[Number()]].'
      ],
      cheat: `const name = "Sam";      // can't reassign
let score = 0;           // can change
score += 5;  score++;
console.log(\`\${name} has \${score} points\`);
typeof "hi"   // "string"
Number("42")  // 42`,
      quiz: [
        { q: 'Which keyword creates a variable that can NOT be reassigned?', options: ['[[let]]', '[[var]]', '[[const]]', '[[fixed]]'], answer: 2, why: '[[const]] values can\'t be reassigned. Use [[let]] when the value needs to change.' },
        { q: 'What does this print?', code: 'let x = 4;\nx += 3;\nconsole.log(x);', options: ['4', '3', '7', '43'], answer: 2, why: '[[x += 3]] means [[x = x + 3]], so 4 + 3 = 7.' },
        { q: 'What is [[typeof true]]?', options: ['"string"', '"boolean"', '"number"', '"true"'], answer: 1, why: '[[true]] and [[false]] are booleans.' },
        { q: 'What does [[console.log("3" + 4)]] print?', options: ['7', '34', 'Error', '"3 + 4"'], answer: 1, why: 'When one side is a string, [[+]] joins text: "3" + 4 → "34".' },
        { q: 'What is [[10 % 4]]?', options: ['2.5', '2', '40', '6'], answer: 1, why: '[[%]] gives the remainder: 10 ÷ 4 = 2 remainder 2.' }
      ]
    },
    // ---------------- Unit 2 ----------------
    {
      title: 'Making Decisions',
      intro: 'if/else, comparisons and logic — teaching code to choose.',
      lessons: [
        {
          title: 'if and else',
          body: `
<p>Programs need to make decisions: <i>if</i> the password is right, log in; <i>otherwise</i>, show an error. That's an [[if]] statement:</p>
{{{
if (condition) {
  // runs when condition is true
} else {
  // runs when condition is false
}
}}}
<p>The <b>condition</b> in the parentheses is something that is [[true]] or [[false]]. Only <b>one</b> of the two blocks runs.</p>
<p>The [[else]] part is optional. The code inside [[{ }]] is called a <b>block</b> — indent it so it's easy to read.</p>`,
          pic: 'ifElse',
          cap: 'An [[if]] statement is a fork in the road. The condition picks the path.',
          code: `const age = 16;

if (age >= 18) {
  console.log("You can vote! 🗳️");
} else {
  console.log("Not yet — " + (18 - age) + " years to go.");
}

// Change age to 21 and run again.`
        },
        {
          title: 'Comparison operators',
          body: `
<p>Conditions usually <b>compare</b> two values. Every comparison gives back a boolean:</p>
<ul>
<li>[[===]] equal, [[!==]] not equal</li>
<li>[[>]] greater than, [[<]] less than</li>
<li>[[>=]] greater or equal, [[<=]] less or equal</li>
</ul>
<div class="callout warn">⚠️ <b>Three different "equals":</b><br>
[[=]] <b>assigns</b> a value (puts it in a box).<br>
[[===]] <b>compares</b> value AND type — always use this one.<br>
[[==]] compares loosely and converts types ([["5" == 5]] is true!). Avoid it.</div>
<p>Writing [[if (x = 5)]] instead of [[if (x === 5)]] is a very common bug — it <i>assigns</i> 5 instead of checking.</p>`,
          pic: 'comparisons',
          cap: 'Comparisons always answer with [[true]] or [[false]].',
          code: `console.log(5 === 5);     // true
console.log(5 === "5");   // false (number vs string)
console.log(5 == "5");    // true  (loose — avoid!)
console.log(10 !== 3);    // true
console.log(7 < 2);       // false
console.log("apple" === "Apple"); // false — case matters

const password = "hunter2";
if (password === "hunter2") {
  console.log("Access granted");
}`
        },
        {
          title: 'else if, AND, OR, NOT',
          body: `
<p>Need more than two paths? Chain them with [[else if]]. JavaScript checks each condition in order and runs the <b>first</b> one that's true:</p>
{{{
if (score >= 90) { grade = "A"; }
else if (score >= 80) { grade = "B"; }
else { grade = "C or below"; }
}}}
<p>Combine conditions with <b>logical operators</b>:</p>
<ul>
<li>[[&&]] (AND) — true only if <b>both</b> sides are true.</li>
<li>[[||]] (OR) — true if <b>at least one</b> side is true.</li>
<li>[[!]] (NOT) — flips true ↔ false.</li>
</ul>`,
          pic: 'logic',
          cap: 'AND needs both, OR needs one, NOT flips.',
          code: `const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "Keep practicing";
}
console.log("Grade:", grade);

const hasTicket = true;
const age = 15;
console.log("Can enter:", hasTicket && age >= 13);   // both true
console.log("Free entry:", age < 5 || age > 65);    // either one
console.log("Not raining:", !false);`
        }
      ],
      recap: [
        '[[if (condition) { } else { }]] runs ONE block depending on whether the condition is true.',
        'Comparisons: [[===]] [[!==]] [[>]] [[<]] [[>=]] [[<=]]. They return [[true]] or [[false]].',
        '[[=]] assigns, [[===]] compares. Avoid [[==]] (it converts types).',
        '[[else if]] adds more paths; the first true condition wins.',
        'Logic: [[&&]] = AND (both), [[||]] = OR (either), [[!]] = NOT (flip).'
      ],
      cheat: `if (temp > 30) {
  console.log("Hot");
} else if (temp > 15) {
  console.log("Nice");
} else {
  console.log("Cold");
}
// && and   || or   ! not   === equal   !== not equal`,
      quiz: [
        { q: 'What does this print?', code: 'const n = 7;\nif (n > 10) {\n  console.log("big");\n} else {\n  console.log("small");\n}', options: ['big', 'small', 'big small', 'nothing'], answer: 1, why: '7 > 10 is false, so the else block runs.' },
        { q: 'Which operator checks if two values are equal (value AND type)?', options: ['[[=]]', '[[==]]', '[[===]]', '[[=>]]'], answer: 2, why: '[[===]] is strict equality. [[=]] assigns.' },
        { q: 'What is [[true && false]]?', options: ['true', 'false', 'undefined', 'Error'], answer: 1, why: 'AND needs both sides true.' },
        { q: 'What is [[false || true]]?', options: ['true', 'false', 'undefined', 'Error'], answer: 0, why: 'OR needs at least one side true.' },
        { q: 'With [[score = 95]], which grade is printed?', code: 'if (score >= 80) { console.log("B"); }\nelse if (score >= 90) { console.log("A"); }', options: ['A', 'B', 'A and B', 'Nothing'], answer: 1, why: 'The first true condition wins. 95 >= 80 is true, so "B" prints and the rest is skipped. (Order your checks from highest to lowest!)' }
      ]
    },
    // ---------------- Unit 3 ----------------
    {
      title: 'Loops & Arrays',
      intro: 'Repeat work automatically and store lists of data.',
      lessons: [
        {
          title: 'for loops',
          body: `
<p>Computers are great at repeating things. A [[for]] loop runs a block of code many times:</p>
{{{
for (let i = 0; i < 5; i++) {
  console.log(i);
}
}}}
<p>The three parts inside the parentheses:</p>
<ol>
<li><b>Start:</b> [[let i = 0]] — create a counter.</li>
<li><b>Condition:</b> [[i < 5]] — keep going while this is true.</li>
<li><b>Step:</b> [[i++]] — after each round, add 1.</li>
</ol>
<p>A [[while]] loop is simpler — it repeats while a condition is true. Just make sure something changes, or it never stops (an <b>infinite loop</b>). Don't worry: this app stops runaway loops for you.</p>`,
          pic: 'loopCycle',
          cap: 'Check → run body → step → check again… until the condition is false.',
          code: `for (let i = 1; i <= 5; i++) {
  console.log("Lap", i);
}

// Count down with a while loop
let n = 3;
while (n > 0) {
  console.log(n + "...");
  n--;
}
console.log("Liftoff! 🚀");`
        },
        {
          title: 'Arrays',
          body: `
<p>An <b>array</b> is an ordered list of values, in square brackets:</p>
{{{
const fruits = ["apple", "banana", "cherry"];
}}}
<p>Each item has a numbered position called an <b>index</b>. <b>Indexes start at 0</b>, so the first item is [[fruits[0]]] and the last is [[fruits[fruits.length - 1]]].</p>
<p>Handy array tools:</p>
<ul>
<li>[[.length]] — how many items.</li>
<li>[[.push(x)]] — add to the end. [[.pop()]] — remove from the end.</li>
<li>[[.includes(x)]] — is it in the array? (true/false)</li>
<li>[[.indexOf(x)]] — where is it? ([[-1]] if not found)</li>
<li>[[.join(", ")]] — turn it into one string.</li>
</ul>`,
          pic: 'arrayIndex',
          cap: 'Index 0 is the FIRST item. Asking for an index that doesn\'t exist gives [[undefined]].',
          code: `const fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits[0]);              // apple
console.log(fruits[2]);              // cherry
console.log(fruits.length);          // 4
console.log(fruits[fruits.length - 1]); // last item
console.log(fruits[10]);             // undefined

fruits.push("elderberry");
console.log(fruits.join(", "));
console.log(fruits.includes("banana")); // true
fruits[1] = "blueberry";             // change an item
console.log(fruits);`
        },
        {
          title: 'Looping over arrays',
          body: `
<p>Loops and arrays are best friends. To do something with <b>every item</b>, use a [[for...of]] loop — it hands you each item in turn:</p>
{{{
for (const fruit of fruits) {
  console.log(fruit);
}
}}}
<p>If you also need the index, use a classic [[for]] loop from [[0]] to [[length - 1]].</p>
<p>A very common pattern is the <b>accumulator</b>: start a variable at 0 (or empty), then add to it inside the loop. That's how you total a shopping cart, count matches, or find the biggest number.</p>`,
          pic: 'forOf',
          cap: '[[for...of]] gives you each item, one at a time, in order.',
          code: `const prices = [4.99, 12.5, 3.25, 8];

// Accumulator pattern: total
let total = 0;
for (const price of prices) {
  total += price;
}
console.log("Total: $" + total.toFixed(2));

// Find the biggest
let max = prices[0];
for (const p of prices) {
  if (p > max) max = p;
}
console.log("Most expensive:", max);

// Need the index too? Classic for loop:
const names = ["Ava", "Ben", "Cy"];
for (let i = 0; i < names.length; i++) {
  console.log(\`\${i + 1}. \${names[i]}\`);
}`
        }
      ],
      recap: [
        '[[for (let i = 0; i < 5; i++) { }]] = start; condition; step. It repeats while the condition is true.',
        '[[while (condition) { }]] repeats too — make sure something changes so it ends.',
        'Arrays hold ordered lists: [[["a", "b", "c"]]]. <b>Indexes start at 0</b>; the last index is [[length - 1]].',
        'Array tools: [[.length]], [[.push()]], [[.pop()]], [[.includes()]], [[.indexOf()]], [[.join()]].',
        '[[for (const item of array) { }]] visits every item. Use an <b>accumulator</b> to total or count.'
      ],
      cheat: `const list = ["a", "b", "c"];
list[0]          // "a"
list.length      // 3
list.push("d");
for (const item of list) { console.log(item); }
for (let i = 0; i < list.length; i++) { console.log(i, list[i]); }`,
      quiz: [
        { q: 'What is the index of the FIRST item in an array?', options: ['1', '0', '-1', 'first'], answer: 1, why: 'Array indexes start at 0.' },
        { q: 'How many times does this print?', code: 'for (let i = 0; i < 3; i++) {\n  console.log("hi");\n}', options: ['2', '3', '4', 'Forever'], answer: 1, why: 'i is 0, 1, 2 → three times. When i becomes 3, [[3 < 3]] is false and it stops.' },
        { q: 'What does this print?', code: 'const pets = ["cat", "dog", "fish"];\nconsole.log(pets[pets.length - 1]);', options: ['cat', 'dog', 'fish', 'undefined'], answer: 2, why: 'length is 3, so length - 1 = 2, which is "fish" — the last item.' },
        { q: 'Which method adds an item to the END of an array?', options: ['[[.pop()]]', '[[.add()]]', '[[.push()]]', '[[.end()]]'], answer: 2, why: '[[.push()]] adds to the end; [[.pop()]] removes from the end.' },
        { q: 'What is [[total]] at the end?', code: 'let total = 0;\nfor (const n of [2, 4, 6]) {\n  total += n;\n}', options: ['6', '12', '246', '0'], answer: 1, why: 'The accumulator adds each item: 0 + 2 + 4 + 6 = 12.' }
      ]
    },
    // ---------------- Unit 4 ----------------
    {
      title: 'Functions',
      intro: 'Package code into reusable machines.',
      lessons: [
        {
          title: 'Creating and calling functions',
          body: `
<p>A <b>function</b> is a named, reusable block of code. You <b>define</b> it once, then <b>call</b> it whenever you need it:</p>
{{{
function sayHi(name) {
  console.log("Hi, " + name + "!");
}

sayHi("Ava");   // call it
sayHi("Ben");   // reuse it!
}}}
<ul>
<li>[[name]] in the definition is a <b>parameter</b> — a placeholder variable.</li>
<li>[["Ava"]] in the call is an <b>argument</b> — the real value passed in.</li>
<li>Functions can take several parameters, separated by commas.</li>
</ul>
<p>Functions follow the <b>DRY</b> rule — <i>Don't Repeat Yourself</i>. If you copy and paste code, it probably wants to be a function.</p>`,
          pic: 'functionMachine',
          cap: 'Inputs go in, the function does its job, an output comes out.',
          code: `function sayHi(name) {
  console.log("Hi, " + name + "! 👋");
}

sayHi("Ava");
sayHi("Ben");

function describeRoom(width, length) {
  const area = width * length;
  console.log(\`A \${width}x\${length} room has \${area} sq ft\`);
}

describeRoom(10, 12);
describeRoom(8, 8);`
        },
        {
          title: 'return values',
          body: `
<p>Most useful functions <b>give back</b> a result with [[return]]. You can then store the result, print it, or use it in another calculation:</p>
{{{
function add(a, b) {
  return a + b;
}
const total = add(2, 3);   // total is 5
}}}
<p>[[return]] also <b>stops</b> the function immediately — any code after it in that function won't run.</p>
<div class="callout warn">⚠️ [[console.log]] is not the same as [[return]]! [[console.log]] only shows a value to <i>you</i>. If a function doesn't [[return]] anything, calling it gives [[undefined]].</div>`,
          pic: 'returnVsLog',
          cap: '[[return]] hands a value back to your code. [[console.log]] just displays it.',
          code: `function add(a, b) {
  return a + b;
}
const total = add(2, 3);
console.log(total);                 // 5
console.log(add(10, add(1, 1)));    // 12 — results can feed other calls

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4), isEven(7));

function noReturn(a, b) {
  a + b;  // calculated... then thrown away
}
console.log(noReturn(2, 3));        // undefined!`
        },
        {
          title: 'Scope and arrow functions',
          body: `
<p><b>Scope</b> decides where a variable can be seen. Variables made with [[let]] or [[const]] only exist inside the [[{ }]] block where they were created:</p>
<ul>
<li>Code <b>inside</b> a block can see variables from outside it.</li>
<li>Code <b>outside</b> a block can't see variables created inside it.</li>
</ul>
<p>So if you need a value after a loop or [[if]], create the variable <b>before</b> the block.</p>
<p><b>Arrow functions</b> are a shorter way to write functions, used everywhere in modern JavaScript:</p>
{{{
const double = (n) => {
  return n * 2;
};
// one-line version: the result is returned automatically
const triple = n => n * 3;
}}}`,
          pic: 'scope',
          cap: 'Scopes are nested boxes: you can look out, but not in.',
          code: `const greeting = "Hello";        // global — visible everywhere

function greet(name) {
  const message = \`\${greeting}, \${name}\`;  // only inside greet
  return message;
}
console.log(greet("Cy"));
// console.log(message);   // ❌ un-comment: ReferenceError

// Arrow functions
const double = n => n * 2;
const area = (w, h) => w * h;
console.log(double(21));
console.log(area(3, 4));`
        }
      ],
      recap: [
        'Define with [[function name(params) { }]], call with [[name(args)]]. Parameters are placeholders; arguments are real values.',
        '[[return]] sends a value back AND ends the function. No return → the call gives [[undefined]].',
        '[[console.log]] shows a value to you; [[return]] gives it to your code.',
        '[[let]]/[[const]] live only inside their [[{ }]] block (scope). Inner code can see outer variables, not the reverse.',
        'Arrow functions: [[const double = n => n * 2;]]'
      ],
      cheat: `function add(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;   // same thing
const result = add(2, 3);      // 5`,
      quiz: [
        { q: 'What does this print?', code: 'function square(n) {\n  return n * n;\n}\nconsole.log(square(4));', options: ['4', '8', '16', 'undefined'], answer: 2, why: 'square(4) returns 4 × 4 = 16.' },
        { q: 'In [[function greet(name) { … }]] and [[greet("Zoe")]], what is [["Zoe"]]?', options: ['A parameter', 'An argument', 'A return value', 'A scope'], answer: 1, why: 'The value you pass in when calling is the argument. [[name]] is the parameter.' },
        { q: 'What does this print?', code: 'function add(a, b) {\n  a + b;\n}\nconsole.log(add(1, 2));', options: ['3', '"1 + 2"', 'undefined', 'Error'], answer: 2, why: 'There\'s no [[return]], so the function gives back [[undefined]].' },
        { q: 'What happens here?', code: 'if (true) {\n  let secret = 42;\n}\nconsole.log(secret);', options: ['Prints 42', 'Prints undefined', 'ReferenceError: secret is not defined', 'Prints true'], answer: 2, why: '[[secret]] only exists inside the [[if]] block, so outside it doesn\'t exist.' },
        { q: 'Which arrow function returns a number plus one?', options: ['[[const inc = n => n + 1;]]', '[[const inc = n -> n + 1;]]', '[[function => n + 1]]', '[[const inc(n) = n + 1;]]'], answer: 0, why: 'Arrow functions use [[=>]]. A one-line body is returned automatically.' }
      ]
    },
    // ---------------- Unit 5 ----------------
    {
      title: 'Objects & the DOM',
      intro: 'Group related data, then use JavaScript to change web pages.',
      lessons: [
        {
          title: 'Objects',
          body: `
<p>An <b>object</b> groups related information using <b>key: value</b> pairs (also called properties):</p>
{{{
const pet = {
  name: "Rex",
  type: "dog",
  age: 3
};
}}}
<ul>
<li>Read a property with a dot: [[pet.name]] → [["Rex"]].</li>
<li>Or with brackets and a string: [[pet["age"]]] — useful when the key is in a variable.</li>
<li>Change or add properties the same way: [[pet.age = 4;]] [[pet.color = "brown";]]</li>
<li>Objects can hold arrays, other objects, and even functions (called <b>methods</b>).</li>
</ul>
<p>Lists of objects are how real apps store data — users, products, messages, to-dos.</p>`,
          pic: 'objectKV',
          cap: 'Each key points to a value. Use the key to look the value up.',
          code: `const pet = {
  name: "Rex",
  type: "dog",
  age: 3,
  tricks: ["sit", "roll over"],
  speak() {
    return this.name + " says woof!";
  }
};

console.log(pet.name);
console.log(pet["type"]);
pet.age = 4;
pet.color = "brown";
console.log(pet.tricks[1]);
console.log(pet.speak());
console.log(pet);

// An array of objects — like a real database
const users = [{ name: "Ava", score: 90 }, { name: "Ben", score: 75 }];
for (const u of users) console.log(\`\${u.name}: \${u.score}\`);`
        },
        {
          title: 'The DOM: selecting and changing the page',
          lang: 'html',
          body: `
<p>When the browser loads your HTML, it builds a tree of objects called the <b>DOM</b> (Document Object Model). JavaScript can read and change that tree — and the page updates instantly.</p>
<p>Step 1 — <b>select</b> an element:</p>
<ul>
<li>[[document.getElementById("title")]] — by id (no [[#]]).</li>
<li>[[document.querySelector(".card")]] — the first match for any CSS selector.</li>
<li>[[document.querySelectorAll("li")]] — all matches.</li>
</ul>
<p>Step 2 — <b>change</b> it:</p>
<ul>
<li>[[el.textContent = "New text"]] — change the text.</li>
<li>[[el.style.color = "red"]] — change a style (CSS names become camelCase: [[backgroundColor]]).</li>
<li>[[el.classList.add("active")]] — add a class.</li>
<li>[[document.createElement("li")]] + [[parent.append(child)]] — add new elements.</li>
</ul>
<p>JavaScript goes inside a [[<script>]] element, placed at the end of the [[<body>]] so the HTML exists before the script runs.</p>`,
          pic: 'domTree',
          cap: 'The DOM is a family tree. JavaScript climbs it to find and change elements.',
          code: `<h1 id="title">Original title</h1>
<ul id="list"></ul>

<script>
  const title = document.getElementById("title");
  title.textContent = "Changed by JavaScript! ✨";
  title.style.color = "#4f46e5";

  const list = document.getElementById("list");
  const foods = ["Pizza", "Tacos", "Sushi"];
  for (const food of foods) {
    const li = document.createElement("li");
    li.textContent = food;
    list.append(li);
  }
  console.log("Added", foods.length, "items");
</script>`
        },
        {
          title: 'Events: reacting to clicks',
          lang: 'html',
          body: `
<p>An <b>event</b> is something that happens on the page: a click, a key press, typing in a box, submitting a form. You can tell JavaScript to run a function when it happens:</p>
{{{
button.addEventListener("click", () => {
  // runs every time the button is clicked
});
}}}
<p>Common events: [["click"]], [["input"]] (typing in a field), [["submit"]] (form sent), [["keydown"]].</p>
<p>To read what someone typed, use the input's [[.value]] — remember it's always a <b>string</b>!</p>
<p>This is where everything comes together: <b>variables</b> hold state, <b>functions</b> run on <b>events</b>, <b>if</b> statements decide what to do, and the <b>DOM</b> shows the result. Try the counter and the greeting below!</p>`,
          pic: 'clickFlow',
          cap: 'User does something → your listener function runs → you update the page.',
          code: `<button id="btn">Clicked 0 times</button>
<p>
  <input id="nameBox" placeholder="Type your name">
</p>
<p id="hello">Hello, stranger!</p>

<script>
  let count = 0;
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    count++;
    btn.textContent = \`Clicked \${count} times\`;
    if (count === 5) console.log("High five! ✋");
  });

  const box = document.getElementById("nameBox");
  const hello = document.getElementById("hello");
  box.addEventListener("input", () => {
    hello.textContent = "Hello, " + (box.value || "stranger") + "!";
  });
</script>`
        }
      ],
      recap: [
        'Objects store <b>key: value</b> pairs: [[{ name: "Rex", age: 3 }]]. Read with [[obj.key]] or [[obj["key"]]].',
        'Arrays of objects are how apps store lists of things (users, products, to-dos).',
        'The <b>DOM</b> is the page as a tree of objects. Select with [[getElementById]] / [[querySelector]].',
        'Change elements with [[.textContent]], [[.style]], [[.classList]]; create with [[createElement]] + [[append]].',
        'Run code on events: [[el.addEventListener("click", () => { … })]]. Read inputs with [[.value]] (a string).'
      ],
      cheat: `const el = document.querySelector("#title");
el.textContent = "Hi";
el.style.color = "red";
el.classList.add("active");
el.addEventListener("click", () => {
  console.log("clicked!");
});`,
      quiz: [
        { q: 'Given [[const car = { make: "Ford", year: 2020 };]], how do you get the year?', options: ['[[car[year]]]', '[[car.year]]', '[[car->year]]', '[[year.car]]'], answer: 1, why: 'Dot notation: [[car.year]]. (Bracket notation needs quotes: [[car["year"]]].)' },
        { q: 'What does the DOM let JavaScript do?', options: ['Store data on a server', 'Read and change the HTML page', 'Install apps', 'Write CSS files'], answer: 1, why: 'The DOM is the page as objects JavaScript can read and change.' },
        { q: 'Which selects the element [[<p id="msg">]]?', options: ['[[document.getElementById("#msg")]]', '[[document.getElementById("msg")]]', '[[document.querySelector("msg")]]', '[[document.id("msg")]]'], answer: 1, why: '[[getElementById]] takes the id WITHOUT a [[#]]. ([[querySelector("#msg")]] would also work.)' },
        { q: 'Which event fires when a button is pressed?', options: ['[["press"]]', '[["onclick"]]', '[["click"]]', '[["tap"]]'], answer: 2, why: 'With [[addEventListener]], the event name is [["click"]] (no "on").' },
        { q: 'What type is the [[.value]] of a text input?', options: ['Number', 'String', 'Boolean', 'It depends on what is typed'], answer: 1, why: 'Input values are always strings — even "42". Use [[Number()]] to do math.' }
      ]
    }
  ],
  // ---------------- Final test ----------------
  test: {
    mc: [
      { q: 'What does this print?', code: 'let a = 10;\na = a - 4;\nconsole.log(a);', options: ['10', '4', '6', '14'], answer: 2, why: '10 − 4 = 6, stored back into a.' },
      { q: 'Which is a boolean?', options: ['[["true"]]', '[[1]]', '[[false]]', '[[null]]'], answer: 2, why: '[[false]] (no quotes) is a boolean. [["true"]] in quotes is a string.' },
      { q: 'What does [[5 === "5"]] give?', options: ['true', 'false', 'Error', '"55"'], answer: 1, why: 'Strict equality compares types too: number vs string → false.' },
      { q: 'What does this print?', code: 'const temp = 25;\nif (temp > 30) console.log("hot");\nelse if (temp > 20) console.log("warm");\nelse console.log("cold");', options: ['hot', 'warm', 'cold', 'warm cold'], answer: 1, why: '25 > 30 is false, 25 > 20 is true → "warm". The rest is skipped.' },
      { q: 'What are the numbers printed?', code: 'for (let i = 2; i < 8; i += 2) {\n  console.log(i);\n}', options: ['2 4 6', '2 4 6 8', '0 2 4 6', '2 3 4 5 6 7'], answer: 0, why: 'i starts at 2 and goes up by 2 while less than 8: 2, 4, 6.' },
      { q: 'Given [[const nums = [3, 6, 9];]], what is [[nums[1]]]?', options: ['3', '6', '9', 'undefined'], answer: 1, why: 'Index 1 is the second item: 6.' },
      { q: 'What is the main purpose of [[return]]?', options: ['Print a value', 'Send a value back from a function and stop it', 'Restart the function', 'Create a variable'], answer: 1, why: '[[return]] hands a result back to the caller and ends the function.' },
      { q: 'What does [[const sq = n => n * n; sq(5)]] give?', options: ['10', '25', '55', 'undefined'], answer: 1, why: 'A one-line arrow function returns its expression: 5 × 5 = 25.' },
      { q: 'Which line changes the text of [[<h1 id="t">]]?', options: ['[[document.getElementById("t").text = "Hi";]]', '[[document.getElementById("t").textContent = "Hi";]]', '[[h1.t = "Hi";]]', '[[document.t.content("Hi");]]'], answer: 1, why: '[[.textContent]] sets an element\'s text.' },
      { q: 'What is [[!(5 > 3)]]?', options: ['true', 'false', '5', 'Error'], answer: 1, why: '5 > 3 is true, and [[!]] flips it to false.' }
    ],
    fix: [
      {
        title: 'The score that won\'t change',
        task: 'This should print <b>10</b>. Instead it crashes with an error. Fix it so the score can be updated.',
        broken: `const score = 0;
score = score + 10;
console.log(score);`,
        solution: `let score = 0;
score = score + 10;
console.log(score);`,
        why: '[[const]] can\'t be reassigned — use [[let]] for values that change.',
        tests: [
          { name: 'Prints 10', test: `return __logs[0] === '10';` },
          { name: 'No errors', test: `return __errors.length === 0;` }
        ]
      },
      {
        title: 'Bad math',
        task: 'The total of <code>a</code> and <code>b</code> should print <b>8</b>, but it prints 53. Fix it (keep the variables).',
        broken: `let a = "5";
let b = 3;
console.log(a + b);`,
        solution: `let a = 5;
let b = 3;
console.log(a + b);`,
        why: '[["5"]] is a string, so [[+]] joined the text. Use the number [[5]] (or [[Number(a)]]).',
        tests: [
          { name: 'Prints 8', test: `return __logs[0] === '8';` }
        ]
      },
      {
        title: 'Everyone can vote?',
        task: '<code>canVote(age)</code> should return <b>true</b> if age is 18 or more, otherwise <b>false</b>. Right now it says yes to everyone.',
        broken: `function canVote(age) {
  if (age = 18) {
    return true;
  }
  return false;
}
console.log(canVote(12));`,
        solution: `function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
console.log(canVote(12));`,
        why: '[[=]] assigns 18 (which is "truthy"), so the condition was always true. Compare with [[>=]].',
        tests: [
          { name: '[[canVote(20)]] is true', test: `return canVote(20) === true;` },
          { name: '[[canVote(18)]] is true', test: `return canVote(18) === true;` },
          { name: '[[canVote(12)]] is false', test: `return canVote(12) === false;` }
        ]
      },
      {
        title: 'Off by one',
        task: 'This loop should print the numbers <b>1, 2, 3, 4, 5</b> — but 5 is missing.',
        broken: `for (let i = 1; i < 5; i++) {
  console.log(i);
}`,
        solution: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
        why: '[[i < 5]] stops at 4. Use [[i <= 5]] to include 5.',
        tests: [
          { name: 'Prints 1 to 5, in order', test: `return __logs.join(',') === '1,2,3,4,5';` }
        ]
      },
      {
        title: 'The missing color',
        task: 'This should print the <b>last</b> color, <b>blue</b>. It prints <code>undefined</code>.',
        broken: `const colors = ["red", "green", "blue"];
console.log(colors[3]);`,
        solution: `const colors = ["red", "green", "blue"];
console.log(colors[colors.length - 1]);`,
        why: 'Indexes start at 0, so the last of 3 items is index 2 ([[length - 1]]).',
        tests: [
          { name: 'Prints "blue"', test: `return __logs[0] === 'blue';` }
        ]
      },
      {
        title: 'The function that forgets',
        task: '<code>double(n)</code> should <b>return</b> n times 2. Right now <code>double(4)</code> gives undefined.',
        broken: `function double(n) {
  n * 2;
}
console.log(double(4));`,
        solution: `function double(n) {
  return n * 2;
}
console.log(double(4));`,
        why: 'Without [[return]] the result is calculated and thrown away.',
        tests: [
          { name: '[[double(4)]] returns 8', test: `return double(4) === 8;` },
          { name: '[[double(-3)]] returns -6', test: `return double(-3) === -6;` }
        ]
      },
      {
        title: 'Who is Greet?',
        task: 'This should print <b>Hello, Sam!</b> but it crashes. Read the error message carefully.',
        broken: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(Greet("Sam"));`,
        solution: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Sam"));`,
        why: 'JavaScript is case-sensitive: [[greet]] and [[Greet]] are different names.',
        tests: [
          { name: 'Prints "Hello, Sam!"', test: `return __logs[0] === 'Hello, Sam!';` },
          { name: '[[greet("Lee")]] works', test: `return greet('Lee') === 'Hello, Lee!';` }
        ]
      },
      {
        title: 'The lost total',
        task: '<code>sumPrices(prices)</code> should return the total of all prices (and <b>0</b> for an empty list). It crashes with a ReferenceError.',
        broken: `function sumPrices(prices) {
  for (const p of prices) {
    let total = 0;
    total += p;
  }
  return total;
}
console.log(sumPrices([1, 2, 3]));`,
        solution: `function sumPrices(prices) {
  let total = 0;
  for (const p of prices) {
    total += p;
  }
  return total;
}
console.log(sumPrices([1, 2, 3]));`,
        why: '[[total]] was created inside the loop, so it reset every time and didn\'t exist outside. Create it before the loop (scope!).',
        tests: [
          { name: '[[sumPrices([1, 2, 3])]] is 6', test: `return sumPrices([1, 2, 3]) === 6;` },
          { name: '[[sumPrices([10, 5])]] is 15', test: `return sumPrices([10, 5]) === 15;` },
          { name: '[[sumPrices([])]] is 0', test: `return sumPrices([]) === 0;` }
        ]
      },
      {
        title: 'Rex is a… undefined?',
        task: '<code>describe(pet)</code> should return <b>"Rex is a dog"</b> for the pet below — and work for any pet with <code>name</code> and <code>type</code>.',
        broken: `const pet = { name: "Rex", type: "dog" };

function describe(p) {
  return p.name + " is a " + p.kind;
}
console.log(describe(pet));`,
        solution: `const pet = { name: "Rex", type: "dog" };

function describe(p) {
  return p.name + " is a " + p.type;
}
console.log(describe(pet));`,
        why: 'The object has no [[kind]] key — it\'s called [[type]].',
        tests: [
          { name: 'Returns "Rex is a dog"', test: `return describe(pet) === 'Rex is a dog';` },
          { name: 'Works for another pet', test: `return describe({ name: 'Tom', type: 'cat' }) === 'Tom is a cat';` }
        ]
      },
      {
        title: 'The button that does nothing',
        lang: 'html',
        task: 'Clicking the button should change the paragraph\'s text to <b>Clicked!</b>. Nothing happens. There are <b>two</b> bugs.',
        broken: `<button>Click me</button>
<p id="msg">Not clicked yet</p>

<script>
  const btn = document.querySelector("button");
  const msg = document.getElementById("#msg");
  btn.addEventListener("onclick", () => {
    msg.textContent = "Clicked!";
  });
</script>`,
        solution: `<button>Click me</button>
<p id="msg">Not clicked yet</p>

<script>
  const btn = document.querySelector("button");
  const msg = document.getElementById("msg");
  btn.addEventListener("click", () => {
    msg.textContent = "Clicked!";
  });
</script>`,
        why: '[[getElementById]] takes the id without [[#]], and the event name is [["click"]], not [["onclick"]].',
        tests: [
          { name: 'Text starts as "Not clicked yet"', test: `return document.getElementById('msg').textContent === 'Not clicked yet';` },
          { name: 'After a click it says "Clicked!"', test: `document.querySelector('button').click(); return document.getElementById('msg').textContent === 'Clicked!';` }
        ]
      }
    ]
  }
};
