import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavService } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavService('content-marketing')!

export const CONTENT = buildOfferingPageContent(offering)
