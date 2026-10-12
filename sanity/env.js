export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-24";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "";
export const isSanityConfigured = Boolean(projectId && dataset);
