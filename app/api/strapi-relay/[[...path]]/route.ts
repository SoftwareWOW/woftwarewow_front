import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_STRAPI_URL = 'https://wow.softwarewow.xyz'

function resolveUpstreamBase(): string {
  const direct = process.env.STRAPI_DIRECT_URL?.trim() || process.env.STRAPI_URL?.trim()
  const base = (direct || DEFAULT_STRAPI_URL).replace(/\/$/, '')
  if (base.includes('/api/strapi-relay')) {
    return DEFAULT_STRAPI_URL
  }
  return base
}

const SAFE_PATH = /^[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)*$/i

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path?: string[] }> },
) {
  const { path: segments } = await context.params
  const apiPath = (segments ?? []).join('/')

  if (!apiPath || !SAFE_PATH.test(apiPath)) {
    return NextResponse.json({ error: 'Invalid Strapi path' }, { status: 400 })
  }

  const upstream = resolveUpstreamBase()
  const url = new URL(`/api/${apiPath}`, `${upstream}/`)
  request.nextUrl.searchParams.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  const headers: HeadersInit = { Accept: 'application/json' }
  const token = process.env.STRAPI_API_TOKEN
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  try {
    const response = await fetch(url.toString(), {
      headers,
      cache: 'no-store',
      signal: AbortSignal.timeout(Number(process.env.STRAPI_FETCH_TIMEOUT_MS ?? 25_000)),
    })
    const body = await response.text()
    return new NextResponse(body, {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upstream fetch failed'
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
