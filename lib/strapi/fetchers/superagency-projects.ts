import type { Locale } from '@/i18n/config';
import { fetchCollection } from '@/lib/strapi/client';
import type { StrapiSuperagencyProject } from '@/lib/strapi/types';
import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

const PROJECT_POPULATE = { thumbnail: true };

export const getSuperagencyProjectsForPortfolio = cache(
  async (locale: Locale): Promise<StrapiSuperagencyProject[]> => {
    noStore();
    return fetchCollection<StrapiSuperagencyProject>('wowsuperagencyprojects', {
      locale,
      populate: PROJECT_POPULATE,
      sort: 'order:asc',
      logErrors: false,
    });
  },
);