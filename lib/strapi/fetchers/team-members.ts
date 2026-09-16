import type { Locale } from '@/i18n/config';
import { fetchCollection } from '@/lib/strapi/client';
import { mapPageTeamMembers } from '@/lib/strapi/mappers/page-sections';
import type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections';
import type { StrapiTeamMember } from '@/lib/strapi/types/pages';

export async function getSuperagencyTeamMembers(
  locale: Locale,
): Promise<CmsTeamMember[] | null> {
  const members = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: { image: true },
    sort: 'order:asc',
  });

  return mapPageTeamMembers({ members });
}
