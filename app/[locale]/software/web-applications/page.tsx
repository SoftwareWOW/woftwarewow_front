import { permanentRedirect } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

/** Legacy short URL → canonical service route */
export default async function LegacyWebApplicationsRedirect({ params }: Props) {
  const { locale } = await params
  permanentRedirect(`/${locale}/software/services/web-applications`)
}
