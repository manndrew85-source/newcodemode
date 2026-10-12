// Capstone course — build one real app that uses HTML, CSS, JavaScript and React together.
window.COURSES = window.COURSES || {};

(() => {
  const SHARED_HEAD = (title, css) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<!-- When you host this yourself, React loads from these links: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.24.7/babel.min.js"></script>
<style>
${css}
</style>
</head>
<body>
<div id="root"></div>
`;

  // ---------------------------------------------------------------- starters
  const habitStarter = SHARED_HEAD('CHANGE ME — Habit Tracker', `  /* TODO (Unit 3): define colors, fonts and spacing as CSS variables in :root */
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
  /* TODO (Unit 3): use flexbox or grid for the layout */
  /* TODO (Unit 3): add :hover / :focus-visible styles and a @media query for phones */`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  // TODO (Unit 1): change these to habits YOU want to track
  const STARTER_HABITS = [
    { id: 1, name: "Drink water", done: false },
    { id: 2, name: "Code for 30 minutes", done: false }
  ];

  function App() {
    const [habits, setHabits] = useState(STARTER_HABITS);

    return (
      <div>
        {/* TODO (Unit 2): add a <header> with your app's name and a <nav> with 2+ links */}
        <main>
          <h1>CHANGE ME: name your habit tracker</h1>
          <p>You are tracking {habits.length} habits.</p>
          {/* TODO (Unit 2): add an <img> with alt text */}
          {/* TODO (Unit 2): add a <form> with a labelled input for new habits */}
          {/* TODO (Unit 4): show each habit in a HabitItem component using .map() and a key */}
          {/* TODO (Unit 4): add filter buttons (All / To do / Done) using .filter() */}
          {/* TODO (Unit 4): save habits to localStorage with useEffect */}
        </main>
        {/* TODO (Unit 2): add a <footer> */}
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  const portfolioStarter = SHARED_HEAD('CHANGE ME — Portfolio', `  /* TODO (Unit 3): define colors, fonts and spacing as CSS variables in :root */
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
  /* TODO (Unit 3): lay the project cards out with grid or flexbox */
  /* TODO (Unit 3): add :hover / :focus-visible styles and a @media query for phones */`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  // TODO (Unit 1): replace these with YOUR projects (CodePath lessons count!)
  const PROJECTS = [
    { id: 1, title: "Profile page", description: "My first website, built with HTML and CSS.", tags: ["HTML", "CSS"] },
    { id: 2, title: "To-do app", description: "Add, complete and delete tasks.", tags: ["JavaScript"] },
    { id: 3, title: "Counter", description: "My first React component.", tags: ["React"] }
  ];

  function App() {
    return (
      <div>
        {/* TODO (Unit 2): add a <header> with your name and a <nav> with 2+ links */}
        <main>
          <h1>CHANGE ME: Your Name</h1>
          <p>CHANGE ME: one sentence about who you are and what you build.</p>
          <section id="projects">
            <h2>Projects</h2>
            <p>{PROJECTS.length} projects coming soon...</p>
            {/* TODO (Unit 4): render each project as a <ProjectCard project={...} /> with .map() and a key */}
            {/* TODO (Unit 2): give each card an <img> with alt text */}
            {/* TODO (Unit 4): add tag filter buttons using .filter() */}
          </section>
          {/* TODO (Unit 2): add a contact <form> with labelled inputs */}
          {/* TODO (Unit 4): save sent messages to localStorage with useEffect */}
        </main>
        {/* TODO (Unit 2): add a <footer> */}
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  const recipeStarter = SHARED_HEAD('CHANGE ME — Recipe Box', `  /* TODO (Unit 3): define colors, fonts and spacing as CSS variables in :root */
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
  /* TODO (Unit 3): lay the recipe cards out with grid or flexbox */
  /* TODO (Unit 3): add :hover / :focus-visible styles and a @media query for phones */`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  // TODO (Unit 1): swap in recipes you actually love
  const SAMPLE_RECIPES = [
    { id: 1, name: "Pancakes", minutes: 20, ingredients: "flour, milk, eggs, sugar", favorite: false },
    { id: 2, name: "Tomato pasta", minutes: 25, ingredients: "pasta, tomatoes, garlic, basil", favorite: false }
  ];

  function App() {
    const [recipes, setRecipes] = useState(SAMPLE_RECIPES);

    return (
      <div>
        {/* TODO (Unit 2): add a <header> with your app's name and a <nav> with 2+ links */}
        <main>
          <h1>CHANGE ME: name your recipe box</h1>
          <p>{recipes.length} recipes saved.</p>
          {/* TODO (Unit 2): add an <img> with alt text for each recipe card */}
          {/* TODO (Unit 4): add a search box that uses .filter() on recipe names */}
          {/* TODO (Unit 4): show each recipe in a RecipeCard component using .map() and a key */}
          {/* TODO (Unit 2): add a <form> with labelled inputs to add a recipe */}
          {/* TODO (Unit 4): save recipes to localStorage with useEffect */}
        </main>
        {/* TODO (Unit 2): add a <footer> */}
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  // ---------------------------------------------------------------- finished examples
  const useLocalStorageSrc = `  function useLocalStorage(key, initial) {
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initial;
    });
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  // Makes a colorful picture as a data URL, so no image files are needed
  function picture(color, emoji, w, h) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '"><rect width="100%" height="100%" fill="' + color + '"/><text x="50%" y="58%" font-size="' + Math.round(h / 2.2) + '" text-anchor="middle" dominant-baseline="middle">' + emoji + '</text></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }`;

  const habitExample = SHARED_HEAD('Streaks — Habit Tracker', `  :root {
    --bg: #f0fdf4;
    --surface: #ffffff;
    --text: #14532d;
    --muted: #4d7c5f;
    --accent: #16a34a;
    --accent-soft: #dcfce7;
    --radius: 14px;
    --font: "Segoe UI", system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font-family: var(--font); }
  header { display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; background: var(--surface); border-bottom: 2px solid var(--accent-soft); }
  .logo { font-weight: 800; font-size: 1.2rem; }
  nav { display: flex; gap: 14px; }
  nav a { color: var(--muted); text-decoration: none; font-weight: 600; }
  nav a:hover, nav a:focus-visible { color: var(--accent); }
  main { max-width: 760px; margin: 0 auto; padding: 20px; display: grid; gap: 20px; }
  .hero { display: flex; gap: 16px; align-items: center; }
  .hero img { width: 96px; height: 96px; border-radius: 50%; }
  .hero h1 { margin: 0 0 4px; }
  section { background: var(--surface); border-radius: var(--radius); padding: 16px; }
  form { display: flex; gap: 8px; flex-wrap: wrap; align-items: flex-end; margin-bottom: 12px; }
  label { display: grid; gap: 4px; font-size: .9rem; font-weight: 600; }
  input, select { padding: 10px; border: 1px solid var(--muted); border-radius: 8px; font: inherit; }
  button { padding: 10px 14px; border: 0; border-radius: 8px; background: var(--accent); color: white; font-weight: 700; cursor: pointer; }
  button:hover, button:focus-visible { filter: brightness(1.1); outline: 2px solid var(--text); }
  .filters { display: flex; gap: 6px; margin-bottom: 10px; }
  .filters button { background: var(--accent-soft); color: var(--text); }
  .filters button[aria-pressed="true"] { background: var(--accent); color: white; }
  ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
  li { display: flex; align-items: center; gap: 10px; padding: 10px; border-radius: 10px; background: var(--bg); }
  li .name { flex: 1; }
  li .streak { font-weight: 700; }
  li .remove { background: transparent; color: var(--muted); }
  .bar { height: 12px; background: var(--accent-soft); border-radius: 99px; overflow: hidden; }
  .bar div { height: 100%; background: var(--accent); transition: width .3s; }
  footer { text-align: center; color: var(--muted); padding: 24px; }
  @media (max-width: 600px) {
    header { flex-direction: column; gap: 8px; }
    form { flex-direction: column; align-items: stretch; }
  }`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  const STARTER_HABITS = [
    { id: 1, name: "Drink 8 glasses of water", category: "Health", done: false, streak: 3 },
    { id: 2, name: "Code for 30 minutes", category: "Learning", done: true, streak: 12 },
    { id: 3, name: "Read 10 pages", category: "Learning", done: false, streak: 0 }
  ];

${useLocalStorageSrc}

  function Header() {
    return (
      <header>
        <span className="logo">🔥 Streaks</span>
        <nav aria-label="Main">
          <a href="#today">Today</a>
          <a href="#progress">Progress</a>
        </nav>
      </header>
    );
  }

  function AddHabitForm({ onAdd }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Health");
    function handleSubmit(e) {
      e.preventDefault();
      if (!name.trim()) return;
      onAdd(name.trim(), category);
      setName("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>New habit
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Stretch" />
        </label>
        <label>Category
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Health</option>
            <option>Learning</option>
            <option>Mind</option>
          </select>
        </label>
        <button type="submit">Add habit</button>
      </form>
    );
  }

  function HabitItem({ habit, onToggle, onRemove }) {
    return (
      <li>
        <input type="checkbox" checked={habit.done} onChange={() => onToggle(habit.id)} aria-label={"Done: " + habit.name} />
        <span className="name">{habit.name} <small>({habit.category})</small></span>
        <span className="streak">🔥 {habit.streak}</span>
        <button className="remove" onClick={() => onRemove(habit.id)} aria-label={"Delete " + habit.name}>✕</button>
      </li>
    );
  }

  function ProgressCard({ habits }) {
    const done = habits.filter(h => h.done).length;
    const pct = habits.length ? Math.round(done / habits.length * 100) : 0;
    return (
      <section id="progress">
        <h2>Today's progress</h2>
        <p>{done} of {habits.length} habits done ({pct}%)</p>
        <div className="bar" role="progressbar" aria-label="Habits done today" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
          <div style={{ width: pct + "%" }}></div>
        </div>
      </section>
    );
  }

  function App() {
    const [habits, setHabits] = useLocalStorage("habits", STARTER_HABITS);
    const [filter, setFilter] = useState("All");

    const addHabit = (name, category) => setHabits([...habits, { id: Date.now(), name, category, done: false, streak: 0 }]);
    const toggle = id => setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done, streak: h.done ? Math.max(0, h.streak - 1) : h.streak + 1 } : h));
    const remove = id => setHabits(habits.filter(h => h.id !== id));
    const shown = habits.filter(h => filter === "All" || (filter === "Done" ? h.done : !h.done));

    return (
      <>
        <Header />
        <main>
          <div className="hero">
            <img src={picture("#bbf7d0", "🌱", 96, 96)} alt="A small green sprout" />
            <div>
              <h1>Build habits that stick</h1>
              <p>Tick off each habit daily and watch your streaks grow.</p>
            </div>
          </div>
          <section id="today">
            <h2>Today</h2>
            <AddHabitForm onAdd={addHabit} />
            <div className="filters" role="group" aria-label="Filter habits">
              {["All", "To do", "Done"].map(f => (
                <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
            {shown.length === 0 ? <p>Nothing here yet.</p> : (
              <ul>
                {shown.map(h => <HabitItem key={h.id} habit={h} onToggle={toggle} onRemove={remove} />)}
              </ul>
            )}
          </section>
          <ProgressCard habits={habits} />
        </main>
        <footer>Made by Jordan Lee with HTML, CSS, JavaScript &amp; React</footer>
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  const portfolioExample = SHARED_HEAD('Jordan Lee — Developer Portfolio', `  :root {
    --bg: #0f172a;
    --surface: #1e293b;
    --text: #e2e8f0;
    --muted: #94a3b8;
    --accent: #38bdf8;
    --radius: 16px;
    --font: "Segoe UI", system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; }
  .logo { font-weight: 800; letter-spacing: .02em; }
  nav { display: flex; gap: 18px; }
  nav a { color: var(--muted); text-decoration: none; font-weight: 600; }
  nav a:hover, nav a:focus-visible { color: var(--accent); }
  main { max-width: 960px; margin: 0 auto; padding: 0 24px; }
  .hero { padding: 48px 0 32px; }
  .hero h1 { font-size: clamp(2rem, 6vw, 3.2rem); line-height: 1.1; margin: 0 0 12px; }
  .hero span { color: var(--accent); }
  .filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 20px; }
  button { font: inherit; cursor: pointer; border-radius: 99px; padding: 6px 14px; border: 1px solid var(--muted); background: transparent; color: var(--text); }
  button:hover, button:focus-visible { border-color: var(--accent); color: var(--accent); }
  button[aria-pressed="true"] { background: var(--accent); color: var(--bg); border-color: var(--accent); }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .card { background: var(--surface); border-radius: var(--radius); overflow: hidden; }
  .card img { width: 100%; display: block; }
  .card div { padding: 14px 16px; }
  .card h3 { margin: 0 0 6px; }
  .tags { color: var(--accent); font-size: .85rem; }
  #contact { padding: 40px 0; }
  form { display: grid; gap: 12px; max-width: 460px; }
  label { display: grid; gap: 4px; font-weight: 600; }
  input, textarea { font: inherit; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--muted); background: var(--surface); color: var(--text); }
  .send { background: var(--accent); color: var(--bg); border: 0; font-weight: 700; justify-self: start; padding: 10px 22px; }
  footer { text-align: center; color: var(--muted); padding: 32px; }
  @media (max-width: 720px) {
    .grid { grid-template-columns: 1fr; }
    header { flex-direction: column; gap: 8px; }
  }`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  const PROJECTS = [
    { id: 1, title: "Streaks", description: "A habit tracker with daily check-offs and streak counts.", tags: ["React"], color: "#14532d", emoji: "🔥" },
    { id: 2, title: "Profile page", description: "My first responsive website.", tags: ["HTML", "CSS"], color: "#7c2d12", emoji: "🙂" },
    { id: 3, title: "To-do app", description: "Add, complete and delete tasks — saved in the browser.", tags: ["JavaScript"], color: "#312e81", emoji: "✅" },
    { id: 4, title: "Weather finder", description: "Searches a free weather API with fetch.", tags: ["JavaScript", "API"], color: "#0c4a6e", emoji: "⛅" }
  ];

${useLocalStorageSrc}

  function Header() {
    return (
      <header>
        <span className="logo">JL.</span>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }

  function ProjectCard({ project }) {
    return (
      <article className="card">
        <img src={picture(project.color, project.emoji, 400, 220)} alt={project.title + " preview"} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="tags">{project.tags.join(" · ")}</span>
        </div>
      </article>
    );
  }

  function Projects() {
    const [tag, setTag] = useState("All");
    const tags = ["All", ...new Set(PROJECTS.flatMap(p => p.tags))];
    const shown = PROJECTS.filter(p => tag === "All" || p.tags.includes(tag));
    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className="filters" role="group" aria-label="Filter by technology">
          {tags.map(t => <button key={t} aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>)}
        </div>
        <div className="grid">
          {shown.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    );
  }

  function Contact() {
    const [messages, setMessages] = useLocalStorage("messages", []);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const update = e => setForm({ ...form, [e.target.name]: e.target.value });
    function handleSubmit(e) {
      e.preventDefault();
      setMessages([...messages, { ...form, id: Date.now() }]);
      setForm({ name: "", email: "", message: "" });
    }
    return (
      <section id="contact">
        <h2>Contact me</h2>
        <form onSubmit={handleSubmit}>
          <label>Name <input name="name" value={form.name} onChange={update} required /></label>
          <label>Email <input name="email" type="email" value={form.email} onChange={update} required /></label>
          <label>Message <textarea name="message" rows="4" value={form.message} onChange={update} required /></label>
          <button className="send" type="submit">Send</button>
        </form>
        {messages.length > 0 && <p>✅ {messages.length} message(s) saved. Thanks!</p>}
      </section>
    );
  }

  function App() {
    return (
      <>
        <Header />
        <main>
          <section className="hero">
            <h1>Hi, I'm Jordan. I build <span>friendly web apps</span>.</h1>
            <p>Front-end developer in training: HTML, CSS, JavaScript and React.</p>
          </section>
          <Projects />
          <Contact />
        </main>
        <footer>© 2026 Jordan Lee · Built with React</footer>
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  const recipeExample = SHARED_HEAD('Pantry — Recipe Box', `  :root {
    --bg: #fff7ed;
    --surface: #ffffff;
    --text: #431407;
    --muted: #9a3412;
    --accent: #ea580c;
    --accent-soft: #ffedd5;
    --radius: 16px;
    --font: Georgia, "Times New Roman", serif;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; }
  h1, h2, h3, .logo { font-family: var(--font); }
  header { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; background: var(--surface); box-shadow: 0 2px 8px rgba(0,0,0,.06); }
  .logo { font-size: 1.4rem; font-weight: 700; }
  nav { display: flex; gap: 16px; }
  nav a { color: var(--muted); font-weight: 600; text-decoration: none; }
  nav a:hover, nav a:focus-visible { color: var(--accent); text-decoration: underline; }
  main { max-width: 980px; margin: 0 auto; padding: 22px; }
  .toolbar { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-bottom: 16px; }
  .toolbar input { flex: 1; min-width: 180px; }
  input, textarea { font: inherit; padding: 10px; border: 1px solid #fdba74; border-radius: 10px; background: var(--surface); }
  button { font: inherit; padding: 9px 14px; border-radius: 10px; border: 0; background: var(--accent); color: white; font-weight: 700; cursor: pointer; }
  button:hover, button:focus-visible { filter: brightness(1.1); outline: 2px solid var(--text); }
  .ghost { background: var(--accent-soft); color: var(--text); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 16px; }
  .card { background: var(--surface); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; }
  .card img { width: 100%; display: block; }
  .card .body { padding: 12px 14px; flex: 1; }
  .card h3 { margin: 0 0 4px; }
  .card .row { display: flex; justify-content: space-between; align-items: center; padding: 0 14px 12px; }
  #add { margin-top: 30px; background: var(--surface); padding: 18px; border-radius: var(--radius); }
  form { display: grid; gap: 10px; }
  label { display: grid; gap: 4px; font-weight: 600; }
  footer { text-align: center; color: var(--muted); padding: 30px; }
  @media (max-width: 600px) {
    header { flex-direction: column; gap: 6px; }
  }`) + `<script type="text/babel">
  const { useState, useEffect } = React;

  const SAMPLE_RECIPES = [
    { id: 1, name: "Fluffy pancakes", minutes: 20, ingredients: "flour, milk, eggs, sugar, butter", favorite: true, emoji: "🥞", color: "#fde68a" },
    { id: 2, name: "Tomato basil pasta", minutes: 25, ingredients: "pasta, tomatoes, garlic, basil, olive oil", favorite: false, emoji: "🍝", color: "#fecaca" },
    { id: 3, name: "Veggie tacos", minutes: 30, ingredients: "tortillas, beans, peppers, avocado, salsa", favorite: false, emoji: "🌮", color: "#bbf7d0" }
  ];
  const EMOJIS = ["🍲", "🥗", "🍛", "🥘", "🍜"];

${useLocalStorageSrc}

  function Header() {
    return (
      <header>
        <span className="logo">🧺 Pantry</span>
        <nav aria-label="Main">
          <a href="#recipes">Recipes</a>
          <a href="#add">Add a recipe</a>
        </nav>
      </header>
    );
  }

  function RecipeCard({ recipe, onFavorite, onDelete }) {
    return (
      <article className="card">
        <img src={picture(recipe.color, recipe.emoji, 300, 150)} alt={"Illustration of " + recipe.name} />
        <div className="body">
          <h3>{recipe.name}</h3>
          <p><small>⏱️ {recipe.minutes} min · {recipe.ingredients}</small></p>
        </div>
        <div className="row">
          <button className="ghost" aria-pressed={recipe.favorite} onClick={() => onFavorite(recipe.id)}>
            {recipe.favorite ? "★ Favorite" : "☆ Favorite"}
          </button>
          <button className="ghost" onClick={() => onDelete(recipe.id)} aria-label={"Delete " + recipe.name}>🗑️</button>
        </div>
      </article>
    );
  }

  function AddRecipeForm({ onAdd }) {
    const [name, setName] = useState("");
    const [minutes, setMinutes] = useState(15);
    const [ingredients, setIngredients] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      if (!name.trim()) return;
      onAdd({ name: name.trim(), minutes: Number(minutes), ingredients });
      setName(""); setMinutes(15); setIngredients("");
    }
    return (
      <section id="add">
        <h2>Add a recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>Recipe name <input value={name} onChange={e => setName(e.target.value)} required /></label>
          <label>Minutes <input type="number" min="1" value={minutes} onChange={e => setMinutes(e.target.value)} /></label>
          <label>Ingredients <textarea rows="2" value={ingredients} onChange={e => setIngredients(e.target.value)} /></label>
          <button type="submit">Save recipe</button>
        </form>
      </section>
    );
  }

  function App() {
    const [recipes, setRecipes] = useLocalStorage("recipes", SAMPLE_RECIPES);
    const [query, setQuery] = useState("");
    const [onlyFavs, setOnlyFavs] = useState(false);

    const add = r => setRecipes([...recipes, { ...r, id: Date.now(), favorite: false, emoji: EMOJIS[recipes.length % EMOJIS.length], color: "#e0e7ff" }]);
    const favorite = id => setRecipes(recipes.map(r => r.id === id ? { ...r, favorite: !r.favorite } : r));
    const remove = id => setRecipes(recipes.filter(r => r.id !== id));
    const shown = recipes.filter(r =>
      r.name.toLowerCase().includes(query.toLowerCase()) && (!onlyFavs || r.favorite));

    return (
      <>
        <Header />
        <main>
          <h1>What are we cooking?</h1>
          <div className="toolbar" id="recipes">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search recipes…" aria-label="Search recipes" />
            <button className="ghost" aria-pressed={onlyFavs} onClick={() => setOnlyFavs(!onlyFavs)}>★ Favorites only</button>
          </div>
          {shown.length === 0 ? <p>No recipes match. Try another search!</p> : (
            <div className="grid">
              {shown.map(r => <RecipeCard key={r.id} recipe={r} onFavorite={favorite} onDelete={remove} />)}
            </div>
          )}
          <AddRecipeForm onAdd={add} />
        </main>
        <footer>Pantry · made with HTML, CSS, JavaScript &amp; React</footer>
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>`;

  // ---------------------------------------------------------------- requirements (checked automatically)
  // unit = which unit's milestone it belongs to. test = runs in the live page; src = regex on your code.
  const REQUIREMENTS = [
    { unit: 0, name: 'Your project runs with no errors', test: `const r = document.getElementById('root'); return !!r && r.children.length > 0 && __errors.length === 0 && !__logs.some(l => l.startsWith('SyntaxError'));`, hint: 'Check the console under the preview for a red error and the line it points to.' },
    { unit: 0, name: 'Every "CHANGE ME" placeholder is replaced', src: 'CHANGE ME', not: true, hint: 'Search your code for CHANGE ME (there are a few, including the <title>).' },
    { unit: 0, name: 'The browser tab has a real [[<title>]]', src: '<title>\\s*[^<\\s][^<]{2,}</title>', hint: 'Give the <title> in the <head> your app\'s name.' },

    { unit: 1, name: 'Uses [[<header>]], [[<main>]] and [[<footer>]]', test: `return !!document.querySelector('header') && !!document.querySelector('main') && !!document.querySelector('footer');`, hint: 'Wrap the top bar in <header> and add a <footer> at the bottom.' },
    { unit: 1, name: 'Has a [[<nav>]] with 2 or more links', test: `return document.querySelectorAll('nav a').length >= 2;`, hint: 'Inside your header: <nav><a href="#one">One</a><a href="#two">Two</a></nav>.' },
    { unit: 1, name: 'Has exactly one [[<h1>]]', test: `return document.querySelectorAll('h1').length === 1;`, hint: 'One main heading per page; use <h2> for sections.' },
    { unit: 1, name: 'Has at least one image, and every image has alt text', test: `const imgs = [...document.querySelectorAll('img')]; return imgs.length > 0 && imgs.every(i => (i.getAttribute('alt') || '').trim().length > 0);`, hint: 'Add <img src="…" alt="describe it" />. The picture() helper from the example makes images with no files.' },
    { unit: 1, name: 'Has a form where every field has a label', test: `const f = document.querySelector('form'); if (!f) return false; const fields = [...f.querySelectorAll('input, select, textarea')].filter(el => !['submit', 'button', 'hidden'].includes(el.type)); return fields.length > 0 && fields.every(el => (el.labels && el.labels.length > 0) || el.getAttribute('aria-label'));`, hint: 'Wrap each input in a <label>, or use <label htmlFor="id"> with a matching id.' },

    { unit: 2, name: 'Defines 3+ CSS variables (e.g. [[--accent: #f60;]])', src: '--[\\w-]+\\s*:', min: 3, hint: 'Add them inside :root { } at the top of your <style>.' },
    { unit: 2, name: 'Uses those variables 3+ times with [[var(--…)]]', src: 'var\\(--', min: 3, hint: 'e.g. color: var(--text); background: var(--bg);' },
    { unit: 2, name: 'Uses Flexbox or Grid for layout', src: 'display\\s*:\\s*(flex|grid)', hint: 'e.g. header { display: flex; justify-content: space-between; }' },
    { unit: 2, name: 'Has a responsive [[@media]] query', src: '@media[^{]*\\(\\s*(max|min)-width', hint: 'e.g. @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }' },
    { unit: 2, name: 'Has [[:hover]] or [[:focus-visible]] styles', src: ':hover|:focus', hint: 'Show people what\'s clickable: button:hover, a:focus-visible { … }' },

    { unit: 3, name: 'Has 4+ components (App plus 3 more)', src: '(function\\s+[A-Z]\\w*\\s*\\(|const\\s+[A-Z]\\w*\\s*=\\s*\\()', min: 4, hint: 'Split your page into pieces such as Header, a card component and a form component.' },
    { unit: 3, name: 'At least one component receives props', src: '(function\\s+[A-Z]\\w*\\s*\\(\\s*\\{|const\\s+[A-Z]\\w*\\s*=\\s*\\(\\s*\\{)', hint: 'e.g. function HabitItem({ habit, onToggle }) { … }' },
    { unit: 3, name: 'Uses [[useState]] (2+ times)', src: 'useState\\(', min: 2, hint: 'Keep your list and your form inputs in state.' },
    { unit: 3, name: 'Renders a list with [[.map()]]', src: '\\.map\\(', hint: 'e.g. {items.map(item => <Card key={item.id} item={item} />)}' },
    { unit: 3, name: 'List items have a [[key]]', src: 'key=\\{', hint: 'Add key={item.id} to the element returned by .map().' },
    { unit: 3, name: 'Uses [[.filter()]] (search, filter buttons or delete)', src: '\\.filter\\(', hint: 'e.g. const shown = items.filter(i => i.name.includes(query));' },
    { unit: 3, name: 'Uses [[useEffect]]', src: 'useEffect\\(', hint: 'Use it to save your data whenever it changes.' },
    { unit: 3, name: 'Saves data with [[localStorage.setItem]]', src: 'localStorage\\.setItem', hint: 'Copy the useLocalStorage hook from React Unit 5.' },
    { unit: 3, name: 'No React warnings in the console', test: `return !__logs.some(l => l.startsWith('Warning:'));`, hint: 'Read the warning text: it usually names the problem (often a missing key).' }
  ];

  COURSES.capstone = {
    id: 'capstone',
    level: 'Capstone',
    title: 'Capstone: Build Your Portfolio App',
    tagline: 'Use HTML, CSS, JavaScript and React together to build and ship a real app.',
    description: 'This is where you prove it. You\'ll pick a project, then build it step by step across 5 units — structure, style, behavior and launch — until it\'s a polished app live on the internet with a link you can put on your resume. Your project is saved as you go, and the app checks each requirement for you.',
    lang: 'react',
    project: true,
    certTitle: 'Capstone Project',
    skills: 'planning, semantic HTML, CSS design systems and responsive layout, JavaScript, React components and hooks, data persistence, accessibility and deployment',
    resume: 'PROJECTS\n{name} — {url}\nA responsive web app built with React, JavaScript, HTML and CSS.\n• Built reusable React components with props, state (useState) and effects (useEffect)\n• Saved user data in the browser with a custom useLocalStorage hook\n• Designed a responsive, accessible layout with CSS variables, Flexbox/Grid and media queries\n• Deployed with Git and GitHub Pages',
    starters: [
      { id: 'portfolio', name: 'Portfolio site', emoji: '🧑‍💻', blurb: 'Show off your projects with filter buttons by technology and a contact form. The classic developer portfolio.', starter: portfolioStarter, example: portfolioExample },
      { id: 'habits', name: 'Habit tracker', emoji: '🔥', blurb: 'Add daily habits, tick them off, track streaks and see your progress. A practical everyday app.', starter: habitStarter, example: habitExample },
      { id: 'recipes', name: 'Recipe box', emoji: '🍝', blurb: 'Save recipes, search them, mark favorites and add your own. Great if you love food.', starter: recipeStarter, example: recipeExample }
    ],
    requirements: REQUIREMENTS,
    selfReview: [
      'I tested it at phone width (about 390px) and nothing is cut off or too small',
      'I can use every button, link and field with only the keyboard (Tab, Enter, Space)',
      'I wrote a README.md for the repository (what it is, a screenshot, what I learned)',
      'I pushed it to GitHub and turned on GitHub Pages'
    ],
    units: [
      // ---------------- Unit 1 ----------------
      {
        title: 'Plan & Set Up',
        intro: 'Pick your project, plan it like a pro, and make it yours.',
        milestone: 'Pick a starter in the workspace, then replace every <b>CHANGE ME</b> (including the <code>&lt;title&gt;</code>) with your own app name and words.',
        lessons: [
          {
            title: 'Welcome to your capstone',
            body: `
<p>Everything you've learned comes together here. You'll build <b>one real app</b> over five units:</p>
<ol>
<li><b>Plan & set up</b> — choose a project and make it yours.</li>
<li><b>Structure</b> — semantic HTML inside your React components.</li>
<li><b>Style</b> — a real design system in CSS, responsive on every screen.</li>
<li><b>Behavior</b> — React components, state, lists and saved data.</li>
<li><b>Polish & ship</b> — test, fix, write a README and put it online.</li>
</ol>
<p>Each unit ends with a <b>🛠️ Milestone</b>: a list of requirements the app checks automatically as you build. Pass the milestone and the pop quiz to unlock the next unit. At the end, a <b>Project Review</b> checks everything and gives you your capstone certificate — with your app's live link on it.</p>
<h3>Pick one of three starters</h3>
<ul>
<li><b>🧑‍💻 Portfolio site</b> — the classic. Projects you've built, filterable by technology, plus a contact form.</li>
<li><b>🔥 Habit tracker</b> — add habits, tick them off daily, watch streaks and progress.</li>
<li><b>🍝 Recipe box</b> — save, search and favorite recipes.</li>
</ul>
<p>Each starter is a small working app with <b>TODO</b> comments that tell you what to add in which unit. You can also peek at a <b>finished example</b> of each one anytime — but try it yourself first, and make it look like <i>yours</i>, not the example.</p>
<div class="callout tip">💡 Can't decide? Build the <b>Portfolio</b>. Employers love seeing one, and you can list your other CodePath projects on it.</div>`,
            pic: 'stackLayers',
            cap: 'Your capstone uses every layer you learned: HTML, CSS, JavaScript and React.'
          },
          {
            title: 'Plan before you code',
            body: `
<p>Professional developers don't open the editor first. They work out <b>who</b> the app is for and <b>what</b> it must do. Spend 15 minutes on this — it will save you hours.</p>
<h3>1. Write 3–5 user stories</h3>
<p>A user story describes a feature from the user's side, in one sentence:</p>
{{{
As a [type of user], I want to [do something] so that [benefit].
}}}
<p>Examples for the habit tracker:</p>
<ul>
<li>As a student, I want to add a habit so that I can track something new.</li>
<li>As a student, I want to tick off a habit so that I can see my streak grow.</li>
<li>As a busy person, I want to see only unfinished habits so that I know what's left today.</li>
</ul>
<h3>2. Sketch a wireframe</h3>
<p>On paper or in any drawing app, draw boxes for each part of the screen: header, main content, cards, form, footer. Draw a <b>phone</b> version too. Then circle each box that repeats or does one job — those become your <b>components</b>.</p>
<h3>3. List your data</h3>
<p>What does one item look like? Write it as a JavaScript object:</p>
{{{
{ id: 1, name: "Read 10 pages", category: "Learning", done: false, streak: 4 }
}}}`,
            pic: 'userStories',
            cap: 'User stories turn into features. Features turn into components.'
          },
          {
            title: 'Set up your workspace',
            body: `
<p>Open the <b>🛠️ Project workspace</b> (button below, or from the course page) and pick your starter. The workspace has:</p>
<ul>
<li>A big <b>code editor</b> on the left and a <b>live preview</b> on the right (below on phones). Press <b>▶ Run</b> or <b>Ctrl/Cmd + Enter</b> to update the preview.</li>
<li><b>Milestone checks</b> — press <b>Check milestone</b> to see which requirements pass. Each failing one has a hint.</li>
<li>Your code <b>saves automatically</b> on this device as you type.</li>
<li><b>Copy code</b> and <b>Download</b> buttons so you can move your project into VS Code later.</li>
</ul>
<p>Your project is one HTML file. Look at how it's organized — this is the same structure React projects use, just in one file:</p>
<ul>
<li>[[<head>]] — the [[<title>]], and [[<script>]] tags that load React (used when you host it yourself).</li>
<li>[[<style>]] — all your CSS.</li>
<li>[[<div id="root">]] — where React draws your app.</li>
<li>[[<script type="text/babel">]] — your React components.</li>
</ul>
<h3>Your Unit 1 milestone</h3>
<p>Make it yours: find every <b>CHANGE ME</b> and replace it with your own app name and text. Change the starter data (habits, projects or recipes) to real things from your life.</p>
<div class="callout">📌 Use <b>Ctrl/Cmd + F</b> in your browser to find "CHANGE ME" quickly, or read through the code — it's short!</div>`,
            pic: 'setup',
            cap: 'Editor on one side, live preview on the other. Same as VS Code + browser.'
          }
        ],
        recap: [
          'Your capstone is one app built across 5 units: plan, structure, style, behavior, ship.',
          'Each unit has a 🛠️ <b>Milestone</b> the app checks automatically, plus a pop quiz.',
          'Plan first: <b>user stories</b> ("As a… I want to… so that…"), a <b>wireframe</b> (desktop and phone), and the shape of your <b>data</b>.',
          'Boxes that repeat or do one job in your wireframe become React <b>components</b>.',
          'Your project is a single HTML file: [[<head>]], [[<style>]], [[<div id="root">]] and a [[text/babel]] script.'
        ],
        quiz: [
          { q: 'Which is a well-written user story?', options: ['Add a button', 'As a reader, I want to save recipes so that I can find them later', 'The app should be good', 'Use React and CSS'], answer: 1, why: 'It names who, what and why.' },
          { q: 'What is a wireframe?', options: ['A finished design with colors', 'A simple sketch of the layout using boxes', 'A type of CSS border', 'A React hook'], answer: 1, why: 'Wireframes are quick layout sketches made before coding.' },
          { q: 'In your wireframe, what usually becomes a React component?', options: ['Every single word', 'A box that repeats or does one job', 'Only the footer', 'Nothing — components come from npm'], answer: 1, why: 'Repeating, self-contained pieces make great components.' },
          { q: 'Where does React draw your app in the page?', options: ['Inside [[<head>]]', 'Inside [[<div id="root">]]', 'Inside [[<style>]]', 'In the browser tab title'], answer: 1, why: '[[createRoot(document.getElementById("root"))]] renders into that div.' },
          { q: 'Why plan before coding?', options: ['It is required by GitHub', 'It saves time by deciding what to build before building it', 'React won\'t run without a plan', 'Plans make the app faster'], answer: 1, why: 'Clear goals and a sketch prevent rewriting code later.' }
        ]
      },
      // ---------------- Unit 2 ----------------
      {
        title: 'Structure: HTML in Your Components',
        intro: 'Give your app a solid, accessible skeleton.',
        milestone: 'Add a <code>&lt;header&gt;</code> with a <code>&lt;nav&gt;</code> (2+ links), keep exactly one <code>&lt;h1&gt;</code>, add images with alt text, a <code>&lt;form&gt;</code> where every field has a label, and a <code>&lt;footer&gt;</code>.',
        lessons: [
          {
            title: 'Semantic layout',
            body: `
<p>React components return JSX — and JSX is HTML. Good HTML structure still matters: it helps screen readers, search engines and other developers understand your app.</p>
<p>Give your app these <b>landmarks</b>:</p>
<ul>
<li>[[<header>]] — your app name/logo and a [[<nav>]] with links to the main sections.</li>
<li>[[<main>]] — the main content (only one per page).</li>
<li>[[<section>]] — each themed area, usually with an [[<h2>]].</li>
<li>[[<footer>]] — credits, your name, links.</li>
</ul>
<p>Nav links can point to sections on the same page using ids: [[<a href="#contact">]] jumps to [[<section id="contact">]].</p>
{{{
function Header() {
  return (
    <header>
      <span className="logo">🔥 Streaks</span>
      <nav aria-label="Main">
        <a href="#today">Today</a>
        <a href="#progress">Progress</a>
      </nav>
    </header>
  );
}
}}}
<p>Then use it in [[App]]: [[<Header />]]. Keep <b>exactly one</b> [[<h1>]] — your page's main title — and use [[<h2>]] for sections.</p>`,
            pic: 'pageStructure',
            cap: 'Landmarks give your page a clear outline.'
          },
          {
            title: 'Accessible images and forms',
            body: `
<p><b>Images:</b> every [[<img>]] needs [[alt]] text that describes it. In JSX remember to self-close: [[<img src="…" alt="…" />]].</p>
<p>No image files? The finished examples use a small helper called [[picture(color, emoji, width, height)]] that draws a colorful image in code. Copy it from an example into your project:</p>
{{{
function picture(color, emoji, w, h) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">'
    + '<rect width="100%" height="100%" fill="' + color + '"/>'
    + '<text x="50%" y="58%" font-size="' + Math.round(h / 2.2) + '" text-anchor="middle" dominant-baseline="middle">' + emoji + '</text></svg>';
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
// <img src={picture("#fde68a", "🥞", 300, 150)} alt="Pancakes" />
}}}
<p><b>Forms:</b> every field needs a label. The easiest way in JSX is to wrap the input inside the label:</p>
{{{
<form onSubmit={handleSubmit}>
  <label>Habit name
    <input value={name} onChange={e => setName(e.target.value)} />
  </label>
  <button type="submit">Add</button>
</form>
}}}
<p>For a search box with no visible label, use [[aria-label="Search recipes"]] instead.</p>`,
            pic: 'formParts',
            cap: 'Labels and alt text make your app usable by everyone — and employers check for them.'
          }
        ],
        recap: [
          'Use landmarks: [[<header>]] with a [[<nav>]], one [[<main>]], [[<section>]]s with [[<h2>]], and a [[<footer>]].',
          'Keep exactly one [[<h1>]] per page.',
          'Same-page links: [[<a href="#contact">]] jumps to [[id="contact"]].',
          'Every [[<img />]] needs meaningful [[alt]] text.',
          'Every form field needs a label — wrap it in [[<label>]] or use [[aria-label]].'
        ],
        quiz: [
          { q: 'Which element should contain your site navigation links?', options: ['[[<footer>]]', '[[<nav>]]', '[[<aside>]]', '[[<title>]]'], answer: 1, why: '[[<nav>]] marks the main navigation, usually inside [[<header>]].' },
          { q: 'How many [[<h1>]] elements should a page have?', options: ['None', 'Exactly one', 'One per section', 'As many as you like'], answer: 1, why: 'One main heading; sections use [[<h2>]].' },
          { q: 'What does [[<a href="#about">]] do?', options: ['Opens a new website', 'Jumps to the element with [[id="about"]] on the same page', 'Downloads a file', 'Nothing'], answer: 1, why: 'A hash link scrolls to the matching id.' },
          { q: 'Which JSX image is correct and accessible?', options: ['[[<img src={url}>]]', '[[<img src={url} alt="Bowl of ramen" />]]', '[[<image src={url} />]]', '[[<img alt="" src={url}></img>]] for a photo of food'], answer: 1, why: 'Self-closing, with descriptive alt text.' },
          { q: 'A search input has no visible label. What should you add?', options: ['Nothing', '[[aria-label="Search recipes"]]', '[[title="input"]]', 'A [[<br />]]'], answer: 1, why: '[[aria-label]] gives screen readers a name for the field.' }
        ]
      },
      // ---------------- Unit 3 ----------------
      {
        title: 'Style: Design System & Layout',
        intro: 'Make it look professional on every screen.',
        milestone: 'Define 3+ CSS variables and use them, lay things out with Flexbox or Grid, add a responsive <code>@media</code> query, and add <code>:hover</code> / <code>:focus-visible</code> styles.',
        lessons: [
          {
            title: 'A mini design system with CSS variables',
            body: `
<p>Professional apps don't pick colors one element at a time. They decide a small set of <b>design tokens</b> — colors, fonts, spacing, corner radius — and reuse them everywhere. In CSS, tokens are <b>custom properties</b> (CSS variables):</p>
{{{
:root {
  --bg: #fff7ed;
  --text: #431407;
  --accent: #ea580c;
  --radius: 16px;
  --font: Georgia, serif;
}
body { background: var(--bg); color: var(--text); }
button { background: var(--accent); border-radius: var(--radius); }
}}}
<p>Change [[--accent]] once and the whole app updates. Tips for a design that looks intentional:</p>
<ul>
<li>Pick <b>one accent color</b> and use it only for important things (buttons, links, highlights).</li>
<li>Keep enough <b>contrast</b> between text and background (dark text on light, or light on dark).</li>
<li>Use at most <b>two fonts</b>: one for headings, one for body text.</li>
<li>Use consistent spacing (e.g. 8, 16, 24, 32px).</li>
</ul>`,
            pic: 'designTokens',
            cap: 'Decide your tokens once, then reuse them with [[var(--name)]].'
          },
          {
            title: 'Layout and responsive design',
            body: `
<p>Use the layout tools from the Beginner course:</p>
<ul>
<li><b>Flexbox</b> for rows of things: header bars, toolbars, a row of buttons.
{{{
header { display: flex; justify-content: space-between; align-items: center; }
}}}</li>
<li><b>Grid</b> for cards:
{{{
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
}}}
Or, without needing a media query: [[grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));]]</li>
</ul>
<p>Then make it <b>responsive</b> with a media query:</p>
{{{
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
  header { flex-direction: column; gap: 8px; }
}
}}}
<p>Finally, show people what they can click with <b>interactive states</b>:</p>
{{{
button:hover, button:focus-visible { filter: brightness(1.1); outline: 2px solid var(--text); }
a:hover, a:focus-visible { color: var(--accent); }
}}}
<p>[[:focus-visible]] shows the outline for keyboard users — an important accessibility detail.</p>
<div class="callout tip">💡 On a computer, make your browser window narrow to test the phone layout. In Chrome DevTools, the 📱 "device toolbar" button shows exact phone sizes.</div>`,
            pic: 'responsive',
            cap: 'Side by side on wide screens, stacked on phones.'
          }
        ],
        recap: [
          'Design tokens = CSS variables in [[:root]]: [[--accent: #ea580c;]], used with [[var(--accent)]].',
          'One accent color, good contrast, at most two fonts, consistent spacing.',
          'Flexbox for rows ([[display: flex]]), Grid for cards ([[display: grid]]).',
          'Responsive: [[@media (max-width: 600px) { … }]] or [[repeat(auto-fill, minmax(…))]].',
          '[[:hover]] and [[:focus-visible]] styles show what\'s clickable, for mouse and keyboard users.'
        ],
        quiz: [
          { q: 'How do you use the CSS variable [[--accent]]?', options: ['[[color: --accent;]]', '[[color: var(--accent);]]', '[[color: $accent;]]', '[[color: {accent};]]'], answer: 1, why: 'Read a custom property with [[var()]].' },
          { q: 'Why define colors as variables?', options: ['They load faster', 'Change them in one place and the whole app updates consistently', 'Browsers require it', 'They work only in React'], answer: 1, why: 'Tokens keep the design consistent and easy to change.' },
          { q: 'Which is best for a gallery of cards?', options: ['[[display: grid]]', '[[display: inline]]', '[[float: left]]', 'A table'], answer: 0, why: 'Grid is built for two-dimensional card layouts.' },
          { q: 'What does [[:focus-visible]] help with?', options: ['Printing', 'Showing keyboard users which element is focused', 'Hiding elements', 'Animations'], answer: 1, why: 'It styles the focused element when navigating by keyboard.' },
          { q: 'What does [[repeat(auto-fill, minmax(230px, 1fr))]] do?', options: ['Always 3 columns', 'Fits as many columns as possible, each at least 230px wide', 'Repeats an image', 'Creates rows only'], answer: 1, why: 'It automatically adapts the number of columns to the screen width.' }
        ]
      },
      // ---------------- Unit 4 ----------------
      {
        title: 'Behavior: React, State & Data',
        intro: 'Bring it to life with components, state, lists and saved data.',
        milestone: 'Split your app into 4+ components (one with props), use <code>useState</code>, render a list with <code>.map()</code> and <code>key</code>, use <code>.filter()</code>, and save data with <code>useEffect</code> + <code>localStorage</code> — with no React warnings.',
        lessons: [
          {
            title: 'Components, props and lists',
            body: `
<p>Now turn your wireframe's boxes into components. A good split for any of the three starters:</p>
<div class="table-wrap"><table class="simple">
<tr><th>Starter</th><th>Components</th></tr>
<tr><td>Portfolio</td><td>[[Header]], [[ProjectCard]], [[Projects]], [[Contact]], [[App]]</td></tr>
<tr><td>Habit tracker</td><td>[[Header]], [[AddHabitForm]], [[HabitItem]], [[ProgressCard]], [[App]]</td></tr>
<tr><td>Recipe box</td><td>[[Header]], [[RecipeCard]], [[AddRecipeForm]], [[App]]</td></tr>
</table></div>
<p>The repeating item gets its data through <b>props</b>, and the list is rendered with [[.map()]] and a [[key]]:</p>
{{{
function HabitItem({ habit, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={habit.done}
             onChange={() => onToggle(habit.id)} aria-label={"Done: " + habit.name} />
      {habit.name}
    </li>
  );
}

// in App:
<ul>
  {habits.map(h => <HabitItem key={h.id} habit={h} onToggle={toggle} />)}
</ul>
}}}`,
            pic: 'componentTree',
            cap: 'Your wireframe boxes become a component tree.'
          },
          {
            title: 'State, filtering and saving',
            body: `
<p>Keep your main list in state in [[App]] (lifted up so every component can use it), and update it with new arrays:</p>
{{{
const add = item => setItems([...items, { ...item, id: Date.now() }]);
const toggle = id => setItems(items.map(i => i.id === id ? { ...i, done: !i.done } : i));
const remove = id => setItems(items.filter(i => i.id !== id));
}}}
<p>Add a <b>filter</b> — search text or buttons — and calculate what to show (don't store it in state):</p>
{{{
const [query, setQuery] = useState("");
const shown = items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()));
}}}
<p>Finally, make data <b>survive a refresh</b> with the [[useLocalStorage]] hook from React Unit 5. Paste it above your components, then swap [[useState]] for it:</p>
{{{
const [items, setItems] = useLocalStorage("items", STARTER_ITEMS);
}}}
<div class="callout">📌 The preview here can't keep data after you press Run (it's a safe sandbox), but on GitHub Pages your data will truly be saved in the browser.</div>
<p>Run your app and look at the console under the preview. If React prints a <b>Warning</b>, read it — it usually tells you exactly what's wrong (most often a missing [[key]]).</p>`,
            pic: 'stateCycle',
            cap: 'User acts → state updates → React re-renders → the effect saves it.'
          }
        ],
        recap: [
          'Turn wireframe boxes into components; give repeating items data through <b>props</b>.',
          'Render lists with [[.map()]] and a unique [[key]].',
          'Keep the main list in [[App]]; update it with new arrays: spread to add, [[map]] to change, [[filter]] to remove.',
          'Calculate filtered lists from state instead of storing them.',
          'Persist data with [[useLocalStorage]] ([[useState]] + [[useEffect]] + [[localStorage.setItem]]). Fix any React warnings.'
        ],
        quiz: [
          { q: 'Where should the main list of items live if several components use it?', options: ['In each component', 'In App (the shared parent)', 'In the CSS', 'In a <footer>'], answer: 1, why: 'Lift shared state to the closest common parent.' },
          { q: 'Which line correctly deletes the item with [[id]]?', options: ['[[items.splice(id, 1)]]', '[[setItems(items.filter(i => i.id !== id))]]', '[[delete items[id]]]', '[[setItems(items.pop())]]'], answer: 1, why: 'filter returns a new array without that item.' },
          { q: 'Should the search-filtered list be stored in state?', options: ['Yes', 'No — calculate it from the items and the query each render', 'Only on phones', 'Only if it is empty'], answer: 1, why: 'Derived data should be calculated, not duplicated in state.' },
          { q: 'Which hook saves data to localStorage when it changes?', options: ['[[useState]] alone', '[[useEffect]] (often inside a custom useLocalStorage hook)', '[[useKey]]', '[[useStorage]] (built in)'], answer: 1, why: 'An effect that runs when the data changes writes it to storage.' },
          { q: 'React prints "Each child in a list should have a unique key". What do you fix?', options: ['Add [[key={item.id}]] to the element returned by [[.map()]]', 'Remove the list', 'Rename the component', 'Add more CSS'], answer: 0, why: 'Every element created in a list needs a stable unique key.' }
        ]
      },
      // ---------------- Unit 5 ----------------
      {
        title: 'Polish & Ship',
        intro: 'Test it, fix it, document it, and put it online.',
        milestone: 'Tick the four launch checks in the workspace (phone test, keyboard test, README, GitHub Pages) and paste your live link.',
        lessons: [
          {
            title: 'Test and polish',
            body: `
<p>Before launch, test like a user and fix what you find:</p>
<ul>
<li><b>📱 Phone width</b> — shrink your browser or use DevTools' device toolbar at 390px. Nothing should be cut off or need sideways scrolling. Buttons should be easy to tap (about 44px tall).</li>
<li><b>⌨️ Keyboard only</b> — put the mouse away. Press <b>Tab</b> through the page: can you see where you are (focus outline)? Can you reach and use every button and field with <b>Enter</b>/<b>Space</b>?</li>
<li><b>🐞 Console</b> — no red errors or yellow warnings.</li>
<li><b>🧪 Edge cases</b> — what happens with an empty list? A very long name? Submitting an empty form? Show friendly messages ("Nothing here yet").</li>
<li><b>✍️ Words</b> — clear labels and button text ("Add habit", not "Submit"). Check spelling.</li>
</ul>
<p>Small details like empty states, focus outlines and good button text are what make an app feel <b>professional</b>.</p>`,
            pic: 'devtools',
            cap: 'DevTools: device toolbar for phone sizes, Console for errors.'
          },
          {
            title: 'Ship it: GitHub Pages, README and resume',
            body: `
<h3>1. Move it to VS Code</h3>
<p>In the workspace press <b>⬇ Download</b> (or <b>Copy code</b> and paste into a new file). Save it as [[index.html]] in a new folder, e.g. [[my-habit-tracker]]. Open it in your browser — it loads React from the internet using the [[<script>]] links already in the [[<head>]].</p>
<h3>2. Put it on GitHub</h3>
<p>Create a new repository on GitHub, then upload your [[index.html]] (<b>Add file → Upload files</b>), or use the Git commands from Advanced Unit 5.</p>
<h3>3. Turn on GitHub Pages</h3>
<p>Repository <b>Settings → Pages → Deploy from a branch → main → / (root) → Save</b>. After a minute your app is live at [[https://YOUR-USERNAME.github.io/REPO-NAME/]].</p>
<h3>4. Write a README.md</h3>
{{{
# Streaks — Habit Tracker

Track daily habits, tick them off and build streaks.
**Live demo:** https://your-username.github.io/streaks/

![Screenshot](screenshot.png)

## Features
- Add, complete and delete habits
- Filter by All / To do / Done
- Progress bar and streak counter
- Saves your data in the browser (localStorage)
- Works on phones and with the keyboard

## Built with
HTML, CSS (variables, Flexbox, Grid, media queries), JavaScript, React (useState, useEffect, custom hook)

## What I learned
How to plan components, lift state up, and persist data with a custom hook.
}}}
<h3>5. Add it to your resume</h3>
<p>When you pass the Project Review, your certificate page gives you ready-made resume lines with your live link. Also pin the repository on your GitHub profile.</p>`,
            pic: 'shipChecklist',
            cap: 'Done means: tested, documented, and live.'
          }
        ],
        recap: [
          'Test at phone width, with only the keyboard, and with an eye on the console.',
          'Handle edge cases: empty lists, long text, empty forms. Show friendly empty states.',
          'Download your project as [[index.html]], push it to GitHub, and turn on GitHub Pages.',
          'A good README has: what it is, a live link, a screenshot, features, tech used, and what you learned.',
          'Put the live link on your resume and pin the repo on your GitHub profile.'
        ],
        quiz: [
          { q: 'What is the best quick test of keyboard accessibility?', options: ['Use only Tab, Enter and Space to use the whole app', 'Zoom out', 'Turn off CSS', 'Use a bigger monitor'], answer: 0, why: 'If you can reach and operate everything by keyboard, many users with disabilities can too.' },
          { q: 'What is an "empty state"?', options: ['A bug', 'A friendly message shown when there\'s no data yet', 'A blank page', 'An unused variable'], answer: 1, why: 'e.g. "No habits yet — add your first one above!"' },
          { q: 'Where does GitHub Pages publish your app?', options: ['On your computer only', 'At https://USERNAME.github.io/REPO-NAME/', 'In your email', 'Inside VS Code'], answer: 1, why: 'Pages gives each repository a free public URL.' },
          { q: 'Which belongs in a project README?', options: ['Your password', 'What the app does, a live link, a screenshot and the tech used', 'Only the code', 'Nothing — READMEs are optional for portfolios'], answer: 1, why: 'Employers read READMEs to understand your project quickly.' },
          { q: 'What makes a portfolio project most convincing to employers?', options: ['A long list of buzzwords', 'A live link they can try plus readable code on GitHub', 'A video only', 'Copying the example exactly'], answer: 1, why: 'Working software and clean code are the best proof of skill.' }
        ]
      }
    ]
  };
})();
