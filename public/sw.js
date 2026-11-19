/* FILMS service worker: app shell + data offline after first visit; posters, headshots and trailer thumbnails cached as you browse. */
const V = 'films-v1';
const SHELL = ['./', './index.html', './styles.css?v=1', './app.js?v=1', './data/films.json', './manifest.webmanifest',
  './fonts/SHKLRMonoNarrow[wght].woff2', './brand/glyph.svg', './brand/tmdb.svg', './favicon.svg', './favicon.ico', './icon-192.png', './icon-512.png'];
const IMG = 'films-img-v1', IMG_MAX = 400;
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== IMG).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
async function trim() { const c = await caches.open(IMG); const ks = await c.keys(); for (let i = 0; i < ks.length - IMG_MAX; i++) await c.delete(ks[i]); }
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin === location.origin) {
    if (r.mode === 'navigate') { // network first, offline falls back to the shell
      e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put('./index.html', cp)); return res; }).catch(() => caches.match('./index.html')));
      return;
    }
    if (u.pathname.endsWith('/data/films.json')) { // stale-while-revalidate
      e.respondWith(caches.open(V).then(async c => { const hit = await c.match(r, { ignoreSearch: true });
        const net = fetch(r).then(res => { if (res.ok) c.put('./data/films.json', res.clone()); return res; }).catch(() => hit);
        return hit || net; }));
      return;
    }
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })));
    return;
  }
  if (u.hostname === 'image.tmdb.org' || u.hostname === 'i.ytimg.com') { // cache first, opportunistic
    e.respondWith(caches.open(IMG).then(async c => { const hit = await c.match(r); if (hit) return hit;
      try { const res = await fetch(r); if (res.ok || res.type === 'opaque') { c.put(r, res.clone()); trim(); } return res; } catch (err) { return Response.error(); } }));
  }
});
