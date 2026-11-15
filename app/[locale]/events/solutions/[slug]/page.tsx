import {
  WOW_EVENTS_MEGA_NAV_CONFIG,
  WOW_EVENTS_MEGA_NAV_SLUGS,
  getWowEventsMegaNavRouteBySlug,
} from '@/data/wowEventsMegaNavRoutes'
import { createDivisionMegaNavSlugPage } from '@/lib/divisions/createDivisionMegaNavSlugPage'

const { generateStaticParams, generateMetadata, Page } = createDivisionMegaNavSlugPage({
  config: WOW_EVENTS_MEGA_NAV_CONFIG,
  segment: 'solutions',
  getRouteBySlug: getWowEventsMegaNavRouteBySlug,
  slugs: WOW_EVENTS_MEGA_NAV_SLUGS,
})

export { generateStaticParams, generateMetadata }
export default Page