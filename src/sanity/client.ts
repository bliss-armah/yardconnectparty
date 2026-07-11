import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, hasSanityProject } from "./env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});

/**
 * Fetch a GROQ query, returning the provided fallback when no Sanity project
 * is configured or when the request fails. This keeps the site rendering with
 * curated placeholder content until the CMS is populated.
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
    return data;
  } catch {
    return fallback;
  }
}
