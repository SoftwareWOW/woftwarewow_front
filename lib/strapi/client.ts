import type { Locale } from '@/i18n/config';
import { getStrapiLocaleChain, type StrapiLocale } from '@/lib/strapi/locale';

const DEFAULT_STRAPI_URL = 'https://wow.softwarewow.xyz';

/** Next.js dev ports — STRAPI_URL must not point here (returns HTML, not Strapi JSON). */
const LIKELY_NEXT_DEV_PORTS = new Set(['3000', '3001', '3002']);

function resolveStrapiBaseUrl(): string {
  const raw = process.env.STRAPI_URL?.trim();
  if (!raw) return DEFAULT_STRAPI_URL;

  const normalized = raw.replace(/\/$/, '');

  try {
    const parsed = new URL(normalized.includes('://') ? normalized : `https://${normalized}`);
    const isLocalHost =
      parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
    const port = parsed.port || (parsed.protocol === 'https:' ? '443' : '80');

    if (isLocalHost && LIKELY_NEXT_DEV_PORTS.has(port)) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[Strapi] STRAPI_URL is set to the Next.js app (${normalized}). Using ${DEFAULT_STRAPI_URL} instead. Point STRAPI_URL at Strapi (e.g. ${DEFAULT_STRAPI_URL} or http://localhost:1337).`,
        );
      }
      return DEFAULT_STRAPI_URL;
    }
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Strapi] Invalid STRAPI_URL "${raw}"; using ${DEFAULT_STRAPI_URL}.`);
    }
    return DEFAULT_STRAPI_URL;
  }

  return normalized;
}

const STRAPI_URL = resolveStrapiBaseUrl();
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export type StrapiMediaFormatKey = 'thumbnail' | 'small' | 'medium' | 'large';

export type StrapiMediaFormatVariant = {
  url: string;
  width?: number;
  height?: number;
};

export type StrapiMedia = {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  formats?: Partial<Record<StrapiMediaFormatKey, StrapiMediaFormatVariant | null>> | null;
};

export function resolveStrapiUploadUrl(path: string): string | undefined {
  const url = path.trim();
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

/** Prefer responsive Strapi formats over the original upload (better for next/image). */
function pickStrapiMediaPath(media: StrapiMedia): string | undefined {
  const fromFormat =
    media.formats?.large?.url?.trim() ||
    media.formats?.medium?.url?.trim() ||
    media.formats?.small?.url?.trim();

  const path = (fromFormat || media.url)?.trim();
  return path || undefined;
}

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
  const path = media ? pickStrapiMediaPath(media) : undefined;
  if (!path) return undefined;
  return resolveStrapiUploadUrl(path);
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

type StrapiFetchAttempt<T> =
  | { kind: 'data'; data: T }
  | { kind: 'miss' }
  | { kind: 'non_json' };

async function strapiFetchAttemptWithBase<T>(
  path: string,
  {
    strapiLocale,
    populate = '*',
    sort,
    filters,
    revalidate,
    logErrors = true,
  }: InternalFetchOptions,
  baseUrl: string,
): Promise<StrapiFetchAttempt<T>> {
  const url = new URL(`/api/${path}`, baseUrl);

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

  const response = await fetch(url.toString(), {
    headers,
    next: { revalidate: revalidate ?? Number(process.env.STRAPI_REVALIDATE_SECONDS ?? 60) },
  });

  const rawBody = await response.text();

  if (!response.ok) {
    if (response.status !== 404 && logErrors) {
      let detail = '';
      try {
        const body = JSON.parse(rawBody) as {
          error?: { message?: string; details?: { key?: string } };
        };
        const message = body.error?.message;
        const key = body.error?.details?.key;
        detail = message ? `: ${message}${key ? ` (${key})` : ''}` : '';
      } catch {
        // ignore parse errors (HTML error pages, etc.)
      }
      console.error(`Strapi fetch failed: ${path} (${response.status})${detail}`);
    }
    return { kind: 'miss' };
  }

  const trimmed = rawBody.trim();
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) {
    return { kind: 'non_json' };
  }

  try {
    return { kind: 'data', data: JSON.parse(trimmed) as T };
  } catch (error) {
    if (logErrors) {
      console.error(`Strapi fetch JSON parse failed: ${path}`, error);
    }
    return { kind: 'miss' };
  }
}

async function strapiFetchWithLocale<T>(
  path: string,
  options: InternalFetchOptions,
): Promise<T | null> {
  if (!isStrapiConfigured()) return null;

  const basesToTry =
    STRAPI_URL === DEFAULT_STRAPI_URL ? [STRAPI_URL] : [STRAPI_URL, DEFAULT_STRAPI_URL];

  for (const [index, baseUrl] of basesToTry.entries()) {
    try {
      const attempt = await strapiFetchAttemptWithBase<T>(path, options, baseUrl);

      if (attempt.kind === 'data') {
        if (
          index > 0 &&
          process.env.NODE_ENV === 'development'
        ) {
          console.warn(
            `[Strapi] ${path}: primary STRAPI_URL returned HTML; loaded from ${DEFAULT_STRAPI_URL}. Fix STRAPI_URL in .env.local.`,
          );
        }
        return attempt.data;
      }

      if (attempt.kind === 'non_json' && index < basesToTry.length - 1) {
        continue;
      }

      if (attempt.kind === 'non_json' && options.logErrors !== false) {
        console.warn(
          `[Strapi] ${path}: non-JSON response (check STRAPI_URL — should be ${DEFAULT_STRAPI_URL} or http://localhost:1337).`,
        );
      }
    } catch (error) {
      if (index === basesToTry.length - 1 && options.logErrors !== false) {
        console.error(`Strapi fetch error: ${path}`, error);
      }
    }
  }

  return null;
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
