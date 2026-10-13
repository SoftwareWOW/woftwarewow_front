import { defaultLocale, locales, type Locale } from '@/i18n/config'
import { getRequiredEnv, getRequiredIntEnv } from '@/lib/brevo/env'

const BREVO_CONTACTS_URL = 'https://api.brevo.com/v3/contacts'
const BREVO_SMTP_TEMPLATES_URL = 'https://api.brevo.com/v3/smtp/templates'

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

  return `${base}/${locale}/hub`
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

async function getContact(apiKey: string, email: string): Promise<BrevoContact | null | 'lookup_failed'> {
  const encoded = encodeURIComponent(email)
  const result = await brevoFetch(apiKey, `/${encoded}`, { method: 'GET' })

  if (result.status === 404) {
    return null
  }

  if (!result.ok) {
    console.warn('[newsletter] Brevo GET contact failed; continuing with DOI:', result.status, result.body)
    return 'lookup_failed'
  }

  return result.body as BrevoContact
}

/** @see https://developers.brevo.com/reference/create-doi-contact */
async function initiateDoubleOptIn(
  config: BrevoConfig,
  email: string,
  redirectionUrl: string,
): Promise<{ ok: boolean; status: number; body: unknown }> {
  return brevoFetch(config.apiKey, '/doubleOptinConfirmation', {
    method: 'POST',
    body: JSON.stringify({
      email,
      includeListIds: [config.listId],
      templateId: config.templateId,
      redirectionUrl,
    }),
  })
}

function doiRequestAccepted(status: number): boolean {
  return status === 201 || status === 204
}

function brevoErrorMessage(body: unknown): string {
  if (typeof body === 'object' && body !== null && 'message' in body) {
    const message = (body as { message: unknown }).message
    if (typeof message === 'string') return message
  }
  return ''
}

const DOI_TEMPLATE_SETUP_HINT =
  'Edit template #8 in Brevo: Marketing → Templates → WOW Hub newsletter subscription. Add a button with link type "Double opt-in link" (must use {{ doubleoptin }}). Optional tag: optin.'

function mapBrevoClientError(status: number, body: unknown, config?: BrevoConfig): string {
  const message = brevoErrorMessage(body)
  const isDev = process.env.NODE_ENV === 'development'

  if (status === 401 && /IP address|unrecognised IP|unrecognized IP|unauthorized/i.test(message)) {
    return 'Brevo blocked this server. Open Brevo → Security → Authorized IPs, add your current IP (or disable IP filtering), then try again.'
  }

  if (status === 400 && /template/i.test(message)) {
    const id = config?.templateId ?? getRequiredIntEnv('BREVO_NEWSLETTER_DOI_TEMPLATE_ID')
    return isDev
      ? `Brevo rejected template ID ${id}. ${DOI_TEMPLATE_SETUP_HINT}`
      : 'Unable to start your subscription right now. Please try again shortly.'
  }

  if (status === 400 && /list/i.test(message)) {
    const id = config?.listId ?? getRequiredIntEnv('BREVO_NEWSLETTER_LIST_ID')
    return isDev
      ? `Brevo rejected list ID ${id}. Use Contacts → Lists → WOW Hub Newsletter (your list is #3).`
      : 'Unable to start your subscription right now. Please try again shortly.'
  }

  return 'Unable to start your subscription right now. Please try again shortly.'
}

async function fetchDoiTemplateIssue(apiKey: string, templateId: number): Promise<string | null> {
  try {
    const response = await fetch(`${BREVO_SMTP_TEMPLATES_URL}/${templateId}`, {
      headers: { accept: 'application/json', 'api-key': apiKey },
    })

    if (response.status === 401) {
      return 'Brevo blocked this server. Open Brevo → Security → Authorized IPs, add your current IP (or disable IP filtering), then try again.'
    }

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as { doiTemplate?: boolean; isActive?: boolean }
    if (data.isActive === false) {
      return `Brevo template #${templateId} is inactive. Set it to Active in Marketing → Templates.`
    }
    if (data.doiTemplate === false) {
      return DOI_TEMPLATE_SETUP_HINT
    }
    return null
  } catch {
    return null
  }
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

    if (existing && existing !== 'lookup_failed') {
      if (existing.emailBlacklisted) {
        return {
          ok: false,
          error: 'This email cannot be subscribed. Please contact us for help.',
          code: 'blacklisted',
        }
      }

      const listIds = existing.listIds ?? []
      if (listIds.includes(config.listId)) {
        return { ok: true, status: 'already_subscribed' }
      }
    }

    const templateIssue = await fetchDoiTemplateIssue(config.apiKey, config.templateId)
    if (templateIssue) {
      console.error('[newsletter] DOI template validation:', templateIssue)
      return { ok: false, error: templateIssue, code: 'config' }
    }

    const doiResult = await initiateDoubleOptIn(config, email, redirectionUrl)

    if (doiResult.ok || doiRequestAccepted(doiResult.status)) {
      return { ok: true, status: 'confirmation_sent' }
    }

    if (doiResult.status === 401) {
      return {
        ok: false,
        error: mapBrevoClientError(doiResult.status, doiResult.body, config),
        code: 'upstream',
      }
    }

    if (doiResult.status === 400) {
      const message = brevoErrorMessage(doiResult.body)

      if (/already exist/i.test(message)) {
        const refreshed = await getContact(config.apiKey, email)
        if (
          refreshed &&
          refreshed !== 'lookup_failed' &&
          refreshed.listIds?.includes(config.listId)
        ) {
          return { ok: true, status: 'already_subscribed' }
        }

        const retry = await initiateDoubleOptIn(config, email, redirectionUrl)
        if (retry.ok || doiRequestAccepted(retry.status)) {
          return { ok: true, status: 'confirmation_sent' }
        }
      }
    }

    console.error('[newsletter] Brevo DOI failed:', doiResult.status, doiResult.body)
    return {
      ok: false,
      error: mapBrevoClientError(doiResult.status, doiResult.body, config),
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
