# Watchlist

A single-page catalog of the 31 films and series in [Dirty Civilian’s *Films that Build the Prepared Civilian Mindset, Vol. 1*](https://www.youtube.com/watch?v=acveRw9DxTs).

Each title has:

- Poster and principal cast (hotlinked from [TMDB](https://www.themoviedb.org/))
- An original short synopsis
- The discussion questions from the video (The Eternaut uses companion prompts; that title’s questions were not in the shared transcript)
- IMDb and TMDB links
- Watched state and notes, stored in this browser only

Filter by format, theme, and watched status. Search covers title, year, cast, and synopsis.

This product uses the TMDB API data and images but is not endorsed or certified by TMDB.

## Source in this repo

- `src/data/films.ts` — the catalog
- `src/routes/index.tsx` — the grid
- `src/routes/film.$slug.tsx` — the title page
- `src/lib/progress.ts` — local watched marks and notes
- `src/styles.css` — the field-catalog theme

The running app is a TanStack Start PWA. Install it from the browser when the host offers “Add to Home Screen.”
