#!/usr/bin/env python3
"""Build public/data/films.json from tools/catalog.json (titles, original synopses),
tools/questions.json (Dirty Civilian's questions) and public TMDB title pages
(runtime, genres, rating, top-billed cast, trailer key, poster). No API key needed.
Usage: python3 tools/build_data.py [--refetch]   (pages cached in tools/.cache/)"""
import json, re, os, sys, time, subprocess, html as H
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = lambda *p: os.path.join(ROOT, *p)
cat = json.load(open(T('tools', 'catalog.json')))
qs = json.load(open(T('tools', 'questions.json')))
os.makedirs(T('tools', '.cache'), exist_ok=True)
def oembed_ok(key):
    r = subprocess.run(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', f'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={key}&format=json'], capture_output=True, text=True)
    return r.stdout == '200'
def page(path, name, extra=''):
    p = T('tools', '.cache', name + '.html')
    if '--refetch' in sys.argv or not os.path.exists(p) or os.path.getsize(p) < 20000:
        subprocess.run(['curl', '-sL', '-A', 'Mozilla/5.0 (X11; Linux x86_64) Chrome/131', '-H', 'Accept-Language: en-US',
                        'https://www.themoviedb.org' + path + '?language=en-US' + extra, '-o', p], check=True)
        time.sleep(1.2)
    return open(p, encoding='utf8').read()
clean = lambda x: re.sub(r'\s+', ' ', H.unescape(re.sub('<[^>]+>', '', x))).strip()
img = lambda u, size: re.sub(r'^https://[^/]+/t/p/[^/]+/', f'https://image.tmdb.org/t/p/{size}/', u) if u else None
out = []
for f in cat:
    h = page(f['tmdbPath'], f['slug'])
    m = re.search(r'class="runtime">\s*([^<]+)', h); runtime = clean(m.group(1)) if m else None
    m = re.search(r'class="genres">(.*?)</span>', h, re.S)
    genres = [clean(g) for g in re.findall(r'<a[^>]*>(.*?)</a>', m.group(1))] if m else []
    m = re.search(r'class="certification">\s*([^<]+)', h); cert = clean(m.group(1)) if m else None
    m = re.search(r'play_trailer" href="/video/play\?key=([^"]+)" data-site="YouTube" data-id="[^"]+" data-title="([^"]*)"', h)
    trailer = {'youtube': m.group(1), 'title': H.unescape(m.group(2))} if m else None
    vh = page(f['tmdbPath'] + '/videos', f['slug'] + '-videos', '&active_nav_item=Trailers')
    cards = []
    for c in re.findall(r'<div id="[0-9a-f]+" class="video card default">(.*?)</div>\s*</div>\s*</div>', vh, re.S):
        k = re.search(r'data-id="([A-Za-z0-9_-]{11})"[^>]*data-title="([^"]*)"', c)
        ch = re.search(r'<h4><a[^>]*>(.*?)</a>(\s*<span class="glyphicons verify-check">)?', c)
        if k: cards.append({'youtube': k.group(1), 'title': H.unescape(k.group(2)), 'channel': clean(ch.group(1)) if ch else None, 'verified': bool(ch and ch.group(2))})
    def score(c):
        t = c['title'].lower()
        return (('official trailer' in t) * 4 + ('trailer' in t) * 2 + c['verified'] * 3 - ('season' in t and 'season 1' not in t) * 3
                - any(w in t for w in ('teaser', 'spot', 'promo', 'reel', 'featurette')) * 3 - ('#2' in t or '#3' in t))
    if cards and (best := max(cards, key=score)) and score(best) > 0 and oembed_ok(best['youtube']):
        trailer = {k2: best[k2] for k2 in ('youtube', 'title', 'channel')}
    elif trailer: trailer['channel'] = None
    m = re.search(r'<meta property="og:image" content="([^"]+)"', h); poster = m.group(1) if m else None
    cast = []
    for li in re.findall(r'<li class="card[^"]*">(.*?)</li>', h, re.S):
        n = re.search(r'<p><a[^>]*href="(/person/[^"?]+)[^"]*"[^>]*>(.*?)</a></p>', li)
        c = re.search(r'<p class="character">(.*?)</p>', li, re.S)
        im = re.search(r'src="([^"]+/t/p/[^"]+)"', li)
        if n: cast.append({'name': clean(n.group(2)), 'character': re.sub(r'\s*\d+ Episodes?$', '', clean(c.group(1)) if c else ''),
                           'photo': img(im.group(1), 'w185') if im else None, 'tmdb': 'https://www.themoviedb.org' + n.group(1)})
    crew = [(clean(a), clean(b)) for a, b in re.findall(r'<li class="profile">\s*<p><a[^>]*>(.*?)</a></p>\s*<p class="character">(.*?)</p>', h, re.S)]
    lead = [a for a, b in crew if 'Director' in b] or [a for a, b in crew if 'Creator' in b]
    role = 'Directed by' if any('Director' in b for a, b in crew) else 'Created by'
    fmt = None
    if f['kind'] == 'series':
        m = re.search(r'<h2><a href="[^"]*/season/(\d+)[^"]*">([^<]+)</a></h2>.*?(\d{4}) • (\d+) Episodes', h, re.S)
        if m and 'Miniseries' in m.group(2): fmt = f"Miniseries · {m.group(4)} episodes"
        elif m: fmt = f"Series · {m.group(1)} season{'s' if m.group(1) != '1' else ''}"
        else: fmt = 'Series'
    else: fmt = 'Film'
    q = [x if isinstance(x, dict) else {'q': x} for x in qs['questions'].get(f['slug'], [])]
    out.append({**{k: f[k] for k in ('n', 'slug', 'title', 'year', 'kind', 'synopsis')}, 'format': fmt, 'runtime': runtime, 'genres': genres,
                'rating': cert, 'credit': {'role': role, 'names': lead[:2]} if lead else None,
                'poster': img(poster, 'w500'), 'posterSmall': img(poster, 'w342'), 'cast': cast[:8], 'trailer': trailer,
                'imdb': 'https://www.imdb.com/title/' + f['imdb'] + '/', 'tmdb': 'https://www.themoviedb.org' + f['tmdbPath'],
                'chapter': qs['chapters'][f['slug']], 'questions': q, 'questionsVerified': bool(q)})
meta = {'source': {'title': 'Films that Build the Prepared Civilian Mindset Vol. 1', 'channel': 'Dirty Civilian', 'url': 'https://www.youtube.com/watch?v=acveRw9DxTs', 'published': '2025-12-13'},
        'closing': qs['closing'], 'chaptersNote': qs['chapters_note'], 'generated': time.strftime('%Y-%m-%d')}
os.makedirs(T('public', 'data'), exist_ok=True)
json.dump({'meta': meta, 'films': out}, open(T('public', 'data', 'films.json'), 'w'), ensure_ascii=False, indent=1)
bad = [x['slug'] for x in out if not (x['poster'] and x['trailer'] and len(x['cast']) >= 4 and x['questions'])]
print(len(out), 'titles;', sum(len(x['questions']) for x in out), 'questions; gaps:', bad or 'none')
