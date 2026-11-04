import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavSolution } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavSolution('product-launch-go-to-market')!

export const CONTENT = buildOfferingPageContent(offering)
