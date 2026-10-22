import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import bundleAnalyzer from '@next/bundle-analyzer'
import { getDivisionRedirects, getDivisionRewrites } from './i18n/division-redirects-config'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

/** Strapi hosts allowed for next/image — supports switching STRAPI_URL without editing config. */
const STRAPI_IMAGE_HOSTS = [
  process.env.STRAPI_URL,
  'https://wow.softwarewow.xyz',
  'http://localhost:1337',
  'http://127.0.0.1:1337',
].filter((value): value is string => Boolean(value?.trim()))

function getStrapiImageRemotePatterns(): NonNullable<NextConfig['images']>['remotePatterns'] {
  const seen = new Set<string>()
  const patterns: NonNullable<NextConfig['images']>['remotePatterns'] = []

  for (const strapiUrl of STRAPI_IMAGE_HOSTS) {
    try {
      const parsed = new URL(strapiUrl)
      const key = `${parsed.protocol}//${parsed.hostname}:${parsed.port || (parsed.protocol === 'https:' ? '443' : '80')}`
      if (seen.has(key)) continue
      seen.add(key)

      const isLocal =
        parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1'

      patterns.push({
        protocol: (parsed.protocol.replace(':', '') || (isLocal ? 'http' : 'https')) as
          | 'http'
          | 'https',
        hostname: parsed.hostname,
        ...(parsed.port ? { port: parsed.port } : {}),
        pathname: '/uploads/**',
      })
    } catch {
      // ignore invalid URLs
    }
  }

  return patterns
}

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  {
    key: 'Content-Security-Policy-Report-Only',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://cal.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https: wss:",
      "frame-src 'self' https://app.cal.com https://cal.com",
      "media-src 'self' https: blob:",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getStrapiImageRemotePatterns(),
  },
  async redirects() {
    return getDivisionRedirects()
  },
  async rewrites() {
    return getDivisionRewrites()
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
