import type { CmsLandingWorkExplorer } from '@/lib/strapi/types/division-landing';

/** Maps CMS work explorer (filter groups + Superagency projects) to Social portfolio grid props. */
export function mapWorkExplorerToSocialPortfolio(work: CmsLandingWorkExplorer) {
  const filters = [{ label: 'ALL', slug: 'ALL' as const }, ...work.filters];
  const projects = work.cards.map((card) => ({
    id: card.id,
    title: card.title,
    industryLabel: card.industryLabel ?? '',
    year: card.year ?? '',
    category: card.category,
    href: card.href,
    image: card.image,
    alt: card.alt,
  }));
  return { filters, projects };
}