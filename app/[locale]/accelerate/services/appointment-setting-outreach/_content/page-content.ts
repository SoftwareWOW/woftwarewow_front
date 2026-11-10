import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavService } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavService('appointment-setting-outreach')!

export const CONTENT = buildOfferingPageContent(offering)
