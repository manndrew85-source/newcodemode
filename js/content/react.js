// React course — building user interfaces with components
window.COURSES = window.COURSES || {};
COURSES.react = {
  id: 'react',
  level: 'Professional',
  title: 'React: Modern User Interfaces',
  tagline: 'The most in-demand front-end skill: components, props, state and effects.',
  description: '<b>React</b> is the JavaScript library used by Facebook, Instagram, Netflix, Airbnb and thousands of companies to build their apps. It shows up on more front-end job postings than any other skill. You already know HTML, CSS and JavaScript — React is a smarter way to combine them.',
  lang: 'react',
  certTitle: 'React: Modern User Interfaces',
  skills: 'React components, JSX, props, state with hooks, event handling, forms, effects, data fetching and app architecture',
  resume: 'CodePath — React: Modern User Interfaces Certificate (Passed final test)\nSkills: React 18, JSX, components & props, useState, useEffect, custom hooks,\ncontrolled forms, fetching API data, Vite',
  units: [
    // ---------------- Unit 1 ----------------
    {
      title: 'Components & JSX',
      intro: 'What React is, and building your first components.',
      lessons: [
        {
          title: 'Why React?',
          body: `
<p>In the Advanced course you built a to-do app with a [[render()]] function that redrew the screen from your data. That idea — <b>the screen is a function of your data</b> — is exactly what React does, but automatically and for whole apps.</p>
<ul>
<li>With plain JavaScript you tell the browser <i>how</i> to change the page step by step ("find this element, change its text…"). This is called <b>imperative</b> code.</li>
<li>With React you describe <i>what</i> the page should look like for the current data, and React works out the changes. This is called <b>declarative</b> code.</li>
</ul>
<p>A React page is still an HTML page. In the example below, look for three things:</p>
<ol>
<li>An empty [[<div id="root">]] — React will draw the whole app inside it.</li>
<li>A [[<script type="text/babel">]] — our React code. "Babel" translates React's special syntax (JSX) into normal JavaScript.</li>
<li>[[ReactDOM.createRoot(...).render(<App />)]] — "draw the App component inside #root".</li>
</ol>
<div class="callout">📌 In this app React is loaded for you. On your own computer you'll use a tool called <b>Vite</b> to set up React projects — that's covered in Unit 5.</div>`,
          pic: 'reactIdea',
          cap: 'Plain JS: you update the page by hand. React: you describe the page and React keeps it up to date.',
          code: `<div id="root"></div>

<script type="text/babel">
  function App() {
    return (
      <div>
        <h1>Hello, React! ⚛️</h1>
        <p>This whole page was drawn by React.</p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'JSX: HTML inside JavaScript',
          body: `
<p><b>JSX</b> lets you write HTML-like tags directly in JavaScript. It looks like HTML but there are a few rules:</p>
<ul>
<li><b>One parent:</b> a component returns <i>one</i> outer element. Wrap siblings in a [[<div>]] or an empty <b>fragment</b> [[<>…</>]].</li>
<li><b>Close every tag</b>, even ones that don't close in HTML: [[<img />]], [[<br />]], [[<input />]].</li>
<li>[[class]] becomes [[className]], and [[for]] becomes [[htmlFor]] (because [[class]] and [[for]] are JavaScript words).</li>
<li><b>Curly braces</b> [[{ }]] drop any JavaScript value into the page: [[<p>{1 + 1}</p>]] shows 2.</li>
<li>Inline styles are objects with camelCase names: [[style={{ backgroundColor: "gold" }}]].</li>
</ul>
<p>Wrap multi-line JSX in parentheses [[( )]] after [[return]] so JavaScript doesn't get confused.</p>`,
          pic: 'jsxVsHtml',
          cap: 'Same idea as HTML, a few different spellings, and [[{ }]] for JavaScript.',
          code: `<style>
  .card { border: 2px solid #4f46e5; border-radius: 12px; padding: 12px; }
</style>
<div id="root"></div>

<script type="text/babel">
  function App() {
    const name = "Ava";
    const hobbies = 3;
    return (
      <>
        <div className="card">
          <h2>Hi, I'm {name.toUpperCase()}!</h2>
          <p>I have {hobbies} hobbies and {hobbies * 2} hands... wait, no.</p>
          <label htmlFor="mood">Mood: </label>
          <input id="mood" placeholder="type here" />
        </div>
        <p style={{ color: "teal", fontWeight: "bold" }}>Styled with a JS object</p>
        <img src="https://picsum.photos/id/1025/160/100" alt="A pug in a blanket" />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'Components: build with pieces',
          body: `
<p>A <b>component</b> is a JavaScript function that returns JSX. Think of components as your own custom HTML tags.</p>
<ul>
<li>Component names <b>must start with a capital letter</b>: [[Header]], not [[header]] (lowercase names are treated as normal HTML tags).</li>
<li>Use a component like a tag: [[<Header />]].</li>
<li>You can use a component as many times as you like, and put components inside other components.</li>
</ul>
<p>Real apps are a <b>tree</b> of components: an [[App]] containing a [[Header]], a [[TodoList]] with many [[TodoItem]]s, and a [[Footer]]. Breaking a page into components keeps each piece small, easy to understand, and reusable.</p>`,
          pic: 'componentTree',
          cap: 'Every React app is a tree of components, with [[App]] at the top.',
          code: `<div id="root"></div>

<script type="text/babel">
  function Header() {
    return <header><h1>🍕 Pizza Palace</h1></header>;
  }

  function MenuItem() {
    return <li>Margherita — $10</li>;
  }

  function Footer() {
    return <footer><small>Open daily 11am–10pm</small></footer>;
  }

  function App() {
    return (
      <div>
        <Header />
        <ul>
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
        <Footer />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
          after: '<p>Notice all three menu items say the same thing. To make each one different you need <b>props</b> — the next unit.</p>'
        }
      ],
      recap: [
        'React is <b>declarative</b>: describe what the UI should look like for your data and React updates the page.',
        'A React app renders into one element: [[ReactDOM.createRoot(document.getElementById("root")).render(<App />)]].',
        'JSX rules: one parent element (or [[<>…</>]]), close every tag, [[className]] and [[htmlFor]], [[{ }]] for JavaScript.',
        'A <b>component</b> is a function that returns JSX. Its name starts with a <b>capital letter</b>.',
        'Apps are a <b>tree</b> of small, reusable components.'
      ],
      cheat: `function Greeting() {
  const name = "Ava";
  return (
    <>
      <h1 className="title">Hi {name}</h1>
      <img src="me.jpg" alt="Me" />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Greeting />);`,
      quiz: [
        { q: 'What does it mean that React is "declarative"?', options: ['You write step-by-step DOM changes', 'You describe what the UI should look like and React updates the page', 'React only works with databases', 'You must declare every variable twice'], answer: 1, why: 'You describe the result for the current data; React figures out the DOM changes.' },
        { q: 'In JSX, how do you give an element a CSS class?', options: ['[[class="box"]]', '[[className="box"]]', '[[css="box"]]', '[[style="box"]]'], answer: 1, why: '[[class]] is a reserved word in JavaScript, so JSX uses [[className]].' },
        { q: 'Why does this JSX fail?', code: 'return (\n  <h1>Title</h1>\n  <p>Text</p>\n);', options: ['Missing semicolons', 'It returns two elements without one parent', '[[<p>]] is not allowed in React', 'Titles must use [[<Title>]]'], answer: 1, why: 'A component must return one parent. Wrap them in [[<div>]] or [[<>…</>]].' },
        { q: 'Which is a valid component name?', options: ['[[productCard]]', '[[product-card]]', '[[ProductCard]]', '[[_productcard]]'], answer: 2, why: 'Components must start with a capital letter so React knows they aren\'t plain HTML tags.' },
        { q: 'What does [[<p>{2 * 5}</p>]] show on the page?', options: ['{2 * 5}', '2 * 5', '10', 'Nothing'], answer: 2, why: 'Curly braces run JavaScript, so the expression is calculated: 10.' }
      ]
    },
    // ---------------- Unit 2 ----------------
    {
      title: 'Props & Lists',
      intro: 'Pass data into components and render lists of things.',
      lessons: [
        {
          title: 'Props: passing data to components',
          body: `
<p><b>Props</b> (short for properties) are how a parent passes information to a child component — just like attributes on an HTML tag:</p>
{{{
<Card title="Sunset" likes={42} />
}}}
<p>The child receives all props as one object. Most people <b>destructure</b> it right in the parameters:</p>
{{{
function Card({ title, likes }) {
  return <h2>{title} ❤️ {likes}</h2>;
}
}}}
<ul>
<li>Text props can use quotes; anything else (numbers, booleans, arrays, objects, functions) uses [[{ }]].</li>
<li>Give defaults with [[= ]]: [[function Card({ likes = 0 })]].</li>
<li>Props are <b>read-only</b>. A child never changes its own props.</li>
<li>The special [[children]] prop holds whatever you put between the opening and closing tags: [[<Box>Hello</Box>]].</li>
</ul>`,
          pic: 'propsFlow',
          cap: 'Data flows down from parent to child through props.',
          code: `<style>
  .card { border: 1px solid #ccc; border-radius: 10px; padding: 10px; margin: 8px 0; }
  .box { background: #fef3c7; padding: 10px; border-radius: 10px; }
</style>
<div id="root"></div>

<script type="text/babel">
  function MenuItem({ name, price, spicy = false }) {
    return (
      <div className="card">
        <b>{name}</b> — \${price} {spicy && "🌶️"}
      </div>
    );
  }

  function Box({ children }) {
    return <div className="box">{children}</div>;
  }

  function App() {
    return (
      <div>
        <h1>Menu</h1>
        <MenuItem name="Margherita" price={10} />
        <MenuItem name="Pepperoni" price={12} spicy={true} />
        <MenuItem name="Veggie" price={11} />
        <Box>
          <p>🎉 Anything between Box tags is its <b>children</b>.</p>
        </Box>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'Rendering lists with map and key',
          body: `
<p>Real apps show lists that come from data: posts, products, messages. In React you turn an <b>array of data</b> into an <b>array of elements</b> with [[.map()]]:</p>
{{{
{pets.map(pet => <li key={pet.id}>{pet.name}</li>)}
}}}
<p>Every item in a list needs a <b>[[key]]</b> prop — a value that is unique among its siblings and stays the same for that item. Usually it's an [[id]] from your data. Keys let React track which item is which when the list changes.</p>
<div class="callout warn">⚠️ Forget the key and React prints a warning: <i>Each child in a list should have a unique "key" prop.</i> Avoid using [[Math.random()]] as a key, and avoid the array index if items can be reordered or deleted.</div>
<p>You can [[.filter()]] before you [[.map()]] to show only some items.</p>`,
          pic: 'keysList',
          cap: 'Each list item wears a unique key, like a name tag.',
          code: `<div id="root"></div>

<script type="text/babel">
  const pets = [
    { id: 1, name: "Rex", type: "dog", age: 3 },
    { id: 2, name: "Whiskers", type: "cat", age: 5 },
    { id: 3, name: "Bubbles", type: "fish", age: 1 },
    { id: 4, name: "Bella", type: "dog", age: 7 }
  ];

  function App() {
    const dogs = pets.filter(p => p.type === "dog");
    return (
      <div>
        <h2>All pets</h2>
        <ul>
          {pets.map(pet => (
            <li key={pet.id}>{pet.name} the {pet.type}</li>
          ))}
        </ul>
        <h2>Just the dogs 🐶</h2>
        <ul>
          {dogs.map(dog => <li key={dog.id}>{dog.name}, age {dog.age}</li>)}
        </ul>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'Conditional rendering',
          body: `
<p>Often you want to show something <b>only sometimes</b>: a "Sale!" badge, a loading spinner, an error message. React has three common patterns:</p>
<ul>
<li><b>Ternary</b> — pick one of two things: [[{isLoggedIn ? <Logout /> : <Login />}]]</li>
<li><b>&&</b> — show something or nothing: [[{hasError && <p>Oops!</p>}]]</li>
<li><b>Early return</b> — inside the component: [[if (!user) return <p>Loading…</p>;]]</li>
</ul>
<div class="callout warn">⚠️ <b>The 0 trap:</b> [[{count && <p>…</p>}]] shows a stray <b>0</b> on the page when count is 0, because React renders the number 0. Write [[{count > 0 && …}]] instead.</div>`,
          pic: 'ifElse',
          cap: 'Same idea as [[if/else]] — just written inside JSX.',
          code: `<div id="root"></div>

<script type="text/babel">
  function Product({ name, stock, onSale }) {
    if (stock === undefined) return <p>Loading…</p>;
    return (
      <div>
        <h3>
          {name} {onSale && <span style={{ color: "crimson" }}>SALE!</span>}
        </h3>
        <p>{stock > 0 ? stock + " in stock" : "Sold out 😢"}</p>
        {stock > 0 && stock < 3 && <p><i>Hurry, almost gone!</i></p>}
      </div>
    );
  }

  function App() {
    return (
      <div>
        <Product name="Sneakers" stock={12} onSale={true} />
        <Product name="Hoodie" stock={2} />
        <Product name="Cap" stock={0} />
        <Product name="Mystery item" />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        }
      ],
      recap: [
        '<b>Props</b> pass data from parent to child: [[<Card title="Hi" likes={3} />]]. Use [[{ }]] for non-text values.',
        'Destructure props in the parameters: [[function Card({ title, likes = 0 })]]. Props are read-only.',
        '[[children]] is whatever sits between a component\'s tags.',
        'Render lists with [[array.map(item => <li key={item.id}>…</li>)]]. Every item needs a unique, stable [[key]].',
        'Conditional rendering: ternary [[a ? b : c]], [[cond && <X />]], or early [[return]]. Beware [[0 && …]] showing "0".'
      ],
      cheat: `function List({ items }) {
  if (items.length === 0) return <p>Nothing yet</p>;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.done ? "✅" : "⬜"} {item.text}</li>
      ))}
    </ul>
  );
}`,
      quiz: [
        { q: 'How does a parent pass the number 5 to a child\'s [[size]] prop?', options: ['[[<Child size="5" />]] only', '[[<Child size={5} />]]', '[[<Child>size=5</Child>]]', '[[<Child props.size=5 />]]'], answer: 1, why: 'Non-text values go in curly braces. ([[size="5"]] would pass the string "5".)' },
        { q: 'Can a child component change its own props?', options: ['Yes, any time', 'No — props are read-only', 'Only numbers', 'Only inside [[useEffect]]'], answer: 1, why: 'Props belong to the parent. To change data, the child asks the parent (usually via a function prop).' },
        { q: 'What is wrong with this list?', code: '{users.map(u => <li>{u.name}</li>)}', options: ['[[.map]] can\'t be used in JSX', 'Each [[<li>]] is missing a [[key]] prop', 'It should use [[forEach]]', 'Nothing'], answer: 1, why: 'List items need a unique key, e.g. [[key={u.id}]].' },
        { q: 'With [[count = 0]], what appears on the page?', code: '{count && <p>You have mail</p>}', options: ['Nothing', 'You have mail', '0', 'false'], answer: 2, why: 'React renders the number 0. Use [[count > 0 && …]].' },
        { q: 'What is [[children]] in [[<Alert>Saved!</Alert>]]?', options: ['An array of all components', 'The text "Saved!"', 'The Alert function', 'undefined'], answer: 1, why: '[[children]] is the content between the opening and closing tags.' }
      ]
    },
    // ---------------- Unit 3 ----------------
    {
      title: 'State & Events',
      intro: 'Make components interactive with useState.',
      lessons: [
        {
          title: 'useState: memory for components',
          body: `
<p>Props come from outside. <b>State</b> is a component's own memory — data that changes while the app runs, like a counter, what's typed in a box, or whether a menu is open.</p>
{{{
const [count, setCount] = useState(0);
}}}
<ul>
<li>[[useState(0)]] creates a piece of state starting at [[0]].</li>
<li>It gives back two things: the <b>current value</b> ([[count]]) and a <b>setter function</b> ([[setCount]]).</li>
<li>Call the setter to change it: [[setCount(count + 1)]]. React then <b>re-renders</b> the component with the new value.</li>
</ul>
<div class="callout warn">⚠️ Never change state directly ([[count = count + 1]]). React won't notice and the screen won't update. Always use the setter.</div>
<p>Functions whose names start with [[use]] are called <b>hooks</b>. Only call them at the <b>top level</b> of a component — not inside loops, ifs, or nested functions. Here we get them from React with [[const { useState } = React;]] (in a Vite project you'd write [[import { useState } from "react";]]).</p>`,
          pic: 'stateCycle',
          cap: 'Click → setter → new state → React re-renders → you see the change.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>−1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {count >= 10 && <p>🎉 Double digits!</p>}
      </div>
    );
  }

  function App() {
    return (
      <div>
        <Counter />
        <hr />
        <Counter />
        <p><small>Each Counter has its own, separate state.</small></p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'Handling events and forms',
          body: `
<p>React events look like HTML attributes in camelCase: [[onClick]], [[onChange]], [[onSubmit]], [[onKeyDown]]. You pass them a <b>function</b>:</p>
<ul>
<li>✅ [[onClick={handleClick}]] — pass the function.</li>
<li>✅ [[onClick={() => setCount(5)}]] — pass an arrow function that will run later.</li>
<li>❌ [[onClick={handleClick()}]] — this <i>calls</i> it immediately while rendering!</li>
</ul>
<p><b>Controlled inputs:</b> in React, form inputs usually get their value from state, and update state when the user types:</p>
{{{
const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />
}}}
<p>Now [[name]] always matches what's in the box, so you can use it anywhere — validate it, show it live, or clear it with [[setName("")]].</p>
<p>For forms, handle [[onSubmit]] on the [[<form>]] and call [[e.preventDefault()]] so the page doesn't reload.</p>`,
          pic: 'controlledInput',
          cap: 'State feeds the input\'s value; typing updates the state.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      setSent(true);
    }

    if (sent) return <h2>Thanks, {name}! Check {email} 📬</h2>;

    return (
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="n">Name </label>
          <input id="n" value={name} onChange={e => setName(e.target.value)} />
        </p>
        <p>
          <label htmlFor="e">Email </label>
          <input id="e" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </p>
        <p>Preview: Hello, <b>{name || "stranger"}</b> ({name.length} letters)</p>
        <button disabled={!name || !email}>Sign up</button>
      </form>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<SignUp />);
</script>`
        },
        {
          title: 'Updating arrays and objects in state',
          body: `
<p>When state is an array or object, you must give React a <b>new</b> array or object — never change the old one. React compares old and new; if it's the same object, it assumes nothing changed.</p>
<div class="table-wrap"><table class="simple">
<tr><th>Goal</th><th>❌ Don't (mutates)</th><th>✅ Do (new copy)</th></tr>
<tr><td>Add</td><td>[[todos.push(t)]]</td><td>[[setTodos([...todos, t])]]</td></tr>
<tr><td>Remove</td><td>[[todos.splice(i, 1)]]</td><td>[[setTodos(todos.filter(t => t.id !== id))]]</td></tr>
<tr><td>Change one</td><td>[[todo.done = true]]</td><td>[[setTodos(todos.map(t => t.id === id ? { ...t, done: true } : t))]]</td></tr>
<tr><td>Update object</td><td>[[user.age = 21]]</td><td>[[setUser({ ...user, age: 21 })]]</td></tr>
</table></div>
<p>These are the spread, [[filter]] and [[map]] tools from the Advanced course — now you see why they matter!</p>`,
          pic: 'spread',
          cap: 'Make a new copy with the change, then hand it to the setter.',
          code: `<style>
  .done { text-decoration: line-through; color: #94a3b8; }
  li { margin: 4px 0; }
</style>
<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function TodoApp() {
    const [todos, setTodos] = useState([
      { id: 1, text: "Learn useState", done: true },
      { id: 2, text: "Build a to-do app", done: false }
    ]);
    const [text, setText] = useState("");

    function add(e) {
      e.preventDefault();
      if (!text.trim()) return;
      setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
      setText("");
    }
    const toggle = id => setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    const remove = id => setTodos(todos.filter(t => t.id !== id));

    return (
      <div>
        <form onSubmit={add}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" aria-label="New task" />
          <button>Add</button>
        </form>
        <ul>
          {todos.map(t => (
            <li key={t.id}>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} aria-label={"Done: " + t.text} />
              <span className={t.done ? "done" : ""}> {t.text} </span>
              <button onClick={() => remove(t.id)}>✕</button>
            </li>
          ))}
        </ul>
        <p>{todos.filter(t => !t.done).length} left</p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<TodoApp />);
</script>`
        }
      ],
      recap: [
        '[[const [value, setValue] = useState(start)]] gives a component memory. Calling the setter re-renders it.',
        'Never assign to state directly — always use the setter.',
        'Events: [[onClick={handleClick}]] or [[onClick={() => …}]], never [[onClick={handleClick()}]].',
        '<b>Controlled input</b>: [[value={name} onChange={e => setName(e.target.value)}]]. Forms use [[onSubmit]] + [[e.preventDefault()]].',
        'Arrays/objects in state: create new copies with spread, [[map]] and [[filter]] — never [[push]] or change them in place.'
      ],
      cheat: `const { useState } = React;
const [items, setItems] = useState([]);
setItems([...items, newItem]);                        // add
setItems(items.filter(i => i.id !== id));             // remove
setItems(items.map(i => i.id === id ? { ...i, done: true } : i)); // update
<input value={text} onChange={e => setText(e.target.value)} />`,
      quiz: [
        { q: 'What does [[useState(0)]] return?', options: ['Just the number 0', 'An array: the current value and a function to change it', 'A component', 'A promise'], answer: 1, why: 'You destructure it: [[const [count, setCount] = useState(0)]].' },
        { q: 'Why doesn\'t the screen update?', code: 'const [score, setScore] = useState(0);\n// ...\nscore = score + 1;', options: ['score should be a string', 'State must be changed with the setter: [[setScore(score + 1)]]', 'You need to reload the page', 'useState only works with arrays'], answer: 1, why: 'React only re-renders when you call the setter (and here, assigning to a const also throws an error).' },
        { q: 'Which correctly runs [[save]] when the button is clicked?', options: ['[[onClick={save()}]]', '[[onclick="save"]]', '[[onClick={save}]]', '[[onClick=save]]'], answer: 2, why: 'Pass the function itself. [[save()]] would run during render.' },
        { q: 'How should you add [[item]] to an array in state?', options: ['[[list.push(item); setList(list);]]', '[[setList([...list, item]);]]', '[[list[list.length] = item;]]', '[[setList(list + item);]]'], answer: 1, why: 'Create a new array with spread so React sees the change.' },
        { q: 'What makes an input "controlled"?', options: ['It has a [[name]] attribute', 'Its value comes from state and [[onChange]] updates that state', 'It is inside a [[<form>]]', 'It has [[required]]'], answer: 1, why: 'State is the single source of truth for what the input shows.' }
      ]
    },
    // ---------------- Unit 4 ----------------
    {
      title: 'Effects & Data',
      intro: 'Talk to the outside world: timers, storage and APIs.',
      lessons: [
        {
          title: 'useEffect: running code after render',
          body: `
<p>Rendering should only <i>describe</i> the UI. Anything that reaches <b>outside</b> React — fetching data, saving to localStorage, starting a timer, changing the browser tab title — goes in an <b>effect</b>:</p>
{{{
useEffect(() => {
  document.title = "You clicked " + count + " times";
}, [count]);
}}}
<p>The second argument, the <b>dependency array</b>, controls <i>when</i> it runs:</p>
<ul>
<li>[[[]]] — once, after the first render.</li>
<li>[[[count]]] — after the first render and whenever [[count]] changes.</li>
<li>No array — after <i>every</i> render. Rarely what you want, and if the effect sets state it causes an <b>endless loop</b>.</li>
</ul>
<p>An effect can <b>return a cleanup function</b>. React runs it before the effect runs again or when the component disappears — perfect for stopping timers.</p>`,
          pic: 'effectLifecycle',
          cap: 'Render first, then the effect runs. The dependency array decides when it runs again.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      if (!running) return;
      const id = setInterval(() => setSeconds(s => s + 1), 1000);
      console.log("timer started");
      return () => { clearInterval(id); console.log("timer stopped"); };  // cleanup
    }, [running]);

    useEffect(() => {
      console.log("seconds is now", seconds);
    }, [seconds]);

    return (
      <div>
        <h2>⏱️ {seconds}s</h2>
        <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch />);
</script>`,
          after: '<p>💡 [[setSeconds(s => s + 1)]] is an <b>updater function</b>: it always uses the latest value, which matters inside timers.</p>'
        },
        {
          title: 'Fetching data from an API',
          body: `
<p>Loading data is the most common effect. A solid pattern tracks three pieces of state — the <b>data</b>, whether it's <b>loading</b>, and any <b>error</b> — so the UI can show the right thing at every moment:</p>
{{{
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, []);   // [] = load once
}}}
<p>The example loads real users from a free practice API (needs internet). Try changing [[users.slice(0, 5)]] to show more, or type in the search box — filtering happens on data you already have, with no new request.</p>`,
          pic: 'fetchFlow',
          cap: 'Effect → fetch → JSON → put it in state → React renders it.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(data => setUsers(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading users… ⏳</p>;
    if (error) return <p>⚠️ Couldn't load: {error} (are you offline?)</p>;

    const shown = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
    return (
      <div>
        <input placeholder="Search names" value={query} onChange={e => setQuery(e.target.value)} aria-label="Search names" />
        <ul>
          {shown.slice(0, 5).map(u => <li key={u.id}>{u.name} — {u.address.city}</li>)}
        </ul>
        <small>{shown.length} match(es)</small>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Users />);
</script>`
        },
        {
          title: 'Lifting state up',
          body: `
<p>What if two components need the <b>same</b> data? For example, an [[AddForm]] adds items and a separate [[List]] shows them. State can't be shared sideways between siblings.</p>
<p>The solution is to <b>lift state up</b>: move it into their closest shared parent. The parent then passes:</p>
<ul>
<li>the <b>data</b> down as props ([[items={items}]]), and</li>
<li>a <b>function</b> down as a prop so the child can ask for changes ([[onAdd={addItem}]]).</li>
</ul>
<p>This is the main way components "talk" in React: <b>data flows down, events flow up</b>. Function props are usually named [[onSomething]].</p>`,
          pic: 'liftState',
          cap: 'The parent owns the state; children get data and callback functions as props.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function AddForm({ onAdd }) {
    const [text, setText] = useState("");
    return (
      <form onSubmit={e => { e.preventDefault(); if (text.trim()) { onAdd(text.trim()); setText(""); } }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a song" aria-label="Song name" />
        <button>Add</button>
      </form>
    );
  }

  function Playlist({ songs, onRemove }) {
    if (songs.length === 0) return <p>No songs yet 🎵</p>;
    return (
      <ol>
        {songs.map((s, i) => (
          <li key={s + i}>{s} <button onClick={() => onRemove(i)}>✕</button></li>
        ))}
      </ol>
    );
  }

  function App() {
    const [songs, setSongs] = useState(["Bohemian Rhapsody"]);   // lifted up here
    return (
      <div>
        <h2>🎧 My playlist ({songs.length})</h2>
        <AddForm onAdd={song => setSongs([...songs, song])} />
        <Playlist songs={songs} onRemove={i => setSongs(songs.filter((_, j) => j !== i))} />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        }
      ],
      recap: [
        '[[useEffect(fn, deps)]] runs code <b>after</b> render — for fetching, storage, timers and other outside work.',
        'Dependencies: [[[]]] = once, [[[x]]] = when x changes, none = every render (can loop forever if it sets state).',
        'Return a <b>cleanup</b> function from an effect to stop timers or listeners.',
        'Data fetching pattern: [[data]], [[loading]] and [[error]] state, and show each case.',
        '<b>Lift state up</b> to the closest shared parent: pass data down as props and changes up with [[onSomething]] function props.'
      ],
      cheat: `const { useState, useEffect } = React;
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);   // cleanup
}, []);                              // run once

<Child items={items} onAdd={item => setItems([...items, item])} />`,
      quiz: [
        { q: 'When does [[useEffect(fn, [])]] run?', options: ['Before the first render', 'Once, after the first render', 'After every render', 'Never'], answer: 1, why: 'An empty dependency array means "run once after the component first appears".' },
        { q: 'What problem does this cause?', code: 'useEffect(() => {\n  setCount(count + 1);\n});', options: ['Nothing', 'An endless loop of renders', 'A syntax error', 'It only runs once'], answer: 1, why: 'No dependency array → runs after every render → sets state → renders again → forever.' },
        { q: 'What is a cleanup function for?', options: ['Deleting the component', 'Undoing an effect\'s work (like stopping a timer) before it re-runs or the component leaves', 'Clearing the console', 'Resetting all state'], answer: 1, why: 'Return a function from the effect; React calls it to clean up.' },
        { q: 'Two sibling components need the same list. Where should the state live?', options: ['In both siblings, copied', 'In their closest shared parent', 'In a global variable', 'In localStorage only'], answer: 1, why: 'Lift state up to the common parent and pass it down as props.' },
        { q: 'Which three pieces of state make a good data-fetching component?', options: ['url, json, html', 'data, loading, error', 'start, middle, end', 'props, keys, refs'], answer: 1, why: 'Track the data, whether it\'s still loading, and any error — then render each case.' }
      ]
    },
    // ---------------- Unit 5 ----------------
    {
      title: 'Building Real React Apps',
      intro: 'Plan components, reuse logic with custom hooks, and set up a real project.',
      lessons: [
        {
          title: 'Thinking in React',
          body: `
<p>The React team recommends five steps for building any UI:</p>
<ol>
<li><b>Break the design into components.</b> Draw boxes around each part of a sketch. If something repeats or does one job, it's a component.</li>
<li><b>Build a static version first</b> with props only — no state. Get it looking right.</li>
<li><b>Find the minimal state.</b> Ask for each piece of data: does it change over time? Can it be <i>calculated</i> from other data? If it can be calculated (like a filtered list or a total), it is <b>not</b> state — compute it during render.</li>
<li><b>Decide where state lives</b> — the closest common parent of everything that uses it.</li>
<li><b>Add the inverse data flow</b> — pass setter functions down so children can update it.</li>
</ol>
<p>The example is a small product table built exactly this way: [[App]] → [[SearchBar]] + [[ProductTable]] → [[ProductRow]]. The only state is the search text and the "in stock only" checkbox. The filtered list is <i>calculated</i>.</p>`,
          pic: 'componentTree',
          cap: 'Sketch it, box it, name each box — those are your components.',
          code: `<style>
  table { border-collapse: collapse; width: 100%; max-width: 360px; }
  td, th { text-align: left; padding: 4px 8px; border-bottom: 1px solid #e2e8f0; }
  .out { color: #dc2626; }
</style>
<div id="root"></div>

<script type="text/babel">
  const { useState } = React;
  const PRODUCTS = [
    { id: 1, category: "Fruit", name: "Apple", price: 1, stocked: true },
    { id: 2, category: "Fruit", name: "Dragonfruit", price: 3, stocked: false },
    { id: 3, category: "Vegetable", name: "Spinach", price: 2, stocked: true },
    { id: 4, category: "Vegetable", name: "Pumpkin", price: 4, stocked: false }
  ];

  function SearchBar({ text, onText, inStockOnly, onInStockOnly }) {
    return (
      <div>
        <input value={text} onChange={e => onText(e.target.value)} placeholder="Search…" aria-label="Search products" />
        <label> <input type="checkbox" checked={inStockOnly} onChange={e => onInStockOnly(e.target.checked)} /> In stock only</label>
      </div>
    );
  }

  function ProductRow({ product }) {
    return (
      <tr>
        <td className={product.stocked ? "" : "out"}>{product.name}</td>
        <td>\${product.price}</td>
      </tr>
    );
  }

  function ProductTable({ products }) {
    return (
      <table>
        <thead><tr><th>Name</th><th>Price</th></tr></thead>
        <tbody>{products.map(p => <ProductRow key={p.id} product={p} />)}</tbody>
      </table>
    );
  }

  function App() {
    const [text, setText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    // calculated, not state:
    const visible = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(text.toLowerCase()) && (!inStockOnly || p.stocked));
    return (
      <div>
        <SearchBar text={text} onText={setText} inStockOnly={inStockOnly} onInStockOnly={setInStockOnly} />
        <ProductTable products={visible} />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'Custom hooks: reusable logic',
          body: `
<p>Components let you reuse <b>UI</b>. <b>Custom hooks</b> let you reuse <b>logic</b>. A custom hook is just a function whose name starts with [[use]] and that calls other hooks.</p>
<p>A classic example: state that is automatically saved to localStorage, so it survives a page refresh:</p>
{{{
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
}}}
<p>Now any component can write [[const [notes, setNotes] = useLocalStorage("notes", [])]] and get saving for free. (Passing a function to [[useState]] means "only work out the starting value once".)</p>
<p>You'll use this exact hook in your Capstone project.</p>`,
          pic: 'storage',
          cap: 'A custom hook wraps useState + useEffect into one reusable tool.',
          code: `<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function useLocalStorage(key, initial) {
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initial;
    });
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  function useToggle(start = false) {
    const [on, setOn] = useState(start);
    return [on, () => setOn(o => !o)];
  }

  function App() {
    const [name, setName] = useLocalStorage("name", "");
    const [dark, toggleDark] = useToggle(false);
    return (
      <div style={{ background: dark ? "#1e293b" : "#fff", color: dark ? "#fff" : "#000", padding: 16, borderRadius: 12 }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" aria-label="Your name" />
        <p>Saved name: <b>{name || "(none)"}</b></p>
        <button onClick={toggleDark}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
        <p><small>Stored as: {localStorage.getItem("name")}</small></p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`
        },
        {
          title: 'React on your computer: Vite, npm & deploying',
          body: `
<p>In this app React is loaded for you. Professional projects use a <b>build tool</b> instead. The standard choice today is <b>Vite</b>.</p>
<h3>1. Install Node.js</h3>
<p>Download the <b>LTS</b> version from <code>nodejs.org</code>. It includes <b>npm</b>, the tool that installs JavaScript packages (like React) — over two million are available.</p>
<h3>2. Create a project</h3>
{{{
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
}}}
<p>Open the address it prints (usually [[http://localhost:5173]]). Edit [[src/App.jsx]], save, and the page updates instantly.</p>
<h3>3. What's different from this app</h3>
<ul>
<li>Each component usually lives in its own file and is shared with [[export default]] and [[import]].</li>
<li>You import hooks: [[import { useState, useEffect } from "react";]]</li>
<li>CSS files can be imported straight into components: [[import "./App.css";]]</li>
</ul>
<h3>4. Deploy</h3>
<p>Run [[npm run build]] to create an optimized [[dist/]] folder. Free hosts like <b>Netlify</b>, <b>Vercel</b> or <b>GitHub Pages</b> can publish it. On Vercel or Netlify you can connect your GitHub repo, and every [[git push]] redeploys your site automatically.</p>
<h3>Where to go next</h3>
<ul>
<li><code>react.dev</code> — the official docs and tutorial (excellent).</li>
<li><b>TypeScript</b> — JavaScript with types, used by most React teams.</li>
<li><b>React Router</b> (multiple pages) and <b>Next.js</b> (a full React framework).</li>
</ul>`,
          pic: 'viteFolder',
          cap: 'A Vite React project. [[npm run dev]] to work, [[npm run build]] to ship.'
        }
      ],
      recap: [
        'Thinking in React: break the UI into components → static version → minimal state → where state lives → pass setters down.',
        'If a value can be <b>calculated</b> from props or other state, don\'t store it in state.',
        'A <b>custom hook</b> is a function starting with [[use]] that reuses stateful logic, e.g. [[useLocalStorage]].',
        'Real projects: install Node.js, then [[npm create vite@latest]], [[npm install]], [[npm run dev]].',
        '[[npm run build]] makes a [[dist/]] folder to deploy on GitHub Pages, Netlify or Vercel.'
      ],
      cheat: `// src/App.jsx in a Vite project
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      quiz: [
        { q: 'You have a list of products and a search box. Should the FILTERED list be state?', options: ['Yes, always', 'No — calculate it from the products and the search text during render', 'Only if it is long', 'It must be in localStorage'], answer: 1, why: 'Anything you can compute from existing state or props shouldn\'t be duplicated as state.' },
        { q: 'What makes a function a custom hook?', options: ['It returns JSX', 'Its name starts with "use" and it calls other hooks', 'It is inside a class', 'It uses fetch'], answer: 1, why: 'Custom hooks are functions named [[useSomething]] that use hooks inside.' },
        { q: 'Which command starts the Vite development server?', options: ['[[npm start-vite]]', '[[npm run dev]]', '[[node react]]', '[[vite build]]'], answer: 1, why: '[[npm run dev]] starts the local dev server with instant updates.' },
        { q: 'What is npm?', options: ['A React component', 'A package manager for installing JavaScript libraries', 'A web browser', 'A CSS framework'], answer: 1, why: 'npm installs packages like React and comes with Node.js.' },
        { q: 'What does [[npm run build]] produce?', options: ['A Word document', 'An optimized [[dist/]] folder ready to deploy', 'A new React project', 'A test report'], answer: 1, why: 'The build output is plain HTML/CSS/JS you can host anywhere.' }
      ]
    }
  ],
  // ---------------- Final test ----------------
  test: {
    mc: [
      { q: 'What does this component render?', code: 'function Hi({ name }) {\n  return <p>Hi {name}!</p>;\n}\n// used as: <Hi name="Zoe" />', options: ['Hi {name}!', 'Hi Zoe!', 'Hi name!', 'Nothing'], answer: 1, why: 'The [[name]] prop is "Zoe" and [[{name}]] inserts it.' },
      { q: 'Which JSX is valid?', options: ['[[<img src="a.png">]]', '[[<div class="x"></div>]]', '[[<input type="text" />]]', '[[<label for="x">]]'], answer: 2, why: 'In JSX every tag must close ([[/>]]), and you use [[className]] / [[htmlFor]].' },
      { q: 'After clicking the button twice, what is shown?', code: 'const [n, setN] = useState(5);\n<button onClick={() => setN(n * 2)}>{n}</button>', options: ['5', '10', '20', '7'], answer: 2, why: '5 → 10 → 20.' },
      { q: 'Why does React need a [[key]] on list items?', options: ['For CSS styling', 'To identify each item so updates are correct and efficient', 'Keys make items clickable', 'They are required by HTML'], answer: 1, why: 'Keys let React match items between renders.' },
      { q: 'Where should data that several components need be stored?', options: ['In each component separately', 'In the closest common parent, passed down as props', 'In the URL only', 'In a CSS variable'], answer: 1, why: 'Lift state to the nearest shared parent.' },
      { q: 'When does this effect run?', code: 'useEffect(() => { save(notes); }, [notes]);', options: ['Only once', 'After the first render and whenever notes changes', 'Before every render', 'Never'], answer: 1, why: 'It re-runs when a value in the dependency array changes.' },
      { q: 'What is the correct way to toggle [[done]] on one to-do in state?', options: ['[[todo.done = !todo.done]]', '[[setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))]]', '[[todos[id].done = true; setTodos(todos)]]', '[[setTodos(todos.done = true)]]'], answer: 1, why: 'Build a new array with a new object for the changed item.' },
      { q: 'A child needs to tell its parent "the user clicked Delete". How?', options: ['Change the parent\'s props', 'The parent passes a function prop like [[onDelete]], and the child calls it', 'Use a global variable', 'Reload the page'], answer: 1, why: 'Data flows down; events flow up through function props.' },
      { q: 'Which hook should you use to fetch data when a component appears?', options: ['[[useState]] alone', '[[useEffect]]', '[[useFetch]] (built into React)', '[[useMemo]]'], answer: 1, why: 'Side effects like fetching go in [[useEffect]] (React has no built-in useFetch).' },
      { q: 'What tool do most new React projects start with today?', options: ['Vite', 'jQuery', 'Photoshop', 'Excel'], answer: 0, why: '[[npm create vite@latest]] sets up a modern React project.' }
    ],
    fix: [
      {
        title: 'Two parents',
        task: 'The component should show a heading <b>Welcome</b> and a paragraph <b>Glad you are here.</b> It won\'t compile. Fix it.',
        broken: `<div id="root"></div>

<script type="text/babel">
  function App() {
    return (
      <h1>Welcome</h1>
      <p>Glad you are here.</p>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  function App() {
    return (
      <>
        <h1>Welcome</h1>
        <p>Glad you are here.</p>
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: 'A component must return a single parent. Wrap the two elements in [[<>…</>]] or a [[<div>]].',
        tests: [
          { name: 'Shows the heading "Welcome"', test: `const h = document.querySelector('#root h1'); return !!h && h.textContent === 'Welcome';` },
          { name: 'Shows the paragraph', test: `const p = document.querySelector('#root p'); return !!p && p.textContent === 'Glad you are here.';` }
        ]
      },
      {
        title: 'The missing name tags',
        task: 'The list works, but React prints a warning in the console. Fix it so the <b>warning is gone</b> and all 3 colors still show.',
        broken: `<div id="root"></div>

<script type="text/babel">
  const colors = [
    { id: "c1", name: "Red" },
    { id: "c2", name: "Green" },
    { id: "c3", name: "Blue" }
  ];

  function App() {
    return (
      <ul>
        {colors.map(c => <li>{c.name}</li>)}
      </ul>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const colors = [
    { id: "c1", name: "Red" },
    { id: "c2", name: "Green" },
    { id: "c3", name: "Blue" }
  ];

  function App() {
    return (
      <ul>
        {colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: 'Each list item needs a unique [[key]] — the [[id]] is perfect.',
        tests: [
          { name: 'All 3 colors are listed', test: `return document.querySelectorAll('#root li').length === 3;` },
          { name: 'No "key" warning in the console', test: `return !__logs.some(l => l.includes('unique "key"'));` }
        ]
      },
      {
        title: 'Hello too early',
        task: '"Hello!" should be logged to the console <b>only when the button is clicked</b> — not when the page loads.',
        broken: `<div id="root"></div>

<script type="text/babel">
  function App() {
    function sayHello() {
      console.log("Hello!");
    }
    return <button onClick={sayHello()}>Say hello</button>;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  function App() {
    function sayHello() {
      console.log("Hello!");
    }
    return <button onClick={sayHello}>Say hello</button>;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: '[[sayHello()]] runs during render. Pass the function itself: [[onClick={sayHello}]].',
        tests: [
          { name: 'Nothing is logged when the page loads', test: `return !__logs.includes('Hello!');` },
          { name: 'Clicking logs "Hello!"', test: `document.querySelector('#root button').click(); await __tick(); return __logs.filter(l => l === 'Hello!').length === 1;` }
        ]
      },
      {
        title: 'The counter that never counts',
        task: 'Clicking the button should increase the number shown. It stays at 0. Use React state.',
        broken: `<div id="root"></div>

<script type="text/babel">
  function Counter() {
    let count = 0;
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => { count = count + 1; }}>Add one</button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add one</button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
</script>`,
        why: 'A normal variable resets every render and changing it doesn\'t re-render. Use [[useState]] and its setter.',
        tests: [
          { name: 'Starts at "Count: 0"', test: `return document.querySelector('#root p').textContent === 'Count: 0';` },
          { name: 'Two clicks show "Count: 2"', test: `const b = document.querySelector('#root button'); b.click(); await __tick(); b.click(); await __tick(); return document.querySelector('#root p').textContent === 'Count: 2';` }
        ]
      },
      {
        title: 'Push doesn\'t render',
        task: 'Typing a name and clicking <b>Add</b> should add it to the guest list and <b>clear the input box</b>. Nothing appears. Fix how the state is updated.',
        broken: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Guests() {
    const [guests, setGuests] = useState(["Ava"]);
    const [name, setName] = useState("");

    function add() {
      guests.push(name);
      setGuests(guests);
    }

    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} aria-label="Guest name" />
        <button onClick={add}>Add</button>
        <ul>{guests.map(g => <li key={g}>{g}</li>)}</ul>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Guests />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Guests() {
    const [guests, setGuests] = useState(["Ava"]);
    const [name, setName] = useState("");

    function add() {
      setGuests([...guests, name]);
      setName("");
    }

    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} aria-label="Guest name" />
        <button onClick={add}>Add</button>
        <ul>{guests.map(g => <li key={g}>{g}</li>)}</ul>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Guests />);
</script>`,
        why: '[[push]] changes the same array, so React sees no change. Create a new one: [[[...guests, name]]], then clear the box with [[setName("")]].',
        tests: [
          { name: 'Adding "Ben" shows 2 guests', test: `__type(document.querySelector('#root input'), 'Ben'); await __tick(); document.querySelector('#root button').click(); await __tick(); return document.querySelectorAll('#root li').length === 2;` },
          { name: 'The new guest is "Ben"', test: `const li = document.querySelectorAll('#root li')[1]; return !!li && li.textContent === 'Ben';` },
          { name: 'The input is cleared', test: `return document.querySelector('#root input').value === '';` }
        ]
      },
      {
        title: 'The frozen input',
        task: 'Typing in the box should update the greeting live (e.g. type <b>Sam</b> → <b>Hello, Sam!</b>). Right now you can\'t type at all.',
        broken: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Greeter() {
    const [name, setName] = useState("");
    return (
      <div>
        <input value={name} placeholder="Your name" aria-label="Your name" />
        <p>Hello, {name}!</p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Greeter />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Greeter() {
    const [name, setName] = useState("");
    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" aria-label="Your name" />
        <p>Hello, {name}!</p>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Greeter />);
</script>`,
        why: 'A controlled input needs [[onChange]] to update its state, otherwise it\'s stuck.',
        tests: [
          { name: 'Typing "Sam" shows "Hello, Sam!"', test: `__type(document.querySelector('#root input'), 'Sam'); await __tick(); return document.querySelector('#root p').textContent === 'Hello, Sam!';` }
        ]
      },
      {
        title: 'The nameless card',
        task: 'The card should show the title <b>Mountain Trip</b> passed in by the parent. It shows nothing.',
        broken: `<div id="root"></div>

<script type="text/babel">
  function Card({ name }) {
    return <h2>{name}</h2>;
  }

  function App() {
    return <Card title="Mountain Trip" />;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  function Card({ title }) {
    return <h2>{title}</h2>;
  }

  function App() {
    return <Card title="Mountain Trip" />;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: 'The prop is called [[title]], so the child must read [[title]].',
        tests: [
          { name: 'Card shows "Mountain Trip"', test: `const h = document.querySelector('#root h2'); return !!h && h.textContent === 'Mountain Trip';` },
          { name: 'The parent still passes [[title]]', src: 'title="Mountain Trip"' }
        ]
      },
      {
        title: 'The empty menu',
        task: 'The menu should list all <b>3</b> dishes. The list is empty.',
        broken: `<div id="root"></div>

<script type="text/babel">
  const dishes = ["Tacos", "Ramen", "Pasta"];

  function Menu() {
    return (
      <ul>
        {dishes.map(d => {
          <li key={d}>{d}</li>;
        })}
      </ul>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Menu />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const dishes = ["Tacos", "Ramen", "Pasta"];

  function Menu() {
    return (
      <ul>
        {dishes.map(d => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<Menu />);
</script>`,
        why: 'With curly braces the arrow function needs [[return]]. Use parentheses [[( )]] to return the JSX directly.',
        tests: [
          { name: 'Shows 3 dishes', test: `return document.querySelectorAll('#root li').length === 3;` },
          { name: 'First dish is "Tacos"', test: `const li = document.querySelector('#root li'); return !!li && li.textContent === 'Tacos';` }
        ]
      },
      {
        title: 'The runaway effect',
        task: 'The effect should run <b>once</b> when the page loads, so it shows <b>Effect ran 1 time(s)</b>. Instead the number keeps climbing.',
        broken: `<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function App() {
    const [runs, setRuns] = useState(0);
    useEffect(() => {
      setRuns(r => r + 1);
    });
    return <p>Effect ran {runs} time(s)</p>;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function App() {
    const [runs, setRuns] = useState(0);
    useEffect(() => {
      setRuns(r => r + 1);
    }, []);
    return <p>Effect ran {runs} time(s)</p>;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: 'Without a dependency array the effect runs after every render, and it causes a new render each time. [[[]]] runs it once.',
        tests: [
          { name: 'Shows "Effect ran 1 time(s)" and stays there', test: `await __tick(300); return document.querySelector('#root p').textContent === 'Effect ran 1 time(s)';` }
        ]
      },
      {
        title: 'The mysterious zero',
        task: 'When there are <b>0</b> messages, the page should show only the heading <b>Inbox</b> — but a stray <b>0</b> appears. When there are messages it should still say how many.',
        broken: `<div id="root"></div>

<script type="text/babel">
  function Inbox({ count }) {
    return (
      <div>
        <h2>Inbox</h2>
        {count && <p>You have {count} new messages</p>}
      </div>
    );
  }

  function App() {
    return <Inbox count={0} />;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        solution: `<div id="root"></div>

<script type="text/babel">
  function Inbox({ count }) {
    return (
      <div>
        <h2>Inbox</h2>
        {count > 0 && <p>You have {count} new messages</p>}
      </div>
    );
  }

  function App() {
    return <Inbox count={0} />;
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>`,
        why: '[[0 && …]] evaluates to [[0]], which React renders. Compare instead: [[count > 0 && …]].',
        tests: [
          { name: 'With 0 messages, only "Inbox" shows', test: `return document.getElementById('root').textContent.trim() === 'Inbox';` },
          { name: 'Inbox still renders a message count when there are messages', test: `const d = document.createElement('div'); document.body.append(d); ReactDOM.createRoot(d).render(React.createElement(Inbox, { count: 3 })); await __tick(); return d.textContent.includes('You have 3 new messages');` }
        ]
      }
    ]
  }
};
