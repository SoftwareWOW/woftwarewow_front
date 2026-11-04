import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavSolution } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavSolution('customer-retention-engagement')!

export const CONTENT = buildOfferingPageContent(offering)
