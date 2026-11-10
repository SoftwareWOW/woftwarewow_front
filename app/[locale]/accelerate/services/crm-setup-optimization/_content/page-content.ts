import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { getWowAccelerateNavService } from '@/data/wowAccelerateNavContent'

const offering = getWowAccelerateNavService('crm-setup-optimization')!

export const CONTENT = buildOfferingPageContent(offering)
