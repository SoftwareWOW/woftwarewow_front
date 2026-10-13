import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { promoDivisionSlugs } from './i18n/division-paths'
import { resolveLocaleFromRequest } from './i18n/locale-from-request'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const promoSlugSet = new Set(promoDivisionSlugs)

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 1 && promoSlugSet.has(segments[0]!)) {
    const locale = resolveLocaleFromRequest(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}/${segments[0]}`
    url.search = search
    return NextResponse.redirect(url, 307)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
