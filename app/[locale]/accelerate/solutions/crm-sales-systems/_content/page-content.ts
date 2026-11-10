import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavSolution } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavSolution('crm-sales-systems')!

export const CONTENT = buildOfferingPageContent(offering)
