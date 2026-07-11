export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "production",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "",
);

/**
 * Returns a safe fallback in development so the site renders before a Sanity
 * project is connected. In production a missing value is a hard error.
 */
function assertValue<T>(v: T | undefined, fallback: T): T {
  if (v === undefined || v === "") {
    if (process.env.NODE_ENV === "production") {
      return v ?? fallback;
    }
    return fallback;
  }
  return v;
}

export const hasSanityProject = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
