import { getHeroImagesForPage } from '@/lib/strapi/hero-image-manifest';
import {
  mergeCmsHero,
  type CmsHeroImage,
  type CmsPageHeroProps,
} from '@/lib/strapi/mappers/page-sections';

/** Resolve hero images: CMS when populated, otherwise frontend static defaults from manifest. */
export function resolveHeroImages(
  slug: string,
  cmsImages?: CmsHeroImage[] | null,
): CmsHeroImage[] {
  const manifest = getHeroImagesForPage(slug);
  const defaults = manifest.images.map((item) => ({
    src: item.path,
    alt: item.alt,
  }));

  if (!cmsImages?.length) return defaults;

  const valid = cmsImages.filter((item) => item.src);
  if (!valid.length) return defaults;

  if (manifest.layout === 'none') return defaults;

  if (manifest.layout === 'multi' || manifest.layout === 'hover' || manifest.layout === 'slider') {
    if (valid.length >= defaults.length) {
      return valid.slice(0, defaults.length);
    }
    return [...valid, ...defaults.slice(valid.length)];
  }

  return valid.length > 0 ? valid : defaults;
}

const DEFAULT_HERO_BACKGROUND = '/images/hero-gradient-background.png';

export function resolveHeroBackgroundImage(
  cmsBackground?: CmsHeroImage | null,
  fallbackPath = DEFAULT_HERO_BACKGROUND,
): CmsHeroImage {
  if (cmsBackground?.src) return cmsBackground;
  return { src: fallbackPath };
}

export function buildPageHero<T extends CmsPageHeroProps>(
  slug: string,
  defaults: T,
  cms?: CmsPageHeroProps | null,
): T & { images: CmsHeroImage[]; backgroundImage: CmsHeroImage } {
  const merged = mergeCmsHero(defaults, cms);
  return {
    ...merged,
    images: resolveHeroImages(slug, merged.images),
    backgroundImage: resolveHeroBackgroundImage(merged.backgroundImage),
  };
}
