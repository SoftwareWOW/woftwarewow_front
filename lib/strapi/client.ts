import type { Locale } from '@/i18n/config';
import {
  getStrapiFallbackLocale,
  toStrapiLocale,
  type StrapiLocale,
} from '@/lib/strapi/locale';

const STRAPI_URL = (process.env.STRAPI_URL ?? '').replace(/\/$/, '');
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export type StrapiMedia = {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
};

export type StrapiResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

export type StrapiCollectionResponse<T> = {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export function getStrapiMediaUrl(media?: StrapiMedia | null): string | undefined {
  if (!media?.url) return undefined;
  if (media.url.startsWith('http')) return media.url;
  if (!STRAPI_URL) return undefined;

  return `${STRAPI_URL}${media.url}`;
}

export function isStrapiConfigured(): boolean {
  return STRAPI_URL.length > 0;
}

type FetchOptions = {
  locale: Locale;
  populate?: string | Record<string, unknown>;
  sort?: string;
  filters?: Record<string, unknown>;
  revalidate?: number;
};

type InternalFetchOptions = Omit<FetchOptions, 'locale'> & {
  strapiLocale: StrapiLocale;
};

function appendNestedSearchParam(
  searchParams: URLSearchParams,
  key: string,
  value: unknown,
) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      appendNestedSearchParam(searchParams, `${key}[${index}]`, item);
    });
    return;
  }

  if (value !== null && typeof value === 'object') {
    Object.entries(value).forEach(([childKey, childValue]) => {
      appendNestedSearchParam(searchParams, `${key}[${childKey}]`, childValue);
    });
    return;
  }

  if (value !== undefined && value !== null) {
    searchParams.set(key, String(value));
  }
}

async function strapiFetchWithLocale<T>(
  path: string,
  { strapiLocale, populate = '*', sort, filters, revalidate }: InternalFetchOptions,
): Promise<T | null> {
  if (!isStrapiConfigured()) return null;

  const url = new URL(`/api/${path}`, STRAPI_URL);

  url.searchParams.set('locale', strapiLocale);

  if (typeof populate === 'string') {
    url.searchParams.set('populate', populate);
  } else if (populate) {
    appendNestedSearchParam(url.searchParams, 'populate', populate);
  }

  if (sort) url.searchParams.set('sort', sort);
  if (filters) url.searchParams.set('filters', JSON.stringify(filters));

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  try {
    const response = await fetch(url.toString(), {
      headers,
      next: { revalidate: revalidate ?? Number(process.env.STRAPI_REVALIDATE_SECONDS ?? 60) },
    });

    if (!response.ok) {
      if (response.status !== 404) {
        console.error(`Strapi fetch failed: ${path} (${response.status})`);
      }
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Strapi fetch error: ${path}`, error);
    return null;
  }
}

export async function strapiFetch<T>(
  path: string,
  { locale, populate = '*', sort, filters, revalidate }: FetchOptions,
): Promise<T | null> {
  const strapiLocale = toStrapiLocale(locale);
  const result = await strapiFetchWithLocale<T>(path, {
    strapiLocale,
    populate,
    sort,
    filters,
    revalidate,
  });

  if (result) return result;

  const fallbackLocale = getStrapiFallbackLocale(strapiLocale);
  if (!fallbackLocale) return null;

  return strapiFetchWithLocale<T>(path, {
    strapiLocale: fallbackLocale,
    populate,
    sort,
    filters,
    revalidate,
  });
}

export async function fetchSingleType<T>(
  apiId: string,
  options: FetchOptions,
): Promise<T | null> {
  const result = await strapiFetch<StrapiResponse<T>>(apiId, options);
  return result?.data ?? null;
}

export async function fetchCollection<T>(
  apiId: string,
  options: FetchOptions,
): Promise<T[]> {
  const result = await strapiFetch<StrapiCollectionResponse<T>>(apiId, options);
  return result?.data ?? [];
}
