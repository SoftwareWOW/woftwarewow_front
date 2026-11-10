import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavService } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavService('lead-qualification-nurturing')!

export const CONTENT = buildOfferingPageContent(offering)
