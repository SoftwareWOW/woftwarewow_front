import { getPageManifest } from '@/lib/strapi/page-registry';

/**
 * Use wildcard populate per field so Strapi only expands relations that exist
 * on each component. Explicit keys like hero.images or techStack.backgroundImage
 * cause 400 ValidationError when those fields are absent from the CMS schema.
 */
const SECTION_POPULATE = { populate: '*' };

export function buildSuperagencyPagePopulate(slug: string): Record<string, unknown> {
  const manifest = getPageManifest(slug);
  const populate: Record<string, unknown> = {
    hero: SECTION_POPULATE,
    seo: true,
  };

  if (manifest) {
    for (const field of manifest.fields) {
      populate[field.name] = SECTION_POPULATE;
    }
  }

  return populate;
}
