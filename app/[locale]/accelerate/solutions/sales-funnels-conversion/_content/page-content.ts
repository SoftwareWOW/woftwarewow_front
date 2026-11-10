import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavSolution } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavSolution('sales-funnels-conversion')!

export const CONTENT = buildOfferingPageContent(offering)
