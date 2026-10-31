'use client'

import type { DivisionChromeFooter } from '@/components/wow/divisions/division-chrome'
import FooterTabContent from '@/components/wow/footer/FooterTabContent'
import { footerTextTabs, type FooterTabId } from '@/components/wow/footer/footer-tab-data'
import WowFooterShell from '@/components/wow/footer/WowFooterShell'
import type { Dictionary } from '@/i18n/types'

type WowFooterProps = {
  footer: Dictionary['footer'] & { copyright?: string }
  divisionChrome?: DivisionChromeFooter
}

export default function WowFooter({ footer, divisionChrome }: WowFooterProps) {
  const copyright = divisionChrome?.copyright ?? footer.copyright ?? '© 2026 WOW Superagency'

  return (
    <WowFooterShell
      tabs={footerTextTabs}
      defaultTabId="ask"
      copyright={copyright}
      renderPanel={(tab) => (
        <FooterTabContent tab={tab as FooterTabId} divisionChrome={divisionChrome} />
      )}
    />
  )
}
