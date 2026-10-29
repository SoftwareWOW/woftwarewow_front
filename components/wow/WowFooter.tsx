'use client'

import FooterTabContent from '@/components/wow/footer/FooterTabContent'
import { footerTextTabs, type FooterTabId } from '@/components/wow/footer/footer-tab-data'
import WowFooterShell from '@/components/wow/footer/WowFooterShell'
import type { Dictionary } from '@/i18n/types'

type WowFooterProps = {
  footer: Dictionary['footer'] & { copyright?: string }
}

export default function WowFooter({ footer }: WowFooterProps) {
  return (
    <WowFooterShell
      tabs={footerTextTabs}
      defaultTabId="ask"
      copyright={footer.copyright ?? '© 2026 WOW Superagency'}
      renderPanel={(tab) => <FooterTabContent tab={tab as FooterTabId} />}
    />
  )
}
