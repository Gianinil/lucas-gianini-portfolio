/**
 * Prefixes a `public/`-relative path with Vite's configured base URL
 * (`import.meta.env.BASE_URL`) — `'/'` locally, `'/lucas-gianini-portfolio/'`
 * on GitHub Pages. Hardcoding a leading `/` on these paths works in dev but
 * 404s once the site is served from a GitHub Pages project subpath, so every
 * reference to a `public/` asset from TS/TSX should go through this helper.
 *
 * Pass the path without a leading slash: `withBase('projects/foo.svg')`.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
