import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

function getStrapiImageRemotePatterns(): NonNullable<NextConfig['images']>['remotePatterns'] {
  const hostnames = new Set<string>(['wow.softwarewow.xyz'])

  if (process.env.STRAPI_URL) {
    try {
      hostnames.add(new URL(process.env.STRAPI_URL).hostname)
    } catch {
      // ignore invalid STRAPI_URL
    }
  }

  return [...hostnames].flatMap((hostname) => {
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1'
    return [
      {
        protocol: isLocal ? ('http' as const) : ('https' as const),
        hostname,
        pathname: '/uploads/**',
      },
    ]
  })
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getStrapiImageRemotePatterns(),
  },
}

export default withNextIntl(nextConfig)
