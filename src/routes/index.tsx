import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { films, SOURCE_VIDEO, themeLabel, type FilmKind, type Theme } from "@/data/films";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({ component: Home });

type KindFilter = "all" | FilmKind;
type WatchFilter = "any" | "watched" | "open";

function Home() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("all");
  const [watch, setWatch] = useState<WatchFilter>("any");
  const [theme, setTheme] = useState<Theme | "all">("all");
  const progress = useProgress();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return films.filter((film) => {
      if (kind !== "all" && film.kind !== kind) return false;
      if (theme !== "all" && !film.themes.includes(theme)) return false;
      const seen = progress.isWatched(film.slug);
      if (watch === "watched" && !seen) return false;
      if (watch === "open" && seen) return false;
      if (!q) return true;
      const hay = [film.title, film.synopsis, ...film.cast.map((c) => c.name), String(film.year)]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, kind, watch, theme, progress]);

  const watchedCount = films.filter((film) => progress.isWatched(film.slug)).length;

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Vol. 1 · Field catalog
              </p>
              <h1 className="mt-1 text-4xl text-fg sm:text-5xl">Prepared Films</h1>
            </div>
            <p className="hidden text-right text-sm text-muted sm:block">
              <span className="tabular-nums text-fg">{watchedCount}</span> of {films.length} marked
              watched
            </p>
          </div>
          <p className="max-w-2xl text-base text-muted">
            Thirty-one films and series from Dirty Civilian's list. Posters, principal cast,
            a short synopsis, and the discussion questions — saved on this device.
          </p>
          <label className="block">
            <span className="sr-only">Search titles, cast, or synopsis</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              suppressHydrationWarning
              className="w-full rounded-card border border-line bg-surface px-4 py-3 text-base text-fg outline-none placeholder:text-muted focus:border-accent"
            />
          </label>
          <div className="flex flex-col gap-3">
            <ChipRow label="Format">
              <Chip active={kind === "all"} onClick={() => setKind("all")}>
                All
              </Chip>
              <Chip active={kind === "film"} onClick={() => setKind("film")}>
                Films
              </Chip>
              <Chip active={kind === "series"} onClick={() => setKind("series")}>
                Series
              </Chip>
            </ChipRow>
            <ChipRow label="Status">
              <Chip active={watch === "any"} onClick={() => setWatch("any")}>
                Any
              </Chip>
              <Chip active={watch === "open"} onClick={() => setWatch("open")}>
                Not watched
              </Chip>
              <Chip active={watch === "watched"} onClick={() => setWatch("watched")}>
                Watched
              </Chip>
            </ChipRow>
            <ChipRow label="Theme">
              <Chip active={theme === "all"} onClick={() => setTheme("all")}>
                All themes
              </Chip>
              {(Object.keys(themeLabel) as Theme[]).map((key) => (
                <Chip key={key} active={theme === key} onClick={() => setTheme(key)}>
                  {themeLabel[key]}
                </Chip>
              ))}
            </ChipRow>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="mb-4 text-sm text-muted">
          <span className="tabular-nums text-fg">{visible.length}</span> showing
          <span className="sm:hidden">
            {" "}
            · <span className="tabular-nums text-fg">{watchedCount}</span> watched
          </span>
        </p>
        {visible.length === 0 ? (
          <p className="rounded-card border border-line bg-surface px-4 py-8 text-center text-muted">
            Nothing matches. Clear a filter or search a title.
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((film) => (
              <li key={film.slug}>
                <Link
                  to="/film/$slug"
                  params={{ slug: film.slug }}
                  className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="poster-frame relative overflow-hidden rounded-card border border-line bg-surface-2">
                    <img
                      src={film.poster}
                      alt=""
                      className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                    />
                    {progress.isWatched(film.slug) ? (
                      <span className="absolute top-2 left-2 rounded-full bg-accent px-2 py-1 text-xs font-semibold text-accent-ink">
                        Watched
                      </span>
                    ) : null}
                    <span className="absolute right-2 bottom-2 rounded-full bg-bg/80 px-2 py-1 text-xs font-semibold text-fg tabular-nums">
                      {String(film.n).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg leading-tight text-fg group-hover:text-accent">
                    {film.title}
                  </h2>
                  <p className="text-sm text-muted">
                    {film.year} · {film.kind === "series" ? "Series" : "Film"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted sm:px-6">
          <p>
            Questions follow{" "}
            <a className="text-fg underline decoration-line underline-offset-4" href={SOURCE_VIDEO}>
              Dirty Civilian, Films that Build the Prepared Civilian Mindset Vol. 1
            </a>
            . The Eternaut uses companion prompts; that title's questions were not in the shared
            transcript.
          </p>
          <p className="mt-2">
            Posters and cast photographs from{" "}
            <a
              className="text-fg underline decoration-line underline-offset-4"
              href="https://www.themoviedb.org/"
            >
              TMDB
            </a>
            . This catalog is not endorsed or certified by TMDB.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ChipRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-16 shrink-0 text-xs font-semibold tracking-wide text-muted uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "min-h-11 rounded-full bg-accent px-3 text-sm font-semibold text-accent-ink"
          : "min-h-11 rounded-full border border-line bg-surface px-3 text-sm font-semibold text-fg"
      }
    >
      {children}
    </button>
  );
}
