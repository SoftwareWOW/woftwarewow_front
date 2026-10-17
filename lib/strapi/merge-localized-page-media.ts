import type { StrapiSuperagencyPage } from '@/lib/strapi/types/pages';

const SKIP_KEYS = new Set([
  'id',
  'documentId',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'locale',
  'seo',
]);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

/** True when a hero (or image list) has at least one usable media URL. */
export function hasUsableMedia(value: unknown): boolean {
  if (value == null) return false;

  if (Array.isArray(value)) {
    return value.some((item) => hasUsableMedia(item));
  }

  if (!isPlainObject(value)) return false;

  if (typeof value.url === 'string' && value.url.trim()) return true;

  if (isPlainObject(value.image) && hasUsableMedia(value.image)) return true;
  if (Array.isArray(value.images) && hasUsableMedia(value.images)) return true;
  if (isPlainObject(value.thumbnail) && hasUsableMedia(value.thumbnail)) return true;
  if (Array.isArray(value.items) && value.items.some((item) => hasUsableMedia(item))) return true;
  if (Array.isArray(value.projects) && value.projects.some((item) => hasUsableMedia(item)))
    return true;
  if (Array.isArray(value.steps) && value.steps.some((item) => hasUsableMedia(item))) return true;

  return false;
}

function heroNeedsMediaFallback(hero: unknown): boolean {
  if (!isPlainObject(hero)) return true;
  if (Array.isArray(hero.images)) return !hasUsableMedia(hero.images);
  // Heroes without an images relation are fine (text-only / CSS background).
  return false;
}

/**
 * Keep localized copy from `primary`, but fill missing media from `fallback`
 * (typically en-US when fr-CA localization omitted images).
 */
export function mergeLocalizedPageMedia(
  primary: StrapiSuperagencyPage,
  fallback: StrapiSuperagencyPage | null | undefined,
): StrapiSuperagencyPage {
  if (!fallback) return primary;

  const primaryRecord = primary as unknown as Record<string, unknown>;
  const fallbackRecord = fallback as unknown as Record<string, unknown>;
  const merged: Record<string, unknown> = { ...primaryRecord };

  const primaryHero = primaryRecord.hero;
  const fallbackHero = fallbackRecord.hero;
  if (heroNeedsMediaFallback(primaryHero) && isPlainObject(fallbackHero) && hasUsableMedia(fallbackHero.images)) {
    merged.hero = {
      ...(isPlainObject(primaryHero) ? primaryHero : {}),
      images: fallbackHero.images,
    };
  }

  for (const [key, fallbackValue] of Object.entries(fallbackRecord)) {
    if (SKIP_KEYS.has(key) || key === 'hero') continue;
    if (fallbackValue == null) continue;

    const primaryValue = primaryRecord[key];

    // Localized entry missing the whole section — keep primary (do not swap in English copy).
    if (primaryValue == null) continue;

    if (!hasUsableMedia(primaryValue) && hasUsableMedia(fallbackValue)) {
      merged[key] = mergeSectionMedia(primaryValue, fallbackValue);
    }
  }

  return merged as unknown as StrapiSuperagencyPage;
}

function mergeSectionMedia(primary: unknown, fallback: unknown): unknown {
  if (Array.isArray(primary) && Array.isArray(fallback)) {
    if (!hasUsableMedia(primary) && hasUsableMedia(fallback)) return fallback;
    return primary;
  }

  if (!isPlainObject(primary) || !isPlainObject(fallback)) {
    return hasUsableMedia(primary) ? primary : fallback;
  }

  const next: Record<string, unknown> = { ...primary };

  for (const mediaKey of ['image', 'images', 'thumbnail', 'items', 'projects', 'steps', 'groups']) {
    const primaryMedia = primary[mediaKey];
    const fallbackMedia = fallback[mediaKey];
    if (!hasUsableMedia(primaryMedia) && hasUsableMedia(fallbackMedia)) {
      next[mediaKey] = fallbackMedia;
    } else if (
      Array.isArray(primaryMedia) &&
      Array.isArray(fallbackMedia) &&
      primaryMedia.length &&
      fallbackMedia.length
    ) {
      next[mediaKey] = primaryMedia.map((item, index) => {
        const fallbackItem = fallbackMedia[index];
        if (!hasUsableMedia(item) && hasUsableMedia(fallbackItem)) {
          return mergeSectionMedia(item, fallbackItem);
        }
        if (isPlainObject(item) && isPlainObject(fallbackItem)) {
          return mergeSectionMedia(item, fallbackItem);
        }
        return item;
      });
    }
  }

  return next;
}
