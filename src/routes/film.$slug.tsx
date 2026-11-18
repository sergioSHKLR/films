import { createFileRoute, Link } from "@tanstack/react-router";
import { getFilm, themeLabel } from "@/data/films";
import brand from "@/lib/og/brand.json";
import { noteKey, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/film/$slug")({
  component: FilmPage,
});

function FilmPage() {
  const { slug } = Route.useParams();
  const film = getFilm(slug);
  const progress = useProgress();

  if (!film) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl">Not in the catalog</h1>
        <p className="mt-2 text-muted">That title is not one of the thirty-one.</p>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-accent">
          Back to the list
        </Link>
      </main>
    );
  }

  const imdb = `https://www.imdb.com/title/${film.imdb}/`;
  const tmdb = `https://www.themoviedb.org${film.tmdbPath}`;

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center text-xs font-semibold tracking-[0.22em] text-fg uppercase"
          >
            ← {brand.name}
          </Link>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent tabular-nums uppercase">
            No. {String(film.n).padStart(2, "0")}
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div>
          <div className="poster-frame overflow-hidden rounded-card border border-line bg-surface-2">
            <img src={film.poster} alt={`${film.title} poster`} className="h-full w-full object-cover" />
          </div>
          <button
            type="button"
            onClick={() => progress.toggleWatched(film.slug)}
            className={
              progress.isWatched(film.slug)
                ? "mt-3 min-h-11 w-full bg-accent text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase"
                : "mt-3 min-h-11 w-full border border-line bg-surface text-xs font-semibold tracking-[0.18em] text-fg uppercase"
            }
          >
            {progress.isWatched(film.slug) ? "Watched" : "Mark watched"}
          </button>
        </div>

        <article>
          <p className="text-xs font-semibold tracking-[0.28em] text-muted uppercase">
            {film.year} · {film.kind === "series" ? "Series" : "Film"}
          </p>
          <h1 className="mt-2 text-4xl font-normal tracking-tight text-fg sm:text-5xl">{film.title}</h1>
          <div className="mt-4 h-[3px] w-16" style={{ backgroundColor: brand.plate.copper }} />
          <ul className="mt-3 flex flex-wrap gap-2">
            {film.themes.map((theme) => (
              <li
                key={theme}
                className="border border-line px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-muted uppercase"
              >
                {themeLabel[theme]}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-2xl text-lg text-fg">{film.synopsis}</p>
          <p className="mt-4 flex flex-wrap gap-4 text-sm">
            <a className="min-h-11 inline-flex items-center text-accent underline underline-offset-4" href={imdb}>
              IMDb
            </a>
            <a className="min-h-11 inline-flex items-center text-fg underline decoration-line underline-offset-4" href={tmdb}>
              TMDB
            </a>
          </p>

          <h2 className="mt-10 text-2xl">Cast</h2>
          <ul className="cast-scroll mt-4 flex gap-4 overflow-x-auto pb-2">
            {film.cast.map((person) => (
              <li key={person.name} className="w-28 shrink-0">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt=""
                    className="size-16 rounded-full border border-line object-cover"
                  />
                ) : (
                  <div className="flex size-16 items-center justify-center rounded-full border border-line bg-surface text-sm font-semibold">
                    {initials(person.name)}
                  </div>
                )}
                <p className="mt-2 text-sm leading-tight font-semibold text-fg">{person.name}</p>
                {person.character ? <p className="text-xs text-muted">{person.character}</p> : null}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl">Discussion</h2>
          {film.questionsFrom === "companion" ? (
            <p className="mt-2 text-sm text-muted">
              Companion prompts. The shared transcript did not print a question set for this title.
            </p>
          ) : (
            <p className="mt-2 text-sm text-muted">
              From the Vol. 1 list. Notes stay in this browser.
            </p>
          )}
          <ol className="mt-4 flex flex-col gap-6">
            {film.questions.map((question, index) => (
              <li key={question} className="border-t border-line pt-4">
                <p className="text-base text-fg">
                  <span className="mr-2 font-display text-accent tabular-nums">{index + 1}.</span>
                  {question}
                </p>
                <label className="mt-3 block">
                  <span className="sr-only">Note on question {index + 1}</span>
                  <textarea
                    value={progress.notes[noteKey(film.slug, index)] ?? ""}
                    onChange={(event) => progress.setNote(film.slug, index, event.target.value)}
                    rows={3}
                    placeholder="Your note"
                    className="w-full resize-y rounded-card border border-line bg-surface px-3 py-3 text-base text-fg outline-none placeholder:text-muted focus:border-accent"
                  />
                </label>
              </li>
            ))}
          </ol>
        </article>
      </main>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}
