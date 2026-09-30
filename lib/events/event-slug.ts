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

export function resolveEventSlug(event: {
  slug?: string | null
  href?: string | null
  title: string
}): string {
  const explicit = event.slug?.trim()
  if (explicit) return explicit
  const fromHref = eventSlugFromHref(event.href)
  if (fromHref) return fromHref
  return slugifyEventTitle(event.title)
}

export function resolveEventDetailsHref(
  href: string | undefined | null,
  title: string,
  slug?: string | null,
): string {
  return `/event/${resolveEventSlug({ slug, href, title })}`
}
