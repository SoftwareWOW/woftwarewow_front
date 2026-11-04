import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavService } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavService('pay-per-click-advertising')!

export const CONTENT = buildOfferingPageContent(offering)
