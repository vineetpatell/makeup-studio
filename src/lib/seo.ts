import { SITE_CONFIG } from "@/data/studio";

/**
 * Shared head builder so every route ships a unique title, description,
 * OpenGraph pair and canonical path without repeating meta arrays.
 */
export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
