import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

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

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getStrapiImageRemotePatterns(),
  },
}

export default withNextIntl(nextConfig)
