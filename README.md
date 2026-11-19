<p align="center" data-brand-icon><img src="brand-kit/films/icons/tile-dark.svg" alt="FILMS" width="128" height="128"></p>

# FILMS

**Militia AV training.** Live: https://sergioshklr.github.io/films/ · Brand: [brand-kit/](brand-kit/README.md) (SHKLR brand kit, final 19 Nov 2026).

A poster wall of the 31 films and series in [Dirty Civilian’s *Films that Build the Prepared Civilian Mindset, Vol. 1*](https://www.youtube.com/watch?v=acveRw9DxTs), in the video’s order. Tap a poster to open its page:

- Poster, year, format, runtime, rating, genres and director/creator
- An original short synopsis
- Top-billed cast with headshots (from TMDB)
- The trailer (privacy-enhanced YouTube embed, loads on click) and an **Open on YouTube** link
- IMDb, TMDB and a link to the moment in the video where Dirty Civilian covers the title
- Dirty Civilian’s discussion questions, each with a box for your answer

Answers and the **watched** mark save automatically in your browser (localStorage). **My answers** lists everything you wrote, copies it all as text, and exports/imports a JSON backup. It works as an installable PWA (Android and ChromeOS Chrome: *Install app*) and keeps working offline after the first visit. Posters and headshots are cached as you browse.

## How it’s built

Plain HTML, CSS and JavaScript with no framework and no build step. Routes are hash routes (`#/film/the-matrix`), so deep links work on GitHub Pages.

| Path | What it is |
|---|---|
| `public/index.html`, `public/app.js`, `public/styles.css` | The app |
| `public/sw.js`, `public/manifest.webmanifest` | Offline support and install |
| `public/data/films.json` | The catalog, generated |
| `tools/catalog.json` | Titles, IMDb/TMDB ids, original synopses |
| `tools/questions.json` | Dirty Civilian’s questions and the video chapter times |
| `tools/build_data.py` | Rebuilds `films.json` from the two files above plus public TMDB title pages (runtime, genres, rating, cast, trailer). No API key needed. |
| `.github/workflows/pages.yml` | Checks the site and deploys `public/` to GitHub Pages |

To refresh the data, run `python3 tools/build_data.py --refetch` and commit `public/data/films.json`. To preview locally, serve `public/` with any static server.

The questions were transcribed from the video’s English captions. Bonus questions are labelled. One bonus question (Letters from Iwo Jima) is cut off in the captions and is marked in the data. The closing question from the end of the video is on **My answers**.

This product uses TMDB data and images but is not endorsed or certified by TMDB. Fonts: SHKLR Mono Narrow (OFL, self-hosted) for the interface, system serif for reading text.
