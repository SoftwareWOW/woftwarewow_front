export function slugifyEventTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function eventSlugFromHref(href?: string | null): string | null {
  if (!href?.trim()) return null
  const normalized = href.trim().replace(/\/$/, '')
  const match = normalized.match(/\/event(?:\/details)?\/([^/?#]+)/i)
  return match?.[1] ?? null
}

export function resolveEventDetailsHref(href: string | undefined | null, title: string): string {
  const fromHref = eventSlugFromHref(href)
  if (fromHref) {
    return `/event/${fromHref}`
  }
  return `/event/${slugifyEventTitle(title)}`
}
