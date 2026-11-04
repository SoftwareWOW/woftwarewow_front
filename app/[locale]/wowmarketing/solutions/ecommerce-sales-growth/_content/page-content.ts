import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavSolution } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavSolution('ecommerce-sales-growth')!

export const CONTENT = buildOfferingPageContent(offering)
