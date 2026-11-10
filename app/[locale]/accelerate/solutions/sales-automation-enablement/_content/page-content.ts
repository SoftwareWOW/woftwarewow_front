import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavSolution } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavSolution('sales-automation-enablement')!

export const CONTENT = buildOfferingPageContent(offering)
