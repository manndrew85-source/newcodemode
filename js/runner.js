// Runs learner code safely inside a sandboxed <iframe> and reports console output + check results.
const Runner = (() => {
  let counter = 0;
  const listeners = new Map();

  window.addEventListener('message', e => {
    const d = e.data;
    if (!d || typeof d.__cp !== 'string') return;
    const fn = listeners.get(d.__cp);
    if (fn) fn(d, e.source);
  });

  // Turns any value into a readable string, the way a browser console would show it.
  const FORMAT = `function __fmt(v, depth){
    depth = depth || 0;
    if (typeof v === 'string') return depth ? JSON.stringify(v) : v;
    if (v === undefined) return 'undefined';
    if (v === null) return 'null';
    if (typeof v === 'function') return v.name ? '[Function: ' + v.name + ']' : '[Function]';
    if (typeof v !== 'object') return String(v);
    if (v instanceof Error) return v.name + ': ' + v.message;
    if (typeof Element !== 'undefined' && v instanceof Element) return '<' + v.tagName.toLowerCase() + '>';
    if (depth > 3) return Array.isArray(v) ? '[...]' : '{...}';
    if (Array.isArray(v)) return '[' + v.map(x => __fmt(x, depth + 1)).join(', ') + ']';
    if (v instanceof Promise) return 'Promise { ... }';
    const keys = Object.keys(v);
    const name = v.constructor && v.constructor.name && v.constructor.name !== 'Object' ? v.constructor.name + ' ' : '';
    if (!keys.length) return name + '{}';
    return name + '{ ' + keys.map(k => k + ': ' + __fmt(v[k], depth + 1)).join(', ') + ' }';
  }`;

  function captureScript(id) {
    return `<script>(function(){
      var ID = ${JSON.stringify(id)};
      window.__logs = []; window.__errors = [];
      ${FORMAT}
      window.__fmt = __fmt;
      // Sandboxed previews can't use real storage, so lessons get an in-memory stand-in.
      try { window.localStorage.getItem('x'); } catch (e) {
        var mem = {};
        var store = {
          getItem: function(k){ return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
          setItem: function(k, v){ mem[k] = String(v); },
          removeItem: function(k){ delete mem[k]; },
          clear: function(){ mem = {}; },
          key: function(i){ var ks = Object.keys(mem); return i < ks.length ? ks[i] : null; },
          get length(){ return Object.keys(mem).length; }
        };
        try { Object.defineProperty(window, 'localStorage', { value: store, configurable: true }); } catch (e2) {}
      }
      ['log','info','warn','error'].forEach(function(k){
        var orig = console[k];
        console[k] = function(){
          var line = Array.prototype.map.call(arguments, function(a){ return __fmt(a); }).join(' ');
          __logs.push(line);
          parent.postMessage({__cp: ID, type: 'log', level: k, text: line}, '*');
          try { orig.apply(console, arguments); } catch (e) {}
        };
      });
      function report(msg){ __errors.push(msg); parent.postMessage({__cp: ID, type: 'error', text: msg}, '*'); }
      window.addEventListener('error', function(e){
        var er = e.error;
        report(er && er.name ? er.name + ': ' + er.message : (e.message || 'Error'));
      });
      window.addEventListener('unhandledrejection', function(e){
        var r = e.reason;
        report('Uncaught (in promise) ' + (r && r.name ? r.name + ': ' + r.message : String(r)));
      });
      document.addEventListener('click', function(e){
        var a = e.target.closest && e.target.closest('a[href]');
        if (a && !a.getAttribute('href').startsWith('#')) { e.preventDefault(); console.log('(Link clicked: ' + a.getAttribute('href') + ' — links are disabled in the preview)'); }
      });
      document.addEventListener('submit', function(e){ e.preventDefault(); console.log('(Form submitted — the preview does not send data anywhere)'); });
    })();<\/script>`;
  }

  function checksScript(id, tests) {
    const fns = (tests || []).map(t => `async function(){ ${t.test} }`).join(',\n');
    return `<script>
      setTimeout(async function(){
        var ID = ${JSON.stringify(id)};
        var tests = [${fns}];
        var results = [];
        for (var i = 0; i < tests.length; i++) {
          try {
            var r = await Promise.race([tests[i](), new Promise(function(res){ setTimeout(function(){ res('__timeout'); }, 2500); })]);
            results.push(r === '__timeout' ? { pass: false, error: 'Took too long' } : { pass: !!r });
          } catch (e) {
            results.push({ pass: false, error: (e && e.name ? e.name + ': ' + e.message : String(e)) });
          }
        }
        parent.postMessage({__cp: ID, type: 'done', results: results}, '*');
      }, 30);
    <\/script>`;
  }

  // Adds a safety counter to loops so an accidental infinite loop stops instead of freezing the app.
  function guardLoops(code) {
    let out = '';
    let i = 0;
    const re = /\b(for|while)\s*\(|\bdo\s*\{/g;
    let m;
    while ((m = re.exec(code))) {
      if (m[0].startsWith('do')) {
        const end = m.index + m[0].length;
        out += code.slice(i, end) + ' if (++__loopGuard > 1e6) throw new Error("Loop ran over 1,000,000 times — is it infinite?");';
        i = end;
        continue;
      }
      // find matching ) for the loop header
      let depth = 0, j = m.index + m[0].length - 1;
      for (; j < code.length; j++) {
        if (code[j] === '(') depth++;
        else if (code[j] === ')') { depth--; if (depth === 0) break; }
      }
      let k = j + 1;
      while (k < code.length && /\s/.test(code[k])) k++;
      if (code[k] === '{') {
        out += code.slice(i, k + 1) + ' if (++__loopGuard > 1e6) throw new Error("Loop ran over 1,000,000 times — is it infinite?");';
        i = k + 1;
        re.lastIndex = k + 1;
      }
    }
    out += code.slice(i);
    return 'var __loopGuard = 0;\n' + out;
  }

  const safeScript = s => s.replace(/<\/script/gi, '<\\/script');

  function buildDoc(lang, code, id, tests) {
    const cap = captureScript(id);
    const chk = checksScript(id, tests);
    if (lang === 'js') {
      return `<!doctype html><html><head><meta charset="utf-8"></head><body>${cap}<script>${safeScript(guardLoops(code))}\n<\/script>${chk}</body></html>`;
    }
    // html (may include <style> and <script>)
    const base = `<style>body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;margin:12px;color:#1c1d29;background:#fff}</style>`;
    let doc = code;
    if (/<head[^>]*>/i.test(doc)) doc = doc.replace(/<head[^>]*>/i, m => m + '<meta charset="utf-8">' + cap + base);
    else if (/<!doctype[^>]*>/i.test(doc)) doc = doc.replace(/<!doctype[^>]*>/i, m => m + cap + base);
    else doc = '<!doctype html><meta charset="utf-8">' + cap + base + doc;
    return doc + chk;
  }

  /**
   * run({ lang: 'html'|'js', code, tests, container, onLog, onError, timeout })
   * container: element to put the iframe in (visible for html). Previous iframe in it is replaced.
   * Resolves with { results, logs, errors, timedOut }.
   */
  function run(opts) {
    const id = 'r' + (++counter) + '_' + Math.random().toString(36).slice(2, 8);
    const container = opts.container || document.body;
    const old = container.querySelector('iframe[data-runner]');
    if (old) { listeners.delete(old.dataset.runner); old.remove(); }

    const frame = document.createElement('iframe');
    frame.setAttribute('sandbox', 'allow-scripts allow-modals');
    frame.dataset.runner = id;
    frame.title = 'Code output';
    if (opts.lang === 'js' || opts.hidden) frame.className = 'hidden';
    const logs = [], errors = [];

    return new Promise(resolve => {
      let finished = false;
      const finish = (results, timedOut) => {
        if (finished) return;
        finished = true;
        resolve({ results: results || [], logs, errors, timedOut: !!timedOut });
      };
      listeners.set(id, (d, source) => {
        if (source !== frame.contentWindow) return;
        if (d.type === 'log') { logs.push(d.text); opts.onLog && opts.onLog(d.text, d.level); }
        else if (d.type === 'error') { errors.push(d.text); opts.onError && opts.onError(d.text); }
        else if (d.type === 'done') finish(d.results);
      });
      setTimeout(() => finish(null, true), opts.timeout || 6000);
      frame.srcdoc = buildDoc(opts.lang, opts.code, id, opts.tests);
      container.appendChild(frame);
    });
  }

  return { run, guardLoops };
})();
