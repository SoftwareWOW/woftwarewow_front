import type { Locale } from '@/i18n/config'
import type { SuperagencyHomepageData } from '@/lib/strapi/types'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'

let warned = false

export function shouldUseStrapiDevFallback(): boolean {
  if (process.env.STRAPI_USE_DEV_FALLBACK === '0') return false
  if (process.env.STRAPI_USE_DEV_FALLBACK === '1') return true
  return process.env.NODE_ENV === 'development'
}

/** When true, homepage skips live Strapi (avoids fetch-failed noise if CMS host is blocked). */
export function shouldPreferDevFallbackOverLive(): boolean {
  if (!shouldUseStrapiDevFallback()) return false
  if (process.env.STRAPI_TRY_LIVE === '1' || process.env.STRAPI_FORCE_LIVE === '1') return false
  return true
}

export async function hasDevFallbackFile(locale: Locale): Promise<boolean> {
  if (!shouldUseStrapiDevFallback()) return false
  const filePath = path.join(process.cwd(), 'data', 'strapi-dev-fallback', `${locale}.json`)
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

export async function loadSuperagencyHomepageDevFallback(
  locale: Locale,
): Promise<SuperagencyHomepageData | null> {
  if (!shouldUseStrapiDevFallback()) return null

  const filePath = path.join(process.cwd(), 'data', 'strapi-dev-fallback', `${locale}.json`)
  try {
    const raw = await readFile(filePath, 'utf8')
    const parsed = JSON.parse(raw) as Partial<SuperagencyHomepageData>

    if (!warned) {
      warned = true
      console.warn(
        `[Strapi] Using dev fallback CMS from data/strapi-dev-fallback/${locale}.json (live Strapi unreachable). Set STRAPI_USE_DEV_FALLBACK=0 to disable.`,
      )
    }

    return {
      hero: parsed.hero ?? null,
      stats: parsed.stats ?? null,
      solutions: parsed.solutions ?? null,
      humanTouch: parsed.humanTouch ?? null,
      growthCta: parsed.growthCta ?? null,
      ecosystem: parsed.ecosystem ?? null,
      divisions: parsed.divisions ?? [],
      projects: parsed.projects ?? [],
      testimonials: parsed.testimonials ?? [],
      faqs: parsed.faqs ?? [],
      solutionCategories: parsed.solutionCategories ?? [],
      growthArticles: parsed.growthArticles ?? [],
      partnerLogos: parsed.partnerLogos ?? [],
    }
  } catch {
    return null
  }
}

export function isHomepageCmsEmpty(data: SuperagencyHomepageData): boolean {
  return (
    !data.hero &&
    !data.stats &&
    !data.solutions &&
    data.divisions.length === 0 &&
    data.projects.length === 0 &&
    data.testimonials.length === 0
  )
}
