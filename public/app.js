/* FILMS — static PWA. Hash routes: #/  #/film/<slug>  #/answers */
(() => {
  'use strict';
  const KEY = 'films:v1';
  const VIDEO = 'https://www.youtube.com/watch?v=acveRw9DxTs';
  const $main = document.getElementById('main');
  let DATA = null, BY = {};
  const ui = { filter: 'all', q: '', homeScroll: 0 };

  // ---------- storage ----------
  const blank = () => ({ v: 1, answers: {}, watched: {}, closing: '', updated: null });
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') return Object.assign(blank(), s); } catch (e) {}
    return blank();
  }
  let store = load();
  function save() {
    store.updated = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(store)); return true; } catch (e) { toast('Could not save: storage is full or blocked'); return false; }
  }
  window.addEventListener('storage', e => { if (e.key === KEY) store = load(); });
  const answered = slug => Object.values(store.answers[slug] || {}).filter(v => v && v.trim()).length;

  // ---------- helpers ----------
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const toSec = t => t.split(':').reduce((a, b) => a * 60 + +b, 0);
  function toast(msg) {
    const d = document.createElement('div'); d.className = 'toast'; d.setAttribute('role', 'status'); d.textContent = msg;
    document.body.appendChild(d); setTimeout(() => d.remove(), 2600);
  }
  function setNav(route) {
    document.querySelectorAll('.topnav a').forEach(a => {
      const on = (route === 'home' && a.getAttribute('href') === '#/') || (route === 'answers' && a.getAttribute('href') === '#/answers');
      on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
    });
  }
  let first = true;
  function focusMain() { if (first) { first = false; return; } const h = $main.querySelector('h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }

  // ---------- home ----------
  function visible() {
    const q = ui.q.trim().toLowerCase();
    return DATA.films.filter(f => (ui.filter === 'all' || f.kind === ui.filter) &&
      (!q || [f.title, f.year, f.synopsis, ...(f.genres || []), ...f.cast.map(c => c.name + ' ' + c.character)].join(' ').toLowerCase().includes(q)));
  }
  function cardsHTML(list) {
    if (!list.length) return '<p class="empty">No titles match.</p>';
    return '<ul class="grid">' + list.map(f => {
      const n = answered(f.slug), w = store.watched[f.slug];
      return `<li class="card"><a href="#/film/${f.slug}" aria-label="${esc(f.title)} (${f.year})">
        <div class="poster"><img src="${esc(f.posterSmall)}" alt="" width="342" height="513" loading="${f.n <= 8 ? 'eager' : 'lazy'}" decoding="async">
        <span class="num">${String(f.n).padStart(2, '0')}</span>${f.kind === 'series' ? '<span class="badge series">SERIES</span>' : ''}${w ? '<span class="badge" title="Watched">✓ WATCHED</span>' : ''}</div>
        <p class="t">${esc(f.title)}</p><p class="y">${f.year}${n ? ` · <span class="ans">${n}/${f.questions.length} answered</span>` : ''}</p></a></li>`;
    }).join('') + '</ul>';
  }
  function renderHome() {
    document.title = 'FILMS — Dirty Civilian watch list';
    const watched = DATA.films.filter(f => store.watched[f.slug]).length;
    $main.innerHTML = `<section class="intro"><h1>Films that build the prepared civilian mindset</h1>
      <p>The ${DATA.films.length} films and series from Dirty Civilian's Vol. 1 list, in the video's order. Open a title for the synopsis, cast, trailer, and the questions to talk through, with room for your answers.</p>
      <p class="src">Source: <a href="${VIDEO}" target="_blank" rel="noopener">Dirty Civilian on YouTube</a> · ${watched}/${DATA.films.length} watched</p></section>
      <div class="bar" role="search">
        <div class="seg" role="group" aria-label="Format">
          ${[['all', 'All'], ['film', 'Movies'], ['series', 'Series']].map(([k, l]) => `<button type="button" data-f="${k}" aria-pressed="${ui.filter === k}">${l}</button>`).join('')}
        </div>
        <label class="search"><span class="skip">Search titles</span><input type="search" id="q" placeholder="Search title, cast, year…" value="${esc(ui.q)}" autocomplete="off"></label>
        <span class="count" id="count" aria-live="polite"></span>
      </div><div id="cards"></div>`;
    const upd = () => { const l = visible(); document.getElementById('cards').innerHTML = cardsHTML(l); document.getElementById('count').textContent = `${l.length} title${l.length === 1 ? '' : 's'}`; };
    upd();
    $main.querySelectorAll('.seg button').forEach(b => b.addEventListener('click', () => {
      ui.filter = b.dataset.f; $main.querySelectorAll('.seg button').forEach(x => x.setAttribute('aria-pressed', x === b)); upd();
    }));
    document.getElementById('q').addEventListener('input', e => { ui.q = e.target.value; upd(); });
  }

  // ---------- detail ----------
  function renderFilm(slug) {
    const f = BY[slug];
    if (!f) { $main.innerHTML = '<h1>Not found</h1><p><a href="#/">Back to all films</a></p>'; return; }
    document.title = `${f.title} (${f.year}) — FILMS`;
    const i = DATA.films.indexOf(f), prev = DATA.films[i - 1], next = DATA.films[i + 1];
    const a = store.answers[slug] || {};
    const meta = [f.year, f.format, f.runtime, f.rating, (f.genres || []).join(', ')].filter(Boolean).map(x => `<span>${esc(x)}</span>`).join('');
    const yt = f.trailer && `https://www.youtube.com/watch?v=${encodeURIComponent(f.trailer.youtube)}`;
    $main.innerHTML = `<a class="back" href="#/">← All films</a>
    <article>
      <div class="hero">
        <div class="poster"><img src="${esc(f.poster)}" alt="${esc(f.title)} poster" width="500" height="750" decoding="async"></div>
        <div>
          <p class="meta"><span>No. ${f.n} of ${DATA.films.length}</span></p>
          <h1>${esc(f.title)}</h1>
          <p class="meta">${meta}</p>
          ${f.credit ? `<p class="credit">${esc(f.credit.role)} ${esc(f.credit.names.join(' & '))}</p>` : ''}
          <p class="syn">${esc(f.synopsis)}</p>
          <div class="actions">
            <button type="button" class="btn ${store.watched[slug] ? 'on' : ''}" id="watched" aria-pressed="${!!store.watched[slug]}">${store.watched[slug] ? '✓ Watched' : 'Mark as watched'}</button>
            <a class="btn" href="#questions">Questions (${f.questions.length})</a>
          </div>
          <div class="links">
            <a class="btn" href="${esc(f.imdb)}" target="_blank" rel="noopener">IMDb ↗</a>
            <a class="btn" href="${esc(f.tmdb)}" target="_blank" rel="noopener">TMDB ↗</a>
            <a class="btn" href="${VIDEO}&t=${toSec(f.chapter)}s" target="_blank" rel="noopener">Dirty Civilian on this title (${esc(f.chapter)}) ↗</a>
          </div>
        </div>
      </div>
      <section class="block" aria-labelledby="h-tr"><h2 id="h-tr">Trailer ${f.trailer ? `<small>${esc(f.trailer.title)}${f.trailer.channel ? ' · ' + esc(f.trailer.channel) : ''}</small>` : ''}</h2>
        ${f.trailer ? `<div class="trailer" id="trailer"><button type="button" aria-label="Play trailer: ${esc(f.trailer.title)}" style="background-image:url('https://i.ytimg.com/vi/${encodeURIComponent(f.trailer.youtube)}/hqdefault.jpg')"></button><span class="lbl">Play trailer</span></div>
        <p class="yt">Embed not playing? <a href="${yt}" target="_blank" rel="noopener">Open on YouTube ↗</a></p>` : `<p class="yt">No trailer listed. <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(f.title + ' ' + f.year + ' trailer')}" target="_blank" rel="noopener">Search YouTube ↗</a></p>`}
      </section>
      <section class="block" aria-labelledby="h-cast"><h2 id="h-cast">Cast <small>Top billed, from TMDB</small></h2>
        <ul class="cast">${f.cast.map(c => `<li><a href="${esc(c.tmdb)}" target="_blank" rel="noopener">
          ${c.photo ? `<div class="ph"><img src="${esc(c.photo)}" alt="" width="138" height="175" loading="lazy" decoding="async"></div>` : `<div class="ph none" aria-hidden="true">${esc(c.name.split(' ').map(w => w[0]).join('').slice(0, 2))}</div>`}
          <p class="n">${esc(c.name)}</p><p class="c">${esc(c.character)}</p></a></li>`).join('')}</ul>
      </section>
      <section class="block" id="questions" aria-labelledby="h-q"><h2 id="h-q">Dirty Civilian's questions <small>Answers save automatically in this browser</small></h2>
        <ol class="qs">${f.questions.map((q, k) => `<li class="q">
          <label for="a${k}"><span class="k">${q.bonus ? 'BONUS' : 'Q' + (k + 1)}</span>${esc(q.q)}</label>
          ${q.note ? `<p class="note">${esc(q.note)}</p>` : ''}
          <textarea id="a${k}" data-k="${k}" rows="4" placeholder="Your answer…">${esc(a[k] || '')}</textarea>
          <p class="st" id="s${k}" aria-live="polite"></p></li>`).join('')}</ol>
        <div class="tools"><button type="button" class="btn" id="copyfilm">Copy my answers</button><a class="btn" href="#/answers">All answers · export / import</a></div>
      </section>
      <nav class="pn" aria-label="More titles">
        ${prev ? `<a href="#/film/${prev.slug}" class="prev"><small>← Previous</small>${esc(prev.title)}</a>` : '<span></span>'}
        ${next ? `<a href="#/film/${next.slug}" class="next"><small>Next →</small>${esc(next.title)}</a>` : ''}
      </nav>
    </article>`;
    // trailer: click-to-load privacy-enhanced embed
    const tr = document.getElementById('trailer');
    if (tr) tr.querySelector('button').addEventListener('click', () => {
      const ifr = document.createElement('iframe');
      ifr.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(f.trailer.youtube)}?autoplay=1&rel=0&modestbranding=1`;
      ifr.title = f.trailer.title; ifr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      ifr.allowFullscreen = true; ifr.referrerPolicy = 'strict-origin-when-cross-origin';
      tr.innerHTML = ''; tr.appendChild(ifr); ifr.focus();
    });
    document.getElementById('watched').addEventListener('click', e => {
      const on = !store.watched[slug]; if (on) store.watched[slug] = new Date().toISOString().slice(0, 10); else delete store.watched[slug];
      save(); const b = e.currentTarget; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.textContent = on ? '✓ Watched' : 'Mark as watched';
    });
    const timers = {};
    $main.querySelectorAll('.qs textarea').forEach(t => {
      const grow = () => { t.style.height = 'auto'; t.style.height = Math.max(96, t.scrollHeight + 2) + 'px'; };
      grow();
      const commit = () => {
        const k = t.dataset.k, v = t.value; store.answers[slug] = store.answers[slug] || {};
        if (v.trim()) store.answers[slug][k] = v; else delete store.answers[slug][k];
        if (!Object.keys(store.answers[slug]).length) delete store.answers[slug];
        if (save()) { const s = document.getElementById('s' + k); if (s) { s.textContent = 'Saved'; s.className = 'st saved'; } }
      };
      t.addEventListener('input', () => { grow(); const s = document.getElementById('s' + t.dataset.k); s.textContent = 'Saving…'; s.className = 'st'; clearTimeout(timers[t.dataset.k]); timers[t.dataset.k] = setTimeout(commit, 400); });
      t.addEventListener('blur', () => { clearTimeout(timers[t.dataset.k]); commit(); });
    });
    document.getElementById('copyfilm').addEventListener('click', () => copy(textFor([f]), 'Answers copied'));
  }

  // ---------- answers / backup ----------
  function textFor(list, withClosing) {
    let out = [];
    for (const f of list) {
      const a = store.answers[f.slug] || {}; if (!Object.keys(a).length && list.length > 1) continue;
      out.push(`## ${f.title} (${f.year})${store.watched[f.slug] ? ' — watched' : ''}`);
      f.questions.forEach((q, k) => out.push(`\n**${q.bonus ? 'Bonus' : 'Q' + (k + 1)}. ${q.q}**\n${(a[k] || '').trim() || '—'}`));
      out.push('');
    }
    if (withClosing && store.closing.trim()) out.push(`## Closing question\n**${DATA.meta.closing.q}**\n${store.closing.trim()}`);
    return out.join('\n');
  }
  async function copy(text, ok) {
    try { await navigator.clipboard.writeText(text); toast(ok); }
    catch (e) { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast(ok); } catch (e2) { toast('Copy failed'); } ta.remove(); }
  }
  function renderAnswers() {
    document.title = 'My answers — FILMS';
    const list = DATA.films.filter(f => answered(f.slug));
    const total = list.reduce((s, f) => s + answered(f.slug), 0);
    $main.innerHTML = `<section class="intro"><h1>My answers</h1>
      <p>${total} answer${total === 1 ? '' : 's'} across ${list.length} title${list.length === 1 ? '' : 's'} · ${Object.keys(store.watched).length} watched. Everything is stored only in this browser, so export a backup now and then.</p></section>
      <div class="tools">
        <button type="button" class="btn primary" id="exp">Export backup (JSON)</button>
        <label class="btn" for="imp">Import backup…</label><input type="file" id="imp" accept="application/json,.json" hidden>
        <button type="button" class="btn" id="cpy">Copy all answers</button>
      </div><p class="msg" id="msg" aria-live="polite"></p>
      <section class="block" aria-labelledby="h-cl"><h2 id="h-cl">Closing question <small>From the end of the video</small></h2>
        <div class="q"><label for="closing">${esc(DATA.meta.closing.q)}</label><textarea id="closing" rows="3" placeholder="Your answer…">${esc(store.closing)}</textarea><p class="st" id="scl" aria-live="polite"></p></div>
      </section>
      ${list.map(f => `<section class="ans-film"><h2><a href="#/film/${f.slug}">${esc(f.title)} (${f.year})</a></h2><dl>
        ${f.questions.map((q, k) => (store.answers[f.slug] || {})[k] ? `<dt>${esc(q.q)}</dt><dd>${esc(store.answers[f.slug][k])}</dd>` : '').join('')}</dl></section>`).join('') || '<p class="empty">No answers yet. Open a title and start typing.</p>'}`;
    let t; const cl = document.getElementById('closing');
    cl.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { store.closing = cl.value; if (save()) { const s = document.getElementById('scl'); s.textContent = 'Saved'; s.className = 'st saved'; } }, 400); });
    document.getElementById('exp').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ app: 'FILMS', exported: new Date().toISOString(), ...store }, null, 2)], { type: 'application/json' });
      const u = URL.createObjectURL(blob), l = document.createElement('a'); l.href = u; l.download = `films-answers-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000);
    });
    document.getElementById('imp').addEventListener('change', async e => {
      const file = e.target.files[0]; if (!file) return;
      try {
        const d = JSON.parse(await file.text());
        if (!d || typeof d.answers !== 'object') throw new Error('not a FILMS backup');
        let n = 0;
        for (const [s, qa] of Object.entries(d.answers)) { if (!BY[s] || typeof qa !== 'object') continue; store.answers[s] = store.answers[s] || {};
          for (const [k, v] of Object.entries(qa)) if (typeof v === 'string' && v.trim() && (!store.answers[s][k] || store.answers[s][k] !== v)) { store.answers[s][k] = store.answers[s][k] && store.answers[s][k] !== v ? store.answers[s][k] + '\n\n— imported —\n' + v : v; n++; } }
        for (const [s, w] of Object.entries(d.watched || {})) if (BY[s] && w) store.watched[s] = w;
        if (typeof d.closing === 'string' && d.closing.trim() && !store.closing.includes(d.closing)) store.closing = store.closing ? store.closing + '\n\n' + d.closing : d.closing;
        save(); renderAnswers(); document.getElementById('msg').textContent = `Imported ${n} answer${n === 1 ? '' : 's'} (merged with what was here).`;
      } catch (err) { document.getElementById('msg').textContent = 'Import failed: ' + err.message; }
    });
    document.getElementById('cpy').addEventListener('click', () => copy(`# FILMS — my answers\n\n` + textFor(DATA.films, true), 'All answers copied'));
  }

  // ---------- router ----------
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const prevHome = $main.querySelector('#cards');
    if (prevHome) ui.homeScroll = window.scrollY;
    let m;
    if ((m = h.match(/^film\/([a-z0-9-]+)/))) { setNav('film'); renderFilm(m[1]); window.scrollTo(0, 0); }
    else if (h.startsWith('answers')) { setNav('answers'); renderAnswers(); window.scrollTo(0, 0); }
    else if (h === 'questions' || h === 'main') return;
    else { setNav('home'); renderHome(); window.scrollTo(0, ui.homeScroll || 0); }
    focusMain();
  }
  // in-page anchors (#questions) shouldn't trigger routing
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href="#questions"],a[href="#main"]'); if (!a) return;
    e.preventDefault(); const el = document.getElementById(a.getAttribute('href').slice(1)); if (el) { el.scrollIntoView({ behavior: 'smooth' }); el.focus?.({ preventScroll: true }); }
  });
  window.addEventListener('hashchange', route);
  // offline / missing remote images: show the plain plate instead of a broken-image icon
  document.addEventListener('error', e => { const t = e.target; if (t && t.tagName === 'IMG' && !t.dataset.err) { t.dataset.err = 1; t.style.visibility = 'hidden'; } }, true);

  fetch('./data/films.json').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(d => {
    DATA = d; DATA.films.forEach(f => BY[f.slug] = f); route();
  }).catch(e => { $main.innerHTML = `<p class="loading">Could not load the list (${esc(e.message)}). Check your connection and reload.</p>`; });

  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
