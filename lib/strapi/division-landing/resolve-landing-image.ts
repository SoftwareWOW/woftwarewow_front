import type { DivisionImageMap } from '@/lib/strapi/types/division-landing';

export function resolveLandingImage(
  map: DivisionImageMap | undefined,
  sectionKey: string,
  index: number,
  fallback: string,
): string {
  if (!map) return fallback;
  const urls = map[sectionKey];
  if (!urls?.length) return fallback;
  const resolved = urls[index];
  return resolved?.trim() ? resolved : fallback;
}

export function resolveLandingImageList(
  map: DivisionImageMap | undefined,
  sectionKey: string,
  fallbacks: readonly string[],
): string[] {
  if (!map) return [...fallbacks];
  const urls = map[sectionKey];
  if (!urls?.length) return [...fallbacks];
  return fallbacks.map((fallback, index) => {
    const resolved = urls[index];
    return resolved?.trim() ? resolved : fallback;
  });
}