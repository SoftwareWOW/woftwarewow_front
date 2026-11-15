import {
  WOW_WEBSITES_MEGA_NAV_CONFIG,
  WOW_WEBSITES_MEGA_NAV_SLUGS,
  getWowWebsitesMegaNavRouteBySlug,
} from '@/data/wowWebsitesMegaNavRoutes'
import { createDivisionMegaNavSlugPage } from '@/lib/divisions/createDivisionMegaNavSlugPage'

const { generateStaticParams, generateMetadata, Page } = createDivisionMegaNavSlugPage({
  config: WOW_WEBSITES_MEGA_NAV_CONFIG,
  segment: 'services',
  getRouteBySlug: getWowWebsitesMegaNavRouteBySlug,
  slugs: WOW_WEBSITES_MEGA_NAV_SLUGS,
})

export { generateStaticParams, generateMetadata }
export default Page