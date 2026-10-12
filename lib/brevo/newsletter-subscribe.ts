import { defaultLocale, locales, type Locale } from '@/i18n/config'
import { getRequiredEnv, getRequiredIntEnv } from '@/lib/brevo/env'

const BREVO_CONTACTS_URL = 'https://api.brevo.com/v3/contacts'

export type NewsletterSubscribeInput = {
  email: string
  locale?: string
  origin?: string | null
}

export type NewsletterSubscribeResult =
  | { ok: true; status: 'confirmation_sent' }
  | { ok: true; status: 'already_subscribed' }
  | { ok: false; error: string; code: 'config' | 'blacklisted' | 'invalid' | 'upstream' }

type BrevoContact = {
  email?: string
  emailBlacklisted?: boolean
  listIds?: number[]
}

type BrevoConfig = {
  apiKey: string
  listId: number
  templateId: number
}

function resolveLocale(locale?: string): Locale {
  if (locale && (locales as readonly string[]).includes(locale)) {
    return locale as Locale
  }
  return defaultLocale
}

function buildRedirectionUrl(origin: string | null | undefined, locale: Locale): string | null {
  const base = origin?.replace(/\/$/, '') ?? getRequiredEnv('SITE_URL')?.replace(/\/$/, '') ?? null

  if (!base) return null

  return `${base}/${locale}/wowhub`
}

function getNewsletterConfig(): BrevoConfig | null {
  const apiKey = getRequiredEnv('BREVO_API_KEY')
  const listId = getRequiredIntEnv('BREVO_NEWSLETTER_LIST_ID')
  const templateId = getRequiredIntEnv('BREVO_NEWSLETTER_DOI_TEMPLATE_ID')

  if (!apiKey || listId === null || templateId === null) {
    return null
  }

  return { apiKey, listId, templateId }
}

async function brevoFetch(
  apiKey: string,
  path: string,
  init?: Parameters<typeof fetch>[1],
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const response = await fetch(`${BREVO_CONTACTS_URL}${path}`, {
    ...init,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
      ...init?.headers,
    },
  })

  let body: unknown = null
  const text = await response.text()
  if (text) {
    try {
      body = JSON.parse(text) as unknown
    } catch {
      body = text
    }
  }

  return { ok: response.ok, status: response.status, body }
}

async function getContact(apiKey: string, email: string): Promise<BrevoContact | null> {
  const encoded = encodeURIComponent(email)
  const result = await brevoFetch(apiKey, `/${encoded}`, { method: 'GET' })

  if (result.status === 404) {
    return null
  }

  if (!result.ok) {
    console.error('[newsletter] Brevo GET contact failed:', result.status, result.body)
    throw new Error('upstream')
  }

  return result.body as BrevoContact
}

async function initiateDoubleOptIn(
  config: BrevoConfig,
  email: string,
  redirectionUrl: string,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  return brevoFetch(config.apiKey, '', {
    method: 'POST',
    body: JSON.stringify({
      email,
      includeListIds: [config.listId],
      templateId: config.templateId,
      redirectionUrl,
      updateEnabled: true,
    }),
  })
}

export function normalizeNewsletterEmail(value: string): string {
  return value.trim().toLowerCase()
}

export async function subscribeToWowHubNewsletter(input: NewsletterSubscribeInput): Promise<NewsletterSubscribeResult> {
  const config = getNewsletterConfig()
  if (!config) {
    return {
      ok: false,
      error: 'Newsletter signup is not configured yet. Please try again later.',
      code: 'config',
    }
  }

  const email = normalizeNewsletterEmail(input.email)
  if (!email) {
    return { ok: false, error: 'Please enter a valid email address.', code: 'invalid' }
  }

  const locale = resolveLocale(input.locale)
  const redirectionUrl = buildRedirectionUrl(input.origin, locale)
  if (!redirectionUrl) {
    console.error('[newsletter] Missing origin/SITE_URL for redirectionUrl')
    return {
      ok: false,
      error: 'Newsletter signup is not configured yet. Please try again later.',
      code: 'config',
    }
  }

  try {
    const existing = await getContact(config.apiKey, email)

    if (existing?.emailBlacklisted) {
      return {
        ok: false,
        error: 'This email cannot be subscribed. Please contact us for help.',
        code: 'blacklisted',
      }
    }

    const listIds = existing?.listIds ?? []
    if (listIds.includes(config.listId)) {
      return { ok: true, status: 'already_subscribed' }
    }

    const doiResult = await initiateDoubleOptIn(config, email, redirectionUrl)

    if (doiResult.ok || doiResult.status === 204) {
      return { ok: true, status: 'confirmation_sent' }
    }

    if (doiResult.status === 400) {
      const message =
        typeof doiResult.body === 'object' &&
        doiResult.body !== null &&
        'message' in doiResult.body &&
        typeof (doiResult.body as { message: unknown }).message === 'string'
          ? (doiResult.body as { message: string }).message
          : ''

      if (/already exist/i.test(message)) {
        const refreshed = await getContact(config.apiKey, email)
        if (refreshed?.listIds?.includes(config.listId)) {
          return { ok: true, status: 'already_subscribed' }
        }

        const retry = await initiateDoubleOptIn(config, email, redirectionUrl)
        if (retry.ok || retry.status === 204) {
          return { ok: true, status: 'confirmation_sent' }
        }
      }
    }

    console.error('[newsletter] Brevo DOI failed:', doiResult.status, doiResult.body)
    return {
      ok: false,
      error: 'Unable to start your subscription right now. Please try again shortly.',
      code: 'upstream',
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'upstream') {
      return {
        ok: false,
        error: 'Unable to start your subscription right now. Please try again shortly.',
        code: 'upstream',
      }
    }
    console.error('[newsletter] Unexpected error:', error)
    return {
      ok: false,
      error: 'Unable to start your subscription right now. Please try again shortly.',
      code: 'upstream',
    }
  }
}
