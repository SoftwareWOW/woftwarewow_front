const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export type ContactEmailPayload = {
  name: string
  email: string
  interests: string[]
  budget: string
  message: string
}

type SendEmailResult =
  | { ok: true; messageId?: string }
  | { ok: false; error: string }

type BrevoTemplateEmailOptions = {
  templateId: number
  to: Array<{ email: string; name: string }>
  params: Record<string, string>
  replyTo?: { email: string; name: string }
}

function getRequiredEnv(name: string): string | null {
  const value = process.env[name]?.trim()
  return value || null
}

function getOptionalEnv(name: string): string | null {
  const value = process.env[name]?.trim()
  return value || null
}

function buildContactParams(payload: ContactEmailPayload) {
  const interests =
    payload.interests.length > 0 ? payload.interests.join(', ') : 'Not specified'
  const budget = payload.budget.trim() || 'Not specified'
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  })

  return {
    name: payload.name,
    email: payload.email,
    interests,
    budget,
    message: payload.message,
    submittedAt,
  }
}

function getBrevoConfig() {
  const apiKey = getRequiredEnv('BREVO_API_KEY')
  const senderEmail = getRequiredEnv('BREVO_SENDER_EMAIL')
  const senderName = getRequiredEnv('BREVO_SENDER_NAME') ?? 'WOW Superagency'
  const recipientEmail = getRequiredEnv('BREVO_CONTACT_RECIPIENT_EMAIL')

  return { apiKey, senderEmail, senderName, recipientEmail }
}

async function sendBrevoTemplateEmail(
  options: BrevoTemplateEmailOptions,
): Promise<SendEmailResult> {
  const { apiKey, senderEmail, senderName } = getBrevoConfig()

  if (!apiKey) {
    return { ok: false, error: 'BREVO_API_KEY is not configured.' }
  }

  if (!senderEmail) {
    return { ok: false, error: 'BREVO_SENDER_EMAIL is not configured.' }
  }

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: senderName,
      },
      to: options.to,
      replyTo: options.replyTo,
      templateId: options.templateId,
      params: options.params,
    }),
  })

  const data = (await response.json().catch(() => null)) as
    | { messageId?: string; code?: string; message?: string }
    | null

  if (!response.ok) {
    const errorMessage =
      data?.message ?? `Brevo API request failed with status ${response.status}.`
    return { ok: false, error: errorMessage }
  }

  return { ok: true, messageId: data?.messageId }
}

export async function sendContactNotificationEmail(
  payload: ContactEmailPayload,
): Promise<SendEmailResult> {
  const templateId = getRequiredEnv('BREVO_TEMPLATE_ID')
  const { recipientEmail, senderName } = getBrevoConfig()

  if (!templateId) {
    return { ok: false, error: 'BREVO_TEMPLATE_ID is not configured.' }
  }

  if (!recipientEmail) {
    return { ok: false, error: 'BREVO_CONTACT_RECIPIENT_EMAIL is not configured.' }
  }

  const parsedTemplateId = Number(templateId)
  if (!Number.isInteger(parsedTemplateId) || parsedTemplateId <= 0) {
    return { ok: false, error: 'BREVO_TEMPLATE_ID must be a valid number.' }
  }

  return sendBrevoTemplateEmail({
    templateId: parsedTemplateId,
    to: [
      {
        email: recipientEmail,
        name: senderName,
      },
    ],
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    params: buildContactParams(payload),
  })
}

export async function sendContactAutoReplyEmail(
  payload: ContactEmailPayload,
): Promise<SendEmailResult> {
  const autoReplyTemplateId = getOptionalEnv('BREVO_AUTO_REPLY_TEMPLATE_ID')
  const { senderName } = getBrevoConfig()

  if (!autoReplyTemplateId) {
    return { ok: true }
  }

  const parsedTemplateId = Number(autoReplyTemplateId)
  if (!Number.isInteger(parsedTemplateId) || parsedTemplateId <= 0) {
    return { ok: false, error: 'BREVO_AUTO_REPLY_TEMPLATE_ID must be a valid number.' }
  }

  const params = buildContactParams(payload)

  return sendBrevoTemplateEmail({
    templateId: parsedTemplateId,
    to: [
      {
        email: payload.email,
        name: payload.name,
      },
    ],
    params: {
      name: params.name,
      interests: params.interests,
      budget: params.budget,
      submittedAt: params.submittedAt,
      senderName,
    },
  })
}

/** @deprecated Use sendContactNotificationEmail instead */
export async function sendContactEmail(payload: ContactEmailPayload): Promise<SendEmailResult> {
  return sendContactNotificationEmail(payload)
}
