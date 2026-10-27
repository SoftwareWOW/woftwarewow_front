import Faq from '@/components/wow/LandascapComponets/Faq'
import {
  SOFTWAREWOW_FAQS,
  SOFTWAREWOW_SECTION_SHELL,
} from '@/app/[locale]/softwarewow/_components/softwarewow-content'

/** Same layout as websites FAQ; width aligned with division `container`. */
export default function SoftwareRfq() {
  return (
    <Faq
      faqs={[...SOFTWAREWOW_FAQS]}
      sectionClassName={`${SOFTWAREWOW_SECTION_SHELL} relative overflow-hidden`}
      innerClassName="container relative z-10"
    />
  )
}
