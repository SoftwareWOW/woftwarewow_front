import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavSolution } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavSolution('marketing-performance-optimization')!

export const CONTENT = buildOfferingPageContent(offering)
