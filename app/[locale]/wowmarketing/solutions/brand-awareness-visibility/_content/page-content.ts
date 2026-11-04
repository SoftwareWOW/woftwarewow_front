import { buildOfferingPageContent } from '@/app/[locale]/wowmarketing/_lib/seedContentFromNav'
import { getWowMarketingNavSolution } from '@/data/wowMarketingNavContent'

const offering = getWowMarketingNavSolution('brand-awareness-visibility')!

export const CONTENT = buildOfferingPageContent(offering)
