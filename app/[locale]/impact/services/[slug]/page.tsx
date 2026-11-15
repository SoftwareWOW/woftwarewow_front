import {
  WOW_IMPACT_MEGA_NAV_CONFIG,
  WOW_IMPACT_MEGA_NAV_SLUGS,
  getWowImpactMegaNavRouteBySlug,
} from '@/data/wowImpactMegaNavRoutes'
import { createDivisionMegaNavSlugPage } from '@/lib/divisions/createDivisionMegaNavSlugPage'

const { generateStaticParams, generateMetadata, Page } = createDivisionMegaNavSlugPage({
  config: WOW_IMPACT_MEGA_NAV_CONFIG,
  segment: 'services',
  getRouteBySlug: getWowImpactMegaNavRouteBySlug,
  slugs: WOW_IMPACT_MEGA_NAV_SLUGS,
})

export { generateStaticParams, generateMetadata }
export default Page