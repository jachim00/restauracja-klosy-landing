import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Łączenie klas Tailwind z dedupą konfliktów. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Prefiksuje ścieżkę zasobu (np. /assets/...) o basePath.
 * Konieczne, bo next/image z `unoptimized` NIE dokleja basePath do src,
 * a na GitHub Pages strona stoi pod /<repo>. Lokalnie basePath puste.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
