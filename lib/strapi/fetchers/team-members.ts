import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import { fetchCollection, fetchDocument } from '@/lib/strapi/client';
import {
  mapPageTeamSection,
  mapPageTeamMembers,
  mapStrapiTeamMember,
  mapTeamMemberDetail,
  pickFeaturedTeamMember,
  type CmsTeamMember,
  type CmsTeamMemberDetail,
  type CmsTeamSectionProps,
} from '@/lib/strapi/mappers/page-sections';
import type { StrapiPageTeamMembers, StrapiTeamMember } from '@/lib/strapi/types/pages';

const TEAM_MEMBER_POPULATE = {
  image: true,
  socialLinks: true,
} as const;

export async function getSuperagencyTeamMembers(
  locale: Locale,
): Promise<CmsTeamMember[] | null> {
  const members = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: { image: true, socialLinks: true },
    sort: 'order:asc',
  });

  return mapPageTeamMembers({ members });
}

async function hydrateTeamSectionFromCollection(
  section: StrapiPageTeamMembers,
  locale: Locale,
): Promise<CmsTeamSectionProps | null> {
  const collection = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: { image: true, socialLinks: true },
  });

  if (!collection.length) return null;

  const byDocumentId = new Map(collection.map((member) => [member.documentId, member]));
  const byMemberId = new Map(
    collection.filter((member) => member.memberId).map((member) => [member.memberId!, member]),
  );
  const byNumericId = new Map(collection.map((member) => [member.id, member]));

  const resolveRef = (ref: unknown): StrapiTeamMember | null => {
    if (!ref || typeof ref !== 'object') return null;
    const record = ref as StrapiTeamMember;
    if (record.name) return record;

    if (record.documentId && byDocumentId.has(record.documentId)) {
      return byDocumentId.get(record.documentId)!;
    }
    if (record.memberId && byMemberId.has(record.memberId)) {
      return byMemberId.get(record.memberId)!;
    }
    if (record.id != null && byNumericId.has(record.id)) {
      return byNumericId.get(record.id)!;
    }

    return null;
  };

  const featuredMember = mapStrapiTeamMember(resolveRef(section.featuredMember), 0);
  const galleryMembers = (section.members ?? [])
    .map((member) => resolveRef(member))
    .filter((member): member is StrapiTeamMember => member != null)
    .map(mapStrapiTeamMember)
    .filter((member): member is CmsTeamMember => member !== null);

  if (!featuredMember && !galleryMembers.length) return null;

  return {
    featuredMember: featuredMember ?? null,
    galleryMembers,
  };
}

/**
 * Top card → CMS featuredMember only.
 * Bottom gallery → CMS members only (never featuredMember, never full collection).
 */
export async function resolveTeamSection(
  section: StrapiPageTeamMembers | null | undefined,
  locale: Locale,
): Promise<CmsTeamSectionProps | null> {
  if (section == null) return null;

  const mapped = mapPageTeamSection(section);
  if (mapped?.featuredMember || mapped?.galleryMembers.length) {
    return mapped;
  }

  const hydrated = await hydrateTeamSectionFromCollection(section, locale);
  if (hydrated) return hydrated;

  // CMS team section exists but Strapi did not return relations (unpublished links).
  const collection = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: { image: true, socialLinks: true },
    sort: 'order:asc',
  });

  if (!collection.length) {
    return {
      featuredMember: null,
      galleryMembers: [],
    };
  }

  const members = collection
    .map(mapStrapiTeamMember)
    .filter((member): member is NonNullable<ReturnType<typeof mapStrapiTeamMember>> => member !== null);

  if (!members.length) {
    return {
      featuredMember: null,
      galleryMembers: [],
    };
  }

  return pickFeaturedTeamMember(members);
}

export async function getSuperagencyTeamMemberByRef(
  ref: string,
  locale: Locale,
): Promise<CmsTeamMemberDetail | null> {
  const byDocumentId = await fetchDocument<StrapiTeamMember>(
    'superagency-team-members',
    ref,
    {
      locale,
      populate: TEAM_MEMBER_POPULATE,
      logErrors: false,
    },
  );

  const mappedDocument = mapTeamMemberDetail(byDocumentId);
  if (mappedDocument) return mappedDocument;

  const byMemberId = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: TEAM_MEMBER_POPULATE,
    filters: { memberId: { $eq: ref } },
  });

  return mapTeamMemberDetail(byMemberId[0]);
}

export async function getSuperagencyTeamMemberParams(
  locale: Locale,
): Promise<Array<{ id: string }>> {
  const members = await fetchCollection<StrapiTeamMember>('superagency-team-members', {
    locale,
    populate: { image: true, socialLinks: true },
    filters: { isActive: { $eq: true } },
    sort: 'order:asc',
  });

  return members
    .map((member) => member.documentId ?? member.memberId)
    .filter((id): id is string => Boolean(id))
    .map((id) => ({ id }));
}

export async function getAllSuperagencyTeamMemberParams(): Promise<
  Array<{ locale: Locale; id: string }>
> {
  const params: Array<{ locale: Locale; id: string }> = [];

  for (const locale of locales) {
    const memberParams = await getSuperagencyTeamMemberParams(locale);
    params.push(...memberParams.map(({ id }) => ({ locale, id })));
  }

  return params;
}

/** Flat member list for pages that still expect a single members array. */
export async function resolveTeamMemberList(
  section: StrapiPageTeamMembers | null | undefined,
  locale: Locale,
): Promise<CmsTeamMember[] | null> {
  const teamSection = await resolveTeamSection(section, locale);
  if (!teamSection) return null;

  return [
    ...(teamSection.featuredMember ? [teamSection.featuredMember] : []),
    ...teamSection.galleryMembers,
  ];
}
