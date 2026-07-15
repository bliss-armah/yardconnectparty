/**
 * Canonical origin for the site. Used for metadataBase, canonical URLs,
 * sitemap/robots entries, and JSON-LD. Override per environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview or a custom domain).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://yardconnect.party"
).replace(/\/$/, "");

/** Absolute URL for a path, safe against double slashes. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
