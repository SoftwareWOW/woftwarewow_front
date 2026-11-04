import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavService } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavService('local-seo')!

export const CONTENT = buildOfferingPageContent(offering)
