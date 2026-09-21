/** Prefisso GitHub Pages (es. /Attimi). Vuoto in locale. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Path pubblico con basePath per deploy su GitHub Pages */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
