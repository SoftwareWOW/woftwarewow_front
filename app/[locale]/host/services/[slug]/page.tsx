import {
  WOW_HOST_MEGA_NAV_CONFIG,
  WOW_HOST_MEGA_NAV_SLUGS,
  getWowHostMegaNavRouteBySlug,
} from '@/data/wowHostMegaNavRoutes'
import { createDivisionMegaNavSlugPage } from '@/lib/divisions/createDivisionMegaNavSlugPage'

const { generateStaticParams, generateMetadata, Page } = createDivisionMegaNavSlugPage({
  config: WOW_HOST_MEGA_NAV_CONFIG,
  segment: 'services',
  getRouteBySlug: getWowHostMegaNavRouteBySlug,
  slugs: WOW_HOST_MEGA_NAV_SLUGS,
})

export { generateStaticParams, generateMetadata }
export default Page