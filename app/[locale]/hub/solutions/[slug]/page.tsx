import {
  WOW_HUB_MEGA_NAV_CONFIG,
  WOW_HUB_MEGA_NAV_SLUGS,
  getWowHubMegaNavRouteBySlug,
} from '@/data/wowHubMegaNavRoutes'
import { createDivisionMegaNavSlugPage } from '@/lib/divisions/createDivisionMegaNavSlugPage'

const { generateStaticParams, generateMetadata, Page } = createDivisionMegaNavSlugPage({
  config: WOW_HUB_MEGA_NAV_CONFIG,
  segment: 'solutions',
  getRouteBySlug: getWowHubMegaNavRouteBySlug,
  slugs: WOW_HUB_MEGA_NAV_SLUGS,
})

export { generateStaticParams, generateMetadata }
export default Page