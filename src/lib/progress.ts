import { useSyncExternalStore } from "react";

const KEY = "prepared-films-v1";

export type Progress = {
  watched: string[];
  notes: Record<string, string>;
};

const empty: Progress = { watched: [], notes: {} };

let state: Progress = empty;
const listeners = new Set<() => void>();
let bootstrapped = false;

function read(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    const notes: Record<string, string> = {};
    if (parsed.notes && typeof parsed.notes === "object") {
      for (const [key, value] of Object.entries(parsed.notes)) {
        if (typeof value === "string") notes[key] = value;
      }
    }
    return {
      watched: Array.isArray(parsed.watched)
        ? parsed.watched.filter((id) => typeof id === "string")
        : [],
      notes,
    };
  } catch {
    return empty;
  }
}

function commit(next: Progress) {
  state = next;
  localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener());
}

function bootstrap() {
  if (bootstrapped || typeof localStorage === "undefined") return;
  bootstrapped = true;
  const loaded = read();
  if (loaded.watched.length || Object.keys(loaded.notes).length) {
    state = loaded;
    listeners.forEach((listener) => listener());
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  queueMicrotask(bootstrap);
  return () => listeners.delete(listener);
}

export function noteKey(slug: string, index: number) {
  return `${slug}:${index}`;
}

export function useProgress() {
  const snapshot = useSyncExternalStore(subscribe, () => state, () => empty);

  return {
    watched: snapshot.watched,
    notes: snapshot.notes,
    isWatched(slug: string) {
      return snapshot.watched.includes(slug);
    },
    toggleWatched(slug: string) {
      const watched = snapshot.watched.includes(slug)
        ? snapshot.watched.filter((id) => id !== slug)
        : [...snapshot.watched, slug];
      commit({ watched, notes: snapshot.notes });
    },
    setNote(slug: string, index: number, value: string) {
      const key = noteKey(slug, index);
      const notes = { ...snapshot.notes };
      if (value.trim()) notes[key] = value;
      else delete notes[key];
      commit({ watched: snapshot.watched, notes });
    },
  };
}
