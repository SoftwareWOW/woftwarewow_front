/** Canonical public site origin (no trailing slash). */
export function getSiteUrl(): string {
  return process.env.SITE_URL?.replace(/\/$/, '') ?? 'https://www.wow.onl'
}
