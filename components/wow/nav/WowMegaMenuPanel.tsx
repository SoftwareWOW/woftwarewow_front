'use client'

import { useEffect, useMemo, useState } from 'react'
import type { NavigationData, NavigationMenuItem } from './navigation-types'
import WowDetailCard from './WowDetailCard'
import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

type WowMegaMenuPanelProps = {
  item: NavigationMenuItem
  detailPanels: NavigationData['detailPanels']
  onNavigate?: () => void
}

export default function WowMegaMenuPanel({ item, detailPanels, onNavigate }: WowMegaMenuPanelProps) {
  const { desktop } = item
  const allItems = useMemo(() => desktop.columns.flatMap((column) => column.items), [desktop.columns])

  const [selectedId, setSelectedId] = useState(desktop.defaultSelection)

  useEffect(() => {
    setSelectedId(desktop.defaultSelection)
  }, [item.id, desktop.defaultSelection])

  const selectedItem = allItems.find((entry) => entry.id === selectedId) ?? allItems[0]
  const detailPanel =
    (selectedId && detailPanels[selectedId as keyof typeof detailPanels]) ??
    detailPanels.default

  const selectItem = (id: string) => setSelectedId(id)

  return (
    <div
      role="region"
      aria-label={item.label}
      className="animate-mega-menu-in mx-auto mt-2 max-w-[1370px] overflow-hidden rounded-[10px] bg-white dark:bg-dark-200"
      style={{ padding: `${desktop.paddingY}px ${desktop.paddingX}px` }}>
      <div className="flex items-start justify-between">
        {desktop.columns.map((column) => (
          <div key={column.id} className="flex shrink-0 flex-col gap-[7px]">
            {column.title ? (
              <p className="w-[260px] pl-[10px] text-base font-light leading-none text-[#838383]">{column.title}</p>
            ) : (
              <div className="h-4 w-[260px]" aria-hidden />
            )}

            <ul className="flex w-[260px] flex-col gap-[3px]">
              {column.items.map((entry) => (
                <li key={entry.id}>
                  {entry.type === 'division' ? (
                    <WowDivisionItem
                      divisionId={entry.id}
                      href={entry.href}
                      active={selectedId === entry.id}
                      onClick={() => selectItem(entry.id)}
                      onMouseEnter={() => selectItem(entry.id)}
                    />
                  ) : (
                    <WowMenuItem
                      iconId={entry.id}
                      label={entry.label}
                      description={'description' in entry ? entry.description : undefined}
                      href={entry.href}
                      active={selectedId === entry.id}
                      showChevron
                      multilineDescription={'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false}
                      tall={entry.id === 'helpSupport'}
                      onClick={() => selectItem(entry.id)}
                      onMouseEnter={() => selectItem(entry.id)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {detailPanel && (
          <WowDetailCard
            {...detailPanel}
            href={selectedItem?.href}
            onNavigate={onNavigate}
          />
        )}
      </div>
    </div>
  )
}
