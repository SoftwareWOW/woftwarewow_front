import type { Locale } from '@/i18n/config'
import { redirect } from '@/i18n/navigation'

/** Header links go to individual industry pages; no hub CMS entry. */
const DEFAULT_INDUSTRY_PATH = '/industries/professional-services'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function IndustriesIndexPage({ params }: Props) {
  const { locale } = await params
  redirect({ href: DEFAULT_INDUSTRY_PATH, locale: locale as Locale })
}
