import Faq from '@/components/wow/LandascapComponets/Faq'
import { SOFTWAREWOW_FAQS } from '@/app/[locale]/softwarewow/_components/softwarewow-content'

/** Same layout as websites `<Faq faqs={[...WEBSITES_FAQS]} />`. */
export default function SoftwareRfq() {
  return <Faq faqs={[...SOFTWAREWOW_FAQS]} />
}
