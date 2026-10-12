import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      stega: false,
    })
  : null;

export async function sanityFetch({ query, params = {}, fallback }) {
  if (!client) {
    return fallback;
  }

  try {
    const result = await client.fetch(query, params, { next: { revalidate: 60 } });

    if (Array.isArray(fallback) && Array.isArray(result) && result.length === 0 && fallback.length > 0) {
      return fallback;
    }

    return result ?? fallback;
  } catch (error) {
    console.warn("Sanity fetch failed. Falling back to local content.", error);
    return fallback;
  }
}
