import type { Locale } from '@/i18n/config';
import type { DivisionId } from '@/i18n/division-paths';
import { fetchSingleType } from '@/lib/strapi/client';
import { divisionLandingApiPath } from '@/lib/strapi/division-landing/division-landing-image-manifest';
import {
  pageDefByDivisionId,
  type DivisionLandingPageDef,
  type DivisionLandingSectionDef,
} from '@/lib/strapi/division-landing/division-landing-slots';
import type { StrapiDivisionLandingPage } from '@/lib/strapi/types/division-landing';
import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

function imagePopulate() {
  return { populate: { image: true } };
}

function sectionPopulate(section: DivisionLandingSectionDef): Record<string, unknown> {
  if (section.contentMode === 'repeatable') {
    return {
      populate: {
        items: {
          populate: { image: imagePopulate() },
        },
      },
    };
  }
  if (section.contentMode === 'workExplorer') {
    if (section.workExplorerVariant === 'customCards') {
      return {
        populate: {
          filterGroups: {
            populate: {
              cards: { populate: { image: imagePopulate() } },
            },
          },
        },
      };
    }
    return {
      populate: {
        filterGroups: {
          populate: {
            projects: { populate: { thumbnail: true } },
          },
        },
      },
    };
  }
  const fieldPopulate: Record<string, unknown> = {};
  for (const slot of section.slots) {
    fieldPopulate[slot.fieldName] = imagePopulate();
  }
  return { populate: fieldPopulate };
}

function buildPopulateForDef(def: DivisionLandingPageDef): Record<string, unknown> {
  const populate: Record<string, unknown> = {};
  for (const section of def.sections) {
    populate[section.attributeName] = sectionPopulate(section);
  }
  if (def.hasPortfolio) {
    populate.portfolio = {
      populate: {
        projects: { populate: { thumbnail: true } },
      },
    };
  }
  return populate;
}

export const getDivisionLandingPage = cache(
  async (divisionId: DivisionId, locale: Locale): Promise<StrapiDivisionLandingPage | null> => {
    noStore();
    const def = pageDefByDivisionId(divisionId);
    if (!def) return null;
    const apiPath = divisionLandingApiPath(divisionId);
    return fetchSingleType<StrapiDivisionLandingPage>(apiPath, {
      locale,
      populate: buildPopulateForDef(def),
    });
  },
);