# CodePath — Learn to Code

An installable learn-to-code app for **phone and computer**. It teaches HTML, CSS, JavaScript and React through four courses, then a capstone where you build and launch your own app. It has illustrated lessons, a live code editor, pop quizzes, and final tests that auto-grade your code.

**Live app:** https://manndrew85-source.github.io/newcodemode/

![Lesson with diagram](docs/lesson.png)

## Features

- **4 courses × 5 units:** Beginner (HTML & CSS), Intermediate (JavaScript fundamentals), Advanced (modern JavaScript and real apps), React (components, props, state, effects)
- **Capstone course:** pick a starter (portfolio, habit tracker or recipe box) and build it across 5 units. Each milestone is checked automatically (22 requirements), and a final Project Review gives you a certificate with your live link
- **60+ lessons**, each with a hand-drawn SVG diagram ("Picture it") and a live, editable code example
- **Live code editor** that runs HTML/CSS/JS **and React (JSX)** safely in a sandboxed iframe, captures console output, and stops infinite loops. React and Babel are bundled, so it works offline
- **Unit recaps and pop quizzes:** score 60% or more to unlock the next unit
- **Final tests:** 10 multiple-choice + 10 "fix the broken code" questions per course, auto-graded by running the learner's code against test checks
- **Printable certificates** when a final test is passed with 70% or more
- **Progressive Web App:** installs to the home screen or desktop, works offline, light and dark mode, mobile-first layout
- Progress is saved locally in the browser (localStorage). No account or server is needed.

![Final test: fix the broken code](docs/final-test.png)

![Capstone workspace with milestone checks](docs/capstone-workspace.png)

## Tech

Plain **HTML, CSS and JavaScript**, with no frameworks and no build step.

| File | Purpose |
|---|---|
| `index.html` | App shell and navigation |
| `js/app.js` | Hash router and all screens (home, lessons, recaps, quizzes, tests, certificates) |
| `js/runner.js` | Sandboxed code runner: console capture, loop guard, in-browser JSX compiling, automated page and code checks |
| `js/pics.js` | SVG diagram library, themed with CSS variables |
| `js/progress.js` | Progress saved in localStorage |
| `js/content/*.js` | Course content written as data (lessons, quizzes, tests, capstone starters and requirements) |
| `vendor/` | React 18.3.1, ReactDOM and Babel Standalone (MIT licensed), so React lessons run offline |
| `sw.js`, `manifest.webmanifest` | Offline support and app install |

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or open the folder in VS Code and use the **Live Server** extension.

## Deploy (GitHub Pages)

Go to repository **Settings → Pages → Deploy from a branch → `main` / root → Save**.

## Skills demonstrated

Responsive and accessible UI, a single-page app router, sandboxed code execution with `postMessage`, in-browser JSX compiling, an automated grading engine, SVG graphics, PWA service-worker caching, and data-driven content design.

![Certificate](docs/certificate.png)
