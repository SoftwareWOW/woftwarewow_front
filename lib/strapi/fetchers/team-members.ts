import type { Locale } from '@/i18n/config';
import { fetchCollection } from '@/lib/strapi/client';
import {
  mapPageTeamMembers,
  mapPageTeamSection,
  mapStrapiTeamMember,
  type CmsTeamMember,
  type CmsTeamSectionProps,
} from '@/lib/strapi/mappers/page-sections';
import type { StrapiPageTeamMembers, StrapiTeamMember } from '@/lib/strapi/types/pages';

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

function buildTeamSectionFromCollection(
  members: CmsTeamMember[],
): CmsTeamSectionProps | null {
  if (!members.length) return null;

  return {
    featuredMember: members[0],
    galleryMembers: members.slice(1),
  };
}

/** Resolve featured member (top card) and gallery members from page section or collection. */
export async function resolveTeamSection(
  section: StrapiPageTeamMembers | null | undefined,
  locale: Locale,
): Promise<CmsTeamSectionProps | null> {
  const fromSection = mapPageTeamSection(section);
  if (fromSection) return fromSection;

  const collection = await getSuperagencyTeamMembers(locale);
  return collection ? buildTeamSectionFromCollection(collection) : null;
}

/** Flat member list for pages that still expect a single members array. */
export async function resolveTeamMemberList(
  section: StrapiPageTeamMembers | null | undefined,
  locale: Locale,
): Promise<CmsTeamMember[] | null> {
  const teamSection = await resolveTeamSection(section, locale);
  if (!teamSection) return null;

  return [teamSection.featuredMember, ...teamSection.galleryMembers];
}
