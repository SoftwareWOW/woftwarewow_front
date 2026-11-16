import type { DivisionId } from '@/i18n/division-paths';
import {
  pageDefByDivisionId,
  type DivisionLandingPageDef,
} from '@/lib/strapi/division-landing/division-landing-slots';
import { getStrapiMediaUrl, isAllowedNextImageSrc } from '@/lib/strapi/client';
import { mapStrapiProjects } from '@/lib/strapi/mappers/superagency';
import type {
  CmsLandingCard,
  CmsLandingClientReview,
  CmsLandingWorkExplorer,
  DivisionImageMap,
  DivisionLandingContentMap,
  StrapiDivisionLandingPage,
  StrapiImageWithAlt,
  StrapiLandingRepeatableSection,
  StrapiLandingServiceCard,
  StrapiLandingWorkSection,
} from '@/lib/strapi/types/division-landing';

function resolveImageWithAlt(item: StrapiImageWithAlt | null | undefined): string | undefined {
  if (!item) return undefined;
  const fromMedia = getStrapiMediaUrl(item.image ?? undefined);
  if (fromMedia && isAllowedNextImageSrc(fromMedia)) return fromMedia;
  return undefined;
}

function mapLandingCard(raw: StrapiLandingServiceCard): CmsLandingCard | null {
  const image = resolveImageWithAlt(raw.image);
  const hasText = Boolean(raw.title?.trim() || raw.description?.trim());
  if (!hasText && !image) return null;
  return {
    title: raw.title?.trim() ?? '',
    description: raw.description?.trim() ?? undefined,
    href: raw.href?.trim() ?? undefined,
    image,
    alt: raw.image?.alt?.trim() ?? undefined,
    slug: raw.slug?.trim() ?? undefined,
    number: raw.number?.trim() ?? undefined,
  };
}

function mapRepeatableSection(section: StrapiLandingRepeatableSection | null | undefined): CmsLandingCard[] {
  const items = section?.items ?? [];
  return items.map(mapLandingCard).filter((item): item is CmsLandingCard => item !== null);
}

function mapClientSection(section: StrapiLandingRepeatableSection | null | undefined): CmsLandingClientReview[] {
  const items = section?.items ?? [];
  const reviews: CmsLandingClientReview[] = [];
  for (const raw of items as unknown as Array<{
    reviewText?: string | null;
    authorName?: string | null;
    authorRole?: string | null;
    rating?: number | null;
    image?: StrapiImageWithAlt | null;
  }>) {
    const authorImage = resolveImageWithAlt(raw.image);
    const hasText = Boolean(raw.reviewText?.trim() || raw.authorName?.trim());
    if (!hasText && !authorImage) continue;
    reviews.push({
      reviewText: raw.reviewText?.trim() ?? '',
      authorName: raw.authorName?.trim() ?? '',
      authorRole: raw.authorRole?.trim() ?? undefined,
      authorImage,
      rating: raw.rating ?? 5,
    });
  }
  return reviews;
}

function mapWorkExplorer(section: StrapiLandingWorkSection | null | undefined): CmsLandingWorkExplorer | null {
  const groups = section?.filterGroups ?? [];
  if (!groups.length) return null;

  const filters: CmsLandingWorkExplorer['filters'] = [];
  const cards: CmsLandingWorkExplorer['cards'] = [];
  let cardId = 1;

  for (const group of groups) {
    const label = group.label?.trim();
    if (!label) continue;
    const slug =
      group.filterKey?.trim() ||
      label.replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '').toUpperCase() ||
      label.toUpperCase();
    filters.push({ label, slug });

    const projects = group.projects ?? [];
    for (const project of projects) {
      const mapped = mapStrapiProjects([project])?.[0];
      if (!mapped) continue;
      const industry =
        typeof project.industry === 'string' && project.industry.trim()
          ? project.industry.trim()
          : typeof project.client === 'string' && project.client.trim()
            ? project.client.trim()
            : undefined;
      const year =
        project.year != null && String(project.year).trim() ? String(project.year).trim() : undefined;
      cards.push({
        id: cardId++,
        title: mapped.title ?? '',
        description: mapped.description ?? '',
        image: mapped.thumbnail,
        alt: mapped.alt ?? mapped.title ?? '',
        href: mapped.href,
        category: slug,
        year,
        industryLabel: industry,
      });
    }
  }

  if (!filters.length || !cards.length) return null;
  return { filters, cards };
}

function mapFromPageDef(
  data: StrapiDivisionLandingPage | null,
  def: DivisionLandingPageDef,
): DivisionImageMap {
  const map: Record<string, string[]> = {};
  if (!data) return map;

  for (const section of def.sections) {
    if (section.contentMode !== 'imageSlots') continue;
    const component = data[section.attributeName] as Record<string, StrapiImageWithAlt | null> | null;
    if (!component) continue;

    const urls: string[] = [];
    let hasAny = false;
    for (const slot of section.slots) {
      const url = resolveImageWithAlt(component[slot.fieldName]);
      if (url) {
        urls[slot.index] = url;
        hasAny = true;
      }
    }
    if (hasAny) {
      map[section.sectionKey] = urls;
    }
  }

  return map;
}

function mapContentFromPageDef(
  data: StrapiDivisionLandingPage | null,
  def: DivisionLandingPageDef,
): DivisionLandingContentMap {
  const out: DivisionLandingContentMap = {};
  if (!data) return out;

  for (const section of def.sections) {
    const raw = data[section.attributeName];
    if (section.contentMode === 'repeatable') {
      const items =
        section.cardKind === 'client'
          ? mapClientSection(raw as StrapiLandingRepeatableSection)
          : mapRepeatableSection(raw as StrapiLandingRepeatableSection);
      if (items.length) out[section.attributeName] = items;
    } else if (section.contentMode === 'workExplorer') {
      const work = mapWorkExplorer(raw as StrapiLandingWorkSection);
      if (work) out[section.attributeName] = work;
    }
  }

  return out;
}

export function mapDivisionLandingImages(
  data: StrapiDivisionLandingPage | null,
  divisionId: DivisionId,
): DivisionImageMap {
  const def = pageDefByDivisionId(divisionId);
  if (!def) return {};
  return mapFromPageDef(data, def);
}

export function mapDivisionLandingContent(
  data: StrapiDivisionLandingPage | null,
  divisionId: DivisionId,
): DivisionLandingContentMap {
  const def = pageDefByDivisionId(divisionId);
  if (!def) return {};
  return mapContentFromPageDef(data, def);
}

export function landingContentCards(
  content: DivisionLandingContentMap,
  attributeName: string,
): CmsLandingCard[] | undefined {
  const value = content[attributeName];
  if (!Array.isArray(value) || !value.length) return undefined;
  if ('reviewText' in (value[0] as object)) return undefined;
  return value as CmsLandingCard[];
}

export function landingContentClients(
  content: DivisionLandingContentMap,
  attributeName: string,
): CmsLandingClientReview[] | undefined {
  const value = content[attributeName];
  if (!Array.isArray(value) || !value.length) return undefined;
  if ('reviewText' in (value[0] as object)) return value as CmsLandingClientReview[];
  return undefined;
}

export function landingContentWork(
  content: DivisionLandingContentMap,
  attributeName: string,
): CmsLandingWorkExplorer | undefined {
  const value = content[attributeName];
  if (!value || Array.isArray(value)) return undefined;
  return value as CmsLandingWorkExplorer;
}
