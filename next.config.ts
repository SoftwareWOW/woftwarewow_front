import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

function getStrapiImageRemotePatterns(): NonNullable<NextConfig['images']>['remotePatterns'] {
  const strapiUrl = process.env.STRAPI_URL
  if (!strapiUrl) return []

  try {
    const parsed = new URL(strapiUrl)
    const isLocal = parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1'

    return [
      {
        protocol: (parsed.protocol.replace(':', '') || (isLocal ? 'http' : 'https')) as 'http' | 'https',
        hostname: parsed.hostname,
        pathname: '/uploads/**',
      },
    ]
  } catch {
    return []
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getStrapiImageRemotePatterns(),
  },
}

export default withNextIntl(nextConfig)
