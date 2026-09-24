import type { Locale } from '@/i18n/config';
import { getStrapiLocaleChain, type StrapiLocale } from '@/lib/strapi/locale';

const DEFAULT_STRAPI_URL = 'https://wow.softwarewow.xyz';
const STRAPI_URL = (process.env.STRAPI_URL || DEFAULT_STRAPI_URL).replace(/\/$/, '');
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

function isStrapiUploadPath(url: string): boolean {
  return url.startsWith('/uploads/');
}

function isFrontendAssetPath(url: string): boolean {
  return (
    url.startsWith('/images/') ||
    url.startsWith('/public/') ||
    url.startsWith('/_next/') ||
    url.startsWith('/favicon')
  );
}

/** True when `src` is safe for next/image (local assets or Strapi /uploads/ URLs). */
export function isAllowedNextImageSrc(src: string | undefined): boolean {
  const value = src?.trim();
  if (!value) return false;

  if (isFrontendAssetPath(value) || value.startsWith('/images/')) return true;

  let pathname: string;
  if (value.startsWith('http://') || value.startsWith('https://')) {
    try {
      pathname = new URL(value).pathname;
    } catch {
      return false;
    }
  } else if (value.startsWith('/')) {
    pathname = value;
  } else {
    return false;
  }

  return isStrapiUploadPath(pathname);
}

export function getStrapiMediaUrl(media?: StrapiMedia | null): string | undefined {
  if (!media?.url) return undefined;

  const url = media.url.trim();
  if (!url) return undefined;

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return isAllowedNextImageSrc(url) ? url : undefined;
  }

  if (url.startsWith('/')) {
    if (isFrontendAssetPath(url)) return url;
    if (isStrapiUploadPath(url)) {
      if (!STRAPI_URL) return undefined;
      const absolute = `${STRAPI_URL}${url}`;
      return isAllowedNextImageSrc(absolute) ? absolute : undefined;
    }
    return undefined;
  }

  if (!STRAPI_URL) return undefined;
  const normalized = url.replace(/^\//, '');
  if (!normalized.startsWith('uploads/')) return undefined;
  const absolute = `${STRAPI_URL}/${normalized}`;
  return isAllowedNextImageSrc(absolute) ? absolute : undefined;
}

export function isStrapiConfigured(): boolean {
  return STRAPI_URL.length > 0;
}

type FetchOptions = {
  locale: Locale;
  /** Set to `false` to omit populate (custom feed routes). */
  populate?: string | Record<string, unknown> | false;
  sort?: string;
  filters?: Record<string, unknown>;
  revalidate?: number;
  /** When false, non-404 fetch failures are not logged (used for populate fallbacks). */
  logErrors?: boolean;
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
  {
    strapiLocale,
    populate = '*',
    sort,
    filters,
    revalidate,
    logErrors = true,
  }: InternalFetchOptions,
): Promise<T | null> {
  if (!isStrapiConfigured()) return null;

  const url = new URL(`/api/${path}`, STRAPI_URL);

  url.searchParams.set('locale', strapiLocale);

  if (populate !== false) {
    if (typeof populate === 'string') {
      url.searchParams.set('populate', populate);
    } else if (populate) {
      appendNestedSearchParam(url.searchParams, 'populate', populate);
    }
  }

  if (sort) url.searchParams.set('sort', sort);
  if (filters) appendNestedSearchParam(url.searchParams, 'filters', filters);

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
      if (response.status !== 404 && logErrors) {
        let detail = '';
        try {
          const body = (await response.json()) as {
            error?: { message?: string; details?: { key?: string } };
          };
          const message = body.error?.message;
          const key = body.error?.details?.key;
          detail = message ? `: ${message}${key ? ` (${key})` : ''}` : '';
        } catch {
          // ignore parse errors
        }
        console.error(`Strapi fetch failed: ${path} (${response.status})${detail}`);
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
  { locale, populate = '*', sort, filters, revalidate, logErrors = true }: FetchOptions,
): Promise<T | null> {
  const localeChain = getStrapiLocaleChain(locale);

  for (const [index, strapiLocale] of localeChain.entries()) {
    const result = await strapiFetchWithLocale<T>(path, {
      strapiLocale,
      populate,
      sort,
      filters,
      revalidate,
      logErrors,
    });

    if (!result) continue;

    if (
      process.env.NODE_ENV === 'development' &&
      index > 0
    ) {
      console.info(
        `[Strapi] ${path}: used fallback locale "${strapiLocale}" (requested ${localeChain[0]})`,
      );
    }

    return result;
  }

  return null;
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

export async function fetchDocument<T>(
  apiId: string,
  documentId: string,
  options: FetchOptions,
): Promise<T | null> {
  const result = await strapiFetch<StrapiResponse<T>>(`${apiId}/${documentId}`, options);
  return result?.data ?? null;
}
