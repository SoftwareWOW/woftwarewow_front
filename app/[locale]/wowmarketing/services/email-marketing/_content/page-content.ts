import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavService } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavService('email-marketing')!

export const CONTENT = buildOfferingPageContent(offering)
