import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, hasSanityProject } from "./env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** A value counts as missing when the CMS gives us nothing usable for it. */
function isBlank(v: unknown): boolean {
  return (
    v === undefined ||
    v === null ||
    (typeof v === "string" && v.trim() === "") ||
    (Array.isArray(v) && v.length === 0)
  );
}

/**
 * Overlay the Sanity response on top of the curated fallback so that any field
 * the CMS does not return keeps its fallback value. Objects merge field by
 * field; arrays replace wholesale (their items have different shapes than the
 * fallback), and blank incoming values defer to the fallback.
 */
export function mergeFallback<T>(fallback: T, incoming: unknown): T {
  if (isBlank(incoming)) {
    return fallback;
  }
  if (isPlainObject(fallback) && isPlainObject(incoming)) {
    const merged: Record<string, unknown> = { ...fallback };
    for (const key of new Set([
      ...Object.keys(fallback),
      ...Object.keys(incoming),
    ])) {
      merged[key] = mergeFallback(fallback[key], incoming[key]);
    }
    return merged as T;
  }
  return incoming as T;
}

/**
 * Fetch a GROQ query and overlay the result on the provided fallback. When no
 * Sanity project is configured, the request fails, or a given field comes back
 * empty, the curated fallback content is used for that field. This keeps the
 * site rendering complete even when the CMS is partially populated.
 */
export async function sanityFetch<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
): Promise<T> {
  if (!hasSanityProject) {
    return fallback;
  }
  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
    if (data === null || data === undefined) {
      return fallback;
    }
    return mergeFallback(fallback, data);
  } catch {
    return fallback;
  }
}
