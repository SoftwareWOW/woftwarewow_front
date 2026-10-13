const RELAY_SUFFIX = '/api/strapi-relay'

export function isStrapiRelayBase(baseUrl: string): boolean {
  return baseUrl.replace(/\/$/, '').endsWith(RELAY_SUFFIX)
}

/** Build request URL for direct Strapi or same-origin `/api/strapi-relay` proxy. */
export function buildStrapiRequestUrl(
  baseUrl: string,
  apiPath: string,
  searchParams: URLSearchParams,
): string {
  const base = baseUrl.replace(/\/$/, '')
  const query = searchParams.toString()

  if (isStrapiRelayBase(base)) {
    return `${base}/${apiPath}${query ? `?${query}` : ''}`
  }

  const url = new URL(`/api/${apiPath}`, `${base}/`)
  searchParams.forEach((value, key) => {
    url.searchParams.set(key, value)
  })
  return url.toString()
}
