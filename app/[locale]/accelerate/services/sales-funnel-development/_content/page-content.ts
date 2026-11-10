import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavService } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavService('sales-funnel-development')!

export const CONTENT = buildOfferingPageContent(offering)
