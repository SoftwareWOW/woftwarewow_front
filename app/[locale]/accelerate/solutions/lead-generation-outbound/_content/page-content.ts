import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavSolution } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavSolution('lead-generation-outbound')!

export const CONTENT = buildOfferingPageContent(offering)
