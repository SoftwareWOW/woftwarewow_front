import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavService } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavService('lead-generation')!

export const CONTENT = buildOfferingPageContent(offering)
