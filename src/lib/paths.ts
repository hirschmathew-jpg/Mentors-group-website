/**
 * Prefix a root-relative path with the site's base path (e.g. when deployed
 * to GitHub Pages under /Mentors-group-website/). Pass paths starting with "/".
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return base + path;
}
