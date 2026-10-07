// The Introduction: what you'll do + the equipment you need.
const INTRO = {
  title: 'Welcome to CodePath 👋',
  sections: [
    {
      heading: 'What you will be doing',
      body: `
<p>You're going to learn how to build websites and web apps — the same skills used by front-end and full-stack developers. You'll go from "I've never written code" to building interactive apps with JavaScript.</p>
<p>The app is split into <b>three courses</b>. Each has <b>5 units</b>. Every unit ends with a <b>recap</b> and a <b>pop quiz</b>, and every course ends with a <b>final test</b> (half multiple-choice, half fixing broken code — just like real debugging on the job).</p>
<div class="table-wrap"><table class="simple">
<tr><th>Course</th><th>You'll learn</th><th>You'll be able to…</th></tr>
<tr><td><b>Beginner</b></td><td>HTML &amp; CSS</td><td>Build and style your own web pages, including a personal profile page.</td></tr>
<tr><td><b>Intermediate</b></td><td>JavaScript fundamentals</td><td>Write programs with variables, decisions, loops and functions, and make pages react to clicks.</td></tr>
<tr><td><b>Advanced</b></td><td>Modern JavaScript</td><td>Build a real app (a to-do list), load data from the internet, organize code, debug, test, and publish to GitHub.</td></tr>
</table></div>`,
      pic: 'roadmap',
      cap: 'Your learning path. Take the courses in order — each one builds on the last.'
    },
    {
      heading: 'How this app works',
      body: `
<ul>
<li><b>Lessons</b> are short. Each one explains an idea, shows a <b>📷 Picture it</b> diagram, then gives you a <b>live code editor</b>.</li>
<li>The editor runs your code instantly. Change something, press <b>▶ Run</b> (or <b>Ctrl/Cmd + Enter</b>), and see what happens. You can't break anything — press <b>↺ Reset</b> to get the original back.</li>
<li>For HTML/CSS you'll see the <b>Result</b> (what the web page looks like). For JavaScript you'll see the <b>Console output</b> (what your program printed).</li>
<li>Pass each pop quiz with <b>60%</b> or more to unlock the next unit. Retry as many times as you want.</li>
<li>Pass the final test with <b>70%</b> or more to earn a printable <b>certificate</b>.</li>
</ul>`,
      pic: 'unitFlow',
      cap: 'Every unit follows the same pattern.'
    },
    {
      heading: 'Equipment you need on your computer',
      body: `
<p>Good news: coding for the web is cheap. You probably have everything already.</p>
<div class="table-wrap"><table class="simple">
<tr><th>What</th><th>Do I need it?</th><th>Details</th></tr>
<tr><td>💻 A computer</td><td><b>Yes</b></td><td>Windows, Mac, Linux or a Chromebook all work. Any laptop from the last ~8 years is fine. 4 GB of RAM is enough; 8 GB is comfortable.</td></tr>
<tr><td>⌨️ A keyboard</td><td><b>Yes</b></td><td>You can read lessons on your phone, but typing real projects is much easier on a keyboard.</td></tr>
<tr><td>🌐 A web browser</td><td><b>Yes</b></td><td><b>Google Chrome</b> or <b>Firefox</b> (free). They include <i>Developer Tools</i> for finding bugs.</td></tr>
<tr><td>📝 A code editor</td><td><b>Yes</b> (free)</td><td><b>Visual Studio Code</b> ("VS Code") from <code>code.visualstudio.com</code>. It's what most professional developers use.</td></tr>
<tr><td>📶 Internet</td><td>For setup</td><td>Needed to download tools and for one lesson about loading data from the web. Once this app is installed, the lessons work offline.</td></tr>
<tr><td>🐙 GitHub account</td><td>Recommended</td><td>Free at <code>github.com</code>. This is where you'll show your projects to employers.</td></tr>
<tr><td>📱 Your phone</td><td>Optional</td><td>Great for reading lessons and doing quizzes on the go.</td></tr>
</table></div>
<div class="callout tip">💡 You do <b>not</b> need to buy anything, install a programming language, or have a powerful computer. The browser is your programming environment.</div>`,
      pic: 'setup',
      cap: 'Your setup: write code in the <b>editor</b>, see it in the <b>browser</b>.'
    },
    {
      heading: 'Setting up VS Code (10 minutes)',
      body: `
<ol>
<li>Go to <code>code.visualstudio.com</code> and download the version for your computer. Install it like any other app.</li>
<li>Create a folder for your work, e.g. <code>Documents/coding</code>.</li>
<li>Open VS Code → <b>File → Open Folder…</b> → choose that folder.</li>
<li>Click the <b>New File</b> icon and name it <code>index.html</code>.</li>
<li>Open the <b>Extensions</b> panel (the four-squares icon) and install <b>Live Server</b>. Right-click your <code>index.html</code> → <b>Open with Live Server</b>. Your page opens in the browser and refreshes every time you save!</li>
</ol>
<p>Try it: paste this into <code>index.html</code>, save, and open it with Live Server:</p>
{{{
<!DOCTYPE html>
<html>
  <head><title>My first page</title></head>
  <body>
    <h1>Hello, world!</h1>
    <p>I'm learning to code.</p>
  </body>
</html>
}}}
<p>Everything in this app also works right here in the built-in editor, so if you're on your phone you can still follow along.</p>`
    },
    {
      heading: 'Installing this app on your phone and computer',
      body: `
<ul>
<li><b>iPhone / iPad:</b> open this site in <b>Safari</b> → tap the <b>Share</b> button → <b>Add to Home Screen</b>.</li>
<li><b>Android:</b> open it in <b>Chrome</b> → tap the <b>⋮</b> menu → <b>Install app</b> (or <i>Add to Home screen</i>).</li>
<li><b>Windows / Mac / Chromebook:</b> open it in <b>Chrome</b> or <b>Edge</b> → click the <b>install</b> icon at the right end of the address bar.</li>
</ul>
<p>It then opens like a normal app, in its own window, and works offline. Your progress is saved on each device separately.</p>`
    },
    {
      heading: 'Using this for your resume',
      body: `
<p>Employers care about two things: <b>what you know</b> and <b>proof you can do it</b>. Here's how to get both from this app:</p>
<ol>
<li><b>Certificates</b> — pass each final test and print/save your certificate as a PDF.</li>
<li><b>Projects</b> — the Beginner course ends with a profile page, and the Advanced course has you build a to-do app. Rebuild these in VS Code and publish them on GitHub (Advanced Unit 5 shows you how).</li>
<li><b>Resume lines</b> — list skills honestly. For example:</li>
</ol>
{{{
SKILLS
HTML5, CSS3 (Flexbox, responsive design), JavaScript (ES6+),
DOM manipulation, Fetch API, Git & GitHub, Chrome DevTools

PROJECTS
Personal Profile Page — responsive site built with HTML & CSS
To-Do App — JavaScript app with add/complete/delete and saved data
}}}
<div class="callout">Ready? Start with <b>Beginner · Unit 1</b>. Take your time — 15–20 minutes a day adds up fast.</div>`
    }
  ]
};
