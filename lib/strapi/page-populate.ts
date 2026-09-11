import { getPageManifest } from '@/lib/strapi/page-registry';

function sectionComponentPopulate(component: string): unknown {
  switch (component) {
    case 'sections.page-hero':
      return { populate: { image: { populate: { image: true } } } };
    case 'sections.hero-about':
    case 'sections.page-rfq':
      return true;
    case 'sections.page-technologies':
      return { populate: { items: true } };
    case 'sections.page-process':
      return { populate: { steps: true } };
    case 'sections.page-projects':
      return { populate: { projects: { populate: { thumbnail: true } } } };
    case 'sections.page-images':
      return { populate: { images: { populate: { image: true } } } };
    case 'sections.page-faq':
      return { populate: { items: true } };
    case 'sections.page-team-members':
      return { populate: { members: { populate: { image: true } } } };
    case 'sections.page-partners':
      return { populate: { partners: { populate: { logo: true } } } };
    case 'sections.page-client-logos':
      return { populate: { clientLogos: { populate: { logo: true } } } };
    case 'sections.page-blog-posts':
      return { populate: { posts: true } };
    case 'sections.page-career-jobs':
      return { populate: { jobs: true } };
    case 'sections.page-office-locations':
      return { populate: { locations: true } };
    default:
      return true;
  }
}

export function buildSuperagencyPagePopulate(slug: string): Record<string, unknown> {
  const manifest = getPageManifest(slug);
  const populate: Record<string, unknown> = {
    hero: sectionComponentPopulate('sections.page-hero'),
    seo: { populate: { ogImage: true } },
  };

  if (manifest) {
    for (const field of manifest.fields) {
      populate[field.name] = sectionComponentPopulate(field.component);
    }
  }

  return populate;
}
