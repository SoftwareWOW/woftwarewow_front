'use client'

import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import {
  DivisionWatermark,
  getDivisionFooterTabs,
  renderDivisionFooterPanel,
} from '@/components/wow/footer/DivisionFooterContent'
import WowFooterShell from '@/components/wow/footer/WowFooterShell'

type DivisionFooterProps = {
  config: DivisionSiteConfig
}

export default function DivisionFooter({ config }: DivisionFooterProps) {
  const tabs = getDivisionFooterTabs(config)

  return (
    <WowFooterShell
      tabs={tabs}
      defaultTabId="ask"
      tablistLabel={`${config.name} footer sections`}
      copyright={config.copyright}
      watermark={<DivisionWatermark config={config} />}
      renderPanel={(tabId) => renderDivisionFooterPanel(config, tabId)}
    />
  )
}
