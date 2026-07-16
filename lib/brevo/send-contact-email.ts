const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export type ContactEmailPayload = {
  name: string
  email: string
  interests: string[]
  budget: string
  message: string
}

type SendContactEmailResult =
  | { ok: true; messageId?: string }
  | { ok: false; error: string }

function getRequiredEnv(name: string): string | null {
  const value = process.env[name]?.trim()
  return value || null
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<SendContactEmailResult> {
  const apiKey = getRequiredEnv('BREVO_API_KEY')
  const templateId = getRequiredEnv('BREVO_TEMPLATE_ID')
  const senderEmail = getRequiredEnv('BREVO_SENDER_EMAIL')
  const senderName = getRequiredEnv('BREVO_SENDER_NAME') ?? 'WOW Superagency'
  const recipientEmail = getRequiredEnv('BREVO_CONTACT_RECIPIENT_EMAIL')

  if (!apiKey) {
    return { ok: false, error: 'BREVO_API_KEY is not configured.' }
  }

  if (!templateId) {
    return { ok: false, error: 'BREVO_TEMPLATE_ID is not configured.' }
  }

  if (!senderEmail) {
    return { ok: false, error: 'BREVO_SENDER_EMAIL is not configured.' }
  }

  if (!recipientEmail) {
    return { ok: false, error: 'BREVO_CONTACT_RECIPIENT_EMAIL is not configured.' }
  }

  const parsedTemplateId = Number(templateId)
  if (!Number.isInteger(parsedTemplateId) || parsedTemplateId <= 0) {
    return { ok: false, error: 'BREVO_TEMPLATE_ID must be a valid number.' }
  }

  const interests =
    payload.interests.length > 0 ? payload.interests.join(', ') : 'Not specified'
  const budget = payload.budget.trim() || 'Not specified'
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  })

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
      templateId: parsedTemplateId,
      params: {
        name: payload.name,
        email: payload.email,
        interests,
        budget,
        message: payload.message,
        submittedAt,
      },
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
